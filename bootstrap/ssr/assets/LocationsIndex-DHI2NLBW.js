import { a as ThemeProvider, i as CustomCursor, n as Navbar, t as Footer } from "./footer-V39x-tr3.js";
import { t as InnerPageHero } from "./inner-page-hero-B13-im4A.js";
import { t as ContactSection } from "./contact-section-DgbQN8p3.js";
import { t as FooterCTA } from "./footer-cta-CxW1r1Xr.js";
import { t as GradientCard } from "./GradientCard-CdTdG38q.js";
import { Head, Link } from "@inertiajs/react";
import "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/pages/LocationsIndex.tsx
function LocationsIndex({ locations }) {
	return /* @__PURE__ */ jsxs(ThemeProvider, { children: [
		/* @__PURE__ */ jsxs(Head, { children: [/* @__PURE__ */ jsx("title", { children: "Locations We Serve - Zytrixon Tech" }), /* @__PURE__ */ jsx("meta", {
			name: "description",
			content: "Discover the global cities where Zytrixon Tech provides enterprise software development, SEO, and digital marketing services."
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
					title: "Locations We Serve",
					subtitle: "We deliver enterprise-grade digital solutions to clients across the globe."
				}),
				/* @__PURE__ */ jsx("div", {
					style: {
						maxWidth: 1200,
						margin: "0 auto",
						padding: "60px 24px 100px"
					},
					children: /* @__PURE__ */ jsx("div", {
						style: {
							display: "grid",
							gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
							gap: 24
						},
						children: locations?.map((location) => /* @__PURE__ */ jsx(Link, {
							href: `/locations/${location.slug}`,
							style: {
								textDecoration: "none",
								display: "block"
							},
							className: "group",
							children: /* @__PURE__ */ jsx(GradientCard, {
								themeColor: "#3b82f6",
								style: { height: "100%" },
								children: /* @__PURE__ */ jsxs("div", {
									style: {
										padding: 32,
										height: "100%",
										display: "flex",
										flexDirection: "column",
										position: "relative",
										overflow: "hidden"
									},
									children: [
										/* @__PURE__ */ jsx("div", {
											style: {
												width: 48,
												height: 48,
												borderRadius: 12,
												background: "#3b82f620",
												color: "#3b82f6",
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												marginBottom: 24,
												border: "1px solid #3b82f640",
												transition: "transform 0.3s var(--zy-ease)"
											},
											className: "icon-container",
											children: /* @__PURE__ */ jsxs("svg", {
												width: "24",
												height: "24",
												viewBox: "0 0 24 24",
												fill: "none",
												stroke: "currentColor",
												strokeWidth: "2",
												strokeLinecap: "round",
												strokeLinejoin: "round",
												children: [/* @__PURE__ */ jsx("path", { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" }), /* @__PURE__ */ jsx("circle", {
													cx: "12",
													cy: "10",
													r: "3"
												})]
											})
										}),
										/* @__PURE__ */ jsx("h3", {
											style: {
												fontSize: 22,
												fontWeight: 700,
												color: "var(--zy-white)",
												marginBottom: 8,
												fontFamily: "var(--font-heading)"
											},
											children: location.name
										}),
										/* @__PURE__ */ jsxs("p", {
											style: {
												color: "var(--zy-gray-text)",
												fontSize: 15,
												marginBottom: 24
											},
											children: [location.state ? `${location.state}, ` : "", location.country || "India"]
										}),
										/* @__PURE__ */ jsx("div", {
											style: {
												display: "inline-flex",
												alignItems: "center",
												gap: 12,
												color: "#3b82f6",
												fontWeight: 600,
												fontSize: 14,
												marginTop: "auto"
											},
											children: "View Services →"
										})
									]
								})
							})
						}, location.id))
					})
				}),
				/* @__PURE__ */ jsx("style", { children: `
                    .group:hover .icon-container {
                        transform: scale(1.1) translateY(-5px);
                    }
                ` }),
				/* @__PURE__ */ jsx(FooterCTA, {}),
				/* @__PURE__ */ jsx(ContactSection, {})
			]
		}),
		/* @__PURE__ */ jsx(Footer, {})
	] });
}
//#endregion
export { LocationsIndex as default };

//# sourceMappingURL=LocationsIndex-DHI2NLBW.js.map