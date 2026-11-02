import { createFileRoute } from "@tanstack/react-router";
import { DonateCta } from "@/components/donate-cta";
import portrait from "@/assets/foundation-portrait.jpg.asset.json";
import outreach from "@/assets/outreach-food-distribution.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Olaide Doherty Charity Foundation" },
      {
        name: "description",
        content: "Learn about the Olaide Doherty Charity Foundation and the values that guide our work.",
      },
      { property: "og:title", content: "About the Olaide Doherty Charity Foundation" },
      {
        property: "og:description",
        content: "Elevating lives, enriching people and encouraging hope across our communities.",
      },
    ],
  }),
  component: About,
});

const VALUES = [
  "Elevating lives",
  "Enriching people",
  "Inspiring dreams",
  "Revitalizing community",
  "Transforming youths",
  "Encouraging hopes",
];

function About() {
  return (
    <>
      <section className="px-5 pb-16 pt-16 md:pt-24">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow text-primary">About us</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-[1.05] md:text-7xl">
            A foundation built on <span className="italic text-primary">compassion</span> and community.
          </h1>
        </div>
      </section>

      <section className="px-5">
        <div className="mx-auto max-w-6xl">
          <img
            src={outreach.url}
            alt="Women holding food packages from an Olaide Doherty Charity Foundation outreach"
            width={1870}
            height={841}
            className="aspect-[16/9] w-full rounded-[2rem] object-cover shadow-soft md:aspect-[21/9]"
          />
        </div>
      </section>

      <section className="px-5 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.1fr_1fr]">
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <h2 className="text-3xl font-semibold text-foreground md:text-4xl">Our story</h2>
            <p>
              The Olaide Doherty Charity Foundation — known to many as the OD Charity Foundation — was founded with a
              simple belief: when people are given a helping hand, they rise and lift others with them.
            </p>
            <p>
              We support hard-working entrepreneurs, mentor young people and bring communities together. Through
              outreach, empowerment sessions and live conversations on Instagram and TikTok, we stay close to the people
              we serve.
            </p>
          </div>
          <img
            src={portrait.url}
            alt="Portrait shared on the foundation's Instagram"
            width={1382}
            height={1726}
            loading="lazy"
            className="mx-auto aspect-[4/5] w-full max-w-md rounded-[2rem] object-cover object-top"
          />
        </div>
      </section>

      <section className="bg-deep px-5 py-20 text-primary-foreground md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow text-gold">Our values</p>
          <ul className="mt-8 divide-y divide-primary-foreground/15 border-y border-primary-foreground/15">
            {VALUES.map((v, i) => (
              <li key={v} className="flex items-baseline gap-6 py-6">
                <span className="font-display text-sm text-gold">0{i + 1}</span>
                <span className="font-display text-3xl font-medium md:text-5xl">{v}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <DonateCta />
    </>
  );
}
