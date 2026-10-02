import { t as GradientCard } from "./GradientCard-D3hoDW52.js";
import { Link } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/components/project-details/ProjectHeroEditorial.tsx
function ProjectHeroEditorial({ project }) {
	return /* @__PURE__ */ jsxs("section", {
		id: "overview",
		className: "hero-editorial-section",
		style: {
			position: "relative",
			paddingTop: "80px",
			paddingBottom: "120px",
			paddingLeft: "var(--zy-section-pad-x, 24px)",
			paddingRight: "var(--zy-section-pad-x, 24px)",
			overflow: "hidden",
			background: "radial-gradient(ellipse 80% 50% at 50% -10%, var(--zy-surface-2) 0%, transparent 80%), var(--zy-bg)",
			borderBottom: "1px solid var(--zy-border-subtle)",
			transition: "background 0.3s ease, border-color 0.3s ease"
		},
		children: [/* @__PURE__ */ jsxs("div", {
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
					project.id === "grocery-mart" ? /* @__PURE__ */ jsxs("div", {
						style: {
							display: "flex",
							flexWrap: "wrap",
							alignItems: "center",
							gap: "8px",
							marginBottom: "14px"
						},
						children: [/* @__PURE__ */ jsxs("span", {
							style: {
								display: "inline-flex",
								alignItems: "center",
								gap: "6px",
								fontSize: "11px",
								fontWeight: 800,
								letterSpacing: "0.08em",
								textTransform: "uppercase",
								color: "#38BDF8",
								background: "rgba(56, 189, 248, 0.12)",
								border: "1px solid rgba(56, 189, 248, 0.35)",
								padding: "5px 12px",
								borderRadius: "20px",
								boxShadow: "0 0 14px rgba(56, 189, 248, 0.15)"
							},
							children: [/* @__PURE__ */ jsx("span", { children: "📱" }), " 2 Mobile Apps (Customer + Picker)"]
						}), /* @__PURE__ */ jsxs("span", {
							style: {
								display: "inline-flex",
								alignItems: "center",
								gap: "6px",
								fontSize: "11px",
								fontWeight: 800,
								letterSpacing: "0.08em",
								textTransform: "uppercase",
								color: "#10B981",
								background: "rgba(16, 185, 129, 0.12)",
								border: "1px solid rgba(16, 185, 129, 0.35)",
								padding: "5px 12px",
								borderRadius: "20px",
								boxShadow: "0 0 14px rgba(16, 185, 129, 0.15)"
							},
							children: [/* @__PURE__ */ jsx("span", { children: "🖥️" }), " Web Management Suite (Admin & Store)"]
						})]
					}) : null,
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
							marginBottom: "36px",
							position: "relative",
							zIndex: 4
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
									marginTop: "3px",
									lineHeight: 1.4,
									wordBreak: "break-word"
								},
								children: project.architecture ?? "Laravel 11 Architecture"
							})] })
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "hero-editorial-actions",
						style: {
							display: "flex",
							alignItems: "center",
							gap: "14px",
							flexWrap: "wrap"
						},
						children: [project.playStoreUrl ? /* @__PURE__ */ jsxs("a", {
							href: project.playStoreUrl,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "editorial-btn-play",
							style: {
								display: "inline-flex",
								alignItems: "center",
								gap: "10px",
								background: "linear-gradient(135deg, #059669 0%, #10B981 100%)",
								color: "#ffffff",
								padding: "15px 30px",
								borderRadius: "40px",
								fontWeight: 700,
								fontSize: "14px",
								textDecoration: "none",
								transition: "all 0.3s ease",
								boxShadow: "0 8px 25px rgba(16,185,129,0.35)"
							},
							children: [/* @__PURE__ */ jsx("svg", {
								width: "18",
								height: "18",
								viewBox: "0 0 24 24",
								fill: "currentColor",
								children: /* @__PURE__ */ jsx("path", { d: "M3.609 1.814L13.793 12 3.61 22.186c-.368-.31-.61-.795-.61-1.393V3.207c0-.598.242-1.083.61-1.393zm11.59 11.59l2.42 2.42-12.784 7.378 10.364-9.798zm0-2.808L4.835.798l12.784 7.378-2.42 2.42zm1.414 1.404l3.523 2.034c.828.478.828 1.258 0 1.736l-3.523 2.034-2.12-2.12 2.12-2.12z" })
							}), /* @__PURE__ */ jsx("span", { children: "Get on Google Play" })]
						}) : null, /* @__PURE__ */ jsxs("a", {
							href: project.liveUrl,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "editorial-btn-launch",
							style: {
								display: "inline-flex",
								alignItems: "center",
								gap: "10px",
								background: project.playStoreUrl ? "var(--zy-surface-2)" : "var(--zy-text-primary)",
								color: project.playStoreUrl ? "var(--zy-text-primary)" : "var(--zy-bg)",
								padding: "15px 32px",
								borderRadius: "40px",
								fontWeight: 700,
								fontSize: "14px",
								textDecoration: "none",
								transition: "all 0.3s ease",
								border: project.playStoreUrl ? "1px solid var(--zy-border-subtle)" : "none",
								boxShadow: "0 8px 25px rgba(0,0,0,0.18)"
							},
							children: [/* @__PURE__ */ jsx("span", { children: project.playStoreUrl ? "Visit Website" : "Launch Live Prototype" }), /* @__PURE__ */ jsxs("svg", {
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
							children: [
								/* @__PURE__ */ jsxs("div", {
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
								}),
								/* @__PURE__ */ jsx("img", {
									src: project.heroImage,
									alt: project.title,
									style: {
										width: "100%",
										height: "auto",
										objectFit: "contain",
										display: "block"
									}
								}),
								project.id === "grocery-mart" ? /* @__PURE__ */ jsxs("div", {
									style: {
										position: "absolute",
										bottom: "12px",
										left: "12px",
										background: "rgba(15, 23, 42, 0.88)",
										backdropFilter: "blur(8px)",
										border: "1px solid rgba(56, 189, 248, 0.4)",
										color: "#38BDF8",
										fontSize: "10.5px",
										fontWeight: 800,
										padding: "4px 10px",
										borderRadius: "8px",
										display: "flex",
										alignItems: "center",
										gap: "6px",
										letterSpacing: "0.04em",
										boxShadow: "0 4px 14px rgba(0,0,0,0.3)"
									},
									children: [/* @__PURE__ */ jsx("span", { children: "🖥️" }), /* @__PURE__ */ jsx("span", { children: "WEB MANAGEMENT PANEL (ADMIN & STORE)" })]
								}) : null
							]
						}),
						project.id === "grocery-mart" ? /* @__PURE__ */ jsxs("div", {
							className: "hero-editorial-dual-phones",
							style: {
								position: "absolute",
								right: "-15px",
								bottom: "-95px",
								display: "flex",
								alignItems: "flex-end",
								zIndex: 3
							},
							children: [/* @__PURE__ */ jsxs("div", {
								className: "hero-editorial-phone-left",
								style: {
									width: "185px",
									background: "var(--zy-surface-1)",
									borderRadius: "26px",
									padding: "7px",
									border: "2px solid var(--zy-border-subtle)",
									boxShadow: "0 20px 50px rgba(0,0,0,0.3)",
									transform: "rotate(-4deg)",
									transition: "all 0.3s ease",
									marginRight: "-45px",
									zIndex: 3,
									cursor: "pointer",
									position: "relative"
								},
								onMouseEnter: (e) => {
									e.currentTarget.style.transform = "rotate(-1deg) scale(1.06) translateY(-8px)";
									e.currentTarget.style.zIndex = "6";
								},
								onMouseLeave: (e) => {
									e.currentTarget.style.transform = "rotate(-4deg) scale(1) translateY(0)";
									e.currentTarget.style.zIndex = "3";
								},
								children: [
									/* @__PURE__ */ jsx("div", {
										style: {
											position: "absolute",
											top: "-10px",
											left: "50%",
											transform: "translateX(-50%)",
											background: "#10B981",
											color: "#ffffff",
											fontSize: "8.5px",
											fontWeight: 800,
											padding: "2px 8px",
											borderRadius: "10px",
											whiteSpace: "nowrap",
											zIndex: 10,
											boxShadow: "0 4px 10px rgba(16, 185, 129, 0.4)",
											letterSpacing: "0.03em"
										},
										children: "🛒 CUSTOMER APP"
									}),
									/* @__PURE__ */ jsx("div", { style: {
										width: "50px",
										height: "4px",
										background: "var(--zy-border-subtle)",
										borderRadius: "10px",
										margin: "3px auto 6px"
									} }),
									/* @__PURE__ */ jsx("div", {
										style: {
											borderRadius: "16px",
											overflow: "hidden",
											background: "#000000"
										},
										children: /* @__PURE__ */ jsx("img", {
											src: project.mobileImage,
											alt: "Customer Mobile App",
											style: {
												width: "100%",
												height: "auto",
												maxHeight: "385px",
												objectFit: "contain",
												display: "block"
											}
										})
									})
								]
							}), /* @__PURE__ */ jsxs("div", {
								className: "hero-editorial-phone-right",
								style: {
									width: "195px",
									background: "var(--zy-surface-1)",
									borderRadius: "26px",
									padding: "7px",
									border: "2px solid var(--zy-border-subtle)",
									boxShadow: "0 25px 60px rgba(0,0,0,0.35)",
									transform: "rotate(2deg)",
									transition: "all 0.3s ease",
									zIndex: 4,
									cursor: "pointer",
									position: "relative"
								},
								onMouseEnter: (e) => {
									e.currentTarget.style.transform = "rotate(0deg) scale(1.06) translateY(-8px)";
									e.currentTarget.style.zIndex = "6";
								},
								onMouseLeave: (e) => {
									e.currentTarget.style.transform = "rotate(2deg) scale(1) translateY(0)";
									e.currentTarget.style.zIndex = "4";
								},
								children: [
									/* @__PURE__ */ jsx("div", {
										style: {
											position: "absolute",
											top: "-10px",
											left: "50%",
											transform: "translateX(-50%)",
											background: "#F59E0B",
											color: "#ffffff",
											fontSize: "8.5px",
											fontWeight: 800,
											padding: "2px 8px",
											borderRadius: "10px",
											whiteSpace: "nowrap",
											zIndex: 10,
											boxShadow: "0 4px 10px rgba(245, 158, 11, 0.4)",
											letterSpacing: "0.03em"
										},
										children: "🛵 PARTNER & RIDER"
									}),
									/* @__PURE__ */ jsx("div", { style: {
										width: "50px",
										height: "4px",
										background: "var(--zy-border-subtle)",
										borderRadius: "10px",
										margin: "3px auto 6px"
									} }),
									/* @__PURE__ */ jsx("div", {
										style: {
											borderRadius: "16px",
											overflow: "hidden",
											background: "#000000"
										},
										children: /* @__PURE__ */ jsx("img", {
											src: project.secondMobileImage || "/assets/products/grocery-mart/WhatsApp Image 2026-09-27 at 1.42.06 AM.jpeg",
											alt: "Delivery Partner and Rider App",
											style: {
												width: "100%",
												height: "auto",
												maxHeight: "395px",
												objectFit: "contain",
												display: "block"
											}
										})
									})
								]
							})]
						}) : /* @__PURE__ */ jsxs("div", {
							className: "hero-editorial-mobile-frame",
							style: {
								position: "absolute",
								right: "-20px",
								bottom: "-95px",
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
		}), /* @__PURE__ */ jsx("style", { children: `
                @media (max-width: 900px) {
                    .hero-editorial-mobile-frame {
                        bottom: -110px !important;
                    }
                    .hero-editorial-dual-phones {
                        bottom: -110px !important;
                        right: 0px !important;
                    }
                    .hero-editorial-phone-left {
                        width: 155px !important;
                        margin-right: -35px !important;
                    }
                    .hero-editorial-phone-right {
                        width: 165px !important;
                    }
                    .hero-editorial-section {
                        padding-bottom: 145px !important;
                    }
                }
                @media (max-width: 640px) {
                    .hero-editorial-mobile-frame {
                        bottom: -125px !important;
                        right: -5px !important;
                        width: 195px !important;
                    }
                    .hero-editorial-dual-phones {
                        bottom: -125px !important;
                        right: -5px !important;
                    }
                    .hero-editorial-phone-left {
                        width: 140px !important;
                        margin-right: -30px !important;
                    }
                    .hero-editorial-phone-right {
                        width: 150px !important;
                    }
                    .hero-editorial-section {
                        padding-bottom: 160px !important;
                    }
                }
                    .hero-editorial-actions {
                        gap: 8px !important;
                    }
                    .editorial-btn-launch {
                        padding: 9px 16px !important;
                        font-size: 12px !important;
                        gap: 6px !important;
                        border-radius: 24px !important;
                    }
                    .editorial-btn-launch svg {
                        width: 13px !important;
                        height: 13px !important;
                    }
                    .editorial-btn-play {
                        padding: 9px 14px !important;
                        font-size: 12px !important;
                        gap: 6px !important;
                        border-radius: 24px !important;
                    }
                    .editorial-btn-play svg {
                        width: 14px !important;
                        height: 14px !important;
                    }
                }
            ` })]
	});
}
//#endregion
//#region resources/js/components/project-details/ProjectSubNav.tsx
function ProjectSubNav({ project, hideStory = false, workEasyMode = false }) {
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
	if (!hideStory && project.challengePoints && project.challengePoints.length > 0) navItems.push({
		id: "story",
		label: `${String(stepNumber++).padStart(2, "0")} Story`
	});
	else if (workEasyMode && project.solutionPoints && project.solutionPoints.length > 0) navItems.push({
		id: "work-easy",
		label: `${String(stepNumber++).padStart(2, "0")} Work Made Easy`
	});
	if (hasVideo && project.id !== "grocery-mart") navItems.push({
		id: "theatre",
		label: `${String(stepNumber++).padStart(2, "0")} Demo Theatre`
	});
	if (project.id === "grocery-mart") navItems.push({
		id: "platforms",
		label: `${String(stepNumber++).padStart(2, "0")} Multi-Platform`
	});
	else if (hasGallery) navItems.push({
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
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsxs("nav", {
		className: "project-subnav-dock",
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
	}), /* @__PURE__ */ jsx("style", { children: `
                @media (max-width: 768px) {
                    .project-subnav-dock {
                        display: none !important;
                    }
                }
            ` })] });
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
			children: [
				/* @__PURE__ */ jsxs("div", {
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
				}),
				project.testimonial && /* @__PURE__ */ jsxs("div", {
					style: {
						padding: "34px 32px",
						background: "linear-gradient(135deg, rgba(37,99,235,0.06) 0%, var(--zy-surface-1) 100%)",
						borderRadius: "20px",
						border: "1px solid rgba(37,99,235,0.22)",
						marginBottom: "40px",
						position: "relative"
					},
					children: [
						/* @__PURE__ */ jsxs("div", {
							style: {
								display: "flex",
								alignItems: "center",
								gap: "4px",
								marginBottom: "14px",
								color: "#F59E0B"
							},
							children: ["★".repeat(5), /* @__PURE__ */ jsx("span", {
								style: {
									fontSize: "12px",
									fontWeight: 700,
									color: "var(--zy-text-secondary)",
									marginLeft: "8px",
									letterSpacing: "0.08em",
									textTransform: "uppercase"
								},
								children: "Verified Client Testimonial"
							})]
						}),
						/* @__PURE__ */ jsxs("blockquote", {
							style: {
								fontFamily: "var(--font-heading, Space Grotesk, sans-serif)",
								fontSize: "clamp(17px, 2vw, 22px)",
								fontWeight: 500,
								fontStyle: "italic",
								lineHeight: 1.55,
								color: "var(--zy-text-primary)",
								margin: "0 0 20px 0",
								maxWidth: "1050px"
							},
							children: [
								"“",
								project.testimonial.quote,
								"”"
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							style: {
								display: "flex",
								alignItems: "center",
								gap: "12px"
							},
							children: [/* @__PURE__ */ jsx("div", {
								style: {
									width: "42px",
									height: "42px",
									borderRadius: "50%",
									background: "linear-gradient(135deg, #2563EB, #10B981)",
									color: "#ffffff",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									fontWeight: 700,
									fontSize: "16px"
								},
								children: project.testimonial.author.charAt(0)
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
								style: {
									fontSize: "15px",
									fontWeight: 700,
									color: "var(--zy-text-primary)"
								},
								children: project.testimonial.author
							}), /* @__PURE__ */ jsx("div", {
								style: {
									fontSize: "12px",
									color: "var(--zy-text-secondary)"
								},
								children: project.testimonial.role
							})] })]
						})
					]
				}),
				/* @__PURE__ */ jsx("div", {
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
				})
			]
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
//#region resources/js/components/project-details/ProjectBlueprintFlow.tsx
function ProjectBlueprintFlow({ project }) {
	return /* @__PURE__ */ jsxs("section", {
		id: "architecture",
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
					className: "techstack-card-container",
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
						className: "techstack-badges-grid",
						style: {
							display: "flex",
							flexWrap: "wrap",
							justifyContent: "center",
							gap: "12px"
						},
						children: project.techStack.map((tech, i) => /* @__PURE__ */ jsxs("div", {
							className: "techstack-badge-item",
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
							children: [/* @__PURE__ */ jsx("span", {
								className: "techstack-badge-name",
								children: tech.name
							}), /* @__PURE__ */ jsxs("span", {
								className: "techstack-badge-category",
								style: {
									color: "var(--zy-text-muted)",
									fontSize: "11px"
								},
								children: [/* @__PURE__ */ jsx("span", {
									className: "techstack-dot",
									children: "• "
								}), tech.category]
							})]
						}, i))
					})]
				})
			]
		}), /* @__PURE__ */ jsx("style", { children: `
                @media (max-width: 640px) {
                    .techstack-card-container {
                        padding: 24px 14px !important;
                        border-radius: 16px !important;
                    }
                    .techstack-badges-grid {
                        display: grid !important;
                        grid-template-columns: repeat(3, 1fr) !important;
                        gap: 8px !important;
                    }
                    .techstack-badge-item {
                        padding: 8px 6px !important;
                        border-radius: 10px !important;
                        flex-direction: column !important;
                        justify-content: center !important;
                        text-align: center !important;
                        gap: 2px !important;
                        min-width: 0 !important;
                    }
                    .techstack-badge-name {
                        font-size: 11.5px !important;
                        font-weight: 700 !important;
                        line-height: 1.2 !important;
                        white-space: nowrap !important;
                        overflow: hidden !important;
                        text-overflow: ellipsis !important;
                        max-width: 100% !important;
                    }
                    .techstack-badge-category {
                        font-size: 9.5px !important;
                        line-height: 1.2 !important;
                        white-space: nowrap !important;
                        overflow: hidden !important;
                        text-overflow: ellipsis !important;
                        max-width: 100% !important;
                        opacity: 0.8 !important;
                    }
                    .techstack-dot {
                        display: none !important;
                    }
                }
                @media (max-width: 370px) {
                    .techstack-badges-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                    }
                }
            ` })]
	});
}
//#endregion
export { ProjectSubNav as a, ProjectImpactBanner as i, ProjectCinemaTheatre as n, ProjectHeroEditorial as o, ProjectFeatures as r, ProjectBlueprintFlow as t };

//# sourceMappingURL=ProjectBlueprintFlow-BjHAWkNC.js.map