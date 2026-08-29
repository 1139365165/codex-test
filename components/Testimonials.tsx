"use client";

import { useEffect, useState } from "react";
import type { Testimonial } from "@/data/site";

type TestimonialsProps = {
  items: readonly Testimonial[];
};

const AUTOPLAY_MS = 5200;

export default function Testimonials({ items }: TestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const count = items.length;

  useEffect(() => {
    if (isPaused || count <= 1) return;

    const autoplay = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % count);
    }, AUTOPLAY_MS);

    return () => window.clearInterval(autoplay);
  }, [isPaused, count]);

  const goTo = (index: number) => {
    setActiveIndex(((index % count) + count) % count);
  };
  const current = items[activeIndex];

  return (
    <section className="section quote-section" id="reviews" aria-labelledby="reviews-title">
      <div className="container quote-grid">
        <div className="quote-intro">
          <span className="eyebrow">Loved by pet parents</span>
          <h2 id="reviews-title">“它回家后，居然还想再来。”</h2>
          <p>我们收集了很多这样的时刻，也把每一条反馈都放进下一次护理里。</p>
        </div>

        <div
          className={`quote-carousel${isPaused ? " paused" : ""}`}
          aria-roledescription="轮播"
          aria-label="客户评价轮播"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          <article className="quote-card" key={activeIndex}>
            <div className="quote-head">
              <div className="quote-mark">“</div>
              <span className="stars" aria-label={`${current.rating} 星好评`}>{"★".repeat(current.rating)}</span>
            </div>
            <blockquote>{current.quote}</blockquote>
            <div className="quote-author">
              <span>
                <strong>{current.author}</strong>
                <span>
                  {current.pet} / {current.service}
                </span>
              </span>
            </div>
            <div className="quote-progress" aria-hidden="true">
              <span key={`${activeIndex}-${isPaused}`} style={{ animationDuration: `${AUTOPLAY_MS}ms` }} />
            </div>
          </article>

          <div className="quote-controls">
            <span className="quote-count">
              {String(activeIndex + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
            </span>
            <div className="quote-dots" aria-label="选择评价">
              {items.map((item, index) => (
                <button
                  className={`quote-dot${index === activeIndex ? " active" : ""}`}
                  type="button"
                  key={item.author}
                  aria-label={`查看第 ${index + 1} 条评价：${item.author}`}
                  aria-current={index === activeIndex}
                  onClick={() => goTo(index)}
                />
              ))}
            </div>
            <div className="quote-nav">
              <button type="button" aria-label="上一条评价" onClick={() => goTo(activeIndex - 1)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
                  <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button type="button" aria-label="下一条评价" onClick={() => goTo(activeIndex + 1)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
                  <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
