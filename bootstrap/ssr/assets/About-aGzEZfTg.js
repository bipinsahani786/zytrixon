import { t as AboutSection } from "./about-section-BRg7W7LQ.js";
import { n as CoreValuesSection, t as TestimonialsSection } from "./testimonials-section-LJG-huhP.js";
import { t as FAQSection } from "./faq-section-CLhR0o1L.js";
import { t as GlobalFootprint } from "./global-footprint-CCuR4Ix3.js";
import { t as InnerPageHero } from "./inner-page-hero-Dba8nTQT.js";
import { t as LazySection } from "./lazy-section-HJTRW0jT.js";
import { t as TeamSection } from "./team-section-CMM-_tkA.js";
import { t as TechStackSection } from "./tech-stack-section-DC_1C1qd.js";
import { t as PublicLayout } from "./PublicLayout-Cx-2KrXT.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/pages/About.tsx
function About() {
	return /* @__PURE__ */ jsxs(PublicLayout, {
		seo: {
			title: "About Us | Zytrixon Tech",
			description: "Learn about Zytrixon Tech, our mission, vision, and the team driving digital innovation from Samastipur to the world."
		},
		showContactSection: true,
		children: [
			/* @__PURE__ */ jsx(InnerPageHero, {
				title: "Our Story",
				subtitle: "We are a team of passionate engineers and designers building enterprise-grade solutions."
			}),
			/* @__PURE__ */ jsx(LazySection, { children: /* @__PURE__ */ jsx(AboutSection, {}) }),
			/* @__PURE__ */ jsx(LazySection, { children: /* @__PURE__ */ jsx(CoreValuesSection, {}) }),
			/* @__PURE__ */ jsx(LazySection, { children: /* @__PURE__ */ jsx(TeamSection, {}) }),
			/* @__PURE__ */ jsx(LazySection, { children: /* @__PURE__ */ jsx(GlobalFootprint, {}) }),
			/* @__PURE__ */ jsx(LazySection, { children: /* @__PURE__ */ jsx(TechStackSection, {}) }),
			/* @__PURE__ */ jsx(LazySection, { children: /* @__PURE__ */ jsx(TestimonialsSection, {}) }),
			/* @__PURE__ */ jsx(LazySection, { children: /* @__PURE__ */ jsx(FAQSection, {}) })
		]
	});
}
//#endregion
export { About as default };

//# sourceMappingURL=About-aGzEZfTg.js.map