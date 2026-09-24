import { a as ThemeProvider, n as Footer, r as Navbar, t as CustomCursor } from "./custom-cursor-BiK9FZ3v.js";
import { t as TopBar } from "./top-bar-C3HAjSYy.js";
import { t as SeoHead } from "./SeoHead-ypAe3bNq.js";
import { t as InnerPageHero } from "./inner-page-hero-qGeDa-Mj.js";
import { t as ContactSection } from "./contact-section-BoZccS2-.js";
import { t as FooterCTA } from "./footer-cta-CxW1r1Xr.js";
import { n as CoreValuesSection, t as TestimonialsSection } from "./testimonials-section-DgERdwxQ.js";
import { t as GlobalFootprint } from "./global-footprint-CDt_ASaD.js";
import { t as TeamSection } from "./team-section-D5y_S_MB.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/pages/Team.tsx
function Team() {
	return /* @__PURE__ */ jsxs(ThemeProvider, { children: [
		/* @__PURE__ */ jsx(SeoHead, { seo: {
			title: "Our Team | Zytrixon Tech",
			description: "Meet the brilliant minds behind Zytrixon Tech – developers, designers, and strategists."
		} }),
		/* @__PURE__ */ jsx(CustomCursor, {}),
		/* @__PURE__ */ jsx(TopBar, {}),
		/* @__PURE__ */ jsx(Navbar, {}),
		/* @__PURE__ */ jsxs("main", {
			style: {
				minHeight: "100vh",
				background: "var(--zy-black)",
				overflowX: "hidden"
			},
			children: [
				/* @__PURE__ */ jsx(InnerPageHero, {
					title: "The Minds Behind The Magic",
					subtitle: "We are a collective of engineers, designers, and strategists united by a single mission: delivering digital dominance."
				}),
				/* @__PURE__ */ jsx("div", {
					style: { paddingTop: "60px" },
					children: /* @__PURE__ */ jsx(TeamSection, {})
				}),
				/* @__PURE__ */ jsx("div", {
					style: { marginTop: "-40px" },
					children: /* @__PURE__ */ jsx(CoreValuesSection, {})
				}),
				/* @__PURE__ */ jsx(GlobalFootprint, {}),
				/* @__PURE__ */ jsx("section", {
					style: {
						padding: "100px 24px",
						background: "var(--zy-black)",
						textAlign: "center"
					},
					children: /* @__PURE__ */ jsxs("div", {
						style: {
							maxWidth: 800,
							margin: "0 auto",
							background: "var(--zy-gray-card)",
							borderRadius: 24,
							padding: "60px 40px",
							border: "1px solid rgba(255,255,255,0.05)"
						},
						children: [
							/* @__PURE__ */ jsx("h2", {
								style: {
									fontSize: "clamp(32px, 5vw, 48px)",
									fontFamily: "var(--font-heading)",
									fontWeight: 800,
									color: "var(--zy-white)",
									marginBottom: 24
								},
								children: "Join Our Mission"
							}),
							/* @__PURE__ */ jsx("p", {
								style: {
									fontSize: 18,
									color: "var(--zy-gray-text)",
									marginBottom: 40,
									lineHeight: 1.6
								},
								children: "We are always looking for exceptional talent. If you are passionate about building world-class software, we want to hear from you."
							}),
							/* @__PURE__ */ jsxs("a", {
								href: "mailto:zytrixon@gmail.com",
								className: "magnetic-btn",
								style: {
									padding: "18px 40px",
									fontSize: 16
								},
								children: ["View Open Positions", /* @__PURE__ */ jsx("svg", {
									className: "btn-arrow",
									width: "16",
									height: "16",
									viewBox: "0 0 24 24",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: "2.5",
									children: /* @__PURE__ */ jsx("path", { d: "M5 12h14M12 5l7 7-7 7" })
								})]
							})
						]
					})
				}),
				/* @__PURE__ */ jsx(TestimonialsSection, {}),
				/* @__PURE__ */ jsx(FooterCTA, {}),
				/* @__PURE__ */ jsx(ContactSection, {})
			]
		}),
		/* @__PURE__ */ jsx(Footer, {})
	] });
}
//#endregion
export { Team as default };

//# sourceMappingURL=Team-BfdzM3Zx.js.map