import { createFileRoute } from "@tanstack/react-router";
import { Phone, Instagram, Facebook, MessageCircle } from "lucide-react";
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
  TIKTOK_URL,
  FACEBOOK_URL,
  FACEBOOK_NAME,
  whatsappLink,
} from "@/lib/contact";
import women from "@/assets/women-workshop.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Olaide Doherty Charity Foundation" },
      {
        name: "description",
        content: "Get in touch with the Olaide Doherty Charity Foundation by phone, WhatsApp, Instagram or Facebook.",
      },
      { property: "og:title", content: "Contact the OD Charity Foundation" },
      {
        property: "og:description",
        content: "Call, message or follow the Olaide Doherty Charity Foundation.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const channels = [
    { icon: Phone, label: "Call us", value: PHONE_DISPLAY, href: PHONE_TEL, external: false },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: PHONE_DISPLAY,
      href: whatsappLink("Hello OD Charity Foundation!"),
      external: true,
    },
    { icon: Instagram, label: "Instagram", value: INSTAGRAM_HANDLE, href: INSTAGRAM_URL, external: true },
    { icon: Facebook, label: "Facebook", value: FACEBOOK_NAME, href: FACEBOOK_URL, external: true },
  ];

  return (
    <section className="px-5 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
        <div>
          <p className="eyebrow text-primary">Contact</p>
          <h1 className="mt-4 text-5xl font-semibold leading-[1.05] md:text-6xl">Let's talk.</h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            Want to donate, volunteer, partner with us or just say hello? Reach out — we'd love to hear from you.
          </p>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noreferrer" : undefined}
                className="group rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-soft"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary text-primary group-hover:bg-gold group-hover:text-gold-foreground">
                  <c.icon className="h-5 w-5" />
                </span>
                <p className="eyebrow mt-5 text-muted-foreground">{c.label}</p>
                <p className="mt-1 font-display text-xl font-semibold">{c.value}</p>
              </a>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Also on{" "}
            <a href={TIKTOK_URL} target="_blank" rel="noreferrer" className="font-semibold text-primary">
              TikTok {INSTAGRAM_HANDLE}
            </a>
          </p>
        </div>

        <img
          src={women}
          alt="Women gathered at a foundation workshop"
          width={1280}
          height={1024}
          loading="lazy"
          className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-soft lg:aspect-auto lg:h-full"
        />
      </div>
    </section>
  );
}
