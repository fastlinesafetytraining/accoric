import Image from "next/image";
import pastClients from "@/libs/utils/const/pastClient";
import styles from '@styles/component.module.scss';
import { StaticImageData } from "next/image";


const PastClients = () => {
    return (
        <div className={styles.clientContainer}>
            {pastClients.map((client: { name: string; image: StaticImageData; width: number; height: number }, index: number) => (
                <div aria-label={client.name} key={index}>
                    <Image width={client.width} height={client.height} className={styles.clientImage} src={client.image} alt={client.name} />
                </div>
            ))}
        </div>
    );
};

export default PastClients;
