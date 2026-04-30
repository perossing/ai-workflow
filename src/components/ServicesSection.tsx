const MONO = "var(--font-geist-mono, monospace)";
const INTER = "var(--font-inter, sans-serif)";

const IMG_1 = "/images/brand-discovery.png";
const IMG_2 = "/images/web-design-dev.png";
const IMG_3 = "/images/marketing.png";
const IMG_4 = "/images/photography.png";

const DESCRIPTION =
  "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.";

const SERVICES = [
  { num: "[ 1 ]", name: "Brand Discovery",    img: IMG_1, crop: false },
  { num: "[ 2 ]", name: "Web design & Dev",   img: IMG_2, crop: false },
  { num: "[ 3 ]", name: "Marketing",          img: IMG_3, crop: false },
  { num: "[ 4 ]", name: "Photography",        img: IMG_4, crop: true  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-black flex flex-col items-start w-full
        gap-8 px-4 py-12
        md:gap-12 md:px-8 md:py-[80px]"
    >
      {/* [ services ] label */}
      <p
        className="text-white text-[14px] leading-[1.1] uppercase"
        style={{ fontFamily: MONO }}
      >
        [ services ]
      </p>

      {/* [4]  ···  Deliverables */}
      <div
        className="flex items-center justify-between w-full text-white uppercase whitespace-nowrap font-light"
        style={{
          fontFamily: INTER,
          fontSize: "clamp(32px, 6.7vw, 96px)",
          letterSpacing: "-0.08em",
          lineHeight: "normal",
        }}
      >
        <span>[4]</span>
        <span>Deliverables</span>
      </div>

      {/* Service rows */}
      <div className="flex flex-col gap-12 w-full">
        {SERVICES.map(({ num, name, img, crop }) => (
          <div key={num} className="flex flex-col gap-[9px] w-full">

            {/* Number + divider */}
            <p
              className="text-white text-[14px] leading-[1.1] uppercase"
              style={{ fontFamily: MONO }}
            >
              {num}
            </p>
            <div className="w-full border-t border-white" />

            {/* Content row — stacked on mobile, inline on desktop */}
            <div className="flex flex-col gap-4 mt-1 md:flex-row md:items-start md:justify-between">

              {/* Service name */}
              <p
                className="text-white text-[36px] italic font-bold leading-[1.1] uppercase whitespace-nowrap shrink-0"
                style={{ fontFamily: INTER, letterSpacing: "-0.04em" }}
              >
                {name}
              </p>

              {/* Description + image */}
              <div className="flex flex-col gap-4 items-start md:flex-row md:items-start md:gap-6">
                <p
                  className="text-white text-[14px] leading-[1.3] w-full md:w-[393px]"
                  style={{ fontFamily: INTER, letterSpacing: "-0.04em" }}
                >
                  {DESCRIPTION}
                </p>

                {/* Thumbnail */}
                <div className="relative shrink-0 size-[151px] overflow-hidden">
                  {crop ? (
                    <img
                      alt=""
                      className="absolute left-0 max-w-none w-full pointer-events-none"
                      style={{ height: "149.93%", top: "-42.25%" }}
                      src={img}
                    />
                  ) : (
                    <img
                      alt=""
                      className="absolute inset-0 size-full object-cover pointer-events-none"
                      src={img}
                    />
                  )}
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
