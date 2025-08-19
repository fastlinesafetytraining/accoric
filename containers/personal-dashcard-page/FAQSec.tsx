import React from 'react'
import FAQ from '@/Components/UI/FAQ'

export default function FAQSec() {
    const faq = [
        {
            question: "What is the Personal DASHcard™?",
            answer: "The Personal DASHcard™ is a card that allows you to access your certifications information from anywhere, anytime."
        },
        {
            question: "Is the Personal DASHcard™ different from the NYC-DOB Worker Wallet Card or a Union-provided Card?",
            answer: "Yes – the NYC-DOB Worker Wallet Card only stores certifications issued by the Department of Buildings (like rigging, scaffold, mast climber, etc.) through approved providers. The Personal DASHcard™ goes further. It lets you store, manage, and share all your certifications - whether DOB-issued, union, employer-provided, OSHA, equipment training, or even out-of-state credentials. It's your complete, centralized record – not limited to any one agency or provider."
        },
        {
            question: "Why does the Personal DASHcard™ Expire?",
            answer: "The Personal DASHcard™ expires every three years to maintain the integrity, security, and performance of the platform. As technology and compliance needs evolves , this renewal ensures your card stays compatible with the latest system updates and security standards. It also gives users an opportunity to refresh their information and continue using a card that reflects the most current version of our platform."
        }, {
            question: "Is the Personal DASHcard™ required to be carried?",
            answer: "It's not legally required, but in today's job market, being ready to prove your certifications matters. Whether you're union or non-union, employers and job sites want to see your credentials fast. The Personal DASHcard™ makes that easy. It's your all-in-one proof, both physical and digital, so you're never caught off guard on the job or passed over for work because you couldn't show your certs."
        }
    ]
  return (
    <section>
        <FAQ items={faq} />
    </section>
  )
}
