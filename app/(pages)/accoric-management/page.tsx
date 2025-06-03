import React from "react";
import Image from "next/image";
import styles from "@styles/pages/accoricManagement.module.scss";
import { VideoPlayer, ContactCTA, FAQ, PastClients } from "@components/UI";
import { Features, SyncDashcard, faq } from "./pageData";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accoric Management Certification Tracking Software | Accoric",
  description: "Accoric Management is a certification tracking software that helps you manage your employees' certifications, training, and more.",
};

export default function Page() {

  return (
      <main className={styles.accoricManagement}>
        <section className={styles.accoricManagement__header}>
          <h1>Accoric Management</h1>
          <p>
            A management system for your business.
            <br /> Track your employees certifications, training, and more.
          </p>
        </section>
        <section className={styles.accoricManagement__content__1}>
          <div className={styles.accoricManagement__content__1__text}>
            <h2>Involved in your company&apos;s compliance</h2>
            <p>
              From digitizing documents and creating your account for you, to reminding you of certification
              expirations, we have you covered. We also help ensure everyone has what they need while on the job.
            </p>
          <h2>Accoric Management</h2>
          <p>
            Centralizes your workforce&apos;s certifications, training, and more. Offers real-time certification verification with DashCards, streamlines renewal reminders with custom report generation, and provides valuable analytics via spreadsheet reports to identify potential gaps in training.
          </p>
          </div>
          <Image
            width={910}
            height={745}
            className={styles.accoricManagement__content__1__image}
            alt="A mockup example of accoric management on a desktop"
            src="/Images/accoric-desktop-mockup.webp"
          />          
        </section>
        <section className={styles.accoricManagement__pastClients}>
          <h2>Join the many companies that have trusted us to manage their workforce</h2>
          <PastClients />
        </section>
        <Features />
        <section className={styles.accoricManagement__content__2}>
          <Image
            width={766}
            height={534}
            src="/Images/accoric-management-mockup.webp"
            alt="A mockup example of accoric management on a tablet device"
          />
          <div className={styles.accoricManagement__content__2__text}>
            <h2>A Snapshot of your workforce</h2>
            <p>
              Easily monitor your employees&apos; certifications with a user-friendly dashboard. Access, edit, and issue certifications directly from the dashboard.
            </p>
            <h3>Wondering if your employees possess the required certifications for their roles?</h3>
            <p>
              Utilize the dashboard&apos;s search feature to quickly identify employees with the necessary certifications for their work.
            </p>
          </div>
        </section>
        <section className={styles.accoricManagement__video}>
          <h2>Never miss a certification deadline again</h2>
          <p>
            Save time and money by automating your certification reminders.
            <br />A solution to make sure that your fleet is always compliant and
            reduce project fallbacks
          </p>
          <VideoPlayer
            ariaLabel="A video showing expired certification liability"
            src="/Videos/expired-certification-liability.mp4"
          />
        </section>
        <SyncDashcard />
        <FAQ items={faq} />
        <ContactCTA />
      </main>
  );
}
