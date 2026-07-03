import { a as useTheme } from "./navbar-C4sR4eBL.js";
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
		return () => tl.kill();
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
		children: [/* @__PURE__ */ jsx("div", { style: {
			position: "absolute",
			inset: 0,
			backgroundImage: isLight ? "linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)" : "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
			backgroundSize: "30px 30px",
			maskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
			WebkitMaskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
			pointerEvents: "none"
		} }), /* @__PURE__ */ jsxs("div", {
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
		})]
	});
}
//#endregion
export { InnerPageHero as t };

//# sourceMappingURL=inner-page-hero-sG58bxri.js.map