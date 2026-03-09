"use client";

import { useState, useEffect, useCallback } from "react";

const testimonials = [
  {
    quote:
      "\u201CThe team completely understood our vision and elevated it. Every detail \u2014 from lighting to post-production \u2014 was spot on. The final images were beyond anything we imagined.\u201D",
    name: "-Ahmad Dias",
    date: "21 Mar 2025",
  },
  {
    quote:
      "\u201CWorking with Perry Jiggy was a breeze. Their creative direction, attention to detail, and ability to make everyone feel at ease led to stunning results for our brand shoot.\u201D",
    name: "-Divya S",
    date: "21 Jun 2025",
  },
  {
    quote:
      "\u201CFrom portraits to product shots, Perry Jiggy brought consistency, mood, and polish to every frame. They\u2019re now our go-to studio for all our campaigns.\u201D",
    name: "-Zain K.",
    date: "21 Jan 2025",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 767);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const getVisibleCards = useCallback(
    () => (typeof window !== "undefined" && window.innerWidth > 1023 ? 2 : 1),
    []
  );

  const maxIndex = Math.max(0, testimonials.length - getVisibleCards());

  useEffect(() => {
    if (currentIndex > maxIndex) setCurrentIndex(maxIndex);
  }, [maxIndex, currentIndex]);

  const updateTransform = useCallback(() => {
    if (isMobile) return {};
    const cardWidth =
      typeof document !== "undefined"
        ? document.querySelector(".testimonial-card")?.getBoundingClientRect()
            .width ?? 0
        : 0;
    const gap = 24;
    return {
      transform: `translateX(-${currentIndex * (cardWidth + gap)}px)`,
    };
  }, [currentIndex, isMobile]);

  return (
    <section className="testimonials" id="testimonials">
      <div className="section__container">
        <h2 className="section__title text-center mb-48">
          WHAT OUR CLIENTS <span className="font-curvy">SAY</span>
        </h2>

        <div className="testimonials__carousel">
          <button
            className="carousel__arrow carousel__arrow--prev"
            aria-label="Previous Testimonial"
            onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
          </button>

          <div className="carousel__track-container">
            <div className="carousel__track" style={updateTransform()}>
              {testimonials.map((t) => (
                <article key={t.name} className="testimonial-card">
                  <span className="badge">testimonials</span>
                  <p className="quote">{t.quote}</p>
                  <div className="client">
                    <span className="client__name">{t.name}</span>
                    <span className="client__date">{t.date}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <button
            className="carousel__arrow carousel__arrow--next"
            aria-label="Next Testimonial"
            onClick={() =>
              setCurrentIndex((i) => Math.min(maxIndex, i + 1))
            }
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
