import React from "react";
import { TbSquareRoundedCheckFilled } from "react-icons/tb";
import { PricingForm } from "@components/UI";
import styles from "@styles/pages/accoricManagement.module.scss";

export default function PricingSec() {
	const includedInAllSubscriptions = [
		"Unlimited Certifications",
		"Unlimited Certification Types",
		"Unlimited File Attachments",
		"Unlimited Categories",
		"Spreadsheet Functionality",
		"Multiple User Access",
		"Email/Text Support",
	];

	return (
		<section className={styles.accoricManagement__pricing} id="pricing">
            <div className={styles.accoricManagement__pricing__container}>
                <h2>Whats Included</h2>
                <ul className={styles.accoricManagement__pricing__container__list}>
                    {includedInAllSubscriptions.map((item, index) => (
                        <li key={index}>
                            <i>
                                <TbSquareRoundedCheckFilled />
                            </i>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
			<div className={styles.accoricManagement__pricing__formContainer}>
				<PricingForm />
			</div>
		</section>
	);
}
