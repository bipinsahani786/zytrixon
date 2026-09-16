import { n as CoreValuesSection, t as TestimonialsSection } from "./testimonials-section-LJG-huhP.js";
import { t as GlobalFootprint } from "./global-footprint-CCuR4Ix3.js";
import { t as InnerPageHero } from "./inner-page-hero-Dba8nTQT.js";
import { t as TeamSection } from "./team-section-CMM-_tkA.js";
import { t as PublicLayout } from "./PublicLayout-Cx-2KrXT.js";
import { Link } from "@inertiajs/react";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowUpRight } from "lucide-react";
//#region resources/js/pages/Team.tsx
function Team() {
	return /* @__PURE__ */ jsxs(PublicLayout, {
		seo: {
			title: "Our Team | Zytrixon Tech",
			description: "Meet the brilliant minds behind Zytrixon Tech – developers, designers, and strategists."
		},
		showContactSection: true,
		children: [
			/* @__PURE__ */ jsx(InnerPageHero, {
				title: "The Minds Behind The Magic",
				subtitle: "We are a collective of engineers, designers, and strategists united by a single mission: delivering digital dominance."
			}),
			/* @__PURE__ */ jsx("div", {
				className: "pt-12 sm:pt-16",
				children: /* @__PURE__ */ jsx(TeamSection, {})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "-mt-8",
				children: /* @__PURE__ */ jsx(CoreValuesSection, {})
			}),
			/* @__PURE__ */ jsx(GlobalFootprint, {}),
			/* @__PURE__ */ jsx("section", {
				className: "py-24 px-6 sm:px-10 text-center",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-3xl mx-auto bg-card border border-border rounded-3xl p-10 sm:p-14 shadow-lg",
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "inline-block font-heading text-xs font-bold uppercase tracking-widest text-primary mb-3 px-3 py-1 rounded-full bg-primary/10 border border-primary/20",
							children: "WE ARE HIRING"
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight",
							children: "Join Our Mission"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-base sm:text-lg text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed",
							children: "We are always looking for exceptional talent. If you are passionate about building world-class software, we want to hear from you."
						}),
						/* @__PURE__ */ jsxs(Link, {
							href: "/careers",
							className: "inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-heading font-bold text-sm uppercase tracking-wider shadow-[0_0_25px_var(--accent-cyan-glow)] hover:scale-105 active:scale-95 transition-all duration-200",
							children: [/* @__PURE__ */ jsx("span", { children: "View Open Positions" }), /* @__PURE__ */ jsx(ArrowUpRight, { className: "w-4 h-4" })]
						})
					]
				})
			}),
			/* @__PURE__ */ jsx(TestimonialsSection, {})
		]
	});
}
//#endregion
export { Team as default };

//# sourceMappingURL=Team-BQQ96TFQ.js.map