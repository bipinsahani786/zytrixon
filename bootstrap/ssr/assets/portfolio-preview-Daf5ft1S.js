import { useEffect, useRef, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//#region resources/js/components/landing/portfolio-preview.tsx
gsap.registerPlugin(ScrollTrigger);
var PROJECTS = [
	{
		title: "School Management System",
		category: "Web Application • Next.js",
		description: "A complete ERP for modern schools. Features include advanced student data management, real-time attendance tracking, seamless fee processing, exam grading algorithms, and a dedicated parent portal. Built with Next.js for blazing fast performance.",
		image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&q=80",
		link: "#",
		color: "#4ecdc4"
	},
	{
		title: "Affiliate Marketing App",
		category: "Mobile App • React Native",
		description: "A cross-platform mobile ecosystem for global affiliate marketers. Includes real-time multi-tier commission tracking, dynamic referral chain visualization, and integrated multi-currency payment gateways.",
		image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1000&q=80",
		link: "#",
		color: "#ff6b6b"
	},
	{
		title: "IoT Smart Factory Dashboard",
		category: "IoT • Real-time Analytics",
		description: "Mission-critical live monitoring dashboard for industrial automation. Features real-time sensor data visualization, AI-driven predictive maintenance alerts, and remote machine calibration.",
		image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1000&q=80",
		link: "#",
		color: "#feca57"
	}
];
function PortfolioPreview({ hideHeader = false }) {
	const sectionRef = useRef(null);
	const itemsRef = useRef([]);
	const [isMobile, setIsMobile] = useState(false);
	useEffect(() => {
		const checkMobile = () => setIsMobile(window.innerWidth <= 900);
		checkMobile();
		window.addEventListener("resize", checkMobile);
		return () => window.removeEventListener("resize", checkMobile);
	}, []);
	useEffect(() => {
		if (!sectionRef.current) return;
		const ctx = gsap.context(() => {
			itemsRef.current.filter(Boolean).forEach((item, i) => {
				const isEven = i % 2 === 0;
				gsap.fromTo(item, {
					opacity: 0,
					x: isEven ? -50 : 50
				}, {
					opacity: 1,
					x: 0,
					duration: 1,
					ease: "power3.out",
					scrollTrigger: {
						trigger: item,
						start: "top 80%",
						once: true
					}
				});
			});
		}, sectionRef);
		return () => ctx.revert();
	}, []);
	return /* @__PURE__ */ jsxs("section", {
		ref: sectionRef,
		id: "work",
		className: "zy-section",
		style: {
			background: "var(--zy-black)",
			overflow: "hidden"
		},
		children: [
			!hideHeader && /* @__PURE__ */ jsxs("div", {
				className: "zy-section-header",
				style: {
					textAlign: "center",
					marginBottom: "80px"
				},
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "zy-section-label",
						children: "Selected Work"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "zy-section-title",
						children: "Projects We're Proud Of"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "zy-section-subtitle",
						style: { margin: "20px auto 0" },
						children: "Real results for real businesses — from concept to launch and beyond."
					})
				]
			}),
			/* @__PURE__ */ jsx("div", {
				style: {
					display: "flex",
					flexDirection: "column",
					gap: isMobile ? "80px" : "140px",
					maxWidth: "1200px",
					margin: "0 auto"
				},
				children: PROJECTS.map((project, i) => {
					const isEven = i % 2 === 0;
					return /* @__PURE__ */ jsxs("div", {
						ref: (el) => {
							itemsRef.current[i] = el;
						},
						className: "portfolio-row",
						style: {
							display: "flex",
							flexDirection: isMobile ? "column" : isEven ? "row" : "row-reverse",
							alignItems: "center",
							gap: isMobile ? "30px" : "60px",
							opacity: 0
						},
						children: [/* @__PURE__ */ jsxs("div", {
							style: {
								flex: isMobile ? "1" : "0 0 40%",
								zIndex: 2
							},
							children: [
								/* @__PURE__ */ jsxs("div", {
									style: {
										fontSize: "13px",
										fontWeight: 700,
										letterSpacing: "0.15em",
										textTransform: "uppercase",
										color: project.color,
										marginBottom: "16px",
										display: "flex",
										alignItems: "center",
										gap: "12px"
									},
									children: [/* @__PURE__ */ jsx("div", { style: {
										width: "30px",
										height: "1px",
										background: project.color
									} }), project.category]
								}),
								/* @__PURE__ */ jsx("h3", {
									style: {
										fontFamily: "var(--font-heading)",
										fontSize: isMobile ? "32px" : "42px",
										fontWeight: 800,
										color: "var(--zy-white)",
										marginBottom: "24px",
										lineHeight: 1.2
									},
									children: project.title
								}),
								/* @__PURE__ */ jsx("p", {
									style: {
										fontSize: "16px",
										color: "var(--zy-gray-text)",
										lineHeight: 1.8,
										marginBottom: "36px"
									},
									children: project.description
								}),
								/* @__PURE__ */ jsxs("a", {
									href: project.link,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "portfolio-btn",
									style: {
										display: "inline-flex",
										alignItems: "center",
										gap: "10px",
										padding: "14px 28px",
										background: "transparent",
										border: `1px solid ${project.color}`,
										borderRadius: "30px",
										color: project.color,
										fontSize: "13px",
										fontWeight: 600,
										textTransform: "uppercase",
										letterSpacing: "0.05em",
										textDecoration: "none",
										transition: "all 0.3s ease"
									},
									children: ["Explore Project", /* @__PURE__ */ jsxs("svg", {
										width: "16",
										height: "16",
										viewBox: "0 0 24 24",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "2",
										strokeLinecap: "round",
										strokeLinejoin: "round",
										children: [/* @__PURE__ */ jsx("line", {
											x1: "5",
											y1: "12",
											x2: "19",
											y2: "12"
										}), /* @__PURE__ */ jsx("polyline", { points: "12 5 19 12 12 19" })]
									})]
								})
							]
						}), /* @__PURE__ */ jsx("div", {
							style: {
								flex: "1",
								width: "100%",
								perspective: "1000px"
							},
							children: /* @__PURE__ */ jsxs("a", {
								href: project.link,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "portfolio-image-wrapper zy-card",
								style: {
									display: "block",
									position: "relative",
									width: "100%",
									height: isMobile ? "300px" : "500px",
									borderRadius: "20px",
									overflow: "hidden",
									transform: isMobile ? "none" : isEven ? "rotateY(-5deg) rotateX(5deg)" : "rotateY(5deg) rotateX(5deg)",
									transition: "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
									boxShadow: `0 30px 60px -20px rgba(0,0,0,0.8), 0 0 40px -10px ${project.color}33`
								},
								children: [/* @__PURE__ */ jsx("div", {
									className: "portfolio-bg",
									style: {
										position: "absolute",
										inset: "-10px",
										backgroundImage: `url(${project.image})`,
										backgroundSize: "cover",
										backgroundPosition: "center",
										filter: "grayscale(100%) opacity(0.8)",
										transition: "transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 0.8s ease"
									}
								}), /* @__PURE__ */ jsx("div", {
									className: "portfolio-glass-overlay",
									style: {
										position: "absolute",
										inset: 0,
										background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)",
										opacity: 0,
										transition: "opacity 0.6s ease"
									}
								})]
							})
						})]
					}, i);
				})
			}),
			/* @__PURE__ */ jsx("div", {
				style: {
					textAlign: "center",
					marginTop: "100px"
				},
				children: /* @__PURE__ */ jsx("a", {
					href: "/work",
					className: "svg-underline",
					style: {
						fontFamily: "var(--font-heading)",
						fontSize: "15px",
						fontWeight: 700,
						letterSpacing: "0.05em",
						textTransform: "uppercase",
						color: "var(--zy-white)",
						textDecoration: "none"
					},
					children: "View All Case Studies"
				})
			}),
			/* @__PURE__ */ jsx("style", { children: `
                .portfolio-btn:hover {
                    background: var(--zy-white) !important;
                    color: var(--zy-black) !important;
                    border-color: var(--zy-white) !important;
                }
                .portfolio-image-wrapper:hover {
                    transform: scale(1.02) rotateY(0deg) rotateX(0deg) !important;
                    box-shadow: 0 40px 80px -20px rgba(0,0,0,0.9), 0 0 60px -10px rgba(255,255,255,0.1) !important;
                }
                .portfolio-image-wrapper:hover .portfolio-bg {
                    transform: scale(1.05);
                    filter: grayscale(0%) opacity(1) !important;
                }
                .portfolio-image-wrapper:hover .portfolio-glass-overlay {
                    opacity: 1 !important;
                }
            ` })
		]
	});
}
//#endregion
export { PortfolioPreview as default };

//# sourceMappingURL=portfolio-preview-Daf5ft1S.js.map