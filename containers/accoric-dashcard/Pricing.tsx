import React from "react";
import Image from "next/image";
import { Card, Row, Col } from "antd";
import styles from "@styles/pages/accoricDashcard.module.scss";

export default function Pricing() {
	return (
		<section id='pricing' className={styles.accoricDashcard__info__pricing}>
			<div className={styles.accoricDashcard__sticky}>
				<div className={styles.accoricDashcard__content}>
					<h2>Pricing</h2>
                    <Row align="middle" justify="center" gutter={[16, 16]}>
                        <Col span={24}>
                            <p>Personal DashCard will be available for purchase in the following way:</p>
                        </Col>
                    </Row>
					<Row align="middle" justify="center" gutter={[16, 16]}>
						<Col span={24}>
							<Card size="small" variant='borderless' title='Monthly Subscription' className="pricing-card-1">
								<p>$10.99/Month</p>
							</Card>
						</Col>
						<Col span={24}>
							<Card size="small" variant='borderless' title='One Time Fee' className="pricing-card-2">
								<p>$25.00 One Time Card Issuance Fee</p>
							</Card>
						</Col>
                        <Col span={24}>
                            <Row align="middle" justify="center">
                                <Col span={12}>
                                    <p>Coming Soon to the Apple App Store and Google Play Store</p>
                                </Col>
                                <Col span={12}>
                                    <Image src="/Images/app-store-logos.webp" alt="Apple App Store and Google Play Store" width={200} height={100} />
                                </Col>
                            </Row>
                        </Col>
					</Row>
				</div>
			</div>
		</section>
	);
}
