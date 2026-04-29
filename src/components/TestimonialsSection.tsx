const INTER = "var(--font-inter, sans-serif)";

// Figma MCP assets — replace with permanent client logo URLs before shipping
const LOGO_MARKO = "https://www.figma.com/api/mcp/asset/c8186e23-1486-43fb-b8d6-0a17c8af0d4f";
const LOGO_LUKAS = "https://www.figma.com/api/mcp/asset/ce107ce4-c107-490b-bbc3-1e3ac2ef6256";
const LOGO_SARAH = "https://www.figma.com/api/mcp/asset/cd1167e0-20cc-4ddd-bc08-cabdd7f307cc";
const LOGO_SOFIA = "https://www.figma.com/api/mcp/asset/a68174a7-6130-4069-9dae-f87dd6a75f85";

interface TestimonialData {
  logo: string;
  logoW: number;
  logoH: number;
  quote: string;
  author: string;
  desktopRotation: number;
  desktopLeft: string;
  desktopTop: number;
  desktopZ: number;
  desktopPb?: number;
  mobileRotation: number;
}

const TESTIMONIALS: TestimonialData[] = [
  {
    logo: LOGO_MARKO,
    logoW: 143, logoH: 19,
    quote: "A brilliant creative partner who transformed our vision into a unique, high-impact brand identity. Their ability to craft everything from custom mascots to polished logos is truly impressive.",
    author: "Marko Stojković",
    desktopRotation: -6.85,
    desktopLeft: "7.08%",
    desktopTop: 142,
    desktopZ: 20,
    mobileRotation: -3.5,
  },
  {
    logo: LOGO_LUKAS,
    logoW: 138, logoH: 19,
    quote: "Professional, precise, and incredibly fast at handling complex product visualizations and templates.",
    author: "Lukas Weber",
    desktopRotation: 2.9,
    desktopLeft: "46.94%",
    desktopTop: 155,
    desktopZ: 0,
    desktopPb: 48,
    mobileRotation: 2,
  },
  {
    logo: LOGO_SARAH,
    logoW: 109, logoH: 31,
    quote: "A strategic partner who balances stunning aesthetics with high-performance UX for complex platforms. They don't just make things look good; they solve business problems through visual clarity.",
    author: "Sarah Jenkins",
    desktopRotation: 2.23,
    desktopLeft: "21.18%",
    desktopTop: 553,
    desktopZ: 20,
    mobileRotation: -2,
  },
  {
    logo: LOGO_SOFIA,
    logoW: 81, logoH: 36,
    quote: "An incredibly versatile designer who delivers consistent quality across a wide range of styles and formats.",
    author: "Sofia Martínez",
    desktopRotation: -4.15,
    desktopLeft: "68.54%",
    desktopTop: 546,
    desktopZ: 20,
    mobileRotation: 2,
  },
];

function TestimonialCard({
  logo,
  logoW,
  logoH,
  quote,
  author,
  rotation,
  cardWidth = 353,
  pb = 24,
}: {
  logo: string;
  logoW: number;
  logoH: number;
  quote: string;
  author: string;
  rotation: number;
  cardWidth?: number;
  pb?: number;
}) {
  return (
    <div style={{ transform: `rotate(${rotation}deg)`, flexShrink: 0 }}>
      <div
        className="bg-[#f1f1f1] border border-[#ddd] flex flex-col gap-4 items-start pt-6 px-6 rounded-[4px]"
        style={{ width: cardWidth, paddingBottom: pb }}
      >
        <div className="relative shrink-0" style={{ width: logoW, height: logoH }}>
          <img
            alt=""
            className="absolute block inset-0 max-w-none size-full pointer-events-none"
            src={logo}
          />
        </div>
        <p
          className="text-[#1f1f1f] text-[18px] leading-[1.3] w-full"
          style={{ fontFamily: INTER, letterSpacing: "-0.04em" }}
        >
          {quote}
        </p>
        <p
          className="font-black text-black text-[16px] leading-[1.1] uppercase whitespace-nowrap"
          style={{ fontFamily: INTER, letterSpacing: "-0.04em" }}
        >
          {author}
        </p>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-white overflow-hidden w-full">

      {/* ── Mobile ──────────────────────────────────────────────────────── */}
      <div className="md:hidden flex flex-col gap-8 px-4 py-16">
        <h2
          className="text-black font-medium capitalize"
          style={{ fontFamily: INTER, fontSize: 64, letterSpacing: "-0.07em", lineHeight: 0.8 }}
        >
          Testimonials
        </h2>

        {/* Horizontal scroll — first card mostly visible, rest peek off-screen */}
        <div className="overflow-x-auto -mx-4" style={{ WebkitOverflowScrolling: "touch" }}>
          <div className="flex items-center pl-4">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={t.author}
                className="flex items-center justify-center shrink-0"
                style={{
                  width: 277,
                  marginRight: i < TESTIMONIALS.length - 1 ? -10 : 24,
                }}
              >
                <TestimonialCard
                  {...t}
                  rotation={t.mobileRotation}
                  cardWidth={260}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Desktop ─────────────────────────────────────────────────────── */}
      <div
        className="hidden md:flex items-center justify-center relative px-8 py-[120px]"
        style={{ minHeight: 900 }}
      >
        <h2
          className="relative z-[10] text-black font-medium capitalize text-center shrink-0"
          style={{
            fontFamily: INTER,
            fontSize: "clamp(64px, 13.75vw, 198px)",
            letterSpacing: "-0.07em",
            lineHeight: 1.1,
          }}
        >
          Testimonials
        </h2>

        {TESTIMONIALS.map((t) => (
          <div
            key={t.author}
            className="absolute flex items-center justify-center"
            style={{ left: t.desktopLeft, top: t.desktopTop, zIndex: t.desktopZ }}
          >
            <TestimonialCard {...t} rotation={t.desktopRotation} pb={t.desktopPb} />
          </div>
        ))}
      </div>

    </section>
  );
}
