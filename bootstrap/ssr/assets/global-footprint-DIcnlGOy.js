import { o as useTheme } from "./custom-cursor-s6CGr8GY.js";
import { useEffect, useRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//#region resources/js/components/landing/global-footprint.tsx
gsap.registerPlugin(ScrollTrigger);
var COUNTRIES = [
	{
		flag: "🇮🇳",
		name: "India"
	},
	{
		flag: "🇺🇸",
		name: "USA"
	},
	{
		flag: "🇬🇧",
		name: "UK"
	},
	{
		flag: "🇦🇪",
		name: "UAE"
	},
	{
		flag: "🇦🇺",
		name: "Australia"
	},
	{
		flag: "🇨🇦",
		name: "Canada"
	},
	{
		flag: "🇸🇬",
		name: "Singapore"
	},
	{
		flag: "🇩🇪",
		name: "Germany"
	}
];
function GlobalFootprint() {
	const sectionRef = useRef(null);
	const { theme } = useTheme();
	const isLight = theme === "light";
	useEffect(() => {
		if (!sectionRef.current) return;
		const ctx = gsap.context(() => {
			gsap.fromTo(sectionRef.current, {
				opacity: 0,
				y: 40
			}, {
				opacity: 1,
				y: 0,
				duration: .8,
				ease: "power3.out",
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top 80%",
					once: true
				}
			});
		}, sectionRef);
		return () => ctx.revert();
	}, []);
	return /* @__PURE__ */ jsx("section", {
		ref: sectionRef,
		className: "zy-section",
		style: {
			background: isLight ? "radial-gradient(ellipse at center, rgba(0,0,0,0.02) 0%, #ffffff 70%)" : "radial-gradient(ellipse at center, rgba(255,255,255,0.04) 0%, #000 70%)",
			position: "relative",
			overflow: "hidden"
		},
		children: /* @__PURE__ */ jsxs("div", {
			style: {
				maxWidth: 700,
				margin: "0 auto",
				textAlign: "center"
			},
			children: [
				/* @__PURE__ */ jsx("span", {
					className: "zy-section-label",
					children: "Global Reach"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "zy-section-title",
					children: "From Patna to the World"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "zy-section-subtitle",
					style: { margin: "20px auto 0" },
					children: "Delivering excellence across 15+ countries. Local roots, global standards, worldwide impact."
				}),
				/* @__PURE__ */ jsx("div", {
					style: {
						display: "flex",
						flexWrap: "wrap",
						justifyContent: "center",
						gap: 12,
						marginTop: 48
					},
					children: COUNTRIES.map((c, i) => /* @__PURE__ */ jsxs("span", {
						style: {
							padding: "10px 20px",
							border: isLight ? "1px solid #e0e0e0" : "1px solid #222",
							background: isLight ? "#f7f7f7" : "#111",
							fontSize: 14,
							color: "var(--zy-white)",
							display: "flex",
							alignItems: "center",
							gap: 8,
							transition: "all 0.3s var(--zy-ease)"
						},
						onMouseEnter: (e) => {
							e.currentTarget.style.borderColor = "var(--zy-white)";
							e.currentTarget.style.background = isLight ? "#ffffff" : "#1a1a1a";
						},
						onMouseLeave: (e) => {
							e.currentTarget.style.borderColor = isLight ? "#e0e0e0" : "#222";
							e.currentTarget.style.background = isLight ? "#f7f7f7" : "#111";
						},
						children: [
							/* @__PURE__ */ jsx("span", {
								style: { fontSize: 20 },
								children: c.flag
							}),
							" ",
							c.name
						]
					}, i))
				}),
				/* @__PURE__ */ jsx("div", { style: {
					width: 300,
					height: 300,
					background: isLight ? "radial-gradient(circle, rgba(0,0,0,0.03), transparent)" : "radial-gradient(circle, rgba(255,255,255,0.08), transparent)",
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					pointerEvents: "none"
				} })
			]
		})
	});
}
//#endregion
export { GlobalFootprint as t };

//# sourceMappingURL=global-footprint-DIcnlGOy.js.map