import Image from "next/image";
import { ContactCTA, ContactCards } from "@components/UI";
import { benefits } from "./page-data/benefits";
import styles from "@styles/aboutUs.module.scss";

export const metadata = {
  title: "About Us | Accoric",
  description:
    "Learn more about Accoric and our mission to simplify certification tracking while ensuring maximum security and efficiency.",
};

export default function AboutUs() {
  return (
    <main className={styles.aboutUs}>
      <section
        aria-label="About Us Hero Section"
        className={styles.aboutUs__hero}
      >
        <div className={styles.aboutUs__hero__content}>
          <h1>About Us</h1>
          <p className={styles.aboutUs__hero__subtitle}>
            Simplifying certification tracking while ensuring maximum security
            and efficiency
          </p>
          <div className={styles.aboutUs__hero__stats}>
            <div className={styles.aboutUs__hero__stat}>
              <span className={styles.aboutUs__hero__stat__number}>500+</span>
              <span className={styles.aboutUs__hero__stat__label}>
                Companies Served
              </span>
            </div>
            <div className={styles.aboutUs__hero__stat}>
              <span className={styles.aboutUs__hero__stat__number}>10k+</span>
              <span className={styles.aboutUs__hero__stat__label}>
                Certifications Tracked
              </span>
            </div>
            <div className={styles.aboutUs__hero__stat}>
              <span className={styles.aboutUs__hero__stat__number}>99%</span>
              <span className={styles.aboutUs__hero__stat__label}>
                Client Satisfaction
              </span>
            </div>
          </div>
        </div>
        <div className={styles.aboutUs__hero__background} />
      </section>
      <div className={styles.aboutUs__content}>
        <section
          className={styles.section_highlight}
          aria-label="About Accoric"
        >
          <div className={styles.aboutUs__bio}>
            <div
              className={styles.aboutUs__bio__imageContainer}
              aria-label="Accoric Bio Image Container"
            >
              <Image
                src="/Images/accoric-about-us-bio.webp"
                width={1120}
                height={1120}
                alt="Accoric showing its inovative Accoric Management software to construction company"
              />
            </div>
            <div className={styles.aboutUs__bio__content}>
              <h2>
                <span className={styles.site_highlight_title}>Who</span> we are?
              </h2>
              <h3>
                We offer
                <b>
                  <i> Quick Onboaring </i>
                </b>
                because we do it for you
              </h3>
              <p>
                <b>
                  When your purchase Accoric Management, We want you to actually
                  use it.
                </b>
              </p>
              <p>
                You purchase Accoric Management to save yourself time tracking
                your employees and their certifications because your plate is
                full with other tasks like financing, scheduling, and deadlines.
                So, when would you have time to onboard hundreds of pictures of
                certificcations and employee data onto your Accoric Management
                account?
              </p>
              <p>
                <b>
                  We want you up and running ASAP, so you can quickly get back
                  to work.
                </b>
              </p>
              <p>
                At Accoric, we&apos;re dedicated to revolutionizing how
                organizations manage their certifications and compliance
                requirements. Our goal is to simplify certification tracking
                while ensuring maximum security and efficiency.
              </p>
            </div>
          </div>
        </section>
        <section aria-label="Why Choose Us?">
          <div
            className={styles.aboutUs__benefits}
            aria-label="Ease of Use for Certification Tracking"
          >
            <div className={styles.aboutUs__benefits__stickyContainer}>
              <h2>
                <span className={styles.site_highlight_title}>Why</span> Choose
                Us?
              </h2>
              <div className={styles.aboutUs__benefits__container}>
                {benefits.map((benefit, index) => (
                  <div className={styles.aboutUs__benefits__item} key={index}>
                    {benefit.icon}
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description}</p>
                  </div>
                ))}
                </div>
            </div>
          </div>
        </section>
        <section
          className={styles.section_highlight}
          aria-label="Accoric Promise"
        >
          <div className={styles.aboutUs__promise}>
            <div className={styles.aboutUs__promise__content}>
              <h2>
                Our <span className={styles.site_highlight_title}>Promise</span>
              </h2>
              <p>
                At Accoric, we&apos;re dedicated to revolutionizing how
                organizations manage their certifications and compliance
                requirements. Our goal is to simplify certification tracking
                while ensuring maximum security and efficiency.
              </p>
              <p>
                Our promise is to provide you with the best possible service and
                support. We will help you get started with your Accoric
                Management account in no time.
              </p>
            </div>
            <div
              className={styles.aboutUs__promise__imageContainer}
              aria-label="Accoric Promise Image Container"
            >
              <Image
                src="/Images/trustworthy-software-for-construction-companies.webp"
                width={1120}
                height={1120}
                alt="Accoric has a promise to its customers, to provide the best possible service and support."
              />
            </div>
          </div>
        </section>
        <section aria-label="Contact information">
          <ContactCards />
        </section>
        <ContactCTA />
      </div>
    </main>
  );
}
