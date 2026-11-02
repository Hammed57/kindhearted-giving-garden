//#region node_modules/.nitro/vite/services/ssr/assets/contact-BeH--KPf.js
var PHONE_DISPLAY = "(773) 209-8983";
var PHONE_E164 = "+17732098983";
var PHONE_TEL = `tel:${PHONE_E164}`;
var PHONE_SMS = `sms:${PHONE_E164}`;
var INSTAGRAM_HANDLE = "@odcharityfoundation";
var INSTAGRAM_URL = "https://www.instagram.com/odcharityfoundation";
var TIKTOK_URL = "https://www.tiktok.com/@odcharityfoundation";
var FACEBOOK_NAME = "Olaide Doherty";
var FACEBOOK_URL = "https://www.facebook.com/search/top?q=Olaide%20Doherty";
function whatsappLink(message) {
	return `https://wa.me/${PHONE_E164.replace("+", "")}?text=${encodeURIComponent(message)}`;
}
function donationMessage(cause, amount) {
	const trimmed = amount.trim();
	return `Hello OD Charity Foundation! I'd like to make a donation${trimmed ? ` of ${trimmed}` : ""} towards ${cause}. Please share how I can give.`;
}
//#endregion
export { PHONE_DISPLAY as a, TIKTOK_URL as c, INSTAGRAM_URL as i, donationMessage as l, FACEBOOK_URL as n, PHONE_SMS as o, INSTAGRAM_HANDLE as r, PHONE_TEL as s, FACEBOOK_NAME as t, whatsappLink as u };
