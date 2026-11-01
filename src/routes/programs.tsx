import { createFileRoute } from "@tanstack/react-router";
import { Check, Radio } from "lucide-react";
import { DonateCta } from "@/components/donate-cta";
import { INSTAGRAM_URL, TIKTOK_URL, INSTAGRAM_HANDLE } from "@/lib/contact";
import businessOwner from "@/assets/business-owner.jpg";
import youth from "@/assets/youth-mentoring.jpg";
import hero from "@/assets/hero-community.jpg";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Our Programs — Olaide Doherty Charity Foundation" },
      {
        name: "description",
        content: "Small business support, youth transformation and community outreach from the OD Charity Foundation.",
      },
      { property: "og:title", content: "Programs — OD Charity Foundation" },
      {
        property: "og:description",
        content: "See how the foundation supports entrepreneurs, young people and communities.",
      },
    ],
  }),
  component: Programs,
});

const PROGRAMS = [
  {
    tag: "Small business support",
    title: "Empowering entrepreneurs",
    text: "We help small business owners take their next step, so their businesses can feed families and create jobs.",
    points: ["Boost inventory", "Upgrade equipment", "Marketing & branding"],
    image: businessOwner,
    alt: "A market trader standing proudly at her stall",
    w: 1024,
    h: 1280,
  },
  {
    tag: "Youth transformation",
    title: "Mentoring young people",
    text: "Guidance, encouragement and a listening ear for young people as they shape their futures.",
    points: ["Mentorship", "Skills & learning", "Confidence building"],
    image: youth,
    alt: "Teenagers learning with a mentor",
    w: 1280,
    h: 1024,
  },
  {
    tag: "Community outreach",
    title: "Revitalizing communities",
    text: "Showing up for neighbourhoods with care, support and moments that bring people together.",
    points: ["Outreach days", "Family support", "Encouraging hope"],
    image: hero,
    alt: "Volunteers handing supplies to children",
    w: 1600,
    h: 1008,
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
                className={`aspect-[4/3] w-full rounded-[2rem] object-cover shadow-soft ${i % 2 === 1 ? "md:order-2" : ""}`}
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
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
              Instagram
            </a>
            <a href={TIKTOK_URL} target="_blank" rel="noreferrer" className="rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary hover:bg-primary/5">
              TikTok
            </a>
          </div>
        </div>
      </section>

      <DonateCta />
    </>
  );
}
