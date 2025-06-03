"use client";
import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import styles from "@styles/accoricManagement.module.scss";
import { LottieComponent } from "@components/UI";
import { nfcLottie } from "@/public/lottie";

export default function SyncDashcard() {
  const boxRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.fromTo(
      boxRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top bottom-=200px",
          end: "50px",
          scrub: 0.3,
        },
      }
    );
    gsap.fromTo(
      ".oshaCard",
      {
        opacity: 0,
        x: "-50%",
      },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top bottom-=300px",
          end: "50px",
          scrub: 0.3,
        },
      }
    );
    gsap.fromTo(
      ".nfcCard",
      {
        opacity: 0,
        x: "50%",
      },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top bottom-=300px",
          end: "50px",
          scrub: 0.3,
        },
      }
    );
  });

  return (
    <section ref={boxRef} className={styles.accoricManagement__content__3}>
      <div className={styles.accoricManagement__content__3__sticky}>
        <h2>Sync Straight to your DashCard</h2>
        <p>
          Create a professional profile for your company by equipping each worker with an Accoric NFC DashCard branded with your company logo.
        </p>
        <p>
          Each DashCard uses NFC technology. Scannable by any smartphone, an employees&apos; profile pages on Accoric Management are paired with each worker&apos;s individual DashCard. Making certifications and other documentation available on-site when the card is scanned.
        </p>
        <div className={styles.accoricManagement__content__3__content}>
          <Image
            width={350}
            height={200}
            className={`${styles.accoricManagement__content__3__content__image1} oshaCard`}
            src="/Images/accoric-dashcard-example.webp"
            alt="A mockup example of accoric's dashcard"
          />
          <LottieComponent
            className={styles.accoricManagement__content__3__content__lottie}
            animationData={nfcLottie}
            loop={true}
            ariaLabel="NFC Animation"
          />
          <Image
            width={250}
            height={505}
            id="nfcCard"
            className={`${styles.accoricManagement__content__3__content__image2} nfcCard`}
            src="/Images/dashcard-app-preview.webp"
            alt="A mockup example of accoric management on a mobile device"
          />
        </div>

      </div>
    </section>
  );
}
