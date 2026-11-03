import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Heart,
  Sprout,
  Users,
  Sparkles,
  Home,
  GraduationCap,
  Sun,
  Play,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { DonateCta } from "@/components/donate-cta";
import { DonationGoal } from "@/components/donation-goal";
import { PORTFOLIO } from "@/lib/portfolio";
import outreach from "@/assets/outreach-food-distribution.jpg";
import portrait from "@/assets/foundation-portrait.jpg";
import img24 from "@/assets/IMG-20261102-WA0024.jpg";
import img34 from "@/assets/IMG-20261102-WA0034.jpg";
import img32 from "@/assets/IMG-20261102-WA0032.jpg";
import videoPoster from "@/assets/video-poster.jpg";
import { MOTTO } from "@/lib/brand";

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
        content:
          "Elevating lives, enriching people and revitalizing communities. Donate to make a difference.",
      },
    ],
  }),
  component: Index,
});

const PILLARS = [
  {
    icon: Sprout,
    title: "Elevating lives",
    text: "Practical support that helps families stand taller.",
  },
  {
    icon: Users,
    title: "Enriching people",
    text: "Skills, knowledge and networks that open doors.",
  },
  {
    icon: Sparkles,
    title: "Inspiring dreams",
    text: "Encouraging people to believe in what's possible.",
  },
  {
    icon: Home,
    title: "Revitalizing community",
    text: "Bringing neighbours together to grow stronger.",
  },
  {
    icon: GraduationCap,
    title: "Transforming youths",
    text: "Mentorship that shapes the next generation.",
  },
  { icon: Sun, title: "Encouraging hope", text: "Showing up with kindness when it matters most." },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img
          src={outreach}
          alt="Women holding food packages from an Olaide Doherty Charity Foundation outreach"
          width={1870}
          height={841}
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />
        <div className="bg-hero-overlay absolute inset-0 -z-10" />
        <div className="mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-5 pb-16 pt-32 md:pb-24">
          <p className="eyebrow fade-up text-gold">Olaide Doherty Charity Foundation</p>
          <h1 className="fade-up mt-4 max-w-3xl text-5xl font-semibold leading-[1.02] text-primary-foreground md:text-7xl">
            Elevating lives. <span className="italic text-gold">Inspiring</span> dreams.
          </h1>
          <p className="fade-up mt-6 font-display text-2xl italic text-gold md:text-3xl">
            "{MOTTO}."
          </p>
          <p className="fade-up mt-4 max-w-xl text-lg text-primary-foreground/85">
            We walk alongside individuals, young people and communities, helping them grow, thrive
            and hope again.
          </p>
          <div className="fade-up mt-9 flex flex-wrap gap-3">
            <Button asChild variant="gold" size="xl">
              <Link to="/donate">
                <Heart /> Donate now
              </Link>
            </Button>
            <Button asChild variant="glass" size="xl">
              <Link to="/portfolio">
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
              From helping small business owners grow, to mentoring young people and bringing
              communities together, the foundation exists to turn compassion into lasting change.
            </p>
            <Button asChild variant="hero" size="xl" className="mt-8">
              <Link to="/about">
                Learn about us <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <img
              src={portrait}
              alt="Olaide Doherty, founder of the Olaide Doherty Charity Foundation"
              width={1382}
              height={1726}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-[2rem] object-cover object-top shadow-soft"
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
            <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
              Six promises we keep.
            </h2>
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
              <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
                Our work in action.
              </h2>
            </div>
            <Link
              to="/portfolio"
              className="flex items-center gap-2 font-semibold text-primary hover:gap-3 transition-all"
            >
              See our portfolio <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-8">
            {[
              {
                slug: "back-to-school-empowerment",
                tag: "Youth transformation",
                title: "Back-to-School Student Transformation",
                summary:
                  "Equipping children with sturdy custom backpacks and exercise books so they can return to school with confidence.",
                src: img24,
                alt: "Student before and after receiving new Olaide Doherty Charity Foundation backpack",
                w: 1600,
                h: 1600,
                isVideo: false,
                offset: "",
              },
              {
                slug: "community-food-outreach",
                tag: "Community outreach",
                title: "On-the-Ground Outreach Team",
                summary:
                  "Our dedicated volunteers in royal blue and white foundation uniforms bringing care and food relief directly to neighbourhoods.",
                src: img34,
                alt: "Olaide Doherty Charity Foundation outreach staff standing with official banner",
                w: 1600,
                h: 1020,
                isVideo: false,
                offset: "md:mt-16",
              },
              {
                slug: "live-community-conversations",
                tag: "Encouraging hope · Video",
                title: "Community Elder Prayers & Testimony",
                summary:
                  "Heartfelt video prayers and blessings from community leaders and elders testifying to the impact of the foundation.",
                src: videoPoster,
                alt: "Community elder video testimonial and prayers",
                w: 576,
                h: 1024,
                isVideo: true,
                offset: "",
              },
              {
                slug: "community-food-outreach",
                tag: "Community outreach",
                title: "Hot Meals Prepared with Love",
                summary:
                  "Volunteer cooking team preparing massive pots of nutritious jollof rice for children, widows, and families in need.",
                src: img32,
                alt: "Foundation kitchen team in OD branded aprons cooking large pots of jollof rice",
                w: 1200,
                h: 1600,
                isVideo: false,
                offset: "md:mt-16",
              },
            ].map((c) => (
              <article key={c.title} className={`group ${c.offset}`}>
                <Link to="/portfolio/$slug" params={{ slug: c.slug }} className="block">
                  <div className="relative overflow-hidden rounded-[2rem] bg-card shadow-soft">
                    <img
                      src={c.src}
                      alt={c.alt}
                      width={c.w}
                      height={c.h}
                      loading="lazy"
                      className="aspect-[4/5] w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    {c.isVideo && (
                      <span className="absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold text-gold-foreground shadow-gold transition-transform group-hover:scale-110">
                        <Play className="ml-0.5 h-6 w-6 fill-current" />
                      </span>
                    )}
                  </div>
                  <div className="mt-6 px-1">
                    <p className="eyebrow text-primary">{c.tag}</p>
                    <h3 className="mt-2 text-3xl font-semibold transition-colors group-hover:text-primary">
                      {c.title}
                    </h3>
                    <p className="mt-2 max-w-sm text-muted-foreground">{c.summary}</p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <DonationGoal />

      <DonateCta />
    </>
  );
}
