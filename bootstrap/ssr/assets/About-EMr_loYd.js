import { a as ThemeProvider, i as CustomCursor, n as Navbar, t as Footer } from "./footer-V39x-tr3.js";
import { t as SeoHead } from "./SeoHead-Bv-bTrU-.js";
import { t as TopBar } from "./top-bar-BFyXzAS2.js";
import { t as InnerPageHero } from "./inner-page-hero-B13-im4A.js";
import { t as LazySection } from "./lazy-section-Bm1gTwLP.js";
import { t as AboutSection } from "./about-section-C-zr2jCc.js";
import { n as CoreValuesSection, t as TestimonialsSection } from "./testimonials-section-DE1tGMki.js";
import { t as TeamSection } from "./team-section-Evq4WZmv.js";
import { t as GlobalFootprint } from "./global-footprint-BQq9oO60.js";
import { t as TechStackSection } from "./tech-stack-section-ByfPld2I.js";
import { t as FAQSection } from "./faq-section-BozvUDjq.js";
import { t as ContactSection } from "./contact-section-DgbQN8p3.js";
import { t as FooterCTA } from "./footer-cta-CxW1r1Xr.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/pages/About.tsx
function About() {
	return /* @__PURE__ */ jsxs(ThemeProvider, { children: [
		/* @__PURE__ */ jsx(SeoHead, { seo: {
			title: "About Us | Zytrixon Tech",
			description: "Learn about Zytrixon Tech, our mission, vision, and the team driving digital innovation from Patna to the world."
		} }),
		/* @__PURE__ */ jsx(CustomCursor, {}),
		/* @__PURE__ */ jsx(TopBar, {}),
		/* @__PURE__ */ jsx(Navbar, {}),
		/* @__PURE__ */ jsxs("main", { children: [
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
			/* @__PURE__ */ jsx(LazySection, { children: /* @__PURE__ */ jsx(FAQSection, {}) }),
			/* @__PURE__ */ jsx(LazySection, { children: /* @__PURE__ */ jsx(FooterCTA, {}) }),
			/* @__PURE__ */ jsx(LazySection, { children: /* @__PURE__ */ jsx(ContactSection, {}) })
		] }),
		/* @__PURE__ */ jsx(Footer, {})
	] });
}
//#endregion
export { About as default };

//# sourceMappingURL=About-EMr_loYd.js.map