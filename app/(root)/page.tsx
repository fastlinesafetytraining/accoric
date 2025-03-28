import Image from "next/image";
import React from "react";
import { PrimaryButton, SecondaryButton } from "../Components/UI";

export const metadata = {
  title: 'Accoric - Construction Certificate Management Software',
  description: 'All Your CERTIFICATES Stored Into One Location',
}

export default function Home() {
  return (
    <div>
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>All Your CERTIFICATES Stored Into One Location</h1>
            <div className="hero-buttons">
              <PrimaryButton title="See Pricing for Dashcard" href="#">See Pricing</PrimaryButton>
              <SecondaryButton title="Learn more about accoric's Dashcard and their benefit " href="#">Learn More</SecondaryButton>
            </div>
          </div>
          <div className="hero-image">
            <Image width={449} height={500} src="/accoric-dashcard-mockup.png" alt="Accoric Dashcard Link Showing all certifications on a Phone Mockup" />
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="features-content">
            <Image width={766} height={534} src="/accoric-management-mockup.png" alt="Accoric Management Software being used on Laptop mockup" />
            <div className="features-text">
              <h2>Certification tracking Software, but we monitor your account for you.</h2>
              <div className="feature-icons">
                <div className="feature-icon">Certifications Digitized</div>
                <div className="feature-icon">Expiration Date Monitoring</div>
                <div className="feature-icon">Employee ID Badging</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}