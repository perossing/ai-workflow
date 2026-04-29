const MONO = "var(--font-geist-mono, monospace)";
const INTER = "var(--font-inter, sans-serif)";

// Figma MCP assets — replace with permanent URLs before shipping
const IMG_SURFERS   = "https://www.figma.com/api/mcp/asset/1b018d12-7123-4263-a2e7-46ba664d6225";
const IMG_CYBERPUNK = "https://www.figma.com/api/mcp/asset/c406b020-f88f-4dbd-8775-e4ff9d6f284e";
const IMG_AGENCY    = "https://www.figma.com/api/mcp/asset/9380bafe-771c-4929-b0d1-d3c64a82dc80";
const IMG_MINIMAL   = "https://www.figma.com/api/mcp/asset/811fdc27-f938-4158-8b56-dff13f64c983";
const ARROW         = "https://www.figma.com/api/mcp/asset/0ca9beb3-0bb7-49c8-bf69-0bf4c05c960a";
const C_TL          = "https://www.figma.com/api/mcp/asset/57b1bc30-e45c-4996-8b24-c35060da53a9";
const C_BL          = "https://www.figma.com/api/mcp/asset/3bf2aa0b-d27b-405d-a76a-90823c00951a";
const C_TR          = "https://www.figma.com/api/mcp/asset/5350c6b9-b738-439a-8e01-d51cb368eecf";
const C_BR          = "https://www.figma.com/api/mcp/asset/c1844aff-361f-443b-8e87-18285ff29707";

const PROJECTS = [
  { title: "Surfers paradise",   tags: ["Social Media", "Photography"], img: IMG_SURFERS,   desktopH: 744 },
  { title: "Cyberpunk caffe",    tags: ["Social Media", "Photography"], img: IMG_CYBERPUNK, desktopH: 699 },
  { title: "Agency 976",         tags: ["Social Media", "Photography"], img: IMG_AGENCY,    desktopH: 699 },
  { title: "Minimal Playground", tags: ["Social Media", "Photography"], img: IMG_MINIMAL,   desktopH: 744 },
];

function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="flex gap-3 items-center">
      {tags.map((tag) => (
        <span
          key={tag}
          className="backdrop-blur-[10px] bg-[rgba(255,255,255,0.3)] px-2 py-1 rounded-full text-[#111] text-[14px] font-medium whitespace-nowrap"
          style={{ fontFamily: INTER, letterSpacing: "-0.04em" }}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function ProjectCard({
  title,
  tags,
  img,
  desktopH,
}: {
  title: string;
  tags: string[];
  img: string;
  desktopH: number;
}) {
  return (
    <div className="flex flex-col gap-[10px] w-full shrink-0">
      {/* Image container */}
      <div
        className="relative w-full overflow-hidden"
        style={{ height: desktopH }}
      >
        <img
          alt={title}
          className="absolute inset-0 size-full object-cover pointer-events-none"
          src={img}
        />
        {/* Pills */}
        <div className="absolute bottom-4 left-4">
          <Tags tags={tags} />
        </div>
      </div>

      {/* Title + arrow */}
      <div className="flex items-center justify-between w-full">
        <p
          className="font-black text-black uppercase whitespace-nowrap leading-[1.1]"
          style={{ fontFamily: INTER, fontSize: 36, letterSpacing: "-0.04em" }}
        >
          {title}
        </p>
        <div className="relative size-8 shrink-0 -rotate-90">
          <img alt="" src={ARROW} className="absolute inset-0 size-full block" />
        </div>
      </div>
    </div>
  );
}

function MobileProjectCard({
  title,
  tags,
  img,
}: {
  title: string;
  tags: string[];
  img: string;
}) {
  return (
    <div className="flex flex-col gap-[10px] w-full shrink-0">
      <div className="relative w-full overflow-hidden" style={{ height: 390 }}>
        <img
          alt={title}
          className="absolute inset-0 size-full object-cover pointer-events-none"
          src={img}
        />
        <div className="absolute bottom-4 left-4">
          <Tags tags={tags} />
        </div>
      </div>
      <div className="flex items-center justify-between w-full">
        <p
          className="font-black text-black uppercase whitespace-nowrap leading-[1.1]"
          style={{ fontFamily: INTER, fontSize: 24, letterSpacing: "-0.04em" }}
        >
          {title}
        </p>
        <div className="relative size-8 shrink-0 -rotate-90">
          <img alt="" src={ARROW} className="absolute inset-0 size-full block" />
        </div>
      </div>
    </div>
  );
}

function CtaPanel() {
  return (
    <div className="flex gap-3 items-stretch w-full">
      {/* Left brackets */}
      <div className="flex flex-col justify-between shrink-0 w-6">
        <img alt="" src={C_TL} className="size-4 block" />
        <div className="-rotate-90">
          <img alt="" src={C_BL} className="size-4 block" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col gap-[10px] items-start py-3">
        <p
          className="italic text-[#1f1f1f] text-[14px] leading-[1.3]"
          style={{ fontFamily: INTER, letterSpacing: "-0.04em" }}
        >
          Discover how my creativity transforms ideas into impactful digital
          experiences — schedule a call with me to get started.
        </p>
        <button
          className="flex items-center justify-center px-4 py-3 bg-black text-white rounded-full text-sm font-medium"
          style={{ fontFamily: INTER, letterSpacing: "-0.035em" }}
        >
          Let&apos;s talk
        </button>
      </div>

      {/* Right brackets */}
      <div className="flex flex-col justify-between shrink-0 w-6">
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

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-[#fafafa] overflow-hidden w-full
        px-4 py-12
        md:px-8 md:py-[80px]"
    >
      {/* ── Header ──────────────────────────────────────────────────────── */}
      <div className="flex items-start justify-between w-full mb-8 md:mb-[61px]">
        {/* Left: title + 004 */}
        <div className="flex gap-[10px] items-start uppercase whitespace-nowrap">
          <div
            className="font-light text-black leading-[0.86]"
            style={{
              fontFamily: INTER,
              fontSize: "clamp(32px, 6.7vw, 96px)",
              letterSpacing: "-0.08em",
            }}
          >
            <p>Selected</p>
            <p>Work</p>
          </div>
          <span className="text-[#1f1f1f] text-[14px] leading-[1.1]" style={{ fontFamily: MONO }}>
            004
          </span>
        </div>

        {/* Right: [ portfolio ] rotated */}
        <div className="flex items-center justify-center w-[15px] h-[110px]">
          <span
            className="-rotate-90 text-[#1f1f1f] text-[14px] leading-[1.1] uppercase whitespace-nowrap"
            style={{ fontFamily: MONO }}
          >
            [ portfolio ]
          </span>
        </div>
      </div>

      {/* ── Mobile: single column ────────────────────────────────────────── */}
      <div className="flex flex-col gap-6 md:hidden">
        {PROJECTS.map((p) => (
          <MobileProjectCard key={p.title} {...p} />
        ))}
        <CtaPanel />
      </div>

      {/* ── Desktop: staggered two-column grid ──────────────────────────── */}
      <div className="hidden md:flex gap-6 items-start w-full">
        {/* Left column */}
        <div className="flex-1 flex flex-col gap-6 min-w-0">
          <ProjectCard {...PROJECTS[0]} />
          <ProjectCard {...PROJECTS[1]} />
          <CtaPanel />
        </div>

        {/* Right column — offset 240px down */}
        <div className="flex-1 flex flex-col gap-[117px] min-w-0 pt-[240px]">
          <ProjectCard {...PROJECTS[2]} />
          <ProjectCard {...PROJECTS[3]} />
        </div>
      </div>
    </section>
  );
}
