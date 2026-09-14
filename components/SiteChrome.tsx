'use client';

import Link from 'next/link';
import { useState } from 'react';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="shell nav">

        {/* Logo */}
        <Link href="/" className="brand" onClick={closeMenu}>
          <img
            src="/images/prerna-foundation-logo.webp"
            alt="Prerna Foundation logo"
          />

          <span className="brand-name">
            PRERNA<br />
            FOUNDATION
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-links">
          <Link href="/about-us">About</Link>
          <Link href="/projects">Our Work</Link>
          <Link href="/impact">Impact</Link>
          <Link href="/programs">Programs</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact</Link>
          <Link className="donate" href="/donate-now">
            Donate now
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="mobile-menu-btn"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${menuOpen ? 'mobile-nav-open' : ''}`}>
        <div className="shell mobile-nav-inner">

          <Link href="/about-us" onClick={closeMenu}>
            About
          </Link>

          <Link href="/projects" onClick={closeMenu}>
            Our Work
          </Link>

          <Link href="/impact" onClick={closeMenu}>
            Impact
          </Link>

          <Link href="/programs" onClick={closeMenu}>
            Programs
          </Link>

          <Link href="/gallery" onClick={closeMenu}>
            Gallery
          </Link>

          <Link href="/contact" onClick={closeMenu}>
            Contact
          </Link>

          <Link
            className="donate mobile-donate"
            href="/donate-now"
            onClick={closeMenu}
          >
            Donate now
          </Link>

        </div>
      </div>
    </header>
  );
}


export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-grid">

        <div>
          <Link href="/" className="brand footer-brand">
            <img
              src="/images/prerna-foundation-logo.webp"
              alt="Prerna Foundation logo"
            />

            <span>PRERNA FOUNDATION</span>
          </Link>

          <p>
            Resolved and Always Remembering — working for sustainable
            and inclusive community development.
          </p>
        </div>

        <div>
          <b>Explore</b>

          <p>
            <Link href="/about-us">About us</Link>
            <br />

            <Link href="/projects">Projects</Link>
            <br />

            <Link href="/programs">Programs</Link>
          </p>
        </div>

        <div>
          <b>Contact</b>

          <p>
            +91 8090127111
            <br />
            foundn.prerana@gmail.com
            <br />
            Chhatrapati Sambhajinagar, Maharashtra
          </p>
        </div>

      </div>

      <div className="shell">
        <hr />

        <small>
          © {new Date().getFullYear()} Prerna Foundation ·{' '}
          <Link href="https://dhananjay-77.vercel.app/">
            This site developed and managed by Dhananjay
          </Link>
        </small>
      </div>
    </footer>
  );
}


/* =========================================================
   MOBILE NAVIGATION
   Existing theme and colours are not changed.
   ========================================================= */

const mobileNavigationStyles = `
  .mobile-menu-btn {
    display: none;
    width: 44px;
    height: 44px;
    padding: 9px;
    border: 0;
    background: transparent;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 5px;
    border-radius: 8px;
  }

  .mobile-menu-btn span {
    display: block;
    width: 24px;
    height: 2px;
    border-radius: 2px;
    background: currentColor;
    transition:
      transform 0.25s ease,
      opacity 0.2s ease;
  }

  .mobile-nav {
    display: none;
  }

  @media (max-width: 768px) {

    .site-header .nav {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .site-header .nav-links {
      display: none;
    }

    .mobile-menu-btn {
      display: flex;
    }

    .mobile-nav {
      display: block;
      position: absolute;
      left: 0;
      right: 0;
      top: 100%;
      z-index: 1000;

      opacity: 0;
      visibility: hidden;
      transform: translateY(-10px);

      transition:
        opacity 0.25s ease,
        transform 0.25s ease,
        visibility 0.25s ease;
    }

    .mobile-nav-open {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }

    .mobile-nav-inner {
      display: flex;
      flex-direction: column;
      gap: 0;
      padding-top: 8px;
      padding-bottom: 12px;
    }

    .mobile-nav-inner a {
      display: block;
      padding: 14px 4px;
      text-decoration: none;
      font-size: 0.98rem;
      font-weight: 600;
      line-height: 1.4;
      border-bottom: 1px solid currentColor;
      opacity: 0.9;
    }

    .mobile-nav-inner a:last-child {
      border-bottom: 0;
    }

    .mobile-nav-inner a:hover {
      opacity: 1;
    }

    .mobile-donate {
      margin-top: 10px;
      text-align: center;
      border-bottom: 0 !important;
    }
  }
`;

export function SiteChromeMobileStyles() {
  return <style dangerouslySetInnerHTML={{ __html: mobileNavigationStyles }} />;
}
