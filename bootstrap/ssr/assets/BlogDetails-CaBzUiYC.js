import { i as ThemeProvider, n as CustomCursor, t as Navbar } from "./navbar-AKB7jtts.js";
import FooterCTA from "./footer-cta-DYRRvpzz.js";
import Footer from "./footer--t5m_Nat.js";
import { t as TopBar } from "./top-bar-BFyXzAS2.js";
import { Head, Link } from "@inertiajs/react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/pages/BlogDetails.tsx
function BlogDetails() {
	return /* @__PURE__ */ jsxs(ThemeProvider, { children: [
		/* @__PURE__ */ jsxs(Head, { children: [/* @__PURE__ */ jsx("title", { children: "The Future of Enterprise Architecture - Zytrixon Blog" }), /* @__PURE__ */ jsx("meta", {
			name: "description",
			content: "Discover how modern enterprises are leveraging edge computing and serverless architectures to reduce latency and cut costs."
		})] }),
		/* @__PURE__ */ jsx(CustomCursor, {}),
		/* @__PURE__ */ jsx(TopBar, {}),
		/* @__PURE__ */ jsx(Navbar, {}),
		/* @__PURE__ */ jsxs("main", {
			style: {
				minHeight: "100vh",
				background: "var(--zy-black)",
				overflowX: "hidden",
				paddingTop: 120
			},
			children: [
				/* @__PURE__ */ jsxs("header", {
					style: {
						padding: "40px 24px",
						maxWidth: 1e3,
						margin: "0 auto",
						textAlign: "center"
					},
					children: [
						/* @__PURE__ */ jsx("div", {
							style: {
								display: "inline-block",
								padding: "6px 16px",
								background: "rgba(0, 112, 243, 0.1)",
								color: "var(--zy-blue)",
								borderRadius: 20,
								fontSize: 13,
								fontWeight: 700,
								textTransform: "uppercase",
								letterSpacing: "0.1em",
								marginBottom: 24
							},
							children: "Engineering"
						}),
						/* @__PURE__ */ jsx("h1", {
							style: {
								fontSize: "clamp(36px, 6vw, 64px)",
								fontFamily: "var(--font-heading)",
								fontWeight: 800,
								color: "var(--zy-white)",
								lineHeight: 1.2,
								marginBottom: 32
							},
							children: "The Future of Enterprise Architecture: Serverless Meets Edge Computing"
						}),
						/* @__PURE__ */ jsxs("div", {
							style: {
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								gap: 16,
								color: "var(--zy-gray-text)",
								fontSize: 15
							},
							children: [
								/* @__PURE__ */ jsxs("div", {
									style: {
										display: "flex",
										alignItems: "center",
										gap: 12
									},
									children: [/* @__PURE__ */ jsx("div", { style: {
										width: 40,
										height: 40,
										borderRadius: "50%",
										background: "linear-gradient(135deg, var(--zy-blue), #66aaff)"
									} }), /* @__PURE__ */ jsxs("div", {
										style: { textAlign: "left" },
										children: [/* @__PURE__ */ jsx("div", {
											style: {
												color: "var(--zy-white)",
												fontWeight: 600
											},
											children: "Rahul Singh"
										}), /* @__PURE__ */ jsx("div", {
											style: { fontSize: 13 },
											children: "Lead Architect"
										})]
									})]
								}),
								/* @__PURE__ */ jsx("div", { style: {
									width: 1,
									height: 24,
									background: "var(--zy-gray-border)"
								} }),
								/* @__PURE__ */ jsx("div", { children: "May 24, 2026" }),
								/* @__PURE__ */ jsx("div", { style: {
									width: 1,
									height: 24,
									background: "var(--zy-gray-border)"
								} }),
								/* @__PURE__ */ jsx("div", { children: "8 min read" })
							]
						})
					]
				}),
				/* @__PURE__ */ jsx("div", {
					style: {
						maxWidth: 1200,
						margin: "40px auto",
						padding: "0 24px"
					},
					children: /* @__PURE__ */ jsx("div", {
						style: {
							height: "50vh",
							minHeight: 400,
							borderRadius: 24,
							background: "linear-gradient(135deg, #111, #222)",
							border: "1px solid var(--zy-gray-border)",
							position: "relative",
							overflow: "hidden"
						},
						children: /* @__PURE__ */ jsx("div", { style: {
							position: "absolute",
							inset: 0,
							backgroundImage: "radial-gradient(circle at 50% 50%, rgba(0, 112, 243, 0.15) 0%, transparent 70%)"
						} })
					})
				}),
				/* @__PURE__ */ jsxs("article", {
					style: {
						maxWidth: 800,
						margin: "0 auto",
						padding: "40px 24px",
						color: "var(--zy-gray-light)",
						fontSize: 18,
						lineHeight: 1.8
					},
					children: [
						/* @__PURE__ */ jsx("p", {
							style: {
								fontSize: 22,
								color: "var(--zy-white)",
								lineHeight: 1.6,
								marginBottom: 40
							},
							children: "In the fast-paced world of digital transformation, enterprises are constantly seeking architectures that offer scale, speed, and cost-efficiency. Today, two paradigms are leading the charge: Serverless and Edge Computing."
						}),
						/* @__PURE__ */ jsx("h2", {
							style: {
								fontSize: 32,
								fontFamily: "var(--font-heading)",
								color: "var(--zy-white)",
								fontWeight: 700,
								marginTop: 48,
								marginBottom: 24
							},
							children: "The Shift Away from Monoliths"
						}),
						/* @__PURE__ */ jsx("p", {
							style: { marginBottom: 24 },
							children: "For decades, monolithic architectures were the standard. While they are easy to develop initially, they become incredibly difficult to maintain and scale. Moving to microservices solved the scaling issue but introduced immense infrastructure complexity."
						}),
						/* @__PURE__ */ jsx("p", {
							style: { marginBottom: 24 },
							children: "This is where serverless comes in. By abstracting away the server management, developers can focus purely on business logic. However, traditional serverless architectures still suffer from regional latency constraints."
						}),
						/* @__PURE__ */ jsx("blockquote", {
							style: {
								borderLeft: "4px solid var(--zy-blue)",
								paddingLeft: 24,
								margin: "40px 0",
								fontStyle: "italic",
								fontSize: 24,
								color: "var(--zy-white)"
							},
							children: "\"Bringing compute closer to the user is no longer a luxury; it's a fundamental requirement for modern enterprise applications.\""
						}),
						/* @__PURE__ */ jsx("h2", {
							style: {
								fontSize: 32,
								fontFamily: "var(--font-heading)",
								color: "var(--zy-white)",
								fontWeight: 700,
								marginTop: 48,
								marginBottom: 24
							},
							children: "Enter Edge Computing"
						}),
						/* @__PURE__ */ jsx("p", {
							style: { marginBottom: 24 },
							children: "Edge computing pushes the execution of code to nodes that are geographically closer to the end user. When combined with serverless paradigms, we get **Serverless Edge**."
						}),
						/* @__PURE__ */ jsxs("ul", {
							style: {
								marginBottom: 40,
								paddingLeft: 24,
								display: "flex",
								flexDirection: "column",
								gap: 16
							},
							children: [
								/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", { children: "Ultra-Low Latency:" }), " Code executes milliseconds away from the user."] }),
								/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", { children: "Reduced Bandwidth Costs:" }), " Data is processed at the edge, reducing backhaul."] }),
								/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", { children: "Enhanced Security:" }), " Distributed nodes minimize the impact of localized DDoS attacks."] })
							]
						}),
						/* @__PURE__ */ jsx("h2", {
							style: {
								fontSize: 32,
								fontFamily: "var(--font-heading)",
								color: "var(--zy-white)",
								fontWeight: 700,
								marginTop: 48,
								marginBottom: 24
							},
							children: "Zytrixon's Approach"
						}),
						/* @__PURE__ */ jsx("p", {
							style: { marginBottom: 24 },
							children: "At Zytrixon, we leverage tools like Cloudflare Workers and Vercel Edge Functions to build highly resilient, globally distributed systems for our enterprise clients. This architecture has enabled our clients to handle millions of requests per second without breaking a sweat."
						}),
						/* @__PURE__ */ jsx("div", {
							style: {
								marginTop: 80,
								paddingTop: 40,
								borderTop: "1px solid var(--zy-gray-border)"
							},
							children: /* @__PURE__ */ jsxs("div", {
								style: {
									display: "flex",
									alignItems: "center",
									gap: 24
								},
								children: [/* @__PURE__ */ jsx("div", { style: {
									width: 80,
									height: 80,
									borderRadius: "50%",
									background: "linear-gradient(135deg, var(--zy-blue), #66aaff)"
								} }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
									style: {
										color: "var(--zy-white)",
										fontSize: 20,
										fontWeight: 700,
										marginBottom: 8
									},
									children: "Rahul Singh"
								}), /* @__PURE__ */ jsx("p", {
									style: { fontSize: 15 },
									children: "Lead Architect with 10+ years of experience in distributed systems, cloud infrastructure, and AI engineering."
								})] })]
							})
						})
					]
				}),
				/* @__PURE__ */ jsx("section", {
					style: {
						padding: "80px 24px",
						background: "var(--zy-gray-dark)"
					},
					children: /* @__PURE__ */ jsxs("div", {
						style: {
							maxWidth: 1200,
							margin: "0 auto"
						},
						children: [/* @__PURE__ */ jsx("h2", {
							style: {
								fontSize: 32,
								fontFamily: "var(--font-heading)",
								fontWeight: 800,
								color: "var(--zy-white)",
								marginBottom: 40
							},
							children: "Keep Reading"
						}), /* @__PURE__ */ jsx("div", {
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
									title: "Why Next.js 15 is a Game Changer for SEO",
									category: "Engineering",
									date: "Apr 28, 2026"
								}
							].map((post, index) => /* @__PURE__ */ jsxs(Link, {
								href: "/blog/mastering-gsap",
								"aria-label": `Read article: ${post.title}`,
								style: {
									background: "var(--zy-gray-card)",
									borderRadius: 16,
									overflow: "hidden",
									border: "1px solid rgba(255,255,255,0.03)",
									transition: "transform 0.3s",
									cursor: "pointer",
									textDecoration: "none",
									display: "block"
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
										/* @__PURE__ */ jsx("div", {
											style: {
												color: "var(--zy-gray-light)",
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
						})]
					})
				}),
				/* @__PURE__ */ jsx(FooterCTA, {})
			]
		}),
		/* @__PURE__ */ jsx(Footer, {})
	] });
}
//#endregion
export { BlogDetails as default };

//# sourceMappingURL=BlogDetails-CaBzUiYC.js.map