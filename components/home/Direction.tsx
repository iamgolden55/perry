"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Direction() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="direction" ref={sectionRef}>
      <div className="direction__bg">
        <Image
          src="/images/staircase.jpg"
          alt="Silhouette against warm light — creative direction"
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
          loading="lazy"
        />
        <div className="direction__bg-overlay" />
      </div>

      <div className="direction__container">
        <h2 className="direction__title">
          WHERE{" "}
          <span className="direction__title-arrow">&rarr;</span>{" "}
          DIRECTION
          <br />
          MEETS DETAIL
        </h2>

        <div className="direction__bottom">
          <div className="direction__info">
            <div className="direction__thumb">
              <Image
                src="/images/flora-editorial.jpg"
                alt="Product detail"
                width={80}
                height={80}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                loading="lazy"
              />
            </div>
            <p className="direction__body">
              Every brand has a story &mdash; we&rsquo;re here to frame yours.
              Reach out and let&rsquo;s shape something meaningful, together.
            </p>
          </div>

          <div className="direction__cta">
            <Link href="#quote" className="button button--primary">
              GET A QUOTE
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
