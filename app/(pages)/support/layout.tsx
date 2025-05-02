import React from "react";
import Link from "next/link";
import supportMenu from "./[slug]/support-menu";
import styles from "@styles/support.module.scss";

export default function SupportPage({ children }: { children: React.ReactNode }) {
    return (
        <main className={styles.support}>
            <div className={styles.support__container}>
                <aside className={styles.support__sidebar}>
                    <nav className={styles.support__nav}>
                        {supportMenu.map((section, index) => (
                            <div key={index}>
                                <h3>{section.sectionTitle}</h3>
                                <ul>
                                    {section.sectionItems.map((item, itemIndex) => (
                                        <li key={itemIndex}>
                                            <Link href={item.link}>{item.title}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </nav>
                </aside>
                
                <article className={styles.support__content}>
                    {children}
                </article>
            </div>
        </main>
    );
}
