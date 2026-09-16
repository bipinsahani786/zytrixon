import { n as CoreValuesSection, t as TestimonialsSection } from "./testimonials-section-LJG-huhP.js";
import { t as GlobalFootprint } from "./global-footprint-CCuR4Ix3.js";
import { t as InnerPageHero } from "./inner-page-hero-Dba8nTQT.js";
import { t as LazySection } from "./lazy-section-HJTRW0jT.js";
import { t as TechStackSection } from "./tech-stack-section-DC_1C1qd.js";
import { t as PublicLayout } from "./PublicLayout-Cx-2KrXT.js";
import { t as ClientsSection } from "./clients-section-BTrcfA93.js";
import { t as PortfolioPreview } from "./portfolio-preview-Ck_p4qOY.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/pages/Portfolio.tsx
function Portfolio() {
	return /* @__PURE__ */ jsxs(PublicLayout, {
		seo: {
			title: "Portfolio & Work | Zytrixon Tech",
			description: "Explore our latest web, mobile, and IoT projects delivered successfully across the globe."
		},
		showContactSection: true,
		children: [
			/* @__PURE__ */ jsx(InnerPageHero, {
				title: "Our Best Work",
				subtitle: "Discover how we transform ideas into digital dominance with cutting-edge technologies."
			}),
			/* @__PURE__ */ jsx(LazySection, { children: /* @__PURE__ */ jsx(PortfolioPreview, { hideHeader: true }) }),
			/* @__PURE__ */ jsx(LazySection, { children: /* @__PURE__ */ jsx(TechStackSection, {}) }),
			/* @__PURE__ */ jsx(LazySection, { children: /* @__PURE__ */ jsx(ClientsSection, {}) }),
			/* @__PURE__ */ jsx(LazySection, { children: /* @__PURE__ */ jsx(TestimonialsSection, {}) }),
			/* @__PURE__ */ jsx(LazySection, { children: /* @__PURE__ */ jsx(GlobalFootprint, {}) }),
			/* @__PURE__ */ jsx(LazySection, { children: /* @__PURE__ */ jsx(CoreValuesSection, {}) })
		]
	});
}
//#endregion
export { Portfolio as default };

//# sourceMappingURL=Portfolio-BuxAGBL_.js.map