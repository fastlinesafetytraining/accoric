import React from "react";
import { PricingForm, FAQ, PastClients } from "@components/UI";
import { TbSquareRoundedCheckFilled } from "react-icons/tb";
import { includedInAllSubscriptions, faqItems } from "./page-data";
import styles from "@styles/pricing.module.scss";

export default function Page() {
  return (
    <main className={styles.pricing}> 
      <section className={styles.pricing__header}>
        <h1>Pricing</h1>
        <p>
          We offer a <span>range of pricing</span> options to suit your needs.
        </p>
        <p>Please contact us to discuss your requirements.</p>
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
