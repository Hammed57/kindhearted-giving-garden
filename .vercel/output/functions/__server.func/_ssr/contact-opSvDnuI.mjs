import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { d as MessageCircle, l as Phone, m as Instagram, v as Facebook } from "../_libs/lucide-react.mjs";
import { t as foundation_portrait_default } from "./foundation-portrait-CzfGZ07W.mjs";
import { a as PHONE_DISPLAY, c as TIKTOK_URL, i as INSTAGRAM_URL, n as FACEBOOK_URL, r as INSTAGRAM_HANDLE, s as PHONE_TEL, t as FACEBOOK_NAME, u as whatsappLink } from "./contact-BeH--KPf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-opSvDnuI.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/contact.tsx?tsr-split=component";
function Contact() {
	const channels = [
		{
			icon: Phone,
			label: "Call us",
			value: PHONE_DISPLAY,
			href: PHONE_TEL,
			external: false
		},
		{
			icon: MessageCircle,
			label: "WhatsApp",
			value: PHONE_DISPLAY,
			href: whatsappLink("Hello OD Charity Foundation!"),
			external: true
		},
		{
			icon: Instagram,
			label: "Instagram",
			value: INSTAGRAM_HANDLE,
			href: INSTAGRAM_URL,
			external: true
		},
		{
			icon: Facebook,
			label: "Facebook",
			value: FACEBOOK_NAME,
			href: FACEBOOK_URL,
			external: true
		}
	];
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "px-5 py-16 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto grid max-w-6xl gap-12 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "eyebrow text-primary",
					children: "Contact"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 33,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "mt-4 text-5xl font-semibold leading-[1.05] md:text-6xl",
					children: "Let's talk."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 34,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-6 max-w-md text-lg text-muted-foreground",
					children: "Want to donate, volunteer, partner with us or just say hello? Reach out — we'd love to hear from you."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 35,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-10 grid gap-3 sm:grid-cols-2",
					children: channels.map((c) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
						href: c.href,
						target: c.external ? "_blank" : void 0,
						rel: c.external ? "noreferrer" : void 0,
						className: "group rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-soft",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary text-primary group-hover:bg-gold group-hover:text-gold-foreground",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(c.icon, { className: "h-5 w-5" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 43,
									columnNumber: 19
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 42,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "eyebrow mt-5 text-muted-foreground",
								children: c.label
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 45,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-1 font-display text-xl font-semibold",
								children: c.value
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 46,
								columnNumber: 17
							}, this)
						]
					}, c.label, true, {
						fileName: _jsxFileName,
						lineNumber: 41,
						columnNumber: 32
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 40,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-6 text-sm text-muted-foreground",
					children: [
						"Also on",
						" ",
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
							href: TIKTOK_URL,
							target: "_blank",
							rel: "noreferrer",
							className: "font-semibold text-primary",
							children: ["TikTok ", INSTAGRAM_HANDLE]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 51,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 49,
					columnNumber: 11
				}, this)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 32,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
				src: foundation_portrait_default,
				alt: "Olaide Doherty, founder of the Olaide Doherty Charity Foundation",
				width: 1382,
				height: 1726,
				loading: "lazy",
				className: "aspect-[4/5] w-full rounded-[2rem] object-cover object-top shadow-soft lg:aspect-auto lg:h-full"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 57,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 31,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 30,
		columnNumber: 10
	}, this);
}
//#endregion
export { Contact as component };
