import Link from "next/link";
import styles from '@Styles/component.module.scss';

interface PrimaryButtonProps {
    href: string;
    title: string;
    children: React.ReactNode;
}

export default function PrimaryButton(props: PrimaryButtonProps) {
    return (
            <Link className={styles.sitePrimaryButton} href={props.href} title={props.title} aria-label={props.title}>
                {props.children}
            </Link>

    )
}
