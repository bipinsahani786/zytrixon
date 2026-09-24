import { a as ThemeProvider, n as Footer, r as Navbar, t as CustomCursor } from "./custom-cursor-BiK9FZ3v.js";
import { t as TopBar } from "./top-bar-C3HAjSYy.js";
import { t as LazySection } from "./lazy-section-Bm1gTwLP.js";
import { t as SeoHead } from "./SeoHead-ypAe3bNq.js";
import { t as FooterCTA } from "./footer-cta-CxW1r1Xr.js";
import { n as getProjectBySlug, t as DUMMY_PROJECTS } from "./projects-data-DIuqLfyV.js";
import { t as GradientCard } from "./GradientCard-CpqnXl0Y.js";
import { Link } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/components/project-details/ProjectHeroEditorial.tsx
function ProjectHeroEditorial({ project }) {
	return /* @__PURE__ */ jsx("section", {
		id: "overview",
		style: {
			position: "relative",
			paddingTop: "80px",
			paddingBottom: "85px",
			paddingLeft: "var(--zy-section-pad-x, 24px)",
			paddingRight: "var(--zy-section-pad-x, 24px)",
			overflow: "hidden",
			background: "radial-gradient(ellipse 80% 50% at 50% -10%, var(--zy-surface-2) 0%, transparent 80%), var(--zy-bg)",
			borderBottom: "1px solid var(--zy-border-subtle)",
			transition: "background 0.3s ease, border-color 0.3s ease"
		},
		children: /* @__PURE__ */ jsxs("div", {
			style: {
				maxWidth: "1280px",
				margin: "0 auto",
				position: "relative",
				zIndex: 1
			},
			children: [/* @__PURE__ */ jsx("div", {
				style: {
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					flexWrap: "wrap",
					gap: "14px",
					marginBottom: "20px"
				},
				children: /* @__PURE__ */ jsxs("div", {
					style: {
						display: "flex",
						alignItems: "center",
						gap: "10px",
						fontSize: "13px",
						color: "var(--zy-text-secondary)"
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
								color: "var(--zy-text-primary)",
								fontWeight: 600
							},
							children: project.shortTitle
						})
					]
				})
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
								color: "var(--zy-text-secondary)",
								background: "var(--zy-surface-2)",
								border: "1px solid var(--zy-border-subtle)",
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
							color: "var(--zy-text-primary)",
							letterSpacing: "-0.03em",
							marginBottom: "22px"
						},
						children: project.title
					}),
					/* @__PURE__ */ jsx("p", {
						style: {
							fontSize: "clamp(15px, 1.8vw, 18px)",
							color: "var(--zy-text-secondary)",
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
							background: "var(--zy-surface-1)",
							borderRadius: "16px",
							border: "1px solid var(--zy-border-subtle)",
							marginBottom: "36px"
						},
						children: [
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
								style: {
									fontSize: "11px",
									textTransform: "uppercase",
									color: "var(--zy-text-muted)",
									letterSpacing: "0.08em",
									fontWeight: 700
								},
								children: "Client"
							}), /* @__PURE__ */ jsx("div", {
								style: {
									fontSize: "14px",
									fontWeight: 600,
									color: "var(--zy-text-primary)",
									marginTop: "3px"
								},
								children: project.client
							})] }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
								style: {
									fontSize: "11px",
									textTransform: "uppercase",
									color: "var(--zy-text-muted)",
									letterSpacing: "0.08em",
									fontWeight: 700
								},
								children: "Industry"
							}), /* @__PURE__ */ jsx("div", {
								style: {
									fontSize: "14px",
									fontWeight: 600,
									color: "var(--zy-text-primary)",
									marginTop: "3px"
								},
								children: project.industry
							})] }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
								style: {
									fontSize: "11px",
									textTransform: "uppercase",
									color: "var(--zy-text-muted)",
									letterSpacing: "0.08em",
									fontWeight: 700
								},
								children: "Timeline"
							}), /* @__PURE__ */ jsx("div", {
								style: {
									fontSize: "14px",
									fontWeight: 600,
									color: "var(--zy-text-primary)",
									marginTop: "3px"
								},
								children: project.duration
							})] }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
								style: {
									fontSize: "11px",
									textTransform: "uppercase",
									color: "var(--zy-text-muted)",
									letterSpacing: "0.08em",
									fontWeight: 700
								},
								children: "Architecture"
							}), /* @__PURE__ */ jsx("div", {
								style: {
									fontSize: "14px",
									fontWeight: 600,
									color: "var(--zy-text-primary)",
									marginTop: "3px"
								},
								children: project.architecture ?? "Laravel 11 Architecture"
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
								background: "var(--zy-text-primary)",
								color: "var(--zy-bg)",
								padding: "15px 32px",
								borderRadius: "40px",
								fontWeight: 700,
								fontSize: "14px",
								textDecoration: "none",
								transition: "all 0.3s ease",
								boxShadow: "0 8px 25px rgba(0,0,0,0.18)"
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
								background: "var(--zy-surface-2)",
								color: "var(--zy-text-primary)",
								padding: "15px 26px",
								borderRadius: "40px",
								fontWeight: 600,
								fontSize: "14px",
								textDecoration: "none",
								border: "1px solid var(--zy-border-subtle)"
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
							background: "radial-gradient(circle, var(--zy-card-bg-hover) 0%, rgba(0,0,0,0) 70%)",
							filter: "blur(50px)",
							pointerEvents: "none"
						} }),
						/* @__PURE__ */ jsxs("div", {
							style: {
								background: "var(--zy-surface-1)",
								borderRadius: "18px",
								border: "1px solid var(--zy-border-subtle)",
								boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
								overflow: "hidden",
								position: "relative"
							},
							children: [/* @__PURE__ */ jsxs("div", {
								style: {
									display: "flex",
									alignItems: "center",
									justifyContent: "space-between",
									padding: "10px 16px",
									background: "var(--zy-surface-2)",
									borderBottom: "1px solid var(--zy-border-subtle)"
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
											color: "var(--zy-text-secondary)",
											background: "var(--zy-bg)",
											padding: "4px 14px",
											borderRadius: "6px",
											maxWidth: "260px",
											width: "100%",
											textAlign: "center",
											overflow: "hidden",
											textOverflow: "ellipsis",
											whiteSpace: "nowrap",
											border: "1px solid var(--zy-border-subtle)"
										},
										children: ["🔒 ", project.liveUrl]
									}),
									/* @__PURE__ */ jsx("div", {
										style: {
											fontSize: "10px",
											color: "var(--zy-text-primary)",
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
								right: "-20px",
								bottom: "-45px",
								width: "215px",
								background: "var(--zy-surface-1)",
								borderRadius: "28px",
								padding: "8px",
								border: "2px solid var(--zy-border-subtle)",
								boxShadow: "0 20px 50px rgba(0,0,0,0.3)",
								transform: "rotate(-2.5deg)",
								transition: "transform 0.3s ease",
								zIndex: 3
							},
							onMouseEnter: (e) => e.currentTarget.style.transform = "rotate(0deg) scale(1.03)",
							onMouseLeave: (e) => e.currentTarget.style.transform = "rotate(-2.5deg) scale(1)",
							children: [/* @__PURE__ */ jsx("div", { style: {
								width: "60px",
								height: "5px",
								background: "var(--zy-border-subtle)",
								borderRadius: "10px",
								margin: "4px auto 8px"
							} }), /* @__PURE__ */ jsx("div", {
								style: {
									borderRadius: "18px",
									overflow: "hidden",
									background: "#000000"
								},
								children: /* @__PURE__ */ jsx("img", {
									src: project.mobileImage,
									alt: "Mobile companion app",
									style: {
										width: "100%",
										height: "auto",
										maxHeight: "445px",
										objectFit: "contain",
										display: "block"
									}
								})
							})]
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
	const [scrolled, setScrolled] = useState(false);
	const [activeSection, setActiveSection] = useState("overview");
	const hasVideo = Boolean(project.videoUrl && project.videoUrl.trim() !== "");
	const hasGallery = Boolean(project.screenshots && project.screenshots.length > 0);
	const navItems = [];
	let stepNumber = 1;
	navItems.push({
		id: "overview",
		label: `${String(stepNumber++).padStart(2, "0")} Overview`
	});
	if (project.features && project.features.length > 0) navItems.push({
		id: "features",
		label: `${String(stepNumber++).padStart(2, "0")} Capabilities`
	});
	if (project.challengePoints && project.challengePoints.length > 0) navItems.push({
		id: "story",
		label: `${String(stepNumber++).padStart(2, "0")} Story`
	});
	if (hasVideo) navItems.push({
		id: "theatre",
		label: `${String(stepNumber++).padStart(2, "0")} Demo Theatre`
	});
	if (hasGallery) navItems.push({
		id: "gallery",
		label: `${String(stepNumber++).padStart(2, "0")} Screenshots`
	});
	navItems.push({
		id: "architecture",
		label: `${String(stepNumber++).padStart(2, "0")} Architecture`
	});
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 400) setScrolled(true);
			else setScrolled(false);
			const activeIds = navItems.map((item) => item.id);
			for (const sectionId of activeIds) {
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
	}, [hasVideo, hasGallery]);
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
			background: "var(--zy-glass-bg)",
			backdropFilter: "blur(20px)",
			WebkitBackdropFilter: "blur(20px)",
			borderRadius: "40px",
			border: "1px solid var(--zy-glass-border)",
			boxShadow: "0 20px 45px rgba(0,0,0,0.3)",
			maxWidth: "94vw",
			overflowX: "auto",
			whiteSpace: "nowrap",
			transition: "background 0.3s ease, border-color 0.3s ease"
		},
		children: [
			navItems.map((item) => {
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
						color: isActive ? "var(--zy-bg)" : "var(--zy-text-secondary)",
						background: isActive ? "var(--zy-text-primary)" : "transparent",
						transition: "all 0.25s ease"
					},
					children: item.label
				}, item.id);
			}),
			/* @__PURE__ */ jsx("div", { style: {
				width: "1px",
				height: "18px",
				background: "var(--zy-border-subtle)",
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
					color: "var(--zy-text-primary)",
					background: "var(--zy-surface-2)",
					border: "1px solid var(--zy-border-subtle)",
					transition: "all 0.2s ease"
				},
				children: [/* @__PURE__ */ jsx("span", { children: "Live Demo" }), /* @__PURE__ */ jsx("span", {
					style: { color: "var(--zy-text-primary)" },
					children: "↗"
				})]
			})
		]
	});
}
//#endregion
//#region resources/js/components/project-details/ProjectImpactBanner.tsx
function ProjectImpactBanner({ project }) {
	return /* @__PURE__ */ jsx("section", {
		style: {
			padding: "90px var(--zy-section-pad-x, 24px)",
			background: "var(--zy-bg)",
			borderBottom: "1px solid var(--zy-border-subtle)",
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
					background: "var(--zy-card-bg)",
					borderRadius: "20px",
					border: "1px solid var(--zy-border-subtle)",
					marginBottom: "40px",
					position: "relative"
				},
				children: [
					/* @__PURE__ */ jsx("div", {
						style: {
							fontSize: "32px",
							color: "var(--zy-text-primary)",
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
							color: "var(--zy-text-primary)",
							margin: 0,
							maxWidth: "1000px"
						},
						children: project.summary
					}),
					/* @__PURE__ */ jsxs("div", {
						style: {
							marginTop: "20px",
							fontSize: "13px",
							color: "var(--zy-text-secondary)",
							textTransform: "uppercase",
							letterSpacing: "0.1em"
						},
						children: [
							"Executive Project Summary •",
							" ",
							/* @__PURE__ */ jsx("span", {
								style: {
									color: "var(--zy-text-primary)",
									fontWeight: 600
								},
								children: project.client
							})
						]
					})
				]
			}), /* @__PURE__ */ jsx("div", {
				style: {
					display: "grid",
					gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
					gap: "20px"
				},
				children: project.metrics.map((metric, i) => /* @__PURE__ */ jsx(GradientCard, { children: /* @__PURE__ */ jsxs("div", {
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
								color: "var(--zy-text-primary)",
								letterSpacing: "-0.02em",
								marginBottom: "6px"
							},
							children: metric.value
						}),
						/* @__PURE__ */ jsx("div", {
							style: {
								fontSize: "15px",
								fontWeight: 700,
								color: "var(--zy-text-primary)",
								marginBottom: "6px"
							},
							children: metric.label
						}),
						/* @__PURE__ */ jsx("div", {
							style: {
								fontSize: "12px",
								color: "var(--zy-text-secondary)",
								lineHeight: 1.5
							},
							children: metric.desc
						})
					]
				}) }, i))
			})]
		})
	});
}
//#endregion
//#region resources/js/components/project-details/ProjectFeatures.tsx
function ProjectFeatures({ project }) {
	return /* @__PURE__ */ jsx("section", {
		id: "features",
		style: {
			padding: "90px var(--zy-section-pad-x, 24px)",
			background: "var(--zy-bg)",
			borderBottom: "1px solid var(--zy-border-subtle)",
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
					marginBottom: "50px"
				},
				children: [/* @__PURE__ */ jsx("span", {
					style: {
						fontSize: "11px",
						fontWeight: 800,
						letterSpacing: "0.15em",
						textTransform: "uppercase",
						color: "var(--zy-text-secondary)",
						background: "var(--zy-surface-2)",
						padding: "4px 14px",
						borderRadius: "20px",
						border: "1px solid var(--zy-border-subtle)"
					},
					children: "Feature Breakdown"
				}), /* @__PURE__ */ jsx("h2", {
					style: {
						fontFamily: "var(--font-heading, Space Grotesk, sans-serif)",
						fontSize: "clamp(28px, 4vw, 42px)",
						fontWeight: 800,
						marginTop: "16px",
						color: "var(--zy-text-primary)"
					},
					children: "Core System Capabilities"
				})]
			}), /* @__PURE__ */ jsx("div", {
				style: {
					display: "grid",
					gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
					gap: "24px"
				},
				children: project.features.map((feat, i) => /* @__PURE__ */ jsxs("div", {
					style: {
						background: "var(--zy-surface-1)",
						border: "1px solid var(--zy-border-subtle)",
						borderRadius: "18px",
						padding: "30px 24px",
						transition: "all 0.3s ease"
					},
					onMouseEnter: (e) => {
						e.currentTarget.style.borderColor = "var(--zy-border-hover)";
						e.currentTarget.style.transform = "translateY(-4px)";
					},
					onMouseLeave: (e) => {
						e.currentTarget.style.borderColor = "var(--zy-border-subtle)";
						e.currentTarget.style.transform = "translateY(0)";
					},
					children: [
						/* @__PURE__ */ jsx("div", {
							style: {
								width: "46px",
								height: "46px",
								borderRadius: "12px",
								background: "var(--zy-surface-2)",
								color: "var(--zy-text-primary)",
								border: "1px solid var(--zy-border-subtle)",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								fontSize: "22px",
								marginBottom: "20px"
							},
							children: feat.icon
						}),
						/* @__PURE__ */ jsx("h3", {
							style: {
								fontSize: "18px",
								fontWeight: 700,
								color: "var(--zy-text-primary)",
								marginBottom: "10px"
							},
							children: feat.title
						}),
						/* @__PURE__ */ jsx("p", {
							style: {
								fontSize: "14px",
								color: "var(--zy-text-secondary)",
								lineHeight: 1.6
							},
							children: feat.desc
						})
					]
				}, i))
			})]
		})
	});
}
//#endregion
//#region resources/js/components/project-details/ProjectChallengeSolution.tsx
function ProjectChallengeSolution({ project }) {
	return /* @__PURE__ */ jsx("section", {
		id: "story",
		style: {
			padding: "90px var(--zy-section-pad-x, 24px)",
			background: "var(--zy-bg)",
			borderBottom: "1px solid var(--zy-border-subtle)",
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
							color: "var(--zy-text-secondary)",
							background: "var(--zy-surface-2)",
							padding: "4px 14px",
							borderRadius: "20px",
							border: "1px solid var(--zy-border-subtle)"
						},
						children: "Engineering Story"
					}),
					/* @__PURE__ */ jsx("h2", {
						style: {
							fontFamily: "var(--font-heading, Space Grotesk, sans-serif)",
							fontSize: "clamp(28px, 4vw, 42px)",
							fontWeight: 800,
							marginTop: "16px",
							color: "var(--zy-text-primary)"
						},
						children: "Challenge & Custom Solution"
					}),
					/* @__PURE__ */ jsx("p", {
						style: {
							color: "var(--zy-text-secondary)",
							fontSize: "16px",
							maxWidth: "680px",
							margin: "12px auto 0"
						},
						children: "How Zytrixon replaced fragile legacy monoliths with scalable, event-driven cloud infrastructure."
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				style: {
					display: "grid",
					gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
					gap: "36px"
				},
				children: [/* @__PURE__ */ jsxs("div", {
					style: {
						background: "var(--zy-surface-1)",
						border: "1px solid var(--zy-border-subtle)",
						borderRadius: "24px",
						padding: "40px 32px"
					},
					children: [
						/* @__PURE__ */ jsxs("div", {
							style: {
								display: "inline-flex",
								alignItems: "center",
								gap: "8px",
								fontSize: "11px",
								fontWeight: 800,
								textTransform: "uppercase",
								letterSpacing: "0.1em",
								color: "var(--zy-text-secondary)",
								marginBottom: "16px"
							},
							children: [/* @__PURE__ */ jsx("span", { children: "⚠️" }), " The Client's Bottlenecks"]
						}),
						/* @__PURE__ */ jsx("h3", {
							style: {
								fontSize: "20px",
								fontWeight: 700,
								color: "var(--zy-text-primary)",
								marginBottom: "16px"
							},
							children: "Legacy Infrastructure Limitations"
						}),
						/* @__PURE__ */ jsx("p", {
							style: {
								fontSize: "15px",
								color: "var(--zy-text-secondary)",
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
									gap: "12px"
								},
								children: [/* @__PURE__ */ jsx("span", {
									style: {
										color: "var(--zy-text-secondary)",
										background: "var(--zy-surface-2)",
										border: "1px solid var(--zy-border-subtle)",
										width: "22px",
										height: "22px",
										borderRadius: "50%",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										fontSize: "11px",
										fontWeight: 800,
										flexShrink: 0,
										marginTop: "2px"
									},
									children: "✕"
								}), /* @__PURE__ */ jsx("span", {
									style: {
										fontSize: "14px",
										color: "var(--zy-text-secondary)",
										lineHeight: 1.6
									},
									children: pt
								})]
							}, i))
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					style: {
						background: "var(--zy-surface-1)",
						border: "1px solid var(--zy-border-subtle)",
						borderRadius: "24px",
						padding: "40px 32px",
						boxShadow: "0 10px 40px rgba(0,0,0,0.1)"
					},
					children: [
						/* @__PURE__ */ jsxs("div", {
							style: {
								display: "inline-flex",
								alignItems: "center",
								gap: "8px",
								fontSize: "11px",
								fontWeight: 800,
								textTransform: "uppercase",
								letterSpacing: "0.1em",
								color: "var(--zy-text-primary)",
								marginBottom: "16px"
							},
							children: [/* @__PURE__ */ jsx("span", { children: "✨" }), " The Zytrixon Solution"]
						}),
						/* @__PURE__ */ jsx("h3", {
							style: {
								fontSize: "20px",
								fontWeight: 700,
								color: "var(--zy-text-primary)",
								marginBottom: "16px"
							},
							children: "Modern Cloud Architecture"
						}),
						/* @__PURE__ */ jsx("p", {
							style: {
								fontSize: "15px",
								color: "var(--zy-text-secondary)",
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
									gap: "12px"
								},
								children: [/* @__PURE__ */ jsx("span", {
									style: {
										color: "var(--zy-text-primary)",
										background: "var(--zy-surface-2)",
										border: "1px solid var(--zy-border-subtle)",
										width: "22px",
										height: "22px",
										borderRadius: "50%",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										fontSize: "11px",
										fontWeight: 800,
										flexShrink: 0,
										marginTop: "2px"
									},
									children: "✓"
								}), /* @__PURE__ */ jsx("span", {
									style: {
										fontSize: "14px",
										color: "var(--zy-text-primary)",
										lineHeight: 1.6
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
	if (!project.videoUrl || project.videoUrl.trim() === "") return null;
	return /* @__PURE__ */ jsxs("section", {
		id: "theatre",
		style: {
			padding: "110px var(--zy-section-pad-x, 24px)",
			background: "var(--zy-bg)",
			borderBottom: "1px solid var(--zy-border-subtle)",
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
			background: "radial-gradient(circle, var(--zy-card-bg-hover) 0%, transparent 70%)",
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
							color: "var(--zy-text-secondary)",
							background: "var(--zy-surface-2)",
							padding: "4px 14px",
							borderRadius: "20px",
							border: "1px solid var(--zy-border-subtle)"
						},
						children: "4K Walkthrough"
					}),
					/* @__PURE__ */ jsx("h2", {
						style: {
							fontFamily: "var(--font-heading, Space Grotesk, sans-serif)",
							fontSize: "clamp(28px, 4vw, 44px)",
							fontWeight: 800,
							marginTop: "16px",
							color: "var(--zy-text-primary)"
						},
						children: "Video Demonstration"
					}),
					/* @__PURE__ */ jsx("p", {
						style: {
							color: "var(--zy-text-secondary)",
							fontSize: "16px",
							maxWidth: "600px",
							margin: "12px auto 0"
						},
						children: "Watch the live interface walkthrough showing sub-second transitions and biometric sync."
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				style: {
					background: "var(--zy-surface-1)",
					borderRadius: "24px",
					border: "1px solid var(--zy-border-subtle)",
					overflow: "hidden",
					boxShadow: "0 25px 60px rgba(0,0,0,0.2)"
				},
				children: [
					/* @__PURE__ */ jsxs("div", {
						style: {
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							padding: "12px 24px",
							background: "var(--zy-surface-2)",
							borderBottom: "1px solid var(--zy-border-subtle)"
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
										color: "var(--zy-text-muted)",
										fontWeight: 600
									},
									children: [project.shortTitle, " — Official Demo Film"]
								})
							]
						}), /* @__PURE__ */ jsx("div", {
							style: {
								fontSize: "11px",
								color: "var(--zy-text-secondary)",
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
							background: "var(--zy-surface-2)",
							borderTop: "1px solid var(--zy-border-subtle)"
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
									color: "var(--zy-text-secondary)"
								},
								children: [
									/* @__PURE__ */ jsx("strong", {
										style: { color: "var(--zy-text-primary)" },
										children: "Tech Highlights:"
									}),
									" ",
									"Real-time WebSockets, Sharded Data Grid, High-Throughput Cloud Engine"
								]
							})
						}), /* @__PURE__ */ jsxs("a", {
							href: project.liveUrl,
							target: "_blank",
							rel: "noopener noreferrer",
							style: {
								display: "inline-flex",
								alignItems: "center",
								gap: "8px",
								color: "var(--zy-text-primary)",
								background: "var(--zy-surface-1)",
								border: "1px solid var(--zy-border-subtle)",
								padding: "10px 22px",
								borderRadius: "30px",
								fontSize: "13px",
								fontWeight: 700,
								textDecoration: "none",
								transition: "all 0.2s ease"
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
	const [activeIndex, setActiveIndex] = useState(0);
	const [lightboxOpen, setLightboxOpen] = useState(false);
	const [isTallImage, setIsTallImage] = useState(false);
	const [naturalWidth, setNaturalWidth] = useState(1100);
	useEffect(() => {
		const handleKeyDown = (e) => {
			if (e.key === "Escape") setLightboxOpen(false);
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, []);
	useEffect(() => {
		setIsTallImage(false);
		setNaturalWidth(1100);
	}, [activeIndex]);
	const screenshots = project.screenshots || [];
	if (screenshots.length === 0) return null;
	const isSingle = screenshots.length === 1;
	const activeScreen = screenshots[activeIndex] || screenshots[0];
	return /* @__PURE__ */ jsxs("section", {
		id: "gallery",
		style: {
			padding: "100px var(--zy-section-pad-x, 24px)",
			background: "var(--zy-bg)",
			borderBottom: "1px solid var(--zy-border-subtle)",
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
							color: "var(--zy-text-secondary)",
							background: "var(--zy-surface-2)",
							padding: "4px 14px",
							borderRadius: "20px",
							border: "1px solid var(--zy-border-subtle)"
						},
						children: "Interface Explorer"
					}),
					/* @__PURE__ */ jsx("h2", {
						style: {
							fontFamily: "var(--font-heading, Space Grotesk, sans-serif)",
							fontSize: "clamp(28px, 4vw, 44px)",
							fontWeight: 800,
							marginTop: "16px",
							color: "var(--zy-text-primary)"
						},
						children: "Explore Application Workflows"
					}),
					/* @__PURE__ */ jsx("p", {
						style: {
							color: "var(--zy-text-secondary)",
							fontSize: "16px",
							maxWidth: "640px",
							margin: "12px auto 0"
						},
						children: "Select any view to inspect its architectural purpose, UI workflow, and high-resolution layout."
					})
				]
			}), isSingle ? /* @__PURE__ */ jsx("div", {
				style: {
					maxWidth: "980px",
					margin: "0 auto"
				},
				children: /* @__PURE__ */ jsxs("div", {
					onClick: () => setLightboxOpen(true),
					style: {
						background: "var(--zy-surface-1)",
						borderRadius: "22px",
						border: "1px solid var(--zy-border-subtle)",
						overflow: "hidden",
						boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
						cursor: "pointer",
						position: "relative",
						transition: "all 0.3s ease"
					},
					onMouseEnter: (e) => e.currentTarget.style.borderColor = "var(--zy-border-hover)",
					onMouseLeave: (e) => e.currentTarget.style.borderColor = "var(--zy-border-subtle)",
					children: [/* @__PURE__ */ jsxs("div", {
						style: {
							position: "relative",
							overflow: "hidden",
							maxHeight: "560px"
						},
						children: [
							/* @__PURE__ */ jsx("img", {
								src: activeScreen.image,
								alt: activeScreen.title,
								style: {
									width: "100%",
									height: "auto",
									maxHeight: "560px",
									objectFit: "cover",
									objectPosition: "top",
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
								children: "🔍 View Full Layout"
							}),
							/* @__PURE__ */ jsx("span", {
								style: {
									position: "absolute",
									bottom: "16px",
									left: "16px",
									background: "rgba(0,0,0,0.85)",
									backdropFilter: "blur(8px)",
									color: "#ffffff",
									padding: "6px 14px",
									borderRadius: "8px",
									fontSize: "11px",
									fontWeight: 800,
									textTransform: "uppercase",
									letterSpacing: "0.08em",
									border: "1px solid rgba(255,255,255,0.18)"
								},
								children: activeScreen.category
							})
						]
					}), /* @__PURE__ */ jsxs("div", {
						style: {
							padding: "24px 28px",
							background: "var(--zy-surface-1)",
							borderTop: "1px solid var(--zy-border-subtle)"
						},
						children: [/* @__PURE__ */ jsx("h3", {
							style: {
								fontSize: "18px",
								fontWeight: 700,
								color: "var(--zy-text-primary)",
								marginBottom: "6px"
							},
							children: activeScreen.title
						}), /* @__PURE__ */ jsx("p", {
							style: {
								fontSize: "14px",
								color: "var(--zy-text-secondary)",
								lineHeight: 1.6,
								margin: 0
							},
							children: activeScreen.description
						})]
					})]
				})
			}) : /* @__PURE__ */ jsxs("div", {
				style: {
					display: "grid",
					gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
					gap: "36px",
					alignItems: "center"
				},
				children: [/* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", {
					onClick: () => setLightboxOpen(true),
					style: {
						background: "var(--zy-surface-1)",
						borderRadius: "22px",
						border: "1px solid var(--zy-border-subtle)",
						overflow: "hidden",
						boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
						cursor: "pointer",
						position: "relative",
						transition: "all 0.3s ease"
					},
					onMouseEnter: (e) => e.currentTarget.style.borderColor = "var(--zy-border-hover)",
					onMouseLeave: (e) => e.currentTarget.style.borderColor = "var(--zy-border-subtle)",
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
									objectPosition: "top",
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
								children: "🔍 View Full Layout"
							}),
							/* @__PURE__ */ jsx("span", {
								style: {
									position: "absolute",
									bottom: "16px",
									left: "16px",
									background: "rgba(0,0,0,0.85)",
									backdropFilter: "blur(8px)",
									color: "#ffffff",
									padding: "6px 14px",
									borderRadius: "8px",
									fontSize: "11px",
									fontWeight: 800,
									textTransform: "uppercase",
									letterSpacing: "0.08em",
									border: "1px solid rgba(255,255,255,0.18)"
								},
								children: activeScreen.category
							})
						]
					}), /* @__PURE__ */ jsxs("div", {
						style: {
							padding: "24px 28px",
							background: "var(--zy-surface-1)",
							borderTop: "1px solid var(--zy-border-subtle)"
						},
						children: [/* @__PURE__ */ jsx("h3", {
							style: {
								fontSize: "18px",
								fontWeight: 700,
								color: "var(--zy-text-primary)",
								marginBottom: "6px"
							},
							children: activeScreen.title
						}), /* @__PURE__ */ jsx("p", {
							style: {
								fontSize: "14px",
								color: "var(--zy-text-secondary)",
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
								background: isSelected ? "var(--zy-card-bg-hover)" : "var(--zy-card-bg)",
								border: isSelected ? "1px solid var(--zy-text-primary)" : "1px solid var(--zy-border-subtle)",
								cursor: "pointer",
								transition: "all 0.25s ease"
							},
							onMouseEnter: (e) => {
								if (!isSelected) e.currentTarget.style.background = "var(--zy-card-bg-hover)";
							},
							onMouseLeave: (e) => {
								if (!isSelected) e.currentTarget.style.background = "var(--zy-card-bg)";
							},
							children: [
								/* @__PURE__ */ jsx("div", {
									style: {
										width: "68px",
										height: "48px",
										borderRadius: "8px",
										overflow: "hidden",
										flexShrink: 0,
										border: isSelected ? "1px solid var(--zy-text-primary)" : "1px solid var(--zy-border-subtle)"
									},
									children: /* @__PURE__ */ jsx("img", {
										src: ss.image,
										alt: ss.title,
										style: {
											width: "100%",
											height: "100%",
											objectFit: "cover",
											objectPosition: "top"
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
													color: isSelected ? "var(--zy-text-primary)" : "var(--zy-text-muted)",
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
												color: "var(--zy-text-primary)",
												marginTop: "2px",
												marginBottom: "2px"
											},
											children: ss.title
										}),
										/* @__PURE__ */ jsx("div", {
											style: {
												fontSize: "12px",
												color: "var(--zy-text-secondary)",
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
										background: isSelected ? "var(--zy-text-primary)" : "var(--zy-surface-2)",
										color: isSelected ? "var(--zy-bg)" : "var(--zy-text-secondary)",
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
		}), lightboxOpen && /* @__PURE__ */ jsxs("div", {
			style: {
				position: "fixed",
				inset: 0,
				zIndex: 999999,
				background: "rgba(0, 0, 0, 0.94)",
				backdropFilter: "blur(16px)",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				padding: "16px"
			},
			onClick: () => setLightboxOpen(false),
			children: [/* @__PURE__ */ jsx("button", {
				onClick: () => setLightboxOpen(false),
				className: "zy-lightbox-screen-close",
				"aria-label": "Close modal (Esc)",
				title: "Close (Esc)",
				children: /* @__PURE__ */ jsx("svg", {
					width: "18",
					height: "18",
					viewBox: "0 0 16 16",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					children: /* @__PURE__ */ jsx("path", {
						d: "M12.5 3.5L3.5 12.5M3.5 3.5L12.5 12.5",
						stroke: "currentColor",
						strokeWidth: "2.5",
						strokeLinecap: "round",
						strokeLinejoin: "round"
					})
				})
			}), /* @__PURE__ */ jsxs("div", {
				style: {
					maxWidth: naturalWidth < 600 ? "min(92vw, 440px)" : "min(94vw, 1140px)",
					width: "100%",
					maxHeight: "94vh",
					display: "flex",
					flexDirection: "column",
					background: "var(--zy-surface-1)",
					borderRadius: "22px",
					overflow: "hidden",
					border: "1px solid var(--zy-border-subtle)",
					boxShadow: "0 25px 70px rgba(0,0,0,0.6)",
					position: "relative",
					transition: "max-width 0.3s ease"
				},
				onClick: (e) => e.stopPropagation(),
				children: [
					/* @__PURE__ */ jsxs("div", {
						style: {
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							padding: "14px 22px",
							borderBottom: "1px solid var(--zy-border-subtle)",
							background: "var(--zy-surface-2)",
							flexShrink: 0,
							gap: "16px"
						},
						children: [/* @__PURE__ */ jsxs("div", {
							style: {
								flex: 1,
								minWidth: 0
							},
							children: [/* @__PURE__ */ jsx("span", {
								style: {
									fontSize: "11px",
									color: "var(--zy-text-secondary)",
									fontWeight: 800,
									textTransform: "uppercase",
									letterSpacing: "0.06em"
								},
								children: activeScreen.category
							}), /* @__PURE__ */ jsx("h3", {
								style: {
									fontSize: "16px",
									fontWeight: 700,
									color: "var(--zy-text-primary)",
									margin: "2px 0 0 0",
									overflow: "hidden",
									textOverflow: "ellipsis",
									whiteSpace: "nowrap"
								},
								children: activeScreen.title
							})]
						}), /* @__PURE__ */ jsxs("div", {
							style: {
								display: "flex",
								alignItems: "center",
								gap: "10px",
								flexShrink: 0
							},
							children: [/* @__PURE__ */ jsx("a", {
								href: activeScreen.fullImage || activeScreen.image,
								target: "_blank",
								rel: "noreferrer",
								className: "zy-modal-action-btn",
								children: "Open Full Size ↗"
							}), /* @__PURE__ */ jsx("button", {
								onClick: () => setLightboxOpen(false),
								className: "zy-modal-close-btn",
								"aria-label": "Close modal (Esc)",
								title: "Close (Esc)",
								children: /* @__PURE__ */ jsx("svg", {
									width: "16",
									height: "16",
									viewBox: "0 0 16 16",
									fill: "none",
									xmlns: "http://www.w3.org/2000/svg",
									children: /* @__PURE__ */ jsx("path", {
										d: "M12.5 3.5L3.5 12.5M3.5 3.5L12.5 12.5",
										stroke: "currentColor",
										strokeWidth: "2.5",
										strokeLinecap: "round",
										strokeLinejoin: "round"
									})
								})
							})]
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						style: {
							flex: 1,
							overflowY: "auto",
							maxHeight: "calc(94vh - 120px)",
							background: "#08080a",
							display: "flex",
							justifyContent: "center",
							alignItems: "flex-start",
							padding: "24px 16px"
						},
						children: /* @__PURE__ */ jsx("img", {
							src: activeScreen.fullImage || activeScreen.image,
							alt: activeScreen.title,
							onLoad: (e) => {
								const img = e.currentTarget;
								setIsTallImage(img.naturalHeight > img.naturalWidth * 1.3);
								setNaturalWidth(img.naturalWidth);
							},
							style: {
								width: isTallImage ? "100%" : "auto",
								maxWidth: naturalWidth < 600 ? `${naturalWidth}px` : "100%",
								maxHeight: isTallImage ? "none" : "76vh",
								height: "auto",
								display: "block",
								margin: "0 auto",
								borderRadius: "8px",
								boxShadow: "0 10px 40px rgba(0,0,0,0.6)"
							}
						})
					}),
					activeScreen.description && /* @__PURE__ */ jsx("div", {
						style: {
							padding: "14px 22px",
							borderTop: "1px solid var(--zy-border-subtle)",
							background: "var(--zy-surface-1)",
							fontSize: "13px",
							color: "var(--zy-text-secondary)",
							lineHeight: 1.5,
							flexShrink: 0
						},
						children: activeScreen.description
					})
				]
			})]
		})]
	});
}
//#endregion
//#region resources/js/components/project-details/ProjectBlueprintFlow.tsx
function ProjectBlueprintFlow({ project }) {
	return /* @__PURE__ */ jsx("section", {
		id: "architecture",
		style: {
			padding: "100px var(--zy-section-pad-x, 24px)",
			background: "var(--zy-bg)",
			borderBottom: "1px solid var(--zy-border-subtle)",
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
								color: "var(--zy-text-secondary)",
								background: "var(--zy-surface-2)",
								padding: "4px 14px",
								borderRadius: "20px",
								border: "1px solid var(--zy-border-subtle)"
							},
							children: "System Blueprint"
						}),
						/* @__PURE__ */ jsx("h2", {
							style: {
								fontFamily: "var(--font-heading, Space Grotesk, sans-serif)",
								fontSize: "clamp(28px, 4vw, 44px)",
								fontWeight: 800,
								marginTop: "16px",
								color: "var(--zy-text-primary)"
							},
							children: "Cloud Architecture & Flow"
						}),
						/* @__PURE__ */ jsx("p", {
							style: {
								color: "var(--zy-text-secondary)",
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
							background: "var(--zy-surface-1)",
							border: "1px solid var(--zy-border-subtle)",
							borderRadius: "20px",
							padding: "32px 26px",
							position: "relative",
							transition: "all 0.3s ease"
						},
						onMouseEnter: (e) => {
							e.currentTarget.style.borderColor = "var(--zy-border-hover)";
							e.currentTarget.style.transform = "translateY(-4px)";
						},
						onMouseLeave: (e) => {
							e.currentTarget.style.borderColor = "var(--zy-border-subtle)";
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
									background: "var(--zy-surface-2)",
									color: "var(--zy-text-primary)",
									border: "1px solid var(--zy-border-subtle)",
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
									color: "var(--zy-text-primary)",
									marginBottom: "8px"
								},
								children: node.title
							}),
							/* @__PURE__ */ jsx("div", {
								style: {
									fontSize: "13px",
									fontWeight: 600,
									color: "var(--zy-text-secondary)",
									marginBottom: "12px"
								},
								children: node.tech
							}),
							/* @__PURE__ */ jsx("p", {
								style: {
									fontSize: "13px",
									color: "var(--zy-text-secondary)",
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
						background: "var(--zy-card-bg)",
						borderRadius: "24px",
						border: "1px solid var(--zy-border-subtle)",
						textAlign: "center"
					},
					children: [/* @__PURE__ */ jsx("div", {
						style: {
							fontSize: "13px",
							textTransform: "uppercase",
							color: "var(--zy-text-muted)",
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
								background: "var(--zy-surface-1)",
								border: "1px solid var(--zy-border-subtle)",
								borderRadius: "30px",
								padding: "10px 20px",
								fontSize: "13px",
								fontWeight: 600,
								color: "var(--zy-text-primary)",
								display: "flex",
								alignItems: "center",
								gap: "8px"
							},
							children: [/* @__PURE__ */ jsx("span", { children: tech.name }), /* @__PURE__ */ jsxs("span", {
								style: {
									color: "var(--zy-text-muted)",
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
	const hasVideo = Boolean(project.videoUrl && project.videoUrl.trim() !== "");
	const hasScreenshots = Boolean(project.screenshots && project.screenshots.length > 0);
	const hasFeatures = Boolean(project.features && project.features.length > 0);
	const hasStory = Boolean(project.challengePoints && project.challengePoints.length > 0);
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [
		/* @__PURE__ */ jsx(CustomCursor, {}),
		/* @__PURE__ */ jsx(TopBar, {}),
		/* @__PURE__ */ jsx(Navbar, {}),
		/* @__PURE__ */ jsx(ProjectSubNav, { project }),
		/* @__PURE__ */ jsxs("main", {
			style: {
				background: "var(--zy-bg)",
				color: "var(--zy-text-primary)",
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
				hasFeatures && /* @__PURE__ */ jsx(LazySection, {
					minHeight: "400px",
					children: /* @__PURE__ */ jsx(ProjectFeatures, { project })
				}),
				hasStory && /* @__PURE__ */ jsx(LazySection, {
					minHeight: "450px",
					children: /* @__PURE__ */ jsx(ProjectChallengeSolution, { project })
				}),
				hasVideo && /* @__PURE__ */ jsx(LazySection, {
					minHeight: "550px",
					children: /* @__PURE__ */ jsx(ProjectCinemaTheatre, { project })
				}),
				hasScreenshots && /* @__PURE__ */ jsx(LazySection, {
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

//# sourceMappingURL=ProjectDetails-C1dR6qN7.js.map