import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Play } from "lucide-react";
import { DonateCta } from "@/components/donate-cta";
import { PORTFOLIO } from "@/lib/portfolio";
import { MOTTO } from "@/lib/brand";
import girlMeal from "@/assets/IMG-20261102-WA0028.jpg";
import girlBag from "@/assets/IMG-20261102-WA0026.jpg";
import brothersBags from "@/assets/IMG-20261102-WA0031.jpg";
import studentBag from "@/assets/IMG-20261102-WA0024.jpg";
import riceSacks from "@/assets/IMG-20261102-WA0029.jpg";
import riceWarehouse from "@/assets/IMG-20261102-WA0030.jpg";

const HIGHLIGHTS = [
  { src: girlMeal, alt: "Young girl receiving a packaged meal from a volunteer", caption: "A hot meal handed to a young girl" },
  { src: girlBag, alt: "Schoolgirl before and after receiving a new foundation backpack", caption: "Before & after: a new school bag" },
  { src: riceSacks, alt: "Sacks of rice stacked for food distribution", caption: "Bags of rice ready for families" },
  { src: brothersBags, alt: "Two brothers before and after receiving new school bags", caption: "Before & after: brothers back to school" },
  { src: riceWarehouse, alt: "Rice sacks stacked high in the store", caption: "Rice stacked up for the outreach" },
  { src: studentBag, alt: "Student before and after receiving a foundation backpack", caption: "Before & after: ready for class" },
];

export const Route = createFileRoute("/portfolio/")({
  head: () => ({
    meta: [
      { title: "Portfolio — Olaide Doherty Charity Foundation" },
      {
        name: "description",
        content:
          "Business grants, back-to-school empowerment, food outreach and more — see the projects the OD Charity Foundation has delivered.",
      },
      { property: "og:title", content: "Our Portfolio — OD Charity Foundation" },
      {
        property: "og:description",
        content: "Real projects, real people: see where giving has met the needs.",
      },
    ],
  }),
  component: PortfolioIndex,
});

function PortfolioIndex() {
  return (
    <>
      <section className="px-5 pb-12 pt-16 md:pt-24">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow text-primary">Our portfolio</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-[1.05] md:text-7xl">
            {MOTTO.split(" meets ")[0]} <span className="italic text-primary">meets</span>{" "}
            {MOTTO.split(" meets ")[1]}.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            A record of the projects we've delivered with the help of our sponsors, supporters and
            community.
          </p>
        </div>
      </section>

      <section className="px-5 pb-16">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:gap-8">
          {PORTFOLIO.map((p, i) => (
            <Link
              key={p.slug}
              to="/portfolio/$slug"
              params={{ slug: p.slug }}
              className={`group block ${i % 2 === 1 ? "md:mt-16" : ""}`}
            >
              <div className="relative overflow-hidden rounded-[2rem] bg-card shadow-soft">
                <img
                  src={p.cover.poster || p.cover.src}
                  alt={p.cover.alt}
                  width={p.cover.w}
                  height={p.cover.h}
                  loading={i < 2 ? "eager" : "lazy"}
                  className="aspect-[4/5] w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                {(p.cover.type === "video" || p.video) && (
                  <span className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-gold text-gold-foreground shadow-gold transition-transform group-hover:scale-110">
                    <Play className="ml-0.5 h-5 w-5 fill-current" />
                  </span>
                )}
              </div>
              <div className="mt-6 px-1">
                <p className="eyebrow text-primary">
                  {p.category} · {p.date}
                </p>
                <h2 className="mt-2 text-3xl font-semibold">{p.title}</h2>
                <p className="mt-2 max-w-md text-muted-foreground">{p.summary}</p>
                <span className="mt-4 inline-flex items-center gap-2 font-semibold text-primary transition-all group-hover:gap-3">
                  View project <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-ivory px-5 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow text-primary">Moments from the field</p>
          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">Photo highlights</h2>
          <div className="mt-10 columns-2 gap-4 md:columns-3 [&>*]:mb-4">
            {HIGHLIGHTS.map((h) => (
              <figure key={h.src} className="break-inside-avoid">
                <img
                  src={h.src}
                  alt={h.alt}
                  loading="lazy"
                  className="w-full rounded-2xl shadow-soft"
                />
                <figcaption className="mt-2 text-sm text-muted-foreground">{h.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <DonateCta />
    </>
  );
}
