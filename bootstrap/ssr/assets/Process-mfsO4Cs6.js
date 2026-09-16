import { n as CoreValuesSection, t as TestimonialsSection } from "./testimonials-section-LJG-huhP.js";
import { t as InnerPageHero } from "./inner-page-hero-Dba8nTQT.js";
import { t as TechStackSection } from "./tech-stack-section-DC_1C1qd.js";
import { t as PublicLayout } from "./PublicLayout-Cx-2KrXT.js";
import { t as ClientsSection } from "./clients-section-BTrcfA93.js";
import { i as DevelopmentMethodology, n as QAAndTesting, r as ProcessTimeline, t as SecurityStandards } from "./SecurityStandards-D4BeNl0h.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/pages/Process.tsx
function Process() {
	return /* @__PURE__ */ jsxs(PublicLayout, {
		seo: {
			title: "Our Process - Engineering Excellence | Zytrixon Tech",
			description: "Discover how Zytrixon Tech delivers world-class enterprise software through our rigorous, agile development process from discovery to launch."
		},
		showContactSection: true,
		children: [
			/* @__PURE__ */ jsx(InnerPageHero, {
				title: "Engineering Excellence",
				subtitle: "How we turn complex requirements into robust, scalable digital solutions through a proven methodology."
			}),
			/* @__PURE__ */ jsx("div", {
				className: "pt-12 sm:pt-16",
				children: /* @__PURE__ */ jsx(DevelopmentMethodology, {})
			}),
			/* @__PURE__ */ jsx(ProcessTimeline, {}),
			/* @__PURE__ */ jsx(QAAndTesting, {}),
			/* @__PURE__ */ jsx(SecurityStandards, {}),
			/* @__PURE__ */ jsx(TechStackSection, {}),
			/* @__PURE__ */ jsx(CoreValuesSection, {}),
			/* @__PURE__ */ jsx(ClientsSection, {}),
			/* @__PURE__ */ jsx(TestimonialsSection, {})
		]
	});
}
//#endregion
export { Process as default };

//# sourceMappingURL=Process-mfsO4Cs6.js.map