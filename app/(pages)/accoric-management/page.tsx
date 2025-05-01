import React from "react";
import Image from "next/image";
import styles from "@styles/accoricManagement.module.scss";
import { VideoPlayer, ContactCTA, FAQ } from "@components/UI";
import { Features, SyncDashcard, faq } from "./pageData";

export const metadata = {
  title: "Accoric Management",
  description: "Accoric Management",
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
            <h2>Accoric Management</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Architecto dolor laboriosam cumque exercitationem consectetur
              repudiandae tempore quo vel, consequatur est vitae neque eaque!
              Aliquam provident repudiandae odio nihil vitae eligendi.
            </p>
          </div>
          <Image
            width={910}
            height={745}
            className={styles.accoricManagement__content__1__image}
            alt="A mockup example of accoric management on a desktop"
            src="/Images/accoric-desktop-mockup.webp"
          />
          <div className={styles.accoricManagement__content__1__text}>
            <h2>Accoric Management</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Architecto dolor laboriosam cumque exercitationem consectetur
              repudiandae tempore quo vel, consequatur est vitae neque eaque!
              Aliquam provident repudiandae odio nihil vitae eligendi.
            </p>
          </div>
        </section>
        <Features />
        <section className={styles.accoricManagement__content__2}>
          <Image
            width={645}
            height={400}
            src="/Images/accoric-management-tablet-view.webp"
            alt="A mockup example of accoric management on a tablet device"
          />
          <div className={styles.accoricManagement__content__2__text}>
            <h2>Accoric Management</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              aliquam dicta culpa reiciendis odio quasi accusantium laudantium
              quisquam in, reprehenderit nulla, animi error eius dolor, tenetur
              ipsam architecto commodi quos?
            </p>
          </div>
        </section>
        <section className={styles.accoricManagement__video}>
          <h2>Never miss a certification deadline again</h2>
          <p>
            Save time and money by automating your certification reminders.
            <br />A solution to make sure that you fleet is always compliant and
            reduce project fallbacks
          </p>
          <VideoPlayer
            ariaLabel="A video showing expired certification liability"
            src="/Videos/expired-certification-liability.mp4"
          />
        </section>
        <SyncDashcard />
        <ContactCTA />
        <FAQ items={faq} />
      </main>
  );
}
