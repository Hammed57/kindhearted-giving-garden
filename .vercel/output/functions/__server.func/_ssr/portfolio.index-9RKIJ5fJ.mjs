import { t as MOTTO } from "./brand-D65ZkdhW.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { b as ArrowRight, c as Play } from "../_libs/lucide-react.mjs";
import { t as DonateCta } from "./donate-cta-D9mSfMwg.mjs";
import { t as PORTFOLIO } from "./portfolio-BG5JNamr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/portfolio.index-9RKIJ5fJ.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/portfolio.index.tsx?tsr-split=component";
function PortfolioIndex() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "px-5 pb-12 pt-16 md:pt-24",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mx-auto max-w-6xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "eyebrow text-primary",
						children: "Our portfolio"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 10,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
						className: "mt-4 max-w-4xl text-5xl font-semibold leading-[1.05] md:text-7xl",
						children: [
							MOTTO.split(" meets ")[0],
							" ",
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "italic text-primary",
								children: "meets"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 12,
								columnNumber: 41
							}, this),
							" ",
							MOTTO.split(" meets ")[1],
							"."
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 11,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-6 max-w-2xl text-lg text-muted-foreground",
						children: "A record of the projects we've delivered with the help of our sponsors, supporters and community."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 15,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 9,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 8,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "px-5 pb-16",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:gap-8",
				children: PORTFOLIO.map((p, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
					to: "/portfolio/$slug",
					params: { slug: p.slug },
					className: `group block ${i % 2 === 1 ? "md:mt-16" : ""}`,
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "relative overflow-hidden rounded-[2rem] bg-card shadow-soft",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
							src: p.cover.poster || p.cover.src,
							alt: p.cover.alt,
							width: p.cover.w,
							height: p.cover.h,
							loading: i < 2 ? "eager" : "lazy",
							className: "aspect-[4/5] w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 28,
							columnNumber: 17
						}, this), (p.cover.type === "video" || p.video) && /* @__PURE__ */ (void 0)("span", {
							className: "absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-gold text-gold-foreground shadow-gold transition-transform group-hover:scale-110",
							children: /* @__PURE__ */ (void 0)(Play, { className: "ml-0.5 h-5 w-5 fill-current" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 30,
								columnNumber: 21
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 29,
							columnNumber: 59
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 27,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-6 px-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "eyebrow text-primary",
								children: [
									p.category,
									" · ",
									p.date
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 34,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
								className: "mt-2 text-3xl font-semibold",
								children: p.title
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 37,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-2 max-w-md text-muted-foreground",
								children: p.summary
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 38,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "mt-4 inline-flex items-center gap-2 font-semibold text-primary transition-all group-hover:gap-3",
								children: ["View project ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { className: "h-4 w-4" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 40,
									columnNumber: 32
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 39,
								columnNumber: 17
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 33,
						columnNumber: 15
					}, this)]
				}, p.slug, true, {
					fileName: _jsxFileName,
					lineNumber: 24,
					columnNumber: 36
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 23,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 22,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DonateCta, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 47,
			columnNumber: 7
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 7,
		columnNumber: 10
	}, this);
}
//#endregion
export { PortfolioIndex as component };
