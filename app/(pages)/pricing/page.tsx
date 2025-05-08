import React from "react";
import { Toaster } from "react-hot-toast";
import { PricingForm, FAQ, PastClients } from "@components/UI";
import { TbSquareRoundedCheckFilled } from "react-icons/tb";
import { includedInAllSubscriptions, faqItems } from "./page-data";
import styles from "@styles/pricing.module.scss";

export const metadata = {
  title: "Pricing | Accoric",
  description:
    "Learn more about Accoric and our mission to simplify certification tracking while ensuring maximum security and efficiency.",
};

export default function Page() {
  return (
    <main className={styles.pricing}>
      <Toaster />
      <section className={styles.pricing__header}>
        <h1>Pricing</h1>
        <p>
          We offer a <span>range of pricing</span> options to suit your needs.
        </p>
        <p>Please contact us to discuss your requirements.</p>
        <div className={styles.pricing__header__stats}>
            <div className={styles.pricing__header__stat}>
              <span className={styles.pricing__header__stat__number}>500+</span>
              <span className={styles.pricing__header__stat__label}>
                Companies Served
              </span>
            </div>
            <div className={styles.pricing__header__stat}>
              <span className={styles.pricing__header__stat__number}>10k+</span>
              <span className={styles.pricing__header__stat__label}>
                Certifications Tracked
              </span>
            </div>
            <div className={styles.pricing__header__stat}>
              <span className={styles.pricing__header__stat__number}>99%</span>
              <span className={styles.pricing__header__stat__label}>
                Client Satisfaction
              </span>
            </div>
          </div>
      </section>
      <div className={styles.pricing__content}>
      <section className={styles.pricing__includedList}>
          <div className={styles.pricing__includedList__container}>
            <h2>Whats Included</h2>
            <ul className={styles.pricing__includedList__container__list}>
              {includedInAllSubscriptions.map((item, index) => (
                <li key={index}>
                  <i>
                    <TbSquareRoundedCheckFilled />
                  </i>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className={styles.pricing__formContainer}>
          <PricingForm />
        </section>
        <section className={styles.pricing__clients}>
        <h2>Start tracking your workers&apos; <span>certifications</span></h2>
          <p>
            Plus, we upload all of your data and create your account for you!
            All you do is sign in.
          </p>
          <PastClients />
        </section>
        <section className={styles.pricing__faq}>
          <FAQ items={faqItems} />
        </section>
      </div>
    </main>
  );
}
