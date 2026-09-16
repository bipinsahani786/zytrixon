import { i as CustomCursor, n as FooterCTA, o as ThemeProvider, r as Footer, t as Navbar } from "./navbar-zs2JAPVG.js";
import { t as ContactSection } from "./contact-section-DMyBTSt0.js";
import { t as TopBar } from "./top-bar-CIlupwkt.js";
import { t as SeoHead } from "./SeoHead-IK9k69Ru.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/components/landing/grain-overlay.tsx
function GrainOverlay() {
	return null;
}
//#endregion
//#region resources/js/components/layouts/PublicLayout.tsx
/**
* PublicLayout: Centralized master shell for all marketing and content pages.
* Ensures consistent navigation, theme toggle, custom cursor, SEO, and footer across the site.
*/
function PublicLayout({ children, seo, hideFooterCTA = false, showContactSection = false, className = "" }) {
	return /* @__PURE__ */ jsxs(ThemeProvider, { children: [
		seo && /* @__PURE__ */ jsx(SeoHead, { seo }),
		/* @__PURE__ */ jsx(CustomCursor, {}),
		/* @__PURE__ */ jsx(GrainOverlay, {}),
		/* @__PURE__ */ jsx(TopBar, {}),
		/* @__PURE__ */ jsx(Navbar, {}),
		/* @__PURE__ */ jsx("main", {
			className: `min-h-screen bg-background text-foreground transition-colors duration-300 ${className}`,
			children
		}),
		!hideFooterCTA && /* @__PURE__ */ jsx(FooterCTA, {}),
		showContactSection && /* @__PURE__ */ jsx(ContactSection, {}),
		/* @__PURE__ */ jsx(Footer, {})
	] });
}
//#endregion
export { PublicLayout as t };

//# sourceMappingURL=PublicLayout-Cx-2KrXT.js.map