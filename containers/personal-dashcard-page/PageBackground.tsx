"use client";
import React, { useRef } from "react";
import { motion, useScroll } from "motion/react";
import styles from "@styles/pages/personalDashcard.module.scss";
import useParallax from "@/Components/hook/useParallax";

// Helper to generate a random color
const randomColor = () => {
  const colors = [
    "#FF6B6B", // red
    "#6BCB77", // green
    "#4D96FF", // blue
    "#FFD93D", // yellow
    "#FF6F91", // pink
    "#6B6BFF", // purple
    "#FFB86B", // orange
    "#43E6FC", // cyan
    "#B8FF6B", // lime
    "#FFFFFF"  // white
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

// Helper to pick a random shape
const randomShape = () => {
  const shapes = ["circle", "square", "triangle"];
  return shapes[Math.floor(Math.random() * shapes.length)];
};

export default function PageBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const random = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
  };

  const CreateShape = ({ index }: { index: number }) => {
    const shapeType = randomShape();
    const shapeColor = randomColor();
    const shapeY = random(0, 100) + "%";
    const shapeX = random(0, 100) + "%";
    const shapeSize = random(20, 60);
    const shapeOpacity = random(0.5, 1);
    const parallaxDistance = random(30, 120);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, parallaxDistance);

    let shapeStyle: React.CSSProperties = {
      width: shapeSize,
      height: shapeSize,
      background: shapeType !== "triangle" ? shapeColor : "none",
      opacity: shapeOpacity,
      position: "absolute",
      top: shapeY,
      left: shapeX,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1,
    };

    let shapeContent;
    if (shapeType === "circle") {
      shapeStyle.borderRadius = "50%";
      shapeContent = null;
    } else if (shapeType === "square") {
      shapeStyle.borderRadius = random(0, 0.3) * shapeSize; // some squares with rounded corners
      shapeContent = null;
    } else if (shapeType === "triangle") {
      // Triangle using CSS borders
      shapeStyle = {
        ...shapeStyle,
        width: 0,
        height: 0,
        background: "none",
        borderLeft: `${shapeSize / 2}px solid transparent`,
        borderRight: `${shapeSize / 2}px solid transparent`,
        borderBottom: `${shapeSize}px solid ${shapeColor}`,
        borderRadius: 0,
      };
      shapeContent = null;
    }

    return (
      <motion.div
        key={index}
        className="parallax-shape"
        transition={{ duration: 1.5 }}
        style={{ ...shapeStyle, y }}
      >
        {shapeContent}
      </motion.div>
    );
  };

  return (
    <motion.div ref={ref} className={styles.pageBackground} style={{ position: "absolute", inset: 0, zIndex: -1 }}>
      {Array.from({ length: 25 }).map((_, index) => (
        <CreateShape key={index} index={index} />
      ))}
    </motion.div>
  );
}
