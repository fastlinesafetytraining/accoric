import React from "react";
import styles from "@Styles/component.module.scss";

interface VideoPlayerProps extends React.HTMLAttributes<HTMLVideoElement> {
    src: string;
    ariaLabel: string;
}

export default function VideoPlayer({src, ariaLabel}: VideoPlayerProps) {

    return (    
        <>
            <video muted autoPlay loop className={styles.videoPlayer} src={src} aria-label={ariaLabel}/>
        </>
    )
} 
