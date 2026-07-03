import { a as ThemeProvider, i as CustomCursor, n as Navbar, t as Footer } from "./footer-V39x-tr3.js";
import { t as SeoHead } from "./SeoHead-Bv-bTrU-.js";
import { t as TopBar } from "./top-bar-BFyXzAS2.js";
import { t as InnerPageHero } from "./inner-page-hero-B13-im4A.js";
import { n as CoreValuesSection, t as TestimonialsSection } from "./testimonials-section-DE1tGMki.js";
import { t as TechStackSection } from "./tech-stack-section-ByfPld2I.js";
import { t as ContactSection } from "./contact-section-DgbQN8p3.js";
import { t as FooterCTA } from "./footer-cta-CxW1r1Xr.js";
import { t as ClientsSection } from "./clients-section-IxrCSPyc.js";
import { i as DevelopmentMethodology, n as QAAndTesting, r as ProcessTimeline, t as SecurityStandards } from "./SecurityStandards-jXuPYirR.js";
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

//# sourceMappingURL=Process-DGc9NHD8.js.map