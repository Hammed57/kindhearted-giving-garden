import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Instagram, Quote } from "lucide-react";
import { DonateCta } from "@/components/donate-cta";
import { Button } from "@/components/ui/button";
import { PORTFOLIO, findProject } from "@/lib/portfolio";

export const Route = createFileRoute("/portfolio/$slug")({
  loader: ({ params }) => {
    const project = findProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    if (!p) {
      return { meta: [{ title: "Project not found — OD Charity Foundation" }, { name: "robots", content: "noindex" }] };
    }
    return {
      meta: [
        { title: `${p.title} — OD Charity Foundation Portfolio` },
        { name: "description", content: p.summary },
        { property: "og:title", content: `${p.title} — OD Charity Foundation` },
        { property: "og:description", content: p.summary },
        { property: "og:type", content: "article" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-xl px-5 py-32 text-center">
      <h1 className="text-4xl font-semibold">Project not found</h1>
      <p className="mt-3 text-muted-foreground">This project may have moved.</p>
      <Button asChild variant="hero" size="xl" className="mt-8">
        <Link to="/portfolio">See all projects</Link>
      </Button>
    </div>
  ),
  component: ProjectPage,
});

function ProjectPage() {
  const { project: p } = Route.useLoaderData();
  const idx = PORTFOLIO.findIndex((x) => x.slug === p.slug);
  const next = PORTFOLIO[(idx + 1) % PORTFOLIO.length] ?? PORTFOLIO[0]!;
  const wide = p.cover.w > p.cover.h;

  return (
    <>
      <section className="px-5 pb-12 pt-12 md:pt-20">
        <div className="mx-auto max-w-6xl">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" /> All projects
          </Link>
          <p className="eyebrow mt-8 text-primary">
            {p.category} · {p.date}
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-[1.05] md:text-7xl">{p.title}</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{p.summary}</p>
        </div>
      </section>

      <section className="px-5">
        <div className={`mx-auto ${wide ? "max-w-6xl" : "max-w-md"}`}>
          <img
            src={p.cover.src}
            alt={p.cover.alt}
            width={p.cover.w}
            height={p.cover.h}
            className={`w-full rounded-[2rem] object-cover shadow-soft ${wide ? "aspect-[16/9] md:aspect-[21/9]" : ""}`}
          />
        </div>
      </section>

      {p.stats.length > 0 && (
        <section className="px-5 pt-16">
          <dl className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-3">
            {p.stats.map((s) => (
              <div key={s.label} className="rounded-3xl border border-border bg-card p-7">
                <dt className="eyebrow text-muted-foreground">{s.label}</dt>
                <dd className="mt-3 font-display text-4xl font-semibold text-primary">{s.value}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      <section className="px-5 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.2fr_1fr]">
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <h2 className="text-3xl font-semibold text-foreground md:text-4xl">The story</h2>
            {p.story.map((para) => (
              <p key={para.slice(0, 24)}>{para}</p>
            ))}
            <Button asChild variant="soft" size="lg" className="mt-2">
              <a href={p.instagram} target="_blank" rel="noreferrer">
                <Instagram /> See it on Instagram
              </a>
            </Button>
          </div>

          <div className="space-y-6">
            {p.quote && (
              <figure className="bg-deep rounded-[2rem] p-8 text-primary-foreground shadow-soft">
                <Quote className="h-8 w-8 text-gold" />
                <blockquote className="mt-4 font-display text-2xl leading-snug">"{p.quote.text}"</blockquote>
                <figcaption className="eyebrow mt-6 text-gold">{p.quote.by}</figcaption>
              </figure>
            )}
            {p.gallery.map((g) => (
              <img
                key={g.src}
                src={g.src}
                alt={g.alt}
                width={g.w}
                height={g.h}
                loading="lazy"
                className="mx-auto w-full max-w-sm rounded-[2rem] shadow-soft"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5">
        <div className="mx-auto max-w-6xl border-t border-border pt-10">
          <p className="eyebrow text-muted-foreground">Next project</p>
          <Link
            to="/portfolio/$slug"
            params={{ slug: next.slug }}
            className="group mt-3 flex items-center justify-between gap-6"
          >
            <span className="font-display text-3xl font-semibold group-hover:text-primary md:text-5xl">
              {next.title}
            </span>
            <ArrowRight className="h-8 w-8 shrink-0 text-primary transition-transform group-hover:translate-x-2" />
          </Link>
        </div>
      </section>

      <DonateCta />
    </>
  );
}
