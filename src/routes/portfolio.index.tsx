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
  {
    src: girlMeal,
    alt: "Young girl receiving a packaged meal from a volunteer",
    caption: "A hot meal handed to a young girl",
  },
  {
    src: girlBag,
    alt: "Schoolgirl before and after receiving a new foundation backpack",
    caption: "Before & after: a new school bag",
  },
  {
    src: riceSacks,
    alt: "Sacks of rice stacked for food distribution",
    caption: "Bags of rice ready for families",
  },
  {
    src: brothersBags,
    alt: "Two brothers before and after receiving new school bags",
    caption: "Before & after: brothers back to school",
  },
  {
    src: riceWarehouse,
    alt: "Rice sacks stacked high in the store",
    caption: "Rice stacked up for the outreach",
  },
  {
    src: studentBag,
    alt: "Student before and after receiving a foundation backpack",
    caption: "Before & after: ready for class",
  },
];

const FIELD_VIDEOS = [
  {
    src: "/assets/aistudio/VID-20261107-WA0040_51fc7c06.mp4",
    poster: "/assets/aistudio/elders-outreach-prayers-poster.jpg",
    title: "Community Elders Outreach & Prayers",
    tag: "Food Welfare · 0:27",
    description:
      "Community elders holding fresh foundation meal packages, offering heartfelt prayers of gratitude and blessings for our donors and team.",
    slug: "community-food-outreach",
  },
  {
    src: "/assets/aistudio/VID-20261107-WA0039_65ef0982.mp4",
    poster: "/assets/aistudio/maternity-clinic-thanks-poster.jpg",
    title: "Community Thanks at Maternity Clinic",
    tag: "Community Care · 0:18",
    description:
      "A mother outside Christ De Executive Clinic sharing appreciation for the neighborhood care and outreach initiatives.",
    slug: "live-community-conversations",
  },
  {
    src: "https://kindhearted-giving-garden.lovable.app/__l5e/assets-v1/037e48cc-b6af-4296-9621-875dc3cfc9a4/packed-meals-outreach.mp4",
    poster:
      "https://kindhearted-giving-garden.lovable.app/__l5e/assets-v1/67634863-8a90-410c-99d8-4f815a51a896/meal-boxes-poster.jpg",
    title: "Hundreds of Hot Meals Prepared & Sealed",
    tag: "Food Outreach · 0:15",
    description:
      "Rows of neatly labelled, warm nutritious meal packs prepared for widows, orphans, and families.",
    slug: "community-food-outreach",
  },
];

export const Route = createFileRoute("/portfolio/")({
  head: () => ({
    meta: [
      { title: "Portfolio — Olaide Doherty Charity Foundation" },
      {
        name: "description",
        content:
          "Business grants, back-to-school empowerment, food outreach, field videos and more — see the projects the OD Charity Foundation has delivered.",
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

      {/* Field Video Testimonials & Highlights */}
      <section className="px-5 py-16 md:py-24 border-t border-border">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="eyebrow text-primary">Live from the field</p>
            <h2 className="mt-4 text-4xl font-semibold md:text-5xl">Video highlights & prayers</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Direct, unscripted footage from our outreaches: community elders offering prayers over
              warm meal boxes and families testifying to the foundation's impact.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {FIELD_VIDEOS.map((video) => (
              <div
                key={video.src}
                className="flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft"
              >
                <div className="relative aspect-[9/16] max-h-[480px] w-full overflow-hidden bg-black">
                  <video
                    src={video.src}
                    poster={video.poster}
                    controls
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="eyebrow text-primary">{video.tag}</p>
                  <h3 className="mt-2 text-xl font-semibold">{video.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{video.description}</p>
                  <div className="mt-5 pt-4 border-t border-border/60">
                    <Link
                      to="/portfolio/$slug"
                      params={{ slug: video.slug }}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
                    >
                      View project details <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
