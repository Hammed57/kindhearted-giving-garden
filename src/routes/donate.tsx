import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Heart, MessageCircle, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  PHONE_SMS,
  whatsappLink,
  donationMessage,
} from "@/lib/contact";
import youth from "@/assets/youth-mentoring.jpg";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate — Olaide Doherty Charity Foundation" },
      {
        name: "description",
        content: "Make a donation to the Olaide Doherty Charity Foundation and help elevate lives in our communities.",
      },
      { property: "og:title", content: "Donate to the OD Charity Foundation" },
      {
        property: "og:description",
        content: "Your gift supports small businesses, young people and communities. Give today.",
      },
    ],
  }),
  component: Donate,
});

const CAUSES: string[] = [
  "where it's needed most",
  "small business support",
  "youth transformation",
  "community outreach",
];

const CAUSE_LABELS: Record<string, string> = {
  "where it's needed most": "Where needed most",
  "small business support": "Small businesses",
  "youth transformation": "Youth",
  "community outreach": "Community",
};

const AMOUNTS = ["$25", "$50", "$100", "$250", "₦50,000", "₦100,000"];

function Donate() {
  const [cause, setCause] = useState<string>("where it's needed most");
  const [amount, setAmount] = useState("$50");

  const message = donationMessage(cause, amount);

  return (
    <section className="px-5 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="eyebrow text-primary">Donate</p>
          <h1 className="mt-4 text-5xl font-semibold leading-[1.05] md:text-6xl">
            Give hope. <span className="italic text-primary">Change a life.</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Every donation goes towards helping people grow — from funding a small business to mentoring a young person.
            Choose a cause and an amount, then reach out and our team will guide you through giving.
          </p>
          <img
            src={youth}
            alt="Young people learning together with a mentor"
            width={1280}
            height={1024}
            loading="lazy"
            className="mt-10 hidden aspect-[4/3] w-full rounded-[2rem] object-cover shadow-soft lg:block"
          />
        </div>

        <div className="rounded-[2rem] border border-border bg-card p-6 shadow-soft md:p-10">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold text-gold-foreground">
              <Heart className="h-5 w-5" />
            </span>
            <h2 className="text-2xl font-semibold">Make your donation</h2>
          </div>

          <fieldset className="mt-8">
            <legend className="eyebrow text-muted-foreground">1. Choose a cause</legend>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {CAUSES.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCause(c)}
                  className={cn(
                    "rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition-colors",
                    cause === c
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background hover:border-primary/50",
                  )}
                >
                  {CAUSE_LABELS[c]}
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset className="mt-8">
            <legend className="eyebrow text-muted-foreground">2. Choose an amount</legend>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {AMOUNTS.map((a) => (
                <button
                  key={a}
                  type="button"
                  onClick={() => setAmount(a)}
                  className={cn(
                    "rounded-2xl border py-3 font-display text-lg font-semibold transition-colors",
                    amount === a
                      ? "border-gold bg-gold text-gold-foreground"
                      : "border-border bg-background hover:border-gold",
                  )}
                >
                  {a}
                </button>
              ))}
            </div>
            <label className="mt-3 block">
              <span className="sr-only">Other amount</span>
              <input
                value={AMOUNTS.includes(amount) ? "" : amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Or enter another amount"
                className="h-12 w-full rounded-2xl border border-input bg-background px-4 text-base outline-none focus:border-primary"
              />
            </label>
          </fieldset>

          <div className="mt-8">
            <p className="eyebrow text-muted-foreground">3. Send your gift</p>
            <div className="mt-3 space-y-3">
              <Button asChild variant="gold" size="xl" className="w-full">
                <a href={whatsappLink(message)} target="_blank" rel="noreferrer">
                  <MessageCircle /> Donate via WhatsApp
                </a>
              </Button>
              <div className="grid grid-cols-2 gap-3">
                <Button asChild variant="hero" size="xl">
                  <a href={PHONE_TEL}>
                    <Phone /> Call
                  </a>
                </Button>
                <Button asChild variant="soft" size="xl">
                  <a href={`${PHONE_SMS}?body=${encodeURIComponent(message)}`}>
                    <MessageSquare /> Text
                  </a>
                </Button>
              </div>
            </div>
            <p className="mt-5 text-center text-sm text-muted-foreground">
              To donate, contact <a href={PHONE_TEL} className="font-semibold text-primary">{PHONE_DISPLAY}</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
