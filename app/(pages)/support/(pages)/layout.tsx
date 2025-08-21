import React, { Suspense } from "react";
import { Divider } from "antd";
import { SupportSideMenu } from "@/Components/UI";
import styles from "@styles/pages/support.module.scss";
import Loading from "./loading";

export default function SupportPage({ children }: { children: React.ReactNode }) {
    return (
        <main className={styles.support}>
            <div className={styles.support__container}>
                <SupportSideMenu />
                <article className={styles.support__content}>
                    <Suspense fallback={<Loading />}>
                        {children}
                    </Suspense>
                    <Divider />
                    <p style={{ textAlign: "center" }}><span style={{ color: "var(--global-accent-color)", fontWeight: "bold" }}>Need more help?</span> Email <a href="mailto:support@accoric.com">support@accoric.com</a> &mdash; we&apos;ve got you covered.</p>
                </article>
            </div>
        </main>
    );
}
