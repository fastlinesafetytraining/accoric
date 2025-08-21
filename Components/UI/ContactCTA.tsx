import Image from "next/image";
import { SiteButton } from ".";
import { LuSend } from "react-icons/lu";
import styles from "@styles/component.module.scss";

export default function ContactCTA() {	
	return (
		<div className={styles.contactCTA}>
          <div className={styles.contactCTA__imageContainer}>
            <Image
              className={styles.contactCTA__imageContainer__image}
              src="/images/accoric-trust-promise.webp"
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
          <SiteButton type="primary" href="/personal-dashcard#pricing" title="Get Started" icon={<LuSend />} iconPosition="right">
            Get Started
          </SiteButton>
		</div>
	);
}
