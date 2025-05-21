import React from 'react'
import Link from 'next/link'
import styles from '@styles/component.module.scss'

interface SiteButtonProps {
    children: React.ReactNode;
    className?: string;
    href: string;
    title: string;
    type: 'primary' | 'secondary';
	  icon?: React.ReactNode;
}

export default function SiteButton(props: SiteButtonProps) {
const buttonClass = props.type === 'primary' ? styles['siteButton--primary'] : styles['siteButton--secondary'];
    
  return (
    <Link
			className={`${styles.siteButton} ${buttonClass} ${props.className || ""}`}
			href={props.href}
			title={props.title}
			aria-label={props.title}
		>
			{props.icon}
			{props.children}
		</Link>
  )
}
