import { createFileRoute, getRouteApi, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ArrowRight, Instagram, Quote, Maximize2 } from "lucide-react";
import { DonateCta } from "@/components/donate-cta";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { PORTFOLIO, findProject } from "@/lib/portfolio";

const routeApi = getRouteApi("/portfolio/$slug");

export const Route = createFileRoute("/portfolio/$slug")({
  loader: ({ params }) => {
    const project = findProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    if (!p) {
      return {
        meta: [
          { title: "Project not found — OD Charity Foundation" },
          { name: "robots", content: "noindex" },
        ],
      };
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
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  const loaderData = routeApi.useLoaderData();
  const p = loaderData?.project;
  if (!p) {
    return (
      <div className="mx-auto max-w-xl px-5 py-32 text-center">
        <h1 className="text-4xl font-semibold">Project not found</h1>
        <p className="mt-3 text-muted-foreground">This project may have moved.</p>
        <Button asChild variant="hero" size="xl" className="mt-8">
          <Link to="/portfolio">See all projects</Link>
        </Button>
      </div>
    );
  }
  const idx = PORTFOLIO.findIndex((x) => x.slug === p.slug);
  const next = PORTFOLIO[(idx + 1) % PORTFOLIO.length] ?? PORTFOLIO[0]!;
  const wide = (p.cover.w ?? 1) > (p.cover.h ?? 1);

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
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-[1.05] md:text-7xl">
            {p.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{p.summary}</p>
        </div>
      </section>

      <section className="px-5">
        <div className={`mx-auto ${wide ? "max-w-6xl" : "max-w-md"}`}>
          {p.cover.type === "video" ? (
            <div className="relative overflow-hidden rounded-[2rem] bg-black shadow-soft">
              <video
                src={p.cover.src}
                poster={p.cover.poster}
                controls
                playsInline
                preload="metadata"
                className={`w-full ${wide ? "aspect-[16/9] md:aspect-[21/9]" : "aspect-[4/5]"} object-contain`}
              />
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setSelectedImage({ src: p.cover.src, alt: p.cover.alt })}
              className="group relative block w-full cursor-zoom-in text-left focus:outline-none"
            >
              <img
                src={p.cover.src}
                alt={p.cover.alt}
                width={p.cover.w}
                height={p.cover.h}
                className={`w-full rounded-[2rem] object-cover shadow-soft transition-transform duration-300 group-hover:brightness-95 ${wide ? "aspect-[16/9] md:aspect-[21/9]" : ""}`}
              />
              <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white opacity-0 transition-opacity group-hover:opacity-100">
                <Maximize2 className="h-4 w-4" />
              </span>
            </button>
          )}
        </div>
      </section>

      {p.video && (
        <section className="px-5 pt-16">
          <div className="mx-auto max-w-4xl text-center">
            <p className="eyebrow text-primary">Featured Video</p>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
              {p.video.title || `${p.title} in action`}
            </h2>
            <div className="mx-auto mt-6 max-w-md overflow-hidden rounded-[2rem] bg-black shadow-soft">
              <video
                src={p.video.src}
                poster={p.video.poster}
                controls
                playsInline
                preload="metadata"
                className="mx-auto max-h-[580px] w-full object-contain"
              />
            </div>
          </div>
        </section>
      )}

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
                <blockquote className="mt-4 font-display text-2xl leading-snug">
                  "{p.quote.text}"
                </blockquote>
                <figcaption className="eyebrow mt-6 text-gold">{p.quote.by}</figcaption>
              </figure>
            )}
            {p.gallery.map((g) =>
              g.type === "video" ? (
                <div key={g.src} className="overflow-hidden rounded-[2rem] bg-black shadow-soft">
                  <video
                    src={g.src}
                    poster={g.poster}
                    controls
                    playsInline
                    preload="metadata"
                    className="mx-auto w-full max-w-sm rounded-[2rem] object-contain"
                  />
                  {g.title && (
                    <p className="p-3 text-center text-xs text-muted-foreground">{g.title}</p>
                  )}
                </div>
              ) : (
                <button
                  key={g.src}
                  type="button"
                  onClick={() => setSelectedImage({ src: g.src, alt: g.alt })}
                  className="group relative mx-auto block w-full max-w-sm cursor-zoom-in text-left focus:outline-none"
                >
                  <img
                    src={g.src}
                    alt={g.alt}
                    width={g.w}
                    height={g.h}
                    loading="lazy"
                    className="w-full rounded-[2rem] shadow-soft transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <span className="absolute bottom-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white opacity-0 transition-opacity group-hover:opacity-100">
                    <Maximize2 className="h-4 w-4" />
                  </span>
                </button>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-4xl border-none bg-black/95 p-3 text-white sm:rounded-3xl">
          <DialogTitle className="sr-only">
            {selectedImage?.alt || "Enlarged portfolio image"}
          </DialogTitle>
          {selectedImage && (
            <div className="flex flex-col items-center justify-center">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-h-[85vh] w-auto max-w-full rounded-2xl object-contain"
              />
              {selectedImage.alt && (
                <p className="mt-3 text-center text-sm text-white/80">{selectedImage.alt}</p>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>

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
