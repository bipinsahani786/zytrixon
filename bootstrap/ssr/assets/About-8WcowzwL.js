import { a as ThemeProvider, n as Footer, o as useTheme, r as Navbar, t as CustomCursor } from "./custom-cursor-s6CGr8GY.js";
import { t as TopBar } from "./top-bar-C3HAjSYy.js";
import { t as LazySection } from "./lazy-section-Bm1gTwLP.js";
import { t as SeoHead } from "./SeoHead-ypAe3bNq.js";
import { t as InnerPageHero } from "./inner-page-hero-RSnAV5b5.js";
import { Link } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/components/about/AboutExecutiveHUD.tsx
function AboutExecutiveHUD() {
	const { theme } = useTheme();
	const isLight = theme === "light";
	return /* @__PURE__ */ jsx("section", {
		style: {
			padding: "60px var(--zy-section-pad-x, 24px)",
			background: "var(--zy-bg)",
			borderBottom: "1px solid var(--zy-border-subtle)",
			transition: "background 0.3s ease, border-color 0.3s ease"
		},
		children: /* @__PURE__ */ jsx("div", {
			style: {
				maxWidth: "1280px",
				margin: "0 auto"
			},
			children: /* @__PURE__ */ jsx("div", {
				style: {
					display: "grid",
					gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
					gap: "20px"
				},
				children: [
					{
						value: "99.98%",
						label: "System Reliability",
						desc: "Average SLA uptime maintained across production distributed systems."
					},
					{
						value: "45+",
						label: "Enterprise Deployments",
						desc: "Custom-built cloud architectures, LIS engines & headless commerce stores."
					},
					{
						value: "< 100ms",
						label: "Edge Execution Latency",
						desc: "Sub-second page rendering and atomic inventory synchronization."
					},
					{
						value: "3 Continents",
						label: "Global Impact Footprint",
						desc: "Serving institutional clients across India, MENA, and North America."
					}
				].map((kpi, idx) => /* @__PURE__ */ jsxs("div", {
					style: {
						background: isLight ? "#ffffff" : "var(--zy-surface-1)",
						border: "1px solid var(--zy-border-subtle)",
						borderRadius: "18px",
						padding: "28px 24px",
						position: "relative",
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
						transition: "all 0.3s ease",
						boxShadow: isLight ? "0 4px 20px rgba(0,0,0,0.03)" : "none"
					},
					onMouseEnter: (e) => {
						e.currentTarget.style.borderColor = "var(--zy-border-hover)";
						e.currentTarget.style.transform = "translateY(-3px)";
					},
					onMouseLeave: (e) => {
						e.currentTarget.style.borderColor = "var(--zy-border-subtle)";
						e.currentTarget.style.transform = "translateY(0)";
					},
					children: [/* @__PURE__ */ jsx("div", {
						style: {
							fontFamily: "var(--font-heading, \"Space Grotesk\", sans-serif)",
							fontSize: "clamp(32px, 3.5vw, 44px)",
							fontWeight: 800,
							color: "var(--zy-text-primary)",
							lineHeight: 1.1,
							letterSpacing: "-0.02em",
							marginBottom: "14px"
						},
						children: kpi.value
					}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
						style: {
							fontSize: "15px",
							fontWeight: 700,
							color: "var(--zy-text-primary)",
							margin: "0 0 6px 0"
						},
						children: kpi.label
					}), /* @__PURE__ */ jsx("p", {
						style: {
							fontSize: "13px",
							color: "var(--zy-text-secondary)",
							lineHeight: 1.5,
							margin: 0
						},
						children: kpi.desc
					})] })]
				}, idx))
			})
		})
	});
}
//#endregion
//#region resources/js/components/about/AboutOriginStory.tsx
function AboutOriginStory() {
	const { theme } = useTheme();
	const isLight = theme === "light";
	const [selectedTab, setSelectedTab] = useState(0);
	const chapters = [
		{
			year: "Q1 2026",
			title: "The Spark in Bihar",
			subtitle: "Challenging the Outsourcing Status Quo",
			narrative: "Zytrixon was established in Patna, Bihar, by engineers dissatisfied with the transactional, low-quality software outsourcing culture prevalent across the subcontinent. We committed to a singular standard: building software with Silicon Valley tier architecture, extreme type safety, and domain-driven design from day zero.",
			highlight: "Founded with zero outside capital, 100% engineering conviction."
		},
		{
			year: "Q2 2026",
			title: "The Viral Concurrency Trial",
			subtitle: "Handling 25,000+ Concurrent Flash Sales",
			narrative: "When emerging D2C fashion labels and consumer brands experienced repeated database crashes during Instagram drops, Zytrixon engineered a custom headless commerce layer with Redis atomic inventory reservations. The result was 99.99% uptime through 10,000+ requests per second.",
			highlight: "Zero overselling incidents across major national campaign launches."
		},
		{
			year: "Q3 2026",
			title: "Clinical Diagnostics & HealthTech",
			subtitle: "LIS 2.0 Architectural Overhaul",
			narrative: "We expanded into mission-critical clinical software, creating ZytrixonLabs Pathology — an ASTM/HL7 compliant cloud laboratory information system connecting automated biochemistry analyzers with paperless doctor signatures and sub-minute WhatsApp patient report dispatches.",
			highlight: "Over 500,000 diagnostic samples processed with zero data discrepancy."
		},
		{
			year: "Q4 2026",
			title: "Global Infrastructure & Dual Hubs",
			subtitle: "NCR Expansion & International Mandates",
			narrative: "With active enterprise systems in real estate land acquisition, corporate investigation intelligence, and cloud ERPs, Zytrixon established an NCR engineering hub while maintaining its deep commitment to mentoring talent in Eastern India. Today, we partner with industry leaders across India, UAE, and the US.",
			highlight: "Ranked among the fastest-growing modern engineering studios in Eastern India."
		}
	];
	return /* @__PURE__ */ jsx("section", {
		id: "origin",
		style: {
			padding: "110px var(--zy-section-pad-x, 24px)",
			background: isLight ? "var(--zy-surface-1)" : "var(--zy-bg)",
			borderBottom: "1px solid var(--zy-border-subtle)",
			transition: "background 0.3s ease, border-color 0.3s ease"
		},
		children: /* @__PURE__ */ jsxs("div", {
			style: {
				maxWidth: "1280px",
				margin: "0 auto"
			},
			children: [/* @__PURE__ */ jsxs("div", {
				style: {
					marginBottom: "60px",
					maxWidth: "780px"
				},
				children: [/* @__PURE__ */ jsx("h2", {
					style: {
						fontFamily: "var(--font-heading, \"Space Grotesk\", sans-serif)",
						fontSize: "clamp(30px, 4.2vw, 54px)",
						fontWeight: 800,
						lineHeight: 1.1,
						letterSpacing: "-0.025em",
						color: "var(--zy-text-primary)",
						marginBottom: "20px"
					},
					children: "Forged in Patna. Trusted by Enterprises Worldwide."
				}), /* @__PURE__ */ jsx("p", {
					style: {
						fontSize: "16px",
						lineHeight: 1.65,
						color: "var(--zy-text-secondary)",
						margin: 0
					},
					children: "We did not begin in a Silicon Valley incubator or an air-conditioned metropolitan glass tower. We began with high-powered workstations, relentless curiosity, and a stubborn refusal to write mediocre code."
				})]
			}), /* @__PURE__ */ jsxs("div", {
				style: {
					display: "grid",
					gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
					gap: "40px",
					alignItems: "start"
				},
				children: [/* @__PURE__ */ jsx("div", {
					style: {
						display: "flex",
						flexDirection: "column",
						gap: "14px"
					},
					children: chapters.map((ch, idx) => {
						const isSelected = selectedTab === idx;
						return /* @__PURE__ */ jsxs("button", {
							onClick: () => {
								setSelectedTab(idx);
							},
							type: "button",
							style: {
								textAlign: "left",
								padding: "24px",
								borderRadius: "16px",
								background: isSelected ? isLight ? "#ffffff" : "var(--zy-surface-2)" : "transparent",
								border: isSelected ? "1px solid var(--zy-border-hover)" : "1px solid var(--zy-border-subtle)",
								cursor: "pointer",
								transition: "all 0.25s ease",
								boxShadow: isSelected && isLight ? "0 10px 30px rgba(0,0,0,0.04)" : "none"
							},
							children: [
								/* @__PURE__ */ jsxs("div", {
									style: {
										display: "flex",
										alignItems: "center",
										justifyContent: "space-between",
										marginBottom: "8px"
									},
									children: [/* @__PURE__ */ jsx("span", {
										style: {
											fontSize: "12px",
											fontWeight: 800,
											letterSpacing: "0.08em",
											color: isSelected ? "var(--zy-text-primary)" : "var(--zy-text-muted)",
											fontFamily: "monospace"
										},
										children: ch.year
									}), /* @__PURE__ */ jsx("span", {
										style: {
											fontSize: "11px",
											color: isSelected ? "var(--zy-text-primary)" : "var(--zy-text-muted)"
										},
										children: isSelected ? "ACTIVE READ" : "INSPECT →"
									})]
								}),
								/* @__PURE__ */ jsx("div", {
									style: {
										fontSize: "17px",
										fontWeight: 700,
										color: isSelected ? "var(--zy-text-primary)" : "var(--zy-text-secondary)",
										marginBottom: "4px"
									},
									children: ch.title
								}),
								/* @__PURE__ */ jsx("div", {
									style: {
										fontSize: "13px",
										color: "var(--zy-text-muted)"
									},
									children: ch.subtitle
								})
							]
						}, idx);
					})
				}), /* @__PURE__ */ jsxs("div", {
					style: {
						background: isLight ? "#ffffff" : "var(--zy-surface-1)",
						border: "1px solid var(--zy-border-subtle)",
						borderRadius: "24px",
						padding: "clamp(28px, 4vw, 48px)",
						position: "relative",
						boxShadow: isLight ? "0 15px 40px rgba(0,0,0,0.04)" : "none"
					},
					children: [
						/* @__PURE__ */ jsxs("div", {
							style: {
								display: "inline-block",
								padding: "4px 12px",
								borderRadius: "20px",
								background: isLight ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.06)",
								fontSize: "11px",
								fontWeight: 700,
								letterSpacing: "0.08em",
								textTransform: "uppercase",
								color: "var(--zy-text-secondary)",
								marginBottom: "20px",
								fontFamily: "monospace"
							},
							children: ["CHAPTER ARCHIVE // ", chapters[selectedTab].year]
						}),
						/* @__PURE__ */ jsx("h3", {
							style: {
								fontFamily: "var(--font-heading, \"Space Grotesk\", sans-serif)",
								fontSize: "clamp(24px, 2.5vw, 36px)",
								fontWeight: 800,
								color: "var(--zy-text-primary)",
								marginBottom: "16px",
								lineHeight: 1.2
							},
							children: chapters[selectedTab].title
						}),
						/* @__PURE__ */ jsx("p", {
							style: {
								fontSize: "16px",
								lineHeight: 1.75,
								color: "var(--zy-text-secondary)",
								marginBottom: "28px"
							},
							children: chapters[selectedTab].narrative
						}),
						/* @__PURE__ */ jsxs("div", {
							style: {
								padding: "18px 22px",
								borderRadius: "14px",
								background: isLight ? "var(--zy-surface-1)" : "var(--zy-surface-2)",
								borderLeft: "3px solid var(--zy-text-primary)",
								fontSize: "14px",
								fontWeight: 600,
								color: "var(--zy-text-primary)",
								lineHeight: 1.5
							},
							children: [/* @__PURE__ */ jsx("span", {
								style: {
									color: "var(--zy-text-muted)",
									marginRight: "6px"
								},
								children: "Benchmark:"
							}), chapters[selectedTab].highlight]
						})
					]
				})]
			})]
		})
	});
}
//#endregion
//#region resources/js/components/about/AboutMissionVision.tsx
function AboutMissionVision() {
	const { theme } = useTheme();
	const isLight = theme === "light";
	const [persona, setPersona] = useState("founders");
	return /* @__PURE__ */ jsx("section", {
		style: {
			padding: "110px var(--zy-section-pad-x, 24px)",
			background: "var(--zy-bg)",
			borderBottom: "1px solid var(--zy-border-subtle)",
			transition: "background 0.3s ease, border-color 0.3s ease"
		},
		children: /* @__PURE__ */ jsxs("div", {
			style: {
				maxWidth: "1280px",
				margin: "0 auto"
			},
			children: [
				/* @__PURE__ */ jsxs("div", {
					style: {
						textAlign: "center",
						marginBottom: "64px",
						maxWidth: "780px",
						margin: "0 auto 64px"
					},
					children: [/* @__PURE__ */ jsx("h2", {
						style: {
							fontFamily: "var(--font-heading, \"Space Grotesk\", sans-serif)",
							fontSize: "clamp(30px, 4vw, 52px)",
							fontWeight: 800,
							lineHeight: 1.15,
							letterSpacing: "-0.025em",
							color: "var(--zy-text-primary)",
							marginBottom: "16px"
						},
						children: "Our Mission & 2030 Vision"
					}), /* @__PURE__ */ jsx("p", {
						style: {
							fontSize: "16px",
							color: "var(--zy-text-secondary)",
							lineHeight: 1.6,
							margin: 0
						},
						children: "We operate with absolute strategic clarity. Our purpose is not just to write software, but to arm modern businesses with impenetrable technical advantages."
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					style: {
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
						gap: "28px",
						marginBottom: "48px"
					},
					children: [/* @__PURE__ */ jsxs("div", {
						style: {
							background: isLight ? "#ffffff" : "var(--zy-surface-1)",
							border: "1px solid var(--zy-border-subtle)",
							borderRadius: "24px",
							padding: "clamp(28px, 4vw, 44px)",
							position: "relative",
							boxShadow: isLight ? "0 10px 30px rgba(0,0,0,0.03)" : "none"
						},
						children: [
							/* @__PURE__ */ jsx("div", {
								style: {
									display: "inline-flex",
									alignItems: "center",
									gap: "8px",
									fontSize: "11px",
									fontWeight: 800,
									textTransform: "uppercase",
									letterSpacing: "0.1em",
									color: "var(--zy-text-secondary)",
									padding: "4px 12px",
									borderRadius: "20px",
									background: isLight ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.06)",
									marginBottom: "24px"
								},
								children: /* @__PURE__ */ jsx("span", { children: "CORE MANDATE" })
							}),
							/* @__PURE__ */ jsx("h3", {
								style: {
									fontFamily: "var(--font-heading, \"Space Grotesk\", sans-serif)",
									fontSize: "clamp(22px, 2.2vw, 28px)",
									fontWeight: 800,
									color: "var(--zy-text-primary)",
									marginBottom: "16px",
									lineHeight: 1.25
								},
								children: "The Mission: Eliminating Technical Debt Before It Begins"
							}),
							/* @__PURE__ */ jsx("p", {
								style: {
									fontSize: "15px",
									lineHeight: 1.7,
									color: "var(--zy-text-secondary)",
									margin: 0
								},
								children: "To liberate ambitious founders and global enterprises from fragile spaghetti code, unlicensed software shortcuts, and opaque billing. We architect scalable, modular systems that run effortlessly under extreme concurrency, delivering measurable business ROI from sprint one."
							})
						]
					}), /* @__PURE__ */ jsxs("div", {
						style: {
							background: isLight ? "#ffffff" : "var(--zy-surface-1)",
							border: "1px solid var(--zy-border-subtle)",
							borderRadius: "24px",
							padding: "clamp(28px, 4vw, 44px)",
							position: "relative",
							boxShadow: isLight ? "0 10px 30px rgba(0,0,0,0.03)" : "none"
						},
						children: [
							/* @__PURE__ */ jsx("div", {
								style: {
									display: "inline-flex",
									alignItems: "center",
									gap: "8px",
									fontSize: "11px",
									fontWeight: 800,
									textTransform: "uppercase",
									letterSpacing: "0.1em",
									color: "var(--zy-text-secondary)",
									padding: "4px 12px",
									borderRadius: "20px",
									background: isLight ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.06)",
									marginBottom: "24px"
								},
								children: /* @__PURE__ */ jsx("span", { children: "HORIZON 2030" })
							}),
							/* @__PURE__ */ jsx("h3", {
								style: {
									fontFamily: "var(--font-heading, \"Space Grotesk\", sans-serif)",
									fontSize: "clamp(22px, 2.2vw, 28px)",
									fontWeight: 800,
									color: "var(--zy-text-primary)",
									marginBottom: "16px",
									lineHeight: 1.25
								},
								children: "The 2030 Vision: The Global Benchmark for Mission-Critical Tech"
							}),
							/* @__PURE__ */ jsx("p", {
								style: {
									fontSize: "15px",
									lineHeight: 1.7,
									color: "var(--zy-text-secondary)",
									margin: 0
								},
								children: "To stand as the world’s most trusted technical partner for complex domain systems — from decentralized logistics to high-throughput diagnostic networks. We are proving that elite, tier-1 global engineering can originate from any corner of the globe when backed by uncompromising rigor."
							})
						]
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					style: {
						background: isLight ? "#ffffff" : "var(--zy-surface-1)",
						border: "1px solid var(--zy-border-subtle)",
						borderRadius: "20px",
						padding: "clamp(24px, 3.5vw, 36px)"
					},
					children: [/* @__PURE__ */ jsxs("div", {
						style: {
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							flexWrap: "wrap",
							gap: "16px",
							marginBottom: "24px"
						},
						children: [/* @__PURE__ */ jsx("span", {
							style: {
								fontSize: "12px",
								fontWeight: 700,
								letterSpacing: "0.08em",
								textTransform: "uppercase",
								color: "var(--zy-text-muted)"
							},
							children: "Our Unconditional Commitments:"
						}), /* @__PURE__ */ jsxs("div", {
							style: {
								display: "inline-flex",
								padding: "4px",
								borderRadius: "30px",
								background: isLight ? "var(--zy-surface-2)" : "var(--zy-surface-2)",
								border: "1px solid var(--zy-border-subtle)"
							},
							children: [/* @__PURE__ */ jsx("button", {
								type: "button",
								onClick: () => {
									setPersona("founders");
								},
								style: {
									padding: "6px 18px",
									borderRadius: "24px",
									fontSize: "12px",
									fontWeight: 700,
									border: "none",
									cursor: "pointer",
									background: persona === "founders" ? "var(--zy-text-primary)" : "transparent",
									color: persona === "founders" ? isLight ? "#ffffff" : "#000000" : "var(--zy-text-secondary)",
									transition: "all 0.2s ease"
								},
								children: "To Growth Founders"
							}), /* @__PURE__ */ jsx("button", {
								type: "button",
								onClick: () => {
									setPersona("ctos");
								},
								style: {
									padding: "6px 18px",
									borderRadius: "24px",
									fontSize: "12px",
									fontWeight: 700,
									border: "none",
									cursor: "pointer",
									background: persona === "ctos" ? "var(--zy-text-primary)" : "transparent",
									color: persona === "ctos" ? isLight ? "#ffffff" : "#000000" : "var(--zy-text-secondary)",
									transition: "all 0.2s ease"
								},
								children: "To Enterprise CTOs"
							})]
						})]
					}), persona === "founders" ? /* @__PURE__ */ jsxs("div", {
						style: {
							display: "grid",
							gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
							gap: "20px"
						},
						children: [
							/* @__PURE__ */ jsxs("div", {
								style: {
									padding: "16px",
									borderRadius: "12px",
									background: isLight ? "var(--zy-surface-1)" : "var(--zy-surface-2)"
								},
								children: [/* @__PURE__ */ jsx("div", {
									style: {
										fontWeight: 700,
										color: "var(--zy-text-primary)",
										marginBottom: "6px"
									},
									children: "⚡ Sub-Second Speed to Market"
								}), /* @__PURE__ */ jsx("div", {
									style: {
										fontSize: "13px",
										color: "var(--zy-text-secondary)",
										lineHeight: 1.5
									},
									children: "Launch production-ready MVPs that handle 50x your initial forecast without rewriting code later."
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								style: {
									padding: "16px",
									borderRadius: "12px",
									background: isLight ? "var(--zy-surface-1)" : "var(--zy-surface-2)"
								},
								children: [/* @__PURE__ */ jsx("div", {
									style: {
										fontWeight: 700,
										color: "var(--zy-text-primary)",
										marginBottom: "6px"
									},
									children: "🔒 100% IP & Repo Ownership"
								}), /* @__PURE__ */ jsx("div", {
									style: {
										fontSize: "13px",
										color: "var(--zy-text-secondary)",
										lineHeight: 1.5
									},
									children: "Every line of code, Docker file, and infrastructure script belongs entirely to your company from day one."
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								style: {
									padding: "16px",
									borderRadius: "12px",
									background: isLight ? "var(--zy-surface-1)" : "var(--zy-surface-2)"
								},
								children: [/* @__PURE__ */ jsx("div", {
									style: {
										fontWeight: 700,
										color: "var(--zy-text-primary)",
										marginBottom: "6px"
									},
									children: "💎 Investor-Grade Architecture"
								}), /* @__PURE__ */ jsx("div", {
									style: {
										fontSize: "13px",
										color: "var(--zy-text-secondary)",
										lineHeight: 1.5
									},
									children: "Pass rigorous technical due diligence during Series A/B funding rounds with immaculate documentation."
								})]
							})
						]
					}) : /* @__PURE__ */ jsxs("div", {
						style: {
							display: "grid",
							gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
							gap: "20px"
						},
						children: [
							/* @__PURE__ */ jsxs("div", {
								style: {
									padding: "16px",
									borderRadius: "12px",
									background: isLight ? "var(--zy-surface-1)" : "var(--zy-surface-2)"
								},
								children: [/* @__PURE__ */ jsx("div", {
									style: {
										fontWeight: 700,
										color: "var(--zy-text-primary)",
										marginBottom: "6px"
									},
									children: "🛡️ Zero-Trust Security Baseline"
								}), /* @__PURE__ */ jsx("div", {
									style: {
										fontSize: "13px",
										color: "var(--zy-text-secondary)",
										lineHeight: 1.5
									},
									children: "OWASP Top-10 mitigation, sanitized inputs, encrypted disk persistence, and automated CI security gates."
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								style: {
									padding: "16px",
									borderRadius: "12px",
									background: isLight ? "var(--zy-surface-1)" : "var(--zy-surface-2)"
								},
								children: [/* @__PURE__ */ jsx("div", {
									style: {
										fontWeight: 700,
										color: "var(--zy-text-primary)",
										marginBottom: "6px"
									},
									children: "📊 Telemetry & Observability Ready"
								}), /* @__PURE__ */ jsx("div", {
									style: {
										fontSize: "13px",
										color: "var(--zy-text-secondary)",
										lineHeight: 1.5
									},
									children: "Built-in OpenTelemetry, Redis queue health metrics, structured JSON logs, and sub-100ms API endpoints."
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								style: {
									padding: "16px",
									borderRadius: "12px",
									background: isLight ? "var(--zy-surface-1)" : "var(--zy-surface-2)"
								},
								children: [/* @__PURE__ */ jsx("div", {
									style: {
										fontWeight: 700,
										color: "var(--zy-text-primary)",
										marginBottom: "6px"
									},
									children: "🔄 Seamless Legacy Interoperability"
								}), /* @__PURE__ */ jsx("div", {
									style: {
										fontSize: "13px",
										color: "var(--zy-text-secondary)",
										lineHeight: 1.5
									},
									children: "Clean API bridges connecting modern headless clients with legacy SQL databases, ERPs, and hardware analyzers."
								})]
							})
						]
					})]
				})
			]
		})
	});
}
//#endregion
//#region resources/js/components/about/AboutPrinciplesManifesto.tsx
function AboutPrinciplesManifesto() {
	const { theme } = useTheme();
	const isLight = theme === "light";
	const [hoveredIdx, setHoveredIdx] = useState(null);
	return /* @__PURE__ */ jsx("section", {
		id: "manifesto",
		style: {
			padding: "110px var(--zy-section-pad-x, 24px)",
			background: isLight ? "var(--zy-surface-1)" : "var(--zy-bg)",
			borderBottom: "1px solid var(--zy-border-subtle)",
			transition: "background 0.3s ease, border-color 0.3s ease"
		},
		children: /* @__PURE__ */ jsxs("div", {
			style: {
				maxWidth: "1280px",
				margin: "0 auto"
			},
			children: [/* @__PURE__ */ jsxs("div", {
				style: {
					marginBottom: "60px",
					maxWidth: "780px"
				},
				children: [/* @__PURE__ */ jsx("h2", {
					style: {
						fontFamily: "var(--font-heading, \"Space Grotesk\", sans-serif)",
						fontSize: "clamp(30px, 4vw, 52px)",
						fontWeight: 800,
						lineHeight: 1.15,
						letterSpacing: "-0.025em",
						color: "var(--zy-text-primary)",
						marginBottom: "16px"
					},
					children: "Five Non-Negotiable Axioms"
				}), /* @__PURE__ */ jsx("p", {
					style: {
						fontSize: "16px",
						color: "var(--zy-text-secondary)",
						lineHeight: 1.6,
						margin: 0
					},
					children: "These are not generic HR values framed on an office wall. They are the rigorous technical rules that govern every git commit, schema migration, and design review at Zytrixon."
				})]
			}), /* @__PURE__ */ jsx("div", {
				style: {
					display: "flex",
					flexDirection: "column",
					gap: "16px"
				},
				children: [
					{
						num: "01",
						title: "Zero Tolerance for Sluggish UI",
						axiom: "Speed is not a vanity metric; it is the fundamental foundation of user trust and commercial conversion.",
						detail: "Every interactive view we engineer is profiled for 60 frames per second rendering and sub-100ms API response latency. If a screen stutters on a 4G connection, it does not pass our staging QA review."
					},
					{
						num: "02",
						title: "Architecture Over Quick Hacks",
						axiom: "Convenient shortcuts today become catastrophic enterprise balance sheet liabilities tomorrow.",
						detail: "We enforce domain-driven modular boundaries, strict TypeScript type safety, and atomic transactions. We build systems designed to be handed over cleanly to your in-house engineering team with zero mystery."
					},
					{
						num: "03",
						title: "Radical Engineering Transparency",
						axiom: "Trust is built through visible code commits, reproducible benchmarks, and honest technical auditing.",
						detail: "No smoke and mirrors. Our clients receive direct repository access, automated continuous deployment previews, and unfiltered weekly sprint progress telemetry."
					},
					{
						num: "04",
						title: "Aesthetics as an Engineering Requirement",
						axiom: "Design is not superficial decoration; it is functional clarity, cognitive ease, and brand authority.",
						detail: "A system can be technically sound, but if it looks clunky, users reject it. We apply bespoke typography, rigorous whitespace hierarchy, and subtle micro-interactions to create memorable enterprise products."
					},
					{
						num: "05",
						title: "Privacy & Security by Default",
						axiom: "Data sovereignty and client confidentiality are sacred; they can never be an afterthought.",
						detail: "From 256-bit AES encryption at rest to strict Content Security Policies and zero-knowledge evidence vaults, we treat your business intelligence with institutional defensive paranoia."
					}
				].map((item, idx) => {
					const isHovered = hoveredIdx === idx;
					return /* @__PURE__ */ jsx("div", {
						onMouseEnter: () => {
							setHoveredIdx(idx);
						},
						onMouseLeave: () => {
							setHoveredIdx(null);
						},
						style: {
							background: isLight ? "#ffffff" : "var(--zy-surface-1)",
							border: isHovered ? "1px solid var(--zy-border-hover)" : "1px solid var(--zy-border-subtle)",
							borderRadius: "20px",
							padding: "clamp(24px, 3.5vw, 36px)",
							transition: "all 0.3s ease",
							transform: isHovered ? "translateY(-2px)" : "translateY(0)",
							boxShadow: isHovered && isLight ? "0 12px 36px rgba(0,0,0,0.06)" : isLight ? "0 4px 16px rgba(0,0,0,0.02)" : "none"
						},
						children: /* @__PURE__ */ jsxs("div", {
							style: {
								display: "grid",
								gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
								gap: "24px",
								alignItems: "baseline"
							},
							children: [/* @__PURE__ */ jsxs("div", {
								style: {
									display: "flex",
									alignItems: "baseline",
									gap: "20px"
								},
								children: [/* @__PURE__ */ jsx("span", {
									style: {
										fontSize: "14px",
										fontWeight: 800,
										fontFamily: "monospace",
										color: "var(--zy-text-muted)"
									},
									children: item.num
								}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
									style: {
										fontFamily: "var(--font-heading, \"Space Grotesk\", sans-serif)",
										fontSize: "clamp(20px, 2vw, 24px)",
										fontWeight: 700,
										color: "var(--zy-text-primary)",
										margin: "0 0 8px 0",
										lineHeight: 1.25
									},
									children: item.title
								}), /* @__PURE__ */ jsx("div", {
									style: {
										fontSize: "14px",
										fontWeight: 600,
										color: "var(--zy-text-primary)",
										lineHeight: 1.5
									},
									children: item.axiom
								})] })]
							}), /* @__PURE__ */ jsx("div", {
								style: {
									fontSize: "14px",
									lineHeight: 1.7,
									color: "var(--zy-text-secondary)"
								},
								children: item.detail
							})]
						})
					}, idx);
				})
			})]
		})
	});
}
//#endregion
//#region resources/js/components/about/AboutLeadershipDossier.tsx
function AboutLeadershipDossier() {
	const { theme } = useTheme();
	const isLight = theme === "light";
	return /* @__PURE__ */ jsx("section", {
		id: "leadership",
		style: {
			padding: "110px var(--zy-section-pad-x, 24px)",
			background: "var(--zy-bg)",
			borderBottom: "1px solid var(--zy-border-subtle)",
			transition: "background 0.3s ease, border-color 0.3s ease"
		},
		children: /* @__PURE__ */ jsxs("div", {
			style: {
				maxWidth: "1280px",
				margin: "0 auto"
			},
			children: [/* @__PURE__ */ jsxs("div", {
				style: {
					marginBottom: "64px",
					maxWidth: "780px"
				},
				children: [/* @__PURE__ */ jsx("h2", {
					style: {
						fontFamily: "var(--font-heading, \"Space Grotesk\", sans-serif)",
						fontSize: "clamp(30px, 4vw, 52px)",
						fontWeight: 800,
						lineHeight: 1.15,
						letterSpacing: "-0.025em",
						color: "var(--zy-text-primary)",
						marginBottom: "16px"
					},
					children: "The Architects at the Helm"
				}), /* @__PURE__ */ jsx("p", {
					style: {
						fontSize: "16px",
						color: "var(--zy-text-secondary)",
						lineHeight: 1.6,
						margin: 0
					},
					children: "Hands-on engineers and operators who remain directly embedded in code reviews, client whiteboards, and architecture reviews."
				})]
			}), /* @__PURE__ */ jsx("div", {
				style: {
					display: "grid",
					gridTemplateColumns: "repeat(auto-fit, minmax(320px, 460px))",
					justifyContent: "center",
					gap: "36px",
					maxWidth: "1000px",
					margin: "0 auto"
				},
				children: [{
					name: "Bipin Sahani",
					role: "Founder & Chief Technology Officer",
					domain: "Enterprise Cloud Architecture & Distributed Systems",
					image: "/assets/team/bipin-sahani.png",
					quote: "Great engineering is invisible. When a system can process thousands of orders per minute during a festival rush without dropping a single packet, that is the craft.",
					credentials: [
						"Full-stack distributed systems specialist",
						"Architect of LIS 2.0 clinical diagnostic platform",
						"Pioneer of zero-brokerage land acquisition systems"
					]
				}, {
					name: "Saurav Shandilya",
					role: "Co-founder & Chief Operating Officer",
					domain: "Strategic Expansion & Operational Governance",
					image: "/assets/team/saurav.png",
					quote: "We built Zytrixon to bridge elite engineering with real commercial accountability. Every product must deliver measurable margin growth for our partners.",
					credentials: [
						"Global client relationships across India & MENA",
						"Enterprise SLA governance and vendor compliance",
						"Scalable delivery pipeline strategist"
					]
				}].map((leader, idx) => /* @__PURE__ */ jsxs("div", {
					style: {
						background: isLight ? "#ffffff" : "var(--zy-surface-1)",
						border: "1px solid var(--zy-border-subtle)",
						borderRadius: "24px",
						overflow: "hidden",
						display: "flex",
						flexDirection: "column",
						transition: "all 0.3s ease",
						boxShadow: isLight ? "0 10px 30px rgba(0,0,0,0.03)" : "none"
					},
					onMouseEnter: (e) => {
						e.currentTarget.style.borderColor = "var(--zy-border-hover)";
						e.currentTarget.style.transform = "translateY(-4px)";
					},
					onMouseLeave: (e) => {
						e.currentTarget.style.borderColor = "var(--zy-border-subtle)";
						e.currentTarget.style.transform = "translateY(0)";
					},
					children: [/* @__PURE__ */ jsx("div", {
						style: {
							width: "100%",
							aspectRatio: "4 / 5",
							background: isLight ? "#f1f5f9" : "#08080a",
							position: "relative",
							overflow: "hidden"
						},
						children: /* @__PURE__ */ jsx("img", {
							src: leader.image,
							alt: leader.name,
							style: {
								width: "100%",
								height: "100%",
								objectFit: "cover",
								objectPosition: "top center",
								filter: "none",
								display: "block",
								transition: "transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)"
							}
						})
					}), /* @__PURE__ */ jsxs("div", {
						style: {
							padding: "28px",
							flex: 1,
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between",
							gap: "16px"
						},
						children: [/* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsx("div", {
								style: {
									fontSize: "11px",
									fontWeight: 700,
									textTransform: "uppercase",
									letterSpacing: "0.08em",
									color: "var(--zy-text-muted)",
									fontFamily: "monospace",
									marginBottom: "6px"
								},
								children: leader.domain
							}),
							/* @__PURE__ */ jsx("h3", {
								style: {
									fontFamily: "var(--font-heading, \"Space Grotesk\", sans-serif)",
									fontSize: "26px",
									fontWeight: 800,
									color: "var(--zy-text-primary)",
									margin: "0 0 6px 0",
									lineHeight: 1.2
								},
								children: leader.name
							}),
							/* @__PURE__ */ jsx("div", {
								style: {
									fontSize: "14px",
									fontWeight: 600,
									color: "var(--zy-text-secondary)",
									marginBottom: "16px"
								},
								children: leader.role
							}),
							/* @__PURE__ */ jsxs("blockquote", {
								style: {
									fontSize: "13px",
									fontStyle: "italic",
									lineHeight: 1.6,
									color: "var(--zy-text-primary)",
									paddingLeft: "14px",
									borderLeft: "2px solid var(--zy-border-hover)",
									margin: "0 0 20px 0"
								},
								children: [
									"“",
									leader.quote,
									"”"
								]
							})
						] }), /* @__PURE__ */ jsxs("div", {
							style: {
								borderTop: "1px solid var(--zy-border-subtle)",
								paddingTop: "16px"
							},
							children: [/* @__PURE__ */ jsx("div", {
								style: {
									fontSize: "11px",
									fontWeight: 700,
									textTransform: "uppercase",
									letterSpacing: "0.08em",
									color: "var(--zy-text-muted)",
									marginBottom: "8px"
								},
								children: "Focus Areas:"
							}), /* @__PURE__ */ jsx("ul", {
								style: {
									margin: 0,
									padding: "0 0 0 16px",
									fontSize: "12px",
									color: "var(--zy-text-secondary)",
									lineHeight: 1.6
								},
								children: leader.credentials.map((cred, cIdx) => /* @__PURE__ */ jsx("li", { children: cred }, cIdx))
							})]
						})]
					})]
				}, idx))
			})]
		})
	});
}
//#endregion
//#region resources/js/components/about/AboutMilestonesChronology.tsx
function AboutMilestonesChronology() {
	const { theme } = useTheme();
	const isLight = theme === "light";
	return /* @__PURE__ */ jsx("section", {
		style: {
			padding: "110px var(--zy-section-pad-x, 24px)",
			background: isLight ? "var(--zy-surface-1)" : "var(--zy-bg)",
			borderBottom: "1px solid var(--zy-border-subtle)",
			transition: "background 0.3s ease, border-color 0.3s ease"
		},
		children: /* @__PURE__ */ jsxs("div", {
			style: {
				maxWidth: "1280px",
				margin: "0 auto"
			},
			children: [/* @__PURE__ */ jsxs("div", {
				style: {
					marginBottom: "64px",
					maxWidth: "780px"
				},
				children: [/* @__PURE__ */ jsx("h2", {
					style: {
						fontFamily: "var(--font-heading, \"Space Grotesk\", sans-serif)",
						fontSize: "clamp(30px, 4vw, 52px)",
						fontWeight: 800,
						lineHeight: 1.15,
						letterSpacing: "-0.025em",
						color: "var(--zy-text-primary)",
						marginBottom: "16px"
					},
					children: "Milestones of Relentless Execution"
				}), /* @__PURE__ */ jsx("p", {
					style: {
						fontSize: "16px",
						color: "var(--zy-text-secondary)",
						lineHeight: 1.6,
						margin: 0
					},
					children: "A continuous track record of building, shipping, and stress-testing complex software architectures."
				})]
			}), /* @__PURE__ */ jsx("div", {
				style: {
					position: "relative",
					paddingLeft: "32px",
					borderLeft: isLight ? "2px solid rgba(0,0,0,0.1)" : "2px solid rgba(255,255,255,0.1)",
					display: "flex",
					flexDirection: "column",
					gap: "40px"
				},
				children: [
					{
						year: "Q1 2026",
						title: "Genesis in Patna, Bihar",
						summary: "Zytrixon established with a dedicated engineering center in Patna, Bihar, pioneering mission-critical distributed web APIs, cloud backends, and micro-frontend architectures for enterprise partners.",
						badge: "FOUNDING PHASE"
					},
					{
						year: "Q2 2026",
						title: "High-Concurrency Commerce & HealthTech Overhaul",
						summary: "Engineered sub-second headless commerce storefronts with atomic Redis reservation, and deployed ASTM/HL7 compliant automated clinical diagnostic reporting gateways.",
						badge: "CORE ENGINE DEPLOYMENT"
					},
					{
						year: "Q3 2026",
						title: "Zero-Trust Security & Real Estate Telemetry",
						summary: "Architected zero-knowledge evidence submission suites and direct-to-owner property acquisition engines with transparent RERA verification.",
						badge: "ENTERPRISE GOVERNANCE"
					},
					{
						year: "Q4 2026",
						title: "Autonomous Edge AI & Cognitive Telemetry Grid",
						summary: "Expanding into autonomous multi-tenant agent orchestration and low-latency edge computing pipelines serving institutional clients across 3 continents.",
						badge: "GLOBAL EXPANSION"
					}
				].map((item, idx) => /* @__PURE__ */ jsxs("div", {
					style: { position: "relative" },
					children: [/* @__PURE__ */ jsx("span", { style: {
						position: "absolute",
						left: "-41px",
						top: "4px",
						width: "16px",
						height: "16px",
						borderRadius: "50%",
						background: isLight ? "#0a0a0a" : "#ffffff",
						border: isLight ? "3px solid #ffffff" : "3px solid #000000",
						boxShadow: isLight ? "0 0 0 2px rgba(0,0,0,0.15)" : "0 0 0 2px rgba(255,255,255,0.2)"
					} }), /* @__PURE__ */ jsxs("div", {
						style: {
							background: isLight ? "#ffffff" : "var(--zy-surface-1)",
							border: "1px solid var(--zy-border-subtle)",
							borderRadius: "18px",
							padding: "24px 28px",
							transition: "all 0.25s ease",
							boxShadow: isLight ? "0 4px 20px rgba(0,0,0,0.03)" : "none"
						},
						onMouseEnter: (e) => {
							e.currentTarget.style.borderColor = "var(--zy-border-hover)";
						},
						onMouseLeave: (e) => {
							e.currentTarget.style.borderColor = "var(--zy-border-subtle)";
						},
						children: [
							/* @__PURE__ */ jsxs("div", {
								style: {
									display: "flex",
									alignItems: "center",
									justifyContent: "space-between",
									flexWrap: "wrap",
									gap: "12px",
									marginBottom: "10px"
								},
								children: [/* @__PURE__ */ jsx("span", {
									style: {
										fontFamily: "monospace",
										fontSize: "13px",
										fontWeight: 800,
										color: "var(--zy-text-primary)"
									},
									children: item.year
								}), /* @__PURE__ */ jsx("span", {
									style: {
										fontSize: "10px",
										fontWeight: 700,
										letterSpacing: "0.08em",
										textTransform: "uppercase",
										padding: "2px 8px",
										borderRadius: "10px",
										background: isLight ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.06)",
										color: "var(--zy-text-secondary)"
									},
									children: item.badge
								})]
							}),
							/* @__PURE__ */ jsx("h3", {
								style: {
									fontFamily: "var(--font-heading, \"Space Grotesk\", sans-serif)",
									fontSize: "18px",
									fontWeight: 700,
									color: "var(--zy-text-primary)",
									margin: "0 0 8px 0"
								},
								children: item.title
							}),
							/* @__PURE__ */ jsx("p", {
								style: {
									fontSize: "14px",
									color: "var(--zy-text-secondary)",
									lineHeight: 1.6,
									margin: 0
								},
								children: item.summary
							})
						]
					})]
				}, idx))
			})]
		})
	});
}
//#endregion
//#region resources/js/components/about/AboutTechConviction.tsx
function AboutTechConviction() {
	const { theme } = useTheme();
	const isLight = theme === "light";
	const [activeStack, setActiveStack] = useState(0);
	const stackItems = [
		{
			category: "Frontend Interface",
			tech: "React 19 & TypeScript",
			alternative: "Legacy SPA / Vanilla JS",
			conviction: "Strict compile-time type safety guarantees that component props and API payloads remain synchronized. React 19 Server Components drastically reduce client bundle footprint while boosting Core Web Vitals to 100/100.",
			benchmarks: [
				"Zero runtime type errors in production",
				"Sub-second first contentful paint",
				"Unified design system tokens"
			]
		},
		{
			category: "API Engine & Security",
			tech: "Laravel 12 API Core",
			alternative: "Ad-hoc Express / Python Flask",
			conviction: "Enterprise-grade transactional integrity, built-in rate limiting, cryptographically signed URLs, and native queue workers for background jobs. It delivers banking-grade reliability without maintaining 50 fragile micro-libraries.",
			benchmarks: [
				"Native queue prioritization",
				"Built-in CSRF, SQL injection & XSS shielding",
				"Sanctum & OAuth2 token security"
			]
		},
		{
			category: "Concurrency & Caching",
			tech: "Redis Atomic Clusters",
			alternative: "Direct SQL Transaction Locks",
			conviction: "Prevents database lock contention during 10,000+ RPS drops. In-memory atomic counters ensure items in a cart are never oversold, and customer checkout states are verified in sub-5ms latency.",
			benchmarks: [
				"< 2ms read/write memory response",
				"Atomic mutex locks prevent overselling",
				"Sub-second session invalidation"
			]
		},
		{
			category: "Relational Persistence",
			tech: "PostgreSQL 16 & TimescaleDB",
			alternative: "NoSQL Unstructured DBs",
			conviction: "ACID compliance guarantees financial ledgers, land mutations, and patient pathology records are immutable. TimescaleDB hypertable chunking allows querying tens of millions of sensor telemetry points instantaneously.",
			benchmarks: [
				"Strict ACID transaction guarantees",
				"Partitioned time-series tables",
				"Encrypted data-at-rest persistence"
			]
		},
		{
			category: "Global Edge Ingress",
			tech: "Cloudflare Edge & AWS S3",
			alternative: "Single-Origin Server Hosting",
			conviction: "Assets, media, and cached catalog responses are terminated at 300+ global edge locations. Even during massive DDoS surges or viral social spikes, your origin database remains shielded behind redundant edge caches.",
			benchmarks: [
				"Sub-50ms global TTFB delivery",
				"Automated DDoS & bot scraping mitigation",
				"99.999% cloud storage durability"
			]
		}
	];
	return /* @__PURE__ */ jsx("section", {
		id: "tech",
		style: {
			padding: "110px var(--zy-section-pad-x, 24px)",
			background: "var(--zy-bg)",
			borderBottom: "1px solid var(--zy-border-subtle)",
			transition: "background 0.3s ease, border-color 0.3s ease"
		},
		children: /* @__PURE__ */ jsxs("div", {
			style: {
				maxWidth: "1280px",
				margin: "0 auto"
			},
			children: [/* @__PURE__ */ jsxs("div", {
				style: {
					marginBottom: "64px",
					maxWidth: "780px"
				},
				children: [/* @__PURE__ */ jsx("h2", {
					style: {
						fontFamily: "var(--font-heading, \"Space Grotesk\", sans-serif)",
						fontSize: "clamp(30px, 4vw, 52px)",
						fontWeight: 800,
						lineHeight: 1.15,
						letterSpacing: "-0.025em",
						color: "var(--zy-text-primary)",
						marginBottom: "16px"
					},
					children: "The Technology Conviction Index"
				}), /* @__PURE__ */ jsx("p", {
					style: {
						fontSize: "16px",
						color: "var(--zy-text-secondary)",
						lineHeight: 1.6,
						margin: 0
					},
					children: "We do not pick technologies based on Twitter hype or junior developer trends. We choose battle-tested tools with proven mathematical reliability and enterprise longevity."
				})]
			}), /* @__PURE__ */ jsxs("div", {
				style: {
					display: "grid",
					gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
					gap: "32px",
					alignItems: "start"
				},
				children: [/* @__PURE__ */ jsx("div", {
					style: {
						display: "flex",
						flexDirection: "column",
						gap: "12px"
					},
					children: stackItems.map((item, idx) => {
						const isSelected = activeStack === idx;
						return /* @__PURE__ */ jsxs("button", {
							type: "button",
							onClick: () => {
								setActiveStack(idx);
							},
							style: {
								textAlign: "left",
								padding: "20px 24px",
								borderRadius: "16px",
								background: isSelected ? isLight ? "#ffffff" : "var(--zy-surface-1)" : "transparent",
								border: isSelected ? "1px solid var(--zy-border-hover)" : "1px solid var(--zy-border-subtle)",
								cursor: "pointer",
								transition: "all 0.2s ease",
								boxShadow: isSelected && isLight ? "0 8px 24px rgba(0,0,0,0.04)" : "none"
							},
							children: [/* @__PURE__ */ jsx("div", {
								style: {
									fontSize: "11px",
									fontWeight: 700,
									letterSpacing: "0.08em",
									textTransform: "uppercase",
									color: isSelected ? "var(--zy-text-primary)" : "var(--zy-text-muted)",
									marginBottom: "6px"
								},
								children: item.category
							}), /* @__PURE__ */ jsx("div", {
								style: {
									fontSize: "17px",
									fontWeight: 800,
									color: isSelected ? "var(--zy-text-primary)" : "var(--zy-text-secondary)"
								},
								children: item.tech
							})]
						}, idx);
					})
				}), /* @__PURE__ */ jsxs("div", {
					style: {
						background: isLight ? "#ffffff" : "var(--zy-surface-1)",
						border: "1px solid var(--zy-border-subtle)",
						borderRadius: "24px",
						padding: "clamp(28px, 4vw, 44px)",
						boxShadow: isLight ? "0 12px 36px rgba(0,0,0,0.04)" : "none"
					},
					children: [
						/* @__PURE__ */ jsxs("div", {
							style: {
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								flexWrap: "wrap",
								gap: "12px",
								marginBottom: "20px"
							},
							children: [/* @__PURE__ */ jsxs("span", {
								style: {
									fontSize: "12px",
									fontWeight: 800,
									textTransform: "uppercase",
									letterSpacing: "0.08em",
									color: "var(--zy-text-muted)",
									fontFamily: "monospace"
								},
								children: ["LAYER // ", stackItems[activeStack].category]
							}), /* @__PURE__ */ jsxs("span", {
								style: {
									fontSize: "11px",
									padding: "4px 10px",
									borderRadius: "12px",
									background: isLight ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.06)",
									color: "var(--zy-text-secondary)"
								},
								children: [
									"Chosen over:",
									" ",
									stackItems[activeStack].alternative
								]
							})]
						}),
						/* @__PURE__ */ jsx("h3", {
							style: {
								fontFamily: "var(--font-heading, \"Space Grotesk\", sans-serif)",
								fontSize: "clamp(24px, 2.5vw, 32px)",
								fontWeight: 800,
								color: "var(--zy-text-primary)",
								marginBottom: "16px",
								lineHeight: 1.2
							},
							children: stackItems[activeStack].tech
						}),
						/* @__PURE__ */ jsx("p", {
							style: {
								fontSize: "15px",
								lineHeight: 1.75,
								color: "var(--zy-text-secondary)",
								marginBottom: "28px"
							},
							children: stackItems[activeStack].conviction
						}),
						/* @__PURE__ */ jsxs("div", {
							style: {
								borderTop: "1px solid var(--zy-border-subtle)",
								paddingTop: "20px"
							},
							children: [/* @__PURE__ */ jsx("div", {
								style: {
									fontSize: "11px",
									fontWeight: 700,
									letterSpacing: "0.08em",
									textTransform: "uppercase",
									color: "var(--zy-text-muted)",
									marginBottom: "12px"
								},
								children: "Architecture Metrics:"
							}), /* @__PURE__ */ jsx("div", {
								style: {
									display: "flex",
									flexDirection: "column",
									gap: "8px"
								},
								children: stackItems[activeStack].benchmarks.map((bm, bIdx) => /* @__PURE__ */ jsxs("div", {
									style: {
										display: "flex",
										alignItems: "center",
										gap: "10px",
										fontSize: "13px",
										fontWeight: 600,
										color: "var(--zy-text-primary)"
									},
									children: [/* @__PURE__ */ jsx("span", {
										style: { color: "#10b981" },
										children: "✓"
									}), /* @__PURE__ */ jsx("span", { children: bm })]
								}, bIdx))
							})]
						})
					]
				})]
			})]
		})
	});
}
//#endregion
//#region resources/js/components/about/AboutDeliveryLifecycle.tsx
function AboutDeliveryLifecycle() {
	const { theme } = useTheme();
	const isLight = theme === "light";
	return /* @__PURE__ */ jsx("section", {
		id: "lifecycle",
		style: {
			padding: "110px var(--zy-section-pad-x, 24px)",
			background: isLight ? "var(--zy-surface-1)" : "var(--zy-bg)",
			borderBottom: "1px solid var(--zy-border-subtle)",
			transition: "background 0.3s ease, border-color 0.3s ease"
		},
		children: /* @__PURE__ */ jsxs("div", {
			style: {
				maxWidth: "1280px",
				margin: "0 auto"
			},
			children: [/* @__PURE__ */ jsxs("div", {
				style: {
					marginBottom: "64px",
					maxWidth: "780px"
				},
				children: [/* @__PURE__ */ jsx("h2", {
					style: {
						fontFamily: "var(--font-heading, \"Space Grotesk\", sans-serif)",
						fontSize: "clamp(30px, 4vw, 52px)",
						fontWeight: 800,
						lineHeight: 1.15,
						letterSpacing: "-0.025em",
						color: "var(--zy-text-primary)",
						marginBottom: "16px"
					},
					children: "The 6-Stage Delivery Protocol"
				}), /* @__PURE__ */ jsx("p", {
					style: {
						fontSize: "16px",
						color: "var(--zy-text-secondary)",
						lineHeight: 1.6,
						margin: 0
					},
					children: "Enterprise software cannot depend on luck or informal developer chat logs. We enforce an immutable, six-stage engineering lifecycle designed for absolute predictability."
				})]
			}), /* @__PURE__ */ jsx("div", {
				style: {
					display: "grid",
					gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
					gap: "24px"
				},
				children: [
					{
						step: "01",
						time: "Days 1 – 7",
						title: "Architecture Discovery & Threat Modeling",
						desc: "We inspect your database bottlenecks, API dependencies, compliance constraints, and peak concurrency requirements before writing a single line of production code."
					},
					{
						step: "02",
						time: "Days 8 – 18",
						title: "Bespoke Design System & Interactive Prototype",
						desc: "We construct an atomic UI token system in Figma and code. Every button, input state, modal, and high-resolution workflow is prototyped for 60fps responsiveness."
					},
					{
						step: "03",
						time: "Days 19 – 30",
						title: "Schema Partitioning & Core API Engine",
						desc: "Building rock-solid Laravel API routes, Redis caching pipelines, transactional database migrations, and role-based permissions with strict automated tests."
					},
					{
						step: "04",
						time: "Days 31 – 45",
						title: "High-Throughput Frontend & Micro-Interactions",
						desc: "Crafting responsive React 19 views with sub-second page loads, server-rendered SEO tags, intuitive drag-and-drop workflows, and zero-layout-shift layouts."
					},
					{
						step: "05",
						time: "Days 46 – 55",
						title: "Chaos Testing & Penetration Audits",
						desc: "Simulating 20,000+ simultaneous checkout requests, SQL injection fuzzing, cross-site script penetration tests, and cross-browser mobile regression tests."
					},
					{
						step: "06",
						time: "Day 60+",
						title: "Zero-Downtime Launch & Continuous Telemetry",
						desc: "Deploying with blue-green zero-downtime swaps, edge CDN cache warmup, 24/7 server health telemetry, and formal codebase handover with full documentation."
					}
				].map((st, idx) => /* @__PURE__ */ jsx("div", {
					style: {
						background: isLight ? "#ffffff" : "var(--zy-surface-1)",
						border: "1px solid var(--zy-border-subtle)",
						borderRadius: "20px",
						padding: "32px 28px",
						transition: "all 0.25s ease",
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
						boxShadow: isLight ? "0 4px 18px rgba(0,0,0,0.03)" : "none"
					},
					onMouseEnter: (e) => {
						e.currentTarget.style.borderColor = "var(--zy-border-hover)";
						e.currentTarget.style.transform = "translateY(-3px)";
					},
					onMouseLeave: (e) => {
						e.currentTarget.style.borderColor = "var(--zy-border-subtle)";
						e.currentTarget.style.transform = "translateY(0)";
					},
					children: /* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsxs("div", {
							style: {
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								marginBottom: "16px"
							},
							children: [/* @__PURE__ */ jsxs("span", {
								style: {
									fontFamily: "monospace",
									fontSize: "18px",
									fontWeight: 800,
									color: "var(--zy-text-primary)"
								},
								children: ["STAGE ", st.step]
							}), /* @__PURE__ */ jsx("span", {
								style: {
									fontSize: "11px",
									fontWeight: 700,
									padding: "2px 8px",
									borderRadius: "10px",
									background: isLight ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.06)",
									color: "var(--zy-text-secondary)"
								},
								children: st.time
							})]
						}),
						/* @__PURE__ */ jsx("h3", {
							style: {
								fontFamily: "var(--font-heading, \"Space Grotesk\", sans-serif)",
								fontSize: "18px",
								fontWeight: 700,
								color: "var(--zy-text-primary)",
								marginBottom: "12px",
								lineHeight: 1.3
							},
							children: st.title
						}),
						/* @__PURE__ */ jsx("p", {
							style: {
								fontSize: "14px",
								lineHeight: 1.65,
								color: "var(--zy-text-secondary)",
								margin: 0
							},
							children: st.desc
						})
					] })
				}, idx))
			})]
		})
	});
}
//#endregion
//#region resources/js/components/about/AboutSecurityGovernance.tsx
function AboutSecurityGovernance() {
	const { theme } = useTheme();
	const isLight = theme === "light";
	return /* @__PURE__ */ jsx("section", {
		style: {
			padding: "110px var(--zy-section-pad-x, 24px)",
			background: "var(--zy-bg)",
			borderBottom: "1px solid var(--zy-border-subtle)",
			transition: "background 0.3s ease, border-color 0.3s ease"
		},
		children: /* @__PURE__ */ jsxs("div", {
			style: {
				maxWidth: "1280px",
				margin: "0 auto"
			},
			children: [/* @__PURE__ */ jsxs("div", {
				style: {
					marginBottom: "64px",
					maxWidth: "780px"
				},
				children: [/* @__PURE__ */ jsx("h2", {
					style: {
						fontFamily: "var(--font-heading, \"Space Grotesk\", sans-serif)",
						fontSize: "clamp(30px, 4vw, 52px)",
						fontWeight: 800,
						lineHeight: 1.15,
						letterSpacing: "-0.025em",
						color: "var(--zy-text-primary)",
						marginBottom: "16px"
					},
					children: "Zero-Trust Security & Data Sovereignty"
				}), /* @__PURE__ */ jsx("p", {
					style: {
						fontSize: "16px",
						color: "var(--zy-text-secondary)",
						lineHeight: 1.6,
						margin: 0
					},
					children: "We engineer software with the baseline assumption that perimeter networks are hostile. Your institutional data is protected by continuous verification, least-privilege access, and cryptographic defense."
				})]
			}), /* @__PURE__ */ jsx("div", {
				style: {
					display: "grid",
					gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
					gap: "24px"
				},
				children: [
					{
						title: "AES-256 GCM Encryption",
						standard: "CRYPTOGRAPHIC STORAGE",
						desc: "Sensitive client data, forensic evidence logs, and patient records are encrypted at rest using military-grade AES-256 GCM with rotating hardware master keys."
					},
					{
						title: "OWASP Top-10 Defense Architecture",
						standard: "APPLICATION SHIELDING",
						desc: "Strict server-side validation, parameterized queries, CSRF token validation, Content-Security-Policy headers, and rate-limiting against brute force attacks."
					},
					{
						title: "Zero-Knowledge Access Vaults",
						standard: "CONFIDENTIALITY",
						desc: "Implemented for investigation agencies and legal portals. Confidential case dossiers are encrypted before hitting disk so even DB admins cannot inspect plaintext contents."
					},
					{
						title: "HIPAA & HL7 Compliance Ready",
						standard: "HEALTHTECH PRIVACY",
						desc: "Built into our pathology LIS engine. Automated audit trails, role-based pathologist digital signatures, and tamper-proof QR watermarks on all exported health documents."
					}
				].map((p, idx) => /* @__PURE__ */ jsxs("div", {
					style: {
						background: isLight ? "#ffffff" : "var(--zy-surface-1)",
						border: "1px solid var(--zy-border-subtle)",
						borderRadius: "20px",
						padding: "28px 24px",
						transition: "all 0.25s ease",
						boxShadow: isLight ? "0 4px 18px rgba(0,0,0,0.03)" : "none"
					},
					onMouseEnter: (e) => {
						e.currentTarget.style.borderColor = "var(--zy-border-hover)";
						e.currentTarget.style.transform = "translateY(-3px)";
					},
					onMouseLeave: (e) => {
						e.currentTarget.style.borderColor = "var(--zy-border-subtle)";
						e.currentTarget.style.transform = "translateY(0)";
					},
					children: [
						/* @__PURE__ */ jsx("span", {
							style: {
								fontFamily: "monospace",
								fontSize: "11px",
								fontWeight: 700,
								letterSpacing: "0.08em",
								textTransform: "uppercase",
								color: "var(--zy-text-muted)",
								display: "block",
								marginBottom: "12px"
							},
							children: p.standard
						}),
						/* @__PURE__ */ jsx("h3", {
							style: {
								fontFamily: "var(--font-heading, \"Space Grotesk\", sans-serif)",
								fontSize: "18px",
								fontWeight: 700,
								color: "var(--zy-text-primary)",
								marginBottom: "12px",
								lineHeight: 1.3
							},
							children: p.title
						}),
						/* @__PURE__ */ jsx("p", {
							style: {
								fontSize: "13px",
								lineHeight: 1.65,
								color: "var(--zy-text-secondary)",
								margin: 0
							},
							children: p.desc
						})
					]
				}, idx))
			})]
		})
	});
}
//#endregion
//#region resources/js/components/about/AboutInnovationLab.tsx
function AboutInnovationLab() {
	const { theme } = useTheme();
	const isLight = theme === "light";
	const [activeLabId, setActiveLabId] = useState("edge-ai");
	const labProjects = [
		{
			id: "edge-ai",
			tag: "MACHINE INTELLIGENCE",
			title: "Local Edge Agent Runtimes & SLM Orchestration",
			status: "ACTIVE ALPHA",
			cycle: "Q1-Q2 2026",
			description: "Prototyping on-device Small Language Model (SLM) execution utilizing WebAssembly and WebGPU kernels. Bypasses third-party cloud API roundtrips for zero-latency localized reasoning, medical triage classification, and offline-first edge workflows.",
			specifications: [
				"WASM + WebGPU client-side execution pipeline",
				"Zero-data leakage on sensitive client premises",
				"Quantized 4-bit weights with memory footprint < 1.2GB"
			],
			benchmark: {
				metric: "Time to First Token (TTFT)",
				value: "14ms on consumer M-series & RTX chips"
			}
		},
		{
			id: "ws-fabric",
			tag: "REAL-TIME SYSTEMS",
			title: "High-Density Distributed WebSocket Fabric",
			status: "STABLE LABS",
			cycle: "CONTINUOUS R&D",
			description: "An ultra-low overhead binary messaging broker designed for sub-millisecond telemetry propagation across 500,000+ concurrent state subscriptions. Engineered specifically for high-frequency auction bids, live medical monitors, and logistics tracking.",
			specifications: [
				"MessagePack binary serialization over JSON",
				"Shared Redis Cluster backplane with geo-aware cluster routing",
				"Automatic packet deduplication and reconnection backoff"
			],
			benchmark: {
				metric: "Internal broker propagation",
				value: "< 4.2ms end-to-end latency"
			}
		},
		{
			id: "webgl-shader",
			tag: "SPATIAL & GRAPH GRAPHICS",
			title: "Hardware-Accelerated WebGL & Canvas Graph Shaders",
			status: "PRODUCTION READY",
			cycle: "DEPLOYED TO CLIENTS",
			description: "Custom GLSL fragment and vertex shaders engineered to render 50,000+ node relationship graphs and architectural 3D master plans at a locked 60 frames per second without locking the main browser thread.",
			specifications: [
				"Instanced mesh drawing reducing CPU draw calls to 1",
				"Spatial quadtree partitioning for instantaneous raycast picking",
				"Sub-pixel anti-aliasing with dynamic resolution scaling"
			],
			benchmark: {
				metric: "Sustained UI frame rate",
				value: "60.0 FPS with 50,000 nodes"
			}
		},
		{
			id: "codemod-cli",
			tag: "DEVELOPER INFRASTRUCTURE",
			title: "Autonomous AST Modernization & Codemod Engines",
			status: "INTERNAL EXPERIMENT",
			cycle: "DEV TOOLS",
			description: "Internal syntax tree manipulation tools that parse legacy monolithic SQL queries and aging controllers, converting them into type-safe TypeScript schemas and normalized database migrations with minimal human intervention.",
			specifications: [
				"Babel and SWC AST parsing with semantic scope analysis",
				"Automated unit test stub generation for every rewritten routine",
				"Diff generation with zero hallucinated type signatures"
			],
			benchmark: {
				metric: "Syntactic migration accuracy",
				value: "99.4% zero-error code output"
			}
		}
	];
	const activeProject = labProjects.find((p) => p.id === activeLabId) || labProjects[0];
	return /* @__PURE__ */ jsx("section", {
		id: "innovation-lab",
		style: {
			padding: "110px var(--zy-section-pad-x, 24px)",
			background: "var(--zy-bg)",
			borderBottom: "1px solid var(--zy-border-subtle)",
			transition: "background 0.3s ease, border-color 0.3s ease"
		},
		children: /* @__PURE__ */ jsxs("div", {
			style: {
				maxWidth: "1280px",
				margin: "0 auto"
			},
			children: [
				/* @__PURE__ */ jsxs("div", {
					style: {
						marginBottom: "64px",
						maxWidth: "820px"
					},
					children: [/* @__PURE__ */ jsx("h2", {
						style: {
							fontFamily: "var(--font-heading, \"Space Grotesk\", sans-serif)",
							fontSize: "clamp(30px, 4vw, 52px)",
							fontWeight: 800,
							lineHeight: 1.15,
							letterSpacing: "-0.03em",
							color: "var(--zy-text-primary)",
							marginBottom: "20px"
						},
						children: "Prototyping tomorrow's infrastructure before the industry realizes it is needed."
					}), /* @__PURE__ */ jsx("p", {
						style: {
							fontSize: "16px",
							lineHeight: 1.7,
							color: "var(--zy-text-secondary)"
						},
						children: "We invest 15% of our engineering bandwidth into an internal R&D incubator. When our enterprise partners encounter exponential load or emerging AI paradigms, we don't scramble to research—we deploy tested internal prototypes into battle."
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					style: {
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
						gap: "32px",
						alignItems: "start"
					},
					children: [/* @__PURE__ */ jsx("div", {
						style: {
							display: "flex",
							flexDirection: "column",
							gap: "12px"
						},
						children: labProjects.map((project, idx) => {
							const isSelected = project.id === activeLabId;
							return /* @__PURE__ */ jsxs("button", {
								type: "button",
								onClick: () => {
									setActiveLabId(project.id);
								},
								style: {
									textAlign: "left",
									padding: "20px 24px",
									borderRadius: "12px",
									border: isSelected ? isLight ? "1px solid #111111" : "1px solid #ffffff" : "1px solid var(--zy-border-subtle)",
									background: isSelected ? isLight ? "#f4f4f5" : "var(--zy-surface-2)" : isLight ? "#ffffff" : "var(--zy-surface-1)",
									cursor: "pointer",
									transition: "all 0.2s ease"
								},
								children: [/* @__PURE__ */ jsxs("div", {
									style: {
										display: "flex",
										justifyContent: "space-between",
										alignItems: "center",
										marginBottom: "8px"
									},
									children: [/* @__PURE__ */ jsxs("span", {
										style: {
											fontSize: "10px",
											fontFamily: "monospace",
											fontWeight: 700,
											letterSpacing: "0.1em",
											color: "var(--zy-text-muted)"
										},
										children: [
											"EXP-0",
											idx + 1,
											" // ",
											project.tag
										]
									}), /* @__PURE__ */ jsx("span", {
										style: {
											fontSize: "9px",
											fontFamily: "monospace",
											fontWeight: 700,
											padding: "2px 8px",
											borderRadius: "4px",
											border: "1px solid var(--zy-border-subtle)",
											color: "var(--zy-text-secondary)",
											background: isLight ? "rgba(0,0,0,0.03)" : "rgba(255,255,255,0.04)"
										},
										children: project.status
									})]
								}), /* @__PURE__ */ jsx("div", {
									style: {
										fontFamily: "var(--font-heading, \"Space Grotesk\", sans-serif)",
										fontSize: "16px",
										fontWeight: 700,
										color: "var(--zy-text-primary)",
										lineHeight: 1.35
									},
									children: project.title
								})]
							}, project.id);
						})
					}), /* @__PURE__ */ jsxs("div", {
						style: {
							padding: "36px",
							borderRadius: "16px",
							border: "1px solid var(--zy-border-subtle)",
							background: isLight ? "#fcfcfd" : "var(--zy-surface-1)",
							display: "flex",
							flexDirection: "column",
							gap: "24px"
						},
						children: [
							/* @__PURE__ */ jsxs("div", {
								style: {
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center",
									flexWrap: "wrap",
									gap: "12px",
									paddingBottom: "18px",
									borderBottom: "1px solid var(--zy-border-subtle)"
								},
								children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("span", {
									style: {
										fontSize: "11px",
										fontFamily: "monospace",
										fontWeight: 700,
										letterSpacing: "0.12em",
										textTransform: "uppercase",
										color: "var(--zy-text-muted)"
									},
									children: ["R&D SPRINT CYCLE: ", activeProject.cycle]
								}), /* @__PURE__ */ jsx("h3", {
									style: {
										fontFamily: "var(--font-heading, \"Space Grotesk\", sans-serif)",
										fontSize: "22px",
										fontWeight: 800,
										color: "var(--zy-text-primary)",
										marginTop: "4px"
									},
									children: activeProject.title
								})] }), /* @__PURE__ */ jsx("div", {
									style: {
										fontFamily: "monospace",
										fontSize: "11px",
										fontWeight: 700,
										padding: "6px 12px",
										borderRadius: "6px",
										background: isLight ? "#111111" : "#ffffff",
										color: isLight ? "#ffffff" : "#000000"
									},
									children: activeProject.status
								})]
							}),
							/* @__PURE__ */ jsx("p", {
								style: {
									fontSize: "15px",
									lineHeight: 1.75,
									color: "var(--zy-text-secondary)"
								},
								children: activeProject.description
							}),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
								style: {
									fontSize: "11px",
									fontFamily: "monospace",
									fontWeight: 700,
									letterSpacing: "0.1em",
									color: "var(--zy-text-muted)",
									marginBottom: "12px",
									textTransform: "uppercase"
								},
								children: "Engineering Specifications"
							}), /* @__PURE__ */ jsx("div", {
								style: {
									display: "flex",
									flexDirection: "column",
									gap: "10px"
								},
								children: activeProject.specifications.map((spec, i) => /* @__PURE__ */ jsxs("div", {
									style: {
										display: "flex",
										alignItems: "baseline",
										gap: "12px",
										fontSize: "13px",
										color: "var(--zy-text-primary)",
										lineHeight: 1.5
									},
									children: [/* @__PURE__ */ jsxs("span", {
										style: {
											fontFamily: "monospace",
											fontSize: "11px",
											color: "var(--zy-text-muted)",
											fontWeight: 700
										},
										children: [
											"0",
											i + 1,
											"."
										]
									}), /* @__PURE__ */ jsx("span", { children: spec })]
								}, i))
							})] }),
							/* @__PURE__ */ jsxs("div", {
								style: {
									marginTop: "12px",
									padding: "20px 24px",
									borderRadius: "10px",
									border: "1px solid var(--zy-border-subtle)",
									background: isLight ? "#ffffff" : "var(--zy-surface-2)"
								},
								children: [/* @__PURE__ */ jsxs("div", {
									style: {
										fontSize: "10px",
										fontFamily: "monospace",
										fontWeight: 700,
										letterSpacing: "0.12em",
										color: "var(--zy-text-muted)",
										textTransform: "uppercase",
										marginBottom: "4px"
									},
									children: [
										"Verified Benchmark Metric —",
										" ",
										activeProject.benchmark.metric
									]
								}), /* @__PURE__ */ jsx("div", {
									style: {
										fontFamily: "var(--font-heading, \"Space Grotesk\", sans-serif)",
										fontSize: "18px",
										fontWeight: 800,
										color: "var(--zy-text-primary)"
									},
									children: activeProject.benchmark.value
								})]
							})
						]
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					style: {
						marginTop: "48px",
						padding: "24px 32px",
						borderRadius: "12px",
						border: "1px dashed var(--zy-border-subtle)",
						background: isLight ? "rgba(0,0,0,0.015)" : "rgba(255,255,255,0.02)",
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						flexWrap: "wrap",
						gap: "16px"
					},
					children: [/* @__PURE__ */ jsxs("div", {
						style: { maxWidth: "720px" },
						children: [/* @__PURE__ */ jsx("div", {
							style: {
								fontSize: "14px",
								fontWeight: 700,
								color: "var(--zy-text-primary)",
								marginBottom: "4px"
							},
							children: "Open Source & Upstream Responsibility"
						}), /* @__PURE__ */ jsx("div", {
							style: {
								fontSize: "13px",
								color: "var(--zy-text-secondary)",
								lineHeight: 1.6
							},
							children: "We actively publish bug reproductions, open pull requests, and contribute utilities back to the React, Laravel, and PostgreSQL ecosystems that form the bedrock of global software."
						})]
					}), /* @__PURE__ */ jsx("a", {
						href: "https://github.com/bipinsahani786",
						target: "_blank",
						rel: "noreferrer",
						style: {
							fontFamily: "monospace",
							fontSize: "12px",
							fontWeight: 700,
							padding: "10px 18px",
							borderRadius: "8px",
							border: "1px solid var(--zy-border-subtle)",
							color: "var(--zy-text-primary)",
							textDecoration: "none",
							background: isLight ? "#ffffff" : "var(--zy-surface-1)",
							whiteSpace: "nowrap"
						},
						children: "GITHUB / BIPINSAHANI786 →"
					})]
				})
			]
		})
	});
}
//#endregion
//#region resources/js/components/about/AboutGlobalPresence.tsx
function AboutGlobalPresence() {
	const { theme } = useTheme();
	const isLight = theme === "light";
	const [times, setTimes] = useState({});
	const timezones = [
		{
			city: "Patna",
			region: "India HQ",
			tz: "Asia/Kolkata",
			utcOffset: "UTC+5:30",
			primary: true
		},
		{
			city: "New Delhi",
			region: "NCR Hub",
			tz: "Asia/Kolkata",
			utcOffset: "UTC+5:30"
		},
		{
			city: "Dubai",
			region: "Gulf / EMEA",
			tz: "Asia/Dubai",
			utcOffset: "UTC+4:00"
		},
		{
			city: "London",
			region: "Western Europe",
			tz: "Europe/London",
			utcOffset: "UTC+1:00"
		},
		{
			city: "New York",
			region: "North America",
			tz: "America/New_York",
			utcOffset: "UTC-4:00"
		}
	];
	useEffect(() => {
		const updateClocks = () => {
			const now = /* @__PURE__ */ new Date();
			const formatted = {};
			timezones.forEach((t) => {
				try {
					formatted[t.city] = now.toLocaleTimeString("en-US", {
						timeZone: t.tz,
						hour12: false,
						hour: "2-digit",
						minute: "2-digit",
						second: "2-digit"
					});
				} catch {
					formatted[t.city] = "12:00:00";
				}
			});
			setTimes(formatted);
		};
		updateClocks();
		const interval = setInterval(updateClocks, 1e3);
		return () => {
			clearInterval(interval);
		};
	}, []);
	return /* @__PURE__ */ jsx("section", {
		id: "global-presence",
		style: {
			padding: "110px var(--zy-section-pad-x, 24px)",
			background: "var(--zy-bg)",
			borderBottom: "1px solid var(--zy-border-subtle)",
			transition: "background 0.3s ease, border-color 0.3s ease"
		},
		children: /* @__PURE__ */ jsxs("div", {
			style: {
				maxWidth: "1280px",
				margin: "0 auto"
			},
			children: [
				/* @__PURE__ */ jsxs("div", {
					style: {
						marginBottom: "64px",
						maxWidth: "820px"
					},
					children: [/* @__PURE__ */ jsx("h2", {
						style: {
							fontFamily: "var(--font-heading, \"Space Grotesk\", sans-serif)",
							fontSize: "clamp(30px, 4vw, 52px)",
							fontWeight: 800,
							lineHeight: 1.15,
							letterSpacing: "-0.03em",
							color: "var(--zy-text-primary)",
							marginBottom: "20px"
						},
						children: "Rooted in Bihar. Synchronized across global enterprise timezones."
					}), /* @__PURE__ */ jsx("p", {
						style: {
							fontSize: "16px",
							lineHeight: 1.7,
							color: "var(--zy-text-secondary)"
						},
						children: "We dismantled the outdated myth that mission-critical engineering requires expensive tier-1 metro overheads. By establishing our core engineering sanctuary in Patna and maintaining an NCR connectivity hub, we achieve relentless focus, superior talent retention, and 24/7 global operational agility."
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					style: {
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
						gap: "16px",
						marginBottom: "48px"
					},
					children: timezones.map((tz) => /* @__PURE__ */ jsxs("div", {
						style: {
							padding: "18px 20px",
							borderRadius: "12px",
							border: tz.primary ? isLight ? "1px solid #111111" : "1px solid #ffffff" : "1px solid var(--zy-border-subtle)",
							background: isLight ? "#ffffff" : "var(--zy-surface-1)",
							display: "flex",
							flexDirection: "column",
							gap: "6px"
						},
						children: [
							/* @__PURE__ */ jsxs("div", {
								style: {
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center"
								},
								children: [/* @__PURE__ */ jsx("span", {
									style: {
										fontFamily: "var(--font-heading, \"Space Grotesk\", sans-serif)",
										fontSize: "14px",
										fontWeight: 700,
										color: "var(--zy-text-primary)"
									},
									children: tz.city
								}), /* @__PURE__ */ jsx("span", {
									style: {
										fontSize: "10px",
										fontFamily: "monospace",
										color: "var(--zy-text-muted)"
									},
									children: tz.utcOffset
								})]
							}),
							/* @__PURE__ */ jsx("div", {
								style: {
									fontFamily: "monospace",
									fontSize: "20px",
									fontWeight: 700,
									letterSpacing: "0.05em",
									color: "var(--zy-text-primary)"
								},
								children: times[tz.city] || "--:--:--"
							}),
							/* @__PURE__ */ jsx("div", {
								style: {
									fontSize: "11px",
									color: "var(--zy-text-muted)"
								},
								children: tz.region
							})
						]
					}, tz.city))
				}),
				/* @__PURE__ */ jsxs("div", {
					style: {
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
						gap: "24px",
						marginBottom: "48px"
					},
					children: [/* @__PURE__ */ jsxs("div", {
						style: {
							padding: "36px",
							borderRadius: "16px",
							border: "1px solid var(--zy-border-subtle)",
							background: isLight ? "#ffffff" : "var(--zy-surface-1)",
							display: "flex",
							flexDirection: "column",
							gap: "18px"
						},
						children: [
							/* @__PURE__ */ jsxs("div", {
								style: {
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center"
								},
								children: [/* @__PURE__ */ jsx("span", {
									style: {
										fontSize: "11px",
										fontFamily: "monospace",
										fontWeight: 700,
										letterSpacing: "0.1em",
										color: "var(--zy-text-muted)"
									},
									children: "PRIMARY ENGINEERING SANCTUARY"
								}), /* @__PURE__ */ jsx("span", {
									style: {
										fontFamily: "monospace",
										fontSize: "10px",
										padding: "3px 8px",
										borderRadius: "4px",
										background: isLight ? "#111111" : "#ffffff",
										color: isLight ? "#ffffff" : "#000000",
										fontWeight: 700
									},
									children: "GLOBAL HQ"
								})]
							}),
							/* @__PURE__ */ jsx("h3", {
								style: {
									fontFamily: "var(--font-heading, \"Space Grotesk\", sans-serif)",
									fontSize: "24px",
									fontWeight: 800,
									color: "var(--zy-text-primary)"
								},
								children: "Patna, Bihar"
							}),
							/* @__PURE__ */ jsx("div", {
								style: {
									fontFamily: "monospace",
									fontSize: "12px",
									color: "var(--zy-text-muted)"
								},
								children: "COORDINATES: 25.5941° N, 85.1376° E"
							}),
							/* @__PURE__ */ jsx("p", {
								style: {
									fontSize: "14px",
									lineHeight: 1.7,
									color: "var(--zy-text-secondary)"
								},
								children: "Our primary engineering citadel where architecture decisions, core codebase authoring, database optimizations, and algorithmic R&D take place. Isolated from urban noise to enable uninterrupted multi-hour deep focus."
							}),
							/* @__PURE__ */ jsxs("div", {
								style: {
									borderTop: "1px solid var(--zy-border-subtle)",
									paddingTop: "16px",
									display: "flex",
									justifyContent: "space-between",
									fontSize: "12px",
									color: "var(--zy-text-muted)",
									fontFamily: "monospace"
								},
								children: [/* @__PURE__ */ jsx("span", { children: "BANDWIDTH: DUAL REDUNDANT FIBER" }), /* @__PURE__ */ jsx("span", { children: "BACKUP: 100% SOLAR + UPS" })]
							})
						]
					}), /* @__PURE__ */ jsxs("div", {
						style: {
							padding: "36px",
							borderRadius: "16px",
							border: "1px solid var(--zy-border-subtle)",
							background: isLight ? "#ffffff" : "var(--zy-surface-1)",
							display: "flex",
							flexDirection: "column",
							gap: "18px"
						},
						children: [
							/* @__PURE__ */ jsxs("div", {
								style: {
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center"
								},
								children: [/* @__PURE__ */ jsx("span", {
									style: {
										fontSize: "11px",
										fontFamily: "monospace",
										fontWeight: 700,
										letterSpacing: "0.1em",
										color: "var(--zy-text-muted)"
									},
									children: "STRATEGIC CONNECTIVITY NODE"
								}), /* @__PURE__ */ jsx("span", {
									style: {
										fontFamily: "monospace",
										fontSize: "10px",
										padding: "3px 8px",
										borderRadius: "4px",
										border: "1px solid var(--zy-border-subtle)",
										color: "var(--zy-text-secondary)",
										fontWeight: 700
									},
									children: "EXPANSION HUB"
								})]
							}),
							/* @__PURE__ */ jsx("h3", {
								style: {
									fontFamily: "var(--font-heading, \"Space Grotesk\", sans-serif)",
									fontSize: "24px",
									fontWeight: 800,
									color: "var(--zy-text-primary)"
								},
								children: "Delhi-NCR Network"
							}),
							/* @__PURE__ */ jsx("div", {
								style: {
									fontFamily: "monospace",
									fontSize: "12px",
									color: "var(--zy-text-muted)"
								},
								children: "COORDINATES: 28.6139° N, 77.2090° E"
							}),
							/* @__PURE__ */ jsx("p", {
								style: {
									fontSize: "14px",
									lineHeight: 1.7,
									color: "var(--zy-text-secondary)"
								},
								children: "Our metropolitan bridge for enterprise executive briefings, high-touch institutional client onboarding, international logistics coordination, and direct proximity to national digital infrastructure regulators."
							}),
							/* @__PURE__ */ jsxs("div", {
								style: {
									borderTop: "1px solid var(--zy-border-subtle)",
									paddingTop: "16px",
									display: "flex",
									justifyContent: "space-between",
									fontSize: "12px",
									color: "var(--zy-text-muted)",
									fontFamily: "monospace"
								},
								children: [/* @__PURE__ */ jsx("span", { children: "AIRPORT ACCESS: 25 MIN" }), /* @__PURE__ */ jsx("span", { children: "MEETING STUDIOS: ACTIVATED" })]
							})
						]
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					style: {
						padding: "28px 32px",
						borderRadius: "14px",
						background: isLight ? "rgba(0,0,0,0.02)" : "rgba(255,255,255,0.02)",
						border: "1px solid var(--zy-border-subtle)",
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
						gap: "24px"
					},
					children: [
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
							style: {
								fontFamily: "var(--font-heading, \"Space Grotesk\", sans-serif)",
								fontSize: "15px",
								fontWeight: 700,
								color: "var(--zy-text-primary)",
								marginBottom: "6px"
							},
							children: "Async-First Engineering"
						}), /* @__PURE__ */ jsx("p", {
							style: {
								fontSize: "13px",
								lineHeight: 1.6,
								color: "var(--zy-text-secondary)",
								margin: 0
							},
							children: "All architecture decisions, PR RFCs, and API blueprints are documented in searchable Git records so no knowledge is trapped in unrecorded verbal meetings."
						})] }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
							style: {
								fontFamily: "var(--font-heading, \"Space Grotesk\", sans-serif)",
								fontSize: "15px",
								fontWeight: 700,
								color: "var(--zy-text-primary)",
								marginBottom: "6px"
							},
							children: "Global 4-Hour Golden Window"
						}), /* @__PURE__ */ jsx("p", {
							style: {
								fontSize: "13px",
								lineHeight: 1.6,
								color: "var(--zy-text-secondary)",
								margin: 0
							},
							children: "Daily dedicated overlap windows scheduled with North American and European stakeholders for instant architectural reviews and blocker clearing."
						})] }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
							style: {
								fontFamily: "var(--font-heading, \"Space Grotesk\", sans-serif)",
								fontSize: "15px",
								fontWeight: 700,
								color: "var(--zy-text-primary)",
								marginBottom: "6px"
							},
							children: "24/7 Severity-1 Incident Mesh"
						}), /* @__PURE__ */ jsx("p", {
							style: {
								fontSize: "13px",
								lineHeight: 1.6,
								color: "var(--zy-text-secondary)",
								margin: 0
							},
							children: "Automated PagerDuty rotations routed to senior engineers with guaranteed 15-minute response times for mission-critical infrastructure emergencies."
						})] })
					]
				})
			]
		})
	});
}
//#endregion
//#region resources/js/components/about/AboutClientTrust.tsx
function AboutClientTrust() {
	const { theme } = useTheme();
	const isLight = theme === "light";
	return /* @__PURE__ */ jsx("section", {
		id: "client-trust",
		style: {
			padding: "110px var(--zy-section-pad-x, 24px)",
			background: "var(--zy-bg)",
			borderBottom: "1px solid var(--zy-border-subtle)",
			transition: "background 0.3s ease, border-color 0.3s ease"
		},
		children: /* @__PURE__ */ jsxs("div", {
			style: {
				maxWidth: "1280px",
				margin: "0 auto"
			},
			children: [
				/* @__PURE__ */ jsxs("div", {
					style: {
						marginBottom: "64px",
						maxWidth: "820px"
					},
					children: [/* @__PURE__ */ jsx("h2", {
						style: {
							fontFamily: "var(--font-heading, \"Space Grotesk\", sans-serif)",
							fontSize: "clamp(30px, 4vw, 52px)",
							fontWeight: 800,
							lineHeight: 1.15,
							letterSpacing: "-0.03em",
							color: "var(--zy-text-primary)",
							marginBottom: "20px"
						},
						children: "We don't build disposable software. We forge decade-long engineering alliances."
					}), /* @__PURE__ */ jsx("p", {
						style: {
							fontSize: "16px",
							lineHeight: 1.7,
							color: "var(--zy-text-secondary)"
						},
						children: "Standard IT agencies treat projects like one-and-done contractor gigs. We view every enterprise contract as a shared capital investment. When we engineer a system, we sign our name to its long-term stability, scalability, and commercial dominance."
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					style: {
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
						gap: "16px",
						marginBottom: "64px"
					},
					children: [
						{
							label: "CLIENT ANNUAL RETENTION",
							value: "94.2%",
							caption: "Partners extending beyond initial launch"
						},
						{
							label: "AVERAGE TENURE",
							value: "2.8 YRS",
							caption: "Continuous engineering & scale evolution"
						},
						{
							label: "SLA BREACHES",
							value: "0.00%",
							caption: "Zero unresolved Sev-1 outages"
						},
						{
							label: "THROUGHPUT MULTIPLIER",
							value: "3.4x",
							caption: "Average query speed gain post-redesign"
						}
					].map((m) => /* @__PURE__ */ jsxs("div", {
						style: {
							padding: "24px",
							borderRadius: "12px",
							border: "1px solid var(--zy-border-subtle)",
							background: isLight ? "#ffffff" : "var(--zy-surface-1)"
						},
						children: [
							/* @__PURE__ */ jsx("div", {
								style: {
									fontSize: "10px",
									fontFamily: "monospace",
									fontWeight: 700,
									letterSpacing: "0.1em",
									color: "var(--zy-text-muted)",
									marginBottom: "8px"
								},
								children: m.label
							}),
							/* @__PURE__ */ jsx("div", {
								style: {
									fontFamily: "var(--font-heading, \"Space Grotesk\", sans-serif)",
									fontSize: "36px",
									fontWeight: 800,
									letterSpacing: "-0.03em",
									color: "var(--zy-text-primary)",
									marginBottom: "6px"
								},
								children: m.value
							}),
							/* @__PURE__ */ jsx("div", {
								style: {
									fontSize: "12px",
									color: "var(--zy-text-secondary)"
								},
								children: m.caption
							})
						]
					}, m.label))
				}),
				/* @__PURE__ */ jsx("div", {
					style: {
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
						gap: "24px"
					},
					children: [
						{
							sector: "HEALTHCARE & DIAGNOSTIC LABS",
							anchorClient: "LifeCare Diagnostic Engine",
							challenge: "Paper-heavy manual pathology workflows causing sample mismatch risks, doctor signature bottlenecks, and delayed patient delivery.",
							solution: "Built custom Laboratory Information System (LIS) with automated barcode tube generation, encrypted PDF watermarking, and instant multi-channel WhatsApp report delivery.",
							impact: "Reduced report turnaround time by 68% and eliminated 100% of clerical transcription errors across daily patient cohorts."
						},
						{
							sector: "REAL ESTATE & LUXURY DEVELOPMENTS",
							anchorClient: "UrbanNest Architectural Group",
							challenge: "Slow monolithic WordPress portals with low-converting static floor plans failing to convert high-net-worth real estate buyers.",
							solution: "Engineered bespoke headless React portal with instant filter faceted search, interactive SVG floor plan unit selectors, and instant CRM lead ingestion.",
							impact: "Lifted qualified site tour bookings by 44% with page load times dropping from 4.8s to 0.42s on mobile connections."
						},
						{
							sector: "HIGH-FREQUENCY D2C COMMERCE",
							anchorClient: "OmniScale Retail Fleet",
							challenge: "Database deadlocks during festive flash sales causing abandoned checkouts and overselling out-of-stock SKUs.",
							solution: "Deployed Redis atomic decrement locks with queue-backed asynchronous order worker pools and edge-cached catalog assets.",
							impact: "Zero overselling incidents across 25,000+ peak order transactions per hour with 99.99% checkout uptime."
						},
						{
							sector: "B2B FINTECH & WORKFLOW SAAS",
							anchorClient: "Apex Ledger Enterprise",
							challenge: "Complex compliance data segregation requirements across multi-tenant enterprise customers needing granular audit trails.",
							solution: "Implemented schema-isolated PostgreSQL multi-tenancy with cryptographic immutable ledger hashing and role-based zero-trust permissions.",
							impact: "Passed rigorous third-party SOC-2 audit with zero architectural non-conformances within 90 days."
						}
					].map((sec) => /* @__PURE__ */ jsxs("div", {
						style: {
							padding: "36px",
							borderRadius: "16px",
							border: "1px solid var(--zy-border-subtle)",
							background: isLight ? "#ffffff" : "var(--zy-surface-1)",
							display: "flex",
							flexDirection: "column",
							gap: "18px"
						},
						children: [
							/* @__PURE__ */ jsx("div", {
								style: {
									display: "flex",
									justifyContent: "space-between",
									alignItems: "baseline",
									gap: "8px",
									borderBottom: "1px solid var(--zy-border-subtle)",
									paddingBottom: "14px"
								},
								children: /* @__PURE__ */ jsx("span", {
									style: {
										fontSize: "11px",
										fontFamily: "monospace",
										fontWeight: 700,
										letterSpacing: "0.1em",
										color: "var(--zy-text-muted)"
									},
									children: sec.sector
								})
							}),
							/* @__PURE__ */ jsx("h3", {
								style: {
									fontFamily: "var(--font-heading, \"Space Grotesk\", sans-serif)",
									fontSize: "20px",
									fontWeight: 800,
									color: "var(--zy-text-primary)"
								},
								children: sec.anchorClient
							}),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
								style: {
									fontSize: "11px",
									fontFamily: "monospace",
									fontWeight: 700,
									color: "var(--zy-text-muted)",
									display: "block",
									marginBottom: "4px"
								},
								children: "THE BOTTLENECK:"
							}), /* @__PURE__ */ jsx("p", {
								style: {
									fontSize: "13px",
									lineHeight: 1.6,
									color: "var(--zy-text-secondary)",
									margin: 0
								},
								children: sec.challenge
							})] }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
								style: {
									fontSize: "11px",
									fontFamily: "monospace",
									fontWeight: 700,
									color: "var(--zy-text-muted)",
									display: "block",
									marginBottom: "4px"
								},
								children: "THE ARCHITECTURE:"
							}), /* @__PURE__ */ jsx("p", {
								style: {
									fontSize: "13px",
									lineHeight: 1.6,
									color: "var(--zy-text-secondary)",
									margin: 0
								},
								children: sec.solution
							})] }),
							/* @__PURE__ */ jsxs("div", {
								style: {
									marginTop: "auto",
									padding: "16px 20px",
									borderRadius: "10px",
									background: isLight ? "rgba(0,0,0,0.025)" : "rgba(255,255,255,0.03)",
									border: "1px solid var(--zy-border-subtle)"
								},
								children: [/* @__PURE__ */ jsx("span", {
									style: {
										fontSize: "10px",
										fontFamily: "monospace",
										fontWeight: 700,
										color: "var(--zy-text-primary)",
										letterSpacing: "0.08em",
										display: "block",
										marginBottom: "4px"
									},
									children: "VERIFIED PRODUCTION IMPACT →"
								}), /* @__PURE__ */ jsx("div", {
									style: {
										fontSize: "12px",
										color: "var(--zy-text-secondary)",
										lineHeight: 1.5
									},
									children: sec.impact
								})]
							})
						]
					}, sec.sector))
				})
			]
		})
	});
}
//#endregion
//#region resources/js/components/about/AboutSocialImpact.tsx
function AboutSocialImpact() {
	const { theme } = useTheme();
	const isLight = theme === "light";
	return /* @__PURE__ */ jsx("section", {
		id: "social-impact",
		style: {
			padding: "110px var(--zy-section-pad-x, 24px)",
			background: "var(--zy-bg)",
			borderBottom: "1px solid var(--zy-border-subtle)",
			transition: "background 0.3s ease, border-color 0.3s ease"
		},
		children: /* @__PURE__ */ jsxs("div", {
			style: {
				maxWidth: "1280px",
				margin: "0 auto"
			},
			children: [
				/* @__PURE__ */ jsxs("div", {
					style: {
						marginBottom: "64px",
						maxWidth: "820px"
					},
					children: [/* @__PURE__ */ jsx("h2", {
						style: {
							fontFamily: "var(--font-heading, \"Space Grotesk\", sans-serif)",
							fontSize: "clamp(30px, 4vw, 52px)",
							fontWeight: 800,
							lineHeight: 1.15,
							letterSpacing: "-0.03em",
							color: "var(--zy-text-primary)",
							marginBottom: "20px"
						},
						children: "The Digital Bihar Initiative: Democratizing high-tier engineering excellence."
					}), /* @__PURE__ */ jsx("p", {
						style: {
							fontSize: "16px",
							lineHeight: 1.7,
							color: "var(--zy-text-secondary)"
						},
						children: "Raw intellectual brilliance has always existed in abundance across Eastern India; what was missing was access to enterprise-grade software standards. We built Zytrixon not merely to deliver commercial software, but to prove that world-class digital powerhouses can be built directly on this soil."
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					style: {
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
						gap: "24px",
						marginBottom: "64px"
					},
					children: [
						{
							title: "Tier-2 & Tier-3 Developer Fellowships",
							tag: "TALENT ACCELERATION",
							description: "Conducting fully funded weekend bootcamps for ambitious university students across Bihar, teaching production Git workflows, relational database normalization, and type-safe frontend architecture.",
							stats: "1,200+ Students Mentored to Date"
						},
						{
							title: "Pro-Bono Civic & Healthcare Tooling",
							tag: "COMMUNITY INFRASTRUCTURE",
							description: "Engineering zero-cost digital infrastructure for local community health clinics, blood bank tracking systems, and regional education trusts that cannot afford commercial software agencies.",
							stats: "12 Civic Platforms Actively Maintained"
						},
						{
							title: "Reversing Regional Brain Drain",
							tag: "ECONOMIC STABILITY",
							description: "Offering tier-1 metropolitan compensation benchmarks within Patna. Senior engineers build global-class careers without being forced to migrate away from their families and heritage.",
							stats: "100% Retention of Local Founding Cohort"
						},
						{
							title: "Open Regional Tech Curriculum",
							tag: "KNOWLEDGE COMMONS",
							description: "Publishing accessible open-source engineering guides, code snippets, and Hindi/English architectural breakdown sessions to help self-taught developers crack global engineering standards.",
							stats: "Open Source & Freely Distributed"
						}
					].map((program) => /* @__PURE__ */ jsxs("div", {
						style: {
							padding: "36px",
							borderRadius: "16px",
							border: "1px solid var(--zy-border-subtle)",
							background: isLight ? "#ffffff" : "var(--zy-surface-1)",
							display: "flex",
							flexDirection: "column",
							gap: "16px"
						},
						children: [
							/* @__PURE__ */ jsx("div", {
								style: {
									fontSize: "10px",
									fontFamily: "monospace",
									fontWeight: 700,
									letterSpacing: "0.12em",
									color: "var(--zy-text-muted)",
									textTransform: "uppercase"
								},
								children: program.tag
							}),
							/* @__PURE__ */ jsx("h3", {
								style: {
									fontFamily: "var(--font-heading, \"Space Grotesk\", sans-serif)",
									fontSize: "20px",
									fontWeight: 700,
									color: "var(--zy-text-primary)",
									lineHeight: 1.35
								},
								children: program.title
							}),
							/* @__PURE__ */ jsx("p", {
								style: {
									fontSize: "14px",
									lineHeight: 1.7,
									color: "var(--zy-text-secondary)",
									margin: 0
								},
								children: program.description
							}),
							/* @__PURE__ */ jsxs("div", {
								style: {
									marginTop: "auto",
									paddingTop: "16px",
									borderTop: "1px solid var(--zy-border-subtle)",
									fontFamily: "monospace",
									fontSize: "11px",
									fontWeight: 700,
									color: "var(--zy-text-primary)"
								},
								children: ["→ ", program.stats]
							})
						]
					}, program.title))
				}),
				/* @__PURE__ */ jsxs("div", {
					style: {
						padding: "40px",
						borderRadius: "16px",
						border: "1px solid var(--zy-border-subtle)",
						background: isLight ? "#f9f9fa" : "var(--zy-surface-2)",
						display: "flex",
						flexDirection: "column",
						gap: "16px"
					},
					children: [
						/* @__PURE__ */ jsx("div", {
							style: {
								fontSize: "11px",
								fontFamily: "monospace",
								fontWeight: 700,
								letterSpacing: "0.15em",
								textTransform: "uppercase",
								color: "var(--zy-text-muted)"
							},
							children: "FOUNDING PRINCIPLE / CIVIC PLEDGE"
						}),
						/* @__PURE__ */ jsx("blockquote", {
							style: {
								margin: 0,
								fontFamily: "var(--font-heading, \"Space Grotesk\", sans-serif)",
								fontSize: "clamp(18px, 2.5vw, 26px)",
								fontWeight: 700,
								lineHeight: 1.4,
								color: "var(--zy-text-primary)"
							},
							children: "“We measure our legacy not only by the revenues generated or the enterprise systems deployed, but by the generation of young engineers in Bihar whose lives were transformed because they saw that world-class engineering can be built right here.”"
						}),
						/* @__PURE__ */ jsx("div", {
							style: {
								fontFamily: "monospace",
								fontSize: "12px",
								color: "var(--zy-text-muted)"
							},
							children: "— Bipin Sahani, Founder & Chief Architect, Zytrixon"
						})
					]
				})
			]
		})
	});
}
//#endregion
//#region resources/js/components/about/AboutRecognitionAwards.tsx
function AboutRecognitionAwards() {
	const { theme } = useTheme();
	const isLight = theme === "light";
	return /* @__PURE__ */ jsx("section", {
		id: "recognition-awards",
		style: {
			padding: "110px var(--zy-section-pad-x, 24px)",
			background: "var(--zy-bg)",
			borderBottom: "1px solid var(--zy-border-subtle)",
			transition: "background 0.3s ease, border-color 0.3s ease"
		},
		children: /* @__PURE__ */ jsxs("div", {
			style: {
				maxWidth: "1280px",
				margin: "0 auto"
			},
			children: [
				/* @__PURE__ */ jsxs("div", {
					style: {
						marginBottom: "64px",
						maxWidth: "820px"
					},
					children: [/* @__PURE__ */ jsx("h2", {
						style: {
							fontFamily: "var(--font-heading, \"Space Grotesk\", sans-serif)",
							fontSize: "clamp(30px, 4vw, 52px)",
							fontWeight: 800,
							lineHeight: 1.15,
							letterSpacing: "-0.03em",
							color: "var(--zy-text-primary)",
							marginBottom: "20px"
						},
						children: "Measurable mathematical performance over subjective vanity awards."
					}), /* @__PURE__ */ jsx("p", {
						style: {
							fontSize: "16px",
							lineHeight: 1.7,
							color: "var(--zy-text-secondary)"
						},
						children: "We do not buy vanity agency awards. We substantiate our engineering claims with automated Google Lighthouse audits, strict cryptographic benchmarks, and production uptime that holds during viral peak demand."
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					style: {
						padding: "40px",
						borderRadius: "16px",
						border: "1px solid var(--zy-border-subtle)",
						background: isLight ? "#ffffff" : "var(--zy-surface-1)",
						marginBottom: "48px"
					},
					children: [/* @__PURE__ */ jsxs("div", {
						style: {
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							flexWrap: "wrap",
							gap: "12px",
							marginBottom: "32px",
							paddingBottom: "18px",
							borderBottom: "1px solid var(--zy-border-subtle)"
						},
						children: [/* @__PURE__ */ jsx("div", {
							style: {
								fontSize: "11px",
								fontFamily: "monospace",
								fontWeight: 700,
								letterSpacing: "0.12em",
								color: "var(--zy-text-muted)"
							},
							children: "INDEPENDENT AUDIT: GOOGLE LIGHTHOUSE ENGINE V12"
						}), /* @__PURE__ */ jsx("span", {
							style: {
								fontFamily: "monospace",
								fontSize: "11px",
								fontWeight: 700,
								padding: "4px 10px",
								borderRadius: "4px",
								background: isLight ? "#111111" : "#ffffff",
								color: isLight ? "#ffffff" : "#000000"
							},
							children: "VERIFIED AUDIT STATUS: 100/100"
						})]
					}), /* @__PURE__ */ jsx("div", {
						style: {
							display: "grid",
							gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
							gap: "24px"
						},
						children: [
							{
								metric: "PERFORMANCE",
								score: "100",
								detail: "LCP 0.58s | CLS 0.00 | TBT 0ms"
							},
							{
								metric: "ACCESSIBILITY",
								score: "100",
								detail: "Full ARIA landmarks & WCAG AA"
							},
							{
								metric: "BEST PRACTICES",
								score: "100",
								detail: "HTTPS, CSP & modern protocols"
							},
							{
								metric: "SEARCH (SEO)",
								score: "100",
								detail: "Rich JSON-LD schemas & metadata"
							}
						].map((item) => /* @__PURE__ */ jsxs("div", {
							style: {
								textAlign: "center",
								padding: "24px 16px",
								borderRadius: "12px",
								border: "1px solid var(--zy-border-subtle)",
								background: isLight ? "#fbfbfb" : "var(--zy-surface-2)"
							},
							children: [
								/* @__PURE__ */ jsx("div", {
									style: {
										width: "72px",
										height: "72px",
										borderRadius: "50%",
										margin: "0 auto 16px auto",
										border: isLight ? "2px solid #111111" : "2px solid #ffffff",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										fontFamily: "monospace",
										fontSize: "22px",
										fontWeight: 800,
										color: "var(--zy-text-primary)"
									},
									children: item.score
								}),
								/* @__PURE__ */ jsx("div", {
									style: {
										fontFamily: "var(--font-heading, \"Space Grotesk\", sans-serif)",
										fontSize: "14px",
										fontWeight: 800,
										color: "var(--zy-text-primary)",
										marginBottom: "6px",
										letterSpacing: "0.05em"
									},
									children: item.metric
								}),
								/* @__PURE__ */ jsx("div", {
									style: {
										fontSize: "11px",
										fontFamily: "monospace",
										color: "var(--zy-text-muted)"
									},
									children: item.detail
								})
							]
						}, item.metric))
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					style: {
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
						gap: "24px"
					},
					children: [
						{
							category: "CODE QUALITY",
							title: "Zero-Tolerance Static Analysis Standards",
							badge: "PSR-12 / TS STRICT",
							desc: "Every commit passes automated CI pipelines with 100% strict TypeScript types, zero unused dependencies, and zero ESLint warnings."
						},
						{
							category: "SECURITY INTEGRITY",
							title: "Clean SAST/DAST Vulnerability Track Record",
							badge: "ZERO CVEs",
							desc: "Automated vulnerability scanning across container images and NPM/Composer dependency trees ensures zero unpatched high-severity vulnerabilities in production."
						},
						{
							category: "SYSTEM RESILIENCE",
							title: "Chaos Monkey & Fault-Tolerant Audits",
							badge: "HIGH RESILIENCE",
							desc: "Production architectures are stress-tested with artificial latency injection and database node failover drills to verify automated recovery without data loss."
						}
					].map((rec) => /* @__PURE__ */ jsxs("div", {
						style: {
							padding: "32px",
							borderRadius: "16px",
							border: "1px solid var(--zy-border-subtle)",
							background: isLight ? "#ffffff" : "var(--zy-surface-1)",
							display: "flex",
							flexDirection: "column",
							gap: "14px"
						},
						children: [
							/* @__PURE__ */ jsxs("div", {
								style: {
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center"
								},
								children: [/* @__PURE__ */ jsx("span", {
									style: {
										fontSize: "10px",
										fontFamily: "monospace",
										fontWeight: 700,
										letterSpacing: "0.12em",
										color: "var(--zy-text-muted)"
									},
									children: rec.category
								}), /* @__PURE__ */ jsx("span", {
									style: {
										fontSize: "9px",
										fontFamily: "monospace",
										fontWeight: 700,
										padding: "2px 8px",
										borderRadius: "4px",
										border: "1px solid var(--zy-border-subtle)",
										color: "var(--zy-text-secondary)"
									},
									children: rec.badge
								})]
							}),
							/* @__PURE__ */ jsx("h3", {
								style: {
									fontFamily: "var(--font-heading, \"Space Grotesk\", sans-serif)",
									fontSize: "18px",
									fontWeight: 700,
									color: "var(--zy-text-primary)",
									lineHeight: 1.35
								},
								children: rec.title
							}),
							/* @__PURE__ */ jsx("p", {
								style: {
									fontSize: "13px",
									lineHeight: 1.65,
									color: "var(--zy-text-secondary)",
									margin: 0
								},
								children: rec.desc
							})
						]
					}, rec.title))
				})
			]
		})
	});
}
//#endregion
//#region resources/js/components/about/AboutFAQComprehensive.tsx
function AboutFAQComprehensive() {
	const { theme } = useTheme();
	const isLight = theme === "light";
	const [openIndex, setOpenIndex] = useState(0);
	const faqs = [
		{
			question: "Who owns the codebase, Git history, and database architecture?",
			category: "LEGAL & IP RIGHTS",
			answer: "You own 100% of everything unconditionally. From the first sprint, code is authored directly in your organization’s private GitHub or GitLab repository. All copyright, design tokens, CI/CD pipelines, and database schemas are transferred to your corporate entity upon milestone delivery. We never hold intellectual property hostage or install proprietary runtime locks."
		},
		{
			question: "How do you handle zero-downtime migrations for fragile legacy databases with millions of rows?",
			category: "DATABASE MIGRATION",
			answer: "We employ a dual-write and asynchronous shadow replication strategy. We establish Change Data Capture (CDC) workers that mirror production mutations in real-time into the optimized target schema without locking original tables. After automated checksum reconciliation confirms 100.00% cryptographic parity, we shift DNS traffic instantly with an automated rollback escape hatch."
		},
		{
			question: "Can your architectures withstand viral flash sales with 50,000+ simultaneous checkouts?",
			category: "CONCURRENCY & SCALE",
			answer: "Yes. We circumvent naive relational row-locking—the primary culprit of database deadlocks during viral promotions. By leveraging Redis atomic memory buffers, Lua reservation scripts, and asynchronous queue workers (RabbitMQ/Redis Stream), your checkout pipeline completes in sub-100ms regardless of server volume surges."
		},
		{
			question: "What does post-launch knowledge transfer look like for our internal developers?",
			category: "TEAM HANDOFF",
			answer: "Clean code is code that any senior developer can read like an open book. Every repository is delivered with comprehensive OpenAPI 3.0 specs, strict TypeScript type definitions, >85% automated test coverage, and pre-recorded architectural video walkthroughs. We also conduct dedicated pair-programming sessions with your engineers before exiting."
		},
		{
			question: "How do you ensure compliance for sensitive healthcare (HIPAA) or financial (PII) data?",
			category: "SECURITY & COMPLIANCE",
			answer: "We design zero-trust data segregation from day one. Sensitive patient records or financial ledgers receive field-level AES-256 GCM encryption at rest, strict TLS 1.3 transit pinning, and immutable audit logs that cannot be altered even by database administrators. Systems comply with HIPAA, HL7, and Indian DPDP guidelines."
		},
		{
			question: "Why choose Zytrixon over a traditional multi-thousand-person IT consultancy?",
			category: "VALUE PROPOSITION",
			answer: "Giant consultancies bill you for bloated management layers while assigning your codebase to rotating junior subcontractors. At Zytrixon, you work directly with principal architects and seasoned product engineers who write code daily. We ship tested, high-converting production software in 6 to 12 weeks what legacy agencies spend a year theorizing."
		}
	];
	const toggleFAQ = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};
	return /* @__PURE__ */ jsx("section", {
		id: "faq-comprehensive",
		style: {
			padding: "110px var(--zy-section-pad-x, 24px)",
			background: "var(--zy-bg)",
			borderBottom: "1px solid var(--zy-border-subtle)",
			transition: "background 0.3s ease, border-color 0.3s ease"
		},
		children: /* @__PURE__ */ jsxs("div", {
			style: {
				maxWidth: "1280px",
				margin: "0 auto"
			},
			children: [/* @__PURE__ */ jsxs("div", {
				style: {
					marginBottom: "64px",
					maxWidth: "820px"
				},
				children: [/* @__PURE__ */ jsx("h2", {
					style: {
						fontFamily: "var(--font-heading, \"Space Grotesk\", sans-serif)",
						fontSize: "clamp(30px, 4vw, 52px)",
						fontWeight: 800,
						lineHeight: 1.15,
						letterSpacing: "-0.03em",
						color: "var(--zy-text-primary)",
						marginBottom: "20px"
					},
					children: "Clear answers to the hard technical questions CTOs ask us."
				}), /* @__PURE__ */ jsx("p", {
					style: {
						fontSize: "16px",
						lineHeight: 1.7,
						color: "var(--zy-text-secondary)"
					},
					children: "Enterprise engineering decisions carry immense strategic risk. Here are candid answers regarding our intellectual property terms, legacy migration procedures, and high-concurrency protocols."
				})]
			}), /* @__PURE__ */ jsx("div", {
				style: {
					display: "flex",
					flexDirection: "column",
					gap: "16px"
				},
				children: faqs.map((faq, index) => {
					const isOpen = openIndex === index;
					return /* @__PURE__ */ jsxs("div", {
						style: {
							borderRadius: "14px",
							border: isOpen ? isLight ? "1px solid #111111" : "1px solid #ffffff" : "1px solid var(--zy-border-subtle)",
							background: isLight ? "#ffffff" : "var(--zy-surface-1)",
							overflow: "hidden",
							transition: "border-color 0.2s ease, background 0.2s ease"
						},
						children: [/* @__PURE__ */ jsxs("button", {
							type: "button",
							onClick: () => {
								toggleFAQ(index);
							},
							style: {
								width: "100%",
								padding: "24px 28px",
								background: "transparent",
								border: "none",
								cursor: "pointer",
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
								textAlign: "left",
								gap: "20px"
							},
							children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
								style: {
									fontSize: "10px",
									fontFamily: "monospace",
									fontWeight: 700,
									letterSpacing: "0.12em",
									color: "var(--zy-text-muted)",
									display: "block",
									marginBottom: "6px"
								},
								children: faq.category
							}), /* @__PURE__ */ jsx("div", {
								style: {
									fontFamily: "var(--font-heading, \"Space Grotesk\", sans-serif)",
									fontSize: "18px",
									fontWeight: 700,
									color: "var(--zy-text-primary)",
									lineHeight: 1.4
								},
								children: faq.question
							})] }), /* @__PURE__ */ jsx("div", {
								style: {
									width: "32px",
									height: "32px",
									borderRadius: "50%",
									border: "1px solid var(--zy-border-subtle)",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									flexShrink: 0,
									fontFamily: "monospace",
									fontSize: "16px",
									fontWeight: 700,
									color: "var(--zy-text-primary)",
									background: isLight ? "#f4f4f5" : "var(--zy-surface-2)"
								},
								children: isOpen ? "−" : "+"
							})]
						}), isOpen && /* @__PURE__ */ jsx("div", {
							style: {
								padding: "0 28px 24px 28px",
								borderTop: "1px solid var(--zy-border-subtle)",
								paddingTop: "20px"
							},
							children: /* @__PURE__ */ jsx("p", {
								style: {
									fontSize: "15px",
									lineHeight: 1.75,
									color: "var(--zy-text-secondary)",
									margin: 0
								},
								children: faq.answer
							})
						})]
					}, faq.question);
				})
			})]
		})
	});
}
//#endregion
//#region resources/js/components/about/AboutExecutiveCTA.tsx
function AboutExecutiveCTA() {
	const { theme } = useTheme();
	const isLight = theme === "light";
	return /* @__PURE__ */ jsx("section", {
		id: "executive-cta",
		style: {
			padding: "120px var(--zy-section-pad-x, 24px)",
			background: "var(--zy-bg)",
			transition: "background 0.3s ease"
		},
		children: /* @__PURE__ */ jsx("div", {
			style: {
				maxWidth: "1280px",
				margin: "0 auto"
			},
			children: /* @__PURE__ */ jsxs("div", {
				style: {
					padding: "clamp(36px, 6vw, 72px)",
					borderRadius: "24px",
					border: isLight ? "2px solid #111111" : "2px solid #ffffff",
					background: isLight ? "#f9f9fb" : "var(--zy-surface-1)",
					position: "relative",
					overflow: "hidden"
				},
				children: [
					/* @__PURE__ */ jsx("div", {
						style: {
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							flexWrap: "wrap",
							gap: "12px",
							marginBottom: "36px",
							paddingBottom: "20px",
							borderBottom: "1px solid var(--zy-border-subtle)"
						},
						children: /* @__PURE__ */ jsx("div", {
							style: {
								fontFamily: "monospace",
								fontSize: "11px",
								fontWeight: 700,
								color: "var(--zy-text-primary)"
							},
							children: "STATUS: ACCEPTING SELECT Q2/Q3 ENTERPRISE COMMISSIONS"
						})
					}),
					/* @__PURE__ */ jsxs("div", {
						style: {
							maxWidth: "900px",
							marginBottom: "32px"
						},
						children: [/* @__PURE__ */ jsx("h2", {
							style: {
								fontFamily: "var(--font-heading, \"Space Grotesk\", sans-serif)",
								fontSize: "clamp(32px, 5vw, 64px)",
								fontWeight: 800,
								lineHeight: 1.1,
								letterSpacing: "-0.03em",
								color: "var(--zy-text-primary)",
								marginBottom: "24px"
							},
							children: "Ready to replace software compromises with structural dominance?"
						}), /* @__PURE__ */ jsx("p", {
							style: {
								fontSize: "clamp(16px, 1.8vw, 19px)",
								lineHeight: 1.7,
								color: "var(--zy-text-secondary)",
								margin: 0
							},
							children: "Whether you need to engineer a resilient 0-to-1 platform or rescue a sluggish legacy codebase, you will speak directly with our senior systems architects—not a commission-driven salesperson."
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						style: {
							display: "grid",
							gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
							gap: "20px",
							marginTop: "40px",
							marginBottom: "48px"
						},
						children: [
							/* @__PURE__ */ jsxs("div", {
								style: {
									padding: "28px",
									borderRadius: "14px",
									border: "1px solid var(--zy-border-subtle)",
									background: isLight ? "#ffffff" : "var(--zy-surface-2)",
									display: "flex",
									flexDirection: "column",
									gap: "14px"
								},
								children: [
									/* @__PURE__ */ jsx("div", {
										style: {
											fontSize: "10px",
											fontFamily: "monospace",
											fontWeight: 700,
											letterSpacing: "0.1em",
											color: "var(--zy-text-muted)"
										},
										children: "DIALOGUE 01 // ARCHITECTURAL AUDIT"
									}),
									/* @__PURE__ */ jsx("h3", {
										style: {
											fontFamily: "var(--font-heading, \"Space Grotesk\", sans-serif)",
											fontSize: "18px",
											fontWeight: 700,
											color: "var(--zy-text-primary)",
											margin: 0
										},
										children: "Schedule Systems Audit"
									}),
									/* @__PURE__ */ jsx("p", {
										style: {
											fontSize: "13px",
											lineHeight: 1.6,
											color: "var(--zy-text-secondary)",
											margin: 0
										},
										children: "45-minute confidential roadmap and codebase assessment with our founding engineering leads."
									}),
									/* @__PURE__ */ jsx(Link, {
										href: "/contact",
										style: {
											marginTop: "auto",
											display: "inline-flex",
											alignItems: "center",
											justifyContent: "center",
											padding: "12px 20px",
											borderRadius: "8px",
											background: isLight ? "#111111" : "#ffffff",
											color: isLight ? "#ffffff" : "#000000",
											fontFamily: "var(--font-heading, \"Space Grotesk\", sans-serif)",
											fontSize: "13px",
											fontWeight: 700,
											textDecoration: "none",
											transition: "opacity 0.2s ease"
										},
										children: "BOOK ARCHITECTURAL SESSION →"
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								style: {
									padding: "28px",
									borderRadius: "14px",
									border: "1px solid var(--zy-border-subtle)",
									background: isLight ? "#ffffff" : "var(--zy-surface-2)",
									display: "flex",
									flexDirection: "column",
									gap: "14px"
								},
								children: [
									/* @__PURE__ */ jsx("div", {
										style: {
											fontSize: "10px",
											fontFamily: "monospace",
											fontWeight: 700,
											letterSpacing: "0.1em",
											color: "var(--zy-text-muted)"
										},
										children: "DIALOGUE 02 // REAL-TIME DISPATCH"
									}),
									/* @__PURE__ */ jsx("h3", {
										style: {
											fontFamily: "var(--font-heading, \"Space Grotesk\", sans-serif)",
											fontSize: "18px",
											fontWeight: 700,
											color: "var(--zy-text-primary)",
											margin: 0
										},
										children: "Direct WhatsApp Hotline"
									}),
									/* @__PURE__ */ jsx("p", {
										style: {
											fontSize: "13px",
											lineHeight: 1.6,
											color: "var(--zy-text-secondary)",
											margin: 0
										},
										children: "Instant technical triage for urgent production crises, security escalations, or rapid launches."
									}),
									/* @__PURE__ */ jsx("a", {
										href: "https://wa.me/917992284950?text=Hi%20Zytrixon%2C%20I%20would%20like%20to%20discuss%20an%20engineering%20project",
										target: "_blank",
										rel: "noreferrer",
										style: {
											marginTop: "auto",
											display: "inline-flex",
											alignItems: "center",
											justifyContent: "center",
											padding: "12px 20px",
											borderRadius: "8px",
											border: "1px solid var(--zy-border-subtle)",
											background: isLight ? "#ffffff" : "var(--zy-surface-1)",
											color: "var(--zy-text-primary)",
											fontFamily: "var(--font-heading, \"Space Grotesk\", sans-serif)",
											fontSize: "13px",
											fontWeight: 700,
											textDecoration: "none",
											transition: "background 0.2s ease"
										},
										children: "CONNECT ON WHATSAPP →"
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								style: {
									padding: "28px",
									borderRadius: "14px",
									border: "1px solid var(--zy-border-subtle)",
									background: isLight ? "#ffffff" : "var(--zy-surface-2)",
									display: "flex",
									flexDirection: "column",
									gap: "14px"
								},
								children: [
									/* @__PURE__ */ jsx("div", {
										style: {
											fontSize: "10px",
											fontFamily: "monospace",
											fontWeight: 700,
											letterSpacing: "0.1em",
											color: "var(--zy-text-muted)"
										},
										children: "DIALOGUE 03 // PHYSICAL VISITATION"
									}),
									/* @__PURE__ */ jsx("h3", {
										style: {
											fontFamily: "var(--font-heading, \"Space Grotesk\", sans-serif)",
											fontSize: "18px",
											fontWeight: 700,
											color: "var(--zy-text-primary)",
											margin: 0
										},
										children: "Visit Our Engineering Hub"
									}),
									/* @__PURE__ */ jsx("p", {
										style: {
											fontSize: "13px",
											lineHeight: 1.6,
											color: "var(--zy-text-secondary)",
											margin: 0
										},
										children: "Experience our engineering culture in-person at Patna HQ or request an executive briefing in Delhi-NCR."
									}),
									/* @__PURE__ */ jsx("a", {
										href: "mailto:contact@zytrixon.com",
										style: {
											marginTop: "auto",
											display: "inline-flex",
											alignItems: "center",
											justifyContent: "center",
											padding: "12px 20px",
											borderRadius: "8px",
											border: "1px solid var(--zy-border-subtle)",
											background: isLight ? "#ffffff" : "var(--zy-surface-1)",
											color: "var(--zy-text-primary)",
											fontFamily: "var(--font-heading, \"Space Grotesk\", sans-serif)",
											fontSize: "13px",
											fontWeight: 700,
											textDecoration: "none",
											transition: "background 0.2s ease"
										},
										children: "DISPATCH EMAIL TRANSMISSION →"
									})
								]
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						style: {
							borderTop: "1px solid var(--zy-border-subtle)",
							paddingTop: "24px",
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							flexWrap: "wrap",
							gap: "16px"
						},
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
							style: {
								fontFamily: "var(--font-heading, \"Space Grotesk\", sans-serif)",
								fontSize: "15px",
								fontWeight: 800,
								letterSpacing: "0.04em",
								color: "var(--zy-text-primary)"
							},
							children: "ZYTRIXON TECHNOLOGIES"
						}), /* @__PURE__ */ jsx("div", {
							style: {
								fontFamily: "monospace",
								fontSize: "11px",
								color: "var(--zy-text-muted)",
								marginTop: "2px"
							},
							children: "PATNA // DELHI-NCR // PLANETARY SCALE INFRASTRUCTURE"
						})] }), /* @__PURE__ */ jsx("div", {
							style: {
								fontFamily: "monospace",
								fontSize: "11px",
								color: "var(--zy-text-secondary)"
							},
							children: "COORDINATES: 25.5941° N, 85.1376° E • EST. 2026"
						})]
					})
				]
			})
		})
	});
}
//#endregion
//#region resources/js/pages/About.tsx
function About() {
	return /* @__PURE__ */ jsxs(ThemeProvider, { children: [
		/* @__PURE__ */ jsx(SeoHead, { seo: {
			title: "About Zytrixon | Architectural Engineering Studio",
			description: "Discover Zytrixon Technologies: Our origin in Patna, engineering manifesto, leadership dossier, technology convictions, and mission to engineer planetary-scale digital dominance."
		} }),
		/* @__PURE__ */ jsx(CustomCursor, {}),
		/* @__PURE__ */ jsx(TopBar, {}),
		/* @__PURE__ */ jsx(Navbar, {}),
		/* @__PURE__ */ jsxs("main", { children: [
			/* @__PURE__ */ jsx(InnerPageHero, {
				title: "Architects of Digital Dominance",
				subtitle: "Forged in Patna. Trusted by ambitious enterprises worldwide to design, build, and scale mission-critical digital infrastructure."
			}),
			/* @__PURE__ */ jsx(LazySection, { children: /* @__PURE__ */ jsx(AboutExecutiveHUD, {}) }),
			/* @__PURE__ */ jsx(LazySection, { children: /* @__PURE__ */ jsx(AboutOriginStory, {}) }),
			/* @__PURE__ */ jsx(LazySection, { children: /* @__PURE__ */ jsx(AboutMissionVision, {}) }),
			/* @__PURE__ */ jsx(LazySection, { children: /* @__PURE__ */ jsx(AboutPrinciplesManifesto, {}) }),
			/* @__PURE__ */ jsx(LazySection, { children: /* @__PURE__ */ jsx(AboutLeadershipDossier, {}) }),
			/* @__PURE__ */ jsx(LazySection, { children: /* @__PURE__ */ jsx(AboutMilestonesChronology, {}) }),
			/* @__PURE__ */ jsx(LazySection, { children: /* @__PURE__ */ jsx(AboutTechConviction, {}) }),
			/* @__PURE__ */ jsx(LazySection, { children: /* @__PURE__ */ jsx(AboutDeliveryLifecycle, {}) }),
			/* @__PURE__ */ jsx(LazySection, { children: /* @__PURE__ */ jsx(AboutSecurityGovernance, {}) }),
			/* @__PURE__ */ jsx(LazySection, { children: /* @__PURE__ */ jsx(AboutInnovationLab, {}) }),
			/* @__PURE__ */ jsx(LazySection, { children: /* @__PURE__ */ jsx(AboutGlobalPresence, {}) }),
			/* @__PURE__ */ jsx(LazySection, { children: /* @__PURE__ */ jsx(AboutClientTrust, {}) }),
			/* @__PURE__ */ jsx(LazySection, { children: /* @__PURE__ */ jsx(AboutSocialImpact, {}) }),
			/* @__PURE__ */ jsx(LazySection, { children: /* @__PURE__ */ jsx(AboutRecognitionAwards, {}) }),
			/* @__PURE__ */ jsx(LazySection, { children: /* @__PURE__ */ jsx(AboutFAQComprehensive, {}) }),
			/* @__PURE__ */ jsx(LazySection, { children: /* @__PURE__ */ jsx(AboutExecutiveCTA, {}) })
		] }),
		/* @__PURE__ */ jsx(Footer, {})
	] });
}
//#endregion
export { About as default };

//# sourceMappingURL=About-8WcowzwL.js.map