import { a as useTheme } from "./custom-cursor-B2HeUCYC.js";
import { t as DUMMY_PROJECTS } from "./projects-data-DEySglv3.js";
import { Link } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//#region resources/js/components/landing/portfolio-preview.tsx
gsap.registerPlugin(ScrollTrigger);
function PortfolioPreview({ hideHeader = false, limit, title = "Projects We're Proud Of", subtitle = "Real results for real businesses — from concept to launch and beyond.", label = "Selected Work" }) {
	const { theme } = useTheme();
	const isLight = theme === "light";
	const sectionRef = useRef(null);
	const itemsRef = useRef([]);
	const [activeFilter, setActiveFilter] = useState("All");
	const categories = [
		"All",
		"Logistics",
		"Mobile Apps",
		"EdTech & ERP",
		"Real Estate",
		"Security",
		"E-Commerce",
		"HealthTech"
	];
	const filteredProjects = DUMMY_PROJECTS.filter((p) => {
		if (activeFilter === "All") return true;
		if (activeFilter === "Logistics") return p.id === "jmd-trucks";
		if (activeFilter === "Mobile Apps") return p.id === "billixa-bill";
		if (activeFilter === "EdTech & ERP") return p.id === "hostel-erp";
		if (activeFilter === "Real Estate") return p.id === "sk-infratech";
		if (activeFilter === "Security") return p.id === "smart-india-detective";
		if (activeFilter === "E-Commerce") return p.id === "thread-ax" || p.id === "threadax" || p.id === "glowsuite";
		if (activeFilter === "HealthTech") return p.id === "zytrixon-labs";
		return true;
	});
	const displayedProjects = limit ? DUMMY_PROJECTS.slice(0, limit) : filteredProjects;
	useEffect(() => {
		if (!sectionRef.current) return;
		const ctx = gsap.context(() => {
			itemsRef.current.filter(Boolean).forEach((item, i) => {
				gsap.fromTo(item, {
					opacity: 0,
					y: 35
				}, {
					opacity: 1,
					y: 0,
					duration: .65,
					delay: i % 3 * .12,
					ease: "power3.out",
					scrollTrigger: {
						trigger: item,
						start: "top 90%",
						once: true
					}
				});
			});
		}, sectionRef);
		return () => ctx.revert();
	}, [activeFilter, limit]);
	return /* @__PURE__ */ jsxs("section", {
		ref: sectionRef,
		id: "work",
		className: "zy-section",
		style: {
			background: "var(--zy-bg)",
			overflow: "hidden"
		},
		children: [
			!hideHeader && /* @__PURE__ */ jsxs("div", {
				className: "zy-section-header",
				style: {
					textAlign: "center",
					marginBottom: "60px"
				},
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "zy-section-label",
						children: label
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "zy-section-title",
						children: title
					}),
					subtitle && /* @__PURE__ */ jsx("p", {
						className: "zy-section-subtitle",
						style: { margin: "16px auto 0" },
						children: subtitle
					})
				]
			}),
			!limit && /* @__PURE__ */ jsx("div", {
				style: {
					display: "flex",
					justifyContent: "center",
					flexWrap: "wrap",
					gap: "10px",
					marginBottom: "50px",
					padding: "0 20px"
				},
				children: categories.map((cat) => {
					const isActive = activeFilter === cat;
					return /* @__PURE__ */ jsx("button", {
						onClick: () => setActiveFilter(cat),
						style: {
							padding: "10px 22px",
							borderRadius: "30px",
							fontSize: "13px",
							fontWeight: 600,
							border: isActive ? "1px solid var(--zy-text-primary)" : "1px solid var(--zy-border-subtle)",
							background: isActive ? "var(--zy-text-primary)" : "var(--zy-card-bg)",
							color: isActive ? "var(--zy-bg)" : "var(--zy-text-secondary)",
							cursor: "pointer",
							transition: "all 0.3s ease"
						},
						children: cat
					}, cat);
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "portfolio-grid",
				style: {
					maxWidth: "1280px",
					margin: "0 auto",
					padding: "0 20px"
				},
				children: displayedProjects.map((project, i) => {
					const projectUrl = `/portfolio/${project.slug}`;
					return /* @__PURE__ */ jsxs("div", {
						ref: (el) => {
							itemsRef.current[i] = el;
						},
						className: "portfolio-card",
						style: {
							display: "flex",
							flexDirection: "column",
							borderRadius: "20px",
							background: "var(--zy-card-bg)",
							border: "1px solid var(--zy-border-subtle)",
							padding: "14px",
							position: "relative",
							overflow: "hidden",
							transition: "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.35s ease, box-shadow 0.35s ease",
							backdropFilter: "blur(10px)",
							opacity: 0
						},
						children: [
							/* @__PURE__ */ jsxs(Link, {
								href: projectUrl,
								className: "portfolio-thumb-wrapper",
								style: {
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									position: "relative",
									width: "100%",
									aspectRatio: "16 / 10",
									borderRadius: "12px",
									overflow: "hidden",
									background: isLight ? "#f8fafc" : "var(--zy-surface-1)",
									border: "1px solid var(--zy-border-subtle)",
									marginBottom: "12px",
									textDecoration: "none"
								},
								children: [/* @__PURE__ */ jsx("img", {
									src: project.heroImage,
									alt: project.shortTitle,
									className: "portfolio-thumb-img",
									style: {
										width: "100%",
										height: "100%",
										objectFit: "contain",
										objectPosition: "center",
										display: "block",
										transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)"
									}
								}), /* @__PURE__ */ jsxs("div", {
									style: {
										position: "absolute",
										bottom: "8px",
										left: "8px",
										background: "var(--zy-glass-bg)",
										backdropFilter: "blur(8px)",
										border: "1px solid var(--zy-glass-border)",
										borderRadius: "20px",
										padding: "2px 8px",
										display: "flex",
										alignItems: "center",
										gap: "5px",
										fontSize: "10px",
										fontWeight: 600,
										color: "var(--zy-text-primary)"
									},
									children: [/* @__PURE__ */ jsx("span", { style: {
										width: "5px",
										height: "5px",
										borderRadius: "50%",
										background: "var(--zy-text-secondary)"
									} }), project.client.split("(")[0].trim()]
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								style: {
									display: "flex",
									alignItems: "center",
									justifyContent: "space-between",
									gap: "6px",
									marginBottom: "6px"
								},
								children: [/* @__PURE__ */ jsx("span", {
									style: {
										fontSize: "10px",
										fontWeight: 700,
										letterSpacing: "0.08em",
										textTransform: "uppercase",
										color: "var(--zy-text-secondary)",
										background: "var(--zy-surface-2)",
										border: "1px solid var(--zy-border-subtle)",
										padding: "2px 7px",
										borderRadius: "5px",
										display: "inline-block"
									},
									children: project.category.split("•")[0].trim()
								}), project.metrics && project.metrics.length > 0 && /* @__PURE__ */ jsxs("span", {
									style: {
										fontSize: "10.5px",
										fontWeight: 700,
										color: "var(--zy-text-primary)",
										background: "var(--zy-surface-2)",
										border: "1px solid var(--zy-border-subtle)",
										borderRadius: "5px",
										padding: "2px 7px"
									},
									children: [
										project.metrics[0].value,
										" ",
										project.metrics[0].label
									]
								})]
							}),
							/* @__PURE__ */ jsx("h3", {
								style: {
									fontFamily: "var(--font-heading)",
									fontSize: "17px",
									fontWeight: 800,
									color: "var(--zy-text-primary)",
									marginBottom: "4px",
									lineHeight: 1.25
								},
								children: /* @__PURE__ */ jsx(Link, {
									href: projectUrl,
									className: "portfolio-title-link",
									style: {
										color: "var(--zy-text-primary)",
										textDecoration: "none",
										transition: "color 0.2s ease"
									},
									children: project.shortTitle
								})
							}),
							/* @__PURE__ */ jsx("p", {
								style: {
									fontSize: "12.5px",
									color: "var(--zy-text-secondary)",
									lineHeight: 1.45,
									marginBottom: "12px",
									display: "-webkit-box",
									WebkitLineClamp: 2,
									WebkitBoxOrient: "vertical",
									overflow: "hidden"
								},
								children: project.tagline
							}),
							/* @__PURE__ */ jsxs("div", {
								style: {
									marginTop: "auto",
									display: "flex",
									alignItems: "center",
									justifyContent: "space-between",
									gap: "10px",
									paddingTop: "10px",
									borderTop: "1px solid var(--zy-border-subtle)"
								},
								children: [/* @__PURE__ */ jsxs(Link, {
									href: projectUrl,
									className: "portfolio-btn-compact",
									style: {
										display: "inline-flex",
										alignItems: "center",
										gap: "5px",
										padding: "6px 14px",
										borderRadius: "20px",
										background: "var(--zy-surface-2)",
										border: "1px solid var(--zy-border-subtle)",
										color: "var(--zy-text-primary)",
										fontSize: "11.5px",
										fontWeight: 600,
										textDecoration: "none",
										transition: "all 0.25s ease"
									},
									children: ["More Details", /* @__PURE__ */ jsxs("svg", {
										width: "11",
										height: "11",
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
									})]
								}), /* @__PURE__ */ jsxs("div", {
									style: {
										display: "flex",
										alignItems: "center",
										gap: "10px"
									},
									children: [project.playStoreUrl && /* @__PURE__ */ jsx("a", {
										href: project.playStoreUrl,
										target: "_blank",
										rel: "noopener noreferrer",
										className: "portfolio-live-link",
										style: {
											fontSize: "11.5px",
											fontWeight: 600,
											textDecoration: "none",
											display: "inline-flex",
											alignItems: "center",
											gap: "3px",
											color: "#10B981",
											transition: "color 0.2s ease"
										},
										children: "Play Store ↗"
									}), /* @__PURE__ */ jsx("a", {
										href: project.liveUrl,
										target: "_blank",
										rel: "noopener noreferrer",
										className: "portfolio-live-link",
										style: {
											fontSize: "11.5px",
											fontWeight: 600,
											textDecoration: "none",
											display: "inline-flex",
											alignItems: "center",
											gap: "3px",
											color: "var(--zy-text-secondary)",
											transition: "color 0.2s ease"
										},
										children: project.playStoreUrl ? "Website ↗" : "Live Demo ↗"
									})]
								})]
							})
						]
					}, project.id);
				})
			}),
			limit && /* @__PURE__ */ jsx("div", {
				style: {
					textAlign: "center",
					marginTop: "60px"
				},
				children: /* @__PURE__ */ jsxs(Link, {
					href: "/work",
					className: "magnetic-btn",
					style: {
						display: "inline-flex",
						alignItems: "center",
						gap: "12px",
						padding: "16px 36px",
						fontSize: "13.5px",
						fontWeight: 700,
						letterSpacing: "0.06em",
						textTransform: "uppercase"
					},
					children: ["View All Projects", /* @__PURE__ */ jsx("svg", {
						className: "btn-arrow",
						width: "16",
						height: "16",
						viewBox: "0 0 24 24",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "2.5",
						children: /* @__PURE__ */ jsx("path", { d: "M5 12h14M12 5l7 7-7 7" })
					})]
				})
			}),
			/* @__PURE__ */ jsx("style", { children: `
                .portfolio-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 28px;
                    align-items: stretch;
                }
                @media (max-width: 1024px) {
                    .portfolio-grid {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 24px;
                    }
                }
                @media (max-width: 640px) {
                    .portfolio-grid {
                        grid-template-columns: 1fr;
                        gap: 20px;
                    }
                }
                .portfolio-card:hover {
                    transform: translateY(-6px);
                    border-color: var(--zy-border-hover) !important;
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25) !important;
                }
                .portfolio-card:hover .portfolio-thumb-img {
                    transform: scale(1.04);
                }
                .portfolio-title-link:hover {
                    color: var(--zy-text-secondary) !important;
                }
                .portfolio-btn-compact:hover {
                    background: var(--zy-text-primary) !important;
                    color: var(--zy-bg) !important;
                    border-color: var(--zy-text-primary) !important;
                }
                .portfolio-live-link {
                    color: var(--zy-text-secondary);
                }
                .portfolio-live-link:hover {
                    color: var(--zy-text-primary) !important;
                }
            ` })
		]
	});
}
//#endregion
export { PortfolioPreview as t };

//# sourceMappingURL=portfolio-preview-eTDYkwfm.js.map