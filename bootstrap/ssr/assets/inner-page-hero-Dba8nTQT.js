import { s as useTheme } from "./navbar-zs2JAPVG.js";
import { useEffect, useRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import gsap from "gsap";
//#region resources/js/components/landing/inner-page-hero.tsx
function InnerPageHero({ title, subtitle }) {
	const sectionRef = useRef(null);
	const textRef = useRef(null);
	const { theme } = useTheme();
	const isLight = theme === "light";
	useEffect(() => {
		if (!sectionRef.current || !textRef.current) return;
		const tl = gsap.timeline({ delay: .2 });
		tl.fromTo(textRef.current.children, {
			opacity: 0,
			y: 30,
			filter: "blur(10px)"
		}, {
			opacity: 1,
			y: 0,
			filter: "blur(0px)",
			duration: .8,
			stagger: .1,
			ease: "power3.out"
		});
		return () => {
			tl.kill();
		};
	}, []);
	return /* @__PURE__ */ jsxs("section", {
		ref: sectionRef,
		style: {
			position: "relative",
			padding: "180px var(--zy-section-pad-x) 80px",
			background: isLight ? "#FFFFFF" : "var(--zy-black)",
			color: isLight ? "#000" : "var(--zy-white)",
			textAlign: "center",
			overflow: "hidden"
		},
		children: [
			/* @__PURE__ */ jsx("svg", {
				width: "0",
				height: "0",
				style: { position: "absolute" },
				children: /* @__PURE__ */ jsxs("filter", {
					id: "hero-noise",
					children: [/* @__PURE__ */ jsx("feTurbulence", {
						type: "fractalNoise",
						baseFrequency: "0.6",
						numOctaves: "3",
						stitchTiles: "stitch"
					}), /* @__PURE__ */ jsx("feColorMatrix", {
						type: "matrix",
						values: "1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 0.15 0"
					})]
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				style: {
					position: "absolute",
					inset: 0,
					overflow: "hidden",
					pointerEvents: "none",
					zIndex: 0
				},
				children: [
					/* @__PURE__ */ jsx("div", { style: {
						position: "absolute",
						top: "-30%",
						left: "-20%",
						width: "80vw",
						height: "80vw",
						background: isLight ? "radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(59, 130, 246, 0) 60%)" : "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(59, 130, 246, 0) 60%)",
						filter: "blur(100px)",
						animation: "aurora1 20s infinite alternate ease-in-out",
						mixBlendMode: isLight ? "multiply" : "screen"
					} }),
					/* @__PURE__ */ jsx("div", { style: {
						position: "absolute",
						bottom: "-40%",
						right: "-20%",
						width: "90vw",
						height: "90vw",
						background: isLight ? "radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(168, 85, 247, 0) 60%)" : "radial-gradient(circle, rgba(168, 85, 247, 0.25) 0%, rgba(168, 85, 247, 0) 60%)",
						filter: "blur(120px)",
						animation: "aurora2 25s infinite alternate-reverse ease-in-out",
						mixBlendMode: isLight ? "multiply" : "screen"
					} }),
					/* @__PURE__ */ jsx("div", { style: {
						position: "absolute",
						top: "10%",
						left: "40%",
						width: "60vw",
						height: "60vw",
						background: isLight ? "radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, rgba(236, 72, 153, 0) 60%)" : "radial-gradient(circle, rgba(236, 72, 153, 0.2) 0%, rgba(236, 72, 153, 0) 60%)",
						filter: "blur(100px)",
						animation: "aurora3 22s infinite alternate ease-in-out",
						mixBlendMode: isLight ? "multiply" : "screen"
					} }),
					/* @__PURE__ */ jsx("div", { style: {
						position: "absolute",
						inset: 0,
						opacity: isLight ? .8 : .4,
						mixBlendMode: isLight ? "overlay" : "overlay",
						filter: "url(#hero-noise)",
						zIndex: 1
					} }),
					/* @__PURE__ */ jsx("div", { style: {
						position: "absolute",
						inset: 0,
						background: isLight ? "radial-gradient(circle at center, transparent 30%, #FFFFFF 100%)" : "radial-gradient(circle at center, transparent 30%, var(--zy-black) 100%)",
						zIndex: 2
					} })
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				ref: textRef,
				style: {
					position: "relative",
					zIndex: 1,
					maxWidth: 800,
					margin: "0 auto"
				},
				children: [/* @__PURE__ */ jsx("h1", {
					style: {
						fontFamily: "var(--font-heading)",
						fontSize: "clamp(40px, 6vw, 72px)",
						fontWeight: 800,
						letterSpacing: "-0.02em",
						marginBottom: 24,
						lineHeight: 1.1
					},
					children: title
				}), /* @__PURE__ */ jsx("p", {
					style: {
						fontSize: "clamp(16px, 2vw, 20px)",
						color: isLight ? "#666" : "var(--zy-gray-text)",
						lineHeight: 1.6
					},
					children: subtitle
				})]
			}),
			/* @__PURE__ */ jsx("style", { children: `
                @keyframes aurora1 {
                    0% { transform: translate(0, 0) scale(1) rotate(0deg); }
                    100% { transform: translate(10%, 15%) scale(1.2) rotate(15deg); }
                }
                @keyframes aurora2 {
                    0% { transform: translate(0, 0) scale(1) rotate(0deg); }
                    100% { transform: translate(-15%, -10%) scale(1.1) rotate(-15deg); }
                }
                @keyframes aurora3 {
                    0% { transform: translate(0, 0) scale(1) rotate(0deg); }
                    100% { transform: translate(10%, -20%) scale(1.3) rotate(20deg); }
                }
            ` })
		]
	});
}
//#endregion
export { InnerPageHero as t };

//# sourceMappingURL=inner-page-hero-Dba8nTQT.js.map