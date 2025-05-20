import React from "react";
import Spline from "@splinetool/react-spline/next";
import { ContactCTA, VideoPlayer } from "@components/UI";
import { Metadata } from "next";
import styles from "@styles/pages/accoricDashcard.module.scss";

export const metadata: Metadata = {
  title: "Accoric Dashcard | Accoric",
  description: "Accoric Dashcard",
};

export default function Page() {
  return (
    <main className={styles.accoricDashcard}>
      <h1 className={styles.accoricDashcard__header__h1}>Accoric Dashcard</h1>
      <span className={styles.accoricDashcard__header__span}>
        Forget the cluttered wallet
      </span>
      <Spline
        className={styles.accoricDashcard__spline}
        scene="https://prod.spline.design/KURjrdKU-bE194jq/scene.splinecode"
      />
      <section>
        <h2>Carry your certifications everywhere — literally</h2>
        <VideoPlayer
          className={styles.accoricDashcard__videoPlayer}
          src="/Videos/accoric-app-on-construction-beam.mp4"
          ariaLabel="Accoric Dashcard Video Commercial on a beam"
        />
      </section>
      <section>
        <h2>All your certifications - One card</h2>
      </section>
      <section>
        <h2>Share your certifications</h2>
      </section>
      <section>
        <h2>Pair your dashcard with Accoric Management</h2>
      </section>
      <ContactCTA />
    </main>
  );
}
