import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { DonateCta } from "@/components/donate-cta";
import { PORTFOLIO } from "@/lib/portfolio";
import { MOTTO } from "@/lib/brand";

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
            {MOTTO.split(" meets ")[0]} <span className="italic text-primary">meets</span> {MOTTO.split(" meets ")[1]}.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            A record of the projects we've delivered with the help of our sponsors, supporters and community.
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
              <div className="overflow-hidden rounded-[2rem] bg-card shadow-soft">
                <img
                  src={p.cover.src}
                  alt={p.cover.alt}
                  width={p.cover.w}
                  height={p.cover.h}
                  loading={i < 2 ? "eager" : "lazy"}
                  className="aspect-[4/5] w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
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

      <DonateCta />
    </>
  );
}
