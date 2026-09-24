import { o as useTheme } from "./custom-cursor-CB5La4vd.js";
import { useEffect, useRef, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//#region resources/js/components/landing/tech-stack-section.tsx
gsap.registerPlugin(ScrollTrigger);
var TECH = [
	{
		name: "React",
		slug: "react",
		color: "#61DAFB",
		category: "Frontend"
	},
	{
		name: "Next.js",
		slug: "nextdotjs",
		color: "#FFFFFF",
		category: "Frontend"
	},
	{
		name: "Vue.js",
		slug: "vuedotjs",
		color: "#4FC08D",
		category: "Frontend"
	},
	{
		name: "Laravel",
		slug: "laravel",
		color: "#FF2D20",
		category: "Backend"
	},
	{
		name: "Node.js",
		slug: "nodedotjs",
		color: "#68A063",
		category: "Backend"
	},
	{
		name: "Python",
		slug: "python",
		color: "#3776AB",
		category: "Backend"
	},
	{
		name: "React Native",
		slug: "react",
		color: "#61DAFB",
		category: "Mobile"
	},
	{
		name: "Flutter",
		slug: "flutter",
		color: "#02569B",
		category: "Mobile"
	},
	{
		name: "AWS",
		slug: "amazonaws",
		color: "#FF9900",
		category: "Cloud"
	},
	{
		name: "Docker",
		slug: "docker",
		color: "#2496ED",
		category: "Cloud"
	},
	{
		name: "Kubernetes",
		slug: "kubernetes",
		color: "#326CE5",
		category: "Cloud"
	},
	{
		name: "MongoDB",
		slug: "mongodb",
		color: "#47A248",
		category: "Database"
	},
	{
		name: "PostgreSQL",
		slug: "postgresql",
		color: "#4169E1",
		category: "Database"
	},
	{
		name: "Redis",
		slug: "redis",
		color: "#DC382D",
		category: "Database"
	},
	{
		name: "TypeScript",
		slug: "typescript",
		color: "#3178C6",
		category: "Language"
	},
	{
		name: "GraphQL",
		slug: "graphql",
		color: "#E10098",
		category: "API"
	},
	{
		name: "Tailwind CSS",
		slug: "tailwindcss",
		color: "#06B6D4",
		category: "Styling"
	}
];
function TechStackSection() {
	const sectionRef = useRef(null);
	const itemsRef = useRef([]);
	const { theme } = useTheme();
	const isLight = theme === "light";
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
		if (!sectionRef.current) return;
		const ctx = gsap.context(() => {
			gsap.fromTo(itemsRef.current.filter(Boolean), {
				opacity: 0,
				scale: .8,
				y: 30
			}, {
				opacity: 1,
				scale: 1,
				y: 0,
				duration: .8,
				stagger: .05,
				ease: "back.out(1.7)",
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
		className: "zy-section",
		style: {
			position: "relative",
			background: "var(--zy-black)",
			overflow: "hidden"
		},
		children: [
			/* @__PURE__ */ jsx("div", { style: {
				position: "absolute",
				top: "50%",
				left: "50%",
				transform: "translate(-50%, -50%)",
				width: "60vw",
				height: "60vw",
				background: "radial-gradient(circle, rgba(78,205,196,0.05) 0%, rgba(0,0,0,0) 70%)",
				zIndex: 0,
				pointerEvents: "none"
			} }),
			/* @__PURE__ */ jsx("div", { style: {
				position: "absolute",
				inset: 0,
				backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
                    `,
				backgroundSize: "40px 40px",
				zIndex: 0,
				pointerEvents: "none"
			} }),
			/* @__PURE__ */ jsxs("div", {
				className: "zy-section-header",
				style: {
					textAlign: "center",
					position: "relative",
					zIndex: 1
				},
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "zy-section-label",
						children: "Technology"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "zy-section-title",
						children: "Our Tech Stack"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "zy-section-subtitle",
						style: { margin: "20px auto 0" },
						children: "We build with modern, battle-tested technologies to deliver scale, speed, and security."
					})
				]
			}),
			/* @__PURE__ */ jsx("div", {
				style: {
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "center",
					gap: "16px",
					maxWidth: "900px",
					margin: "40px auto 0",
					position: "relative",
					zIndex: 1
				},
				children: TECH.map((tech, i) => {
					const floatDuration = 3 + i * 1.7 % 2;
					const floatDelay = i * .3 % 2;
					return /* @__PURE__ */ jsxs("div", {
						ref: (el) => {
							itemsRef.current[i] = el;
						},
						className: "tech-pill",
						style: {
							padding: "12px 24px",
							background: activeIsLight ? "rgba(0, 0, 0, 0.02)" : "rgba(255, 255, 255, 0.03)",
							border: activeIsLight ? "1px solid rgba(0, 0, 0, 0.06)" : "1px solid rgba(255, 255, 255, 0.08)",
							borderRadius: "50px",
							display: "flex",
							alignItems: "center",
							gap: "12px",
							backdropFilter: "blur(10px)",
							WebkitBackdropFilter: "blur(10px)",
							transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
							cursor: "default",
							opacity: 0,
							animation: `floating ${floatDuration}s ease-in-out infinite alternate`,
							animationDelay: `${floatDelay}s`,
							"--tech-color": tech.color
						},
						children: [/* @__PURE__ */ jsx("img", {
							src: tech.slug === "amazonaws" ? "/assets/aws.svg" : `https://cdn.simpleicons.org/${tech.slug}/${tech.color.replace("#", "")}`,
							alt: tech.name,
							className: "tech-logo",
							loading: "lazy",
							style: {
								width: "18px",
								height: "18px",
								filter: `drop-shadow(0 0 8px ${tech.color}66)`,
								transition: "all 0.4s ease"
							}
						}), /* @__PURE__ */ jsx("span", {
							className: "tech-name",
							style: {
								fontSize: "15px",
								color: "var(--zy-gray-light)",
								fontWeight: 600,
								letterSpacing: "0.02em",
								transition: "color 0.3s ease"
							},
							children: tech.name
						})]
					}, i);
				})
			}),
			/* @__PURE__ */ jsx("style", { children: `
                @keyframes floating {
                    0% { transform: translateY(0px); }
                    100% { transform: translateY(-8px); }
                }
                
                .tech-pill:hover {
                    background: ${activeIsLight ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.08)"} !important;
                    border-color: var(--tech-color) !important;
                    box-shadow: 0 10px 30px -10px var(--tech-color) !important;
                    transform: translateY(-5px) scale(1.05) !important;
                    z-index: 10;
                    /* Pause floating animation on hover so it doesn't glitch */
                    animation-play-state: paused !important;
                }
                
                .tech-pill:hover .tech-name {
                    color: ${activeIsLight ? "#000000" : "#ffffff"} !important;
                }
                
                .tech-pill:hover .tech-logo {
                    transform: scale(1.2);
                    filter: drop-shadow(0 0 15px var(--tech-color)) drop-shadow(0 0 25px var(--tech-color)) !important;
                }
            ` })
		]
	});
}
//#endregion
export { TechStackSection as t };

//# sourceMappingURL=tech-stack-section-CYPqBzGX.js.map