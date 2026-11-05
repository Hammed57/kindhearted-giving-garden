// Contact details taken from the foundation's Instagram profile.
export const PHONE_DISPLAY = "(773) 209-8983";
export const PHONE_E164 = "+17732098983";
export const PHONE_TEL = `tel:${PHONE_E164}`;
export const PHONE_SMS = `sms:${PHONE_E164}`;
export const EMAIL_ADDRESS = "olaidedohertycharityfoundation@gmail.com";
export const EMAIL_LINK = `mailto:${EMAIL_ADDRESS}`;
export const INSTAGRAM_HANDLE = "@odcharityfoundation";
export const INSTAGRAM_URL = "https://www.instagram.com/odcharityfoundation";
export const TIKTOK_URL = "https://www.tiktok.com/@odcharityfoundation";
export const FACEBOOK_NAME = "Olaide Doherty";
export const FACEBOOK_URL = "https://www.facebook.com/search/top?q=Olaide%20Doherty";

export function whatsappLink(message: string) {
  return `https://wa.me/${PHONE_E164.replace("+", "")}?text=${encodeURIComponent(message)}`;
}

export function donationMessage(cause: string, amount: string) {
  const trimmed = amount.trim();
  const amountPart = trimmed ? ` of ${trimmed}` : "";
  return `Hello OD Charity Foundation! I'd like to make a donation${amountPart} towards ${cause}. Please share how I can give.`;
}

export interface BankAccount {
  id: string;
  label: string;
  bankName: string;
  accountName: string;
  accountNumber: string;
  currency: string;
  accountType: string;
  swiftBic?: string;
  sortCode?: string;
  wireRouting?: string;
  notes?: string;
}

export const ORGANIZATION_NAME = "Olaide Doherty Charity Foundation";

export const BANK_ACCOUNTS: BankAccount[] = [
  {
    id: "ngn-opay",
    label: "Naira Account (NGN)",
    bankName: "Opay",
    accountName: "Olaide Doherty",
    accountNumber: "9169711132",
    currency: "NGN (₦)",
    accountType: "Opay Account",
    notes: "For transfers within Nigeria",
  },
  {
    id: "usd-boa",
    label: "USD Account (United States)",
    bankName: "Bank of America",
    accountName: "Olaidestouch LLC",
    accountNumber: "081904808",
    currency: "USD ($)",
    accountType: "Bank of America Account",
    wireRouting: "026009593",
    notes: "For supporters in the US and international wire transfers",
  },
];

export function cardDonationMessage(cause: string, amount: string) {
  const trimmed = amount.trim();
  const amountPart = trimmed ? ` of ${trimmed}` : "";
  return `Hello OD Charity Foundation! I would like to make a card donation${amountPart} towards ${cause}. Please provide a secure card payment link.`;
}

export function bankTransferConfirmationMessage(cause: string, amount: string, reference?: string) {
  const trimmed = amount.trim();
  const amountPart = trimmed ? ` of ${trimmed}` : "";
  const refPart = reference ? ` (Ref: ${reference})` : "";
  return `Hello OD Charity Foundation! I have made a bank transfer${amountPart} towards ${cause}${refPart}. Please find my payment details attached.`;
}
