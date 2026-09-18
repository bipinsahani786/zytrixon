import { a as ThemeProvider, n as CustomCursor, r as Navbar, t as Footer } from "./footer-CezFkQSw.js";
import { t as ContactSection } from "./contact-section-DJmMSti7.js";
import { n as CoreValuesSection, t as TestimonialsSection } from "./testimonials-section-BqNAgB6C.js";
import { t as GlobalFootprint } from "./global-footprint-DWz_t9KM.js";
import { t as InnerPageHero } from "./inner-page-hero-B1F7LECr.js";
import { t as LazySection } from "./lazy-section-Bm1gTwLP.js";
import { t as ClientsSection } from "./clients-section-CqHPMYmN.js";
import { t as TechStackSection } from "./tech-stack-section-DK0jeBxR.js";
import { t as FooterCTA } from "./footer-cta-CxW1r1Xr.js";
import { t as TopBar } from "./top-bar-C3HAjSYy.js";
import { t as SeoHead } from "./SeoHead-IK9k69Ru.js";
import { t as PortfolioPreview } from "./portfolio-preview-CVMz-9vZ.js";
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

//# sourceMappingURL=Portfolio-DD1WHzdq.js.map