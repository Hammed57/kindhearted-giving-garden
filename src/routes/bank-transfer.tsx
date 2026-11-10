import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowLeft,
  Building2,
  Check,
  Copy,
  ExternalLink,
  Heart,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  BANK_ACCOUNTS,
  ORGANIZATION_NAME,
  PHONE_DISPLAY,
  PHONE_TEL,
  bankTransferConfirmationMessage,
  whatsappLink,
  EMAIL_ADDRESS,
  EMAIL_LINK,
} from "@/lib/contact";

interface BankTransferSearch {
  cause?: string | undefined;
  amount?: string | undefined;
}

export const Route = createFileRoute("/bank-transfer")({
  validateSearch: (search: Record<string, unknown>): BankTransferSearch => ({
    cause: typeof search["cause"] === "string" ? search["cause"] : undefined,
    amount: typeof search["amount"] === "string" ? search["amount"] : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Donate via Bank Transfer — Olaide Doherty Charity Foundation" },
      {
        name: "description",
        content:
          "Official bank account details for direct transfer donations to the Olaide Doherty Charity Foundation.",
      },
      {
        property: "og:title",
        content: "Bank Transfer Donations — Olaide Doherty Charity Foundation",
      },
      {
        property: "og:description",
        content:
          "Transfer directly to the verified accounts of the OD Charity Foundation in Nigeria and internationally.",
      },
    ],
  }),
  component: BankTransferPage,
});

function BankTransferPage() {
  const search = Route.useSearch();
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const selectedCause = search.cause || "where it's needed most";
  const selectedAmount = search.amount || "";
  const confirmationMsg = bankTransferConfirmationMessage(selectedCause, selectedAmount);

  const handleCopy = async (id: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2500);
    } catch {
      // Fallback for clipboard
      const input = document.createElement("input");
      input.value = text;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2500);
    }
  };

  return (
    <section className="px-5 py-14 md:py-20">
      <div className="mx-auto max-w-4xl">
        <Link
          to="/donate"
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> Back to donation options
        </Link>

        <div className="mt-6">
          <p className="eyebrow text-primary">Direct giving</p>
          <h1 className="mt-2 text-4xl font-semibold leading-[1.1] md:text-5xl">
            Donate via Bank Transfer
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Make a direct transfer or deposit into the official, verified foundation accounts below.
            Every donation directly funds food relief, back-to-school supplies, and community
            empowerment.
          </p>
        </div>

        {/* Selected Gift Summary Banner if coming with amount/cause */}
        {(selectedAmount || search.cause) && (
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-gold/40 bg-gold-soft/50 p-5 text-accent-foreground">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Your intended donation
              </p>
              <p className="mt-1 font-display text-xl font-semibold text-foreground">
                {selectedAmount ? selectedAmount : "Any amount"}
                <span className="text-sm font-normal text-muted-foreground">
                  {" "}
                  towards <strong className="font-semibold text-foreground">{selectedCause}</strong>
                </span>
              </p>
            </div>
            <Link
              to="/donate"
              className="text-xs font-bold text-primary underline underline-offset-4 hover:opacity-80"
            >
              Change amount or cause
            </Link>
          </div>
        )}

        {/* Account Cards */}
        <div className="mt-10 space-y-6">
          {BANK_ACCOUNTS.map((account) => {
            const isCopied = copiedId === account.id;

            return (
              <div
                key={account.id}
                className="group relative overflow-hidden rounded-[2rem] border border-border bg-card p-6 shadow-soft transition-all hover:border-primary/40 md:p-8"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/70 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary text-primary">
                      <Building2 className="h-5 w-5" />
                    </span>
                    <div>
                      <h2 className="font-display text-2xl font-semibold">{account.bankName}</h2>
                      <p className="text-xs font-semibold text-muted-foreground">{account.label}</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-secondary px-3.5 py-1 text-xs font-bold text-secondary-foreground">
                    {account.currency}
                  </span>
                </div>

                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  <div className="space-y-1">
                    <p className="eyebrow text-muted-foreground">Account name</p>
                    <p className="font-display text-lg font-semibold text-foreground">
                      {account.accountName}
                    </p>
                    <p className="text-xs text-muted-foreground">{account.accountType}</p>
                  </div>

                  <div className="rounded-2xl border border-border/80 bg-background/60 p-4">
                    <div className="flex items-center justify-between">
                      <p className="eyebrow text-primary">Account number</p>
                      <button
                        type="button"
                        onClick={() => handleCopy(account.id, account.accountNumber)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-primary transition-colors hover:text-primary/80 cursor-pointer"
                        title="Copy account number"
                      >
                        {isCopied ? (
                          <>
                            <Check className="h-3.5 w-3.5 text-success" />
                            <span className="text-success">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-3.5 w-3.5" />
                            <span>Copy number</span>
                          </>
                        )}
                      </button>
                    </div>
                    <div className="mt-2 flex items-baseline justify-between gap-2">
                      <p className="font-display text-3xl font-bold tracking-wider text-foreground tabular-nums">
                        {account.accountNumber}
                      </p>
                      <Button
                        type="button"
                        variant={isCopied ? "default" : "soft"}
                        size="sm"
                        onClick={() => handleCopy(account.id, account.accountNumber)}
                        className="shrink-0"
                      >
                        {isCopied ? "Copied" : "Copy"}
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Additional metadata row */}
                <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
                  {account.sortCode && (
                    <span>
                      Sort code:{" "}
                      <strong className="font-mono text-foreground">{account.sortCode}</strong>
                    </span>
                  )}
                  {account.swiftBic && (
                    <span>
                      SWIFT / BIC:{" "}
                      <strong className="font-mono text-foreground">{account.swiftBic}</strong>
                    </span>
                  )}
                  {account.wireRouting && (
                    <span>
                      Wire transfer routing:{" "}
                      <strong className="font-mono text-foreground">{account.wireRouting}</strong>
                    </span>
                  )}
                  {account.notes && <span className="italic">{account.notes}</span>}
                </div>
              </div>
            );
          })}
        </div>

        {/* Confirmation instructions & WhatsApp slip upload */}
        <div className="mt-10 rounded-[2rem] border border-border bg-ivory p-6 md:p-8">
          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gold text-gold-foreground">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-display text-2xl font-semibold">After making your transfer</h3>
              <p className="mt-2 text-muted-foreground">
                Please notify us via WhatsApp or phone with your payment receipt or screenshot so
                our treasury team can log your contribution, send an official acknowledgement, and
                ensure it is allocated to your chosen cause.
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                For other questions, email{" "}
                <a
                  href={EMAIL_LINK}
                  className="font-semibold text-primary underline underline-offset-4"
                >
                  {EMAIL_ADDRESS}
                </a>
                .
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Button asChild variant="gold" size="lg">
                  <a href={whatsappLink(confirmationMsg)} target="_blank" rel="noreferrer">
                    <MessageCircle /> Send receipt via WhatsApp
                  </a>
                </Button>
                <Button asChild variant="hero" size="lg">
                  <a href={PHONE_TEL}>
                    <Phone /> Call to confirm ({PHONE_DISPLAY})
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Other ways to give */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground">
          <p>
            Prefer other ways to give?{" "}
            <Link to="/donate" className="font-semibold text-primary underline underline-offset-4">
              View card and online options
            </Link>
          </p>
          <div className="flex items-center gap-2">
            <Heart className="h-4 w-4 text-gold fill-current" />
            <span className="font-medium text-foreground">{ORGANIZATION_NAME}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
