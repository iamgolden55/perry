"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsSticky(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const toggleMenu = useCallback(() => setMenuOpen((v) => !v), []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <header className={`header${isSticky ? " is-sticky" : ""}`} id="header">
      <div className="nav">
        <div className="nav__left">
          <Link href="/" className="nav__logo">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2L15 8L21 10L16 15L18 22L12 18L6 22L8 15L3 10L9 8L12 2Z" />
            </svg>
            <span>PERRY JIGGY</span>
          </Link>
          <div className="top-bar__cities hidden-mobile">
            <span className="city">NEW YORK</span>
            <span className="city">LONDON</span>
            <span className="city">TOKYO</span>
          </div>
        </div>

        <button
          className={`mobile-menu-btn${menuOpen ? " is-active" : ""}`}
          aria-label="Toggle Menu"
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`mobile-menu${menuOpen ? " is-open" : ""}`}>
        <nav className="mobile-nav__links">
          <Link href="/about" className="mobile-nav__link" onClick={closeMenu}>
            About
          </Link>
          <Link href="/#works" className="mobile-nav__link" onClick={closeMenu}>
            Works
          </Link>
          <Link href="/#services" className="mobile-nav__link" onClick={closeMenu}>
            Services
          </Link>
          <Link href="/#journal" className="mobile-nav__link" onClick={closeMenu}>
            Journal
          </Link>
          <Link href="/showcase" className="mobile-nav__link" onClick={closeMenu}>
            Showcase
          </Link>
          <Link href="/#contact" className="mobile-nav__link" onClick={closeMenu}>
            Contact us
          </Link>
        </nav>
        <div className="mobile-nav__bottom">
          <Link
            href="/#quote"
            className="button button--primary button--full"
            onClick={closeMenu}
          >
            START A PROJECT
          </Link>
          <div className="mobile-nav__cities">
            <span>NY</span> &bull; <span>LDN</span> &bull; <span>TKY</span>
          </div>
        </div>
      </div>
    </header>
  );
}
