import Image from "next/image";
import React from "react";
import { Avatar } from "antd";
import { PastClients, PrimaryButton, SecondaryButton } from "../Components/UI";
import { PhoneOutlined, MailOutlined, ClockCircleOutlined } from "@ant-design/icons";
import styles from "@Styles/home.module.scss";

export const metadata = {
  title: "Accoric - Construction Certificate Management Software",
  description: "All Your CERTIFICATES Stored Into One Location",
};

export default function Home() {
  return (
    <div className={styles.homePage}>
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
              <span className={styles.dashcardTitle__highlight}>Dash</span>card
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
            </div>
          </div>
        </div>
      </section>

      <section className={styles.accoricManagementSection}>
        <div className={styles.accoricManagementContainer}>
          <div className={styles.accoricManagementContent}>
            <h2>
              <span className={styles.accoricManagementTitle__highlight}>
                Accoric
              </span>{" "}
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

      <section className={styles.testimonialsSection}>
        <div className={styles.testimonialsContainer}>
          <div className={styles.testimonial}>
            <Avatar size={"large"} src="/Images/related-services-logo.webp"/>
            <h3>Justin A.</h3>
            <p>Accoric Management has empowered Related Services LLC to <b>proactively manage employee credentials</b> and <b>certification status</b>, a significant improvement. We highly recommend it.</p>
          </div>
          <div className={styles.testimonial}>
            <Avatar alt="Champions Speacialty" size={"large"} src="Images/champion-scc-logo.webp"/>
            <h3>Amel H.</h3>
            <p>
              Accoric Management has significantly improved Realted Services LLC's ability to manage employee credentials and track certifications, making it easier to stay ahead. We wholeheartly endorse it for any business seeking better organization.
            </p>
          </div>
          <div className={styles.testimonial}>
            <Avatar alt="Millbrook Fire" size={"large"} src="/Images/millbrook-logo.webp"/>
            <h3>Nick D.</h3>
            <p>
              With Accoric Management's unparalleled safety management and proactive approach to certifications, we've experienced significantly downtime prevention. It's an investment that <b>pays for itself in the first month!</b> 
            </p>
          </div>
        </div>
        <div className={styles.testimonialTitle}>
        <Image
            width={150}
            height={150}
            src="/Images/rating-stars.webp"
            alt="Rating Stars"
            className={styles.testimonial_stars}
          />
          <h2>Testimonials</h2>
          <p>Discover why organizations across various industries trust Accoric to manage their employees certification and deliver tangible results.</p>
          <Image  width={300} height={100} src="/svg/our-collaboration-solution.svg" alt="Collaboration" />
        </div>
      </section>

      <section className={styles.contactSection}>
        <h2>Get in Touch</h2>
        <p>Open to all questions and inquiries. We are available to help you with your needs</p>
        <div className={styles.contactMethodContainer}>
          <div className={styles.contactMethod}>
            <ClockCircleOutlined className={styles.contactMethodIcon} />
            <h3>Hours of Operation</h3>
            <br/>
            <h4>Weekdays</h4>
            <p>8:30AM - 4:30PM EDT</p>
            <br/>
            <h4>Weekends</h4>
            <p>Closed</p>
          </div>
          <div className={styles.contactMethod}>
            <PhoneOutlined rotate={90} className={styles.contactMethodIcon} />
            <h3>Call Us</h3>
            <br/>
            <h4>For Accoric Management Technical Support</h4>
            <p>+1 (516) 200-4720</p>
            <br/>
            <h4>For Dashcard Support</h4>
            <p>+1 (516) 200-4720</p>
            <br/>
            <h4>For Sales/General Inquiry</h4>
            <p>+1 (516) 200-4720</p>
          </div>
          <div className={styles.contactMethod}>
            <MailOutlined className={styles.contactMethodIcon} />
            <h3>Email Us</h3>
            <br/>
            <h4>For Accoric Management Technical Support</h4>
            <p>techsupport@accoric.com</p>
            <br/>
            <h4>For Dashcard Support</h4>
            <p>dash@accoric.com</p>
            <br/>
            <h4>For Sales/General Inquiry</h4>
            <p>info@accoric.com</p>
          </div>
        </div>
      </section>
    </div>
  );
}
