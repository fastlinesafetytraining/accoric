import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import Script from 'next/script';
import styles from "@styles/component.module.scss";

interface FAQItem {
  question: string;
  answer: string; // Can contain HTML content
}

interface FAQProps {
  items: Promise<{ gatheredItems: FAQItem[] }> | FAQItem[];
}

export default async function FAQ({ items }: FAQProps) {
  const faqItemsArray = Array.isArray(items) ? items : (await items).gatheredItems;
  
  const faqItems: CollapseProps['items'] = faqItemsArray.map((item, index) => ({
    key: index.toString(),
    label: <h3 className={styles.faqQuestion}>{item.question}</h3>,
    children: (
      <div 
        className={styles.faqAnswer}
        dangerouslySetInnerHTML={{ __html: item.answer }}
      />
    )
  }));

  // Generates JSON-LD schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItemsArray.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer.replace(/<[^>]*>/g, '') // Strip HTML tags for schema
      }
    }))
  };

  return (
    <>
      <Script 
        id="faq-schema" 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className={styles.faq}>
        <h2>Frequently Asked Questions</h2>
        <Collapse
          size='large'
          items={faqItems}
          accordion
          bordered={false}
          style={{
            backdropFilter: "blur(40px)",
          }}
        />
      </div>
    </>
  );
}
