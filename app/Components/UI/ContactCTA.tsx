import Link from "next/link";
import { Flex } from "antd";
import styles from "@Styles/component.module.scss";

export default function ContactCTA() {
	return (
		<>
			<Flex justify="space-evenly" align="center" className={styles.contactCTA}>
				<h2 className={styles.contactCTA__title}>Request a Demo</h2>
				<p className={styles.contactCTA__description}>
					Request a demo of our product to see how it can help your business.<br />
					Our team will be in touch with you shortly to schedule a demo.
				</p>
				<Link href="/contact" className={styles.contactCTA__button}>Request Info</Link>
			</Flex>
		</>
	);
}
