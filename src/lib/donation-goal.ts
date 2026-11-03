// Fundraising goal shown on the site. Update these two numbers as donations come in.
export const DONATION_GOAL = {
  raised: 650_000,
  target: 1_000_000,
  currency: "NGN",
};

/** Whole-number percentage of the target reached, clamped to 0–100. */
export function goalPercent(raised: number, target: number): number {
  if (!Number.isFinite(raised) || !Number.isFinite(target) || target <= 0) return 0;
  return Math.min(100, Math.max(0, Math.round((raised / target) * 100)));
}

export function formatMoney(amount: number, currency = DONATION_GOAL.currency): string {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}
