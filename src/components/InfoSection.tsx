"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MONO = "var(--font-geist-mono, monospace)";
const INTER = "var(--font-inter, sans-serif)";
const PLAYFAIR = "var(--font-playfair, serif)";

const titleStyle: React.CSSProperties = {
  fontFamily: INTER,
  fontSize: "clamp(36px, 6.7vw, 96px)",
  fontWeight: 300,
  letterSpacing: "-0.08em",
  lineHeight: 0.84,
  textTransform: "uppercase",
};

export default function InfoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const line3Ref = useRef<HTMLDivElement>(null);
  const line4Ref = useRef<HTMLDivElement>(null);
  const line5Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Lines at 0% indent start from the left; lines at ~42% indent start from the right.
      // All converge to x:0 (their natural layout position) as the section scrolls into view.
      const lines: [React.RefObject<HTMLDivElement | null>, string][] = [
        [line1Ref, "-6vw"],  // left-aligned
        [line2Ref, "-4vw"],  // 14.9% indent — still left of centre
        [line3Ref, "5vw"],   // 42.4% indent — right of centre
        [line4Ref, "-6vw"],  // left-aligned
        [line5Ref, "5vw"],   // 42.1% indent — right of centre
      ];

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "center 55%",
          scrub: 1,
        },
      });

      lines.forEach(([ref, fromX]) => {
        tl.fromTo(ref.current, { x: fromX }, { x: 0, ease: "none" }, 0);
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#fafafa] flex flex-col items-center justify-center overflow-hidden w-full
        px-4 py-16
        md:px-8 md:py-[120px]"
    >
      <div className="flex flex-col gap-6 items-start w-full">

        {/* [ 8+ years in industry ] + horizontal rule */}
        <div className="flex flex-col gap-3 items-end w-full">
          <span
            className="text-[#1f1f1f] text-right uppercase w-full text-[14px] leading-[1.1]"
            style={{ fontFamily: MONO }}
          >
            [ 8+ years in industry ]
          </span>
          <div className="w-full border-t border-[#1f1f1f]" />
        </div>

        {/* Staggered text lines */}
        <div className="flex flex-col items-start w-full">

          {/* Line 1: left-aligned — animates from the left */}
          <div ref={line1Ref} className="flex items-start gap-3 w-full">
            <span className="shrink-0 whitespace-nowrap md:whitespace-pre" style={titleStyle}>
              A creative director&nbsp;&nbsp;/
            </span>
            <span
              className="shrink-0 text-[#1f1f1f] text-[14px] leading-[1.1] pt-1"
              style={{ fontFamily: MONO }}
            >
              001
            </span>
          </div>

          {/* Line 2: 14.9% indent — animates from the left */}
          <div ref={line2Ref} className="w-full pl-0 md:pl-[14.9%]">
            <span className="whitespace-nowrap" style={titleStyle}>
              Photographer
            </span>
          </div>

          {/* Line 3: 42.4% indent — animates from the right */}
          <div ref={line3Ref} className="w-full pl-0 md:pl-[42.4%]">
            <span className="whitespace-nowrap" style={titleStyle}>
              Born{" "}
              <i style={{ fontFamily: PLAYFAIR, fontStyle: "italic", fontWeight: 400 }}>
                &amp;
              </i>{" "}
              raised
            </span>
          </div>

          {/* Line 4: left-aligned — animates from the left */}
          <div ref={line4Ref} className="w-full">
            <span className="whitespace-nowrap" style={titleStyle}>
              on the south side
            </span>
          </div>

          {/* Line 5: 42.1% indent — animates from the right */}
          <div ref={line5Ref} className="relative w-full pl-0 md:pl-[42.1%]">
            <span className="whitespace-nowrap" style={titleStyle}>
              of chicago.
            </span>
            <span
              className="hidden md:block absolute text-[#1f1f1f] text-[14px] leading-[1.1] whitespace-nowrap"
              style={{ fontFamily: MONO, left: "74.9%", top: 26 }}
            >
              [ creative freelancer ]
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
