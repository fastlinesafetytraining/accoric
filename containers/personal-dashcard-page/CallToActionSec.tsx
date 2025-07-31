import React from "react";
import Image from "next/image";
import styles from "@styles/pages/personalDashcard.module.scss";
import { Divider } from "antd";

export default function CallToActionSec() {
  return (
    <section id="register" className={styles.callToActionSec}>
      <div className={styles.callToActionSec__content}>
        <h2 className={styles.callToActionSec__content__heading}>
          Ready to get started with your DASHcard?
        </h2>
        <Divider size="small" />
        <p className={styles.callToActionSec__content__paragraph}>
          Download the Accoric Personal DASHcard app now to get started. <br />
          Available on the App Store and Google Play.
        </p>
        <span className={styles.callToActionSec__content__paragraph__note}>
          (Click the image below to be redirected to the App Store or Google Play)
        </span>
        <div className={styles.callToActionSec__content__buttonContainer}>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <Image src="/svg/apple-app-store-download.svg" alt="Download Accoric App on the Apple App Store" width={200} height={200} />
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <Image src="/svg/android-play-store-download.svg" alt="Get the Accoric App on Google Play" width={200} height={200} />
          </a>
        </div>
      </div>
    </section>
  );
}
