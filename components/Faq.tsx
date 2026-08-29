"use client";

import { useState } from "react";
import type { FaqItem } from "@/data/site";

type FaqProps = {
  items: readonly FaqItem[];
};

export default function Faq({ items }: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section" id="faq">
      <div className="container faq-grid">
        <div className="faq-copy">
          <span className="eyebrow">Before you come</span>
          <h2>你可能还想知道。</h2>
          <p>如果这里没有回答你的问题，欢迎直接联系我们。</p>
          <a className="button-secondary" href="#booking">去预约咨询</a>
        </div>
        <div className="faq-list">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;
            return (
              <div className={`faq-item${isOpen ? " open" : ""}`} key={item.question}>
                <button
                  className="faq-question"
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  {item.question}<span aria-hidden="true">＋</span>
                </button>
                <div className="faq-answer" id={answerId} aria-hidden={!isOpen}>
                  <div><p>{item.answer}</p></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
