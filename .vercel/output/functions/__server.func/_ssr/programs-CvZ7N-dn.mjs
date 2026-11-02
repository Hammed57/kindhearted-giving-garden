import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { o as Radio, y as Check } from "../_libs/lucide-react.mjs";
import { t as DonateCta } from "./donate-cta-D9mSfMwg.mjs";
import { t as IMG_20261102_WA0022_default } from "./IMG-20261102-WA0022-CU-E_DqX.mjs";
import { n as IMG_20261102_WA0034_default, t as IMG_20261102_WA0024_default } from "./IMG-20261102-WA0034-CDWfCgSm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/programs-CvZ7N-dn.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/programs.tsx?tsr-split=component";
var PROGRAMS = [
	{
		tag: "Food relief & welfare",
		title: "Essential food relief",
		text: "Distributing staple food items, grains, cooking oil and packaged relief packages directly to families and individuals in need.",
		points: [
			"Staple grains & packaged rice",
			"Cooking oil & kitchen essentials",
			"Direct household relief"
		],
		image: IMG_20261102_WA0022_default,
		alt: "Olaide Doherty Charity Foundation relief food packages, rice bags, cooking oil and foundation banner",
		w: 1246,
		h: 1600,
		frame: "mx-auto aspect-[4/5] max-w-md object-top"
	},
	{
		tag: "Youth transformation",
		title: "Supporting students",
		text: "Back-to-school support, backpacks, books and encouragement for young people as they shape their futures.",
		points: [
			"Mentorship",
			"Custom backpacks & supplies",
			"Confidence building"
		],
		image: IMG_20261102_WA0024_default,
		alt: "Student before and after receiving new Olaide Doherty Charity Foundation backpack",
		w: 1600,
		h: 1600,
		frame: "mx-auto aspect-[4/5] max-w-md object-top"
	},
	{
		tag: "Community outreach",
		title: "Revitalizing communities",
		text: "Showing up for neighbourhoods with hot meals, food supplies, care, support and moments that bring people together.",
		points: [
			"Outreach days",
			"Nutritious hot meals",
			"Encouraging hope"
		],
		image: IMG_20261102_WA0034_default,
		alt: "Olaide Doherty Charity Foundation outreach staff and volunteers with official banner",
		w: 1600,
		h: 1020,
		frame: "aspect-[4/3]"
	}
];
function Programs() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "px-5 pb-10 pt-16 md:pt-24",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mx-auto max-w-6xl",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "eyebrow text-primary",
					children: "Our programs"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 41,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "mt-4 max-w-3xl text-5xl font-semibold leading-[1.05] md:text-7xl",
					children: "How we make a difference."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 42,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 40,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 39,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "px-5 pb-10",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mx-auto max-w-6xl space-y-20 py-10 md:space-y-28",
				children: PROGRAMS.map((p, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", {
					className: "grid items-center gap-10 md:grid-cols-2 md:gap-16",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
						src: p.image,
						alt: p.alt,
						width: p.w,
						height: p.h,
						loading: "lazy",
						className: `w-full rounded-[2rem] object-cover shadow-soft ${p.frame} ${i % 2 === 1 ? "md:order-2" : ""}`
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 51,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "eyebrow text-primary",
							children: p.tag
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 53,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
							className: "mt-3 text-4xl font-semibold leading-tight",
							children: p.title
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 54,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-4 text-lg leading-relaxed text-muted-foreground",
							children: p.text
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 55,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
							className: "mt-6 space-y-3",
							children: p.points.map((pt) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
								className: "flex items-center gap-3 font-semibold",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "flex h-7 w-7 items-center justify-center rounded-full bg-gold-soft text-accent-foreground",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Check, { className: "h-4 w-4" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 59,
										columnNumber: 25
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 58,
									columnNumber: 23
								}, this), pt]
							}, pt, true, {
								fileName: _jsxFileName,
								lineNumber: 57,
								columnNumber: 39
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 56,
							columnNumber: 17
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 52,
						columnNumber: 15
					}, this)]
				}, p.title, true, {
					fileName: _jsxFileName,
					lineNumber: 50,
					columnNumber: 35
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 49,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 48,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "px-5",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mx-auto flex max-w-6xl flex-col gap-6 rounded-[2rem] bg-gold-soft p-8 md:flex-row md:items-center md:justify-between md:p-12",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-start gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Radio, { className: "h-5 w-5" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 73,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 72,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
						className: "text-2xl font-semibold md:text-3xl",
						children: "Join us live"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 76,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-1 text-muted-foreground",
						children: [
							"We host regular live sessions on Instagram and TikTok at ",
							INSTAGRAM_HANDLE,
							"."
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 77,
						columnNumber: 15
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 75,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 71,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
						href: INSTAGRAM_URL,
						target: "_blank",
						rel: "noreferrer",
						className: "rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90",
						children: "Instagram"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 83,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
						href: TIKTOK_URL,
						target: "_blank",
						rel: "noreferrer",
						className: "rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary hover:bg-primary/5",
						children: "TikTok"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 86,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 82,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 70,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 69,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DonateCta, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 93,
			columnNumber: 7
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 38,
		columnNumber: 10
	}, this);
}
//#endregion
export { Programs as component };
