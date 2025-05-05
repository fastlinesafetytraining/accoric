import React from "react";
import styles from "@styles/support.module.scss";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support | Accoric",
  description: "Support for Accoric Management",
};

export default function SupportPage() {
    return (
        <main className={styles.support}>
            <div className={styles.support__container}>
                <div className={styles.support__content}>
                    <h1>Support Center</h1>
                    <p className={styles.support__intro}>
                        Welcome to our support center. Here you&apos;ll find comprehensive guides and documentation to help you start working with our products as quickly as possible.
                    </p>

                    <section id="account-setup" className={styles.support__section}>
                        <h2>Account Setup</h2>
                        <p>Learn how to set up your account and get started with our platform.</p>
                    </section>

                    <section id="first-steps" className={styles.support__section}>
                        <h2>First Steps</h2>
                        <p>Essential information to get you up and running with our products.</p>
                    </section>

                    <section id="basic-navigation" className={styles.support__section}>
                        <h2>Basic Navigation</h2>
                        <p>Understanding the interface and basic navigation of our platform.</p>
                    </section>

                    <section id="accoric-management" className={styles.support__section}>
                        <h2>Accoric Management</h2>
                        <p>Detailed guides for using Accoric Management effectively.</p>
                    </section>

                    <section id="accoric-dashcard" className={styles.support__section}>
                        <h2>Accoric DashCard</h2>
                        <p>Everything you need to know about Accoric DashCard.</p>
                    </section>

                    <section id="safety-library" className={styles.support__section}>
                        <h2>Safety Library</h2>
                        <p>Access and manage your safety documentation and resources.</p>
                    </section>

                    <section id="password-reset" className={styles.support__section}>
                        <h2>Password Reset</h2>
                        <p>Step-by-step guide for resetting your password.</p>
                    </section>

                    <section id="data-import" className={styles.support__section}>
                        <h2>Data Import</h2>
                        <p>Learn how to import your data into our platform.</p>
                    </section>

                    <section id="user-management" className={styles.support__section}>
                        <h2>User Management</h2>
                        <p>Managing users and permissions in your account.</p>
                    </section>
                </div>
            </div>
        </main>
    );
}
