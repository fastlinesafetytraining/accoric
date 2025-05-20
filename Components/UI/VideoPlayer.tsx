import React from "react";
import styles from "@styles/component.module.scss";

interface VideoPlayerProps extends React.HTMLAttributes<HTMLVideoElement> {
    src: string;
    ariaLabel: string;
    className?: string;
}

export default function VideoPlayer({src, ariaLabel, className }: VideoPlayerProps) {

    return (    
        <>
            <video muted autoPlay loop className={`${styles.videoPlayer} ${className}`} src={src} aria-label={ariaLabel}/>
        </>
    )
} 
