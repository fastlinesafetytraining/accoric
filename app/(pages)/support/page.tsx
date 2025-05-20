import React from "react";
import styles from "@styles/pages/support.module.scss";
import { Metadata } from "next";
import Link from "next/link";
import { supportMenu } from "@/libs/utils/const/routes";

export const metadata: Metadata = {
  title: "Support | Accoric",
  description: "Support Center for Accoric Management, a comprehensive guide to help you start working with our products as quickly as possible.",
};

export default function SupportPage() {
    return (
        <main className={styles.supportPage}>
                <div className={styles.supportPage__header}>
                    <h1>Support Center</h1>
                    <p>
                        Welcome to our support center. Here you&apos;ll find comprehensive guides and documentation to help you start working with our products as quickly as possible.
                    </p>
                </div>
                <div className={styles.supportPage__content}>
                    <h2>Explore Topics for Accoric Management</h2>
                    <ul>
                        {supportMenu[0].sectionItems.map((route, index) => (
                            <li key={index}>
                                <Link href={route.link}>{route.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
        </main>
    );
}
