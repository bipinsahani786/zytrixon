import { a as useTheme, i as ThemeProvider, n as CustomCursor, t as Navbar } from "./navbar-AKB7jtts.js";
import { t as SeoHead } from "./SeoHead-Bv-bTrU-.js";
import { t as TopBar } from "./top-bar-BFyXzAS2.js";
import { Link } from "@inertiajs/react";
import { Suspense, lazy, useCallback, useEffect, useRef, useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
import gsap from "gsap";
//#region resources/js/hooks/use-media-query.ts
function useMediaQuery(query) {
	const [matches, setMatches] = useState(false);
	useEffect(() => {
		const media = window.matchMedia(query);
		setMatches(media.matches);
		const listener = (e) => setMatches(e.matches);
		media.addEventListener("change", listener);
		return () => media.removeEventListener("change", listener);
	}, [query]);
	return matches;
}
//#endregion
//#region resources/js/components/landing/grain-overlay.tsx
function GrainOverlay() {
	if (useMediaQuery("(max-width: 768px)")) return null;
	return /* @__PURE__ */ jsx("div", {
		className: "grain-overlay",
		"aria-hidden": "true"
	});
}
//#endregion
//#region resources/js/components/landing/lazy-section.tsx
function LazySection({ children, minHeight = "50vh", threshold = 0, rootMargin = "800px 0px" }) {
	const [isVisible, setIsVisible] = useState(false);
	const sectionRef = useRef(null);
	useEffect(() => {
		if (isVisible) return;
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setIsVisible(true);
				if (sectionRef.current) observer.unobserve(sectionRef.current);
			}
		}, {
			root: null,
			rootMargin,
			threshold
		});
		if (sectionRef.current) observer.observe(sectionRef.current);
		return () => {
			if (sectionRef.current) observer.unobserve(sectionRef.current);
		};
	}, [
		isVisible,
		rootMargin,
		threshold
	]);
	return /* @__PURE__ */ jsx("div", {
		ref: sectionRef,
		style: {
			minHeight: isVisible ? "auto" : minHeight,
			width: "100%"
		},
		children: isVisible && children
	});
}
//#endregion
//#region resources/js/hooks/use-mouse-position.ts
function useMousePosition() {
	const [position, setPosition] = useState({
		x: 0,
		y: 0
	});
	const handleMouseMove = useCallback((e) => {
		setPosition({
			x: e.clientX,
			y: e.clientY
		});
	}, []);
	useEffect(() => {
		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, [handleMouseMove]);
	return position;
}
//#endregion
//#region resources/js/components/landing/hero-section.tsx
function HeroSection() {
	const sectionRef = useRef(null);
	const headlineRef = useRef(null);
	const subRef = useRef(null);
	const ctaRef = useRef(null);
	const badgeRef = useRef(null);
	const btnRef = useRef(null);
	const { x: mouseX, y: mouseY } = useMousePosition();
	const isLowPower = useMediaQuery("(max-width: 768px)");
	const [show3D, setShow3D] = useState(false);
	const [CanvasComponent, setCanvasComponent] = useState(null);
	const [IoTDeviceMeshComponent, setIoTDeviceMeshComponent] = useState(null);
	const { theme } = useTheme();
	const isLight = theme === "light";
	const [mounted, setMounted] = useState(false);
	const isBot = typeof navigator !== "undefined" && /bot|googlebot|google-inspectiontool|lighthouse|crawler|spider|robot|crawling/i.test(navigator.userAgent);
	useEffect(() => {
		setMounted(true);
	}, []);
	const activeIsLight = mounted && isLight;
	const PHRASES = [
		"Digital Dominance",
		"Global Solutions",
		"Smart Platforms",
		"Future Technologies"
	];
	const [typedText, setTypedText] = useState("");
	const [isDeleting, setIsDeleting] = useState(false);
	const [loopNum, setLoopNum] = useState(0);
	const [typingSpeed, setTypingSpeed] = useState(120);
	useEffect(() => {
		if (isBot) setTypedText("Digital Dominance");
	}, [isBot]);
	const [typingStarted, setTypingStarted] = useState(false);
	useEffect(() => {
		const timer = setTimeout(() => setTypingStarted(true), 1200);
		return () => clearTimeout(timer);
	}, []);
	useEffect(() => {
		if (!typingStarted || isBot) return;
		const handleTyping = () => {
			const fullText = PHRASES[loopNum % PHRASES.length];
			setTypedText(isDeleting ? fullText.substring(0, typedText.length - 1) : fullText.substring(0, typedText.length + 1));
			setTypingSpeed(isDeleting ? 40 : 100);
			if (!isDeleting && typedText === fullText) setTimeout(() => setIsDeleting(true), 2500);
			else if (isDeleting && typedText === "") {
				setIsDeleting(false);
				setLoopNum(loopNum + 1);
			}
		};
		const timer = setTimeout(handleTyping, typingSpeed);
		return () => clearTimeout(timer);
	}, [
		typedText,
		isDeleting,
		loopNum,
		typingSpeed,
		typingStarted
	]);
	const [load3D, setLoad3D] = useState(false);
	useEffect(() => {
		if (isBot) return;
		let interactionLoaded = false;
		const trigger3DLoad = () => {
			if (interactionLoaded) return;
			interactionLoaded = true;
			setLoad3D(true);
		};
		window.addEventListener("mousemove", trigger3DLoad, { once: true });
		window.addEventListener("scroll", trigger3DLoad, { once: true });
		window.addEventListener("click", trigger3DLoad, { once: true });
		window.addEventListener("touchstart", trigger3DLoad, { once: true });
		const fallbackTimer = setTimeout(trigger3DLoad, 4500);
		return () => {
			window.removeEventListener("mousemove", trigger3DLoad);
			window.removeEventListener("scroll", trigger3DLoad);
			window.removeEventListener("click", trigger3DLoad);
			window.removeEventListener("touchstart", trigger3DLoad);
			clearTimeout(fallbackTimer);
		};
	}, [isLowPower, isBot]);
	useEffect(() => {
		if (!load3D) return;
		import("@react-three/fiber").then((fiber) => {
			setCanvasComponent(() => fiber.Canvas);
			return import("./iot-device-mesh-BAbk8FaU.js");
		}).then((meshModule) => {
			setIoTDeviceMeshComponent(() => meshModule.default);
			setShow3D(true);
		}).catch((err) => {
			console.error("Failed to load 3D components:", err);
		});
	}, [load3D]);
	useEffect(() => {
		if (!sectionRef.current || isBot) return;
		const ctx = gsap.context(() => {
			const tl = gsap.timeline({ delay: .1 });
			tl.fromTo(badgeRef.current, {
				opacity: 0,
				y: 20
			}, {
				opacity: 1,
				y: 0,
				duration: .5,
				ease: "power3.out"
			}, 0);
			if (headlineRef.current) {
				const words = headlineRef.current.querySelectorAll(".hero-word");
				tl.fromTo(words, {
					opacity: 0,
					y: 40,
					filter: isLowPower ? "none" : "blur(8px)"
				}, {
					opacity: 1,
					y: 0,
					filter: "blur(0px)",
					duration: .7,
					stagger: .08,
					ease: "power3.out"
				}, .1);
			}
			tl.fromTo(subRef.current, {
				opacity: 0,
				y: 20
			}, {
				opacity: 1,
				y: 0,
				duration: .6,
				ease: "power3.out"
			}, .5);
			tl.fromTo(ctaRef.current, {
				opacity: 0,
				y: 20
			}, {
				opacity: 1,
				y: 0,
				duration: .6,
				ease: "power3.out"
			}, .7);
		}, sectionRef);
		return () => ctx.revert();
	}, []);
	const handleBtnMouseMove = useCallback((e) => {
		if (!btnRef.current) return;
		const rect = btnRef.current.getBoundingClientRect();
		const distX = e.clientX - (rect.left + rect.width / 2);
		const distY = e.clientY - (rect.top + rect.height / 2);
		gsap.to(btnRef.current, {
			x: distX * .3,
			y: distY * .3,
			duration: .3,
			ease: "power2.out"
		});
	}, []);
	const handleBtnMouseLeave = useCallback(() => {
		if (!btnRef.current) return;
		gsap.to(btnRef.current, {
			x: 0,
			y: 0,
			duration: .5,
			ease: "elastic.out(1, 0.4)"
		});
	}, []);
	return /* @__PURE__ */ jsxs("section", {
		ref: sectionRef,
		style: {
			position: "relative",
			minHeight: "100vh",
			display: "flex",
			alignItems: "center",
			overflow: "hidden",
			background: activeIsLight ? "#FFFFFF" : "var(--zy-black)",
			padding: "120px var(--zy-section-pad-x) 80px"
		},
		children: [
			/* @__PURE__ */ jsx("div", { style: {
				position: "absolute",
				width: 600,
				height: 600,
				background: activeIsLight ? "radial-gradient(circle, rgba(0,0,0,0.05), transparent 60%)" : "radial-gradient(circle, rgba(255,255,255,0.08), transparent 60%)",
				top: "20%",
				left: "10%",
				pointerEvents: "none"
			} }),
			/* @__PURE__ */ jsxs("div", {
				className: "hero-content-grid",
				style: {
					maxWidth: 1200,
					margin: "0 auto",
					width: "100%",
					display: "grid",
					gridTemplateColumns: "1.1fr 0.9fr",
					gap: 60,
					alignItems: "center",
					position: "relative",
					zIndex: 1
				},
				children: [/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsxs("div", {
						ref: badgeRef,
						style: {
							display: "inline-flex",
							alignItems: "center",
							gap: 8,
							padding: "6px 16px",
							border: activeIsLight ? "1px solid rgba(0,0,0,0.1)" : "1px solid rgba(255,255,255,0.2)",
							background: activeIsLight ? "rgba(0,0,0,0.03)" : "rgba(255,255,255,0.05)",
							marginBottom: 28,
							opacity: isBot ? 1 : 0
						},
						children: [/* @__PURE__ */ jsx("span", { style: {
							width: 6,
							height: 6,
							borderRadius: "50%",
							background: activeIsLight ? "#000000" : "#FFFFFF",
							animation: "pulse 2s infinite"
						} }), /* @__PURE__ */ jsx("span", {
							style: {
								fontSize: 11,
								fontWeight: 600,
								letterSpacing: "0.12em",
								textTransform: "uppercase",
								color: activeIsLight ? "#000" : "var(--zy-white)"
							},
							children: "Top Rated Software Company in Patna"
						})]
					}),
					/* @__PURE__ */ jsxs("h1", {
						ref: headlineRef,
						style: {
							fontFamily: "var(--font-heading)",
							fontSize: "clamp(36px, 10vw, 78px)",
							fontWeight: 800,
							lineHeight: 1.05,
							letterSpacing: "-0.03em",
							color: activeIsLight ? "#000" : "var(--zy-white)",
							marginBottom: 24
						},
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "hero-word",
								style: {
									display: "inline-block",
									marginRight: "0.25em"
								},
								children: "We"
							}),
							/* @__PURE__ */ jsx("span", {
								className: "hero-word",
								style: {
									display: "inline-block",
									marginRight: "0.25em"
								},
								children: "Engineer"
							}),
							/* @__PURE__ */ jsx("br", {}),
							/* @__PURE__ */ jsxs("span", {
								className: "hero-word",
								style: {
									display: "inline-block",
									color: activeIsLight ? "#000" : "var(--zy-white)"
								},
								children: [typedText, /* @__PURE__ */ jsx("span", { style: {
									display: "inline-block",
									width: "4px",
									height: "0.8em",
									backgroundColor: activeIsLight ? "#000" : "var(--zy-white)",
									verticalAlign: "middle",
									marginLeft: "4px",
									animation: "cursorBlink 1s step-end infinite"
								} })]
							})
						]
					}),
					/* @__PURE__ */ jsxs("p", {
						ref: subRef,
						style: {
							fontSize: 18,
							lineHeight: 1.7,
							color: activeIsLight ? "#666" : "var(--zy-gray-text)",
							maxWidth: 500,
							marginBottom: 36,
							opacity: isBot ? 1 : 0
						},
						children: [
							"From ",
							/* @__PURE__ */ jsx("strong", {
								style: { color: activeIsLight ? "#000" : "var(--zy-white)" },
								children: "Patna to the World"
							}),
							" — Zytrixon Tech builds enterprise-grade Web, Mobile, and IoT solutions that transform businesses into global brands."
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						ref: ctaRef,
						style: {
							display: "flex",
							gap: 16,
							opacity: isBot ? 1 : 0,
							flexWrap: "wrap"
						},
						children: [/* @__PURE__ */ jsx("div", {
							onMouseMove: handleBtnMouseMove,
							onMouseLeave: handleBtnMouseLeave,
							children: /* @__PURE__ */ jsxs(Link, {
								ref: btnRef,
								href: "/contact",
								className: "magnetic-btn",
								style: {
									padding: "18px 40px",
									fontSize: 14
								},
								children: ["Start Your Project", /* @__PURE__ */ jsx("svg", {
									className: "btn-arrow",
									width: "16",
									height: "16",
									viewBox: "0 0 24 24",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: "2.5",
									children: /* @__PURE__ */ jsx("path", { d: "M5 12h14M12 5l7 7-7 7" })
								})]
							})
						}), /* @__PURE__ */ jsxs(Link, {
							href: "/work",
							style: {
								padding: "18px 32px",
								border: "1px solid #333",
								color: activeIsLight ? "#000" : "var(--zy-white)",
								fontFamily: "var(--font-heading)",
								fontSize: 13,
								fontWeight: 600,
								textTransform: "uppercase",
								letterSpacing: "0.05em",
								textDecoration: "none",
								display: "flex",
								alignItems: "center",
								gap: 10,
								transition: "all 0.3s var(--zy-ease)"
							},
							onMouseEnter: (e) => {
								e.currentTarget.style.borderColor = activeIsLight ? "#000" : "#FFFFFF";
								e.currentTarget.style.background = "rgba(128,128,128,0.1)";
							},
							onMouseLeave: (e) => {
								e.currentTarget.style.borderColor = "#333";
								e.currentTarget.style.background = "transparent";
							},
							children: [/* @__PURE__ */ jsx("svg", {
								width: "14",
								height: "14",
								viewBox: "0 0 24 24",
								fill: "currentColor",
								children: /* @__PURE__ */ jsx("polygon", { points: "5 3 19 12 5 21 5 3" })
							}), "See Our Work"]
						})]
					})
				] }), /* @__PURE__ */ jsx("div", {
					style: {
						height: 500,
						position: "relative"
					},
					children: show3D && CanvasComponent && IoTDeviceMeshComponent ? /* @__PURE__ */ jsx(Suspense, {
						fallback: /* @__PURE__ */ jsx(HeroFallback, {}),
						children: /* @__PURE__ */ jsxs(CanvasComponent, {
							camera: {
								position: [
									0,
									0,
									5
								],
								fov: 45
							},
							style: { borderRadius: 0 },
							dpr: isLowPower ? [.5, 1] : [1, 1.5],
							performance: { min: .5 },
							gl: {
								powerPreference: "high-performance",
								antialias: false
							},
							children: [
								/* @__PURE__ */ jsx("ambientLight", { intensity: activeIsLight ? .8 : .3 }),
								/* @__PURE__ */ jsx("pointLight", {
									position: [
										5,
										5,
										5
									],
									intensity: activeIsLight ? .8 : .8,
									color: "#FFFFFF"
								}),
								/* @__PURE__ */ jsx("pointLight", {
									position: [
										-5,
										-5,
										3
									],
									intensity: activeIsLight ? .4 : .4,
									color: "#ffffff"
								}),
								/* @__PURE__ */ jsx(IoTDeviceMeshComponent, {
									mouseX: mouseX / window.innerWidth * 2 - 1,
									mouseY: mouseY / window.innerHeight * 2 - 1
								})
							]
						})
					}) : /* @__PURE__ */ jsx(HeroFallback, {})
				})]
			}),
			/* @__PURE__ */ jsx("style", { children: `
                @keyframes pulse { 0%, 100% { opacity: 0.3; } 50% { opacity: 1; } }
                @keyframes cursorBlink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
                @media (max-width: 768px) {
                    .hero-content-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
                    .hero-content-grid > div:last-child { height: 300px !important; }
                }
            ` })
		]
	});
}
function HeroFallback() {
	return /* @__PURE__ */ jsx("div", {
		style: {
			width: "100%",
			height: "100%",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			background: "radial-gradient(circle at center, #0a0a0a, #000)",
			position: "relative",
			overflow: "hidden"
		},
		children: /* @__PURE__ */ jsx("div", { style: {
			position: "absolute",
			inset: 0,
			backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
			backgroundSize: "20px 20px"
		} })
	});
}
//#endregion
//#region resources/js/pages/welcome.tsx
var LazyMarqueeStrip = lazy(() => import("./marquee-strip-Crzu4urX.js"));
var LazyAboutSection = lazy(() => import("./about-section-BCN8lXF2.js"));
var LazyStatsSection = lazy(() => import("./stats-section-C0azNZDO.js"));
var LazyServicesSection = lazy(() => import("./services-section-jxi6R2Ci.js"));
var LazyIndustriesSection = lazy(() => import("./industries-section-Dfo521Q4.js"));
var LazyProcessSection = lazy(() => import("./process-section-BwYO_FRJ.js"));
var LazyPortfolioPreview = lazy(() => import("./portfolio-preview-Daf5ft1S.js"));
var LazyTechStackSection = lazy(() => import("./tech-stack-section-D189g7b0.js"));
var LazyTeamSection = lazy(() => import("./team-section-CXps6hzn.js"));
var LazyClientsSection = lazy(() => import("./clients-section-DNKqIbTD.js"));
var LazyTestimonialsSection = lazy(() => import("./testimonials-section-CV82NHtu.js"));
var LazyCoreValuesSection = lazy(() => import("./core-values-section-D3Bl0-UD.js"));
var LazyFAQSection = lazy(() => import("./faq-section-CSJej8DS.js"));
var LazyGlobalFootprint = lazy(() => import("./global-footprint-py2us0Vh.js"));
var LazyContactSection = lazy(() => import("./contact-section-DD0mNLV6.js"));
var LazyFooterCTA = lazy(() => import("./footer-cta-DYRRvpzz.js"));
var LazyFooter = lazy(() => import("./footer--t5m_Nat.js"));
function Welcome() {
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
		const originalTitle = document.title;
		const handleVisibilityChange = () => {
			document.title = document.hidden ? "Come back! 👋 — Zytrixon Tech" : originalTitle;
		};
		document.addEventListener("visibilitychange", handleVisibilityChange);
		return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
	}, []);
	return /* @__PURE__ */ jsxs(ThemeProvider, { children: [
		/* @__PURE__ */ jsx(SeoHead, {}),
		/* @__PURE__ */ jsx(CustomCursor, {}),
		/* @__PURE__ */ jsx(GrainOverlay, {}),
		/* @__PURE__ */ jsx(TopBar, {}),
		/* @__PURE__ */ jsx(Navbar, {}),
		/* @__PURE__ */ jsxs("main", { children: [/* @__PURE__ */ jsx(HeroSection, {}), mounted ? /* @__PURE__ */ jsxs(Fragment$1, { children: [
			/* @__PURE__ */ jsx(LazySection, { children: /* @__PURE__ */ jsx(Suspense, {
				fallback: /* @__PURE__ */ jsx("div", { style: { minHeight: "10vh" } }),
				children: /* @__PURE__ */ jsx(LazyMarqueeStrip, {})
			}) }),
			/* @__PURE__ */ jsx(LazySection, { children: /* @__PURE__ */ jsx(Suspense, {
				fallback: /* @__PURE__ */ jsx("div", { style: { minHeight: "50vh" } }),
				children: /* @__PURE__ */ jsx(LazyAboutSection, {})
			}) }),
			/* @__PURE__ */ jsx(LazySection, { children: /* @__PURE__ */ jsx(Suspense, {
				fallback: /* @__PURE__ */ jsx("div", { style: { minHeight: "50vh" } }),
				children: /* @__PURE__ */ jsx(LazyStatsSection, {})
			}) }),
			/* @__PURE__ */ jsx(LazySection, { children: /* @__PURE__ */ jsx(Suspense, {
				fallback: /* @__PURE__ */ jsx("div", { style: { minHeight: "50vh" } }),
				children: /* @__PURE__ */ jsx(LazyServicesSection, {})
			}) }),
			/* @__PURE__ */ jsx(LazySection, { children: /* @__PURE__ */ jsx(Suspense, {
				fallback: /* @__PURE__ */ jsx("div", { style: { minHeight: "50vh" } }),
				children: /* @__PURE__ */ jsx(LazyIndustriesSection, {})
			}) }),
			/* @__PURE__ */ jsx(LazySection, { children: /* @__PURE__ */ jsx(Suspense, {
				fallback: /* @__PURE__ */ jsx("div", { style: { minHeight: "50vh" } }),
				children: /* @__PURE__ */ jsx(LazyProcessSection, {})
			}) }),
			/* @__PURE__ */ jsx(LazySection, { children: /* @__PURE__ */ jsx(Suspense, {
				fallback: /* @__PURE__ */ jsx("div", { style: { minHeight: "50vh" } }),
				children: /* @__PURE__ */ jsx(LazyPortfolioPreview, {})
			}) }),
			/* @__PURE__ */ jsx(LazySection, { children: /* @__PURE__ */ jsx(Suspense, {
				fallback: /* @__PURE__ */ jsx("div", { style: { minHeight: "50vh" } }),
				children: /* @__PURE__ */ jsx(LazyTechStackSection, {})
			}) }),
			/* @__PURE__ */ jsx(LazySection, { children: /* @__PURE__ */ jsx(Suspense, {
				fallback: /* @__PURE__ */ jsx("div", { style: { minHeight: "50vh" } }),
				children: /* @__PURE__ */ jsx(LazyTeamSection, {})
			}) }),
			/* @__PURE__ */ jsx(LazySection, { children: /* @__PURE__ */ jsx(Suspense, {
				fallback: /* @__PURE__ */ jsx("div", { style: { minHeight: "50vh" } }),
				children: /* @__PURE__ */ jsx(LazyClientsSection, {})
			}) }),
			/* @__PURE__ */ jsx(LazySection, { children: /* @__PURE__ */ jsx(Suspense, {
				fallback: /* @__PURE__ */ jsx("div", { style: { minHeight: "50vh" } }),
				children: /* @__PURE__ */ jsx(LazyTestimonialsSection, {})
			}) }),
			/* @__PURE__ */ jsx(LazySection, { children: /* @__PURE__ */ jsx(Suspense, {
				fallback: /* @__PURE__ */ jsx("div", { style: { minHeight: "50vh" } }),
				children: /* @__PURE__ */ jsx(LazyCoreValuesSection, {})
			}) }),
			/* @__PURE__ */ jsx(LazySection, { children: /* @__PURE__ */ jsx(Suspense, {
				fallback: /* @__PURE__ */ jsx("div", { style: { minHeight: "50vh" } }),
				children: /* @__PURE__ */ jsx(LazyFAQSection, {})
			}) }),
			/* @__PURE__ */ jsx(LazySection, { children: /* @__PURE__ */ jsx(Suspense, {
				fallback: /* @__PURE__ */ jsx("div", { style: { minHeight: "50vh" } }),
				children: /* @__PURE__ */ jsx(LazyGlobalFootprint, {})
			}) }),
			/* @__PURE__ */ jsx(LazySection, { children: /* @__PURE__ */ jsx(Suspense, {
				fallback: /* @__PURE__ */ jsx("div", { style: { minHeight: "50vh" } }),
				children: /* @__PURE__ */ jsx(LazyContactSection, {})
			}) }),
			/* @__PURE__ */ jsx(LazySection, { children: /* @__PURE__ */ jsx(Suspense, {
				fallback: /* @__PURE__ */ jsx("div", { style: { minHeight: "50vh" } }),
				children: /* @__PURE__ */ jsx(LazyFooterCTA, {})
			}) })
		] }) : /* @__PURE__ */ jsx("div", { style: { minHeight: "50vh" } })] }),
		mounted && /* @__PURE__ */ jsx(Suspense, {
			fallback: null,
			children: /* @__PURE__ */ jsx(LazyFooter, {})
		})
	] });
}
//#endregion
export { Welcome as default };

//# sourceMappingURL=welcome-DWI0ETra.js.map