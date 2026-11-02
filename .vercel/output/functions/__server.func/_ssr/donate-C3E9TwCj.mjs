import { r as __toESM } from "../_runtime.mjs";
import { t as outreach_food_distribution_default } from "./outreach-food-distribution-CYBXn48v.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { n as cn, t as Button } from "./button-C7qsqHUj.mjs";
import { d as MessageCircle, g as Heart, l as Phone, u as MessageSquare } from "../_libs/lucide-react.mjs";
import { a as PHONE_DISPLAY, l as donationMessage, o as PHONE_SMS, s as PHONE_TEL, u as whatsappLink } from "./contact-BeH--KPf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/donate-C3E9TwCj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/donate.tsx?tsr-split=component";
var CAUSES = [
	"where it's needed most",
	"small business support",
	"youth transformation",
	"community outreach"
];
var CAUSE_LABELS = {
	"where it's needed most": "Where needed most",
	"small business support": "Small businesses",
	"youth transformation": "Youth",
	"community outreach": "Community"
};
var AMOUNTS = [
	"$25",
	"$50",
	"$100",
	"$250",
	"₦50,000",
	"₦100,000"
];
function Donate() {
	const [cause, setCause] = (0, import_react.useState)("where it's needed most");
	const [amount, setAmount] = (0, import_react.useState)("$50");
	const message = donationMessage(cause, amount);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "px-5 py-16 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "eyebrow text-primary",
					children: "Donate"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 22,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "mt-4 text-5xl font-semibold leading-[1.05] md:text-6xl",
					children: ["Give hope. ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "italic text-primary",
						children: "Change a life."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 24,
						columnNumber: 24
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 23,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-6 text-lg leading-relaxed text-muted-foreground",
					children: "Every donation goes towards helping people grow — from funding a small business to mentoring a young person. Choose a cause and an amount, then reach out and our team will guide you through giving."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 26,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
					src: outreach_food_distribution_default,
					alt: "Women holding food packages from an Olaide Doherty Charity Foundation outreach",
					width: 1870,
					height: 841,
					loading: "lazy",
					className: "mt-10 hidden aspect-[4/3] w-full rounded-[2rem] object-cover shadow-soft lg:block"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 31,
					columnNumber: 11
				}, this)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 21,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "rounded-[2rem] border border-border bg-card p-6 shadow-soft md:p-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "flex h-11 w-11 items-center justify-center rounded-full bg-gold text-gold-foreground",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heart, { className: "h-5 w-5" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 37,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 36,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
							className: "text-2xl font-semibold",
							children: "Make your donation"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 39,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 35,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", {
						className: "mt-8",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("legend", {
							className: "eyebrow text-muted-foreground",
							children: "1. Choose a cause"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 43,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-3 grid grid-cols-2 gap-2",
							children: CAUSES.map((c) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								onClick: () => setCause(c),
								className: cn("rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition-colors", cause === c ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background hover:border-primary/50"),
								children: CAUSE_LABELS[c]
							}, c, false, {
								fileName: _jsxFileName,
								lineNumber: 45,
								columnNumber: 32
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 44,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 42,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", {
						className: "mt-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("legend", {
								className: "eyebrow text-muted-foreground",
								children: "2. Choose an amount"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 52,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mt-3 grid grid-cols-3 gap-2",
								children: AMOUNTS.map((a) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									type: "button",
									onClick: () => setAmount(a),
									className: cn("rounded-2xl border py-3 font-display text-lg font-semibold transition-colors", amount === a ? "border-gold bg-gold text-gold-foreground" : "border-border bg-background hover:border-gold"),
									children: a
								}, a, false, {
									fileName: _jsxFileName,
									lineNumber: 54,
									columnNumber: 33
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 53,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
								className: "mt-3 block",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "sr-only",
									children: "Other amount"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 59,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
									value: AMOUNTS.includes(amount) ? "" : amount,
									onChange: (e) => setAmount(e.target.value),
									placeholder: "Or enter another amount",
									className: "h-12 w-full rounded-2xl border border-input bg-background px-4 text-base outline-none focus:border-primary"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 60,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 58,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 51,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "eyebrow text-muted-foreground",
								children: "3. Send your gift"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 65,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mt-3 space-y-3",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
									asChild: true,
									variant: "gold",
									size: "xl",
									className: "w-full",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
										href: whatsappLink(message),
										target: "_blank",
										rel: "noreferrer",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MessageCircle, {}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 69,
											columnNumber: 19
										}, this), " Donate via WhatsApp"]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 68,
										columnNumber: 17
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 67,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "grid grid-cols-2 gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
										asChild: true,
										variant: "hero",
										size: "xl",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
											href: PHONE_TEL,
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Phone, {}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 75,
												columnNumber: 21
											}, this), " Call"]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 74,
											columnNumber: 19
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 73,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
										asChild: true,
										variant: "soft",
										size: "xl",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
											href: `${PHONE_SMS}?body=${encodeURIComponent(message)}`,
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MessageSquare, {}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 80,
												columnNumber: 21
											}, this), " Text"]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 79,
											columnNumber: 19
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 78,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 72,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 66,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-5 text-center text-sm text-muted-foreground",
								children: [
									"To donate, contact",
									" ",
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
										href: PHONE_TEL,
										className: "font-semibold text-primary",
										children: PHONE_DISPLAY
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 87,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 85,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 64,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 34,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 20,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 19,
		columnNumber: 10
	}, this);
}
//#endregion
export { Donate as component };
