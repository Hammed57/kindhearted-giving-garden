import { describe, expect, it } from "vitest";
import {
  whatsappLink,
  PHONE_TEL,
  BANK_ACCOUNTS,
  cardDonationMessage,
  bankTransferConfirmationMessage,
} from "@/lib/contact";

describe("donation contact", () => {
  it("donations go to 7732098983 by phone", () => {
    expect(PHONE_TEL).toBe("tel:+17732098983");
  });

  it("WhatsApp donations go to 7732098983", () => {
    expect(whatsappLink("hi")).toMatch(/^https:\/\/wa\.me\/17732098983\?text=/);
  });

  it("provides organization bank account details", () => {
    expect(BANK_ACCOUNTS.length).toBeGreaterThan(0);
    const ngn = BANK_ACCOUNTS.find((a) => a.id === "ngn-primary");
    expect(ngn).toBeDefined();
    expect(ngn?.accountNumber).toBe("1018892341");
    expect(ngn?.accountName).toContain("Olaide Doherty Charity Foundation");
  });

  it("formats card donation message properly", () => {
    const msg = cardDonationMessage("youth transformation", "$100");
    expect(msg).toContain("card donation of $100 towards youth transformation");
  });

  it("formats bank transfer confirmation message properly", () => {
    const msg = bankTransferConfirmationMessage("food relief", "₦50,000");
    expect(msg).toContain("bank transfer of ₦50,000 towards food relief");
  });
});
