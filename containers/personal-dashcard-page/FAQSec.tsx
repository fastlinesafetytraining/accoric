import React from 'react'
import FAQ from '@/Components/UI/FAQ'

export default function FAQSec() {
    const faq = [
        {
            question: "What is the Personal Dashcard?",
            answer: "The Personal Dashcard is a card that allows you to access your card information from anywhere, anytime."
        },
        {
            question: "Are they different from the NYC-DOB Worker Wallet Card or a Union-provided Card?",
            answer: "Yes – The NYC-DOB Worker Wallet Card only stores certifications issued by the Department of Buildings (like rigging, scaffold, mast climber, etc.) Through approved providers. The Personal DashCard goes further. It lets you store, manage, and share all your certifications - whether DOB-issued, union, employer-provided, OSHA, equipment training, or even out-of-state credentials. It's your complete, centralized record – not limited to "
        },
        {
            question: "Why does the Personal DashCard Expire?",
            answer: "The Personal DashCard expires every three years to maintain the integrity, security, and performance of the platform. As technology and compliance needs evolve , this renewal ensures your card stays compatible with the latest system updates and security standards. It also gives users an opportunity to refresh their information and continue using a card that reflects the most current version of our platform."
        }, {
            question: "Is the Personal DashCard required to be carried?",
            answer: "It's not legally required–but in today's job market, being ready to prove your certifications matters. Whether you're union or non-union, employers and job sites want to see your credentials fast. The Personal DashCard makes that easy. It's your all-in-one proof–physical and digital–so you're never caught off guard on the job or passed over for work because you couldn't show your certs."
        }
    ]
  return (
    <FAQ items={faq} />
  )
}
