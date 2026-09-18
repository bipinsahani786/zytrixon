import { o as useTheme } from "./footer-CezFkQSw.js";
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
		quote: "Zytrixon engineered a secure, confidential digital portal and encrypted client management system for our agency. Their zero-trust architecture and flawless execution ensured absolute data security and discretion. Outstanding technology partners.",
		author: "Pawan Tyagi",
		company: "Smart India Detective",
		accentColor: "#D4AF37"
	},
	{
		quote: "Scaling our infrastructure operations required enterprise-level precision. Zytrixon delivered an end-to-end digital tracking and project management platform that streamlined our site workflows by 150%. Unmatched reliability and technical excellence.",
		author: "Sandeep Tyagi",
		company: "S.K. Infratech",
		accentColor: "#F97316"
	},
	{
		quote: "From brand presence to high-concurrency commerce architecture, Zytrixon transformed Thread Ax into a modern digital powerhouse. Their team builds with speed, aesthetic perfection, and rock-solid performance.",
		author: "Prince Chaudhary",
		company: "Thread Ax",
		accentColor: "#00F0FF"
	},
	{
		quote: "Our retail and hyper-local delivery operations reached new heights with the fast, intuitive online ordering system Zytrixon created. Daily customer orders grew exponentially with zero downtime. Truly the best software team.",
		author: "",
		company: "Mithila Grocery",
		accentColor: "#10B981"
	}
];
function TestimonialsSection() {
	const sectionRef = useRef(null);
	const quoteRef = useRef(null);
	const authorRef = useRef(null);
	const [activeIndex, setActiveIndex] = useState(0);
	const { theme } = useTheme();
	const isLight = theme === "light";
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, []);
	const activeIsLight = mounted && isLight;
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
		}, 6500);
		return () => clearInterval(interval);
	}, [activeIndex]);
	const handleSlideChange = (newIndex) => {
		if (newIndex === activeIndex) return;
		gsap.to([quoteRef.current, authorRef.current], {
			opacity: 0,
			y: 12,
			duration: .25,
			ease: "power2.in",
			onComplete: () => {
				setActiveIndex(newIndex);
				gsap.fromTo([quoteRef.current, authorRef.current], {
					opacity: 0,
					y: -12
				}, {
					opacity: 1,
					y: 0,
					duration: .45,
					ease: "power2.out",
					stagger: .08
				});
			}
		});
	};
	const current = TESTIMONIALS[activeIndex];
	return /* @__PURE__ */ jsxs("section", {
		ref: sectionRef,
		className: "zy-section",
		style: {
			background: activeIsLight ? "#f8fafc" : "var(--zy-black)",
			minHeight: "80vh",
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			paddingTop: "80px",
			paddingBottom: "80px",
			transition: "background-color 0.3s ease"
		},
		children: [/* @__PURE__ */ jsxs("div", {
			className: "zy-section-header",
			style: {
				textAlign: "center",
				marginBottom: "50px"
			},
			children: [
				/* @__PURE__ */ jsx("span", {
					className: "zy-section-label",
					children: "Testimonials"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "zy-section-title",
					style: { color: activeIsLight ? "#0f172a" : "var(--zy-white)" },
					children: "What Our Clients Say"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "zy-section-subtitle",
					style: {
						margin: "12px auto 0",
						fontSize: "15px",
						color: activeIsLight ? "#64748b" : "var(--zy-gray-text)"
					},
					children: "Real feedback from leaders driving business growth with Zytrixon Tech."
				})
			]
		}), /* @__PURE__ */ jsxs("div", {
			style: {
				maxWidth: "920px",
				margin: "0 auto",
				textAlign: "center",
				position: "relative",
				padding: "0 24px",
				width: "100%"
			},
			children: [
				/* @__PURE__ */ jsx("div", {
					style: {
						position: "absolute",
						top: "-70px",
						left: "50%",
						transform: "translateX(-50%)",
						fontSize: "200px",
						lineHeight: 1,
						fontFamily: "serif",
						color: activeIsLight ? "rgba(0, 0, 0, 0.04)" : "rgba(255, 255, 255, 0.03)",
						zIndex: 0,
						pointerEvents: "none",
						userSelect: "none"
					},
					children: "“"
				}),
				/* @__PURE__ */ jsxs("div", {
					style: {
						position: "relative",
						zIndex: 1,
						minHeight: "220px",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center"
					},
					children: [/* @__PURE__ */ jsxs("p", {
						ref: quoteRef,
						style: {
							fontSize: "clamp(16px, 2.2vw, 21px)",
							lineHeight: 1.75,
							color: activeIsLight ? "#334155" : "rgba(255, 255, 255, 0.92)",
							fontWeight: 400,
							maxWidth: "820px",
							margin: "0 auto 32px",
							fontFamily: "var(--font-sans)",
							letterSpacing: "-0.01em"
						},
						children: [
							"“",
							current.quote,
							"”"
						]
					}), /* @__PURE__ */ jsxs("div", {
						ref: authorRef,
						style: {
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							gap: "6px",
							marginTop: "4px"
						},
						children: [current.author ? /* @__PURE__ */ jsx("div", {
							style: {
								fontFamily: "var(--font-heading)",
								fontSize: "clamp(22px, 3vw, 28px)",
								fontWeight: 800,
								fontStyle: "italic",
								letterSpacing: "-0.01em",
								color: activeIsLight ? "#0f172a" : "#ffffff",
								textTransform: "capitalize"
							},
							children: current.author
						}) : null, /* @__PURE__ */ jsx("div", {
							style: {
								fontFamily: "var(--font-heading)",
								fontSize: current.author ? "clamp(15px, 2vw, 18px)" : "clamp(24px, 3.5vw, 30px)",
								fontWeight: 700,
								fontStyle: "italic",
								letterSpacing: "0.04em",
								textTransform: current.author ? "none" : "capitalize",
								color: current.accentColor,
								textShadow: activeIsLight ? "none" : `0 0 25px ${current.accentColor}44`
							},
							children: current.company
						})]
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					style: {
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						gap: "12px",
						marginTop: "50px"
					},
					children: TESTIMONIALS.map((t, i) => /* @__PURE__ */ jsx("button", {
						onClick: () => handleSlideChange(i),
						"aria-label": `Go to testimonial for ${t.company}`,
						style: {
							width: activeIndex === i ? "36px" : "10px",
							height: "10px",
							borderRadius: "5px",
							background: activeIndex === i ? t.accentColor : activeIsLight ? "rgba(0,0,0,0.15)" : "rgba(255,255,255,0.2)",
							border: "none",
							cursor: "pointer",
							padding: 0,
							transition: "all 0.35s var(--zy-ease)",
							boxShadow: activeIndex === i && !activeIsLight ? `0 0 12px ${t.accentColor}66` : "none"
						}
					}, i))
				})
			]
		})]
	});
}
//#endregion
export { CoreValuesSection as n, TestimonialsSection as t };

//# sourceMappingURL=testimonials-section-BqNAgB6C.js.map