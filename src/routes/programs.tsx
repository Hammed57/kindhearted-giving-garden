import { createFileRoute } from "@tanstack/react-router";
import { Check, Radio } from "lucide-react";
import { DonateCta } from "@/components/donate-cta";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, TIKTOK_URL } from "@/lib/contact";
import img22 from "@/assets/IMG-20261102-WA0022.jpg";
import img24 from "@/assets/IMG-20261102-WA0024.jpg";
import img34 from "@/assets/IMG-20261102-WA0034.jpg";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Our Programs — Olaide Doherty Charity Foundation" },
      {
        name: "description",
        content:
          "Essential food relief, youth transformation and community outreach from the OD Charity Foundation.",
      },
      { property: "og:title", content: "Programs — OD Charity Foundation" },
      {
        property: "og:description",
        content: "See how the foundation supports families, young people and communities.",
      },
    ],
  }),
  component: Programs,
});

const PROGRAMS = [
  {
    tag: "Food relief & welfare",
    title: "Essential food relief",
    text: "Distributing staple food items, grains, cooking oil and packaged relief packages directly to families and individuals in need.",
    points: [
      "Staple grains & packaged rice",
      "Cooking oil & kitchen essentials",
      "Direct household relief",
    ],
    image: img22,
    alt: "Olaide Doherty Charity Foundation relief food packages, rice bags, cooking oil and foundation banner",
    w: 1246,
    h: 1600,
    frame: "mx-auto aspect-[4/5] max-w-md object-top",
  },
  {
    tag: "Youth transformation",
    title: "Supporting students",
    text: "Back-to-school support, backpacks, books and encouragement for young people as they shape their futures.",
    points: ["Mentorship", "Custom backpacks & supplies", "Confidence building"],
    image: img24,
    alt: "Student before and after receiving new Olaide Doherty Charity Foundation backpack",
    w: 1600,
    h: 1600,
    frame: "mx-auto aspect-[4/5] max-w-md object-top",
  },
  {
    tag: "Community outreach",
    title: "Revitalizing communities",
    text: "Showing up for neighbourhoods with hot meals, food supplies, care, support and moments that bring people together.",
    points: ["Outreach days", "Nutritious hot meals", "Encouraging hope"],
    image: img34,
    alt: "Olaide Doherty Charity Foundation outreach staff and volunteers with official banner",
    w: 1600,
    h: 1020,
    frame: "aspect-[4/3]",
  },
];

function Programs() {
  return (
    <>
      <section className="px-5 pb-10 pt-16 md:pt-24">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow text-primary">Our programs</p>
          <h1 className="mt-4 max-w-3xl text-5xl font-semibold leading-[1.05] md:text-7xl">
            How we make a difference.
          </h1>
        </div>
      </section>

      <section className="px-5 pb-10">
        <div className="mx-auto max-w-6xl space-y-20 py-10 md:space-y-28">
          {PROGRAMS.map((p, i) => (
            <article key={p.title} className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
              <img
                src={p.image}
                alt={p.alt}
                width={p.w}
                height={p.h}
                loading="lazy"
                className={`w-full rounded-[2rem] object-cover shadow-soft ${p.frame} ${i % 2 === 1 ? "md:order-2" : ""}`}
              />
              <div>
                <p className="eyebrow text-primary">{p.tag}</p>
                <h2 className="mt-3 text-4xl font-semibold leading-tight">{p.title}</h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{p.text}</p>
                <ul className="mt-6 space-y-3">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-3 font-semibold">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold-soft text-accent-foreground">
                        <Check className="h-4 w-4" />
                      </span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 rounded-[2rem] bg-gold-soft p-8 md:flex-row md:items-center md:justify-between md:p-12">
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Radio className="h-5 w-5" />
            </span>
            <div>
              <h2 className="text-2xl font-semibold md:text-3xl">Join us live</h2>
              <p className="mt-1 text-muted-foreground">
                We host regular live sessions on Instagram and TikTok at {INSTAGRAM_HANDLE}.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              Instagram
            </a>
            <a
              href={TIKTOK_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary hover:bg-primary/5"
            >
              TikTok
            </a>
          </div>
        </div>
      </section>

      <DonateCta />
    </>
  );
}
