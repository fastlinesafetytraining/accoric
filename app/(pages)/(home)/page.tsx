import Image from "next/image";
import React from "react";
import { Avatar } from "antd";
import {
  PastClients,
  PrimaryButton,
  SecondaryButton,
  ContactCTA,
  ContactCards,
} from "@Components/UI";
import { FaArrowUp } from "react-icons/fa";
import styles from "@Styles/home.module.scss";
export const metadata = {
  title: "Construction Certificate Management Software | Accoric",
  description: "All Your CERTIFICATES Stored Into One Location",
};

export default function Home() {
  return (
    <main className={styles.homePage}>
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <h1>
              <span className={styles.heroTitle__first}>All Your </span>
              <br />
              <span className={styles.heroTitle__highlight}>CERTIFICATES </span>
              <br />
              <span className={styles.heroTitle__last}>
                Stored Into One Location
              </span>
            </h1>
            <div className={styles.heroButtons}>
              <PrimaryButton title="See Pricing for Dashcard" href="#">
                See Pricing
              </PrimaryButton>
              <SecondaryButton
                title="Learn more about accoric's Dashcard and their benefit "
                href="#"
              >
                Learn More
              </SecondaryButton>
            </div>
          </div>
          <div className={styles.heroImage}>
            <Image
              width={449}
              height={500}
              src="/accoric-dashcard-mockup.png"
              alt="Accoric Dashcard Link Showing all certifications on a Phone Mockup"
            />
          </div>
        </div>
      </section>
      <section className={styles.clientsSection}>
        <h2>Trusted by leading companies</h2>
        <p>
          We are proud to be trusted by leading companies in the construction
          industry.
        </p>
        <PastClients />
      </section>

      <section className={styles.dashcardSection}>
        <div className={styles.dashcardContainer}>
          <div className={styles.dashcardImage}>
            <Image
              width={600}
              height={600}
              src="/Images/accoric-dashcard-sample.webp"
              alt="Accoric Management Software being used on Laptop mockup"
            />
          </div>
          <div className={styles.dashcardContent}>
            <h2>
              <span className={styles.headingHighlight}>Dash</span>card
            </h2>
            <p>All Your Certifications. One Card.</p>
            <div className={styles.dashcardFeatures}>
              <h3>Key Capabilities</h3>
              <div className={styles.dashcardFeature}>
                <h4>Certifications Digitized</h4>
                <p>
                  We are proud to be trusted by leading companies around the
                  world.
                </p>
              </div>
              <div className={styles.dashcardFeature}>
                <h4>Expiration Date Monitoring</h4>
                <p>
                  We are proud to be trusted by leading companies around the
                  world.
                </p>
              </div>
              <div className={styles.dashcardFeature}>
                <h4>Employee ID Badging</h4>
                <p>
                  We are proud to be trusted by leading companies around the
                  world.
                </p>
              </div>
              <div className={styles.dashcardFeature}>
                <h4>Employee ID Badging</h4>
                <p>
                  We are proud to be trusted by leading companies around the
                  world.
                </p>
              </div>
              <a href="#">
                Learn More <FaArrowUp rotate={45} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.accoricManagementSection}>
        <div className={styles.accoricManagementContainer}>
          <div className={styles.accoricManagementContent}>
            <h2>
              <span className={styles.headingHighlight}>Accoric</span>
              <br />
              Management
            </h2>
            <p>
              We are proud to be trusted by leading companies around the world.
            </p>
            <div className={styles.accoricManagementFeatures}>
              <h3>Key Capabilities</h3>
              <div className={styles.accoricManagementFeature}>
                <h4>Certifications Digitized</h4>
                <p>
                  We are proud to be trusted by leading companies around the
                  world.
                </p>
              </div>
              <div className={styles.accoricManagementFeature}>
                <h4>Expiration Date Monitoring</h4>
                <p>
                  We are proud to be trusted by leading companies around the
                  world.
                </p>
              </div>
              <div className={styles.accoricManagementFeature}>
                <h4>Employee ID Badging</h4>
                <p>
                  We are proud to be trusted by leading companies around the
                  world.
                </p>
              </div>
              <div className={styles.accoricManagementFeature}>
                <h4>Employee ID Badging</h4>
                <p>
                  We are proud to be trusted by leading companies around the
                  world.
                </p>
              </div>
              <a href="#">
                Learn More <FaArrowUp rotate={45} />
              </a>
            </div>
          </div>
          <div className={styles.accoricManagementImage}>
            <Image
              width={600}
              height={600}
              src="/Images/accoric-management-sample.webp"
              alt="Accoric Management Software being used on Laptop mockup"
            />
          </div>
        </div>
      </section>

      <section className={styles.aboutAccoricSection}>
        <h2>
          About <span className={styles.headingHighlight}>Accoric</span>
        </h2>
        <div className={styles.aboutAccoricContainer}>
          <div className={styles.aboutAccoricContent}>
            <p>
              Accoric is dedicated to revolutionizing construction certification
              tracking and personnel management. Founded on the principles of
              efficiency, accuracy, and security, we understand the unique
              challenges faced by the construction industry in maintaining
              compliance and managing a skilled workforce.
            </p>
            <p>
              Our platform is designed to streamline these critical processes,
              providing a centralized solution for tracking certifications,
              managing employee information, and ensuring project readiness. We
              empower construction companies to reduce administrative burdens,
              minimize risks associated with expired credentials, and ultimately
              focus on building success.
            </p>
          </div>
          <div className={styles.aboutAccoricImageContainer}>
            <Image
              width={600}
              height={600}
              src="/Images/commercial-supervisor-using-accoric.webp"
              alt="Commercial supervisor using accoric management software on his phone"
              className={styles.aboutAccoricImage_large}
            />
            <div className={styles.feature__one}>
              <p>Advance Scheduling</p>
            </div>
            <div className={styles.feature__two}>
              <p>Certificate Tracking</p>
            </div>
            <div className={styles.feature__three}>
              <p>Improved Efficiency</p>
            </div>
            <Image
              width={768}
              height={432}
              src="/Images/checking-current-certifications.webp"
              alt="Checking current certifications using accoric NFC Dashcard"
              className={styles.aboutAccoricImage_small}
            />
          </div>
        </div>
      </section>

      <section className={styles.testimonialsSection}>
        <div className={styles.testimonialsContainer}>
          <div className={styles.testimonial}>
            <div className={styles.testimonial__author}>
              <h3>Justin A.</h3>
            </div>
            <em className={styles.testimonial__quote}>
              Accoric Management has empowered Related Services LLC to{" "}
              <b>proactively manage employee credentials</b> and{" "}
              <b>certification status</b>, a significant improvement. We highly
              recommend it.
            </em>
          </div>
          <div className={styles.testimonial}>
            <div className={styles.testimonial__author}>
              <Avatar
                alt="Champions Speacialty"
                size={"large"}
                src="Images/client-logos/champion-scc-logo.webp"
              />
              <h3>Amel H.</h3>
            </div>
            <em className={styles.testimonial__quote}>
              Accoric Management&apos;s capabilities have enabled Champion Painting&apos;s
              management team to bid and{" "}
              <b>pre-plan projects more efficiently</b> with{" "}
              <b>easy access to all employee training credentials</b>.
            </em>
          </div>
          <div className={styles.testimonial}>
            <div className={styles.testimonial__author}>
              <Avatar
                alt="Millbrook Fire"
                size={"large"}
                src="/Images/client-logos/millbrook-logo.webp"
              />
              <h3>Nick D.</h3>
            </div>
            <em className={styles.testimonial__quote}>
              With Accoric Management&apos;s unparalleled safety management and
              proactive approach to certifications, we&apos;ve experienced
              significantly downtime prevention. It&apos;s an investment that{" "}
              <b>pays for itself in the first month!</b>
            </em>
          </div>
        </div>
        <div className={styles.testimonialContent}>
          <Image
            width={150}
            height={150}
            src="/Images/rating-stars.webp"
            alt="Rating Stars"
            className={styles.testimonial_stars}
          />
          <h2>Testimonials</h2>
          <p>
            Discover why organizations across various industries trust Accoric
            to manage their employees certification and deliver tangible
            results.
          </p>
          <Image
            width={300}
            height={100}
            src="/svg/our-collaboration-solution.svg"
            alt="Collaboration"
          />
        </div>
      </section>

      <section aria-label="Contact Information">
        <ContactCards />
      </section>
      <ContactCTA />
    </main>
  );
}
