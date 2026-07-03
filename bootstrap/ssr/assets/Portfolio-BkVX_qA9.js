import { i as ThemeProvider, n as CustomCursor, t as Navbar } from "./navbar-C4sR4eBL.js";
import { t as SeoHead } from "./SeoHead-Bv-bTrU-.js";
import { t as TopBar } from "./top-bar-BFyXzAS2.js";
import { t as InnerPageHero } from "./inner-page-hero-sG58bxri.js";
import { Suspense, lazy, useEffect, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/pages/Portfolio.tsx
var LazyPortfolioPreview = lazy(() => import("./portfolio-preview-Daf5ft1S.js"));
var LazyClientsSection = lazy(() => import("./clients-section-DEVaCpOH.js"));
var LazyTestimonialsSection = lazy(() => import("./testimonials-section-CV82NHtu.js"));
var LazyTechStackSection = lazy(() => import("./tech-stack-section-CGQ9Cs_-.js"));
var LazyGlobalFootprint = lazy(() => import("./global-footprint-EgwkSCQR.js"));
var LazyContactSection = lazy(() => import("./contact-section-BGP7rtke.js"));
var LazyCoreValuesSection = lazy(() => import("./core-values-section-D3Bl0-UD.js"));
var LazyFooterCTA = lazy(() => import("./footer-cta-DYRRvpzz.js"));
var LazyFooter = lazy(() => import("./footer-Cf05z8zj.js"));
function Portfolio() {
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, []);
	return /* @__PURE__ */ jsxs(ThemeProvider, { children: [
		/* @__PURE__ */ jsx(SeoHead, { seo: {
			title: "Portfolio & Work | Zytrixon Tech",
			description: "Explore our latest web, mobile, and IoT projects delivered successfully across the globe."
		} }),
		/* @__PURE__ */ jsx(CustomCursor, {}),
		/* @__PURE__ */ jsx(TopBar, {}),
		/* @__PURE__ */ jsx(Navbar, {}),
		/* @__PURE__ */ jsxs("main", { children: [/* @__PURE__ */ jsx(InnerPageHero, {
			title: "Our Best Work",
			subtitle: "Discover how we transform ideas into digital dominance with cutting-edge technologies."
		}), mounted ? /* @__PURE__ */ jsxs(Suspense, {
			fallback: /* @__PURE__ */ jsx("div", { style: { minHeight: "50vh" } }),
			children: [
				/* @__PURE__ */ jsx(LazyPortfolioPreview, { hideHeader: true }),
				/* @__PURE__ */ jsx(LazyTechStackSection, {}),
				/* @__PURE__ */ jsx(LazyClientsSection, {}),
				/* @__PURE__ */ jsx(LazyTestimonialsSection, {}),
				/* @__PURE__ */ jsx(LazyGlobalFootprint, {}),
				/* @__PURE__ */ jsx(LazyCoreValuesSection, {}),
				/* @__PURE__ */ jsx(LazyFooterCTA, {}),
				/* @__PURE__ */ jsx(LazyContactSection, {})
			]
		}) : /* @__PURE__ */ jsx("div", { style: { minHeight: "50vh" } })] }),
		mounted && /* @__PURE__ */ jsx(Suspense, {
			fallback: null,
			children: /* @__PURE__ */ jsx(LazyFooter, {})
		})
	] });
}
//#endregion
export { Portfolio as default };

//# sourceMappingURL=Portfolio-BkVX_qA9.js.map