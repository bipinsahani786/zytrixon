import { n as CoreValuesSection, t as TestimonialsSection } from "./testimonials-section-LJG-huhP.js";
import { t as FAQSection } from "./faq-section-CLhR0o1L.js";
import { t as GlobalFootprint } from "./global-footprint-CCuR4Ix3.js";
import { t as InnerPageHero } from "./inner-page-hero-Dba8nTQT.js";
import { t as LazySection } from "./lazy-section-HJTRW0jT.js";
import { t as ContactSection } from "./contact-section-DMyBTSt0.js";
import { t as PublicLayout } from "./PublicLayout-Cx-2KrXT.js";
import { t as ClientsSection } from "./clients-section-BTrcfA93.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/pages/Contact.tsx
function Contact() {
	return /* @__PURE__ */ jsxs(PublicLayout, {
		seo: {
			title: "Contact Us | Zytrixon Tech",
			description: "Get in touch with Zytrixon Tech for Web Development, Mobile Apps, and Enterprise IT solutions."
		},
		children: [
			/* @__PURE__ */ jsx(InnerPageHero, {
				title: "Let's Talk",
				subtitle: "Have a project in mind? Reach out and let's build something amazing together."
			}),
			/* @__PURE__ */ jsx(LazySection, { children: /* @__PURE__ */ jsx(ContactSection, { hideHeader: true }) }),
			/* @__PURE__ */ jsx(LazySection, { children: /* @__PURE__ */ jsx(GlobalFootprint, {}) }),
			/* @__PURE__ */ jsx(LazySection, { children: /* @__PURE__ */ jsx(FAQSection, {}) }),
			/* @__PURE__ */ jsx(LazySection, { children: /* @__PURE__ */ jsx(TestimonialsSection, {}) }),
			/* @__PURE__ */ jsx(LazySection, { children: /* @__PURE__ */ jsx(ClientsSection, {}) }),
			/* @__PURE__ */ jsx(LazySection, { children: /* @__PURE__ */ jsx(CoreValuesSection, {}) })
		]
	});
}
//#endregion
export { Contact as default };

//# sourceMappingURL=Contact-B9rY_o0e.js.map