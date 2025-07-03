import React from "react";
import { Anchor } from "antd";
import styles from "@styles/pages/accoricDashcard.module.scss";

export default function SideBarAnchor() {
    const items = [
        {
            key: "1",
            href: "#introduction",
            title: "Introduction",
        },
        {
            key: "2",
            href: "#features",
            title: "Features",
        },
        {
            key: "3",
            href: "#whoIsItFor",
            title: "Who Is It For?",
        },
        {
            key: "4",
            href: "#pricing",
            title: "Pricing",
        },
        {
            key: "5",
            href: "#register",
            title: "Register",
        },
        {
            key: "6",
            href: "#conclusion",
            title: "Conclusion",
        },
    ];
    
  return (
    <div className={styles.accoricDashcard__anchor}>
        <Anchor items={items} />
    </div>
  )
}
