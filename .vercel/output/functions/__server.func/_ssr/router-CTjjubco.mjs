import { r as __toESM } from "../_runtime.mjs";
import { t as MOTTO } from "./brand-D65ZkdhW.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as Button } from "./button-C7qsqHUj.mjs";
import { _ as createFileRoute, b as useRouter, d as Scripts, f as HeadContent, g as lazyRouteComponent, h as Outlet, m as createRouter, v as createRootRouteWithContext, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as Menu, g as Heart, l as Phone, m as Instagram, t as X, v as Facebook } from "../_libs/lucide-react.mjs";
import { a as PHONE_DISPLAY, i as INSTAGRAM_URL, n as FACEBOOK_URL, r as INSTAGRAM_HANDLE, s as PHONE_TEL, t as FACEBOOK_NAME } from "./contact-BeH--KPf.mjs";
import { t as Route$7 } from "./portfolio._slug-Bymx4L72.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CTjjubco.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var styles_default = "/assets/styles-CR2PCDR0.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message: describeThrown(error),
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var MAX_SERIALIZED_LENGTH = 2e3;
function describeThrown(error) {
	if (error instanceof Response) return `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`;
	if (error instanceof Error) return error.message;
	if (typeof error === "string") return error;
	const { message } = error ?? {};
	if (typeof message === "string" && message.length > 0) return message;
	try {
		return JSON.stringify(error)?.slice(0, MAX_SERIALIZED_LENGTH) ?? String(error);
	} catch {
		return String(error);
	}
}
var od_mark_default = "/assets/od-mark-CBVNOiww.png";
var _jsxFileName$2 = "/app/applet/src/components/site-header.tsx";
var NAV = [
	{
		to: "/",
		label: "Home",
		exact: true
	},
	{
		to: "/about",
		label: "About",
		exact: true
	},
	{
		to: "/programs",
		label: "Programs",
		exact: true
	},
	{
		to: "/portfolio",
		label: "Portfolio",
		exact: false
	},
	{
		to: "/contact",
		label: "Contact",
		exact: true
	}
];
function BrandMark() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
		to: "/",
		className: "flex items-center gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
			className: "flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-card shadow-soft",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
				src: od_mark_default,
				alt: "Olaide Doherty Charity Foundation logo",
				className: "h-9 w-9 object-contain"
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 19,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 18,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
			className: "leading-tight",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				className: "block font-display text-lg font-semibold text-foreground",
				children: "Olaide Doherty"
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 26,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				className: "block text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground",
				children: "Charity Foundation"
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 29,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 25,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 17,
		columnNumber: 5
	}, this);
}
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
		className: "sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto flex h-20 max-w-6xl items-center justify-between px-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BrandMark, {}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 43,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
					className: "hidden items-center gap-8 md:flex",
					children: [NAV.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: item.to,
						className: "text-sm font-semibold text-muted-foreground transition-colors hover:text-primary",
						activeProps: { className: "text-primary" },
						activeOptions: { exact: true },
						children: item.label
					}, item.to, false, {
						fileName: _jsxFileName$2,
						lineNumber: 47,
						columnNumber: 13
					}, this)), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						asChild: true,
						variant: "gold",
						size: "default",
						className: "px-6",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/donate",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heart, {}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 59,
								columnNumber: 15
							}, this), " Donate"]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 58,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 57,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 45,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-2 md:hidden",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						asChild: true,
						variant: "gold",
						size: "sm",
						className: "px-4",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/donate",
							children: "Donate"
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 66,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 65,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						"aria-label": open ? "Close menu" : "Open menu",
						onClick: () => setOpen((v) => !v),
						className: "flex h-10 w-10 items-center justify-center rounded-full text-foreground hover:bg-muted",
						children: open ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "h-5 w-5" }, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 73,
							columnNumber: 21
						}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Menu, { className: "h-5 w-5" }, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 73,
							columnNumber: 49
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 68,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 64,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 42,
			columnNumber: 7
		}, this), open && /* @__PURE__ */ (void 0)("nav", {
			className: "border-t border-border bg-background px-5 pb-6 pt-2 md:hidden",
			children: [NAV.map((item) => /* @__PURE__ */ (void 0)(Link, {
				to: item.to,
				onClick: () => setOpen(false),
				className: "block border-b border-border/60 py-4 font-display text-xl text-foreground",
				activeProps: { className: "text-primary" },
				activeOptions: { exact: true },
				children: item.label
			}, item.to, false, {
				fileName: _jsxFileName$2,
				lineNumber: 81,
				columnNumber: 13
			}, this)), /* @__PURE__ */ (void 0)(Button, {
				asChild: true,
				variant: "gold",
				size: "xl",
				className: "mt-5 w-full",
				children: /* @__PURE__ */ (void 0)(Link, {
					to: "/donate",
					onClick: () => setOpen(false),
					children: [/* @__PURE__ */ (void 0)(Heart, {}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 94,
						columnNumber: 15
					}, this), " Donate now"]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 93,
					columnNumber: 13
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 92,
				columnNumber: 11
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 79,
			columnNumber: 9
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 41,
		columnNumber: 5
	}, this);
}
var _jsxFileName$1 = "/app/applet/src/components/site-footer.tsx";
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", {
		className: "bg-primary-deep text-primary-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "font-display text-2xl font-semibold",
						children: "Olaide Doherty"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 18,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "eyebrow mt-1 text-gold",
						children: "Charity Foundation"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 19,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-5 font-display text-xl italic text-gold",
						children: [
							"\"",
							MOTTO,
							".\""
						]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 20,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-5 max-w-xs text-sm leading-relaxed text-primary-foreground/70",
						children: "Elevating lives, enriching people, inspiring dreams, revitalizing community, transforming youths and encouraging hope."
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 21,
						columnNumber: 11
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 17,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "eyebrow text-gold",
					children: "Explore"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 28,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
					className: "mt-4 space-y-3 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/about",
							className: "text-primary-foreground/80 hover:text-gold",
							children: "About us"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 31,
							columnNumber: 15
						}, this) }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 30,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/programs",
							className: "text-primary-foreground/80 hover:text-gold",
							children: "Our programs"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 36,
							columnNumber: 15
						}, this) }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 35,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/portfolio",
							className: "text-primary-foreground/80 hover:text-gold",
							children: "Portfolio"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 41,
							columnNumber: 15
						}, this) }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 40,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/donate",
							className: "text-primary-foreground/80 hover:text-gold",
							children: "Donate"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 46,
							columnNumber: 15
						}, this) }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 45,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/contact",
							className: "text-primary-foreground/80 hover:text-gold",
							children: "Contact"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 51,
							columnNumber: 15
						}, this) }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 50,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 29,
					columnNumber: 11
				}, this)] }, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 27,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "eyebrow text-gold",
					children: "Reach us"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 59,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
					className: "mt-4 space-y-3 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
							href: PHONE_TEL,
							className: "flex items-center gap-2 text-primary-foreground/80 hover:text-gold",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Phone, { className: "h-4 w-4" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 66,
									columnNumber: 17
								}, this),
								" ",
								PHONE_DISPLAY
							]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 62,
							columnNumber: 15
						}, this) }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 61,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
							href: INSTAGRAM_URL,
							target: "_blank",
							rel: "noreferrer",
							className: "flex items-center gap-2 text-primary-foreground/80 hover:text-gold",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Instagram, { className: "h-4 w-4" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 76,
									columnNumber: 17
								}, this),
								" ",
								INSTAGRAM_HANDLE
							]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 70,
							columnNumber: 15
						}, this) }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 69,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
							href: FACEBOOK_URL,
							target: "_blank",
							rel: "noreferrer",
							className: "flex items-center gap-2 text-primary-foreground/80 hover:text-gold",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Facebook, { className: "h-4 w-4" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 86,
									columnNumber: 17
								}, this),
								" ",
								FACEBOOK_NAME
							]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 80,
							columnNumber: 15
						}, this) }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 79,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 60,
					columnNumber: 11
				}, this)] }, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 58,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 16,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "border-t border-primary-foreground/10",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mx-auto max-w-6xl px-5 py-6 text-xs text-primary-foreground/50",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Olaide Doherty Charity Foundation. All rights reserved."
				]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 93,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 92,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 15,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "/app/applet/src/routes/__root.tsx";
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex min-h-[60vh] items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 22,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 23,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 24,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 28,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 27,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 21,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 20,
		columnNumber: 5
	}, this);
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 50,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 53,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 57,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 66,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 56,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 49,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 48,
		columnNumber: 5
	}, this);
}
var Route$6 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Olaide Doherty Charity Foundation" },
			{
				name: "description",
				content: "The Olaide Doherty Charity Foundation elevates lives, transforms youths and revitalizes communities."
			},
			{
				name: "author",
				content: "Olaide Doherty Charity Foundation"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.png",
				type: "image/png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Manrope:wght@400;500;600;700;800&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeadContent, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 114,
			columnNumber: 9
		}, this) }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 113,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 118,
			columnNumber: 9
		}, this)] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 116,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 112,
		columnNumber: 5
	}, this);
}
function RootComponent() {
	const { queryClient } = Route$6.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex min-h-screen flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SiteHeader, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 130,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 133,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 131,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SiteFooter, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 135,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 129,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 128,
		columnNumber: 5
	}, this);
}
var $$splitComponentImporter$5 = () => import("./routes-DXxyfwGD.mjs");
var Route$5 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Olaide Doherty Charity Foundation — Elevating lives" },
		{
			name: "description",
			content: "Elevating lives, enriching people, inspiring dreams and transforming youths. Support the OD Charity Foundation today."
		},
		{
			property: "og:title",
			content: "Olaide Doherty Charity Foundation"
		},
		{
			property: "og:description",
			content: "Elevating lives, enriching people and revitalizing communities. Donate to make a difference."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./about-Dy5sy5AV.mjs");
var Route$4 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About Us — Olaide Doherty Charity Foundation" },
		{
			name: "description",
			content: "Learn about the Olaide Doherty Charity Foundation and the values that guide our work."
		},
		{
			property: "og:title",
			content: "About the Olaide Doherty Charity Foundation"
		},
		{
			property: "og:description",
			content: "Elevating lives, enriching people and encouraging hope across our communities."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./contact-opSvDnuI.mjs");
var Route$3 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact — Olaide Doherty Charity Foundation" },
		{
			name: "description",
			content: "Get in touch with the Olaide Doherty Charity Foundation by phone, WhatsApp, Instagram or Facebook."
		},
		{
			property: "og:title",
			content: "Contact the OD Charity Foundation"
		},
		{
			property: "og:description",
			content: "Call, message or follow the Olaide Doherty Charity Foundation."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./donate-C3E9TwCj.mjs");
var Route$2 = createFileRoute("/donate")({
	head: () => ({ meta: [
		{ title: "Donate — Olaide Doherty Charity Foundation" },
		{
			name: "description",
			content: "Make a donation to the Olaide Doherty Charity Foundation and help elevate lives in our communities."
		},
		{
			property: "og:title",
			content: "Donate to the OD Charity Foundation"
		},
		{
			property: "og:description",
			content: "Your gift supports small businesses, young people and communities. Give today."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./programs-CvZ7N-dn.mjs");
var Route$1 = createFileRoute("/programs")({
	head: () => ({ meta: [
		{ title: "Our Programs — Olaide Doherty Charity Foundation" },
		{
			name: "description",
			content: "Essential food relief, youth transformation and community outreach from the OD Charity Foundation."
		},
		{
			property: "og:title",
			content: "Programs — OD Charity Foundation"
		},
		{
			property: "og:description",
			content: "See how the foundation supports families, young people and communities."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./portfolio.index-9RKIJ5fJ.mjs");
var Route = createFileRoute("/portfolio/")({
	head: () => ({ meta: [
		{ title: "Portfolio — Olaide Doherty Charity Foundation" },
		{
			name: "description",
			content: "Business grants, back-to-school empowerment, food outreach and more — see the projects the OD Charity Foundation has delivered."
		},
		{
			property: "og:title",
			content: "Our Portfolio — OD Charity Foundation"
		},
		{
			property: "og:description",
			content: "Real projects, real people: see where giving has met the needs."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$5.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$6
});
var AboutRoute = Route$4.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$6
});
var ContactRoute = Route$3.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$6
});
var DonateRoute = Route$2.update({
	id: "/donate",
	path: "/donate",
	getParentRoute: () => Route$6
});
var ProgramsRoute = Route$1.update({
	id: "/programs",
	path: "/programs",
	getParentRoute: () => Route$6
});
var PortfolioIndexRoute = Route.update({
	id: "/portfolio/",
	path: "/portfolio/",
	getParentRoute: () => Route$6
});
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	ContactRoute,
	DonateRoute,
	ProgramsRoute,
	PortfolioSlugRoute: Route$7.update({
		id: "/portfolio/$slug",
		path: "/portfolio/$slug",
		getParentRoute: () => Route$6
	}),
	PortfolioIndexRoute
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
