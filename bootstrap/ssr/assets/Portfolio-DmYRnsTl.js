import { i as ThemeProvider, n as Footer, r as Navbar, t as CustomCursor } from "./custom-cursor-B2HeUCYC.js";
import { t as TopBar } from "./top-bar-C3HAjSYy.js";
import { t as LazySection } from "./lazy-section-Bm1gTwLP.js";
import { t as SeoHead } from "./SeoHead-Fv09oBYU.js";
import { t as InnerPageHero } from "./inner-page-hero-DKrAKqeo.js";
import { t as MajorProductsSection } from "./MajorProductsSection-CYM7fN7R.js";
import { t as ContactSection } from "./contact-section-BAW46C7Q.js";
import { t as FooterCTA } from "./footer-cta-CxW1r1Xr.js";
import { n as CoreValuesSection, t as TestimonialsSection } from "./testimonials-section-WAPr8y3A.js";
import { t as GlobalFootprint } from "./global-footprint-DIGX3Cli.js";
import { t as ClientsSection } from "./clients-section-CVbSeWg5.js";
import { t as PortfolioPreview } from "./portfolio-preview-eTDYkwfm.js";
import { t as TechStackSection } from "./tech-stack-section-BW7dWug6.js";
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
			/* @__PURE__ */ jsx(LazySection, { children: /* @__PURE__ */ jsx(MajorProductsSection, {}) }),
			/* @__PURE__ */ jsx(LazySection, { children: /* @__PURE__ */ jsx(PortfolioPreview, {
				hideHeader: false,
				title: "Our Works",
				subtitle: "Explore our comprehensive engineering case studies and live client production platforms.",
				label: "Selected Projects"
			}) }),
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

//# sourceMappingURL=Portfolio-DmYRnsTl.js.map