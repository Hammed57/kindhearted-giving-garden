import { describe, expect, it } from "vitest";
import { whatsappLink, PHONE_TEL } from "@/lib/contact";

describe("donation contact", () => {
  it("donations go to 7732098983 by phone", () => {
    expect(PHONE_TEL).toBe("tel:+17732098983");
  });

  it("WhatsApp donations go to 7732098983", () => {
    expect(whatsappLink("hi")).toMatch(/^https:\/\/wa\.me\/17732098983\?text=/);
  });
});
