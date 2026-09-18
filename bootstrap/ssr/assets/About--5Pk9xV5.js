import { a as ThemeProvider, n as CustomCursor, r as Navbar, t as Footer } from "./footer-CezFkQSw.js";
import { t as AboutSection } from "./about-section-Bh72tnsZ.js";
import { t as ContactSection } from "./contact-section-DJmMSti7.js";
import { n as CoreValuesSection, t as TestimonialsSection } from "./testimonials-section-BqNAgB6C.js";
import { t as FAQSection } from "./faq-section-CLhR0o1L.js";
import { t as GlobalFootprint } from "./global-footprint-DWz_t9KM.js";
import { t as InnerPageHero } from "./inner-page-hero-B1F7LECr.js";
import { t as LazySection } from "./lazy-section-Bm1gTwLP.js";
import { t as ClientsSection } from "./clients-section-CqHPMYmN.js";
import { t as TeamSection } from "./team-section-SAjgooed.js";
import { t as TechStackSection } from "./tech-stack-section-DK0jeBxR.js";
import { t as FooterCTA } from "./footer-cta-CxW1r1Xr.js";
import { t as TopBar } from "./top-bar-C3HAjSYy.js";
import { t as SeoHead } from "./SeoHead-IK9k69Ru.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/pages/About.tsx
function About() {
	return /* @__PURE__ */ jsxs(ThemeProvider, { children: [
		/* @__PURE__ */ jsx(SeoHead, { seo: {
			title: "About Us | Zytrixon Tech",
			description: "Learn about Zytrixon Tech, our mission, vision, and the team driving digital innovation from Samastipur to the world."
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
			/* @__PURE__ */ jsx(LazySection, { children: /* @__PURE__ */ jsx(ClientsSection, {}) }),
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

//# sourceMappingURL=About--5Pk9xV5.js.map