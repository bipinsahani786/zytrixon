import { a as ThemeProvider, n as CustomCursor, o as useTheme, r as Navbar, t as Footer } from "./footer-CezFkQSw.js";
import { t as LazySection } from "./lazy-section-Bm1gTwLP.js";
import { t as FooterCTA } from "./footer-cta-CxW1r1Xr.js";
import { t as TopBar } from "./top-bar-C3HAjSYy.js";
import { t as SeoHead } from "./SeoHead-IK9k69Ru.js";
import { n as getProjectBySlug, t as DUMMY_PROJECTS } from "./projects-data-BfoY1Czx.js";
import { t as GradientCard } from "./GradientCard-DK2CyX8m.js";
import { Link } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/components/project-details/ProjectHeroEditorial.tsx
function ProjectHeroEditorial({ project }) {
	const { theme } = useTheme();
	const isLight = theme === "light";
	return /* @__PURE__ */ jsx("section", {
		id: "overview",
		style: {
			position: "relative",
			paddingTop: "80px",
			paddingBottom: "60px",
			paddingLeft: "var(--zy-section-pad-x, 24px)",
			paddingRight: "var(--zy-section-pad-x, 24px)",
			overflow: "hidden",
			background: isLight ? `radial-gradient(ellipse 80% 50% at 50% -10%, ${project.accentColor}18 0%, rgba(255,255,255,0) 80%), #ffffff` : `radial-gradient(ellipse 80% 50% at 50% -10%, ${project.accentColor}20 0%, rgba(5,5,5,0) 80%), #050505`,
			borderBottom: isLight ? "1px solid rgba(0, 0, 0, 0.08)" : "1px solid rgba(255, 255, 255, 0.06)",
			transition: "background 0.3s ease, border-color 0.3s ease"
		},
		children: /* @__PURE__ */ jsxs("div", {
			style: {
				maxWidth: "1280px",
				margin: "0 auto",
				position: "relative",
				zIndex: 1
			},
			children: [/* @__PURE__ */ jsxs("div", {
				style: {
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					flexWrap: "wrap",
					gap: "14px",
					marginBottom: "20px"
				},
				children: [/* @__PURE__ */ jsxs("div", {
					style: {
						display: "flex",
						alignItems: "center",
						gap: "10px",
						fontSize: "13px",
						color: isLight ? "#666666" : "#777777"
					},
					children: [
						/* @__PURE__ */ jsx(Link, {
							href: "/",
							style: {
								color: "inherit",
								textDecoration: "none"
							},
							children: "Home"
						}),
						/* @__PURE__ */ jsx("span", { children: "/" }),
						/* @__PURE__ */ jsx(Link, {
							href: "/portfolio",
							style: {
								color: "inherit",
								textDecoration: "none"
							},
							children: "Portfolio"
						}),
						/* @__PURE__ */ jsx("span", { children: "/" }),
						/* @__PURE__ */ jsx("span", {
							style: {
								color: isLight ? "#000000" : "#ffffff",
								fontWeight: 600
							},
							children: project.shortTitle
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					style: {
						display: "inline-flex",
						alignItems: "center",
						gap: "8px",
						background: isLight ? "rgba(0, 0, 0, 0.04)" : "rgba(255, 255, 255, 0.04)",
						border: isLight ? "1px solid rgba(0, 0, 0, 0.1)" : "1px solid rgba(255, 255, 255, 0.1)",
						borderRadius: "30px",
						padding: "6px 14px",
						fontSize: "12px",
						fontWeight: 600,
						color: isLight ? "#222222" : "#e0e0e0"
					},
					children: [/* @__PURE__ */ jsx("span", { style: {
						width: "7px",
						height: "7px",
						borderRadius: "50%",
						background: "#10b981",
						boxShadow: "0 0 8px #10b981"
					} }), /* @__PURE__ */ jsxs("span", { children: ["Enterprise Production • ", project.year] })]
				})]
			}), /* @__PURE__ */ jsxs("div", {
				style: {
					display: "grid",
					gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
					gap: "50px",
					alignItems: "center"
				},
				children: [/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx("div", {
						style: { marginBottom: "16px" },
						children: /* @__PURE__ */ jsx("span", {
							style: {
								display: "inline-block",
								fontSize: "11px",
								fontWeight: 800,
								letterSpacing: "0.14em",
								textTransform: "uppercase",
								color: project.accentColor,
								background: `${project.accentColor}15`,
								border: `1px solid ${project.accentColor}35`,
								padding: "5px 14px",
								borderRadius: "6px"
							},
							children: project.category
						})
					}),
					/* @__PURE__ */ jsx("h1", {
						style: {
							fontFamily: "var(--font-heading, Space Grotesk, sans-serif)",
							fontSize: "clamp(32px, 4.8vw, 56px)",
							fontWeight: 800,
							lineHeight: 1.1,
							color: isLight ? "#0a0a0a" : "#ffffff",
							letterSpacing: "-0.03em",
							marginBottom: "22px"
						},
						children: project.title
					}),
					/* @__PURE__ */ jsx("p", {
						style: {
							fontSize: "clamp(15px, 1.8vw, 18px)",
							color: isLight ? "#555555" : "#9a9a9a",
							lineHeight: 1.65,
							marginBottom: "32px"
						},
						children: project.tagline
					}),
					/* @__PURE__ */ jsxs("div", {
						style: {
							display: "grid",
							gridTemplateColumns: "repeat(2, 1fr)",
							gap: "14px",
							padding: "20px",
							background: isLight ? "#f5f5f7" : "rgba(255, 255, 255, 0.03)",
							borderRadius: "16px",
							border: isLight ? "1px solid #e0e0e2" : "1px solid rgba(255, 255, 255, 0.06)",
							marginBottom: "36px"
						},
						children: [
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
								style: {
									fontSize: "11px",
									textTransform: "uppercase",
									color: isLight ? "#777777" : "#666666",
									letterSpacing: "0.08em",
									fontWeight: 700
								},
								children: "Client"
							}), /* @__PURE__ */ jsx("div", {
								style: {
									fontSize: "14px",
									fontWeight: 600,
									color: isLight ? "#111111" : "#ffffff",
									marginTop: "3px"
								},
								children: project.client
							})] }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
								style: {
									fontSize: "11px",
									textTransform: "uppercase",
									color: isLight ? "#777777" : "#666666",
									letterSpacing: "0.08em",
									fontWeight: 700
								},
								children: "Industry"
							}), /* @__PURE__ */ jsx("div", {
								style: {
									fontSize: "14px",
									fontWeight: 600,
									color: isLight ? "#111111" : "#ffffff",
									marginTop: "3px"
								},
								children: project.industry
							})] }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
								style: {
									fontSize: "11px",
									textTransform: "uppercase",
									color: isLight ? "#777777" : "#666666",
									letterSpacing: "0.08em",
									fontWeight: 700
								},
								children: "Timeline"
							}), /* @__PURE__ */ jsx("div", {
								style: {
									fontSize: "14px",
									fontWeight: 600,
									color: isLight ? "#111111" : "#ffffff",
									marginTop: "3px"
								},
								children: project.duration
							})] }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
								style: {
									fontSize: "11px",
									textTransform: "uppercase",
									color: isLight ? "#777777" : "#666666",
									letterSpacing: "0.08em",
									fontWeight: 700
								},
								children: "Architecture"
							}), /* @__PURE__ */ jsx("div", {
								style: {
									fontSize: "14px",
									fontWeight: 600,
									color: project.accentColor,
									marginTop: "3px"
								},
								children: "Microservices & Cloud"
							})] })
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						style: {
							display: "flex",
							alignItems: "center",
							gap: "14px",
							flexWrap: "wrap"
						},
						children: [/* @__PURE__ */ jsxs("a", {
							href: project.liveUrl,
							target: "_blank",
							rel: "noopener noreferrer",
							style: {
								display: "inline-flex",
								alignItems: "center",
								gap: "10px",
								background: project.accentColor,
								color: "#000000",
								padding: "15px 32px",
								borderRadius: "40px",
								fontWeight: 700,
								fontSize: "14px",
								textDecoration: "none",
								transition: "all 0.3s ease",
								boxShadow: `0 8px 25px ${project.accentColor}35`
							},
							children: [/* @__PURE__ */ jsx("span", { children: "Launch Live Prototype" }), /* @__PURE__ */ jsxs("svg", {
								width: "15",
								height: "15",
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: "2.5",
								children: [
									/* @__PURE__ */ jsx("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }),
									/* @__PURE__ */ jsx("polyline", { points: "15 3 21 3 21 9" }),
									/* @__PURE__ */ jsx("line", {
										x1: "10",
										y1: "14",
										x2: "21",
										y2: "3"
									})
								]
							})]
						}), /* @__PURE__ */ jsxs("a", {
							href: "#theatre",
							style: {
								display: "inline-flex",
								alignItems: "center",
								gap: "8px",
								background: isLight ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.05)",
								color: isLight ? "#000000" : "#ffffff",
								padding: "15px 26px",
								borderRadius: "40px",
								fontWeight: 600,
								fontSize: "14px",
								textDecoration: "none",
								border: isLight ? "1px solid rgba(0, 0, 0, 0.12)" : "1px solid rgba(255, 255, 255, 0.12)"
							},
							children: [/* @__PURE__ */ jsx("svg", {
								width: "15",
								height: "15",
								viewBox: "0 0 24 24",
								fill: "currentColor",
								children: /* @__PURE__ */ jsx("polygon", { points: "5 3 19 12 5 21 5 3" })
							}), /* @__PURE__ */ jsx("span", { children: "Watch Film" })]
						})]
					})
				] }), /* @__PURE__ */ jsxs("div", {
					style: { position: "relative" },
					children: [
						/* @__PURE__ */ jsx("div", { style: {
							position: "absolute",
							inset: "-20px",
							background: `radial-gradient(circle, ${project.accentColor}20 0%, rgba(0,0,0,0) 70%)`,
							filter: "blur(50px)",
							pointerEvents: "none"
						} }),
						/* @__PURE__ */ jsxs("div", {
							style: {
								background: isLight ? "#f0f0f2" : "#111114",
								borderRadius: "18px",
								border: isLight ? "1px solid rgba(0, 0, 0, 0.12)" : "1px solid rgba(255, 255, 255, 0.12)",
								boxShadow: isLight ? "0 20px 50px rgba(0,0,0,0.12)" : "0 25px 60px rgba(0,0,0,0.85)",
								overflow: "hidden",
								position: "relative"
							},
							children: [/* @__PURE__ */ jsxs("div", {
								style: {
									display: "flex",
									alignItems: "center",
									justifyContent: "space-between",
									padding: "10px 16px",
									background: isLight ? "#e4e4e7" : "#18181b",
									borderBottom: isLight ? "1px solid rgba(0, 0, 0, 0.08)" : "1px solid rgba(255, 255, 255, 0.06)"
								},
								children: [
									/* @__PURE__ */ jsxs("div", {
										style: {
											display: "flex",
											gap: "6px"
										},
										children: [
											/* @__PURE__ */ jsx("span", { style: {
												width: "10px",
												height: "10px",
												borderRadius: "50%",
												background: "#ff5f56",
												display: "inline-block"
											} }),
											/* @__PURE__ */ jsx("span", { style: {
												width: "10px",
												height: "10px",
												borderRadius: "50%",
												background: "#ffbd2e",
												display: "inline-block"
											} }),
											/* @__PURE__ */ jsx("span", { style: {
												width: "10px",
												height: "10px",
												borderRadius: "50%",
												background: "#27c93f",
												display: "inline-block"
											} })
										]
									}),
									/* @__PURE__ */ jsxs("div", {
										style: {
											fontSize: "11px",
											color: isLight ? "#444444" : "#777777",
											background: isLight ? "#ffffff" : "#09090b",
											padding: "4px 14px",
											borderRadius: "6px",
											maxWidth: "260px",
											width: "100%",
											textAlign: "center",
											overflow: "hidden",
											textOverflow: "ellipsis",
											whiteSpace: "nowrap",
											border: isLight ? "1px solid #d4d4d8" : "none"
										},
										children: ["🔒 ", project.liveUrl]
									}),
									/* @__PURE__ */ jsx("div", {
										style: {
											fontSize: "10px",
											color: project.accentColor,
											fontWeight: 700
										},
										children: "LIVE"
									})
								]
							}), /* @__PURE__ */ jsx("img", {
								src: project.heroImage,
								alt: project.title,
								style: {
									width: "100%",
									maxHeight: "420px",
									objectFit: "cover",
									display: "block"
								}
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							style: {
								position: "absolute",
								right: "-15px",
								bottom: "-35px",
								width: "190px",
								background: isLight ? "#ffffff" : "#0a0a0c",
								borderRadius: "24px",
								padding: "8px",
								border: isLight ? "2px solid rgba(0, 0, 0, 0.12)" : "2px solid rgba(255, 255, 255, 0.16)",
								boxShadow: isLight ? "0 15px 40px rgba(0,0,0,0.15)" : "0 20px 50px rgba(0,0,0,0.9), 0 0 30px rgba(0,0,0,0.5)",
								transform: "rotate(-3deg)",
								transition: "transform 0.3s ease"
							},
							onMouseEnter: (e) => e.currentTarget.style.transform = "rotate(0deg) scale(1.05)",
							onMouseLeave: (e) => e.currentTarget.style.transform = "rotate(-3deg) scale(1)",
							children: [/* @__PURE__ */ jsx("div", { style: {
								width: "60px",
								height: "5px",
								background: isLight ? "#ccc" : "#222",
								borderRadius: "10px",
								margin: "4px auto 8px"
							} }), /* @__PURE__ */ jsx("div", {
								style: {
									borderRadius: "16px",
									overflow: "hidden"
								},
								children: /* @__PURE__ */ jsx("img", {
									src: project.mobileImage,
									alt: "Mobile companion app",
									style: {
										width: "100%",
										height: "240px",
										objectFit: "cover",
										display: "block"
									}
								})
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							style: {
								position: "absolute",
								top: "24px",
								left: "-15px",
								background: isLight ? "rgba(255, 255, 255, 0.95)" : "rgba(10, 10, 12, 0.9)",
								backdropFilter: "blur(16px)",
								border: isLight ? "1px solid rgba(0, 0, 0, 0.1)" : "1px solid rgba(255, 255, 255, 0.12)",
								borderRadius: "12px",
								padding: "10px 16px",
								display: "flex",
								alignItems: "center",
								gap: "10px",
								boxShadow: isLight ? "0 10px 30px rgba(0,0,0,0.1)" : "0 10px 30px rgba(0,0,0,0.6)"
							},
							children: [/* @__PURE__ */ jsx("span", {
								style: { fontSize: "18px" },
								children: "⚡"
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
								style: {
									fontSize: "10px",
									color: isLight ? "#666" : "#888",
									textTransform: "uppercase",
									fontWeight: 700
								},
								children: "Latency"
							}), /* @__PURE__ */ jsx("div", {
								style: {
									fontSize: "13px",
									fontWeight: 700,
									color: isLight ? "#000" : "#fff"
								},
								children: "<45ms P99"
							})] })]
						})
					]
				})]
			})]
		})
	});
}
//#endregion
//#region resources/js/components/project-details/ProjectSubNav.tsx
function ProjectSubNav({ project }) {
	const { theme } = useTheme();
	const isLight = theme === "light";
	const [scrolled, setScrolled] = useState(false);
	const [activeSection, setActiveSection] = useState("overview");
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 400) setScrolled(true);
			else setScrolled(false);
			for (const sectionId of [
				"overview",
				"transformation",
				"theatre",
				"gallery",
				"architecture"
			]) {
				const el = document.getElementById(sectionId);
				if (el) {
					const rect = el.getBoundingClientRect();
					if (rect.top <= 200 && rect.bottom >= 200) {
						setActiveSection(sectionId);
						break;
					}
				}
			}
		};
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	if (!scrolled) return null;
	return /* @__PURE__ */ jsxs("nav", {
		"aria-label": "Case Study Navigation",
		style: {
			position: "fixed",
			bottom: "28px",
			left: "50%",
			transform: "translateX(-50%)",
			zIndex: 9999,
			display: "flex",
			alignItems: "center",
			gap: "6px",
			padding: "8px 14px",
			background: isLight ? "rgba(255, 255, 255, 0.92)" : "rgba(10, 10, 12, 0.88)",
			backdropFilter: "blur(20px)",
			WebkitBackdropFilter: "blur(20px)",
			borderRadius: "40px",
			border: isLight ? "1px solid rgba(0, 0, 0, 0.1)" : "1px solid rgba(255, 255, 255, 0.12)",
			boxShadow: isLight ? "0 15px 40px rgba(0,0,0,0.12), 0 0 20px rgba(0,0,0,0.06)" : "0 20px 50px rgba(0,0,0,0.8), 0 0 30px rgba(0,0,0,0.6)",
			maxWidth: "94vw",
			overflowX: "auto",
			whiteSpace: "nowrap",
			transition: "background 0.3s ease, border-color 0.3s ease"
		},
		children: [
			[
				{
					id: "overview",
					label: "01 Overview"
				},
				{
					id: "transformation",
					label: "02 Transformation"
				},
				{
					id: "theatre",
					label: "03 Demo Theatre"
				},
				{
					id: "gallery",
					label: "04 Screenshots"
				},
				{
					id: "architecture",
					label: "05 Architecture"
				}
			].map((item) => {
				const isActive = activeSection === item.id;
				return /* @__PURE__ */ jsx("a", {
					href: `#${item.id}`,
					style: {
						padding: "8px 16px",
						borderRadius: "30px",
						fontSize: "12px",
						fontWeight: 600,
						letterSpacing: "0.04em",
						textDecoration: "none",
						color: isActive ? "#000000" : isLight ? "#555555" : "#888888",
						background: isActive ? project.accentColor : "transparent",
						transition: "all 0.25s ease"
					},
					children: item.label
				}, item.id);
			}),
			/* @__PURE__ */ jsx("div", { style: {
				width: "1px",
				height: "18px",
				background: isLight ? "rgba(0,0,0,0.12)" : "rgba(255,255,255,0.15)",
				margin: "0 4px"
			} }),
			/* @__PURE__ */ jsxs("a", {
				href: project.liveUrl,
				target: "_blank",
				rel: "noopener noreferrer",
				style: {
					display: "inline-flex",
					alignItems: "center",
					gap: "6px",
					padding: "8px 18px",
					borderRadius: "30px",
					fontSize: "12px",
					fontWeight: 700,
					textDecoration: "none",
					color: isLight ? "#000000" : "#ffffff",
					background: isLight ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.08)",
					border: isLight ? "1px solid rgba(0,0,0,0.1)" : "1px solid rgba(255,255,255,0.15)",
					transition: "all 0.2s ease"
				},
				children: [/* @__PURE__ */ jsx("span", { children: "Live Demo" }), /* @__PURE__ */ jsx("span", {
					style: { color: project.accentColor },
					children: "↗"
				})]
			})
		]
	});
}
//#endregion
//#region resources/js/components/project-details/ProjectImpactBanner.tsx
function ProjectImpactBanner({ project }) {
	const { theme } = useTheme();
	const isLight = theme === "light";
	return /* @__PURE__ */ jsx("section", {
		style: {
			padding: "90px var(--zy-section-pad-x, 24px)",
			background: isLight ? "#ffffff" : "#070709",
			borderBottom: isLight ? "1px solid rgba(0, 0, 0, 0.08)" : "1px solid rgba(255, 255, 255, 0.06)",
			transition: "background 0.3s ease, border-color 0.3s ease"
		},
		children: /* @__PURE__ */ jsxs("div", {
			style: {
				maxWidth: "1240px",
				margin: "0 auto"
			},
			children: [/* @__PURE__ */ jsxs("div", {
				style: {
					padding: "40px 36px",
					background: isLight ? "linear-gradient(135deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.04) 100%)" : "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
					borderRadius: "20px",
					border: isLight ? "1px solid rgba(0, 0, 0, 0.08)" : "1px solid rgba(255, 255, 255, 0.08)",
					marginBottom: "40px",
					position: "relative"
				},
				children: [
					/* @__PURE__ */ jsx("div", {
						style: {
							fontSize: "32px",
							color: project.accentColor,
							lineHeight: 1,
							marginBottom: "12px"
						},
						children: "“"
					}),
					/* @__PURE__ */ jsx("blockquote", {
						style: {
							fontFamily: "var(--font-heading, Space Grotesk, sans-serif)",
							fontSize: "clamp(20px, 2.5vw, 28px)",
							fontWeight: 600,
							lineHeight: 1.45,
							color: isLight ? "#111111" : "#ffffff",
							margin: 0,
							maxWidth: "1000px"
						},
						children: project.summary
					}),
					/* @__PURE__ */ jsxs("div", {
						style: {
							marginTop: "20px",
							fontSize: "13px",
							color: isLight ? "#666666" : "#777777",
							textTransform: "uppercase",
							letterSpacing: "0.1em"
						},
						children: ["Executive Project Summary • ", /* @__PURE__ */ jsx("span", {
							style: { color: project.accentColor },
							children: project.client
						})]
					})
				]
			}), /* @__PURE__ */ jsx("div", {
				style: {
					display: "grid",
					gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
					gap: "20px"
				},
				children: project.metrics.map((metric, i) => /* @__PURE__ */ jsx(GradientCard, {
					themeColor: project.accentColor,
					children: /* @__PURE__ */ jsxs("div", {
						style: {
							padding: "30px 24px",
							textAlign: "left"
						},
						children: [
							/* @__PURE__ */ jsx("div", {
								style: {
									fontFamily: "var(--font-heading, Space Grotesk, sans-serif)",
									fontSize: "clamp(34px, 3.8vw, 46px)",
									fontWeight: 800,
									color: project.accentColor,
									letterSpacing: "-0.02em",
									marginBottom: "6px"
								},
								children: metric.value
							}),
							/* @__PURE__ */ jsx("div", {
								style: {
									fontSize: "15px",
									fontWeight: 700,
									color: isLight ? "#111111" : "#ffffff",
									marginBottom: "6px"
								},
								children: metric.label
							}),
							/* @__PURE__ */ jsx("div", {
								style: {
									fontSize: "12px",
									color: isLight ? "#555555" : "#888888",
									lineHeight: 1.5
								},
								children: metric.desc
							})
						]
					})
				}, i))
			})]
		})
	});
}
//#endregion
//#region resources/js/components/project-details/ProjectComparisonMatrix.tsx
function ProjectComparisonMatrix({ project }) {
	const { theme } = useTheme();
	const isLight = theme === "light";
	return /* @__PURE__ */ jsx("section", {
		id: "transformation",
		style: {
			padding: "100px var(--zy-section-pad-x, 24px)",
			background: isLight ? "#f8f9fa" : "#060608",
			borderBottom: isLight ? "1px solid rgba(0, 0, 0, 0.08)" : "1px solid rgba(255, 255, 255, 0.06)",
			transition: "background 0.3s ease, border-color 0.3s ease"
		},
		children: /* @__PURE__ */ jsxs("div", {
			style: {
				maxWidth: "1240px",
				margin: "0 auto"
			},
			children: [/* @__PURE__ */ jsxs("div", {
				style: {
					textAlign: "center",
					marginBottom: "60px"
				},
				children: [
					/* @__PURE__ */ jsx("span", {
						style: {
							fontSize: "11px",
							fontWeight: 800,
							letterSpacing: "0.15em",
							textTransform: "uppercase",
							color: project.accentColor,
							background: `${project.accentColor}12`,
							padding: "4px 14px",
							borderRadius: "20px",
							border: `1px solid ${project.accentColor}30`
						},
						children: "Before vs After"
					}),
					/* @__PURE__ */ jsx("h2", {
						style: {
							fontFamily: "var(--font-heading, Space Grotesk, sans-serif)",
							fontSize: "clamp(28px, 4vw, 44px)",
							fontWeight: 800,
							marginTop: "16px",
							color: isLight ? "#0a0a0a" : "#ffffff"
						},
						children: "The Architectural Transformation"
					}),
					/* @__PURE__ */ jsx("p", {
						style: {
							color: isLight ? "#666666" : "#888888",
							fontSize: "16px",
							maxWidth: "640px",
							margin: "12px auto 0"
						},
						children: "How we migrated the client from fragile legacy bottlenecks to high-throughput, self-healing cloud infrastructure."
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				style: {
					display: "grid",
					gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
					gap: "30px"
				},
				children: [/* @__PURE__ */ jsxs("div", {
					style: {
						background: isLight ? "linear-gradient(180deg, rgba(239, 68, 68, 0.06) 0%, rgba(255, 245, 245, 0.95) 100%)" : "linear-gradient(180deg, rgba(255, 60, 60, 0.05) 0%, rgba(20, 10, 10, 0.4) 100%)",
						border: isLight ? "1px solid rgba(239, 68, 68, 0.25)" : "1px solid rgba(255, 60, 60, 0.2)",
						borderRadius: "24px",
						padding: "40px 32px",
						boxShadow: isLight ? "0 10px 30px rgba(239, 68, 68, 0.04)" : "none"
					},
					children: [
						/* @__PURE__ */ jsxs("div", {
							style: {
								display: "flex",
								alignItems: "center",
								gap: "10px",
								marginBottom: "18px"
							},
							children: [/* @__PURE__ */ jsx("span", {
								style: { fontSize: "20px" },
								children: "⚠️"
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
								style: {
									fontSize: "11px",
									fontWeight: 800,
									textTransform: "uppercase",
									letterSpacing: "0.1em",
									color: isLight ? "#dc2626" : "#ff6b6b"
								},
								children: "Legacy System (Before)"
							}), /* @__PURE__ */ jsx("h3", {
								style: {
									fontSize: "18px",
									fontWeight: 700,
									color: isLight ? "#1a1a1a" : "#ffffff",
									margin: 0
								},
								children: "Operational Friction Points"
							})] })]
						}),
						/* @__PURE__ */ jsx("p", {
							style: {
								fontSize: "14px",
								color: isLight ? "#555555" : "#aaaaaa",
								lineHeight: 1.7,
								marginBottom: "24px"
							},
							children: project.challenge
						}),
						/* @__PURE__ */ jsx("div", {
							style: {
								display: "flex",
								flexDirection: "column",
								gap: "14px"
							},
							children: project.challengePoints.map((pt, i) => /* @__PURE__ */ jsxs("div", {
								style: {
									display: "flex",
									alignItems: "flex-start",
									gap: "12px",
									padding: "12px 14px",
									borderRadius: "12px",
									background: isLight ? "rgba(239, 68, 68, 0.06)" : "rgba(255, 60, 60, 0.04)",
									border: isLight ? "1px solid rgba(239, 68, 68, 0.15)" : "1px solid rgba(255, 60, 60, 0.1)"
								},
								children: [/* @__PURE__ */ jsx("span", {
									style: {
										color: isLight ? "#dc2626" : "#ff6b6b",
										fontWeight: 800,
										fontSize: "13px",
										marginTop: "1px"
									},
									children: "✕"
								}), /* @__PURE__ */ jsx("span", {
									style: {
										fontSize: "13px",
										color: isLight ? "#333333" : "#dddddd",
										lineHeight: 1.5
									},
									children: pt
								})]
							}, i))
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					style: {
						background: isLight ? `linear-gradient(180deg, ${project.accentColor}12 0%, rgba(255, 255, 255, 0.95) 100%)` : `linear-gradient(180deg, ${project.accentColor}10 0%, rgba(10, 15, 20, 0.5) 100%)`,
						border: `1px solid ${project.accentColor}40`,
						borderRadius: "24px",
						padding: "40px 32px",
						boxShadow: isLight ? `0 15px 40px rgba(0,0,0,0.06), 0 0 30px ${project.accentColor}15` : `0 15px 50px ${project.accentColor}12`
					},
					children: [
						/* @__PURE__ */ jsxs("div", {
							style: {
								display: "flex",
								alignItems: "center",
								gap: "10px",
								marginBottom: "18px"
							},
							children: [/* @__PURE__ */ jsx("span", {
								style: { fontSize: "20px" },
								children: "🚀"
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
								style: {
									fontSize: "11px",
									fontWeight: 800,
									textTransform: "uppercase",
									letterSpacing: "0.1em",
									color: project.accentColor
								},
								children: "Zytrixon Cloud (After)"
							}), /* @__PURE__ */ jsx("h3", {
								style: {
									fontSize: "18px",
									fontWeight: 700,
									color: isLight ? "#1a1a1a" : "#ffffff",
									margin: 0
								},
								children: "Modernized Cloud Solution"
							})] })]
						}),
						/* @__PURE__ */ jsx("p", {
							style: {
								fontSize: "14px",
								color: isLight ? "#555555" : "#aaaaaa",
								lineHeight: 1.7,
								marginBottom: "24px"
							},
							children: project.solution
						}),
						/* @__PURE__ */ jsx("div", {
							style: {
								display: "flex",
								flexDirection: "column",
								gap: "14px"
							},
							children: project.solutionPoints.map((pt, i) => /* @__PURE__ */ jsxs("div", {
								style: {
									display: "flex",
									alignItems: "flex-start",
									gap: "12px",
									padding: "12px 14px",
									borderRadius: "12px",
									background: isLight ? `${project.accentColor}10` : `${project.accentColor}08`,
									border: isLight ? `1px solid ${project.accentColor}30` : `1px solid ${project.accentColor}25`
								},
								children: [/* @__PURE__ */ jsx("span", {
									style: {
										color: project.accentColor,
										fontWeight: 800,
										fontSize: "13px",
										marginTop: "1px"
									},
									children: "✓"
								}), /* @__PURE__ */ jsx("span", {
									style: {
										fontSize: "13px",
										color: isLight ? "#222222" : "#ffffff",
										lineHeight: 1.5
									},
									children: pt
								})]
							}, i))
						})
					]
				})]
			})]
		})
	});
}
//#endregion
//#region resources/js/components/project-details/ProjectCinemaTheatre.tsx
function ProjectCinemaTheatre({ project }) {
	const { theme } = useTheme();
	const isLight = theme === "light";
	return /* @__PURE__ */ jsxs("section", {
		id: "theatre",
		style: {
			padding: "110px var(--zy-section-pad-x, 24px)",
			background: isLight ? "#ffffff" : "#040406",
			borderBottom: isLight ? "1px solid rgba(0, 0, 0, 0.08)" : "1px solid rgba(255, 255, 255, 0.06)",
			position: "relative",
			overflow: "hidden",
			transition: "background 0.3s ease, border-color 0.3s ease"
		},
		children: [/* @__PURE__ */ jsx("div", { style: {
			position: "absolute",
			top: "40%",
			left: "50%",
			transform: "translate(-50%, -50%)",
			width: "900px",
			height: "500px",
			background: isLight ? `radial-gradient(circle, ${project.accentColor}15 0%, rgba(255,255,255,0) 70%)` : `radial-gradient(circle, ${project.accentColor}25 0%, rgba(0,0,0,0) 70%)`,
			filter: "blur(100px)",
			pointerEvents: "none"
		} }), /* @__PURE__ */ jsxs("div", {
			style: {
				maxWidth: "1240px",
				margin: "0 auto",
				position: "relative",
				zIndex: 1
			},
			children: [/* @__PURE__ */ jsxs("div", {
				style: {
					textAlign: "center",
					marginBottom: "45px"
				},
				children: [
					/* @__PURE__ */ jsx("span", {
						style: {
							fontSize: "11px",
							fontWeight: 800,
							letterSpacing: "0.15em",
							textTransform: "uppercase",
							color: project.accentColor,
							background: `${project.accentColor}12`,
							padding: "4px 14px",
							borderRadius: "20px",
							border: `1px solid ${project.accentColor}30`
						},
						children: "4K Walkthrough"
					}),
					/* @__PURE__ */ jsx("h2", {
						style: {
							fontFamily: "var(--font-heading, Space Grotesk, sans-serif)",
							fontSize: "clamp(28px, 4vw, 44px)",
							fontWeight: 800,
							marginTop: "16px",
							color: isLight ? "#0a0a0a" : "#ffffff"
						},
						children: "Video Demonstration"
					}),
					/* @__PURE__ */ jsx("p", {
						style: {
							color: isLight ? "#666666" : "#888888",
							fontSize: "16px",
							maxWidth: "600px",
							margin: "12px auto 0"
						},
						children: "Watch the live interface walkthrough showing sub-second transitions and biometric sync."
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				style: {
					background: isLight ? "#f4f4f7" : "#0a0a0d",
					borderRadius: "24px",
					border: isLight ? "1px solid rgba(0, 0, 0, 0.12)" : "1px solid rgba(255, 255, 255, 0.12)",
					overflow: "hidden",
					boxShadow: isLight ? `0 25px 60px rgba(0,0,0,0.08), 0 0 50px ${project.accentColor}15` : `0 35px 100px rgba(0,0,0,0.95), 0 0 80px ${project.accentColor}18`
				},
				children: [
					/* @__PURE__ */ jsxs("div", {
						style: {
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							padding: "12px 24px",
							background: isLight ? "#eaeaf0" : "#121216",
							borderBottom: isLight ? "1px solid rgba(0, 0, 0, 0.08)" : "1px solid rgba(255, 255, 255, 0.08)"
						},
						children: [/* @__PURE__ */ jsxs("div", {
							style: {
								display: "flex",
								alignItems: "center",
								gap: "8px"
							},
							children: [
								/* @__PURE__ */ jsx("span", { style: {
									width: "10px",
									height: "10px",
									borderRadius: "50%",
									background: "#ff5f56"
								} }),
								/* @__PURE__ */ jsx("span", { style: {
									width: "10px",
									height: "10px",
									borderRadius: "50%",
									background: "#ffbd2e"
								} }),
								/* @__PURE__ */ jsx("span", { style: {
									width: "10px",
									height: "10px",
									borderRadius: "50%",
									background: "#27c93f"
								} }),
								/* @__PURE__ */ jsxs("span", {
									style: {
										marginLeft: "12px",
										fontSize: "12px",
										color: isLight ? "#444444" : "#888888",
										fontWeight: 600
									},
									children: [project.shortTitle, " — Official Demo Film"]
								})
							]
						}), /* @__PURE__ */ jsx("div", {
							style: {
								fontSize: "11px",
								color: project.accentColor,
								fontWeight: 700
							},
							children: "1080p HD"
						})]
					}),
					/* @__PURE__ */ jsx("video", {
						src: project.videoUrl,
						poster: project.videoPoster,
						controls: true,
						playsInline: true,
						style: {
							width: "100%",
							aspectRatio: "16/9",
							display: "block",
							background: "#000000"
						}
					}),
					/* @__PURE__ */ jsxs("div", {
						style: {
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							flexWrap: "wrap",
							gap: "16px",
							padding: "20px 28px",
							background: isLight ? "#eaeaf0" : "#121216",
							borderTop: isLight ? "1px solid rgba(0, 0, 0, 0.08)" : "none"
						},
						children: [/* @__PURE__ */ jsx("div", {
							style: {
								display: "flex",
								alignItems: "center",
								gap: "20px"
							},
							children: /* @__PURE__ */ jsxs("div", {
								style: {
									fontSize: "13px",
									color: isLight ? "#444444" : "#cccccc"
								},
								children: [/* @__PURE__ */ jsx("strong", {
									style: { color: isLight ? "#111111" : "#ffffff" },
									children: "Tech Highlights:"
								}), " Real-time WebSockets, Sharded Data Grid, Sub-45ms Latency"]
							})
						}), /* @__PURE__ */ jsxs("a", {
							href: project.liveUrl,
							target: "_blank",
							rel: "noopener noreferrer",
							style: {
								display: "inline-flex",
								alignItems: "center",
								gap: "8px",
								color: project.accentColor,
								background: isLight ? "#ffffff" : `${project.accentColor}15`,
								border: isLight ? `1px solid ${project.accentColor}60` : `1px solid ${project.accentColor}35`,
								padding: "10px 22px",
								borderRadius: "30px",
								fontSize: "13px",
								fontWeight: 700,
								textDecoration: "none",
								transition: "all 0.2s ease",
								boxShadow: isLight ? "0 2px 8px rgba(0,0,0,0.06)" : "none"
							},
							children: [/* @__PURE__ */ jsx("span", { children: "Open Live Web Application" }), /* @__PURE__ */ jsx("span", { children: "↗" })]
						})]
					})
				]
			})]
		})]
	});
}
//#endregion
//#region resources/js/components/project-details/ProjectInteractiveGallery.tsx
function ProjectInteractiveGallery({ project }) {
	const { theme } = useTheme();
	const isLight = theme === "light";
	const [activeIndex, setActiveIndex] = useState(0);
	const [lightboxOpen, setLightboxOpen] = useState(false);
	const activeScreen = project.screenshots[activeIndex] || project.screenshots[0];
	useEffect(() => {
		const handleKeyDown = (e) => {
			if (e.key === "Escape") setLightboxOpen(false);
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, []);
	return /* @__PURE__ */ jsxs("section", {
		id: "gallery",
		style: {
			padding: "100px var(--zy-section-pad-x, 24px)",
			background: isLight ? "#f8f9fa" : "#060608",
			borderBottom: isLight ? "1px solid rgba(0, 0, 0, 0.08)" : "1px solid rgba(255, 255, 255, 0.06)",
			transition: "background 0.3s ease, border-color 0.3s ease"
		},
		children: [/* @__PURE__ */ jsxs("div", {
			style: {
				maxWidth: "1240px",
				margin: "0 auto"
			},
			children: [/* @__PURE__ */ jsxs("div", {
				style: {
					textAlign: "center",
					marginBottom: "50px"
				},
				children: [
					/* @__PURE__ */ jsx("span", {
						style: {
							fontSize: "11px",
							fontWeight: 800,
							letterSpacing: "0.15em",
							textTransform: "uppercase",
							color: project.accentColor,
							background: `${project.accentColor}12`,
							padding: "4px 14px",
							borderRadius: "20px",
							border: `1px solid ${project.accentColor}30`
						},
						children: "Interface Explorer"
					}),
					/* @__PURE__ */ jsx("h2", {
						style: {
							fontFamily: "var(--font-heading, Space Grotesk, sans-serif)",
							fontSize: "clamp(28px, 4vw, 44px)",
							fontWeight: 800,
							marginTop: "16px",
							color: isLight ? "#0a0a0a" : "#ffffff"
						},
						children: "Explore Application Workflows"
					}),
					/* @__PURE__ */ jsx("p", {
						style: {
							color: isLight ? "#666666" : "#888888",
							fontSize: "16px",
							maxWidth: "640px",
							margin: "12px auto 0"
						},
						children: "Select any view to inspect its architectural purpose, UI workflow, and high-resolution layout."
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				style: {
					display: "grid",
					gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
					gap: "36px",
					alignItems: "center"
				},
				children: [/* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", {
					onClick: () => setLightboxOpen(true),
					style: {
						background: isLight ? "#ffffff" : "#0e0e12",
						borderRadius: "22px",
						border: isLight ? "1px solid rgba(0, 0, 0, 0.1)" : "1px solid rgba(255, 255, 255, 0.12)",
						overflow: "hidden",
						boxShadow: isLight ? "0 20px 50px rgba(0,0,0,0.06)" : "0 25px 70px rgba(0,0,0,0.85)",
						cursor: "pointer",
						position: "relative",
						transition: "all 0.3s ease"
					},
					onMouseEnter: (e) => e.currentTarget.style.borderColor = project.accentColor,
					onMouseLeave: (e) => e.currentTarget.style.borderColor = isLight ? "rgba(0, 0, 0, 0.1)" : "rgba(255, 255, 255, 0.12)",
					children: [/* @__PURE__ */ jsxs("div", {
						style: {
							position: "relative",
							overflow: "hidden",
							height: "420px"
						},
						children: [
							/* @__PURE__ */ jsx("img", {
								src: activeScreen.image,
								alt: activeScreen.title,
								style: {
									width: "100%",
									height: "100%",
									objectFit: "cover",
									display: "block",
									transition: "transform 0.4s ease"
								}
							}),
							/* @__PURE__ */ jsx("div", {
								style: {
									position: "absolute",
									top: "16px",
									right: "16px",
									background: "rgba(0,0,0,0.75)",
									backdropFilter: "blur(8px)",
									color: "#ffffff",
									padding: "6px 14px",
									borderRadius: "20px",
									fontSize: "11px",
									fontWeight: 700,
									border: "1px solid rgba(255,255,255,0.15)"
								},
								children: "🔍 Click to Enlarge"
							}),
							/* @__PURE__ */ jsx("span", {
								style: {
									position: "absolute",
									bottom: "16px",
									left: "16px",
									background: "rgba(0,0,0,0.85)",
									color: project.accentColor,
									padding: "6px 14px",
									borderRadius: "8px",
									fontSize: "11px",
									fontWeight: 800,
									textTransform: "uppercase",
									letterSpacing: "0.08em"
								},
								children: activeScreen.category
							})
						]
					}), /* @__PURE__ */ jsxs("div", {
						style: {
							padding: "24px 28px",
							background: isLight ? "#ffffff" : "#0e0e12",
							borderTop: isLight ? "1px solid rgba(0,0,0,0.06)" : "none"
						},
						children: [/* @__PURE__ */ jsx("h3", {
							style: {
								fontSize: "18px",
								fontWeight: 700,
								color: isLight ? "#111111" : "#ffffff",
								marginBottom: "6px"
							},
							children: activeScreen.title
						}), /* @__PURE__ */ jsx("p", {
							style: {
								fontSize: "14px",
								color: isLight ? "#666666" : "#888888",
								lineHeight: 1.6,
								margin: 0
							},
							children: activeScreen.description
						})]
					})]
				}) }), /* @__PURE__ */ jsx("div", {
					style: {
						display: "flex",
						flexDirection: "column",
						gap: "16px"
					},
					children: project.screenshots.map((ss, idx) => {
						const isSelected = activeIndex === idx;
						return /* @__PURE__ */ jsxs("div", {
							onClick: () => setActiveIndex(idx),
							style: {
								display: "flex",
								alignItems: "center",
								gap: "20px",
								padding: "18px 22px",
								borderRadius: "18px",
								background: isSelected ? isLight ? `linear-gradient(135deg, ${project.accentColor}18 0%, rgba(255,255,255,0.95) 100%)` : `linear-gradient(135deg, ${project.accentColor}15 0%, rgba(18,18,22,0.9) 100%)` : isLight ? "#ffffff" : "rgba(255, 255, 255, 0.03)",
								border: isSelected ? `1px solid ${project.accentColor}60` : isLight ? "1px solid rgba(0, 0, 0, 0.08)" : "1px solid rgba(255, 255, 255, 0.06)",
								boxShadow: isLight ? "0 4px 15px rgba(0,0,0,0.03)" : "none",
								cursor: "pointer",
								transition: "all 0.25s ease"
							},
							onMouseEnter: (e) => {
								if (!isSelected) e.currentTarget.style.background = isLight ? "#f4f4f7" : "rgba(255, 255, 255, 0.06)";
							},
							onMouseLeave: (e) => {
								if (!isSelected) e.currentTarget.style.background = isLight ? "#ffffff" : "rgba(255, 255, 255, 0.03)";
							},
							children: [
								/* @__PURE__ */ jsx("div", {
									style: {
										width: "68px",
										height: "48px",
										borderRadius: "8px",
										overflow: "hidden",
										flexShrink: 0,
										border: isSelected ? `1px solid ${project.accentColor}` : isLight ? "1px solid rgba(0,0,0,0.1)" : "1px solid rgba(255,255,255,0.1)"
									},
									children: /* @__PURE__ */ jsx("img", {
										src: ss.image,
										alt: ss.title,
										style: {
											width: "100%",
											height: "100%",
											objectFit: "cover"
										}
									})
								}),
								/* @__PURE__ */ jsxs("div", {
									style: { flex: 1 },
									children: [
										/* @__PURE__ */ jsx("div", {
											style: {
												display: "flex",
												alignItems: "center",
												gap: "8px"
											},
											children: /* @__PURE__ */ jsx("span", {
												style: {
													fontSize: "11px",
													color: isSelected ? project.accentColor : isLight ? "#777777" : "#666666",
													fontWeight: 800,
													textTransform: "uppercase"
												},
												children: ss.category
											})
										}),
										/* @__PURE__ */ jsx("h4", {
											style: {
												fontSize: "15px",
												fontWeight: 700,
												color: isLight ? "#111111" : "#ffffff",
												marginTop: "2px",
												marginBottom: "2px"
											},
											children: ss.title
										}),
										/* @__PURE__ */ jsx("div", {
											style: {
												fontSize: "12px",
												color: isLight ? "#666666" : "#777777",
												overflow: "hidden",
												textOverflow: "ellipsis",
												whiteSpace: "nowrap",
												maxWidth: "320px"
											},
											children: ss.description
										})
									]
								}),
								/* @__PURE__ */ jsx("div", {
									style: {
										width: "24px",
										height: "24px",
										borderRadius: "50%",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										background: isSelected ? project.accentColor : isLight ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.08)",
										color: isSelected ? "#000000" : isLight ? "#555555" : "#888888",
										fontSize: "11px",
										fontWeight: 800
									},
									children: idx + 1
								})
							]
						}, idx);
					})
				})]
			})]
		}), lightboxOpen && /* @__PURE__ */ jsx("div", {
			style: {
				position: "fixed",
				inset: 0,
				zIndex: 999999,
				background: "rgba(0, 0, 0, 0.95)",
				backdropFilter: "blur(16px)",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				padding: "24px"
			},
			onClick: () => setLightboxOpen(false),
			children: /* @__PURE__ */ jsxs("div", {
				style: {
					maxWidth: "1100px",
					width: "100%",
					background: isLight ? "#ffffff" : "#111114",
					borderRadius: "20px",
					overflow: "hidden",
					border: isLight ? "1px solid rgba(0, 0, 0, 0.15)" : "1px solid rgba(255, 255, 255, 0.15)",
					position: "relative"
				},
				onClick: (e) => e.stopPropagation(),
				children: [
					/* @__PURE__ */ jsx("button", {
						onClick: () => setLightboxOpen(false),
						style: {
							position: "absolute",
							top: "16px",
							right: "16px",
							background: "rgba(0,0,0,0.7)",
							border: "1px solid rgba(255,255,255,0.2)",
							color: "#ffffff",
							width: "38px",
							height: "38px",
							borderRadius: "50%",
							fontSize: "16px",
							cursor: "pointer",
							zIndex: 10
						},
						children: "✕"
					}),
					/* @__PURE__ */ jsx("img", {
						src: activeScreen.image,
						alt: activeScreen.title,
						style: {
							width: "100%",
							maxHeight: "72vh",
							objectFit: "contain",
							background: "#000000"
						}
					}),
					/* @__PURE__ */ jsxs("div", {
						style: { padding: "24px 30px" },
						children: [
							/* @__PURE__ */ jsx("span", {
								style: {
									fontSize: "11px",
									color: project.accentColor,
									fontWeight: 800,
									textTransform: "uppercase"
								},
								children: activeScreen.category
							}),
							/* @__PURE__ */ jsx("h3", {
								style: {
									fontSize: "20px",
									fontWeight: 700,
									color: isLight ? "#111111" : "#ffffff",
									marginTop: "4px"
								},
								children: activeScreen.title
							}),
							/* @__PURE__ */ jsx("p", {
								style: {
									fontSize: "14px",
									color: isLight ? "#666666" : "#999999",
									marginTop: "6px"
								},
								children: activeScreen.description
							})
						]
					})
				]
			})
		})]
	});
}
//#endregion
//#region resources/js/components/project-details/ProjectBlueprintFlow.tsx
function ProjectBlueprintFlow({ project }) {
	const { theme } = useTheme();
	const isLight = theme === "light";
	return /* @__PURE__ */ jsx("section", {
		id: "architecture",
		style: {
			padding: "100px var(--zy-section-pad-x, 24px)",
			background: isLight ? "#ffffff" : "#040406",
			borderBottom: isLight ? "1px solid rgba(0, 0, 0, 0.08)" : "1px solid rgba(255, 255, 255, 0.06)",
			transition: "background 0.3s ease, border-color 0.3s ease"
		},
		children: /* @__PURE__ */ jsxs("div", {
			style: {
				maxWidth: "1240px",
				margin: "0 auto"
			},
			children: [
				/* @__PURE__ */ jsxs("div", {
					style: {
						textAlign: "center",
						marginBottom: "60px"
					},
					children: [
						/* @__PURE__ */ jsx("span", {
							style: {
								fontSize: "11px",
								fontWeight: 800,
								letterSpacing: "0.15em",
								textTransform: "uppercase",
								color: project.accentColor,
								background: `${project.accentColor}12`,
								padding: "4px 14px",
								borderRadius: "20px",
								border: `1px solid ${project.accentColor}30`
							},
							children: "System Blueprint"
						}),
						/* @__PURE__ */ jsx("h2", {
							style: {
								fontFamily: "var(--font-heading, Space Grotesk, sans-serif)",
								fontSize: "clamp(28px, 4vw, 44px)",
								fontWeight: 800,
								marginTop: "16px",
								color: isLight ? "#0a0a0a" : "#ffffff"
							},
							children: "Cloud Architecture & Flow"
						}),
						/* @__PURE__ */ jsx("p", {
							style: {
								color: isLight ? "#666666" : "#888888",
								fontSize: "16px",
								maxWidth: "640px",
								margin: "12px auto 0"
							},
							children: "Distributed multi-tenant topology engineered for sub-second responses and bulletproof data governance."
						})
					]
				}),
				/* @__PURE__ */ jsx("div", {
					style: {
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
						gap: "24px",
						marginBottom: "60px"
					},
					children: project.architectureFlow.map((node, i) => /* @__PURE__ */ jsxs("div", {
						style: {
							background: isLight ? "#ffffff" : "#0a0a0d",
							border: isLight ? "1px solid rgba(0, 0, 0, 0.08)" : "1px solid rgba(255, 255, 255, 0.08)",
							borderRadius: "20px",
							padding: "32px 26px",
							position: "relative",
							boxShadow: isLight ? "0 10px 30px rgba(0,0,0,0.04)" : "none",
							transition: "all 0.3s ease"
						},
						onMouseEnter: (e) => {
							e.currentTarget.style.borderColor = project.accentColor;
							e.currentTarget.style.transform = "translateY(-4px)";
						},
						onMouseLeave: (e) => {
							e.currentTarget.style.borderColor = isLight ? "rgba(0, 0, 0, 0.08)" : "rgba(255, 255, 255, 0.08)";
							e.currentTarget.style.transform = "translateY(0)";
						},
						children: [
							/* @__PURE__ */ jsxs("div", {
								style: {
									display: "inline-flex",
									alignItems: "center",
									justifyContent: "center",
									width: "32px",
									height: "32px",
									borderRadius: "8px",
									background: `${project.accentColor}20`,
									color: project.accentColor,
									fontSize: "13px",
									fontWeight: 800,
									marginBottom: "18px"
								},
								children: ["0", node.step]
							}),
							/* @__PURE__ */ jsx("h3", {
								style: {
									fontSize: "18px",
									fontWeight: 700,
									color: isLight ? "#111111" : "#ffffff",
									marginBottom: "8px"
								},
								children: node.title
							}),
							/* @__PURE__ */ jsx("div", {
								style: {
									fontSize: "13px",
									fontWeight: 600,
									color: project.accentColor,
									marginBottom: "12px"
								},
								children: node.tech
							}),
							/* @__PURE__ */ jsx("p", {
								style: {
									fontSize: "13px",
									color: isLight ? "#666666" : "#888888",
									lineHeight: 1.6,
									margin: 0
								},
								children: node.detail
							})
						]
					}, i))
				}),
				/* @__PURE__ */ jsxs("div", {
					style: {
						padding: "40px",
						background: isLight ? "linear-gradient(135deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.04) 100%)" : "linear-gradient(135deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.005) 100%)",
						borderRadius: "24px",
						border: isLight ? "1px solid rgba(0, 0, 0, 0.08)" : "1px solid rgba(255, 255, 255, 0.08)",
						textAlign: "center"
					},
					children: [/* @__PURE__ */ jsx("div", {
						style: {
							fontSize: "13px",
							textTransform: "uppercase",
							color: isLight ? "#555555" : "#777777",
							letterSpacing: "0.1em",
							fontWeight: 700,
							marginBottom: "24px"
						},
						children: "Production Technology Stack"
					}), /* @__PURE__ */ jsx("div", {
						style: {
							display: "flex",
							flexWrap: "wrap",
							justifyContent: "center",
							gap: "12px"
						},
						children: project.techStack.map((tech, i) => /* @__PURE__ */ jsxs("div", {
							style: {
								background: isLight ? "#ffffff" : "#111115",
								border: isLight ? "1px solid rgba(0, 0, 0, 0.08)" : "1px solid rgba(255, 255, 255, 0.08)",
								borderRadius: "30px",
								padding: "10px 20px",
								fontSize: "13px",
								fontWeight: 600,
								color: isLight ? "#111111" : "#ffffff",
								boxShadow: isLight ? "0 2px 8px rgba(0,0,0,0.04)" : "none",
								display: "flex",
								alignItems: "center",
								gap: "8px"
							},
							children: [/* @__PURE__ */ jsx("span", { children: tech.name }), /* @__PURE__ */ jsxs("span", {
								style: {
									color: isLight ? "#777777" : "#666666",
									fontSize: "11px"
								},
								children: ["• ", tech.category]
							})]
						}, i))
					})]
				})
			]
		})
	});
}
//#endregion
//#region resources/js/pages/ProjectDetails.tsx
function ProjectDetailsInner({ project }) {
	const { theme } = useTheme();
	const isLight = theme === "light";
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [
		/* @__PURE__ */ jsx(CustomCursor, {}),
		/* @__PURE__ */ jsx(TopBar, {}),
		/* @__PURE__ */ jsx(Navbar, {}),
		/* @__PURE__ */ jsx(ProjectSubNav, { project }),
		/* @__PURE__ */ jsxs("main", {
			style: {
				background: isLight ? "#f9fafb" : "#040406",
				color: isLight ? "#0a0a0a" : "#ffffff",
				minHeight: "100vh",
				overflowX: "hidden",
				transition: "background 0.3s ease, color 0.3s ease"
			},
			children: [
				/* @__PURE__ */ jsx(ProjectHeroEditorial, { project }),
				/* @__PURE__ */ jsx(LazySection, {
					minHeight: "400px",
					children: /* @__PURE__ */ jsx(ProjectImpactBanner, { project })
				}),
				/* @__PURE__ */ jsx(LazySection, {
					minHeight: "450px",
					children: /* @__PURE__ */ jsx(ProjectComparisonMatrix, { project })
				}),
				/* @__PURE__ */ jsx(LazySection, {
					minHeight: "550px",
					children: /* @__PURE__ */ jsx(ProjectCinemaTheatre, { project })
				}),
				/* @__PURE__ */ jsx(LazySection, {
					minHeight: "550px",
					children: /* @__PURE__ */ jsx(ProjectInteractiveGallery, { project })
				}),
				/* @__PURE__ */ jsx(LazySection, {
					minHeight: "400px",
					children: /* @__PURE__ */ jsx(ProjectBlueprintFlow, { project })
				}),
				/* @__PURE__ */ jsx(LazySection, {
					minHeight: "250px",
					children: /* @__PURE__ */ jsx(FooterCTA, {})
				})
			]
		}),
		/* @__PURE__ */ jsx(Footer, {})
	] });
}
function ProjectDetails({ project: initialProject, slug }) {
	const project = initialProject || (slug ? getProjectBySlug(slug) : void 0) || DUMMY_PROJECTS[0];
	return /* @__PURE__ */ jsxs(ThemeProvider, { children: [/* @__PURE__ */ jsx(SeoHead, { seo: {
		title: `${project.title} | Zytrixon Tech Portfolio`,
		description: project.summary,
		image: project.heroImage
	} }), /* @__PURE__ */ jsx(ProjectDetailsInner, { project })] });
}
ProjectDetails.layout = null;
//#endregion
export { ProjectDetails as default };

//# sourceMappingURL=ProjectDetails-i32Z_BJA.js.map