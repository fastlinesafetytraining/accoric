import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaClock } from "react-icons/fa";
import { Divider } from "antd";
import styles from '@styles/component.module.scss';

type ContactCardProps = {
    icon: React.ReactNode;
    title: string;
    content: {
      title: string;
      info: string;
    }[];
  };

export default function ContactCards() {
 const contactCard: ContactCardProps[] = [
        {
          icon: <FaEnvelope className={styles.contactUsCards__Icon}/>,
          title: "Email Us",
          content: [{
            title: "Technical Help (Accoric Management):",
            info: "techsupport@accoric.com",
          }, 
          {
            title: "Technical Help (Accoric DashCard):",
            info: "dash@accoric.com",
          },
          {
            title: "Sales/General Inquiry:",
            info: "info@accoric.com",
          }]
        },
        {
          icon: <FaPhoneAlt className={styles.contactUsCards__Icon}/>,
          title: "Call Us",
          content: [{
            title: "Technical Help (Accoric Management):",
            info: "(631) 200-4720",
          },
          {
            title: "Technical Help (Accoric Management):",
            info: "(631) 200-1051",
          },
          {
            title: "Sales/General Inquiry:",
            info: "(516) 200-4720",
          }]
        },
        {
          icon: <FaClock className={styles.contactUsCards__Icon}/>,
          title: "Hours Of Operations",
          content: [{
            title: "Monday-Friday:",
            info: "9:00AM - 5:00PM EDT",
          },
          {
            title: "Saturday-Sunday:",
            info: "Closed",
          }]
        },
      ];
    return (
        <div className={styles.contactUsCards}>
        <h2>Get in Touch</h2>
        <p>Open to all questions and inquiries. We are available to help you with your needs</p>
        <div className={styles.contactUsCards__cardContainer}>
          {contactCard.map((card, index) => (
            <div
              key={index}
              className={styles.contactUsCards__cardContainer__card}
            >
              {card.icon}
              <h3>{card.title}</h3>
              <Divider />
              {card.content.map((content, index) => (
                <div key={index}>
                  <h4>{content.title}</h4>
                  <p>{content.info}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    )
}