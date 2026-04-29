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
  return (
    <section
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

          {/* Line 1: "A creative director   /" + 001 label */}
          <div className="flex items-start gap-3 w-full">
            <span
              className="shrink-0 whitespace-nowrap md:whitespace-pre"
              style={titleStyle}
            >
              A creative director&nbsp;&nbsp;/
            </span>
            <span
              className="shrink-0 text-[#1f1f1f] text-[14px] leading-[1.1] pt-1"
              style={{ fontFamily: MONO }}
            >
              001
            </span>
          </div>

          {/* Line 2: "Photographer" — indented on desktop */}
          <div className="w-full pl-0 md:pl-[14.9%]">
            <span className="whitespace-nowrap" style={titleStyle}>
              Photographer
            </span>
          </div>

          {/* Line 3: "Born & raised" — further indented on desktop */}
          <div className="w-full pl-0 md:pl-[42.4%]">
            <span className="whitespace-nowrap" style={titleStyle}>
              Born{" "}
              <i style={{ fontFamily: PLAYFAIR, fontStyle: "italic", fontWeight: 400 }}>
                &amp;
              </i>{" "}
              raised
            </span>
          </div>

          {/* Line 4: "on the south side" — no indent */}
          <div className="w-full">
            <span className="whitespace-nowrap" style={titleStyle}>
              on the south side
            </span>
          </div>

          {/* Line 5: "of chicago." — indented + [ creative freelancer ] label */}
          <div className="relative w-full pl-0 md:pl-[42.1%]">
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
