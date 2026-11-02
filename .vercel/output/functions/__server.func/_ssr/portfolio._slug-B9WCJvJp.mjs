import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { n as cn, t as Button } from "./button-C7qsqHUj.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { b as ArrowRight, m as Instagram, p as Maximize2, s as Quote, t as X, x as ArrowLeft } from "../_libs/lucide-react.mjs";
import { t as DonateCta } from "./donate-cta-D9mSfMwg.mjs";
import { t as PORTFOLIO } from "./portfolio-BG5JNamr.mjs";
import { t as Route } from "./portfolio._slug-Bymx4L72.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/portfolio._slug-B9WCJvJp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$1 = "/app/applet/src/components/ui/dialog.tsx";
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 21,
	columnNumber: 3
}, void 0));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogOverlay, {}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 37,
	columnNumber: 5
}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "h-4 w-4" }, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 48,
			columnNumber: 9
		}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
			className: "sr-only",
			children: "Close"
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 49,
			columnNumber: 9
		}, void 0)]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 47,
		columnNumber: 7
	}, void 0)]
}, void 0, true, {
	fileName: _jsxFileName$1,
	lineNumber: 38,
	columnNumber: 5
}, void 0)] }, void 0, true, {
	fileName: _jsxFileName$1,
	lineNumber: 36,
	columnNumber: 3
}, void 0));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 57,
	columnNumber: 3
}, void 0);
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 62,
	columnNumber: 3
}, void 0);
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 73,
	columnNumber: 3
}, void 0));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 85,
	columnNumber: 3
}, void 0));
DialogDescription.displayName = DialogDescription$1.displayName;
var _jsxFileName = "/app/applet/src/routes/portfolio.$slug.tsx?tsr-split=component";
function ProjectPage() {
	const { project: p } = Route.useLoaderData();
	const idx = PORTFOLIO.findIndex((x) => x.slug === p.slug);
	const next = PORTFOLIO[(idx + 1) % PORTFOLIO.length] ?? PORTFOLIO[0];
	const wide = (p.cover.w ?? 1) > (p.cover.h ?? 1);
	const [selectedImage, setSelectedImage] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "px-5 pb-12 pt-12 md:pt-20",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mx-auto max-w-6xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/portfolio",
						className: "inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowLeft, { className: "h-4 w-4" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 24,
							columnNumber: 13
						}, this), " All projects"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 23,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "eyebrow mt-8 text-primary",
						children: [
							p.category,
							" · ",
							p.date
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 26,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
						className: "mt-4 max-w-4xl text-5xl font-semibold leading-[1.05] md:text-7xl",
						children: p.title
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 29,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-6 max-w-2xl text-lg text-muted-foreground",
						children: p.summary
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 32,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 22,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 21,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "px-5",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: `mx-auto ${wide ? "max-w-6xl" : "max-w-md"}`,
				children: p.cover.type === "video" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "relative overflow-hidden rounded-[2rem] bg-black shadow-soft",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("video", {
						src: p.cover.src,
						poster: p.cover.poster,
						controls: true,
						playsInline: true,
						preload: "metadata",
						className: `w-full ${wide ? "aspect-[16/9] md:aspect-[21/9]" : "aspect-[4/5]"} object-contain`
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 39,
						columnNumber: 15
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 38,
					columnNumber: 39
				}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					onClick: () => setSelectedImage({
						src: p.cover.src,
						alt: p.cover.alt
					}),
					className: "group relative block w-full cursor-zoom-in text-left focus:outline-none",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
						src: p.cover.src,
						alt: p.cover.alt,
						width: p.cover.w,
						height: p.cover.h,
						className: `w-full rounded-[2rem] object-cover shadow-soft transition-transform duration-300 group-hover:brightness-95 ${wide ? "aspect-[16/9] md:aspect-[21/9]" : ""}`
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 44,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white opacity-0 transition-opacity group-hover:opacity-100",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Maximize2, { className: "h-4 w-4" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 46,
							columnNumber: 17
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 45,
						columnNumber: 15
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 40,
					columnNumber: 22
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 37,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 36,
			columnNumber: 7
		}, this),
		p.video && /* @__PURE__ */ (void 0)("section", {
			className: "px-5 pt-16",
			children: /* @__PURE__ */ (void 0)("div", {
				className: "mx-auto max-w-4xl",
				children: [
					/* @__PURE__ */ (void 0)("p", {
						className: "eyebrow text-primary",
						children: "Featured Video"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 54,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (void 0)("h2", {
						className: "mt-2 text-2xl font-semibold",
						children: p.video.title || `${p.title} in action`
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 55,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (void 0)("div", {
						className: "mt-6 overflow-hidden rounded-[2rem] bg-black shadow-soft",
						children: /* @__PURE__ */ (void 0)("video", {
							src: p.video.src,
							poster: p.video.poster,
							controls: true,
							playsInline: true,
							preload: "metadata",
							className: "aspect-video w-full object-contain"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 59,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 58,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 53,
				columnNumber: 11
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 52,
			columnNumber: 19
		}, this),
		p.stats.length > 0 && /* @__PURE__ */ (void 0)("section", {
			className: "px-5 pt-16",
			children: /* @__PURE__ */ (void 0)("dl", {
				className: "mx-auto grid max-w-6xl gap-4 sm:grid-cols-3",
				children: p.stats.map((s) => /* @__PURE__ */ (void 0)("div", {
					className: "rounded-3xl border border-border bg-card p-7",
					children: [/* @__PURE__ */ (void 0)("dt", {
						className: "eyebrow text-muted-foreground",
						children: s.label
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 67,
						columnNumber: 17
					}, this), /* @__PURE__ */ (void 0)("dd", {
						className: "mt-3 font-display text-4xl font-semibold text-primary",
						children: s.value
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 68,
						columnNumber: 17
					}, this)]
				}, s.label, true, {
					fileName: _jsxFileName,
					lineNumber: 66,
					columnNumber: 31
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 65,
				columnNumber: 11
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 64,
			columnNumber: 30
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "px-5 py-16 md:py-24",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.2fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "space-y-6 text-lg leading-relaxed text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
							className: "text-3xl font-semibold text-foreground md:text-4xl",
							children: "The story"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 76,
							columnNumber: 13
						}, this),
						p.story.map((para) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: para }, para.slice(0, 24), false, {
							fileName: _jsxFileName,
							lineNumber: 77,
							columnNumber: 34
						}, this)),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							asChild: true,
							variant: "soft",
							size: "lg",
							className: "mt-2",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
								href: p.instagram,
								target: "_blank",
								rel: "noreferrer",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Instagram, {}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 80,
									columnNumber: 17
								}, this), " See it on Instagram"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 79,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 78,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 75,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "space-y-6",
					children: [p.quote && /* @__PURE__ */ (void 0)("figure", {
						className: "bg-deep rounded-[2rem] p-8 text-primary-foreground shadow-soft",
						children: [
							/* @__PURE__ */ (void 0)(Quote, { className: "h-8 w-8 text-gold" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 87,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (void 0)("blockquote", {
								className: "mt-4 font-display text-2xl leading-snug",
								children: [
									"\"",
									p.quote.text,
									"\""
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 88,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (void 0)("figcaption", {
								className: "eyebrow mt-6 text-gold",
								children: p.quote.by
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 91,
								columnNumber: 17
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 86,
						columnNumber: 25
					}, this), p.gallery.map((g) => g.type === "video" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "overflow-hidden rounded-[2rem] bg-black shadow-soft",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("video", {
							src: g.src,
							poster: g.poster,
							controls: true,
							playsInline: true,
							preload: "metadata",
							className: "mx-auto w-full max-w-sm rounded-[2rem] object-contain"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 94,
							columnNumber: 19
						}, this), g.title && /* @__PURE__ */ (void 0)("p", {
							className: "p-3 text-center text-xs text-muted-foreground",
							children: g.title
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 95,
							columnNumber: 31
						}, this)]
					}, g.src, true, {
						fileName: _jsxFileName,
						lineNumber: 93,
						columnNumber: 54
					}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: () => setSelectedImage({
							src: g.src,
							alt: g.alt
						}),
						className: "group relative mx-auto block w-full max-w-sm cursor-zoom-in text-left focus:outline-none",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
							src: g.src,
							alt: g.alt,
							width: g.w,
							height: g.h,
							loading: "lazy",
							className: "w-full rounded-[2rem] shadow-soft transition-transform duration-300 group-hover:scale-[1.02]"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 100,
							columnNumber: 19
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "absolute bottom-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white opacity-0 transition-opacity group-hover:opacity-100",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Maximize2, { className: "h-4 w-4" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 102,
								columnNumber: 21
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 101,
							columnNumber: 19
						}, this)]
					}, g.src, true, {
						fileName: _jsxFileName,
						lineNumber: 96,
						columnNumber: 26
					}, this))]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 85,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 74,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 73,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog, {
			open: !!selectedImage,
			onOpenChange: (open) => !open && setSelectedImage(null),
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, {
				className: "max-w-4xl border-none bg-black/95 p-3 text-white sm:rounded-3xl",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle, {
					className: "sr-only",
					children: selectedImage?.alt || "Enlarged portfolio image"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 112,
					columnNumber: 11
				}, this), selectedImage && /* @__PURE__ */ (void 0)("div", {
					className: "flex flex-col items-center justify-center",
					children: [/* @__PURE__ */ (void 0)("img", {
						src: selectedImage.src,
						alt: selectedImage.alt,
						className: "max-h-[85vh] w-auto max-w-full rounded-2xl object-contain"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 116,
						columnNumber: 15
					}, this), selectedImage.alt && /* @__PURE__ */ (void 0)("p", {
						className: "mt-3 text-center text-sm text-white/80",
						children: selectedImage.alt
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 117,
						columnNumber: 37
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 115,
					columnNumber: 29
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 111,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 110,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "px-5",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mx-auto max-w-6xl border-t border-border pt-10",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "eyebrow text-muted-foreground",
					children: "Next project"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 124,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
					to: "/portfolio/$slug",
					params: { slug: next.slug },
					className: "group mt-3 flex items-center justify-between gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "font-display text-3xl font-semibold group-hover:text-primary md:text-5xl",
						children: next.title
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 128,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { className: "h-8 w-8 shrink-0 text-primary transition-transform group-hover:translate-x-2" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 131,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 125,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 123,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 122,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DonateCta, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 136,
			columnNumber: 7
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 20,
		columnNumber: 10
	}, this);
}
//#endregion
export { ProjectPage as component };
