import { K as notFound, _ as createFileRoute, g as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as findProject } from "./portfolio-BG5JNamr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/portfolio._slug-Bymx4L72.js
var $$splitComponentImporter = () => import("./portfolio._slug-B9WCJvJp.mjs");
var $$splitNotFoundComponentImporter = () => import("./portfolio._slug-BkdjhXgt.mjs");
var Route = createFileRoute("/portfolio/$slug")({
	loader: ({ params }) => {
		const project = findProject(params.slug);
		if (!project) throw notFound();
		return { project };
	},
	head: ({ loaderData }) => {
		const p = loaderData?.project;
		if (!p) return { meta: [{ title: "Project not found — OD Charity Foundation" }, {
			name: "robots",
			content: "noindex"
		}] };
		return { meta: [
			{ title: `${p.title} — OD Charity Foundation Portfolio` },
			{
				name: "description",
				content: p.summary
			},
			{
				property: "og:title",
				content: `${p.title} — OD Charity Foundation`
			},
			{
				property: "og:description",
				content: p.summary
			},
			{
				property: "og:type",
				content: "article"
			}
		] };
	},
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
