import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/image";

const MONO = "var(--font-geist-mono, monospace)";
const INTER = "var(--font-inter, sans-serif)";

const ARROW = "/images/projects_arrow.svg";
const C_TL  = "/images/corner-bracket_TL.svg";
const C_BL  = "/images/corner-bracket_BL.svg";
const C_TR  = "/images/corner-bracket_TR.svg";
const C_BR  = "/images/corner-bracket_BR.svg";

const DESKTOP_HEIGHTS = [744, 699, 699, 744];

const PROJECTS_QUERY = `*[_type == "project"] | order(order asc) {
  _id,
  title,
  tags,
  image,
}`;

type Project = {
  _id: string;
  title: string;
  tags: string[];
  image: object | null;
};

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
  image,
  desktopH,
}: {
  title: string;
  tags: string[];
  image: object | null;
  desktopH: number;
}) {
  return (
    <div className="flex flex-col gap-[10px] w-full shrink-0">
      <div className="relative w-full overflow-hidden" style={{ height: desktopH }}>
        {image && (
          <img
            alt={title}
            className="absolute inset-0 size-full object-cover pointer-events-none"
            src={urlFor(image).width(900).url()}
          />
        )}
        <div className="absolute bottom-4 left-4">
          <Tags tags={tags} />
        </div>
      </div>
      <div className="flex items-center justify-between w-full">
        <p
          className="font-black text-black uppercase whitespace-nowrap leading-[1.1]"
          style={{ fontFamily: INTER, fontSize: 36, letterSpacing: "-0.04em" }}
        >
          {title}
        </p>
        <div className="relative size-5 shrink-0">
          <img alt="" src={ARROW} className="absolute inset-0 size-full block" />
        </div>
      </div>
    </div>
  );
}

function MobileProjectCard({
  title,
  tags,
  image,
}: {
  title: string;
  tags: string[];
  image: object | null;
}) {
  return (
    <div className="flex flex-col gap-[10px] w-full shrink-0">
      <div className="relative w-full overflow-hidden" style={{ height: 390 }}>
        {image && (
          <img
            alt={title}
            className="absolute inset-0 size-full object-cover pointer-events-none"
            src={urlFor(image).width(600).url()}
          />
        )}
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
        <div className="relative size-5 shrink-0">
          <img alt="" src={ARROW} className="absolute inset-0 size-full block" />
        </div>
      </div>
    </div>
  );
}

function CtaPanel() {
  return (
    <div className="flex gap-3 items-stretch w-full">
      <div className="flex flex-col justify-between shrink-0 w-6">
        <img alt="" src={C_TL} className="size-4 block" />
        <div className="-rotate-90">
          <img alt="" src={C_BL} className="size-4 block" />
        </div>
      </div>
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

export default async function ProjectsSection() {
  const projects: Project[] = await client.fetch(PROJECTS_QUERY) ?? [];

  return (
    <section
      id="projects"
      className="bg-[#fafafa] overflow-hidden w-full
        px-4 py-12
        md:px-8 md:py-[80px]"
    >
      {/* ── Header ──────────────────────────────────────────────────────── */}
      <div className="flex items-start justify-between w-full mb-8 md:mb-[61px]">
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
        <div className="flex items-center justify-center w-[15px] h-[110px]">
          <span
            className="-rotate-90 text-[#1f1f1f] text-[14px] leading-[1.1] uppercase whitespace-nowrap"
            style={{ fontFamily: MONO }}
          >
            [ portfolio ]
          </span>
        </div>
      </div>

      {/* ── Mobile ──────────────────────────────────────────────────────── */}
      <div className="flex flex-col gap-6 md:hidden">
        {projects.map((p) => (
          <MobileProjectCard key={p._id} {...p} />
        ))}
        <CtaPanel />
      </div>

      {/* ── Desktop ─────────────────────────────────────────────────────── */}
      <div className="hidden md:flex gap-6 items-start w-full">
        <div className="flex-1 flex flex-col gap-6 min-w-0">
          {projects[0] && <ProjectCard {...projects[0]} desktopH={DESKTOP_HEIGHTS[0]} />}
          {projects[1] && <ProjectCard {...projects[1]} desktopH={DESKTOP_HEIGHTS[1]} />}
          <CtaPanel />
        </div>
        <div className="flex-1 flex flex-col gap-[117px] min-w-0 pt-[240px]">
          {projects[2] && <ProjectCard {...projects[2]} desktopH={DESKTOP_HEIGHTS[2]} />}
          {projects[3] && <ProjectCard {...projects[3]} desktopH={DESKTOP_HEIGHTS[3]} />}
        </div>
      </div>
    </section>
  );
}
