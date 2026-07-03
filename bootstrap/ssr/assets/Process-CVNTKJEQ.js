import { i as ThemeProvider, n as CustomCursor, t as Navbar } from "./navbar-AKB7jtts.js";
import ClientsSection from "./clients-section-DNKqIbTD.js";
import ContactSection from "./contact-section-DD0mNLV6.js";
import CoreValuesSection from "./core-values-section-D3Bl0-UD.js";
import FooterCTA from "./footer-cta-DYRRvpzz.js";
import Footer from "./footer--t5m_Nat.js";
import TechStackSection from "./tech-stack-section-D189g7b0.js";
import TestimonialsSection from "./testimonials-section-CV82NHtu.js";
import { t as SeoHead } from "./SeoHead-Bv-bTrU-.js";
import { t as TopBar } from "./top-bar-BFyXzAS2.js";
import { t as InnerPageHero } from "./inner-page-hero-D6N22xfM.js";
import { i as DevelopmentMethodology, n as QAAndTesting, r as ProcessTimeline, t as SecurityStandards } from "./SecurityStandards-DBH0KBuL.js";
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

//# sourceMappingURL=Process-CVNTKJEQ.js.map