import { o as useTheme } from "./footer-CezFkQSw.js";
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
					gridTemplateColumns: "repeat(auto-fit, minmax(280px, 400px))",
					justifyContent: "center",
					gap: 40,
					maxWidth: 900,
					margin: "0 auto"
				},
				children: TEAM.map((member) => /* @__PURE__ */ jsxs("div", {
					className: "team-card zy-card",
					style: {
						padding: 32,
						textAlign: "center",
						transition: "all 0.4s var(--zy-ease)",
						cursor: "default",
						opacity: 0,
						display: "flex",
						flexDirection: "column",
						background: activeIsLight ? "#ffffff" : "var(--zy-black)",
						border: activeIsLight ? "1px solid #e5e7eb" : "none",
						boxShadow: activeIsLight ? "0 10px 30px rgba(0,0,0,0.03)" : "none",
						borderRadius: "16px"
					},
					children: [
						/* @__PURE__ */ jsxs("div", {
							style: {
								width: "100%",
								aspectRatio: "1",
								borderRadius: "12px",
								margin: "0 auto 24px",
								overflow: "hidden",
								position: "relative",
								background: "var(--zy-gray-dark)"
							},
							children: [
								/* @__PURE__ */ jsx("img", {
									className: "team-img",
									src: member.image,
									alt: member.name,
									loading: "lazy",
									style: {
										width: "100%",
										height: "100%",
										objectFit: "cover",
										filter: "grayscale(100%)",
										transition: "filter 0.5s var(--zy-ease), transform 0.5s var(--zy-ease)"
									}
								}),
								/* @__PURE__ */ jsx("div", {
									className: "team-bio",
									style: {
										position: "absolute",
										bottom: 0,
										left: 0,
										width: "100%",
										padding: "24px",
										background: activeIsLight ? "rgba(255, 255, 255, 0.95)" : "rgba(10, 10, 10, 0.95)",
										backdropFilter: "blur(5px)",
										transform: "translateY(100%)",
										transition: "transform 0.4s var(--zy-ease)",
										borderTop: `2px solid ${member.color}`,
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										height: "100%"
									},
									children: /* @__PURE__ */ jsx("p", {
										style: {
											fontSize: 15,
											color: activeIsLight ? "#4b5563" : "var(--zy-gray-text)",
											lineHeight: 1.6,
											margin: 0
										},
										children: member.bio
									})
								}),
								/* @__PURE__ */ jsx("div", {
									className: "team-accent",
									style: {
										position: "absolute",
										bottom: 0,
										left: 0,
										width: "100%",
										height: 4,
										background: member.color,
										transition: "opacity 0.4s var(--zy-ease)"
									}
								})
							]
						}),
						/* @__PURE__ */ jsx("h4", {
							style: {
								fontFamily: "var(--font-heading)",
								fontSize: 22,
								fontWeight: 700,
								color: activeIsLight ? "#000" : "var(--zy-white)",
								marginBottom: 8
							},
							children: member.name
						}),
						/* @__PURE__ */ jsx("div", {
							style: {
								fontSize: 14,
								fontWeight: 600,
								textTransform: "uppercase",
								letterSpacing: "0.05em",
								color: member.color,
								marginBottom: 0
							},
							children: member.role
						})
					]
				}, member.name))
			}),
			/* @__PURE__ */ jsx("style", { children: `
                .team-card:hover {
                    transform: translateY(-10px);
                    box-shadow: ${activeIsLight ? "0 20px 40px rgba(0,0,0,0.1)" : "0 20px 40px rgba(0,0,0,0.4)"} !important;
                }
                .team-card:hover .team-img {
                    filter: grayscale(0%) !important;
                    transform: scale(1.05);
                }
                .team-card:hover .team-bio {
                    transform: translateY(0) !important;
                }
                .team-card:hover .team-accent {
                    opacity: 0;
                }
            ` })
		]
	});
}
//#endregion
export { TeamSection as t };

//# sourceMappingURL=team-section-SAjgooed.js.map