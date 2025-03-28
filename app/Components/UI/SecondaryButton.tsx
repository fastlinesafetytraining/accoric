import Link from "next/link";
import React from "react"
import styles from '@Styles/component.module.scss';

interface SecondaryButtonProps {
	href: string;
	title: string;
	children: React.ReactNode;
}
export default function SecondaryButton(props: SecondaryButtonProps) {
	return (
		<Link className={styles.siteSecondaryButton} aria-label={props.title} title={props.title} href={props.href}>{props.children}</Link>
	)
}