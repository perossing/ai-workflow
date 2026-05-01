"use client";

import { useState, useRef, useEffect, Fragment } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HERO_IMAGE = "/images/pexels-vazhnik-7562188 2.png";

const NAV_LINKS = ["About", "Services", "Projects", "News", "Contact"];

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Navbar refs
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const ctaBtnRef = useRef<HTMLButtonElement>(null);

  // Scroll animation refs
  const sectionRef = useRef<HTMLElement>(null);
  const bgWrapperRef = useRef<HTMLDivElement>(null);
  const helloLabelRef = useRef<HTMLSpanElement>(null);
  const harveyRef = useRef<HTMLSpanElement>(null);
  const specterRef = useRef<HTMLSpanElement>(null);

  // Wipe-from-top mobile menu animation
  useEffect(() => {
    const menu = mobileMenuRef.current;
    if (!menu) return;

    if (menuOpen) {
      gsap.set(menu, { display: "flex", y: "-100%" });
      gsap.to(menu, { y: "0%", duration: 0.55, ease: "power3.out" });
    } else {
      gsap.to(menu, {
        y: "-100%",
        duration: 0.4,
        ease: "power3.in",
        onComplete: () => gsap.set(menu, { display: "none" }),
      });
    }
  }, [menuOpen]);

  // Hero scroll-out animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      tl.to([helloLabelRef.current, harveyRef.current], { x: "-50vw", opacity: 0, ease: "none" }, 0)
        .to(specterRef.current, { x: "50vw", opacity: 0, ease: "none" }, 0)
        .to(bgWrapperRef.current, { scale: 0.88, ease: "none" }, 0);
    });

    return () => ctx.revert();
  }, []);

  // Nav link hover — underline wipe
  const handleLinkEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const underline = e.currentTarget.querySelector(".nav-underline");
    gsap.to(underline, { scaleX: 1, duration: 0.3, ease: "power2.out" });
  };
  const handleLinkLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const underline = e.currentTarget.querySelector(".nav-underline");
    gsap.to(underline, { scaleX: 0, duration: 0.25, ease: "power2.in" });
  };

  // CTA button hover — subtle scale
  const handleBtnEnter = () =>
    gsap.to(ctaBtnRef.current, { scale: 1.06, duration: 0.2, ease: "power2.out" });
  const handleBtnLeave = () =>
    gsap.to(ctaBtnRef.current, { scale: 1, duration: 0.2, ease: "power2.out" });

  return (
    <Fragment>
      {/* ── Mobile nav overlay ───────────────────────────────────────────── */}
      <div
        ref={mobileMenuRef}
        className="md:hidden fixed inset-0 z-50 bg-black flex-col"
        style={{ fontFamily: "var(--font-inter)", display: "none" }}
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
          <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <line x1="4" y1="4" x2="20" y2="20" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <line x1="20" y1="4" x2="4" y2="20" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="border-t border-white/20 mx-4" />

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
        ref={sectionRef}
        className="relative flex flex-col h-screen overflow-hidden
          px-4 md:px-8
          justify-between pb-6
          md:justify-start md:pb-0 md:gap-60"
      >
        {/* ── Background photo wrapper — GSAP scales this independently ── */}
        {/* Wrapper is absolute inset-0 so GSAP scale has no transform conflict
            with the CSS translate that .hero-bg applies on desktop. */}
        <div ref={bgWrapperRef} className="absolute inset-0">
          <img src={HERO_IMAGE} alt="" role="presentation" className="hero-bg" />
        </div>

        {/* ── Frosted-glass overlay ─────────────────────────────────────── */}
        <div aria-hidden="true" className="blur-overlay" />

        {/* ── Nav ──────────────────────────────────────────────────────── */}
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
                  className="relative font-semibold text-base capitalize text-black"
                  style={{ letterSpacing: "-0.04em" }}
                  onMouseEnter={handleLinkEnter}
                  onMouseLeave={handleLinkLeave}
                >
                  {link}
                  <span
                    className="nav-underline absolute bottom-0 left-0 w-full h-[1.5px] bg-black block"
                    style={{ transform: "scaleX(0)", transformOrigin: "left" }}
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <button
            ref={ctaBtnRef}
            className="hidden md:flex items-center justify-center px-4 py-3 bg-black text-white rounded-full text-sm font-medium"
            style={{ letterSpacing: "-0.035em" }}
            onMouseEnter={handleBtnEnter}
            onMouseLeave={handleBtnLeave}
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
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
          className="relative flex flex-col w-full shrink-0 justify-between md:justify-start"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          <div className="flex flex-col w-full">
            {/* Label moves left with "Harvey" */}
            <span
              ref={helloLabelRef}
              className="text-white uppercase mix-blend-overlay text-sm leading-[1.1]
                self-center md:self-start md:pl-[18px]"
              style={{ fontFamily: "var(--font-geist-mono, monospace)", display: "inline-block" }}
            >
              [ Hello I&apos;m ]
            </span>

            <h1
              className="hero-name text-white text-center mix-blend-overlay font-medium capitalize w-full
                leading-[0.85] min-[726px]:leading-[1.1]
                min-[726px]:whitespace-nowrap
                min-[726px]:[word-spacing:0em]"
              style={{ letterSpacing: "-0.07em" }}
            >
              {/* Each word is inline-block so GSAP transforms apply correctly */}
              <span ref={harveyRef} style={{ display: "inline-block" }}>Harvey</span>
              {" "}
              <br className="min-[725px]:hidden" />
              <span ref={specterRef} style={{ display: "inline-block" }}>Specter</span>
            </h1>
          </div>

          {/* Description + CTA */}
          <div className="flex flex-col w-full mt-4 items-start md:mt-0 md:items-end">
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
