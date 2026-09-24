import { a as ThemeProvider, n as Footer, r as Navbar, t as CustomCursor } from "./custom-cursor-CB5La4vd.js";
import { t as TopBar } from "./top-bar-C3HAjSYy.js";
import { t as LazySection } from "./lazy-section-Bm1gTwLP.js";
import { t as SeoHead } from "./SeoHead-ypAe3bNq.js";
import { t as InnerPageHero } from "./inner-page-hero-2RFAIQ_2.js";
import { t as ContactSection } from "./contact-section-7oRTio53.js";
import { t as FooterCTA } from "./footer-cta-CxW1r1Xr.js";
import { n as CoreValuesSection, t as TestimonialsSection } from "./testimonials-section-BHpPaWe3.js";
import { t as GlobalFootprint } from "./global-footprint-DpwsHIsr.js";
import { t as ClientsSection } from "./clients-section-DaoPppG6.js";
import { t as PortfolioPreview } from "./portfolio-preview-Lj8e1BnJ.js";
import { t as TechStackSection } from "./tech-stack-section-CYPqBzGX.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/pages/Portfolio.tsx
function Portfolio() {
	return /* @__PURE__ */ jsxs(ThemeProvider, { children: [
		/* @__PURE__ */ jsx(SeoHead, { seo: {
			title: "Portfolio & Work | Zytrixon Tech",
			description: "Explore our latest web, mobile, and IoT projects delivered successfully across the globe."
		} }),
		/* @__PURE__ */ jsx(CustomCursor, {}),
		/* @__PURE__ */ jsx(TopBar, {}),
		/* @__PURE__ */ jsx(Navbar, {}),
		/* @__PURE__ */ jsxs("main", { children: [
			/* @__PURE__ */ jsx(InnerPageHero, {
				title: "Our Best Work",
				subtitle: "Discover how we transform ideas into digital dominance with cutting-edge technologies."
			}),
			/* @__PURE__ */ jsx(LazySection, { children: /* @__PURE__ */ jsx(PortfolioPreview, { hideHeader: true }) }),
			/* @__PURE__ */ jsx(LazySection, { children: /* @__PURE__ */ jsx(TechStackSection, {}) }),
			/* @__PURE__ */ jsx(LazySection, { children: /* @__PURE__ */ jsx(ClientsSection, {}) }),
			/* @__PURE__ */ jsx(LazySection, { children: /* @__PURE__ */ jsx(TestimonialsSection, {}) }),
			/* @__PURE__ */ jsx(LazySection, { children: /* @__PURE__ */ jsx(GlobalFootprint, {}) }),
			/* @__PURE__ */ jsx(LazySection, { children: /* @__PURE__ */ jsx(CoreValuesSection, {}) }),
			/* @__PURE__ */ jsx(LazySection, { children: /* @__PURE__ */ jsx(FooterCTA, {}) }),
			/* @__PURE__ */ jsx(LazySection, { children: /* @__PURE__ */ jsx(ContactSection, {}) })
		] }),
		/* @__PURE__ */ jsx(Footer, {})
	] });
}
//#endregion
export { Portfolio as default };

//# sourceMappingURL=Portfolio-BOA0DKx4.js.map