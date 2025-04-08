'use client';

import Image from "next/image";
import pastClients from "@/app/Utils/const/pastClient";
import styles from '@Styles/component.module.scss';


const PastClients = () => {

    return (
        <div className={styles.clientContainer}>
            {pastClients.map((client, index) => (
                <div aria-label={client.name} key={index}>
                    <Image width={225} height={225} className={styles.clientImage} src={client.image} alt={client.name} />
                </div>
            ))}
        </div>
    );
};

export default PastClients;
