import { Link } from "@inertiajs/react";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowUpRight, TrendingUp } from "lucide-react";
//#region resources/js/components/common/CaseStudyCard.tsx
/**
* CaseStudyCard: Reusable project case study card with metrics, industry badges, and deep dive links.
*/
function CaseStudyCard({ study, className = "" }) {
	const parseResults = (results) => {
		if (!results) return [];
		if (Array.isArray(results)) return results;
		try {
			return JSON.parse(results);
		} catch {
			return [];
		}
	};
	const resultsList = parseResults(study.results);
	return /* @__PURE__ */ jsxs("article", {
		className: `group flex flex-col bg-card text-card-foreground border border-border rounded-2xl overflow-hidden hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl transition-all duration-300 ${className}`,
		children: [/* @__PURE__ */ jsxs("div", {
			className: "relative h-52 w-full overflow-hidden bg-muted/40 border-b border-border/50",
			children: [study.image ? /* @__PURE__ */ jsx("img", {
				src: study.image,
				alt: study.title,
				loading: "lazy",
				className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
			}) : /* @__PURE__ */ jsx("div", {
				className: "w-full h-full bg-gradient-to-br from-primary/10 via-card to-secondary flex items-center justify-center",
				children: /* @__PURE__ */ jsx("span", {
					className: "font-heading font-extrabold text-3xl text-foreground/15",
					children: "CASE STUDY"
				})
			}), study.industry && /* @__PURE__ */ jsx("span", {
				className: "absolute top-3.5 left-3.5 bg-background/90 backdrop-blur-md text-primary font-heading text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-border shadow-xs",
				children: study.industry
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "p-6 flex flex-col flex-1",
			children: [
				study.client_name && /* @__PURE__ */ jsxs("div", {
					className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2",
					children: [
						study.client_name,
						" ",
						study.service?.title ? `• ${study.service.title}` : ""
					]
				}),
				/* @__PURE__ */ jsx("h3", {
					className: "font-heading text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-200 leading-snug mb-3",
					children: /* @__PURE__ */ jsx(Link, {
						href: `/case-studies/${study.slug}`,
						children: study.title
					})
				}),
				study.challenge && /* @__PURE__ */ jsx("p", {
					className: "text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-4",
					children: study.challenge
				}),
				resultsList.length > 0 && /* @__PURE__ */ jsx("div", {
					className: "flex flex-wrap gap-1.5 mb-5 mt-auto",
					children: resultsList.slice(0, 2).map((res, i) => /* @__PURE__ */ jsxs("span", {
						className: "inline-flex items-center gap-1 text-[11px] font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-md border border-primary/20",
						children: [/* @__PURE__ */ jsx(TrendingUp, { className: "w-3 h-3" }), res]
					}, i))
				}),
				/* @__PURE__ */ jsx("div", {
					className: "pt-3 border-t border-border/50 flex items-center justify-between",
					children: /* @__PURE__ */ jsxs(Link, {
						href: `/case-studies/${study.slug}`,
						className: "inline-flex items-center gap-1.5 text-xs font-heading font-semibold text-foreground group-hover:text-primary transition-colors duration-150",
						children: [/* @__PURE__ */ jsx("span", { children: "Explore Case Study" }), /* @__PURE__ */ jsx(ArrowUpRight, { className: "w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
					})
				})
			]
		})]
	});
}
//#endregion
export { CaseStudyCard as t };

//# sourceMappingURL=CaseStudyCard-BuCX--p1.js.map