const INTER = "var(--font-inter, sans-serif)";
const MONO  = "var(--font-geist-mono, monospace)";

const SOCIALS_LEFT  = ["Facebook", "Instagram"];
const SOCIALS_RIGHT = ["X.com", "LinkedIn"];

function SocialLink({ name }: { name: string }) {
  return (
    <p
      className="text-white text-[18px] leading-[1.1] uppercase"
      style={{ fontFamily: INTER, letterSpacing: "-0.04em" }}
    >
      {name}
    </p>
  );
}

function CtaBlock() {
  return (
    <div className="flex flex-col gap-3 items-start">
      <p
        className="text-white text-[24px] leading-[1.1] uppercase"
        style={{ fontFamily: INTER, letterSpacing: "-0.04em" }}
      >
        <span className="font-light italic">Have a </span>
        <span className="font-black not-italic">project</span>
        <span className="font-light italic"> in mind?</span>
      </p>
      <button
        className="border border-white text-white font-medium text-[14px] px-4 py-3 rounded-full whitespace-nowrap"
        style={{ fontFamily: INTER, letterSpacing: "-0.04em" }}
      >
        Let&apos;s talk
      </button>
    </div>
  );
}

function LegalLinks() {
  return (
    <div className="flex gap-[34px] items-center">
      {["Licences", "Privacy policy"].map((label) => (
        <a
          key={label}
          href="#"
          className="text-white text-[12px] uppercase underline leading-[1.1] whitespace-nowrap"
          style={{ fontFamily: INTER, letterSpacing: "-0.04em" }}
        >
          {label}
        </a>
      ))}
    </div>
  );
}

export default function FooterSection() {
  return (
    <footer id="contact" className="bg-black w-full overflow-hidden">

      {/* ── Mobile ──────────────────────────────────────────────────────── */}
      <div className="md:hidden flex flex-col gap-12 pt-12 px-4">

        {/* CTA + socials (stacked) + rule */}
        <div className="flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-4 items-start">
            <CtaBlock />
            {[...SOCIALS_LEFT, ...SOCIALS_RIGHT].map((name) => (
              <SocialLink key={name} name={name} />
            ))}
          </div>
          <div className="w-full border-t border-white" />
        </div>

        {/* Legal + credit + wordmark */}
        <div className="flex flex-col gap-3 w-full">
          <div className="self-center">
            <LegalLinks />
          </div>
          <div className="overflow-hidden w-full">
            <p
              className="text-white text-[10px] leading-[1.1] uppercase mb-3"
              style={{ fontFamily: MONO }}
            >
              [ Coded By Claude ]
            </p>
            <p
              className="text-white font-semibold capitalize leading-[0.8] whitespace-nowrap"
              style={{ fontFamily: INTER, fontSize: 91, letterSpacing: "-0.06em" }}
            >
              H.Studio
            </p>
          </div>
        </div>

      </div>

      {/* ── Desktop ─────────────────────────────────────────────────────── */}
      <div className="hidden md:flex flex-col gap-[120px] pt-12 px-8">

        {/* CTA | socials center | socials right + rule */}
        <div className="flex flex-col gap-12 w-full">
          <div className="flex items-start justify-between w-full">
            <CtaBlock />
            <div className="text-center" style={{ width: 298 }}>
              {SOCIALS_LEFT.map((name) => <SocialLink key={name} name={name} />)}
            </div>
            <div className="text-right" style={{ width: 298 }}>
              {SOCIALS_RIGHT.map((name) => <SocialLink key={name} name={name} />)}
            </div>
          </div>
          <div className="w-full border-t border-white" />
        </div>

        {/* H.Studio wordmark (left, clipped) + legal links (bottom-right) */}
        <div className="flex items-end justify-between w-full">

          {/* Clipping container — text bleeds right and is trimmed */}
          <div className="relative overflow-hidden flex-1 min-w-0" style={{ height: 219 }}>
            <p
              className="absolute top-1/2 -translate-y-1/2 whitespace-nowrap font-semibold capitalize text-white leading-[0.8]"
              style={{ fontFamily: INTER, fontSize: 290, letterSpacing: "-0.06em", left: 0 }}
            >
              H.Studio
            </p>
            {/* [ Coded By Claude ] — rotated vertically along the left edge */}
            <div
              className="absolute top-1/2 -translate-y-1/2 flex items-center justify-center"
              style={{ left: 0, width: 15, height: 160 }}
            >
              <div className="-rotate-90 whitespace-nowrap">
                <p
                  className="text-white text-[14px] leading-[1.1] uppercase"
                  style={{ fontFamily: MONO }}
                >
                  [ Coded By Claude ]
                </p>
              </div>
            </div>
          </div>

          {/* Legal links, pinned to bottom-right */}
          <div className="shrink-0 pb-8">
            <LegalLinks />
          </div>

        </div>

      </div>

    </footer>
  );
}
