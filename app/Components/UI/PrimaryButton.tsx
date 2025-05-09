'use client';
import React, { useEffect } from "react";
import Link from "next/link";
import {usePathname} from 'next/navigation';
import styles from '@styles/component.module.scss';

interface PrimaryButtonProps {
    href: string;
    title: string;
    children: React.ReactNode;
}

export default function PrimaryButton(props: PrimaryButtonProps) {
    const pathname = usePathname();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
            <Link className={styles.sitePrimaryButton} href={props.href} title={props.title} aria-label={props.title}>
                {props.children}
            </Link>

    )
}
