"use client"
import React from 'react'
import Image from 'next/image'
import { motion, useScroll } from "motion/react"
import styles from "@styles/pages/personalDashcard.module.scss";
import useParallax from '@/Components/hook/useParallax';

export default function AccessAnywhereSec() {
  return (
    <section id="accessFromAnywhere" className={styles.accessAnywhereSec}>
      <motion.div initial="hidden" whileInView="visible" className={styles.accessAnywhereSec__content}>
        <motion.div className={styles.accessAnywhereSec__content__text}>
          <h2>Just One Tap to Access Anywhere</h2>
          <p>
            With the <span>Personal Dashcard</span>, you can access your card information from anywhere, anytime.
          </p>
          <p>
            Using NFC technology allows you to use the back of a NFC enabled phone to access your card information (Internet connection required).
          </p>
        </motion.div>
        <motion.div>
          <Image src="/images/checking-current-certifications.webp" width={600} height={600} alt="access anywhere" className={styles.accessAnywhereSec__img} />
        </motion.div>
			</motion.div>
		</section>
	);
}
