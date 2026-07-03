import { a as useTheme } from "./navbar-AKB7jtts.js";
import { useEffect, useRef, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//#region resources/js/components/landing/industries-section.tsx
gsap.registerPlugin(ScrollTrigger);
var INDUSTRIES = [
	{
		icon: "🏦",
		name: "FinTech & Banking",
		desc: "Secure payment gateways, blockchain ledgers, and robust banking portals built for scale.",
		span: 2
	},
	{
		icon: "🏥",
		name: "Healthcare",
		desc: "HIPAA-compliant patient systems.",
		span: 1
	},
	{
		icon: "🛒",
		name: "E-Commerce",
		desc: "High-converting retail platforms.",
		span: 1
	},
	{
		icon: "🎓",
		name: "EdTech",
		desc: "LMS and interactive learning.",
		span: 1
	},
	{
		icon: "✈️",
		name: "Travel & Logistics",
		desc: "Global booking engines, fleet management, and real-time routing systems.",
		span: 2
	},
	{
		icon: "🏭",
		name: "Manufacturing",
		desc: "IoT sensor tracking.",
		span: 1
	},
	{
		icon: "🏠",
		name: "Real Estate",
		desc: "Property management apps.",
		span: 1
	},
	{
		icon: "🎮",
		name: "Gaming",
		desc: "Immersive interactive experiences.",
		span: 1
	},
	{
		icon: "🚚",
		name: "Supply Chain",
		desc: "Automated fleet and supply chain monitoring.",
		span: 2
	},
	{
		icon: "📰",
		name: "Media & Entertainment",
		desc: "High-traffic content platforms, video streaming infrastructure, and enterprise CMS solutions.",
		span: 4
	}
];
function IndustriesSection() {
	const sectionRef = useRef(null);
	const itemsRef = useRef([]);
	const [isMobile, setIsMobile] = useState(false);
	const { theme } = useTheme();
	useEffect(() => {
		const checkMobile = () => setIsMobile(window.innerWidth <= 768);
		checkMobile();
		window.addEventListener("resize", checkMobile);
		return () => window.removeEventListener("resize", checkMobile);
	}, []);
	useEffect(() => {
		if (!sectionRef.current) return;
		const ctx = gsap.context(() => {
			gsap.fromTo(itemsRef.current.filter(Boolean), {
				opacity: 0,
				y: 30,
				scale: .95
			}, {
				opacity: 1,
				y: 0,
				scale: 1,
				duration: .6,
				stagger: .05,
				ease: "power3.out",
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top 75%",
					once: true
				}
			});
		}, sectionRef);
		return () => ctx.revert();
	}, []);
	return /* @__PURE__ */ jsxs("section", {
		ref: sectionRef,
		className: "zy-section",
		style: { background: "var(--zy-black)" },
		children: [/* @__PURE__ */ jsxs("div", {
			className: "zy-section-header",
			style: { textAlign: "center" },
			children: [
				/* @__PURE__ */ jsx("span", {
					className: "zy-section-label",
					children: "Industries"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "zy-section-title",
					children: "Sectors We Empower"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "zy-section-subtitle",
					style: { margin: "20px auto 0" },
					children: "From fintech to healthcare, our solutions power businesses across every major industry."
				})
			]
		}), /* @__PURE__ */ jsx("div", {
			style: {
				display: "grid",
				gridTemplateColumns: isMobile ? "1fr" : "repeat(4, 1fr)",
				gridAutoRows: isMobile ? "auto" : "minmax(180px, auto)",
				gap: 20,
				maxWidth: 1200,
				margin: "0 auto"
			},
			children: INDUSTRIES.map((ind, i) => /* @__PURE__ */ jsxs("div", {
				ref: (el) => {
					itemsRef.current[i] = el;
				},
				className: "zy-card industry-card",
				style: {
					gridColumn: isMobile ? "span 1" : `span ${ind.span}`,
					padding: "32px 28px",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					textAlign: "left",
					opacity: 0
				},
				children: [
					/* @__PURE__ */ jsx("div", {
						style: {
							fontSize: 36,
							marginBottom: 16
						},
						children: ind.icon
					}),
					/* @__PURE__ */ jsx("div", {
						style: {
							fontFamily: "var(--font-heading)",
							fontSize: ind.span > 1 ? 22 : 18,
							fontWeight: 700,
							color: "var(--zy-white)",
							marginBottom: 8
						},
						children: ind.name
					}),
					/* @__PURE__ */ jsx("div", {
						style: {
							fontSize: 14,
							color: "var(--zy-gray-text)",
							lineHeight: 1.6
						},
						children: ind.desc
					})
				]
			}, i))
		})]
	});
}
//#endregion
export { IndustriesSection as default };

//# sourceMappingURL=industries-section-Dfo521Q4.js.map