"use client";

import { useState } from "react";
import { Fragment } from "react";

// Figma MCP asset — expires in 7 days; replace with a permanent hosted image
const HERO_IMAGE =
  "https://www.figma.com/api/mcp/asset/41e0c19a-3e50-40c6-968e-203f4232821b";

const NAV_LINKS = ["About", "Services", "Projects", "News", "Contact"];

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Fragment>
    {/* ── Mobile nav overlay ───────────────────────────────────────────── */}
    <div
      className={`md:hidden fixed inset-0 z-50 bg-black flex flex-col transition-opacity duration-300 ${
        menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      style={{ fontFamily: "var(--font-inter)" }}
      aria-hidden={!menuOpen}
    >
      {/* Header row */}
      <div className="flex items-center justify-between px-4 py-6 shrink-0">
        <a
          href="/"
          className="font-semibold text-base capitalize text-white"
          style={{ letterSpacing: "-0.04em" }}
          onClick={() => setMenuOpen(false)}
        >
          H.Studio
        </a>
        <button
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <line x1="4" y1="4" x2="20" y2="20" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <line x1="20" y1="4" x2="4" y2="20" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Divider */}
      <div className="border-t border-white/20 mx-4" />

      {/* Nav links */}
      <nav className="flex flex-col flex-1 px-4 pt-2">
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
            className="flex items-center border-b border-white/20 py-5 text-white font-light capitalize"
            style={{ fontSize: 40, letterSpacing: "-0.04em", lineHeight: 1 }}
          >
            {link}
          </a>
        ))}
      </nav>

      {/* CTA */}
      <div className="px-4 pb-10 shrink-0">
        <button
          className="flex items-center justify-center w-full px-4 py-4 bg-white text-black rounded-full text-sm font-medium"
          style={{ letterSpacing: "-0.035em" }}
        >
          Let&apos;s talk
        </button>
      </div>
    </div>

    <section
      className="relative flex flex-col h-screen overflow-hidden
        px-4 md:px-8
        justify-between pb-6
        md:justify-start md:pb-0 md:gap-60"
    >
      {/* ── Background photo ─────────────────────────────────────────── */}
      {/* Sizing handled in globals.css (.hero-bg) */}
      <img
        src={HERO_IMAGE}
        alt=""
        role="presentation"
        className="hero-bg"
      />

      {/* ── Frosted-glass overlay (bottom of photo) ───────────────────── */}
      {/* Height + gradient mask handled in globals.css (.blur-overlay) */}
      <div aria-hidden="true" className="blur-overlay" />

      {/* ── Nav ──────────────────────────────────────────────────────── */}
      {/* No z-index here — keeps mix-blend-mode on the h1 unblocked */}
      <nav
        className="relative flex items-center justify-between py-6 shrink-0"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        <a
          href="/"
          className="font-semibold text-base capitalize text-black"
          style={{ letterSpacing: "-0.04em" }}
        >
          H.Studio
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-14">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="font-semibold text-base capitalize text-black hover:opacity-60 transition-opacity"
                style={{ letterSpacing: "-0.04em" }}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <button
          className="hidden md:flex items-center justify-center px-4 py-3 bg-black text-white rounded-full text-sm font-medium"
          style={{ letterSpacing: "-0.035em" }}
        >
          Let&apos;s talk
        </button>

        {/* Mobile hamburger */}
        <button
          className="flex md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            {menuOpen ? (
              <>
                <line x1="4" y1="4" x2="20" y2="20" stroke="black" strokeWidth="2" strokeLinecap="round" />
                <line x1="20" y1="4" x2="4" y2="20" stroke="black" strokeWidth="2" strokeLinecap="round" />
              </>
            ) : (
              <>
                <line x1="3" y1="6"  x2="21" y2="6"  stroke="black" strokeWidth="2" strokeLinecap="round" />
                <line x1="3" y1="12" x2="21" y2="12" stroke="black" strokeWidth="2" strokeLinecap="round" />
                <line x1="3" y1="18" x2="21" y2="18" stroke="black" strokeWidth="2" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* ── Hero content ─────────────────────────────────────────────── */}
      <div
        className="relative flex flex-col w-full shrink-0
          justify-between
          md:justify-start"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        {/* Name block */}
        <div className="flex flex-col w-full">
          {/* "[ Hello I'm ]" label */}
          <span
            className="text-white uppercase mix-blend-overlay
              text-sm leading-[1.1]
              self-center
              md:self-start md:pl-[18px]"
            style={{ fontFamily: "var(--font-geist-mono, monospace)" }}
          >
            [ Hello I&apos;m ]
          </span>

          {/* Name — fluid size that stays within the frame at every width.
               Wraps to two lines below 725px via an explicit <br>;
               above 725px the <br> is hidden and word-spacing adds the
               visual gap matching the Figma spacing. */}
          <h1
            className="hero-name text-white text-center mix-blend-overlay font-medium capitalize w-full
              leading-[0.85] min-[726px]:leading-[1.1]
              min-[726px]:whitespace-nowrap
              min-[726px]:[word-spacing:0em]"
            style={{ letterSpacing: "-0.07em" }}
          >
            Harvey{" "}
            <br className="min-[725px]:hidden" />
            Specter
          </h1>
        </div>

        {/* Description + CTA — left on mobile, right on desktop */}
        <div
          className="flex flex-col w-full mt-4
            items-start
            md:mt-0 md:items-end"
        >
          <div className="flex flex-col gap-4 items-start">
            <p
              className="italic text-[#1f1f1f] text-sm uppercase w-[294px]"
              style={{ lineHeight: "1.1", letterSpacing: "-0.04em" }}
            >
              <strong>H.Studio is a </strong>
              <span className="font-normal">full-service</span>
              <strong>
                {" "}creative studio creating beautiful digital experiences and
                products. We are an{" "}
              </strong>
              <span className="font-normal">award winning</span>
              <strong>
                {" "}design and art group specializing in branding, web design
                and engineering.
              </strong>
            </p>

            <button
              className="flex items-center justify-center px-4 py-3 bg-black text-white rounded-full text-sm font-medium"
              style={{ letterSpacing: "-0.035em" }}
            >
              Let&apos;s talk
            </button>
          </div>
        </div>
      </div>
    </section>
    </Fragment>
  );
}
