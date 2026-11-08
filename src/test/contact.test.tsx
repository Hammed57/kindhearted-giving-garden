import { describe, expect, it } from "vitest";
import {
  whatsappLink,
  PHONE_TEL,
  BANK_ACCOUNTS,
  cardDonationMessage,
  bankTransferConfirmationMessage,
  EMAIL_ADDRESS,
  EMAIL_LINK,
} from "@/lib/contact";
import { CAUSES, CAUSE_LABELS } from "@/routes/donate";

describe("donation contact", () => {
  it("provides the foundation email address", () => {
    expect(EMAIL_ADDRESS).toBe("olaidedohertycharityfoundation@gmail.com");
    expect(EMAIL_LINK).toBe("mailto:olaidedohertycharityfoundation@gmail.com");
  });

  it("offers Food as a donation cause", () => {
    expect(CAUSES).toContain("food");
    expect(CAUSE_LABELS["food"]).toBe("Food");
  });

  it("donations go to 7732098983 by phone", () => {
    expect(PHONE_TEL).toBe("tel:+17732098983");
  });

  it("WhatsApp donations go to 7732098983", () => {
    expect(whatsappLink("hi")).toMatch(/^https:\/\/wa\.me\/17732098983\?text=/);
  });

  it("provides organization bank account details", () => {
    expect(BANK_ACCOUNTS.length).toBeGreaterThan(0);
    const opay = BANK_ACCOUNTS.find((a) => a.bankName === "Opay");
    expect(opay?.accountNumber).toBe("9169711132");
    expect(opay?.accountName).toBe("Olaide Doherty");
  });

  it("Bank of America account and wire routing", () => {
    const boa = BANK_ACCOUNTS.find((a) => a.bankName === "Bank of America");
    expect(boa?.accountNumber).toBe("081904808");
    expect(boa?.accountName).toBe("Olaidestouch LLC");
    expect(boa?.wireRouting).toBe("026009593");
  });

  it("old Zenith accounts are gone", () => {
    expect(BANK_ACCOUNTS.some((a) => a.bankName.includes("Zenith"))).toBe(false);
  });

  it("formats card donation message properly", () => {
    const msg = cardDonationMessage("youth transformation", "$100");
    expect(msg).toContain("card donation of $100 towards youth transformation");
  });

  it("formats bank transfer confirmation message properly", () => {
    const msg = bankTransferConfirmationMessage("food relief", "₦50,000");
    expect(msg).toContain("bank transfer of ₦50,000 towards food relief");
  });

  it("formats health donation message properly", () => {
    const msg = cardDonationMessage("health", "$50");
    expect(msg).toContain("card donation of $50 towards health");
  });

  it("formats food donation message properly", () => {
    const msg = cardDonationMessage("food", "$50");
    expect(msg).toContain("card donation of $50 towards food");
  });
});
