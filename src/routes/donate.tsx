import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Heart,
  MessageCircle,
  Phone,
  MessageSquare,
  Building2,
  CreditCard,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  PHONE_SMS,
  whatsappLink,
  donationMessage,
  cardDonationMessage,
} from "@/lib/contact";
import outreach from "@/assets/outreach-food-distribution.jpg";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate — Olaide Doherty Charity Foundation" },
      {
        name: "description",
        content:
          "Make a donation to the Olaide Doherty Charity Foundation and help elevate lives in our communities.",
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

export const CAUSES: string[] = [
  "where it's needed most",
  "food",
  "small business support",
  "youth transformation",
  "community outreach",
];

export const CAUSE_LABELS: Record<string, string> = {
  "where it's needed most": "Where needed most",
  food: "Food",
  "small business support": "Small businesses",
  "youth transformation": "Youth",
  "community outreach": "Community",
};

const AMOUNTS = ["$25", "$50", "$100", "$250", "₦50,000", "₦100,000"];

function Donate() {
  const [cause, setCause] = useState<string>("where it's needed most");
  const [amount, setAmount] = useState("$50");
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);

  const message = donationMessage(cause, amount);
  const cardMessage = cardDonationMessage(cause, amount);

  return (
    <section className="px-5 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="eyebrow text-primary">Donate</p>
          <h1 className="mt-4 text-5xl font-semibold leading-[1.05] md:text-6xl">
            Give hope. <span className="italic text-primary">Change a life.</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Every donation goes towards helping people grow — from funding a small business to
            mentoring a young person. Choose a cause and an amount, then select your preferred
            giving method.
          </p>
          <img
            src={outreach}
            alt="Women holding food packages from an Olaide Doherty Charity Foundation outreach"
            width={1870}
            height={841}
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
                    "rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition-colors cursor-pointer",
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
                    "rounded-2xl border py-3 font-display text-lg font-semibold transition-colors cursor-pointer",
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
            <p className="eyebrow text-muted-foreground">3. Choose how to give</p>
            <div className="mt-4 space-y-3">
              {/* Primary Method 1: WhatsApp */}
              <Button asChild variant="gold" size="xl" className="w-full">
                <a href={whatsappLink(message)} target="_blank" rel="noreferrer">
                  <MessageCircle className="h-5 w-5" /> Donate via WhatsApp
                </a>
              </Button>

              {/* Primary Method 2: Bank Transfer (Takes them to Bank Transfer page) */}
              <Button asChild variant="hero" size="xl" className="w-full">
                <Link to="/bank-transfer" search={{ cause, amount }}>
                  <Building2 className="h-5 w-5" /> Donate via Bank Transfer
                </Link>
              </Button>

              {/* Primary Method 3: Donate with Card (Opens dedicated modal) */}
              <Button
                type="button"
                variant="soft"
                size="xl"
                className="w-full border border-border/80"
                onClick={() => setIsCardModalOpen(true)}
              >
                <CreditCard className="h-5 w-5 text-primary" /> Donate with Card
              </Button>

              {/* Secondary Direct Channels */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <Button asChild variant="outline" size="lg" className="rounded-2xl">
                  <a href={PHONE_TEL}>
                    <Phone className="h-4 w-4" /> Call
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-2xl">
                  <a href={`${PHONE_SMS}?body=${encodeURIComponent(message)}`}>
                    <MessageSquare className="h-4 w-4" /> Text
                  </a>
                </Button>
              </div>
            </div>

            <p className="mt-5 text-center text-sm text-muted-foreground">
              Questions about donating? Contact{" "}
              <a href={PHONE_TEL} className="font-semibold text-primary">
                {PHONE_DISPLAY}
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Donate with Card Modal */}
      <Dialog open={isCardModalOpen} onOpenChange={setIsCardModalOpen}>
        <DialogContent className="max-w-md rounded-[2rem] border-border bg-card p-6 md:p-8">
          <DialogHeader>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-soft text-gold-foreground">
              <CreditCard className="h-6 w-6 text-primary" />
            </div>
            <DialogTitle className="mt-3 font-display text-2xl font-semibold">
              Donate with Card
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Pay securely using Debit or Credit Card (Visa, Mastercard, Verve, American Express).
            </DialogDescription>
          </DialogHeader>

          {/* Donation Summary */}
          <div className="mt-4 rounded-2xl border border-border bg-ivory p-4">
            <p className="eyebrow text-muted-foreground">Selected donation</p>
            <p className="mt-1 font-display text-2xl font-semibold text-foreground">
              {amount || "Custom Amount"}
            </p>
            <p className="text-xs text-muted-foreground">
              Allocation: <span className="font-semibold text-foreground">{cause}</span>
            </p>
          </div>

          {/* Supported Cards */}
          <div className="mt-2 space-y-2">
            <p className="text-xs font-semibold text-muted-foreground">Accepted card types:</p>
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
              <span className="rounded-lg border border-border bg-background px-3 py-1.5 text-foreground">
                Visa
              </span>
              <span className="rounded-lg border border-border bg-background px-3 py-1.5 text-foreground">
                Mastercard
              </span>
              <span className="rounded-lg border border-border bg-background px-3 py-1.5 text-foreground">
                Verve
              </span>
              <span className="rounded-lg border border-border bg-background px-3 py-1.5 text-foreground">
                American Express
              </span>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <Button asChild variant="gold" size="xl" className="w-full">
              <a
                href={whatsappLink(cardMessage)}
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsCardModalOpen(false)}
              >
                <MessageCircle className="h-5 w-5" /> Request Secure Card Link on WhatsApp
              </a>
            </Button>

            <Button asChild variant="hero" size="xl" className="w-full">
              <a href={PHONE_TEL} onClick={() => setIsCardModalOpen(false)}>
                <Phone className="h-5 w-5" /> Call Card Giving Coordinator
              </a>
            </Button>
          </div>

          <div className="mt-5 border-t border-border pt-4">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-success" /> Verified foundation desk
              </span>
              <Link
                to="/bank-transfer"
                search={{ cause, amount }}
                onClick={() => setIsCardModalOpen(false)}
                className="font-semibold text-primary underline underline-offset-4 inline-flex items-center gap-1"
              >
                Bank transfer <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
