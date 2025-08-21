import React from "react";
import { Toaster } from "react-hot-toast";
import styles from "@styles/pages/accoricManagement.module.scss";
import { DotPatternBackground, FAQ } from "@components/UI";
import { FeaturesSec, SyncDashcardSec, faq, HeroSec, VideoSec, Content2Sec, IntroSec, PastClientSec, PricingSec } from "@/containers/accoric-management-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accoric Management Certification Tracking Software | Accoric",
  description: "Accoric Management is a certification tracking software that helps you manage your employees' certifications, training, and more.",
};

export default function Page() {

  return (
      <main className={styles.accoricManagement}>
        <Toaster />
        <DotPatternBackground />
        <HeroSec />
        <IntroSec />
        <PastClientSec />
        <FeaturesSec />
        <Content2Sec />
        <VideoSec />
        <SyncDashcardSec />
        <PricingSec />
        <FAQ items={faq} />
      </main>
  );
}
