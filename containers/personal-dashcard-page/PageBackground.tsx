"use client";
import React, { useMemo } from "react";
import styles from "@styles/pages/personalDashcard.module.scss";

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
  // Vertical line matrix settings
  const lineWidth = 2; // px
  const numCols = 40;

  // Generate the vertical line matrix as a memoized array
  const lines = useMemo(() => {
    const arr = [];
    for (let col = 0; col < numCols; col++) {
      arr.push(
        <div
          key={`line-${col}`}
          className={styles.verticalLine}
          style={{
            gridColumn: col + 1,
            gridRow: 1,
            width: lineWidth,
            height: "100%",
            background: "currentColor",
            justifySelf: "center",
          }}
        />
      );
    }
    return arr;
  }, [numCols, lineWidth]);

  // Overlay random shapes
  const numShapes = 20;
  const overlayShapes = useMemo(() => {
    return Array.from({ length: numShapes }).map((_, index) => {
      const shapeType = randomShape();
      const shapeColor = randomColor();
      const shapeY = Math.random() * 100 + "%";
      const shapeX = Math.random() * 100 + "%";
      const shapeSize = Math.random() * 40 + 20; // 20-60px
      const shapeOpacity = Math.random() * 0.5 + 0.5; // 0.5-1
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
      if (shapeType === "circle") {
        shapeStyle = { ...shapeStyle, borderRadius: "50%" };
      } else if (shapeType === "square") {
        shapeStyle = { ...shapeStyle, borderRadius: `${Math.random() * 0.3 * shapeSize}px` };
      } else if (shapeType === "triangle") {
        shapeStyle = {
          ...shapeStyle,
          width: 0,
          height: 0,
          background: "none",
          borderLeft: `${shapeSize / 2}px solid transparent`,
          borderRight: `${shapeSize / 2}px solid transparent`,
          borderBottom: `${shapeSize}px solid ${shapeColor}`,
          borderRadius: '5px',
        } as React.CSSProperties;
      }
      return (
        <div
          key={`shape-${index}`}
          className={styles.parallaxShape}
          style={shapeStyle}
        />
      );
    });
  }, [numShapes]);

  return (
    <div className={styles.dotMatrixBackground}>
      <div className={styles.verticalLineGrid}>{lines}</div>
      {overlayShapes}
    </div>
  );
}
