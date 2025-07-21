"use client"
import React from 'react'
import Image from 'next/image'
import useParallax from '@/Components/hook/useParallax';
import { useScroll, motion } from 'motion/react';
import styles from "@styles/pages/personalDashcard.module.scss";

export default function YourCardSec() {
  const { scrollYProgress } = useScroll();
	const y = useParallax(scrollYProgress, 50);
  const y2 = useParallax(scrollYProgress, 200);
  return (
    <section id="yourCard" className={styles.yourCardSec}>
      <div className={styles.yourCardSec__content}>
        <motion.div className={styles.yourCardSec__content__text} style={{ y }}>
          <h2>Your Personal Dashcard™</h2>
          <p>
            The Personal Dashcard™ is the household tool in total in certification management.
            </p>
            <p>
            <b>For the first time, this is a tool thats built for you and owned by you. </b>
          </p>
          <p>
            With NFC and QR technology, you can easily scan and share your training certifications with anyone, anywhere.
          </p>
        </motion.div>
        <motion.div transition={{ duration: 1.5 }} style={{ y: y2 }}>
          <Image src="/Images/personal-dashcard/your-personal-dashcard.webp" width={600} height={600} alt="your card" className={styles.yourCardSec__content__img} />
        </motion.div>
      </div>
    </section>
  )
}
