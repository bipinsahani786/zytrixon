import { a as ThemeProvider, n as Footer, r as Navbar, t as CustomCursor } from "./custom-cursor-CB5La4vd.js";
import { t as TopBar } from "./top-bar-C3HAjSYy.js";
import { t as InnerPageHero } from "./inner-page-hero-2RFAIQ_2.js";
import { t as ContactSection } from "./contact-section-7oRTio53.js";
import { t as FooterCTA } from "./footer-cta-CxW1r1Xr.js";
import { Head } from "@inertiajs/react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/pages/Blog.tsx
function Blog() {
	return /* @__PURE__ */ jsxs(ThemeProvider, { children: [
		/* @__PURE__ */ jsxs(Head, { children: [/* @__PURE__ */ jsx("title", { children: "Engineering Insights | Blog - Zytrixon Tech" }), /* @__PURE__ */ jsx("meta", {
			name: "description",
			content: "Read the latest insights, tutorials, and case studies from the engineering team at Zytrixon Tech."
		})] }),
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
					title: "Engineering Insights",
					subtitle: "Deep dives into AI, cloud architecture, modern design, and enterprise digital transformation."
				}),
				/* @__PURE__ */ jsx("section", {
					style: {
						padding: "60px 24px",
						maxWidth: 1200,
						margin: "0 auto"
					},
					children: /* @__PURE__ */ jsxs("div", {
						style: {
							display: "grid",
							gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
							gap: 40,
							background: "var(--zy-gray-card)",
							borderRadius: 24,
							overflow: "hidden",
							border: "1px solid rgba(255,255,255,0.05)"
						},
						children: [/* @__PURE__ */ jsxs("div", {
							style: {
								height: 400,
								background: "linear-gradient(135deg, #1a1a1a 0%, #000000 100%)",
								position: "relative"
							},
							children: [/* @__PURE__ */ jsx("div", { style: {
								position: "absolute",
								inset: 0,
								backgroundImage: "radial-gradient(circle at 20% 30%, rgba(0, 112, 243, 0.2) 0%, transparent 50%)"
							} }), /* @__PURE__ */ jsx("div", {
								style: {
									position: "absolute",
									bottom: 24,
									left: 24,
									background: "rgba(0,0,0,0.5)",
									padding: "8px 16px",
									borderRadius: 20,
									backdropFilter: "blur(10px)",
									color: "var(--zy-blue)",
									fontSize: 13,
									fontWeight: 700,
									textTransform: "uppercase",
									letterSpacing: "0.1em"
								},
								children: "Featured Article"
							})]
						}), /* @__PURE__ */ jsxs("div", {
							style: {
								padding: "40px 40px 40px 0",
								display: "flex",
								flexDirection: "column",
								justifyContent: "center"
							},
							children: [
								/* @__PURE__ */ jsx("div", {
									style: {
										color: "var(--zy-gray-text)",
										fontSize: 14,
										marginBottom: 16
									},
									children: "May 24, 2026 • 8 min read"
								}),
								/* @__PURE__ */ jsx("h2", {
									style: {
										fontSize: "clamp(28px, 4vw, 40px)",
										fontFamily: "var(--font-heading)",
										fontWeight: 800,
										color: "var(--zy-white)",
										marginBottom: 24,
										lineHeight: 1.2
									},
									children: "The Future of Enterprise Architecture: Serverless Meets Edge Computing"
								}),
								/* @__PURE__ */ jsx("p", {
									style: {
										fontSize: 16,
										color: "var(--zy-gray-light)",
										marginBottom: 32,
										lineHeight: 1.6
									},
									children: "Discover how modern enterprises are leveraging edge computing and serverless architectures to reduce latency, cut costs, and scale globally without breaking a sweat."
								}),
								/* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("a", {
									href: "#",
									"aria-label": "Read Full Article: The Future of Enterprise Architecture",
									style: {
										color: "var(--zy-white)",
										textDecoration: "none",
										fontWeight: 600,
										display: "inline-flex",
										alignItems: "center",
										gap: 8,
										borderBottom: "1px solid var(--zy-white)",
										paddingBottom: 4
									},
									children: ["Read Full Article", /* @__PURE__ */ jsx("svg", {
										width: "14",
										height: "14",
										viewBox: "0 0 24 24",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "2.5",
										children: /* @__PURE__ */ jsx("path", { d: "M5 12h14M12 5l7 7-7 7" })
									})]
								}) })
							]
						})]
					})
				}),
				/* @__PURE__ */ jsx("section", {
					style: {
						padding: "20px 24px 60px",
						maxWidth: 1200,
						margin: "0 auto"
					},
					children: /* @__PURE__ */ jsx("div", {
						style: {
							display: "flex",
							gap: 12,
							flexWrap: "wrap",
							justifyContent: "center"
						},
						children: [
							"All Articles",
							"Engineering",
							"AI & Automation",
							"Design UI/UX",
							"Business Strategy",
							"Case Studies"
						].map((cat, i) => /* @__PURE__ */ jsx("button", {
							style: {
								padding: "12px 24px",
								borderRadius: 30,
								background: i === 0 ? "var(--zy-white)" : "transparent",
								color: i === 0 ? "#000" : "var(--zy-gray-text)",
								border: i === 0 ? "none" : "1px solid var(--zy-gray-border)",
								fontSize: 14,
								fontWeight: 600,
								cursor: "pointer",
								transition: "all 0.3s"
							},
							children: cat
						}, cat))
					})
				}),
				/* @__PURE__ */ jsx("section", {
					style: {
						padding: "0 24px 100px",
						maxWidth: 1200,
						margin: "0 auto"
					},
					children: /* @__PURE__ */ jsx("div", {
						style: {
							display: "grid",
							gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
							gap: 32
						},
						children: [
							{
								title: "Mastering GSAP for Modern React Applications",
								category: "Engineering",
								date: "May 18, 2026"
							},
							{
								title: "How to Implement Zero-Trust Security in SaaS",
								category: "Cybersecurity",
								date: "May 12, 2026"
							},
							{
								title: "Designing for the Dark Mode: Best Practices",
								category: "Design UI/UX",
								date: "May 05, 2026"
							},
							{
								title: "Why Next.js 15 is a Game Changer for SEO",
								category: "Engineering",
								date: "Apr 28, 2026"
							},
							{
								title: "Automating Customer Support with Custom LLMs",
								category: "AI & Automation",
								date: "Apr 21, 2026"
							},
							{
								title: "Migrating from Monolith to Microservices",
								category: "Engineering",
								date: "Apr 15, 2026"
							}
						].map((post, index) => /* @__PURE__ */ jsxs("div", {
							style: {
								background: "var(--zy-gray-card)",
								borderRadius: 16,
								overflow: "hidden",
								border: "1px solid rgba(255,255,255,0.03)",
								transition: "transform 0.3s",
								cursor: "pointer"
							},
							onMouseEnter: (e) => e.currentTarget.style.transform = "translateY(-8px)",
							onMouseLeave: (e) => e.currentTarget.style.transform = "translateY(0)",
							children: [/* @__PURE__ */ jsx("div", { style: {
								height: 220,
								background: "#111"
							} }), /* @__PURE__ */ jsxs("div", {
								style: { padding: 32 },
								children: [
									/* @__PURE__ */ jsxs("div", {
										style: {
											display: "flex",
											justifyContent: "space-between",
											alignItems: "center",
											marginBottom: 16
										},
										children: [/* @__PURE__ */ jsx("span", {
											style: {
												color: "var(--zy-blue)",
												fontSize: 12,
												fontWeight: 700,
												textTransform: "uppercase",
												letterSpacing: "0.1em"
											},
											children: post.category
										}), /* @__PURE__ */ jsx("span", {
											style: {
												color: "var(--zy-gray-text)",
												fontSize: 13
											},
											children: post.date
										})]
									}),
									/* @__PURE__ */ jsx("h3", {
										style: {
											fontSize: 22,
											fontFamily: "var(--font-heading)",
											fontWeight: 700,
											color: "var(--zy-white)",
											marginBottom: 20,
											lineHeight: 1.4
										},
										children: post.title
									}),
									/* @__PURE__ */ jsx("a", {
										href: "#",
										"aria-label": `Read article: ${post.title}`,
										style: {
											color: "var(--zy-gray-light)",
											textDecoration: "none",
											fontSize: 14,
											fontWeight: 600,
											display: "inline-flex",
											alignItems: "center",
											gap: 8
										},
										children: "Read Article →"
									})
								]
							})]
						}, index))
					})
				}),
				/* @__PURE__ */ jsx("section", {
					style: {
						padding: "80px 24px",
						background: "var(--zy-gray-card)",
						textAlign: "center",
						borderTop: "1px solid var(--zy-gray-border)"
					},
					children: /* @__PURE__ */ jsxs("div", {
						style: {
							maxWidth: 600,
							margin: "0 auto"
						},
						children: [
							/* @__PURE__ */ jsx("h2", {
								style: {
									fontSize: 32,
									fontFamily: "var(--font-heading)",
									fontWeight: 800,
									color: "var(--zy-white)",
									marginBottom: 16
								},
								children: "Stay Ahead of the Curve"
							}),
							/* @__PURE__ */ jsx("p", {
								style: {
									color: "var(--zy-gray-text)",
									marginBottom: 32,
									fontSize: 16
								},
								children: "Get the latest engineering insights and tech news delivered straight to your inbox once a month. No spam, ever."
							}),
							/* @__PURE__ */ jsxs("form", {
								style: {
									display: "flex",
									gap: 12,
									maxWidth: 480,
									margin: "0 auto"
								},
								children: [/* @__PURE__ */ jsx("input", {
									type: "email",
									placeholder: "Enter your email address",
									style: {
										flex: 1,
										padding: "16px 24px",
										borderRadius: 30,
										border: "1px solid var(--zy-gray-border)",
										background: "#111",
										color: "var(--zy-white)",
										outline: "none"
									},
									required: true
								}), /* @__PURE__ */ jsx("button", {
									type: "submit",
									className: "magnetic-btn",
									style: {
										padding: "16px 32px",
										border: "none"
									},
									children: "Subscribe"
								})]
							})
						]
					})
				}),
				/* @__PURE__ */ jsx(FooterCTA, {}),
				/* @__PURE__ */ jsx(ContactSection, {})
			]
		}),
		/* @__PURE__ */ jsx(Footer, {})
	] });
}
//#endregion
export { Blog as default };

//# sourceMappingURL=Blog-L-rfHhKp.js.map