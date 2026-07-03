import React, { useEffect, useRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//#region resources/js/components/landing/process-section.tsx
gsap.registerPlugin(ScrollTrigger);
var STEPS = [
	{
		number: "01",
		title: "Discovery",
		description: "We dive deep into your business, industry, and goals. Through workshops and research, we map the landscape and uncover opportunities others miss."
	},
	{
		number: "02",
		title: "Design",
		description: "Wireframes evolve into high-fidelity prototypes. Every pixel is intentional — balancing aesthetics with usability to create interfaces that convert."
	},
	{
		number: "03",
		title: "Architecture",
		description: "Before writing a line of code, we design scalable system architectures, design robust database schemas, and select the perfect tech stack."
	},
	{
		number: "04",
		title: "Develop",
		description: "Clean, modular code built for scale. Agile sprints with transparent progress updates. We ship fast without cutting corners."
	},
	{
		number: "05",
		title: "QA & Testing",
		description: "Rigorous automated and manual testing. We hunt for bugs, optimize performance bottlenecks, and ensure military-grade security before launch."
	},
	{
		number: "06",
		title: "Deploy",
		description: "Smooth deployment to production. Post-launch monitoring and iterative improvements ensure your software delivers lasting success."
	}
];
function ProcessSection() {
	const sectionRef = useRef(null);
	const trackRef = useRef(null);
	useEffect(() => {
		if (!sectionRef.current || !trackRef.current) return;
		const ctx = gsap.context(() => {
			const scrollDistance = trackRef.current.scrollWidth - window.innerWidth + 100;
			const verticalScroll = (STEPS.length - 1) * 100;
			gsap.to(trackRef.current, {
				x: -scrollDistance,
				y: `-=${verticalScroll}`,
				ease: "none",
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top top",
					end: () => `+=${scrollDistance}`,
					pin: true,
					scrub: 1,
					anticipatePin: 1,
					invalidateOnRefresh: true
				}
			});
		}, sectionRef);
		return () => ctx.revert();
	}, []);
	const staggerY = 100;
	return /* @__PURE__ */ jsxs("section", {
		ref: sectionRef,
		style: {
			position: "relative",
			width: "100%",
			height: "100vh",
			overflow: "hidden",
			background: "var(--zy-black)"
		},
		children: [/* @__PURE__ */ jsxs("div", {
			style: {
				position: "absolute",
				top: "60px",
				left: "var(--zy-section-pad-x)",
				zIndex: 2
			},
			children: [/* @__PURE__ */ jsx("span", {
				className: "zy-section-label",
				children: "Our Process"
			}), /* @__PURE__ */ jsx("h2", {
				className: "zy-section-title",
				style: { fontSize: "clamp(28px, 4vw, 42px)" },
				children: "How We Work"
			})]
		}), /* @__PURE__ */ jsx("div", {
			ref: trackRef,
			className: "process-track",
			style: {
				position: "absolute",
				top: "50%",
				left: "var(--zy-section-pad-x)",
				transform: "translateY(-50%)",
				paddingTop: "40px",
				alignItems: "center"
			},
			children: STEPS.map((step, i) => /* @__PURE__ */ jsxs(React.Fragment, { children: [/* @__PURE__ */ jsxs("div", {
				className: "zy-card process-card",
				style: { transform: `translateY(${i * staggerY}px)` },
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "process-number",
						children: step.number
					}),
					/* @__PURE__ */ jsx("h3", {
						style: {
							fontFamily: "var(--font-heading)",
							fontSize: "24px",
							fontWeight: 700,
							color: "var(--zy-white)",
							marginBottom: "16px"
						},
						children: step.title
					}),
					/* @__PURE__ */ jsx("p", {
						style: {
							fontSize: "15px",
							lineHeight: 1.7,
							color: "var(--zy-gray-text)"
						},
						children: step.description
					})
				]
			}), i < STEPS.length - 1 && /* @__PURE__ */ jsx("div", {
				style: {
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					width: "40px",
					transform: `translateY(${(i + .5) * staggerY}px)`,
					opacity: .3
				},
				children: /* @__PURE__ */ jsxs("svg", {
					width: "32",
					height: "32",
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					strokeWidth: "2",
					strokeLinecap: "round",
					strokeLinejoin: "round",
					style: { transform: "rotate(15deg)" },
					children: [/* @__PURE__ */ jsx("line", {
						x1: "5",
						y1: "12",
						x2: "19",
						y2: "12"
					}), /* @__PURE__ */ jsx("polyline", { points: "12 5 19 12 12 19" })]
				})
			})] }, i))
		})]
	});
}
//#endregion
export { ProcessSection as default };

//# sourceMappingURL=process-section-bt_wzoCm.js.map