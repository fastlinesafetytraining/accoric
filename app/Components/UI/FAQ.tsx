'use client';
import { useState } from 'react';
import { Collapse } from 'antd';
import Script from 'next/script';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
}

export default function FAQ({ items, title = "Frequently Asked Questions" }: FAQProps) {
  const [activeKey, setActiveKey] = useState<string | string[]>([]);

  // Generate JSON-LD schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <>
      <Script id="faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>

      <div>
        {title && <h2>{title}</h2>}
        <Collapse
          accordion
          activeKey={activeKey}
          onChange={(key) => setActiveKey(key)}
        >
          {items.map((item, index) => (
            <Collapse.Panel header={item.question} key={index.toString()}>
              <p>{item.answer}</p>
            </Collapse.Panel>
          ))}
        </Collapse>
      </div>
    </>
  );
}
