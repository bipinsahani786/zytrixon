import { useEffect, useRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//#region resources/js/components/landing/core-values-section.tsx
gsap.registerPlugin(ScrollTrigger);
var VALUES = [
	{
		icon: /* @__PURE__ */ jsx("svg", {
			width: "32",
			height: "32",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "var(--zy-white)",
			strokeWidth: "1.5",
			children: /* @__PURE__ */ jsx("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" })
		}),
		title: "Security First",
		desc: "Enterprise-grade security in every line of code. OWASP-compliant, SSL-encrypted, and regularly audited."
	},
	{
		icon: /* @__PURE__ */ jsx("svg", {
			width: "32",
			height: "32",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "var(--zy-white)",
			strokeWidth: "1.5",
			children: /* @__PURE__ */ jsx("path", { d: "M13 2L3 14h9l-1 8 10-12h-9l1-8z" })
		}),
		title: "Innovation Driven",
		desc: "We stay ahead of the curve — implementing AI, IoT, and cutting-edge technologies before they become mainstream."
	},
	{
		icon: /* @__PURE__ */ jsxs("svg", {
			width: "32",
			height: "32",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "var(--zy-white)",
			strokeWidth: "1.5",
			children: [
				/* @__PURE__ */ jsx("path", { d: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" }),
				/* @__PURE__ */ jsx("circle", {
					cx: "9",
					cy: "7",
					r: "4"
				}),
				/* @__PURE__ */ jsx("path", { d: "M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" })
			]
		}),
		title: "Full Transparency",
		desc: "Clear communication, honest billing, and weekly progress reports. You see exactly what we're building and why."
	}
];
function CoreValuesSection() {
	const sectionRef = useRef(null);
	const cardsRef = useRef([]);
	useEffect(() => {
		if (!sectionRef.current) return;
		const ctx = gsap.context(() => {
			gsap.fromTo(cardsRef.current.filter(Boolean), {
				opacity: 0,
				y: 40
			}, {
				opacity: 1,
				y: 0,
				duration: .6,
				stagger: .12,
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
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "zy-section-header",
				style: { textAlign: "center" },
				children: [/* @__PURE__ */ jsx("span", {
					className: "zy-section-label",
					children: "Our Values"
				}), /* @__PURE__ */ jsx("h2", {
					className: "zy-section-title",
					children: "Why Teams Choose Zytrixon"
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				style: {
					display: "grid",
					gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
					gap: 24,
					maxWidth: 1100,
					margin: "0 auto"
				},
				children: VALUES.map((val, i) => /* @__PURE__ */ jsxs("div", {
					ref: (el) => {
						cardsRef.current[i] = el;
					},
					className: "value-card",
					style: {
						padding: 40,
						border: "1px solid var(--zy-gray-border)",
						position: "relative",
						overflow: "hidden",
						opacity: 0,
						transition: "border-color 0.3s var(--zy-ease)"
					},
					onMouseEnter: (e) => {
						e.currentTarget.style.borderColor = "var(--zy-white)";
					},
					onMouseLeave: (e) => {
						e.currentTarget.style.borderColor = "var(--zy-gray-border)";
					},
					children: [/* @__PURE__ */ jsx("div", {
						style: {
							position: "absolute",
							inset: 0,
							background: "var(--zy-accent-glow)",
							transform: "translateY(100%)",
							transition: "transform 0.5s var(--zy-ease)"
						},
						className: "value-bg"
					}), /* @__PURE__ */ jsxs("div", {
						style: {
							position: "relative",
							zIndex: 1
						},
						children: [
							/* @__PURE__ */ jsx("div", {
								style: { marginBottom: 20 },
								children: val.icon
							}),
							/* @__PURE__ */ jsx("h3", {
								style: {
									fontFamily: "var(--font-heading)",
									fontSize: 20,
									fontWeight: 700,
									color: "var(--zy-white)",
									marginBottom: 12
								},
								children: val.title
							}),
							/* @__PURE__ */ jsx("p", {
								style: {
									fontSize: 14,
									color: "var(--zy-gray-text)",
									lineHeight: 1.7
								},
								children: val.desc
							})
						]
					})]
				}, i))
			}),
			/* @__PURE__ */ jsx("style", { children: `
                .value-card:hover .value-bg {
                    transform: translateY(0) !important;
                }
            ` })
		]
	});
}
//#endregion
export { CoreValuesSection as default };

//# sourceMappingURL=core-values-section-D3Bl0-UD.js.map