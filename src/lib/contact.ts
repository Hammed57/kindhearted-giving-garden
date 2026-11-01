// Contact details taken from the foundation's Instagram profile.
export const PHONE_DISPLAY = "(773) 209-8983";
export const PHONE_E164 = "+17732098983";
export const PHONE_TEL = `tel:${PHONE_E164}`;
export const PHONE_SMS = `sms:${PHONE_E164}`;
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
