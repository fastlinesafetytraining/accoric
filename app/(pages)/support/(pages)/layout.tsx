import React, { Suspense } from "react";
import { SupportSideMenu } from "@/app/Components/UI";
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
                </article>
            </div>
        </main>
    );
}
