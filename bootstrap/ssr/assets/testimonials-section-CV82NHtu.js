import { useEffect, useRef, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//#region resources/js/components/landing/testimonials-section.tsx
gsap.registerPlugin(ScrollTrigger);
var TESTIMONIALS = [
	{
		quote: "Zytrixon understands business logic, not just code. The best software team in Patna. They delivered our School Management System ahead of schedule.",
		author: "Rahul Kumar",
		role: "CEO, TechEdu"
	},
	{
		quote: "Our sales increased by 200% after they revamped our e-commerce site. The team was professional, responsive, and truly cared about our success.",
		author: "Sneha Singh",
		role: "Founder, DressUp"
	},
	{
		quote: "Professional, Timely, and Creative. The IoT dashboard is working flawlessly. Their engineering team handles complexity with ease.",
		author: "Amit Raj",
		role: "Manager, SmartFactory"
	},
	{
		quote: "From concept to deployment, Zytrixon was a true technology partner. The affiliate marketing app they built exceeded every expectation.",
		author: "Vikash Gupta",
		role: "Founder, EarnMax"
	}
];
function TestimonialsSection() {
	const sectionRef = useRef(null);
	const quoteRef = useRef(null);
	const authorRef = useRef(null);
	const [activeIndex, setActiveIndex] = useState(0);
	useEffect(() => {
		if (!sectionRef.current) return;
		const ctx = gsap.context(() => {
			const headerEl = sectionRef.current?.querySelector(".zy-section-header");
			if (headerEl) gsap.fromTo(headerEl, {
				opacity: 0,
				y: 40
			}, {
				opacity: 1,
				y: 0,
				duration: .8,
				ease: "power3.out",
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top 70%",
					once: true
				}
			});
		}, sectionRef);
		return () => ctx.revert();
	}, []);
	useEffect(() => {
		const interval = setInterval(() => {
			handleSlideChange((activeIndex + 1) % TESTIMONIALS.length);
		}, 6e3);
		return () => clearInterval(interval);
	}, [activeIndex]);
	const handleSlideChange = (newIndex) => {
		if (newIndex === activeIndex) return;
		gsap.to([quoteRef.current, authorRef.current], {
			opacity: 0,
			y: 10,
			duration: .3,
			onComplete: () => {
				setActiveIndex(newIndex);
				gsap.fromTo([quoteRef.current, authorRef.current], {
					opacity: 0,
					y: -10
				}, {
					opacity: 1,
					y: 0,
					duration: .5,
					ease: "power2.out",
					stagger: .1
				});
			}
		});
	};
	return /* @__PURE__ */ jsxs("section", {
		ref: sectionRef,
		className: "zy-section",
		style: {
			background: "var(--zy-black)",
			minHeight: "80vh",
			display: "flex",
			flexDirection: "column",
			justifyContent: "center"
		},
		children: [/* @__PURE__ */ jsxs("div", {
			className: "zy-section-header",
			style: {
				textAlign: "center",
				marginBottom: "60px"
			},
			children: [/* @__PURE__ */ jsx("span", {
				className: "zy-section-label",
				children: "Testimonials"
			}), /* @__PURE__ */ jsx("h2", {
				className: "zy-section-title",
				children: "What Our Clients Say"
			})]
		}), /* @__PURE__ */ jsxs("div", {
			style: {
				maxWidth: "900px",
				margin: "0 auto",
				textAlign: "center",
				position: "relative",
				padding: "0 20px"
			},
			children: [
				/* @__PURE__ */ jsx("div", {
					style: {
						position: "absolute",
						top: "-60px",
						left: "50%",
						transform: "translateX(-50%)",
						fontSize: "180px",
						lineHeight: 1,
						fontFamily: "serif",
						color: "rgba(255,255,255,0.03)",
						zIndex: 0,
						pointerEvents: "none"
					},
					children: "\""
				}),
				/* @__PURE__ */ jsxs("div", {
					style: {
						position: "relative",
						zIndex: 1,
						minHeight: "200px",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center"
					},
					children: [/* @__PURE__ */ jsxs("p", {
						ref: quoteRef,
						style: {
							fontSize: "clamp(20px, 3vw, 32px)",
							lineHeight: 1.6,
							color: "var(--zy-white)",
							fontWeight: 300,
							marginBottom: "40px",
							fontFamily: "var(--font-heading)"
						},
						children: [
							"\"",
							TESTIMONIALS[activeIndex].quote,
							"\""
						]
					}), /* @__PURE__ */ jsxs("div", {
						ref: authorRef,
						children: [/* @__PURE__ */ jsx("div", {
							style: {
								fontFamily: "var(--font-heading)",
								fontSize: "18px",
								fontWeight: 700,
								color: "var(--zy-white)",
								marginBottom: "8px",
								letterSpacing: "0.02em"
							},
							children: TESTIMONIALS[activeIndex].author
						}), /* @__PURE__ */ jsx("div", {
							style: {
								fontSize: "14px",
								color: "var(--zy-gray-text)",
								textTransform: "uppercase",
								letterSpacing: "0.1em",
								fontWeight: 600
							},
							children: TESTIMONIALS[activeIndex].role
						})]
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					style: {
						display: "flex",
						justifyContent: "center",
						gap: "12px",
						marginTop: "60px"
					},
					children: TESTIMONIALS.map((_, i) => /* @__PURE__ */ jsx("button", {
						onClick: () => handleSlideChange(i),
						"aria-label": `Go to testimonial ${i + 1}`,
						style: {
							width: activeIndex === i ? "32px" : "8px",
							height: "8px",
							borderRadius: "4px",
							background: activeIndex === i ? "var(--zy-white)" : "rgba(255,255,255,0.2)",
							border: "none",
							cursor: "pointer",
							padding: 0,
							transition: "all 0.3s var(--zy-ease)"
						}
					}, i))
				})
			]
		})]
	});
}
//#endregion
export { TestimonialsSection as default };

//# sourceMappingURL=testimonials-section-CV82NHtu.js.map