import Image from "next/image";
import { ContactCTA, ContactCards, CompanyStats } from "@components/UI";
import { benefits } from "./page-data/benefits";
import styles from "@styles/pages/aboutUs.module.scss";

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
            Simplifying certification tracking while ensuring<br/> maximum security
            and efficiency
          </p>
          <CompanyStats />
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
              <p>
                At <span>Accoric</span>, we have developed a solution specifically for companies with a large workforce. Our goal is to provide a straightforward way to keep track of your fleet&apos; certifications, helping you avoid unexpected expirations.
              </p>
              <p>
                We are <span>committed</span> to revolutionizing how companies manage their certifications and compliance requirements. Our focus is on simplifying certification tracking while ensuring maximum security and efficiency.
              </p>
              <p>
                Our team of <span>experienced professionals</span> is ready to assist you in managing your certifications and compliance effectively.
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
                    {benefit.description}
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
                Our promise is to provide you with the <span>best possible service and
                support.</span> We will help you get started with your Accoric
                Management account in no time.
              </p>
              <p>
                We will also provide you with a dashboard to view your certifications and compliance requirements.
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
