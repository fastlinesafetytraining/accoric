import React from "react";
import Spline from "@splinetool/react-spline/next";
import { Metadata } from "next";
import styles from "@/app/styles/accoricDashcard.module.scss";

export const metadata: Metadata = {
  title: "Accoric Dashcard | Accoric",
  description: "Accoric Dashcard",
};

export default function Page() {
  return (
    <main className={styles.accoricDashcard}>
      <span className={styles.accoricDashcard__header__span}>
        Coming Soon...
      </span>
      <h1 className={styles.accoricDashcard__header__h1}>Accoric Product</h1>
      <Spline
        className={styles.accoricDashcard__spline}
        scene="https://prod.spline.design/KURjrdKU-bE194jq/scene.splinecode"
      />
    </main>
  );
}
