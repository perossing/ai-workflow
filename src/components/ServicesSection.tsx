import { sanityFetch } from "@/sanity/live";
import { urlFor } from "@/sanity/image";

const MONO = "var(--font-geist-mono, monospace)";
const INTER = "var(--font-inter, sans-serif)";

const SERVICES_QUERY = `*[_type == "service"] | order(order asc) {
  _id,
  name,
  description,
  image,
  cropVertical,
}`;

type Service = {
  _id: string;
  name: string;
  description: string;
  image: object | null;
  cropVertical: boolean;
};

export default async function ServicesSection() {
  const { data: servicesData } = await sanityFetch({ query: SERVICES_QUERY });
  const services: Service[] = servicesData ?? [];

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

      {/* [n]  ···  Deliverables */}
      <div
        className="flex items-center justify-between w-full text-white uppercase whitespace-nowrap font-light"
        style={{
          fontFamily: INTER,
          fontSize: "clamp(32px, 6.7vw, 96px)",
          letterSpacing: "-0.08em",
          lineHeight: "normal",
        }}
      >
        <span>[{services.length}]</span>
        <span>Deliverables</span>
      </div>

      {/* Service rows */}
      <div className="flex flex-col gap-12 w-full">
        {services.map(({ _id, name, description, image, cropVertical }, index) => (
          <div key={_id} className="flex flex-col gap-[9px] w-full">

            {/* Number + divider */}
            <p
              className="text-white text-[14px] leading-[1.1] uppercase"
              style={{ fontFamily: MONO }}
            >
              [ {index + 1} ]
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
                  {description}
                </p>

                {/* Thumbnail */}
                {image && (
                  <div className="relative shrink-0 size-[151px] overflow-hidden">
                    {cropVertical ? (
                      <img
                        alt=""
                        className="absolute left-0 max-w-none w-full pointer-events-none"
                        style={{ height: "149.93%", top: "-42.25%" }}
                        src={urlFor(image).width(304).url()}
                      />
                    ) : (
                      <img
                        alt=""
                        className="absolute inset-0 size-full object-cover pointer-events-none"
                        src={urlFor(image).width(304).height(304).url()}
                      />
                    )}
                  </div>
                )}
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
