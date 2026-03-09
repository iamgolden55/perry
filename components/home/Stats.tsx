"use client";

import { useEffect, useRef, useState } from "react";

interface Stat {
  end: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { end: 150, suffix: "+", label: "PROJECTS DELIVERED" },
  { end: 10, suffix: "+", label: "YEARS EXPERIENCE" },
  { end: 3, suffix: "", label: "GLOBAL STUDIOS" },
  { end: 40, suffix: "+", label: "BRAND PARTNERS" },
];

function useCountUp(end: number, duration: number, trigger: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let start = 0;
    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(start + (end - start) * eased);
      setCount(current);
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [end, duration, trigger]);

  return count;
}

function StatItem({ stat, trigger, delay }: { stat: Stat; trigger: boolean; delay: number }) {
  const [active, setActive] = useState(false);
  const count = useCountUp(stat.end, 2000, active);

  useEffect(() => {
    if (!trigger) return;
    const timer = setTimeout(() => setActive(true), delay);
    return () => clearTimeout(timer);
  }, [trigger, delay]);

  return (
    <div className={`stats__item${active ? " is-visible" : ""}`}>
      <span className="stats__number">
        {count}
        {stat.suffix}
      </span>
      <span className="stats__label">{stat.label}</span>
    </div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats" ref={ref}>
      <div className="stats__container">
        {stats.map((stat, i) => (
          <StatItem key={stat.label} stat={stat} trigger={visible} delay={i * 150} />
        ))}
      </div>
    </section>
  );
}
