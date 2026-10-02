import { i as ThemeProvider, n as Footer, r as Navbar, t as CustomCursor } from "./custom-cursor-B2HeUCYC.js";
import { t as TopBar } from "./top-bar-C3HAjSYy.js";
import { t as LazySection } from "./lazy-section-Bm1gTwLP.js";
import { t as SeoHead } from "./SeoHead-Fv09oBYU.js";
import { t as FooterCTA } from "./footer-cta-CxW1r1Xr.js";
import { n as getProjectBySlug, t as DUMMY_PROJECTS } from "./projects-data-DEySglv3.js";
import { a as ProjectSubNav, i as ProjectImpactBanner, n as ProjectCinemaTheatre, o as ProjectHeroEditorial, r as ProjectFeatures, t as ProjectBlueprintFlow } from "./ProjectBlueprintFlow-BjHAWkNC.js";
import { useEffect, useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
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
		className: "gallery-section",
		style: {
			padding: "100px var(--zy-section-pad-x, 24px)",
			background: "var(--zy-bg)",
			borderBottom: "1px solid var(--zy-border-subtle)",
			transition: "background 0.3s ease, border-color 0.3s ease"
		},
		children: [
			/* @__PURE__ */ jsxs("div", {
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
					className: "gallery-split-grid",
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
							className: "gallery-stage-viewport",
							style: {
								position: "relative",
								overflow: "hidden",
								height: "480px",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								background: "var(--zy-surface-2)"
							},
							children: [
								/* @__PURE__ */ jsx("img", {
									src: activeScreen.image,
									alt: activeScreen.title,
									style: {
										maxWidth: "100%",
										maxHeight: "100%",
										width: "auto",
										height: "auto",
										objectFit: "contain",
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
							className: "gallery-stage-info",
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
						className: "gallery-selector-list",
						style: {
							display: "flex",
							flexDirection: "column",
							gap: "14px",
							maxHeight: "560px",
							overflowY: "auto",
							paddingRight: "8px"
						},
						children: project.screenshots.map((ss, idx) => {
							const isSelected = activeIndex === idx;
							return /* @__PURE__ */ jsxs("div", {
								onClick: () => setActiveIndex(idx),
								className: "gallery-selector-item",
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
											width: "54px",
											height: "60px",
											borderRadius: "8px",
											overflow: "hidden",
											flexShrink: 0,
											background: "var(--zy-surface-2)",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											border: isSelected ? "1px solid var(--zy-text-primary)" : "1px solid var(--zy-border-subtle)"
										},
										children: /* @__PURE__ */ jsx("img", {
											src: ss.image,
											alt: ss.title,
											style: {
												maxWidth: "100%",
												maxHeight: "100%",
												objectFit: "contain"
											}
										})
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "gallery-selector-content",
										style: {
											flex: 1,
											minWidth: 0
										},
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
													marginBottom: "2px",
													whiteSpace: "nowrap",
													overflow: "hidden",
													textOverflow: "ellipsis"
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
													maxWidth: "100%"
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
			}),
			lightboxOpen && /* @__PURE__ */ jsxs("div", {
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
			}),
			/* @__PURE__ */ jsx("style", { children: `
                @media (max-width: 768px) {
                    .gallery-section {
                        padding: 48px 16px !important;
                        overflow: hidden !important;
                    }
                    .gallery-split-grid {
                        grid-template-columns: 1fr !important;
                        gap: 20px !important;
                        width: 100% !important;
                        max-width: 100% !important;
                    }
                    .gallery-stage-viewport {
                        height: 240px !important;
                    }
                    .gallery-stage-info {
                        padding: 16px 18px !important;
                    }
                    .gallery-selector-list {
                        max-height: none !important;
                        padding-right: 0 !important;
                        gap: 10px !important;
                        width: 100% !important;
                        max-width: 100% !important;
                        box-sizing: border-box !important;
                    }
                    .gallery-selector-item {
                        padding: 12px 14px !important;
                        gap: 12px !important;
                        border-radius: 14px !important;
                        width: 100% !important;
                        max-width: 100% !important;
                        box-sizing: border-box !important;
                    }
                    .gallery-selector-content {
                        min-width: 0 !important;
                        flex: 1 !important;
                    }
                    .gallery-selector-content h4,
                    .gallery-selector-content div {
                        white-space: nowrap !important;
                        overflow: hidden !important;
                        text-overflow: ellipsis !important;
                        max-width: 100% !important;
                    }
                }
            ` })
		]
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

//# sourceMappingURL=ProjectDetails-DBzfegZb.js.map