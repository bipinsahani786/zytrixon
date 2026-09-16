import { useEffect, useRef, useState } from "react";
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
//#region resources/js/components/landing/testimonials-section.tsx
gsap.registerPlugin(ScrollTrigger);
var TESTIMONIALS = [
	{
		quote: "Zytrixon understands business logic, not just code. The best software team in Bihar. They delivered our School Management System ahead of schedule.",
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
export { CoreValuesSection as n, TestimonialsSection as t };

//# sourceMappingURL=testimonials-section-LJG-huhP.js.map