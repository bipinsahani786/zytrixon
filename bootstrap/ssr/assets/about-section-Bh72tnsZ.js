import { i as Logo, o as useTheme } from "./footer-CezFkQSw.js";
import { useEffect, useRef, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//#region resources/js/components/landing/about-section.tsx
gsap.registerPlugin(ScrollTrigger);
function AboutSection() {
	const sectionRef = useRef(null);
	const contentRef = useRef(null);
	const imageRef = useRef(null);
	const { theme } = useTheme();
	const isLight = theme === "light";
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
		if (!sectionRef.current) return;
		const ctx = gsap.context(() => {
			gsap.fromTo(imageRef.current, {
				opacity: 0,
				x: -60,
				rotate: 3
			}, {
				opacity: 1,
				x: 0,
				rotate: 2,
				duration: .9,
				ease: "power3.out",
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top 75%",
					once: true
				}
			});
			gsap.fromTo(contentRef.current, {
				opacity: 0,
				x: 60
			}, {
				opacity: 1,
				x: 0,
				duration: .9,
				ease: "power3.out",
				delay: .15,
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top 75%",
					once: true
				}
			});
		}, sectionRef);
		return () => ctx.revert();
	}, []);
	const activeIsLight = mounted && isLight;
	return /* @__PURE__ */ jsxs("section", {
		ref: sectionRef,
		id: "about",
		className: "zy-section",
		style: { background: "var(--zy-black)" },
		children: [/* @__PURE__ */ jsxs("div", {
			className: "about-grid",
			style: {
				maxWidth: 1200,
				margin: "0 auto",
				display: "grid",
				gridTemplateColumns: "1fr 1fr",
				gap: 64,
				alignItems: "center"
			},
			children: [/* @__PURE__ */ jsxs("div", {
				ref: imageRef,
				style: {
					position: "relative",
					opacity: 0
				},
				children: [
					/* @__PURE__ */ jsx("div", { style: {
						position: "absolute",
						inset: -16,
						background: "linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05))",
						filter: "blur(40px)",
						borderRadius: "50%"
					} }),
					/* @__PURE__ */ jsx("div", {
						style: {
							position: "relative",
							border: activeIsLight ? "1px solid var(--zy-gray-border)" : "1px solid #222",
							background: activeIsLight ? "#fdfdfd" : "#111",
							padding: 8,
							borderRadius: 16,
							transform: "rotate(2deg)",
							transition: "transform 0.5s var(--zy-ease)",
							overflow: "hidden"
						},
						onMouseEnter: (e) => {
							e.currentTarget.style.transform = "rotate(0deg)";
						},
						onMouseLeave: (e) => {
							e.currentTarget.style.transform = "rotate(2deg)";
						},
						children: /* @__PURE__ */ jsxs("div", {
							style: {
								width: "100%",
								height: 380,
								borderRadius: 12,
								background: activeIsLight ? "linear-gradient(135deg, #f5f5f5 0%, #ffffff 50%, #f5f5f5 100%)" : "linear-gradient(135deg, #111 0%, #0a0a0a 50%, #111 100%)",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								position: "relative",
								overflow: "hidden"
							},
							children: [
								/* @__PURE__ */ jsx("div", { style: {
									position: "absolute",
									inset: 0,
									backgroundImage: activeIsLight ? "linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)" : "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
									backgroundSize: "30px 30px"
								} }),
								/* @__PURE__ */ jsx("div", {
									style: {
										position: "absolute",
										opacity: activeIsLight ? .03 : .06,
										width: 400,
										display: "flex",
										justifyContent: "center"
									},
									children: /* @__PURE__ */ jsx(Logo, {})
								}),
								/* @__PURE__ */ jsxs("div", {
									style: {
										position: "relative",
										zIndex: 1,
										textAlign: "center",
										padding: 40
									},
									children: [
										/* @__PURE__ */ jsx("div", {
											style: {
												width: "100%",
												maxWidth: 280,
												height: "auto",
												margin: "0 auto 10px",
												display: "flex",
												alignItems: "center",
												justifyContent: "center"
											},
											children: /* @__PURE__ */ jsx(Logo, {})
										}),
										/* @__PURE__ */ jsx("div", {
											style: {
												fontSize: 13,
												color: "var(--zy-gray-text)",
												letterSpacing: "0.2em",
												textTransform: "uppercase",
												marginTop: 16
											},
											children: "Engineering Digital Dominance"
										}),
										/* @__PURE__ */ jsxs("div", {
											style: {
												marginTop: 24,
												display: "flex",
												justifyContent: "center",
												gap: 16
											},
											children: [
												/* @__PURE__ */ jsx("div", { style: {
													width: 8,
													height: 8,
													borderRadius: "50%",
													background: activeIsLight ? "#000" : "#FFFFFF",
													animation: "pulse 2s infinite"
												} }),
												/* @__PURE__ */ jsx("div", { style: {
													width: 8,
													height: 8,
													borderRadius: "50%",
													background: activeIsLight ? "#000" : "#FFFFFF",
													animation: "pulse 2s infinite 0.3s"
												} }),
												/* @__PURE__ */ jsx("div", { style: {
													width: 8,
													height: 8,
													borderRadius: "50%",
													background: activeIsLight ? "#000" : "#FFFFFF",
													animation: "pulse 2s infinite 0.6s"
												} })
											]
										})
									]
								})
							]
						})
					}),
					/* @__PURE__ */ jsx("style", { children: `
                        @keyframes pulse { 0%, 100% { opacity: 0.3; } 50% { opacity: 1; } }
                    ` })
				]
			}), /* @__PURE__ */ jsxs("div", {
				ref: contentRef,
				style: { opacity: 0 },
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "zy-section-label",
						children: "About Zytrixon"
					}),
					/* @__PURE__ */ jsxs("h2", {
						className: "zy-section-title",
						style: { marginBottom: 24 },
						children: [
							"Local Roots,",
							" ",
							/* @__PURE__ */ jsx("span", {
								style: { color: "var(--zy-white)" },
								children: "Global Standards."
							})
						]
					}),
					/* @__PURE__ */ jsxs("p", {
						style: {
							fontSize: 17,
							lineHeight: 1.8,
							color: "var(--zy-gray-light)",
							marginBottom: 24
						},
						children: [
							"Zytrixon Tech isn't just another software company — we are a",
							" ",
							/* @__PURE__ */ jsx("strong", {
								style: { color: "var(--zy-white)" },
								children: "technology partner for visionaries"
							}),
							". Based in Samastipur, Bihar, our dedicated team of engineers, designers, and strategists bridge the gap between complex engineering and user-friendly design."
						]
					}),
					/* @__PURE__ */ jsx("p", {
						style: {
							fontSize: 15,
							lineHeight: 1.7,
							color: "var(--zy-gray-text)",
							marginBottom: 32
						},
						children: "With 60% of our clients spanning USA, UK, and UAE, we bring global engineering standards to every project — delivering enterprise-grade solutions that transform businesses into digital powerhouses."
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "about-stats-grid",
						style: {
							display: "grid",
							gridTemplateColumns: "1fr 1fr",
							gap: 24,
							marginBottom: 32
						},
						children: [
							/* @__PURE__ */ jsxs("div", {
								style: {
									borderLeft: "2px solid #FFFFFF",
									paddingLeft: 16
								},
								children: [/* @__PURE__ */ jsx("div", {
									style: {
										fontFamily: "var(--font-heading)",
										fontSize: 28,
										fontWeight: 700,
										color: "var(--zy-white)"
									},
									children: "100%"
								}), /* @__PURE__ */ jsx("div", {
									style: {
										fontSize: 11,
										color: "var(--zy-gray-text)",
										textTransform: "uppercase",
										letterSpacing: "0.1em"
									},
									children: "On-Time Delivery"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								style: {
									borderLeft: "2px solid #FFFFFF",
									paddingLeft: 16
								},
								children: [/* @__PURE__ */ jsx("div", {
									style: {
										fontFamily: "var(--font-heading)",
										fontSize: 28,
										fontWeight: 700,
										color: "var(--zy-white)"
									},
									children: "24/7"
								}), /* @__PURE__ */ jsx("div", {
									style: {
										fontSize: 11,
										color: "var(--zy-gray-text)",
										textTransform: "uppercase",
										letterSpacing: "0.1em"
									},
									children: "Global Support"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								style: {
									borderLeft: "2px solid #FFFFFF",
									paddingLeft: 16
								},
								children: [/* @__PURE__ */ jsx("div", {
									style: {
										fontFamily: "var(--font-heading)",
										fontSize: 28,
										fontWeight: 700,
										color: "var(--zy-white)"
									},
									children: "98%"
								}), /* @__PURE__ */ jsx("div", {
									style: {
										fontSize: 11,
										color: "var(--zy-gray-text)",
										textTransform: "uppercase",
										letterSpacing: "0.1em"
									},
									children: "Success Rate"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								style: {
									borderLeft: "2px solid #FFFFFF",
									paddingLeft: 16
								},
								children: [/* @__PURE__ */ jsx("div", {
									style: {
										fontFamily: "var(--font-heading)",
										fontSize: 28,
										fontWeight: 700,
										color: "var(--zy-white)"
									},
									children: "5+"
								}), /* @__PURE__ */ jsx("div", {
									style: {
										fontSize: 11,
										color: "var(--zy-gray-text)",
										textTransform: "uppercase",
										letterSpacing: "0.1em"
									},
									children: "Countries Served"
								})]
							})
						]
					}),
					/* @__PURE__ */ jsx("a", {
						href: "/about",
						className: "svg-underline",
						style: {
							fontFamily: "var(--font-heading)",
							fontSize: 14,
							fontWeight: 600,
							color: "var(--zy-white)",
							textDecoration: "none",
							letterSpacing: "0.05em",
							textTransform: "uppercase"
						},
						children: "Meet the Team →"
					})
				]
			})]
		}), /* @__PURE__ */ jsx("style", { children: `
                @media (max-width: 768px) {
                    .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
                    .about-stats-grid { gap: 16px !important; }
                }
            ` })]
	});
}
//#endregion
export { AboutSection as t };

//# sourceMappingURL=about-section-Bh72tnsZ.js.map