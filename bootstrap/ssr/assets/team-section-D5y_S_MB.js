import { o as useTheme } from "./custom-cursor-BiK9FZ3v.js";
import { useEffect, useRef, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//#region resources/js/components/landing/team-section.tsx
gsap.registerPlugin(ScrollTrigger);
var TEAM = [{
	name: "Bipin Sahani",
	role: "Co-founder & CTO",
	bio: "Leading the technical vision and strategic growth with 2.5+ years of extensive full-stack experience.",
	image: "/assets/team/bipin-sahani.png",
	color: "#6366f1"
}, {
	name: "Saurav Shandilya",
	role: "Co-founder & COO",
	bio: "Driving operations and business strategy to scale our solutions globally.",
	image: "/assets/team/saurav.png",
	color: "#ec4899"
}];
function TeamSection() {
	const sectionRef = useRef(null);
	const { theme } = useTheme();
	const isLight = theme === "light";
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, []);
	useEffect(() => {
		if (!sectionRef.current) return;
		const ctx = gsap.context(() => {
			gsap.utils.toArray(".team-card").forEach((card, i) => {
				gsap.fromTo(card, {
					opacity: 0,
					y: 50,
					scale: .95
				}, {
					opacity: 1,
					y: 0,
					scale: 1,
					duration: .6,
					ease: "power3.out",
					scrollTrigger: {
						trigger: card,
						start: "top 85%",
						once: true
					},
					delay: i * .08
				});
			});
		}, sectionRef);
		return () => ctx.revert();
	}, []);
	const activeIsLight = mounted && isLight;
	return /* @__PURE__ */ jsxs("section", {
		ref: sectionRef,
		id: "team",
		className: "zy-section",
		style: { background: activeIsLight ? "#F8FAFC" : "var(--zy-black)" },
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "zy-section-header",
				style: { textAlign: "center" },
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "zy-section-label",
						children: "Our People"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "zy-section-title",
						style: { color: activeIsLight ? "#000" : "var(--zy-white)" },
						children: "Meet The Core Team"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "zy-section-subtitle",
						style: {
							margin: "20px auto 0",
							color: activeIsLight ? "#666" : "var(--zy-gray-text)"
						},
						children: "A dedicated team of founders and strategists building the future."
					})
				]
			}),
			/* @__PURE__ */ jsx("div", {
				style: {
					display: "grid",
					gridTemplateColumns: "repeat(auto-fit, minmax(300px, 420px))",
					justifyContent: "center",
					gap: 36,
					maxWidth: 920,
					margin: "0 auto"
				},
				children: TEAM.map((member) => /* @__PURE__ */ jsxs("div", {
					className: "team-card zy-card",
					style: {
						padding: 0,
						textAlign: "left",
						transition: "all 0.4s var(--zy-ease)",
						cursor: "default",
						opacity: 0,
						display: "flex",
						flexDirection: "column",
						background: activeIsLight ? "#ffffff" : "var(--zy-gray-card)",
						border: activeIsLight ? "1px solid #e5e7eb" : "1px solid rgba(255, 255, 255, 0.08)",
						boxShadow: activeIsLight ? "0 10px 30px rgba(0,0,0,0.03)" : "0 10px 30px rgba(0,0,0,0.3)",
						borderRadius: "24px",
						overflow: "hidden"
					},
					children: [/* @__PURE__ */ jsxs("div", {
						style: {
							width: "100%",
							aspectRatio: "4 / 5",
							position: "relative",
							overflow: "hidden",
							background: activeIsLight ? "#f1f5f9" : "#0a0a0c"
						},
						children: [/* @__PURE__ */ jsx("img", {
							className: "team-img",
							src: member.image,
							alt: member.name,
							loading: "lazy",
							style: {
								width: "100%",
								height: "100%",
								objectFit: "cover",
								objectPosition: "top center",
								filter: "none",
								display: "block",
								transition: "transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)"
							}
						}), /* @__PURE__ */ jsx("div", { style: {
							position: "absolute",
							bottom: 0,
							left: 0,
							width: "100%",
							height: 3,
							background: `linear-gradient(90deg, ${member.color}, transparent)`
						} })]
					}), /* @__PURE__ */ jsxs("div", {
						style: {
							padding: "28px",
							display: "flex",
							flexDirection: "column",
							flex: 1
						},
						children: [
							/* @__PURE__ */ jsxs("div", {
								style: {
									display: "flex",
									alignItems: "center",
									justifyContent: "space-between",
									marginBottom: "10px"
								},
								children: [/* @__PURE__ */ jsx("span", {
									style: {
										fontSize: "12px",
										fontWeight: 700,
										textTransform: "uppercase",
										letterSpacing: "0.08em",
										color: member.color,
										background: activeIsLight ? "rgba(99, 102, 241, 0.08)" : "rgba(255, 255, 255, 0.06)",
										padding: "4px 10px",
										borderRadius: "6px"
									},
									children: member.role
								}), /* @__PURE__ */ jsx("span", {
									style: {
										fontSize: "11px",
										fontFamily: "monospace",
										color: activeIsLight ? "#94a3b8" : "rgba(255, 255, 255, 0.4)",
										textTransform: "uppercase"
									},
									children: "Leadership"
								})]
							}),
							/* @__PURE__ */ jsx("h3", {
								style: {
									fontFamily: "var(--font-heading)",
									fontSize: "24px",
									fontWeight: 800,
									color: activeIsLight ? "#0f172a" : "var(--zy-white)",
									margin: "0 0 10px 0",
									letterSpacing: "-0.02em"
								},
								children: member.name
							}),
							/* @__PURE__ */ jsx("p", {
								style: {
									fontSize: "14px",
									color: activeIsLight ? "#64748b" : "var(--zy-gray-text)",
									lineHeight: 1.65,
									margin: "0 0 20px 0",
									flex: 1
								},
								children: member.bio
							}),
							/* @__PURE__ */ jsxs("div", {
								style: {
									borderTop: `1px solid ${activeIsLight ? "#f1f5f9" : "rgba(255, 255, 255, 0.06)"}`,
									paddingTop: "16px",
									display: "flex",
									alignItems: "center",
									justifyContent: "space-between"
								},
								children: [/* @__PURE__ */ jsx("span", {
									style: {
										fontSize: "12px",
										fontWeight: 600,
										color: activeIsLight ? "#475569" : "rgba(255, 255, 255, 0.7)"
									},
									children: member.name === "Bipin Sahani" ? "Architecture & Cloud Vision" : "Global Ops & Scale Strategy"
								}), /* @__PURE__ */ jsx("div", { style: {
									width: 8,
									height: 8,
									borderRadius: "50%",
									background: member.color,
									boxShadow: `0 0 8px ${member.color}`
								} })]
							})
						]
					})]
				}, member.name))
			}),
			/* @__PURE__ */ jsx("style", { children: `
                .team-card:hover {
                    transform: translateY(-8px);
                    box-shadow: ${activeIsLight ? "0 24px 48px rgba(0, 0, 0, 0.08)" : "0 24px 48px rgba(0, 0, 0, 0.5)"} !important;
                    border-color: ${activeIsLight ? "#cbd5e1" : "rgba(255, 255, 255, 0.18)"} !important;
                }
                .team-card:hover .team-img {
                    transform: scale(1.03);
                }
            ` })
		]
	});
}
//#endregion
export { TeamSection as t };

//# sourceMappingURL=team-section-D5y_S_MB.js.map