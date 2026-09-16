import { t as InnerPageHero } from "./inner-page-hero-Dba8nTQT.js";
import { t as PublicLayout } from "./PublicLayout-Cx-2KrXT.js";
import { t as FilterTabs } from "./FilterTabs-BUfl8z54.js";
import { t as CaseStudyCard } from "./CaseStudyCard-BuCX--p1.js";
import { Head } from "@inertiajs/react";
import { useMemo, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { Search, X } from "lucide-react";
//#region resources/js/components/common/MetricGrid.tsx
/**
* MetricGrid: Reusable stat/metrics strip used across Case Studies, About, and Service stats.
*/
function MetricGrid({ metrics, columns = 4, className = "" }) {
	const colClasses = {
		2: "grid-cols-1 sm:grid-cols-2",
		3: "grid-cols-1 sm:grid-cols-3",
		4: "grid-cols-2 lg:grid-cols-4"
	}[columns];
	return /* @__PURE__ */ jsx("div", {
		className: `grid ${colClasses} gap-6 bg-card text-card-foreground border border-border rounded-2xl p-6 sm:p-8 shadow-sm backdrop-blur-md ${className}`,
		children: metrics.map((item, idx) => /* @__PURE__ */ jsxs("div", {
			className: "flex flex-col items-center text-center p-2",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground flex items-baseline",
					children: [/* @__PURE__ */ jsx("span", { children: item.value }), item.suffix && /* @__PURE__ */ jsx("span", {
						className: "text-primary ml-0.5",
						children: item.suffix
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "text-xs sm:text-sm font-heading font-semibold uppercase tracking-wider text-muted-foreground mt-2",
					children: item.label
				}),
				item.description && /* @__PURE__ */ jsx("p", {
					className: "text-xs text-muted-foreground mt-1 max-w-[200px]",
					children: item.description
				})
			]
		}, idx))
	});
}
//#endregion
//#region resources/js/pages/CaseStudiesIndex.tsx
var HIGHLIGHT_METRICS = [
	{
		value: "99.99%",
		suffix: "",
		label: "System Uptime Delivered"
	},
	{
		value: "10M+",
		suffix: "",
		label: "Active Users Scaled"
	},
	{
		value: "40%+",
		suffix: "",
		label: "Efficiency Boost"
	},
	{
		value: "100%",
		suffix: "",
		label: "On-Time Project Delivery"
	}
];
function CaseStudiesIndex({ caseStudies = [], seo }) {
	const [selectedIndustry, setSelectedIndustry] = useState("All");
	const [searchQuery, setSearchQuery] = useState("");
	const industries = useMemo(() => {
		const set = /* @__PURE__ */ new Set();
		caseStudies.forEach((cs) => {
			if (cs.industry) set.add(cs.industry);
		});
		return ["All", ...Array.from(set)];
	}, [caseStudies]);
	const filteredStudies = useMemo(() => {
		return caseStudies.filter((cs) => {
			const matchesIndustry = selectedIndustry === "All" || cs.industry === selectedIndustry;
			const query = searchQuery.toLowerCase().trim();
			const matchesSearch = !query || cs.title.toLowerCase().includes(query) || cs.client_name && cs.client_name.toLowerCase().includes(query) || cs.challenge && cs.challenge.toLowerCase().includes(query) || cs.service?.title && cs.service.title.toLowerCase().includes(query);
			return matchesIndustry && matchesSearch;
		});
	}, [
		caseStudies,
		selectedIndustry,
		searchQuery
	]);
	const pageSeo = {
		title: seo?.title || "Case Studies & Enterprise Results | Zytrixon Tech",
		description: seo?.description || "Explore proven case studies in web development, mobile apps, IoT, and AI automation delivered by Zytrixon Tech."
	};
	const schemaData = {
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		name: pageSeo.title,
		description: pageSeo.description,
		publisher: {
			"@type": "Organization",
			name: "Zytrixon Tech",
			url: "https://zytrixon.com"
		},
		hasPart: caseStudies.map((cs) => ({
			"@type": "Article",
			headline: cs.title,
			about: cs.industry,
			author: {
				"@type": "Organization",
				name: "Zytrixon Tech"
			},
			url: `https://zytrixon.com/case-studies/${cs.slug}`
		}))
	};
	return /* @__PURE__ */ jsxs(PublicLayout, {
		seo: pageSeo,
		showContactSection: true,
		children: [
			/* @__PURE__ */ jsx(Head, { children: /* @__PURE__ */ jsx("script", {
				type: "application/ld+json",
				children: JSON.stringify(schemaData)
			}) }),
			/* @__PURE__ */ jsx(InnerPageHero, {
				title: "Proven Impact & Case Studies",
				subtitle: "Real engineering solutions solving mission-critical business challenges. From Samastipur, Bihar to clients worldwide."
			}),
			/* @__PURE__ */ jsx("section", {
				className: "max-w-7xl mx-auto px-6 sm:px-10 -mt-8 sm:-mt-12 relative z-20 mb-12",
				children: /* @__PURE__ */ jsx(MetricGrid, {
					metrics: HIGHLIGHT_METRICS,
					columns: 4
				})
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "max-w-7xl mx-auto px-6 sm:px-10 mb-10 flex flex-col items-center gap-6",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "relative w-full max-w-md",
					children: [
						/* @__PURE__ */ jsx(Search, { className: "w-4 h-4 text-muted-foreground absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" }),
						/* @__PURE__ */ jsx("input", {
							type: "text",
							placeholder: "Search by keyword, client, or industry...",
							value: searchQuery,
							onChange: (e) => setSearchQuery(e.target.value),
							className: "w-full pl-11 pr-10 py-3 rounded-full bg-card border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200 shadow-xs"
						}),
						searchQuery && /* @__PURE__ */ jsx("button", {
							type: "button",
							onClick: () => setSearchQuery(""),
							"aria-label": "Clear search",
							className: "absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground cursor-pointer",
							children: /* @__PURE__ */ jsx(X, { className: "w-4 h-4" })
						})
					]
				}), /* @__PURE__ */ jsx(FilterTabs, {
					tabs: industries,
					activeTab: selectedIndustry,
					onTabChange: setSelectedIndustry
				})]
			}),
			/* @__PURE__ */ jsx("section", {
				className: "max-w-7xl mx-auto px-6 sm:px-10 pb-24",
				children: filteredStudies.length === 0 ? /* @__PURE__ */ jsxs("div", {
					className: "text-center py-20 px-6 bg-card/40 border border-border rounded-3xl max-w-lg mx-auto",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "text-lg font-heading font-semibold text-foreground mb-2",
							children: "No case studies found"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-sm text-muted-foreground mb-6",
							children: "Try searching for another keyword or select a different industry filter."
						}),
						/* @__PURE__ */ jsx("button", {
							type: "button",
							onClick: () => {
								setSearchQuery("");
								setSelectedIndustry("All");
							},
							className: "px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-heading text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity",
							children: "Reset Filters"
						})
					]
				}) : /* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
					children: filteredStudies.map((study) => /* @__PURE__ */ jsx(CaseStudyCard, { study }, study.id || study.slug))
				})
			})
		]
	});
}
//#endregion
export { CaseStudiesIndex as default };

//# sourceMappingURL=CaseStudiesIndex-d6aXEPZX.js.map