import { i as CustomCursor, n as FooterCTA, o as ThemeProvider, r as Footer, t as Navbar } from "./navbar-zs2JAPVG.js";
import { t as ContactSection } from "./contact-section-DMyBTSt0.js";
import { t as TopBar } from "./top-bar-CIlupwkt.js";
import { t as SeoHead } from "./SeoHead-IK9k69Ru.js";
import { t as GradientCard } from "./GradientCard-eYhcRqAc.js";
import { Head, Link } from "@inertiajs/react";
import "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/pages/CaseStudyDetails.tsx
function CaseStudyDetails({ caseStudy, relatedCaseStudies = [], seo }) {
	const parseResults = (results) => {
		if (!results) return [];
		if (Array.isArray(results)) return results;
		try {
			return JSON.parse(results);
		} catch {
			return [];
		}
	};
	const resultsList = parseResults(caseStudy.results);
	const pageSeo = {
		title: seo?.title || `${caseStudy.title} | Case Study - Zytrixon Tech`,
		description: seo?.description || `Read how Zytrixon Tech helped ${caseStudy.client_name} achieve results in ${caseStudy.industry}.`
	};
	const schemaData = {
		"@context": "https://schema.org",
		"@graph": [{
			"@type": "BreadcrumbList",
			itemListElement: [
				{
					"@type": "ListItem",
					position: 1,
					name: "Home",
					item: "https://zytrixon.com"
				},
				{
					"@type": "ListItem",
					position: 2,
					name: "Case Studies",
					item: "https://zytrixon.com/case-studies"
				},
				{
					"@type": "ListItem",
					position: 3,
					name: caseStudy.title,
					item: `https://zytrixon.com/case-studies/${caseStudy.slug}`
				}
			]
		}, {
			"@type": "TechArticle",
			headline: caseStudy.title,
			image: caseStudy.image ? [caseStudy.image] : [],
			about: caseStudy.industry,
			author: {
				"@type": "Organization",
				name: "Zytrixon Tech",
				url: "https://zytrixon.com"
			},
			publisher: {
				"@type": "Organization",
				name: "Zytrixon Tech",
				url: "https://zytrixon.com"
			},
			description: pageSeo.description
		}]
	};
	return /* @__PURE__ */ jsxs(ThemeProvider, { children: [
		/* @__PURE__ */ jsx(SeoHead, { seo: pageSeo }),
		/* @__PURE__ */ jsx(Head, { children: /* @__PURE__ */ jsx("script", {
			type: "application/ld+json",
			children: JSON.stringify(schemaData)
		}) }),
		/* @__PURE__ */ jsx(CustomCursor, {}),
		/* @__PURE__ */ jsx(TopBar, {}),
		/* @__PURE__ */ jsx(Navbar, {}),
		/* @__PURE__ */ jsxs("main", {
			style: {
				minHeight: "100vh",
				background: "var(--zy-black)",
				overflowX: "hidden",
				paddingTop: "120px"
			},
			children: [
				/* @__PURE__ */ jsxs("header", {
					style: {
						maxWidth: 1100,
						margin: "0 auto",
						padding: "20px 24px 40px"
					},
					children: [
						/* @__PURE__ */ jsxs("nav", {
							"aria-label": "Breadcrumb",
							style: {
								display: "flex",
								gap: 8,
								alignItems: "center",
								fontSize: 13,
								color: "var(--zy-gray-text)",
								marginBottom: 32,
								flexWrap: "wrap"
							},
							children: [
								/* @__PURE__ */ jsx(Link, {
									href: "/",
									style: {
										color: "var(--zy-gray-text)",
										textDecoration: "none"
									},
									children: "Home"
								}),
								/* @__PURE__ */ jsx("span", { children: "/" }),
								/* @__PURE__ */ jsx(Link, {
									href: "/case-studies",
									style: {
										color: "var(--zy-gray-text)",
										textDecoration: "none"
									},
									children: "Case Studies"
								}),
								/* @__PURE__ */ jsx("span", { children: "/" }),
								/* @__PURE__ */ jsx("span", {
									style: {
										color: "var(--zy-blue)",
										fontWeight: 600
									},
									children: caseStudy.industry
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							style: {
								display: "inline-flex",
								alignItems: "center",
								gap: 8,
								padding: "6px 16px",
								background: "rgba(0, 112, 243, 0.1)",
								border: "1px solid rgba(0, 112, 243, 0.25)",
								borderRadius: 30,
								color: "var(--zy-blue)",
								fontSize: 13,
								fontWeight: 700,
								textTransform: "uppercase",
								letterSpacing: "0.05em",
								marginBottom: 20
							},
							children: [
								/* @__PURE__ */ jsx("span", { children: caseStudy.industry }),
								/* @__PURE__ */ jsx("span", { children: "•" }),
								/* @__PURE__ */ jsx("span", { children: caseStudy.client_name })
							]
						}),
						/* @__PURE__ */ jsx("h1", {
							style: {
								fontSize: "clamp(32px, 5vw, 56px)",
								fontWeight: 800,
								fontFamily: "var(--font-heading)",
								color: "var(--zy-white)",
								lineHeight: 1.15,
								marginBottom: 28
							},
							children: caseStudy.title
						}),
						/* @__PURE__ */ jsxs("div", {
							style: {
								display: "grid",
								gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
								gap: 16,
								padding: "24px",
								background: "var(--zy-gray-card)",
								border: "1px solid rgba(255,255,255,0.06)",
								borderRadius: 14
							},
							children: [
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
									style: {
										fontSize: 12,
										color: "var(--zy-gray-text)",
										textTransform: "uppercase",
										letterSpacing: "0.05em",
										marginBottom: 4
									},
									children: "Client"
								}), /* @__PURE__ */ jsx("div", {
									style: {
										fontSize: 16,
										fontWeight: 700,
										color: "var(--zy-white)"
									},
									children: caseStudy.client_name
								})] }),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
									style: {
										fontSize: 12,
										color: "var(--zy-gray-text)",
										textTransform: "uppercase",
										letterSpacing: "0.05em",
										marginBottom: 4
									},
									children: "Industry"
								}), /* @__PURE__ */ jsx("div", {
									style: {
										fontSize: 16,
										fontWeight: 700,
										color: "var(--zy-white)"
									},
									children: caseStudy.industry
								})] }),
								caseStudy.service && /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
									style: {
										fontSize: 12,
										color: "var(--zy-gray-text)",
										textTransform: "uppercase",
										letterSpacing: "0.05em",
										marginBottom: 4
									},
									children: "Service"
								}), /* @__PURE__ */ jsxs(Link, {
									href: `/services/${caseStudy.service.slug}`,
									style: {
										fontSize: 16,
										fontWeight: 700,
										color: "var(--zy-blue)",
										textDecoration: "none"
									},
									children: [caseStudy.service.title, " →"]
								})] }),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
									style: {
										fontSize: 12,
										color: "var(--zy-gray-text)",
										textTransform: "uppercase",
										letterSpacing: "0.05em",
										marginBottom: 4
									},
									children: "Delivery Hub"
								}), /* @__PURE__ */ jsx("div", {
									style: {
										fontSize: 16,
										fontWeight: 700,
										color: "var(--zy-white)"
									},
									children: "Samastipur, Bihar"
								})] })
							]
						})
					]
				}),
				caseStudy.image && /* @__PURE__ */ jsx("div", {
					style: {
						maxWidth: 1100,
						margin: "0 auto 60px",
						padding: "0 24px"
					},
					children: /* @__PURE__ */ jsx("div", {
						style: {
							borderRadius: 20,
							overflow: "hidden",
							border: "1px solid rgba(255,255,255,0.08)",
							maxHeight: 520,
							boxShadow: "0 30px 60px -12px rgba(0, 112, 243, 0.15)"
						},
						children: /* @__PURE__ */ jsx("img", {
							src: caseStudy.image,
							alt: caseStudy.title,
							style: {
								width: "100%",
								height: "100%",
								maxHeight: 520,
								objectFit: "cover",
								display: "block"
							}
						})
					})
				}),
				resultsList.length > 0 && /* @__PURE__ */ jsx("section", {
					style: {
						maxWidth: 1100,
						margin: "0 auto 60px",
						padding: "0 24px"
					},
					children: /* @__PURE__ */ jsxs("div", {
						style: {
							background: "linear-gradient(135deg, rgba(0, 112, 243, 0.08) 0%, rgba(0, 0, 0, 0.4) 100%)",
							border: "1px solid rgba(0, 112, 243, 0.3)",
							borderRadius: 16,
							padding: "40px 32px",
							textAlign: "center"
						},
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "zy-section-label",
								children: "MEASURABLE IMPACT"
							}),
							/* @__PURE__ */ jsx("h2", {
								style: {
									fontSize: "clamp(24px, 3.5vw, 36px)",
									fontWeight: 800,
									color: "var(--zy-white)",
									marginBottom: 32,
									fontFamily: "var(--font-heading)"
								},
								children: "Quantifiable Business Outcomes"
							}),
							/* @__PURE__ */ jsx("div", {
								style: {
									display: "grid",
									gridTemplateColumns: `repeat(auto-fit, minmax(200px, 1fr))`,
									gap: 24
								},
								children: resultsList.map((res, i) => {
									const parts = res.split(" ");
									const primary = parts[0];
									const secondary = parts.slice(1).join(" ");
									return /* @__PURE__ */ jsxs("div", {
										style: {
											background: "rgba(0,0,0,0.4)",
											border: "1px solid rgba(255,255,255,0.06)",
											borderRadius: 12,
											padding: "24px 16px"
										},
										children: [/* @__PURE__ */ jsx("div", {
											style: {
												fontSize: "clamp(32px, 5vw, 42px)",
												fontWeight: 900,
												fontFamily: "var(--font-heading)",
												color: "var(--zy-blue)",
												marginBottom: 8
											},
											children: primary
										}), /* @__PURE__ */ jsx("div", {
											style: {
												fontSize: 14,
												color: "var(--zy-gray-text)",
												textTransform: "uppercase",
												letterSpacing: "0.05em",
												fontWeight: 600
											},
											children: secondary || "Outcome"
										})]
									}, i);
								})
							})
						]
					})
				}),
				/* @__PURE__ */ jsx("section", {
					style: {
						maxWidth: 1100,
						margin: "0 auto 80px",
						padding: "0 24px"
					},
					children: /* @__PURE__ */ jsxs("div", {
						style: {
							display: "grid",
							gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
							gap: 32
						},
						children: [/* @__PURE__ */ jsxs(GradientCard, {
							style: {
								textAlign: "left",
								padding: 36
							},
							children: [
								/* @__PURE__ */ jsx("div", {
									style: {
										display: "inline-block",
										padding: "6px 14px",
										background: "rgba(239, 68, 68, 0.1)",
										border: "1px solid rgba(239, 68, 68, 0.3)",
										borderRadius: 8,
										color: "#ef4444",
										fontSize: 12,
										fontWeight: 700,
										textTransform: "uppercase",
										letterSpacing: "0.05em",
										marginBottom: 16
									},
									children: "The Problem"
								}),
								/* @__PURE__ */ jsx("h2", {
									style: {
										fontSize: 26,
										fontWeight: 800,
										color: "var(--zy-white)",
										fontFamily: "var(--font-heading)",
										marginBottom: 20
									},
									children: "The Challenge"
								}),
								/* @__PURE__ */ jsx("p", {
									style: {
										color: "var(--zy-gray-text)",
										fontSize: 16,
										lineHeight: 1.8,
										whiteSpace: "pre-line"
									},
									children: caseStudy.challenge
								})
							]
						}), /* @__PURE__ */ jsxs(GradientCard, {
							style: {
								textAlign: "left",
								padding: 36
							},
							children: [
								/* @__PURE__ */ jsx("div", {
									style: {
										display: "inline-block",
										padding: "6px 14px",
										background: "rgba(34, 197, 94, 0.1)",
										border: "1px solid rgba(34, 197, 94, 0.3)",
										borderRadius: 8,
										color: "#22c55e",
										fontSize: 12,
										fontWeight: 700,
										textTransform: "uppercase",
										letterSpacing: "0.05em",
										marginBottom: 16
									},
									children: "The Architecture"
								}),
								/* @__PURE__ */ jsx("h2", {
									style: {
										fontSize: 26,
										fontWeight: 800,
										color: "var(--zy-white)",
										fontFamily: "var(--font-heading)",
										marginBottom: 20
									},
									children: "The Zytrixon Solution"
								}),
								/* @__PURE__ */ jsx("p", {
									style: {
										color: "var(--zy-gray-text)",
										fontSize: 16,
										lineHeight: 1.8,
										whiteSpace: "pre-line"
									},
									children: caseStudy.solution
								})
							]
						})]
					})
				}),
				/* @__PURE__ */ jsx("section", {
					style: {
						maxWidth: 900,
						margin: "0 auto 80px",
						padding: "0 24px"
					},
					children: /* @__PURE__ */ jsxs("div", {
						style: {
							background: "var(--zy-gray-card)",
							border: "1px solid rgba(255,255,255,0.08)",
							borderRadius: 16,
							padding: "40px 36px",
							textAlign: "center",
							position: "relative"
						},
						children: [
							/* @__PURE__ */ jsx("div", {
								style: {
									fontSize: 48,
									color: "var(--zy-blue)",
									lineHeight: 1,
									marginBottom: 12,
									opacity: .6
								},
								children: "“"
							}),
							/* @__PURE__ */ jsx("p", {
								style: {
									fontSize: 18,
									fontStyle: "italic",
									color: "var(--zy-white)",
									lineHeight: 1.7,
									marginBottom: 24
								},
								children: "Working with Zytrixon Tech was a game-changer. They didn't just write code — they re-architected our entire system to scale without friction. Highly recommended."
							}),
							/* @__PURE__ */ jsx("div", {
								style: {
									fontWeight: 700,
									color: "var(--zy-white)",
									fontSize: 16
								},
								children: "Lead Stakeholder"
							}),
							/* @__PURE__ */ jsxs("div", {
								style: {
									color: "var(--zy-gray-text)",
									fontSize: 14,
									marginTop: 4
								},
								children: [
									caseStudy.client_name,
									" (",
									caseStudy.industry,
									")"
								]
							})
						]
					})
				}),
				relatedCaseStudies.length > 0 && /* @__PURE__ */ jsxs("section", {
					style: {
						maxWidth: 1200,
						margin: "0 auto 100px",
						padding: "0 24px"
					},
					children: [/* @__PURE__ */ jsxs("div", {
						style: {
							textAlign: "center",
							marginBottom: 48
						},
						children: [/* @__PURE__ */ jsx("span", {
							className: "zy-section-label",
							children: "MORE WORK"
						}), /* @__PURE__ */ jsx("h2", {
							className: "zy-section-title",
							children: "Related Success Stories"
						})]
					}), /* @__PURE__ */ jsx("div", {
						style: {
							display: "grid",
							gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
							gap: 28
						},
						children: relatedCaseStudies.map((rel) => /* @__PURE__ */ jsx(Link, {
							href: `/case-studies/${rel.slug}`,
							style: {
								textDecoration: "none",
								display: "block"
							},
							children: /* @__PURE__ */ jsxs(GradientCard, {
								style: {
									textAlign: "left",
									height: "100%",
									display: "flex",
									flexDirection: "column"
								},
								children: [
									/* @__PURE__ */ jsx("div", {
										style: {
											fontSize: 12,
											color: "var(--zy-blue)",
											fontWeight: 700,
											textTransform: "uppercase",
											marginBottom: 8
										},
										children: rel.industry
									}),
									/* @__PURE__ */ jsx("h3", {
										style: {
											fontSize: 18,
											fontWeight: 700,
											color: "var(--zy-white)",
											marginBottom: 12,
											lineHeight: 1.3
										},
										children: rel.title
									}),
									/* @__PURE__ */ jsx("p", {
										style: {
											color: "var(--zy-gray-text)",
											fontSize: 14,
											lineHeight: 1.6,
											marginTop: "auto"
										},
										children: "Read Case Study →"
									})
								]
							})
						}, rel.id))
					})]
				}),
				/* @__PURE__ */ jsx(FooterCTA, {}),
				/* @__PURE__ */ jsx(ContactSection, {})
			]
		}),
		/* @__PURE__ */ jsx(Footer, {})
	] });
}
//#endregion
export { CaseStudyDetails as default };

//# sourceMappingURL=CaseStudyDetails-BLShnK-B.js.map