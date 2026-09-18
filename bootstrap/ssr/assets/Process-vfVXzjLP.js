import { a as ThemeProvider, n as CustomCursor, r as Navbar, t as Footer } from "./footer-CezFkQSw.js";
import { t as ContactSection } from "./contact-section-DJmMSti7.js";
import { n as CoreValuesSection, t as TestimonialsSection } from "./testimonials-section-BqNAgB6C.js";
import { t as InnerPageHero } from "./inner-page-hero-B1F7LECr.js";
import { t as ClientsSection } from "./clients-section-CqHPMYmN.js";
import { t as TechStackSection } from "./tech-stack-section-DK0jeBxR.js";
import { t as FooterCTA } from "./footer-cta-CxW1r1Xr.js";
import { t as TopBar } from "./top-bar-C3HAjSYy.js";
import { t as SeoHead } from "./SeoHead-IK9k69Ru.js";
import { i as DevelopmentMethodology, n as QAAndTesting, r as ProcessTimeline, t as SecurityStandards } from "./SecurityStandards-DmM_nAtS.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/pages/Process.tsx
function Process() {
	return /* @__PURE__ */ jsxs(ThemeProvider, { children: [
		/* @__PURE__ */ jsx(SeoHead, { seo: {
			title: "Our Process - Engineering Excellence | Zytrixon Tech",
			description: "Discover how Zytrixon Tech delivers world-class enterprise software through our rigorous, agile development process from discovery to launch."
		} }),
		/* @__PURE__ */ jsx(CustomCursor, {}),
		/* @__PURE__ */ jsx(TopBar, {}),
		/* @__PURE__ */ jsx(Navbar, {}),
		/* @__PURE__ */ jsxs("main", {
			style: {
				minHeight: "100vh",
				background: "var(--zy-black)",
				overflowX: "hidden"
			},
			children: [
				/* @__PURE__ */ jsx(InnerPageHero, {
					title: "Engineering Excellence",
					subtitle: "How we turn complex requirements into robust, scalable digital solutions through a proven methodology."
				}),
				/* @__PURE__ */ jsx("div", {
					style: { paddingTop: "60px" },
					children: /* @__PURE__ */ jsx(DevelopmentMethodology, {})
				}),
				/* @__PURE__ */ jsx(ProcessTimeline, {}),
				/* @__PURE__ */ jsx(QAAndTesting, {}),
				/* @__PURE__ */ jsx(SecurityStandards, {}),
				/* @__PURE__ */ jsx(TechStackSection, {}),
				/* @__PURE__ */ jsx(CoreValuesSection, {}),
				/* @__PURE__ */ jsx(ClientsSection, {}),
				/* @__PURE__ */ jsx(TestimonialsSection, {}),
				/* @__PURE__ */ jsx(FooterCTA, {}),
				/* @__PURE__ */ jsx(ContactSection, {})
			]
		}),
		/* @__PURE__ */ jsx(Footer, {})
	] });
}
//#endregion
export { Process as default };

//# sourceMappingURL=Process-vfVXzjLP.js.map