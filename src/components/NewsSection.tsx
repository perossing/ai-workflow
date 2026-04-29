import { Fragment } from 'react';

const INTER = "var(--font-inter, sans-serif)";

// Figma MCP assets — replace with permanent URLs before shipping
const IMG_1 = "https://www.figma.com/api/mcp/asset/c68c5354-2dae-4d53-b1e4-5695142dfb72";
const IMG_2 = "https://www.figma.com/api/mcp/asset/08027e05-71cd-4f70-a043-2f8115d694a1";
const IMG_3 = "https://www.figma.com/api/mcp/asset/273fcc4c-ab53-4c6b-b8cb-c58895ac862d";
const ARROW = "https://www.figma.com/api/mcp/asset/a59500b1-3081-4c75-9659-67145c61a5fb";

const NEWS = [
  {
    img: IMG_1,
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    href: "#",
    desktopOffset: false,
  },
  {
    img: IMG_2,
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    href: "#",
    desktopOffset: true,
  },
  {
    img: IMG_3,
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    href: "#",
    desktopOffset: false,
  },
];

function ReadMore({ href }: { href: string }) {
  return (
    <a
      href={href}
      className="border-b border-black flex items-center gap-[10px] py-1 shrink-0 self-start"
    >
      <span
        className="font-medium text-black text-[14px] leading-normal whitespace-nowrap"
        style={{ fontFamily: INTER, letterSpacing: "-0.04em" }}
      >
        Read more
      </span>
      <div className="relative shrink-0 size-[18px] -rotate-90">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={ARROW} />
      </div>
    </a>
  );
}

function NewsCard({
  img,
  caption,
  href,
  imgHeight,
  className = "",
  desktopOffset = false,
}: {
  img: string;
  caption: string;
  href: string;
  imgHeight: number;
  className?: string;
  desktopOffset?: boolean;
}) {
  return (
    <div
      className={`flex flex-col gap-4 items-start ${className}`}
      style={{ paddingTop: desktopOffset ? 120 : 0 }}
    >
      <div className="relative w-full overflow-hidden shrink-0" style={{ height: imgHeight }}>
        <img
          alt=""
          className="absolute inset-0 size-full object-cover pointer-events-none"
          src={img}
        />
      </div>
      <p
        className="text-[#1f1f1f] text-[14px] leading-[1.3] w-full"
        style={{ fontFamily: INTER, letterSpacing: "-0.04em" }}
      >
        {caption}
      </p>
      <ReadMore href={href} />
    </div>
  );
}

export default function NewsSection() {
  return (
    <section id="news" className="bg-[#f3f3f3] overflow-hidden w-full">

      {/* ── Mobile ──────────────────────────────────────────────────────── */}
      <div className="md:hidden flex flex-col gap-8 px-4 py-16">
        <h2
          className="text-black font-light uppercase leading-[0.86]"
          style={{ fontFamily: INTER, fontSize: 32, letterSpacing: "-0.08em" }}
        >
          Keep up with my<br />latest news<br />&amp; achievements
        </h2>

        {/* Horizontal scroll — all 3 cards at 300px, gap 16px */}
        <div className="overflow-x-auto -mx-4">
          <div className="flex items-start gap-4 pl-4 pr-4">
            {NEWS.map((item, i) => (
              <NewsCard
                key={i}
                {...item}
                imgHeight={398}
                className="shrink-0 w-[300px]"
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── Desktop ─────────────────────────────────────────────────────── */}
      <div className="hidden md:flex items-end gap-24 px-8 py-[120px]">

        {/* Rotated title — 110px wide column, 706px tall to span the card area */}
        <div
          className="shrink-0 flex items-center justify-center"
          style={{ width: 110, height: 706 }}
        >
          <div className="-rotate-90 flex-none">
            <div
              className="flex flex-col font-light text-black uppercase"
              style={{ fontFamily: INTER, fontSize: 64, letterSpacing: "-0.08em" }}
            >
              <p className="leading-[0.86] whitespace-nowrap">Keep up with my latest</p>
              <p className="leading-[0.86] whitespace-nowrap">news &amp; achievements</p>
            </div>
          </div>
        </div>

        {/* Cards — scroll horizontally when not all cards fit */}
        <div className="overflow-x-auto flex-1 min-w-0">
          <div className="flex items-start">
            {NEWS.map((item, i) => (
              <Fragment key={i}>
                {i > 0 && (
                  <div className="w-px self-stretch bg-black shrink-0 mx-[31px]" />
                )}
                <NewsCard
                  {...item}
                  imgHeight={469}
                  className="shrink-0 w-[353px]"
                  desktopOffset={item.desktopOffset}
                />
              </Fragment>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}
