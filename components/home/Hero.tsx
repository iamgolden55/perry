"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax on hero image
  useEffect(() => {
    const bg = bgRef.current;
    if (!bg) return;

    const onScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < window.innerHeight * 1.2) {
        bg.style.transform = `translateY(${scrollY * 0.25}px) scale(1.05)`;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Trigger entrance animations
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    // Small delay so the paint settles
    const timer = setTimeout(() => section.classList.add("hero--loaded"), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero" id="studio" ref={sectionRef}>
      <div className="hero__bg">
        <div ref={bgRef} className="hero__bg-parallax">
          <Image
            src="/images/hero-jumping.jpg"
            alt="Black and white portrait — man jumping mid-air"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center 30%" }}
          />
        </div>
        <div className="hero__bg-overlay"></div>
      </div>

      <div className="hero__container">
        <h1 className="hero__title">
          <span className="hero__line hero__line--1">AWARD&mdash;WINNING</span>
          <span className="hero__line hero__line--2 font-curvy">PHOTOGRAPHY</span>
          <span className="hero__line hero__line--3">STUDIO</span>
        </h1>

        <div className="hero__bottom-row">
          <div className="hero__actions">
            <Link href="#quote" className="button button--primary">
              GET A QUOTE
            </Link>
          </div>
          <p className="hero__subtitle">
            We capture atmosphere,
            <br />
            emotion, and the in&#8209;between.
          </p>
        </div>
      </div>
    </section>
  );
}
