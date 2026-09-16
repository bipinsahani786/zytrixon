import { n as CoreValuesSection, t as TestimonialsSection } from "./testimonials-section-LJG-huhP.js";
import { t as FAQSection } from "./faq-section-CLhR0o1L.js";
import { t as GlobalFootprint } from "./global-footprint-CCuR4Ix3.js";
import { t as InnerPageHero } from "./inner-page-hero-Dba8nTQT.js";
import { t as TeamSection } from "./team-section-CMM-_tkA.js";
import { t as PublicLayout } from "./PublicLayout-Cx-2KrXT.js";
import { t as SectionHeader } from "./SectionHeader-D8pjpt5Q.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowUpRight, Briefcase, Clock, MapPin } from "lucide-react";
//#region resources/js/pages/Careers.tsx
var JOBS = [
	{
		id: 1,
		title: "Senior React & TypeScript Engineer",
		department: "Engineering",
		location: "Samastipur, IN (Hybrid)",
		type: "Full-time"
	},
	{
		id: 2,
		title: "Backend Systems Lead (Laravel / PHP)",
		department: "Engineering",
		location: "Remote (India)",
		type: "Full-time"
	},
	{
		id: 3,
		title: "Senior UI/UX Product Designer",
		department: "Design",
		location: "Samastipur, IN (On-site)",
		type: "Full-time"
	},
	{
		id: 4,
		title: "AI & Automation Solutions Specialist",
		department: "Data & AI",
		location: "Remote",
		type: "Contract / Full-time"
	}
];
function Careers() {
	return /* @__PURE__ */ jsxs(PublicLayout, {
		seo: {
			title: "Careers & Opportunities | Zytrixon Tech",
			description: "Join our team at Zytrixon Tech and build the future of software development in Samastipur, Bihar."
		},
		showContactSection: true,
		children: [
			/* @__PURE__ */ jsx(InnerPageHero, {
				title: "Build the Future With Us",
				subtitle: "We are looking for passionate, driven individuals who want to solve complex problems and build scalable enterprise solutions."
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "max-w-7xl mx-auto px-6 sm:px-10 py-20",
				children: [/* @__PURE__ */ jsx(SectionHeader, {
					badge: "JOIN OUR TEAM",
					title: "Open Positions",
					subtitle: "Explore our current engineering, design, and AI openings and find where you fit in."
				}), /* @__PURE__ */ jsx("div", {
					className: "flex flex-col gap-5 max-w-4xl mx-auto",
					children: JOBS.map((job) => /* @__PURE__ */ jsxs("div", {
						className: "group flex flex-col sm:flex-row sm:items-center justify-between gap-6 p-6 sm:p-8 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
							className: "font-heading text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-200 mb-3",
							children: job.title
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex flex-wrap items-center gap-4 text-xs sm:text-sm text-muted-foreground",
							children: [
								/* @__PURE__ */ jsxs("span", {
									className: "inline-flex items-center gap-1.5",
									children: [/* @__PURE__ */ jsx(Briefcase, { className: "w-4 h-4 text-primary" }), job.department]
								}),
								/* @__PURE__ */ jsxs("span", {
									className: "inline-flex items-center gap-1.5",
									children: [/* @__PURE__ */ jsx(MapPin, { className: "w-4 h-4 text-primary" }), job.location]
								}),
								/* @__PURE__ */ jsxs("span", {
									className: "inline-flex items-center gap-1.5",
									children: [/* @__PURE__ */ jsx(Clock, { className: "w-4 h-4 text-primary" }), job.type]
								})
							]
						})] }), /* @__PURE__ */ jsxs("a", {
							href: `mailto:zytrixon@gmail.com?subject=Application for ${encodeURIComponent(job.title)}`,
							className: "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-heading font-bold text-xs sm:text-sm uppercase tracking-wider shadow-sm hover:shadow-[0_0_20px_var(--accent-cyan-glow)] hover:scale-105 active:scale-95 transition-all duration-200 shrink-0 self-start sm:self-center",
							children: [/* @__PURE__ */ jsx("span", { children: "Apply Now" }), /* @__PURE__ */ jsx(ArrowUpRight, { className: "w-4 h-4" })]
						})]
					}, job.id))
				})]
			}),
			/* @__PURE__ */ jsx(CoreValuesSection, {}),
			/* @__PURE__ */ jsx(GlobalFootprint, {}),
			/* @__PURE__ */ jsx(TeamSection, {}),
			/* @__PURE__ */ jsx(TestimonialsSection, {}),
			/* @__PURE__ */ jsx(FAQSection, {})
		]
	});
}
//#endregion
export { Careers as default };

//# sourceMappingURL=Careers-C0ocQuj7.js.map