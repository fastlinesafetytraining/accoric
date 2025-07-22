"use client"
import React, {useRef} from 'react'
import Image from 'next/image'
import { motion, useScroll } from "motion/react"
import styles from "@styles/pages/personalDashcard.module.scss";
import useParallax from '@/Components/hook/useParallax';

export default function AlwaysSyncSec() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });

  return (
    <section ref={ref} id="alwaysSync" className={styles.alwaysSyncSec}>
      <motion.div transition={{ duration: 0.5 }} className={styles.alwaysSyncSec__content}>
        <motion.div transition={{ duration: 1.5 }} className={styles.alwaysSyncSec__content__text}>
          <h2>Always know that your card will be updated in realtime</h2>
          <p>
            With the Accoric App you can always know that once you have a new certificate, it will be linked to your card in realtime.
          </p>
        </motion.div>
        <motion.div transition={{ duration: 1.5 }}>
          <Image src="/images/personal-dashcard/your-personal-dashcard.webp" width={600} height={600} className={styles.alwaysSyncSec__content__img} alt="always sync" />
        </motion.div>
      </motion.div>
    </section>
  )
}
