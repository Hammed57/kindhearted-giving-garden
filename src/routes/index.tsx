import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Heart, Sprout, Users, Sparkles, Home, GraduationCap, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DonateCta } from "@/components/donate-cta";
import hero from "@/assets/hero-community.jpg";
import businessOwner from "@/assets/business-owner.jpg";
import youth from "@/assets/youth-mentoring.jpg";
import women from "@/assets/women-workshop.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Olaide Doherty Charity Foundation — Elevating lives" },
      {
        name: "description",
        content:
          "Elevating lives, enriching people, inspiring dreams and transforming youths. Support the OD Charity Foundation today.",
      },
      { property: "og:title", content: "Olaide Doherty Charity Foundation" },
      {
        property: "og:description",
        content: "Elevating lives, enriching people and revitalizing communities. Donate to make a difference.",
      },
    ],
  }),
  component: Index,
});

const PILLARS = [
  { icon: Sprout, title: "Elevating lives", text: "Practical support that helps families stand taller." },
  { icon: Users, title: "Enriching people", text: "Skills, knowledge and networks that open doors." },
  { icon: Sparkles, title: "Inspiring dreams", text: "Encouraging people to believe in what's possible." },
  { icon: Home, title: "Revitalizing community", text: "Bringing neighbours together to grow stronger." },
  { icon: GraduationCap, title: "Transforming youths", text: "Mentorship that shapes the next generation." },
  { icon: Sun, title: "Encouraging hope", text: "Showing up with kindness when it matters most." },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img
          src={hero}
          alt="Foundation volunteers sharing supplies with smiling children and families"
          width={1600}
          height={1008}
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />
        <div className="bg-hero-overlay absolute inset-0 -z-10" />
        <div className="mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-5 pb-16 pt-32 md:pb-24">
          <p className="eyebrow fade-up text-gold">Olaide Doherty Charity Foundation</p>
          <h1 className="fade-up mt-4 max-w-3xl text-5xl font-semibold leading-[1.02] text-primary-foreground md:text-7xl">
            Elevating lives. <span className="italic text-gold">Inspiring</span> dreams.
          </h1>
          <p className="fade-up mt-6 max-w-xl text-lg text-primary-foreground/85">
            We walk alongside individuals, young people and communities, helping them grow, thrive and hope again.
          </p>
          <div className="fade-up mt-9 flex flex-wrap gap-3">
            <Button asChild variant="gold" size="xl">
              <Link to="/donate">
                <Heart /> Donate now
              </Link>
            </Button>
            <Button asChild variant="glass" size="xl">
              <Link to="/programs">
                Our work <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="px-5 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="eyebrow text-primary">Our mission</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
              Real support for real people, right where they are.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              From helping small business owners grow, to mentoring young people and bringing communities together,
              the foundation exists to turn compassion into lasting change.
            </p>
            <Button asChild variant="hero" size="xl" className="mt-8">
              <Link to="/about">
                Learn about us <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="relative">
            <img
              src={women}
              alt="Women sharing ideas at a community empowerment workshop"
              width={1280}
              height={1024}
              loading="lazy"
              className="aspect-[5/4] w-full rounded-[2rem] object-cover shadow-soft"
            />
            <div className="absolute -bottom-6 -left-4 rounded-2xl bg-gold px-6 py-4 text-gold-foreground shadow-gold md:-left-8">
              <p className="font-display text-3xl font-semibold">6</p>
              <p className="text-xs font-bold uppercase tracking-widest">Pillars of impact</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-ivory px-5 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="eyebrow text-primary">What we stand for</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">Six promises we keep.</h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map((p) => (
              <div
                key={p.title}
                className="group rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-soft"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary transition-colors group-hover:bg-gold group-hover:text-gold-foreground">
                  <p.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-6 text-2xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section className="px-5 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <p className="eyebrow text-primary">Where your gift goes</p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">Our work in action.</h2>
            </div>
            <Link to="/programs" className="flex items-center gap-2 font-semibold text-primary hover:gap-3 transition-all">
              See all programs <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <article className="group relative overflow-hidden rounded-[2rem]">
              <img
                src={businessOwner}
                alt="A proud market trader at her fabric stall"
                width={1024}
                height={1280}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="bg-hero-overlay absolute inset-0" />
              <div className="absolute inset-x-0 bottom-0 p-8 text-primary-foreground">
                <p className="eyebrow text-gold">Small business support</p>
                <h3 className="mt-2 text-3xl font-semibold">Helping entrepreneurs grow</h3>
                <p className="mt-2 max-w-sm text-primary-foreground/80">
                  Boosting inventory, upgrading equipment and building stronger brands.
                </p>
              </div>
            </article>
            <article className="group relative overflow-hidden rounded-[2rem] md:mt-16">
              <img
                src={youth}
                alt="A mentor guiding teenagers around a laptop"
                width={1280}
                height={1024}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="bg-hero-overlay absolute inset-0" />
              <div className="absolute inset-x-0 bottom-0 p-8 text-primary-foreground">
                <p className="eyebrow text-gold">Youth transformation</p>
                <h3 className="mt-2 text-3xl font-semibold">Shaping tomorrow's leaders</h3>
                <p className="mt-2 max-w-sm text-primary-foreground/80">
                  Mentorship and encouragement that help young people dream bigger.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <DonateCta />
    </>
  );
}
