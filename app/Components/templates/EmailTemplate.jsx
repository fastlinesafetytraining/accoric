import React from "react";

export const EmailHtmlTemplate = ({
	fullName,
	email,
	companyName,
	phone,
	numberOfEmployees,
}) => (
	<table border="0" max-width="600px" margin="0 auto" bgcolor="#ffffff" cellpadding="0" cellspacing="0">
		<tr>
			<td padding="20px" border="0">
				<table cellpadding="0" cellspacing="0" width="100%">
					<tr>
						<td align="center" padding="20px 0">
							<img
								width="300"
								height="100"
								src="https://accoric.vercel.app/svg/accoric-logo-svg.svg"
								alt="Company Logo"
								max-width="200px"
							/>
						</td>
					</tr>
					<tr>
						<td padding="20px 0">
							<h1 color="#333333" margin="0" align="center">
								Welcome to Our Service
							</h1>
						</td>
					</tr>
					<tr>
						<td padding="20px 0">
							<p color="#666666" line-height="1.5" margin="0">
								New Email from Accoric Website.
							</p>
						</td>
					</tr>
					<tr>
						<table>
							<tr>
								<td font-weight="700">Name:</td>
								<td>{fullName}</td>
							</tr>
							<tr>
								<td font-weight="700">Email</td>
								<td>{email}</td>
							</tr>
							<tr>
								<td font-weight="700">Company:</td>
								<td>{companyName}</td>
							</tr>
							<tr>
								<td font-weight="700">Phone</td>
								<td>{phone}</td>
							</tr>
							<tr>
								<td font-weight="700">
									Employee&apos;s to be tracked:
								</td>
								<td>{numberOfEmployees}</td>
							</tr>
						</table>
					</tr>
					<tr>
						<td padding="20px 0">
							<a
								href="#"
								class="button"
								color="white"
								text-decoration="none"
								float="right"
								margin-right="20px"
								bgcolor="#4caf50"
								padding="12px 20px"
								border-radius="4px"
								display="inline-block"
							>
								Get Started
							</a>
						</td>
					</tr>
					<tr>
						<td padding="20px 10px" border-top="1px solid #eeeeee">
							<p color="#999999" font-size="12px" margin="0">
								© 2025 Accoric. All rights reserved.
							</p>
						</td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
);
