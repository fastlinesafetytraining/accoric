import Image from "next/image";
import styles from "@styles/component.module.scss";
import { PrimaryButton } from ".";

export default function ContactCTA() {	
	return (
		<div className={styles.contactCTA}>
          <div className={styles.contactCTA__imageContainer}>
            <Image
              className={styles.contactCTA__imageContainer__image}
              src="/Images/accoric-trust-promise.webp"
              alt="Call to action image"
              width={391}
              height={150}
            />
          </div>
          <div className={styles.contactCTA__content}>
            <h2>Ready to stop dealing with paper documents?</h2>
            <p>
              Throw away the messy binder of paper and finally know who has what
              certification.
            </p>
          </div>
          <PrimaryButton href="/pricing" title="Get Started">
            Get Started
          </PrimaryButton>
		</div>
	);
}
