import { CollapseProps } from 'antd';
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
  
  const faqItems: CollapseProps['items'] = items.map((item, index) => ({
    key: index.toString(),
    label: item.question,
    children: item.answer
  }));

  // Generate JSON-LD schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.label,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.children
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
          items={faqItems}
          accordion
        />
      </div>
    </>
  );
}
