import Image from "next/image";
import { Flex, Divider, Row, Col } from "antd";
import { LottieComponent } from "@Components/UI";
import { MailOutlined, PhoneOutlined, ClockCircleOutlined } from "@ant-design/icons";
import { easeOfUseLottie, quickSetupLottie, simplisticLottie } from "@/public/lottie/index";
import styles from "@Styles/aboutUs.module.scss";

export const metadata = {
  title: "About Us | Accoric",
  description:
    "Learn more about Accoric and our mission to simplify certification tracking while ensuring maximum security and efficiency.",
};

export default function AboutUs() {
  return (
    <div className={`${styles.aboutUs} ${styles.page}`}>
      <section aria-label="About Us Hero Section">
        <div className={styles.aboutUs__hero}>
          <h1>About Us</h1>
		  <Divider />	
          <p>
            At Accoric, we&apos;re dedicated to revolutionizing how
            organizations manage their certifications and compliance
            requirements. Our goal is to simplify certification tracking while
            ensuring maximum security and efficiency.
          </p>
        </div>
      </section>
      <section aria-label="Contact information">
        <Row
          justify="space-evenly"
          align="stretch"
          gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          wrap={false}
          style={{ width: "100%", textAlign: "center" }}
        >
          <Col span={8}>
            <div className={styles.quickContactCard}>
              <div>
                <MailOutlined />
                <h2>Email Us</h2>
              </div>
              <Divider />
              <div>
                <div>
                  <h3>Technical Help (Accoric Management):</h3>
                  <a href="mailto:techsupport@accoric.com">
                    techsupport@accoric.com
                  </a>
                </div>
                <div>
                  <h3>Technical Help(Accoric DashCard):</h3>
                  <a href="mailto:dash@accoric.com">dash@accoric.com</a>
                </div>
                <div>
                  <h3>Sales/General Inquiry:</h3>
                  <a href="mailto:info@accoric.com">info@accoric.com</a>
                </div>
              </div>
            </div>
          </Col>
          <Col span={8}>
            <div className={styles.quickContactCard}>
              <div>
                <PhoneOutlined rotate={90} />
                <h2>Call Us</h2>
              </div>
              <Divider />
              <div>
                <div>
                  <h3>Technical Help(Accoric Management):</h3>

                  <a href="tel:6312004720">(631) 200-4720</a>
                </div>
                <div>
                  <h3>Technical Help(Accoric Management):</h3>

                  <a href="tel:6312001051">(631) 200-1051</a>
                </div>
                <div>
                  <h3>Sales/General Inquiry:</h3>

                  <a href="tel:5162004720">(516) 200-4720</a>
                </div>
              </div>
            </div>
          </Col>
          <Col span={8}>
            <div className={styles.quickContactCard}>
              <div>
                <ClockCircleOutlined />
                <h2>Hours Of Operations</h2>
              </div>
              <Divider />
              <div>
                <div>
                  <h3>Monday-Friday:</h3>
                </div>
                <p>9:00AM - 5:00PM EDT</p>
              </div>
            </div>
          </Col>
        </Row>
      </section>
      <section aria-label="About Accoric" className={styles.aboutUs__bio}>
        <Flex justify="space-evenly" align="center">
          <div
            className={styles.imageContainer}
            aria-label="Accoric Bio Image Container"
          >
            <Image
              src="/Images/accoric-about-us-bio.webp"
              width={1120}
              height={1120}
              alt="Accoric showing its inovative Accoric Management software to construction company"
            />
          </div>
          <div className="w-1/3">
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
              your employees and their certifications because your plate is full
              with other tasks like financing, scheduling, and deadlines. So,
              when would you have time to onboard hundreds of pictures of
              certificcations and employee data onto your Accoric Management
              account?
            </p>
            <p>
              <b>
                We want you up and running ASAP, so you can quickly get back to
                work.
              </b>
            </p>
          </div>
        </Flex>
      </section>
      <section aria-label="Why Choose Us?">
        <h2>
          <span className={styles.site_highlight_title}>Why</span> Choose Us?
        </h2>
        <div
          className={styles.aboutUs__benefit}
          aria-label="Ease of Use for Certification Tracking"
        >
          <div className={styles.aboutUs__benefit__item}>
            <LottieComponent
              ariaLabel="Ease of Use Lottie Animation"
              animationData={easeOfUseLottie}
              loop={true}
            />
            <h3>Ease Of Use</h3>
            <p>
              Accoric Management is designed to be easy to use. We want you to be able to use it without any training.
            </p>
          </div>

          <div className={styles.aboutUs__benefit__item}>
            <LottieComponent
              ariaLabel="Quick Setup Lottie Animation"
              animationData={quickSetupLottie}
              loop={true}
            />
            <h3>Quick Onboarding</h3>
            <p>
              Our onboarding process is designed to be quick and easy. We will
              help you get started with your Accoric Management account in no
              time.
            </p>
          </div>
          <div className={styles.aboutUs__benefit__item}>
            <LottieComponent
              ariaLabel="Simplicity Lottie Animation"
              animationData={simplisticLottie}
              loop={true}
            />
            <h3>Simplicity</h3>
            <p>
              Simple User Interface designed to be simple and easy to use. We want you to be able to use it without any training.
            </p>
          </div>
        </div>
      </section>
	    <section aria-label="Accoric Promise" className={styles.aboutUs__promise}>
        <div className={styles.aboutUs__promise__container}>

          <div className={styles.aboutUs__promise__text}>
            <h2>
              Our <span className={styles.site_highlight_title}>Promise</span>
            </h2>
            <p>
				At Accoric, we're dedicated to revolutionizing how organizations manage their certifications and compliance requirements. Our goal is to simplify certification tracking while ensuring maximum security and efficiency.
            </p>
			<p>
				Our promise is to provide you with the best possible service and support. We will help you get started with your Accoric Management account in no time.
			</p>
          </div>
		  <div
            className={styles.aboutUs__promise__image}
            aria-label="Accoric Promise Image Container"
          >
            <Image
              src="/Images/accoric-trust-promise.webp"
              width={1120}
              height={1120}
              alt="Accoric has a promise to its customers, to provide the best possible service and support."
            />
          </div>
        </div>
      </section>
    </div>
  );
}
