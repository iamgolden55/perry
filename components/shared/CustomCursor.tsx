"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    };

    // Smooth lag on the outer ring
    let raf: number;
    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.12;
      cursorY += (mouseY - cursorY) * 0.12;
      cursor.style.left = `${cursorX}px`;
      cursor.style.top = `${cursorY}px`;
      raf = requestAnimationFrame(animate);
    };

    // Grow on hover over interactive / image elements
    const hoverTargets = "a, button, .card__media, .bento__item, .project-card, .services__card, .filter-pill";

    const onEnter = () => cursor.classList.add("cursor--active");
    const onLeave = () => cursor.classList.remove("cursor--active");

    const onImageEnter = () => cursor.classList.add("cursor--image");
    const onImageLeave = () => cursor.classList.remove("cursor--image");

    document.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(animate);

    const els = document.querySelectorAll(hoverTargets);
    els.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    const images = document.querySelectorAll(".card__media, .bento__item");
    images.forEach((el) => {
      el.addEventListener("mouseenter", onImageEnter);
      el.addEventListener("mouseleave", onImageLeave);
    });

    // Hide on touch devices
    const mql = window.matchMedia("(pointer: coarse)");
    if (mql.matches) {
      cursor.style.display = "none";
      dot.style.display = "none";
    }

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      els.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
      images.forEach((el) => {
        el.removeEventListener("mouseenter", onImageEnter);
        el.removeEventListener("mouseleave", onImageLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={dotRef} className="custom-cursor__dot" />
    </>
  );
}
