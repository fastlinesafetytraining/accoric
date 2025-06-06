"use client";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "@styles/pages/accoricDashcard.module.scss";

export default function WhoIsItFor() {
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        gsap.from(".accoricDashcard__whoIsItFor h2", {
            scrollTrigger: {
                trigger: ".accoricDashcard__whoIsItFor h2",
                start: "top 50%",
                end: "bottom 50%",
                scrub: true,
            },
            opacity: 0,
            x: -200,
            duration: 1,
        });
    }, []);

	return (
		<section id="whoIsItFor" className={`${styles.accoricDashcard__whoIsItFor} splineAnimation`}>
			<div className={styles.accoricDashcard__sticky}>
                <div className={styles.accoricDashcard__content}>
                    <h2>Who is it For?</h2>
                    <p>
                        Whether you&apos;re a union tradesperson, foreman, or apprentice,
                        Personal DashCard™ is your personal safeguard against missed renewals and
                        costly job delays.
                    </p>
                </div>
			</div>
		</section>
	);
}
