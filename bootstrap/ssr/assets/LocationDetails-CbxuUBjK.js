import { a as ThemeProvider, n as CustomCursor, r as Navbar, t as Footer } from "./footer-CezFkQSw.js";
import { t as ContactSection } from "./contact-section-DJmMSti7.js";
import { t as InnerPageHero } from "./inner-page-hero-B1F7LECr.js";
import { t as FooterCTA } from "./footer-cta-CxW1r1Xr.js";
import { t as GradientCard } from "./GradientCard-DK2CyX8m.js";
import { Head, Link } from "@inertiajs/react";
import "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/pages/LocationDetails.tsx
var getServiceMeta = (slug) => {
	switch (slug) {
		case "web-development": return {
			color: "#3b82f6",
			icon: /* @__PURE__ */ jsxs("svg", {
				width: "32",
				height: "32",
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "1.5",
				children: [
					/* @__PURE__ */ jsx("rect", {
						x: "2",
						y: "3",
						width: "20",
						height: "14",
						rx: "2"
					}),
					/* @__PURE__ */ jsx("line", {
						x1: "2",
						y1: "7",
						x2: "22",
						y2: "7"
					}),
					/* @__PURE__ */ jsx("circle", {
						cx: "5",
						cy: "5",
						r: "0.5",
						fill: "currentColor"
					}),
					/* @__PURE__ */ jsx("circle", {
						cx: "7.5",
						cy: "5",
						r: "0.5",
						fill: "currentColor"
					}),
					/* @__PURE__ */ jsx("circle", {
						cx: "10",
						cy: "5",
						r: "0.5",
						fill: "currentColor"
					}),
					/* @__PURE__ */ jsx("line", {
						x1: "8",
						y1: "21",
						x2: "16",
						y2: "21"
					}),
					/* @__PURE__ */ jsx("line", {
						x1: "12",
						y1: "17",
						x2: "12",
						y2: "21"
					})
				]
			})
		};
		case "app-development": return {
			color: "#ec4899",
			icon: /* @__PURE__ */ jsxs("svg", {
				width: "32",
				height: "32",
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "1.5",
				children: [/* @__PURE__ */ jsx("rect", {
					x: "5",
					y: "2",
					width: "14",
					height: "20",
					rx: "2"
				}), /* @__PURE__ */ jsx("line", {
					x1: "12",
					y1: "18",
					x2: "12",
					y2: "18.01",
					strokeWidth: "2",
					strokeLinecap: "round"
				})]
			})
		};
		case "iot-solutions": return {
			color: "#10b981",
			icon: /* @__PURE__ */ jsxs("svg", {
				width: "32",
				height: "32",
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "1.5",
				children: [
					/* @__PURE__ */ jsx("circle", {
						cx: "12",
						cy: "12",
						r: "3"
					}),
					/* @__PURE__ */ jsx("path", { d: "M4.93 4.93a10 10 0 0114.14 0" }),
					/* @__PURE__ */ jsx("path", { d: "M7.76 7.76a6 6 0 018.48 0" }),
					/* @__PURE__ */ jsx("path", { d: "M4.93 19.07a10 10 0 010-14.14" }),
					/* @__PURE__ */ jsx("path", { d: "M19.07 4.93a10 10 0 010 14.14" })
				]
			})
		};
		case "ai-automation": return {
			color: "#a855f7",
			icon: /* @__PURE__ */ jsxs("svg", {
				width: "32",
				height: "32",
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "1.5",
				children: [/* @__PURE__ */ jsx("path", { d: "M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" }), /* @__PURE__ */ jsx("path", { d: "M19 12a7 7 0 0 0-14 0" })]
			})
		};
		case "custom-software": return {
			color: "#f59e0b",
			icon: /* @__PURE__ */ jsxs("svg", {
				width: "32",
				height: "32",
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "1.5",
				children: [
					/* @__PURE__ */ jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
					/* @__PURE__ */ jsx("polyline", { points: "14 2 14 8 20 8" }),
					/* @__PURE__ */ jsx("line", {
						x1: "16",
						y1: "13",
						x2: "8",
						y2: "13"
					}),
					/* @__PURE__ */ jsx("line", {
						x1: "16",
						y1: "17",
						x2: "8",
						y2: "17"
					}),
					/* @__PURE__ */ jsx("polyline", { points: "10 9 9 9 8 9" })
				]
			})
		};
		case "seo-digital-marketing": return {
			color: "#6366f1",
			icon: /* @__PURE__ */ jsxs("svg", {
				width: "32",
				height: "32",
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "1.5",
				children: [
					/* @__PURE__ */ jsx("path", { d: "M18 20V10" }),
					/* @__PURE__ */ jsx("path", { d: "M12 20V4" }),
					/* @__PURE__ */ jsx("path", { d: "M6 20v-6" })
				]
			})
		};
		default: return {
			color: "#3b82f6",
			icon: /* @__PURE__ */ jsxs("svg", {
				width: "32",
				height: "32",
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "1.5",
				children: [
					/* @__PURE__ */ jsx("circle", {
						cx: "12",
						cy: "12",
						r: "10"
					}),
					/* @__PURE__ */ jsx("line", {
						x1: "12",
						y1: "16",
						x2: "12",
						y2: "12"
					}),
					/* @__PURE__ */ jsx("line", {
						x1: "12",
						y1: "8",
						x2: "12.01",
						y2: "8"
					})
				]
			})
		};
	}
};
function LocationDetails({ location, services }) {
	return /* @__PURE__ */ jsxs(ThemeProvider, { children: [
		/* @__PURE__ */ jsx(Head, {
			title: `IT Services in ${location?.name || "Your City"} - Zytrixon Tech`,
			children: /* @__PURE__ */ jsx("meta", {
				name: "description",
				content: `Explore enterprise-grade Web Development, Mobile Apps, AI, and SEO services offered by Zytrixon Tech in ${location?.name || "your city"}.`
			})
		}),
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
					title: `IT Services in ${location.name}`,
					subtitle: `We deliver enterprise-grade digital solutions to businesses in ${location.name}${location.state ? ", " + location.state : ""}.`
				}),
				/* @__PURE__ */ jsx("div", {
					style: {
						maxWidth: 1200,
						margin: "0 auto",
						padding: "60px 24px 100px",
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
						gap: 32
					},
					className: "bento-container",
					children: services.map((service, index) => {
						const meta = getServiceMeta(service.slug);
						return /* @__PURE__ */ jsx(Link, {
							href: `/services/${service.slug}/in/${location.slug}`,
							style: {
								textDecoration: "none",
								display: "block"
							},
							className: "group bento-item",
							children: /* @__PURE__ */ jsx(GradientCard, {
								themeColor: meta.color,
								style: { height: "100%" },
								children: /* @__PURE__ */ jsxs("div", {
									style: {
										padding: 48,
										height: "100%",
										display: "flex",
										flexDirection: "column",
										alignItems: "flex-start",
										gap: 0,
										position: "relative",
										overflow: "hidden"
									},
									className: "bento-inner",
									children: [/* @__PURE__ */ jsx("div", {
										style: {
											position: "absolute",
											top: -20,
											right: -20,
											transform: "scale(5)",
											color: meta.color,
											opacity: .03,
											pointerEvents: "none"
										},
										className: "bento-watermark",
										children: meta.icon
									}), /* @__PURE__ */ jsxs("div", {
										style: {
											flex: 1,
											position: "relative",
											zIndex: 1,
											display: "flex",
											flexDirection: "column",
											height: "100%"
										},
										children: [
											/* @__PURE__ */ jsx("div", {
												style: {
													width: 60,
													height: 60,
													borderRadius: 16,
													background: `${meta.color}20`,
													color: meta.color,
													display: "flex",
													alignItems: "center",
													justifyContent: "center",
													marginBottom: 32,
													border: `1px solid ${meta.color}40`,
													transition: "all 0.3s var(--zy-ease)",
													position: "relative",
													zIndex: 1
												},
												className: "icon-container",
												children: meta.icon
											}),
											/* @__PURE__ */ jsxs("h3", {
												style: {
													fontSize: 26,
													fontWeight: 700,
													color: "var(--zy-white)",
													marginBottom: 16,
													fontFamily: "var(--font-heading)",
													position: "relative",
													zIndex: 1
												},
												children: [
													service.title,
													" in",
													" ",
													location.name
												]
											}),
											/* @__PURE__ */ jsx("p", {
												style: {
													color: "var(--zy-gray-text)",
													lineHeight: 1.6,
													marginBottom: 40,
													fontSize: 15,
													flex: 1,
													position: "relative",
													zIndex: 1
												},
												children: service.description
											}),
											/* @__PURE__ */ jsxs("div", {
												style: {
													display: "inline-flex",
													alignItems: "center",
													gap: 12,
													color: meta.color,
													fontWeight: 700,
													textTransform: "uppercase",
													letterSpacing: "0.05em",
													fontSize: 13,
													position: "relative",
													zIndex: 1,
													marginTop: "auto"
												},
												children: ["Explore Service", /* @__PURE__ */ jsx("div", {
													style: {
														width: 32,
														height: 32,
														borderRadius: "50%",
														background: `${meta.color}20`,
														display: "flex",
														alignItems: "center",
														justifyContent: "center",
														transition: "transform 0.3s var(--zy-ease)"
													},
													className: "arrow-container",
													children: /* @__PURE__ */ jsxs("svg", {
														width: "16",
														height: "16",
														viewBox: "0 0 24 24",
														fill: "none",
														stroke: "currentColor",
														strokeWidth: "2.5",
														strokeLinecap: "round",
														strokeLinejoin: "round",
														children: [/* @__PURE__ */ jsx("line", {
															x1: "5",
															y1: "12",
															x2: "19",
															y2: "12"
														}), /* @__PURE__ */ jsx("polyline", { points: "12 5 19 12 12 19" })]
													})
												})]
											})
										]
									})]
								})
							})
						}, service.id);
					})
				}),
				/* @__PURE__ */ jsx("style", { children: `
                    .group:hover .icon-container {
                        transform: scale(1.05) translateY(-5px);
                        box-shadow: 0 10px 30px rgba(0,0,0,0.4);
                    }
                    .group:hover .arrow-container {
                        transform: translateX(10px);
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
export { LocationDetails as default };

//# sourceMappingURL=LocationDetails-CbxuUBjK.js.map