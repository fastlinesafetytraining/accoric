import React from "react";
import { SupportSideMenu } from "@/app/Components/UI";
import styles from "@styles/support.module.scss";

export default function SupportPage({ children }: { children: React.ReactNode }) {
    return (
        <main className={styles.support}>
            <div className={styles.support__container}>
                <SupportSideMenu />
                <article className={styles.support__content}>
                    {children}
                </article>
            </div>
        </main>
    );
}
