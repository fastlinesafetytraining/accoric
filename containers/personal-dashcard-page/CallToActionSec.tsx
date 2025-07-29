"use client";
import { SiteButton } from "@/Components/UI";
import React from "react";
import styles from "@styles/pages/personalDashcard.module.scss";

export default function CallToActionSec() {
  return (
    <section id="register" className={styles.callToActionSec}>
      <div className={styles.callToActionSec__content}>
        <h2 className={styles.callToActionSec__content__heading}>
          Ready to get your Personal DASHcard™?
        </h2>
        <p className={styles.callToActionSec__content__subHeading}>
          Combine all your certifications into one smart card and never miss an expiration again.
        </p>
        <SiteButton type="primary" href="/signup" title="Get Started">Get Started</SiteButton>
      </div>
    </section>
  );
}
