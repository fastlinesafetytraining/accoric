import React from 'react'
import Link from 'next/link'
import styles from '@styles/component.module.scss'

/**
 * A button component that can be used for navigation with optional icon support.
 * 
 * @component
 * @example
 * ```tsx
 * <SiteButton 
 *   href="/about"
 *   title="About Us"
 *   type="primary"
 *   icon={<Icon />}
 *   iconPosition="left"
 * >
 *   Click Me
 * </SiteButton>
 * ```
 */

/**
 * SiteButtonProps interface
 * 
 * Props:
 * - `label`: the text displayed on the button.
 */

interface SiteButtonProps {
    /** The content to be displayed inside the button */
    children: React.ReactNode;
    /** Additional CSS class names to apply to the button */
    className?: string;
    /** The URL the button should navigate to */
    href: string;
    /** The title/aria-label for accessibility */
    title: string;
    /** The visual style variant of the button */
    type: 'primary' | 'secondary';
    /** Optional icon to display alongside the button text */
    icon?: React.ReactNode;
    /** Position of the icon relative to the text if there is one provided */
    iconPosition?: 'left' | 'right';
}

export default function SiteButton(props: SiteButtonProps) {
const buttonClass = props.type === 'primary' ? styles['siteButton--primary'] : styles['siteButton--secondary'];
  return (
    <Link
			className={`${styles.siteButton} ${buttonClass} ${props.className || ""}`}
			href={props.href}
			title={props.title}
			aria-label={props.title}
			style={{
				flexDirection: props.iconPosition === 'left' ? 'row' : 'row-reverse'
			}}
		>
			<span className={styles.siteButton__icon}>{props.icon}</span>
			<span className={styles.siteButton__text}>{props.children}</span>
		</Link>
  )
}
