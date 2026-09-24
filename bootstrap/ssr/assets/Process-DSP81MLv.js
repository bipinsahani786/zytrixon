import { a as ThemeProvider, n as Footer, r as Navbar, t as CustomCursor } from "./custom-cursor-s6CGr8GY.js";
import { t as TopBar } from "./top-bar-C3HAjSYy.js";
import { t as SeoHead } from "./SeoHead-ypAe3bNq.js";
import { t as InnerPageHero } from "./inner-page-hero-ltrNwVtl.js";
import { t as ContactSection } from "./contact-section-WZtKMPeQ.js";
import { t as FooterCTA } from "./footer-cta-CxW1r1Xr.js";
import { n as CoreValuesSection, t as TestimonialsSection } from "./testimonials-section-BFKmW26I.js";
import { t as ClientsSection } from "./clients-section-BsyOTN2Z.js";
import { t as TechStackSection } from "./tech-stack-section-DI4Rk6Mo.js";
import { i as DevelopmentMethodology, n as QAAndTesting, r as ProcessTimeline, t as SecurityStandards } from "./SecurityStandards-Bg9JXg8M.js";
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

//# sourceMappingURL=Process-DSP81MLv.js.map