import { a as ThemeProvider, n as Footer, r as Navbar, t as CustomCursor } from "./custom-cursor-BiK9FZ3v.js";
import { t as TopBar } from "./top-bar-C3HAjSYy.js";
import { t as LazySection } from "./lazy-section-Bm1gTwLP.js";
import { t as SeoHead } from "./SeoHead-ypAe3bNq.js";
import { t as InnerPageHero } from "./inner-page-hero-qGeDa-Mj.js";
import { t as ContactSection } from "./contact-section-BoZccS2-.js";
import { t as FooterCTA } from "./footer-cta-CxW1r1Xr.js";
import { n as CoreValuesSection, t as TestimonialsSection } from "./testimonials-section-DgERdwxQ.js";
import { t as FAQSection } from "./faq-section-CLhR0o1L.js";
import { t as GlobalFootprint } from "./global-footprint-CDt_ASaD.js";
import { t as ClientsSection } from "./clients-section-BmDMRbVg.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/pages/Contact.tsx
function Contact() {
	return /* @__PURE__ */ jsxs(ThemeProvider, { children: [
		/* @__PURE__ */ jsx(SeoHead, { seo: {
			title: "Contact Us | Zytrixon Tech",
			description: "Get in touch with Zytrixon Tech for Web Development, Mobile Apps, and Enterprise IT solutions."
		} }),
		/* @__PURE__ */ jsx(CustomCursor, {}),
		/* @__PURE__ */ jsx(TopBar, {}),
		/* @__PURE__ */ jsx(Navbar, {}),
		/* @__PURE__ */ jsxs("main", { children: [
			/* @__PURE__ */ jsx(InnerPageHero, {
				title: "Let's Talk",
				subtitle: "Have a project in mind? Reach out and let's build something amazing together."
			}),
			/* @__PURE__ */ jsx(LazySection, { children: /* @__PURE__ */ jsx(ContactSection, {}) }),
			/* @__PURE__ */ jsx(LazySection, { children: /* @__PURE__ */ jsx(GlobalFootprint, {}) }),
			/* @__PURE__ */ jsx(LazySection, { children: /* @__PURE__ */ jsx(FAQSection, {}) }),
			/* @__PURE__ */ jsx(LazySection, { children: /* @__PURE__ */ jsx(TestimonialsSection, {}) }),
			/* @__PURE__ */ jsx(LazySection, { children: /* @__PURE__ */ jsx(ClientsSection, {}) }),
			/* @__PURE__ */ jsx(LazySection, { children: /* @__PURE__ */ jsx(CoreValuesSection, {}) }),
			/* @__PURE__ */ jsx(LazySection, { children: /* @__PURE__ */ jsx(FooterCTA, {}) })
		] }),
		/* @__PURE__ */ jsx(Footer, {})
	] });
}
//#endregion
export { Contact as default };

//# sourceMappingURL=Contact-hsYAwWQQ.js.map