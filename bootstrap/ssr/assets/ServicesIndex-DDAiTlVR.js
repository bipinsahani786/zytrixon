import { i as ThemeProvider, n as CustomCursor, t as Navbar } from "./navbar-C4sR4eBL.js";
import ClientsSection from "./clients-section-DEVaCpOH.js";
import ContactSection from "./contact-section-BGP7rtke.js";
import CoreValuesSection from "./core-values-section-D3Bl0-UD.js";
import FooterCTA from "./footer-cta-DYRRvpzz.js";
import Footer from "./footer-Cf05z8zj.js";
import TechStackSection from "./tech-stack-section-CGQ9Cs_-.js";
import TestimonialsSection from "./testimonials-section-CV82NHtu.js";
import { t as InnerPageHero } from "./inner-page-hero-sG58bxri.js";
import { Head, Link } from "@inertiajs/react";
import "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/pages/ServicesIndex.tsx
function ServicesIndex({ services }) {
	return /* @__PURE__ */ jsxs(ThemeProvider, { children: [
		/* @__PURE__ */ jsxs(Head, { children: [/* @__PURE__ */ jsx("title", { children: "Our Services - Zytrixon Tech" }), /* @__PURE__ */ jsx("meta", {
			name: "description",
			content: "Explore our enterprise-grade services including Web Development, App Development, AI & Automation, and more."
		})] }),
		/* @__PURE__ */ jsx(CustomCursor, {}),
		/* @__PURE__ */ jsx(Navbar, {}),
		/* @__PURE__ */ jsxs("main", {
			style: {
				minHeight: "100vh",
				background: "var(--zy-black)",
				color: "var(--zy-white)"
			},
			children: [
				/* @__PURE__ */ jsx(InnerPageHero, {
					title: "What We Build",
					subtitle: "Enterprise-grade digital solutions designed to scale and dominate the market."
				}),
				/* @__PURE__ */ jsx("div", {
					style: {
						maxWidth: 1200,
						margin: "0 auto",
						padding: "60px 24px 100px",
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
						gap: 32
					},
					children: services.map((service) => /* @__PURE__ */ jsxs(Link, {
						href: `/services/${service.slug}`,
						style: {
							display: "block",
							background: "var(--zy-gray-card)",
							borderRadius: 12,
							padding: 40,
							textDecoration: "none",
							border: "1px solid rgba(255,255,255,0.05)",
							position: "relative",
							overflow: "hidden",
							transition: "all 0.3s var(--zy-ease)",
							cursor: "pointer"
						},
						onMouseEnter: (e) => {
							e.currentTarget.style.transform = "translateY(-10px)";
							e.currentTarget.style.background = "var(--zy-gray-dark)";
							e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.5)";
						},
						onMouseLeave: (e) => {
							e.currentTarget.style.transform = "translateY(0)";
							e.currentTarget.style.background = "var(--zy-gray-card)";
							e.currentTarget.style.boxShadow = "none";
						},
						children: [
							/* @__PURE__ */ jsx("h3", {
								style: {
									fontSize: 24,
									fontWeight: 700,
									color: "var(--zy-white)",
									marginBottom: 16,
									fontFamily: "var(--font-heading)"
								},
								children: service.title
							}),
							/* @__PURE__ */ jsx("p", {
								style: {
									color: "var(--zy-gray-text)",
									lineHeight: 1.6,
									marginBottom: 32,
									fontSize: 14
								},
								children: service.description
							}),
							/* @__PURE__ */ jsxs("div", {
								style: {
									display: "inline-flex",
									alignItems: "center",
									gap: 8,
									color: "var(--zy-blue)",
									fontWeight: 700,
									textTransform: "uppercase",
									letterSpacing: "0.05em",
									fontSize: 13
								},
								children: ["Explore Service", /* @__PURE__ */ jsxs("svg", {
									width: "20",
									height: "20",
									viewBox: "0 0 24 24",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: "2",
									strokeLinecap: "round",
									strokeLinejoin: "round",
									children: [/* @__PURE__ */ jsx("line", {
										x1: "5",
										y1: "12",
										x2: "19",
										y2: "12"
									}), /* @__PURE__ */ jsx("polyline", { points: "12 5 19 12 12 19" })]
								})]
							})
						]
					}, service.id))
				}),
				/* @__PURE__ */ jsx(TechStackSection, {}),
				/* @__PURE__ */ jsx(ClientsSection, {}),
				/* @__PURE__ */ jsx(CoreValuesSection, {}),
				/* @__PURE__ */ jsx(TestimonialsSection, {}),
				/* @__PURE__ */ jsx(FooterCTA, {}),
				/* @__PURE__ */ jsx(ContactSection, {})
			]
		}),
		/* @__PURE__ */ jsx(Footer, {})
	] });
}
//#endregion
export { ServicesIndex as default };

//# sourceMappingURL=ServicesIndex-DDAiTlVR.js.map