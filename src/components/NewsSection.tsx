import { Fragment } from "react";
import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/image";

const INTER = "var(--font-inter, sans-serif)";
const ARROW = "/images/news_arrow.svg";

const NEWS_QUERY = `*[_type == "newsArticle"] | order(order asc) {
  _id,
  caption,
  href,
  image,
  desktopOffset,
}`;

type NewsArticle = {
  _id: string;
  caption: string;
  href: string;
  image: object | null;
  desktopOffset: boolean;
};

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
      <div className="relative shrink-0 size-[12px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={ARROW} />
      </div>
    </a>
  );
}

function NewsCard({
  image,
  caption,
  href,
  imgHeight,
  imgWidth,
  className = "",
  desktopOffset = false,
}: {
  image: object | null;
  caption: string;
  href: string;
  imgHeight: number;
  imgWidth: number;
  className?: string;
  desktopOffset?: boolean;
}) {
  return (
    <div
      className={`flex flex-col gap-4 items-start ${className}`}
      style={{ paddingTop: desktopOffset ? 120 : 0 }}
    >
      <div className="relative w-full overflow-hidden shrink-0" style={{ height: imgHeight }}>
        {image && (
          <img
            alt=""
            className="absolute inset-0 size-full object-cover pointer-events-none"
            src={urlFor(image).width(imgWidth).height(imgHeight).url()}
          />
        )}
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

export default async function NewsSection() {
  const news: NewsArticle[] = await client.fetch(NEWS_QUERY) ?? [];

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
        <div className="overflow-x-auto -mx-4">
          <div className="flex items-start gap-4 pl-4 pr-4">
            {news.map((item) => (
              <NewsCard
                key={item._id}
                {...item}
                imgHeight={398}
                imgWidth={300}
                className="shrink-0 w-[300px]"
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── Desktop ─────────────────────────────────────────────────────── */}
      <div className="hidden md:flex items-end gap-24 px-8 py-[120px]">
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
        <div className="overflow-x-auto flex-1 min-w-0">
          <div className="flex items-start">
            {news.map((item, i) => (
              <Fragment key={item._id}>
                {i > 0 && (
                  <div className="w-px self-stretch bg-black shrink-0 mx-[31px]" />
                )}
                <NewsCard
                  {...item}
                  imgHeight={469}
                  imgWidth={353}
                  className="shrink-0 w-[353px]"
                />
              </Fragment>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
