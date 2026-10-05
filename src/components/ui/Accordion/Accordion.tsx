"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./Accordion.module.css";

export interface FaqItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: FaqItem[];
  allowMultiple?: boolean;
  defaultOpenIndex?: number;
}

export function Accordion({ 
  items, 
  allowMultiple = true,
  defaultOpenIndex = 0 
}: AccordionProps) {
  const [openIndices, setOpenIndices] = useState<number[]>(
    defaultOpenIndex >= 0 ? [defaultOpenIndex] : []
  );

  const toggleItem = (index: number) => {
    setOpenIndices((prev) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index);
      } else {
        return allowMultiple ? [...prev, index] : [index];
      }
    });
  };

  return (
    <div className={styles.accordionList} role="region" aria-label="Frequently Asked Questions">
      {items.map((item, idx) => {
        const isOpen = openIndices.includes(idx);
        return (
          <div 
            key={idx} 
            className={`${styles.accordionItem} ${isOpen ? styles.itemOpen : ""}`}
          >
            <button
              type="button"
              className={styles.questionBtn}
              onClick={() => toggleItem(idx)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${idx}`}
              id={`faq-question-${idx}`}
            >
              <span className={styles.questionText}>{item.question}</span>
              <span className={`${styles.iconWrap} ${isOpen ? styles.iconOpen : ""}`} aria-hidden="true">
                <ChevronDown size={18} />
              </span>
            </button>

            <div 
              id={`faq-answer-${idx}`}
              role="region"
              aria-labelledby={`faq-question-${idx}`}
              className={`${styles.answerWrapper} ${isOpen ? styles.wrapperOpen : ""}`}
            >
              <div className={styles.answerContent}>
                <div className={styles.answerInner}>
                  <p className={styles.answerText}>{item.answer}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
