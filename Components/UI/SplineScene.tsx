"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Spline from "@splinetool/react-spline";
import hasWebGlSupport from "@/libs/utils/checkWebGl";

/**
 * SplineScene Component
 * 
 * A responsive component that renders either a Spline 3D scene or a fallback image
 * based on WebGL support. This component automatically detects WebGL capability
 * and gracefully degrades to a static image when WebGL is not available.
 * 
 * @component
 * @example
 * ```tsx
 * <SplineScene
 *   sceneId="https://prod.spline.design/your-scene-id/scene.splinecode"
 *   fallbackImage="/path/to/fallback-image.webp"
 *   alt="Description of the scene"
 *   width={600}
 *   height={600}
 *   className="custom-styles"
 * />
 * ```
 * 
 * @param {Object} props - Component props
 * @param {string} props.sceneId - The Spline scene URL to render when WebGL is supported
 * @param {string} props.fallbackImage - The image path to display when WebGL is not supported
 * @param {string} props.alt - Alt text for the fallback image (accessibility)
 * @param {number} props.width - Width of the fallback image in pixels
 * @param {number} props.height - Height of the fallback image in pixels
 * @param {string} [props.className] - Optional CSS class name for styling the container
 * 
 * @returns {JSX.Element} A div containing either a Spline scene or fallback image
 */
export default function SplineScene({ 
    sceneId, 
    className, 
    alt, 
    fallbackImage, 
    width, 
    height 
}: { 
    sceneId: string, 
    className?: string, 
    alt: string, 
    fallbackImage: string, 
    width: number, 
    height: number 
}) {
    const [isWebGLSupported, setIsWebGLSupported] = useState(false);
    const [isLoading, setLoading] = useState(true);
    
    useEffect(() => {
        setIsWebGLSupported(hasWebGlSupport());
        setLoading(false);
    }, []);
    
    if (isLoading) {
        return (
            <div className="w-full h-full flex items-center justify-center">Loading...</div>
        );
    }
  return (
    <div className={className}>
        {isWebGLSupported ? (
            <Spline scene={sceneId} />
        ) : ( 
            <Image
                src={fallbackImage ?? ""}
                alt={alt ?? "No WebGL Support"}
                width={width ?? 400}
                height={height ?? 400}
            />
        )}
    </div>
  )
}
