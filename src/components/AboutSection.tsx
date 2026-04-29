const MONO = "var(--font-geist-mono, monospace)";
const INTER = "var(--font-inter, sans-serif)";

// Figma MCP assets — replace with permanent URLs before shipping
const ABOUT_IMAGE = "https://www.figma.com/api/mcp/asset/30fb652f-8b3f-49bf-b88c-4e376d105593";
const C_TL = "https://www.figma.com/api/mcp/asset/9ef91f98-f02d-45a9-90bf-f4d6956dc8ca";
const C_BL = "https://www.figma.com/api/mcp/asset/9669e25a-59bb-4967-93a7-3736d7fc52ce";
const C_TR = "https://www.figma.com/api/mcp/asset/17d988a0-8fd0-428c-bc02-2cd27bcd1cbf";
const C_BR = "https://www.figma.com/api/mcp/asset/2c674399-2c0e-4f46-adf0-e4e22cfe128d";

const BODY_TEXT =
  "Placeholder paragraph one. This is where you introduce yourself — your background, your passion for your craft, and what drives you creatively. Two to three sentences work best here. Placeholder paragraph two. Here you can describe your technical approach, how you collaborate with clients, or what sets your work apart from others in your field.";

function CornerBrackets({ italic }: { italic?: boolean }) {
  return (
    <div className="flex items-stretch gap-3 w-full">
      {/* Left corner column */}
      <div className="flex flex-col justify-between shrink-0 w-6 self-stretch">
        <img alt="" src={C_TL} className="size-4 block" />
        <div className="-rotate-90">
          <img alt="" src={C_BL} className="size-4 block" />
        </div>
      </div>

      {/* Text */}
      <p
        className="flex-1 min-w-0 text-[#1f1f1f] text-[14px] leading-[1.3] py-3"
        style={{
          fontFamily: INTER,
          letterSpacing: "-0.04em",
          fontStyle: italic ? "italic" : "normal",
        }}
      >
        {BODY_TEXT}
      </p>

      {/* Right corner column */}
      <div className="flex flex-col justify-between shrink-0 w-6 self-stretch">
        <div className="rotate-90">
          <img alt="" src={C_TR} className="size-4 block" />
        </div>
        <div className="rotate-180 self-end">
          <img alt="" src={C_BR} className="size-4 block" />
        </div>
      </div>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-[#fafafa] overflow-hidden w-full
        px-4 py-12
        md:px-8 md:py-[80px]"
    >
      {/* ── Mobile ──────────────────────────────────────────────────────── */}
      <div className="flex flex-col gap-5 w-full md:hidden">
        <span className="text-[#1f1f1f] text-[14px] leading-[1.1] uppercase" style={{ fontFamily: MONO }}>
          002
        </span>
        <span className="text-[#1f1f1f] text-[14px] leading-[1.1] uppercase" style={{ fontFamily: MONO }}>
          [ About ]
        </span>
        <CornerBrackets />
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: "422 / 594" }}>
          <img
            alt="Portrait"
            className="absolute w-[101.42%] h-[101.39%] max-w-none object-cover"
            style={{ left: "-0.71%", top: "-0.69%" }}
            src={ABOUT_IMAGE}
          />
        </div>
      </div>

      {/* ── Desktop ─────────────────────────────────────────────────────── */}
      <div className="hidden md:flex items-start justify-between w-full gap-8">
        {/* Left: [ About ] */}
        <span className="shrink-0 text-[#1f1f1f] text-[14px] leading-[1.1] uppercase" style={{ fontFamily: MONO }}>
          [ About ]
        </span>

        {/* Right column: text block + image */}
        <div className="flex items-end gap-8 flex-1 min-w-0">
          {/* Bracketed paragraph — flex-1 */}
          <div className="flex-1 min-w-0">
            <CornerBrackets italic />
          </div>

          {/* 002 + portrait image */}
          <div className="flex items-start gap-6 shrink-0">
            <span className="text-[#1f1f1f] text-[14px] leading-[1.1]" style={{ fontFamily: MONO }}>
              002
            </span>
            <div
              className="relative overflow-hidden shrink-0"
              style={{ width: 436, height: 614 }}
            >
              <img
                alt="Portrait"
                className="absolute max-w-none object-cover"
                style={{
                  width: "101.42%",
                  height: "101.39%",
                  left: "-0.71%",
                  top: "-0.69%",
                }}
                src={ABOUT_IMAGE}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
