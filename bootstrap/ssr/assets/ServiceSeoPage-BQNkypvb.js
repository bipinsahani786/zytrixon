import { a as ThemeProvider, n as Footer, o as useTheme, r as Navbar, t as CustomCursor } from "./custom-cursor-CB5La4vd.js";
import { t as SeoHead } from "./SeoHead-ypAe3bNq.js";
import { t as ContactSection } from "./contact-section-7oRTio53.js";
import { t as FooterCTA } from "./footer-cta-CxW1r1Xr.js";
import { n as CoreValuesSection, t as TestimonialsSection } from "./testimonials-section-BHpPaWe3.js";
import { t as GlobalFootprint } from "./global-footprint-DpwsHIsr.js";
import { t as GradientCard } from "./GradientCard-C448i7a0.js";
import { t as TechStackSection } from "./tech-stack-section-CYPqBzGX.js";
import { a as getServiceConfig, i as DevelopmentMethodology, n as QAAndTesting, r as ProcessTimeline, t as SecurityStandards } from "./SecurityStandards-DW_-ORQH.js";
import { Link } from "@inertiajs/react";
import React, { useEffect, useRef, useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
import { Activity, Battery, Bell, Bot, Box, Brain, Clock, Cloud, Code, Cpu, CreditCard, Database, DollarSign, Edit, Eye, Fingerprint, GitCommit, Globe, HardDrive, Layers, Link as Link$1, Maximize, MessageSquare, Monitor, Network, PieChart, Repeat, Search, Server, Share2, Shield, Smartphone, Split, Target, TrendingUp, Users, Wifi, WifiOff, Zap } from "lucide-react";
import { Canvas, useFrame } from "@react-three/fiber";
//#region resources/js/components/sections/CaseStudiesList.tsx
function CaseStudiesList({ service, caseStudies = [] }) {
	if (!caseStudies || caseStudies.length === 0) return null;
	return /* @__PURE__ */ jsx("section", {
		className: "zy-section",
		style: {
			background: "var(--zy-black)",
			borderTop: "1px solid rgba(255,255,255,0.05)"
		},
		children: /* @__PURE__ */ jsxs("div", {
			style: {
				maxWidth: 1200,
				margin: "0 auto"
			},
			children: [
				/* @__PURE__ */ jsxs("div", {
					style: {
						textAlign: "center",
						marginBottom: 60
					},
					children: [/* @__PURE__ */ jsx("span", {
						className: "zy-section-label",
						children: "PROVEN RESULTS"
					}), /* @__PURE__ */ jsx("h2", {
						className: "zy-section-title",
						children: "Case Studies & Success Stories"
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					style: {
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
						gap: 32
					},
					children: caseStudies.map((study) => /* @__PURE__ */ jsx(Link, {
						href: `/case-studies/${study.slug}`,
						style: {
							display: "block",
							textDecoration: "none"
						},
						children: /* @__PURE__ */ jsxs(GradientCard, {
							style: {
								textAlign: "left",
								height: "100%"
							},
							children: [/* @__PURE__ */ jsx("div", {
								style: {
									height: 220,
									background: "var(--zy-gray-dark)",
									overflow: "hidden"
								},
								children: study.image && /* @__PURE__ */ jsx("img", {
									src: study.image,
									alt: study.title,
									loading: "lazy",
									decoding: "async",
									style: {
										width: "100%",
										height: "100%",
										objectFit: "cover",
										opacity: .8
									}
								})
							}), /* @__PURE__ */ jsxs("div", {
								style: {
									padding: 32,
									flex: 1,
									display: "flex",
									flexDirection: "column"
								},
								children: [
									/* @__PURE__ */ jsx("div", {
										style: {
											color: "var(--zy-blue)",
											fontSize: 13,
											fontWeight: 700,
											marginBottom: 12,
											letterSpacing: "0.05em",
											textTransform: "uppercase"
										},
										children: study.industry
									}),
									/* @__PURE__ */ jsx("h3", {
										style: {
											fontSize: 22,
											fontWeight: 700,
											color: "var(--zy-white)",
											marginBottom: 16,
											fontFamily: "var(--font-heading)",
											lineHeight: 1.3
										},
										children: study.title
									}),
									/* @__PURE__ */ jsxs("p", {
										style: {
											color: "var(--zy-gray-text)",
											lineHeight: 1.6,
											marginBottom: 24,
											fontSize: 14
										},
										children: [study.challenge.substring(0, 100), "..."]
									}),
									/* @__PURE__ */ jsx("div", {
										style: {
											marginTop: "auto",
											paddingTop: 20,
											borderTop: "1px solid rgba(255,255,255,0.05)",
											display: "flex",
											gap: 16
										},
										children: (() => {
											let resultsArray = [];
											try {
												resultsArray = typeof study.results === "string" ? JSON.parse(study.results) : study.results || [];
											} catch (e) {
												resultsArray = [];
											}
											return resultsArray.slice(0, 2).map((res, i) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
												style: {
													fontSize: 16,
													color: "var(--zy-white)",
													fontWeight: 700
												},
												children: res.split(" ")[0]
											}), /* @__PURE__ */ jsx("div", {
												style: {
													fontSize: 11,
													color: "var(--zy-gray-text)",
													textTransform: "uppercase"
												},
												children: res.split(" ").slice(1).join(" ")
											})] }, i));
										})()
									})
								]
							})]
						})
					}, study.id))
				}),
				/* @__PURE__ */ jsx("div", {
					style: {
						textAlign: "center",
						marginTop: 40
					},
					children: /* @__PURE__ */ jsx(Link, {
						href: "/case-studies",
						className: "zy-btn-outline",
						style: {
							color: "var(--zy-white)",
							borderColor: "rgba(255,255,255,0.2)"
						},
						children: "View All Case Studies"
					})
				})
			]
		})
	});
}
//#endregion
//#region resources/js/components/sections/FaqAccordion.tsx
function FaqAccordion({ service, location }) {
	const { theme } = useTheme();
	const [openIndex, setOpenIndex] = useState(0);
	const faqs = [
		{
			q: `What makes your ${service?.title} services unique?`,
			a: `We combine deep engineering expertise with a business-first approach. We don't just write code; we build scalable solutions that drive real ROI.`
		},
		{
			q: `Do you provide support after launch?`,
			a: `Absolutely. We offer 24/7 monitoring, maintenance, and support packages to ensure your application runs flawlessly at all times.`
		},
		{
			q: `How do you ensure security?`,
			a: `Security is built-in from day one. We use enterprise-grade encryption, conduct regular vulnerability assessments, and follow strict DevSecOps practices.`
		},
		{
			q: `What is the typical timeline?`,
			a: `It depends on the scope, but our agile process ensures you see working prototypes within weeks, not months. We deliver fast without compromising quality.`
		},
		{
			q: `Can you integrate with our existing systems?`,
			a: `Yes. We specialize in complex system integrations, API development, and migrating legacy systems to modern architectures seamlessly.`
		}
	];
	const faqSchema = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: faqs.map((faq) => ({
			"@type": "Question",
			name: faq.q,
			acceptedAnswer: {
				"@type": "Answer",
				text: faq.a
			}
		}))
	};
	return /* @__PURE__ */ jsxs("section", {
		className: "zy-section",
		style: { background: "var(--zy-black)" },
		children: [/* @__PURE__ */ jsx("script", {
			type: "application/ld+json",
			dangerouslySetInnerHTML: { __html: JSON.stringify(faqSchema) }
		}), /* @__PURE__ */ jsxs("div", {
			style: {
				maxWidth: 800,
				margin: "0 auto"
			},
			children: [/* @__PURE__ */ jsx("div", {
				style: {
					textAlign: "center",
					marginBottom: 40
				},
				children: /* @__PURE__ */ jsx("h2", {
					className: "zy-section-title",
					children: "Frequently Asked Questions"
				})
			}), /* @__PURE__ */ jsx("div", {
				style: {
					display: "flex",
					flexDirection: "column",
					gap: 16
				},
				children: faqs.map((faq, i) => /* @__PURE__ */ jsxs(GradientCard, { children: [/* @__PURE__ */ jsxs("button", {
					onClick: () => setOpenIndex(openIndex === i ? null : i),
					style: {
						width: "100%",
						padding: "24px",
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						background: "transparent",
						border: "none",
						color: "var(--zy-white)",
						fontSize: 18,
						fontWeight: 700,
						cursor: "pointer",
						textAlign: "left",
						fontFamily: "var(--font-heading)"
					},
					children: [faq.q, /* @__PURE__ */ jsx("svg", {
						width: "24",
						height: "24",
						viewBox: "0 0 24 24",
						fill: "none",
						stroke: "var(--zy-blue)",
						strokeWidth: "2",
						style: {
							transform: openIndex === i ? "rotate(180deg)" : "none",
							transition: "transform 0.3s ease"
						},
						children: /* @__PURE__ */ jsx("polyline", { points: "6 9 12 15 18 9" })
					})]
				}), /* @__PURE__ */ jsx("div", {
					style: {
						padding: openIndex === i ? "0 24px 24px" : "0 24px 0",
						maxHeight: openIndex === i ? 200 : 0,
						opacity: openIndex === i ? 1 : 0,
						transition: "all 0.3s ease",
						color: "var(--zy-gray-text)",
						lineHeight: 1.6
					},
					children: faq.a
				})] }, i))
			})]
		})]
	});
}
//#endregion
//#region resources/js/components/sections/HeroDynamic.tsx
function Abstract3D({ color }) {
	const meshRef = useRef(null);
	useFrame((state) => {
		if (meshRef.current) {
			meshRef.current.rotation.x = state.clock.elapsedTime * .2;
			meshRef.current.rotation.y = state.clock.elapsedTime * .3;
		}
	});
	return /* @__PURE__ */ jsxs("mesh", {
		ref: meshRef,
		position: [
			0,
			.4,
			0
		],
		scale: 2.2,
		children: [/* @__PURE__ */ jsx("torusKnotGeometry", { args: [
			1,
			.3,
			128,
			32
		] }), /* @__PURE__ */ jsx("meshStandardMaterial", {
			color,
			wireframe: true,
			transparent: true,
			opacity: .28
		})]
	});
}
function HeroDynamic({ service, location, h1, contentOverrides }) {
	const { theme } = useTheme();
	const isLight = theme === "light";
	const config = getServiceConfig(service?.slug);
	const themeColor = config.themeColor;
	return /* @__PURE__ */ jsxs("section", {
		style: {
			paddingTop: "16px",
			paddingBottom: "50px",
			paddingLeft: "24px",
			paddingRight: "24px",
			background: isLight ? "#f9fafb" : "var(--zy-black)",
			borderBottom: `1px solid ${isLight ? "#e5e7eb" : "rgba(255,255,255,0.05)"}`,
			textAlign: "center",
			position: "relative",
			overflow: "hidden",
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			justifyContent: "flex-start"
		},
		children: [
			/* @__PURE__ */ jsx("div", {
				style: {
					position: "absolute",
					inset: 0,
					zIndex: 0,
					opacity: isLight ? .35 : 1
				},
				children: /* @__PURE__ */ jsxs(Canvas, {
					camera: {
						position: [
							0,
							0,
							4.2
						],
						fov: 45
					},
					dpr: [1, 1.5],
					children: [/* @__PURE__ */ jsx("ambientLight", { intensity: 1 }), /* @__PURE__ */ jsx(Abstract3D, { color: themeColor })]
				})
			}),
			/* @__PURE__ */ jsx("div", { style: {
				position: "absolute",
				inset: 0,
				background: isLight ? "radial-gradient(circle at center, transparent 0%, #f9fafb 80%)" : "radial-gradient(circle at center, transparent 0%, var(--zy-black) 80%)",
				zIndex: 0
			} }),
			/* @__PURE__ */ jsxs("div", {
				style: {
					maxWidth: 1e3,
					margin: "0 auto",
					position: "relative",
					zIndex: 1,
					pointerEvents: "none"
				},
				children: [
					/* @__PURE__ */ jsxs("div", {
						style: {
							display: "flex",
							justifyContent: "center",
							gap: 12,
							marginBottom: 16
						},
						children: [/* @__PURE__ */ jsx("span", {
							style: {
								padding: "6px 16px",
								background: `${themeColor}1a`,
								color: themeColor,
								borderRadius: 50,
								fontSize: 13,
								fontWeight: 700,
								letterSpacing: "0.05em",
								border: `1px solid ${themeColor}33`,
								backdropFilter: "blur(5px)"
							},
							children: config.hero.badge.toUpperCase()
						}), location && /* @__PURE__ */ jsxs("span", {
							style: {
								padding: "6px 16px",
								background: "rgba(34, 197, 94, 0.1)",
								color: "#22c55e",
								borderRadius: 50,
								fontSize: 13,
								fontWeight: 700,
								letterSpacing: "0.05em",
								border: "1px solid rgba(34, 197, 94, 0.2)",
								backdropFilter: "blur(5px)"
							},
							children: ["AVAILABLE IN ", location.name.toUpperCase()]
						})]
					}),
					/* @__PURE__ */ jsx("h1", {
						style: {
							fontSize: "clamp(48px, 7vw, 84px)",
							fontWeight: 800,
							color: isLight ? "#000" : "var(--zy-white)",
							lineHeight: 1.1,
							marginBottom: 32,
							fontFamily: "var(--font-heading)",
							textShadow: isLight ? "none" : "0 10px 30px rgba(0,0,0,0.5)"
						},
						children: h1
					}),
					/* @__PURE__ */ jsx("p", {
						style: {
							fontSize: "clamp(18px, 2vw, 24px)",
							color: isLight ? "#555" : "var(--zy-gray-text)",
							maxWidth: 800,
							margin: "0 auto 48px",
							lineHeight: 1.6
						},
						children: contentOverrides?.hero_description || `${service.description} We build high-performance systems designed to scale and dominate the market.`
					}),
					/* @__PURE__ */ jsxs("div", {
						style: {
							display: "flex",
							gap: 16,
							justifyContent: "center",
							pointerEvents: "auto",
							flexWrap: "wrap"
						},
						children: [/* @__PURE__ */ jsx("button", {
							className: "zy-btn-primary",
							style: {
								background: themeColor,
								borderColor: themeColor,
								color: "#fff",
								boxShadow: `0 10px 25px ${themeColor}40`,
								padding: "16px 32px",
								fontSize: 18
							},
							children: "Start a Project"
						}), /* @__PURE__ */ jsx("button", {
							className: "zy-btn-outline",
							style: {
								borderColor: isLight ? "rgba(0,0,0,0.2)" : "rgba(255,255,255,0.2)",
								color: isLight ? "#000" : "var(--zy-white)",
								padding: "16px 32px",
								fontSize: 18,
								background: isLight ? "#fff" : "rgba(255,255,255,0.05)",
								backdropFilter: "blur(5px)"
							},
							children: "View Case Studies"
						})]
					})
				]
			})
		]
	});
}
//#endregion
//#region resources/js/components/sections/ServicePlayground.tsx
var WebDevPlayground = () => {
	const [code, setCode] = useState("");
	const fullCode = `function App() {\n  return (\n    <div className="zy-hero">\n      <h1>Next-Gen Web</h1>\n      <p>Blazing fast performance.</p>\n    </div>\n  );\n}`;
	useEffect(() => {
		let i = 0;
		const interval = setInterval(() => {
			setCode(fullCode.substring(0, i));
			i++;
			if (i > fullCode.length) clearInterval(interval);
		}, 30);
		return () => clearInterval(interval);
	}, []);
	return /* @__PURE__ */ jsxs("div", {
		style: {
			display: "flex",
			gap: 24,
			height: 400,
			flexWrap: "wrap"
		},
		children: [
			/* @__PURE__ */ jsxs("div", {
				style: {
					flex: 1,
					minWidth: 300,
					background: "#1e1e1e",
					borderRadius: 12,
					overflow: "hidden",
					border: "1px solid rgba(255,255,255,0.1)"
				},
				children: [/* @__PURE__ */ jsxs("div", {
					style: {
						padding: "12px 16px",
						background: "#252526",
						display: "flex",
						gap: 8,
						alignItems: "center"
					},
					children: [
						/* @__PURE__ */ jsx("div", { style: {
							width: 12,
							height: 12,
							borderRadius: "50%",
							background: "#ff5f56"
						} }),
						/* @__PURE__ */ jsx("div", { style: {
							width: 12,
							height: 12,
							borderRadius: "50%",
							background: "#ffbd2e"
						} }),
						/* @__PURE__ */ jsx("div", { style: {
							width: 12,
							height: 12,
							borderRadius: "50%",
							background: "#27c93f"
						} }),
						/* @__PURE__ */ jsx("span", {
							style: {
								marginLeft: 16,
								color: "#858585",
								fontSize: 13,
								fontFamily: "monospace"
							},
							children: "App.tsx"
						})
					]
				}), /* @__PURE__ */ jsx("pre", {
					style: {
						padding: 24,
						color: "#d4d4d4",
						fontFamily: "monospace",
						fontSize: 14,
						margin: 0,
						overflow: "auto"
					},
					children: /* @__PURE__ */ jsxs("code", { children: [
						/* @__PURE__ */ jsx("span", {
							style: { color: "#569cd6" },
							children: "function"
						}),
						" ",
						/* @__PURE__ */ jsx("span", {
							style: { color: "#dcdcaa" },
							children: "App"
						}),
						"() ",
						"{\n",
						/* @__PURE__ */ jsx("span", {
							style: { color: "#c586c0" },
							children: " return"
						}),
						" (\\n",
						/* @__PURE__ */ jsxs("span", {
							style: { color: "#808080" },
							children: [" ", "// Real-time preview rendering"]
						}),
						"\\n",
						code.substring(21),
						/* @__PURE__ */ jsx("span", { style: {
							borderRight: "2px solid #007acc",
							animation: "blink 1s infinite"
						} })
					] })
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				style: {
					flex: 1,
					minWidth: 300,
					background: "#ffffff",
					borderRadius: 12,
					overflow: "hidden",
					border: "1px solid rgba(255,255,255,0.1)",
					display: "flex",
					flexDirection: "column"
				},
				children: [/* @__PURE__ */ jsx("div", {
					style: {
						padding: "12px 16px",
						background: "#f3f4f6",
						borderBottom: "1px solid #e5e7eb",
						display: "flex",
						alignItems: "center"
					},
					children: /* @__PURE__ */ jsx("div", {
						style: {
							padding: "4px 12px",
							background: "#fff",
							borderRadius: 4,
							fontSize: 12,
							color: "#6b7280",
							flex: 1
						},
						children: "localhost:3000"
					})
				}), /* @__PURE__ */ jsx("div", {
					style: {
						flex: 1,
						padding: 40,
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						color: "#000"
					},
					children: /* @__PURE__ */ jsxs("div", {
						style: {
							opacity: code.length > 50 ? 1 : 0,
							transform: `translateY(${code.length > 50 ? 0 : 20}px)`,
							transition: "all 0.5s ease",
							textAlign: "center"
						},
						children: [
							/* @__PURE__ */ jsx("h1", {
								style: {
									fontSize: 36,
									fontWeight: 800,
									marginBottom: 16
								},
								children: "Next-Gen Web"
							}),
							/* @__PURE__ */ jsx("p", {
								style: {
									fontSize: 18,
									color: "#4b5563"
								},
								children: "Blazing fast performance."
							}),
							/* @__PURE__ */ jsx("button", {
								style: {
									marginTop: 24,
									padding: "12px 24px",
									background: "#000",
									color: "#fff",
									borderRadius: 8,
									fontWeight: 600,
									border: "none"
								},
								children: "Get Started"
							})
						]
					})
				})]
			}),
			/* @__PURE__ */ jsx("style", { children: `@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }` })
		]
	});
};
var AiPlayground = () => {
	const [messages, setMessages] = useState([]);
	const [input, setInput] = useState("");
	useEffect(() => {
		setMessages([{
			role: "ai",
			text: "Hello! I am Zytrixon AI. Try asking me to \"Analyze Q3 sales data\"."
		}]);
	}, []);
	const handleSend = () => {
		if (!input) return;
		setMessages((p) => [...p, {
			role: "user",
			text: input
		}]);
		const currentInput = input;
		setInput("");
		setTimeout(() => {
			setMessages((p) => [...p, {
				role: "ai",
				text: "Analyzing database..."
			}]);
			setTimeout(() => {
				if (currentInput.toLowerCase().includes("sales")) setMessages((p) => {
					const newMsg = [...p];
					newMsg[newMsg.length - 1] = {
						role: "ai",
						text: "Q3 Sales up by 24%. Predicted Q4 growth: 15% based on current pipeline. Key driver: Enterprise division."
					};
					return newMsg;
				});
				else setMessages((p) => {
					const newMsg = [...p];
					newMsg[newMsg.length - 1] = {
						role: "ai",
						text: "Action completed securely. System optimized."
					};
					return newMsg;
				});
			}, 1500);
		}, 500);
	};
	return /* @__PURE__ */ jsxs("div", {
		style: {
			height: 400,
			background: "#111827",
			borderRadius: 16,
			border: "1px solid rgba(255,255,255,0.1)",
			display: "flex",
			flexDirection: "column",
			overflow: "hidden"
		},
		children: [
			/* @__PURE__ */ jsx("div", {
				style: {
					padding: 20,
					borderBottom: "1px solid rgba(255,255,255,0.05)",
					background: "rgba(255,255,255,0.02)"
				},
				children: /* @__PURE__ */ jsxs("h3", {
					style: {
						margin: 0,
						color: "#fff",
						fontSize: 16,
						display: "flex",
						alignItems: "center",
						gap: 12
					},
					children: [/* @__PURE__ */ jsx("span", {
						style: {
							display: "flex",
							width: 24,
							height: 24,
							background: "#6366f1",
							borderRadius: "50%",
							alignItems: "center",
							justifyContent: "center"
						},
						children: /* @__PURE__ */ jsxs("svg", {
							width: "14",
							height: "14",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "#fff",
							strokeWidth: "2",
							children: [
								/* @__PURE__ */ jsx("path", { d: "M12 2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" }),
								/* @__PURE__ */ jsx("path", { d: "M12 8v14" }),
								/* @__PURE__ */ jsx("path", { d: "M8 12h8" })
							]
						})
					}), "Zytrixon Enterprise AI"]
				})
			}),
			/* @__PURE__ */ jsx("div", {
				style: {
					flex: 1,
					padding: 20,
					overflowY: "auto",
					display: "flex",
					flexDirection: "column",
					gap: 16
				},
				children: messages.map((m, i) => /* @__PURE__ */ jsx("div", {
					style: {
						display: "flex",
						justifyContent: m.role === "user" ? "flex-end" : "flex-start"
					},
					children: /* @__PURE__ */ jsx("div", {
						style: {
							maxWidth: "80%",
							padding: "12px 16px",
							borderRadius: 12,
							background: m.role === "user" ? "#6366f1" : "rgba(255,255,255,0.05)",
							color: "#fff",
							fontSize: 14,
							lineHeight: 1.5,
							borderTopRightRadius: m.role === "user" ? 4 : 12,
							borderTopLeftRadius: m.role === "ai" ? 4 : 12
						},
						children: m.text
					})
				}, i))
			}),
			/* @__PURE__ */ jsx("div", {
				style: {
					padding: 20,
					background: "rgba(255,255,255,0.02)",
					borderTop: "1px solid rgba(255,255,255,0.05)"
				},
				children: /* @__PURE__ */ jsxs("div", {
					style: {
						display: "flex",
						gap: 12
					},
					children: [/* @__PURE__ */ jsx("input", {
						type: "text",
						value: input,
						onChange: (e) => setInput(e.target.value),
						onKeyDown: (e) => e.key === "Enter" && handleSend(),
						placeholder: "Type a command...",
						style: {
							flex: 1,
							background: "rgba(0,0,0,0.5)",
							border: "1px solid rgba(255,255,255,0.1)",
							padding: "12px 16px",
							borderRadius: 8,
							color: "#fff",
							outline: "none"
						}
					}), /* @__PURE__ */ jsx("button", {
						onClick: handleSend,
						style: {
							background: "#6366f1",
							color: "#fff",
							border: "none",
							padding: "0 24px",
							borderRadius: 8,
							fontWeight: 600,
							cursor: "pointer"
						},
						children: "Run"
					})]
				})
			})
		]
	});
};
var AppPlayground = () => {
	const [activeTab, setActiveTab] = useState("home");
	return /* @__PURE__ */ jsx("div", {
		style: {
			height: 500,
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			background: "var(--zy-black)",
			borderRadius: 16
		},
		children: /* @__PURE__ */ jsxs("div", {
			style: {
				width: 300,
				height: 600,
				border: "8px solid var(--zy-gray-dark)",
				borderRadius: 40,
				background: "#000",
				position: "relative",
				overflow: "hidden",
				display: "flex",
				flexDirection: "column"
			},
			children: [
				/* @__PURE__ */ jsx("div", { style: {
					width: 100,
					height: 24,
					background: "var(--zy-gray-dark)",
					position: "absolute",
					top: 0,
					left: "50%",
					transform: "translateX(-50%)",
					borderBottomLeftRadius: 16,
					borderBottomRightRadius: 16,
					zIndex: 10
				} }),
				/* @__PURE__ */ jsxs("div", {
					style: {
						flex: 1,
						padding: 24,
						paddingTop: 60,
						display: "flex",
						flexDirection: "column",
						gap: 16
					},
					children: [
						/* @__PURE__ */ jsxs("div", {
							style: {
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
								color: "var(--zy-white)"
							},
							children: [/* @__PURE__ */ jsx("div", {
								style: {
									fontSize: 20,
									fontWeight: 700,
									fontFamily: "var(--font-heading)"
								},
								children: "Good Morning"
							}), /* @__PURE__ */ jsx("div", { style: {
								width: 36,
								height: 36,
								borderRadius: "50%",
								background: "var(--zy-blue)"
							} })]
						}),
						activeTab === "home" && /* @__PURE__ */ jsxs(Fragment$1, { children: [
							/* @__PURE__ */ jsxs("div", {
								style: {
									padding: 20,
									background: "var(--zy-blue)",
									borderRadius: 16,
									color: "#fff"
								},
								children: [/* @__PURE__ */ jsx("div", {
									style: {
										fontSize: 14,
										opacity: .8
									},
									children: "Total Balance"
								}), /* @__PURE__ */ jsx("div", {
									style: {
										fontSize: 32,
										fontWeight: 800
									},
									children: "$12,450.00"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								style: {
									display: "grid",
									gridTemplateColumns: "1fr 1fr",
									gap: 12
								},
								children: [/* @__PURE__ */ jsx("div", {
									style: {
										background: "var(--zy-gray-card)",
										padding: 16,
										borderRadius: 12,
										color: "var(--zy-white)",
										textAlign: "center"
									},
									children: "Send"
								}), /* @__PURE__ */ jsx("div", {
									style: {
										background: "var(--zy-gray-card)",
										padding: 16,
										borderRadius: 12,
										color: "var(--zy-white)",
										textAlign: "center"
									},
									children: "Receive"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								style: {
									flex: 1,
									background: "var(--zy-gray-card)",
									borderRadius: 16,
									padding: 16,
									color: "var(--zy-white)"
								},
								children: [/* @__PURE__ */ jsx("div", {
									style: {
										fontWeight: 600,
										marginBottom: 12
									},
									children: "Recent Activity"
								}), /* @__PURE__ */ jsxs("div", {
									style: {
										display: "flex",
										gap: 12,
										alignItems: "center",
										marginBottom: 12
									},
									children: [
										/* @__PURE__ */ jsx("div", { style: {
											width: 32,
											height: 32,
											borderRadius: 8,
											background: "#22c55e"
										} }),
										/* @__PURE__ */ jsxs("div", {
											style: { flex: 1 },
											children: [/* @__PURE__ */ jsx("div", {
												style: {
													fontSize: 14,
													fontWeight: 600
												},
												children: "Starbucks"
											}), /* @__PURE__ */ jsx("div", {
												style: {
													fontSize: 12,
													color: "var(--zy-gray-text)"
												},
												children: "Today, 9:41 AM"
											})]
										}),
										/* @__PURE__ */ jsx("div", {
											style: { fontWeight: 600 },
											children: "-$4.50"
										})
									]
								})]
							})
						] }),
						activeTab === "stats" && /* @__PURE__ */ jsx("div", {
							style: {
								flex: 1,
								background: "var(--zy-gray-card)",
								borderRadius: 16,
								padding: 16,
								color: "var(--zy-white)",
								display: "flex",
								alignItems: "center",
								justifyContent: "center"
							},
							children: /* @__PURE__ */ jsxs("div", {
								style: { textAlign: "center" },
								children: [/* @__PURE__ */ jsx("svg", {
									width: "64",
									height: "64",
									viewBox: "0 0 24 24",
									fill: "none",
									stroke: "var(--zy-blue)",
									strokeWidth: "2",
									children: /* @__PURE__ */ jsx("path", { d: "M18 20V10M12 20V4M6 20v-6" })
								}), /* @__PURE__ */ jsx("div", {
									style: {
										marginTop: 16,
										fontWeight: 600
									},
									children: "Analytics Overview"
								})]
							})
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					style: {
						height: 60,
						background: "var(--zy-gray-dark)",
						display: "flex",
						justifyContent: "space-around",
						alignItems: "center",
						paddingBottom: 12
					},
					children: [/* @__PURE__ */ jsx("div", {
						onClick: () => setActiveTab("home"),
						style: {
							cursor: "pointer",
							color: activeTab === "home" ? "var(--zy-blue)" : "var(--zy-gray-text)"
						},
						children: /* @__PURE__ */ jsx("svg", {
							width: "24",
							height: "24",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: "2",
							children: /* @__PURE__ */ jsx("path", { d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" })
						})
					}), /* @__PURE__ */ jsx("div", {
						onClick: () => setActiveTab("stats"),
						style: {
							cursor: "pointer",
							color: activeTab === "stats" ? "var(--zy-blue)" : "var(--zy-gray-text)"
						},
						children: /* @__PURE__ */ jsx("svg", {
							width: "24",
							height: "24",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: "2",
							children: /* @__PURE__ */ jsx("path", { d: "M18 20V10M12 20V4M6 20v-6" })
						})
					})]
				})
			]
		})
	});
};
var IotPlayground = () => {
	const [temp, setTemp] = useState(72);
	const [hum, setHum] = useState(45);
	useEffect(() => {
		const t = setInterval(() => {
			setTemp((prev) => prev + (Math.random() > .5 ? 1 : -1));
			setHum((prev) => prev + (Math.random() > .5 ? 1 : -1));
		}, 1e3);
		return () => clearInterval(t);
	}, []);
	return /* @__PURE__ */ jsxs("div", {
		style: {
			height: 400,
			padding: 32,
			background: "var(--zy-black)",
			borderRadius: 16,
			display: "flex",
			flexDirection: "column",
			gap: 24
		},
		children: [/* @__PURE__ */ jsx("div", {
			style: {
				color: "var(--zy-white)",
				fontSize: 20,
				fontWeight: 700,
				fontFamily: "var(--font-heading)"
			},
			children: "IoT Control Center"
		}), /* @__PURE__ */ jsxs("div", {
			style: {
				display: "flex",
				gap: 24,
				flexWrap: "wrap"
			},
			children: [
				/* @__PURE__ */ jsxs("div", {
					style: {
						flex: 1,
						minWidth: 200,
						background: "var(--zy-gray-card)",
						padding: 24,
						borderRadius: 16,
						border: "1px solid rgba(255,255,255,0.05)"
					},
					children: [
						/* @__PURE__ */ jsx("div", {
							style: {
								color: "var(--zy-gray-text)",
								fontSize: 14,
								marginBottom: 8
							},
							children: "Core Temperature"
						}),
						/* @__PURE__ */ jsxs("div", {
							style: {
								color: "var(--zy-blue)",
								fontSize: 48,
								fontWeight: 900
							},
							children: [temp, "°F"]
						}),
						/* @__PURE__ */ jsx("div", {
							style: {
								color: "#22c55e",
								fontSize: 12,
								marginTop: 8
							},
							children: "● Online"
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					style: {
						flex: 1,
						minWidth: 200,
						background: "var(--zy-gray-card)",
						padding: 24,
						borderRadius: 16,
						border: "1px solid rgba(255,255,255,0.05)"
					},
					children: [
						/* @__PURE__ */ jsx("div", {
							style: {
								color: "var(--zy-gray-text)",
								fontSize: 14,
								marginBottom: 8
							},
							children: "Ambient Humidity"
						}),
						/* @__PURE__ */ jsxs("div", {
							style: {
								color: "var(--zy-blue)",
								fontSize: 48,
								fontWeight: 900
							},
							children: [hum, "%"]
						}),
						/* @__PURE__ */ jsx("div", {
							style: {
								color: "#22c55e",
								fontSize: 12,
								marginTop: 8
							},
							children: "● Online"
						})
					]
				}),
				/* @__PURE__ */ jsx("div", {
					style: {
						flex: 1,
						minWidth: 200,
						background: "var(--zy-gray-card)",
						padding: 24,
						borderRadius: 16,
						border: "1px solid rgba(255,255,255,0.05)",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center"
					},
					children: /* @__PURE__ */ jsx("button", {
						style: {
							padding: 16,
							background: "rgba(239, 68, 68, 0.1)",
							color: "#ef4444",
							border: "1px solid #ef4444",
							borderRadius: 8,
							fontWeight: 700,
							cursor: "pointer"
						},
						children: "EMERGENCY SHUTOFF"
					})
				})
			]
		})]
	});
};
var CustomSoftwarePlayground = () => {
	return /* @__PURE__ */ jsxs("div", {
		style: {
			height: 400,
			padding: 32,
			background: "var(--zy-black)",
			borderRadius: 16,
			display: "grid",
			gridTemplateColumns: "200px 1fr",
			gap: 24
		},
		children: [/* @__PURE__ */ jsxs("div", {
			style: {
				background: "var(--zy-gray-card)",
				borderRadius: 12,
				padding: 16,
				display: "flex",
				flexDirection: "column",
				gap: 12
			},
			children: [/* @__PURE__ */ jsx("div", {
				style: {
					color: "var(--zy-white)",
					fontWeight: 700,
					marginBottom: 16,
					fontFamily: "var(--font-heading)"
				},
				children: "Enterprise ERP"
			}), [
				"Dashboard",
				"Analytics",
				"Inventory",
				"Customers",
				"Settings"
			].map((item) => /* @__PURE__ */ jsx("div", {
				style: {
					padding: "8px 12px",
					background: item === "Dashboard" ? "var(--zy-blue)" : "transparent",
					color: item === "Dashboard" ? "#fff" : "var(--zy-gray-text)",
					borderRadius: 6,
					fontSize: 14,
					cursor: "pointer"
				},
				children: item
			}, item))]
		}), /* @__PURE__ */ jsxs("div", {
			style: {
				display: "flex",
				flexDirection: "column",
				gap: 24
			},
			children: [/* @__PURE__ */ jsx("div", {
				style: {
					display: "grid",
					gridTemplateColumns: "repeat(3, 1fr)",
					gap: 16
				},
				children: [
					"Total Revenue",
					"Active Users",
					"Open Tickets"
				].map((stat, i) => /* @__PURE__ */ jsxs("div", {
					style: {
						background: "var(--zy-gray-card)",
						padding: 16,
						borderRadius: 12
					},
					children: [/* @__PURE__ */ jsx("div", {
						style: {
							color: "var(--zy-gray-text)",
							fontSize: 12
						},
						children: stat
					}), /* @__PURE__ */ jsx("div", {
						style: {
							color: "var(--zy-white)",
							fontSize: 24,
							fontWeight: 700,
							marginTop: 8
						},
						children: i === 0 ? "$1.2M" : i === 1 ? "45.2K" : "12"
					})]
				}, stat))
			}), /* @__PURE__ */ jsxs("div", {
				style: {
					flex: 1,
					background: "var(--zy-gray-card)",
					borderRadius: 12,
					padding: 16
				},
				children: [/* @__PURE__ */ jsx("div", {
					style: {
						color: "var(--zy-white)",
						fontWeight: 600,
						marginBottom: 16
					},
					children: "Revenue Growth"
				}), /* @__PURE__ */ jsx("div", {
					style: {
						height: "100%",
						display: "flex",
						alignItems: "flex-end",
						gap: 8
					},
					children: [
						40,
						60,
						45,
						80,
						55,
						90,
						100
					].map((h, i) => /* @__PURE__ */ jsx("div", { style: {
						flex: 1,
						height: `${h}%`,
						background: "var(--zy-blue)",
						borderRadius: "4px 4px 0 0",
						opacity: .8
					} }, i))
				})]
			})]
		})]
	});
};
var DigitalMarketingPlayground = () => {
	const [traffic, setTraffic] = useState(12400);
	useEffect(() => {
		const t = setInterval(() => setTraffic((p) => p + Math.floor(Math.random() * 50)), 1e3);
		return () => clearInterval(t);
	}, []);
	return /* @__PURE__ */ jsxs("div", {
		style: {
			height: 400,
			padding: 32,
			background: "var(--zy-black)",
			borderRadius: 16,
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			justifyContent: "center"
		},
		children: [
			/* @__PURE__ */ jsx("div", {
				style: {
					color: "var(--zy-blue)",
					fontSize: 14,
					fontWeight: 700,
					textTransform: "uppercase",
					letterSpacing: "0.1em",
					marginBottom: 8
				},
				children: "Live Traffic Monitor"
			}),
			/* @__PURE__ */ jsxs("div", {
				style: {
					color: "var(--zy-white)",
					fontSize: 72,
					fontWeight: 900,
					fontFamily: "var(--font-heading)",
					display: "flex",
					alignItems: "center",
					gap: 16
				},
				children: [traffic.toLocaleString(), /* @__PURE__ */ jsxs("svg", {
					width: "48",
					height: "48",
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "#22c55e",
					strokeWidth: "3",
					style: { transform: "translateY(-8px)" },
					children: [/* @__PURE__ */ jsx("polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17" }), /* @__PURE__ */ jsx("polyline", { points: "16 7 22 7 22 13" })]
				})]
			}),
			/* @__PURE__ */ jsx("p", {
				style: {
					color: "var(--zy-gray-text)",
					marginTop: 16
				},
				children: "Our SEO strategies consistently drive high-quality inbound traffic."
			})
		]
	});
};
function ServicePlayground({ serviceSlug }) {
	return /* @__PURE__ */ jsx("section", {
		className: "zy-section",
		style: { background: "var(--zy-black)" },
		children: /* @__PURE__ */ jsxs("div", {
			style: {
				maxWidth: 1200,
				margin: "0 auto"
			},
			children: [/* @__PURE__ */ jsxs("div", {
				style: {
					textAlign: "center",
					marginBottom: 40
				},
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "zy-section-label",
						children: "Interactive Demo"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "zy-section-title",
						children: "Experience It Yourself"
					}),
					/* @__PURE__ */ jsx("p", {
						style: {
							fontSize: 18,
							color: "var(--zy-gray-text)",
							maxWidth: 600,
							margin: "0 auto"
						},
						children: "See our capabilities in action through this live simulation."
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				style: {
					padding: 8,
					background: "var(--zy-black)",
					borderRadius: 24,
					border: "1px solid rgba(255,255,255,0.1)",
					boxShadow: "0 20px 40px rgba(0,0,0,0.5)"
				},
				children: [
					serviceSlug === "web-development" && /* @__PURE__ */ jsx(WebDevPlayground, {}),
					serviceSlug === "ai-automation" && /* @__PURE__ */ jsx(AiPlayground, {}),
					serviceSlug === "app-development" && /* @__PURE__ */ jsx(AppPlayground, {}),
					serviceSlug === "iot-solutions" && /* @__PURE__ */ jsx(IotPlayground, {}),
					serviceSlug === "custom-software" && /* @__PURE__ */ jsx(CustomSoftwarePlayground, {}),
					serviceSlug === "digital-marketing" && /* @__PURE__ */ jsx(DigitalMarketingPlayground, {})
				]
			})]
		})
	});
}
//#endregion
//#region resources/js/components/sections/ServiceStats.tsx
function ServiceStats({ service, location }) {
	const { theme } = useTheme();
	const isLight = theme === "light";
	const config = getServiceConfig(service?.slug);
	const themeColor = config.themeColor;
	const stats = [...config.stats, {
		value: "24/7",
		label: location ? `Support in ${location.name}` : "Global Support"
	}];
	return /* @__PURE__ */ jsx("section", {
		className: "zy-section",
		style: {
			background: isLight ? "#f9fafb" : "var(--zy-black)",
			borderBottom: `1px solid ${isLight ? "#e5e7eb" : "rgba(255,255,255,0.05)"}`
		},
		children: /* @__PURE__ */ jsx("div", {
			style: {
				maxWidth: 1200,
				margin: "0 auto",
				display: "grid",
				gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
				gap: 24,
				textAlign: "center"
			},
			children: stats.map((stat, i) => /* @__PURE__ */ jsxs("div", {
				style: {
					padding: "40px 24px",
					background: isLight ? "#fff" : "var(--zy-gray-card)",
					borderRadius: 16,
					border: isLight ? "1px solid #eee" : "1px solid rgba(255,255,255,0.05)",
					boxShadow: isLight ? "0 4px 20px rgba(0,0,0,0.02)" : "none",
					transition: "transform 0.3s"
				},
				onMouseEnter: (e) => e.currentTarget.style.transform = "translateY(-5px)",
				onMouseLeave: (e) => e.currentTarget.style.transform = "translateY(0)",
				children: [/* @__PURE__ */ jsx("h3", {
					style: {
						fontSize: 48,
						fontWeight: 900,
						color: themeColor,
						marginBottom: 12,
						fontFamily: "var(--font-heading)"
					},
					children: stat.value
				}), /* @__PURE__ */ jsx("p", {
					style: {
						color: isLight ? "#666" : "var(--zy-gray-text)",
						fontSize: 14,
						letterSpacing: "0.05em",
						textTransform: "uppercase",
						fontWeight: 700,
						margin: 0
					},
					children: stat.label
				})]
			}, i))
		})
	});
}
//#endregion
//#region resources/js/components/sections/ValueProposition.tsx
var IconMap$1 = {
	robot: Bot,
	brain: Brain,
	clock: Clock,
	search: Search,
	"dollar-sign": DollarSign,
	shield: Shield,
	smartphone: Smartphone,
	layers: Layers,
	"wifi-off": WifiOff,
	fingerprint: Fingerprint,
	bell: Bell,
	link: Link$1,
	target: Target,
	"trending-up": TrendingUp,
	"pie-chart": PieChart,
	globe: Globe,
	split: Split,
	repeat: Repeat,
	activity: Activity,
	cpu: Cpu,
	wifi: Wifi,
	battery: Battery,
	"share-2": Share2,
	"hard-drive": HardDrive,
	box: Box,
	maximize: Maximize,
	users: Users,
	"git-commit": GitCommit,
	database: Database,
	zap: Zap,
	monitor: Monitor,
	edit: Edit,
	eye: Eye,
	server: Server
};
function ValueProposition({ service, location, contentOverrides }) {
	const { theme } = useTheme();
	const isLight = theme === "light";
	const config = getServiceConfig(service?.slug);
	const features = config.valueProps.map((f, index) => ({
		...f,
		color: [
			config.themeColor,
			"#10b981",
			"#eab308",
			"#ec4899",
			"#8b5cf6",
			"#06b6d4"
		][index % 6]
	}));
	return /* @__PURE__ */ jsxs("section", {
		className: "zy-section",
		style: { background: isLight ? "#FFFFFF" : "var(--zy-black)" },
		children: [/* @__PURE__ */ jsxs("div", {
			style: {
				maxWidth: 1200,
				margin: "0 auto",
				textAlign: "center"
			},
			children: [
				/* @__PURE__ */ jsx("span", {
					className: "zy-section-label",
					style: {
						color: "#3b82f6",
						opacity: 1
					},
					children: "WHY CHOOSE US"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "zy-section-title",
					style: {
						color: isLight ? "#000" : "var(--zy-white)",
						marginBottom: 24
					},
					children: contentOverrides?.value_prop_h2 || `Unmatched Quality in ${service?.title || "Web Development"}`
				}),
				/* @__PURE__ */ jsx("p", {
					style: {
						color: isLight ? "#555" : "var(--zy-gray-text)",
						fontSize: 18,
						maxWidth: 700,
						margin: "0 auto 64px",
						lineHeight: 1.6
					},
					children: contentOverrides?.value_prop_desc || `We don't just write code. We architect scalable, secure, and beautiful digital experiences that drive real business growth.`
				}),
				/* @__PURE__ */ jsx("div", {
					style: {
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
						gap: 32
					},
					children: features.map((feature, i) => {
						const Icon = IconMap$1[feature.icon] || Zap;
						return /* @__PURE__ */ jsx("div", {
							className: "value-prop-card",
							style: { transition: "transform 0.3s" },
							children: /* @__PURE__ */ jsx(GradientCard, {
								themeColor: feature.color,
								style: {
									textAlign: "left",
									height: "100%",
									background: isLight ? "#fdfdfd" : "var(--zy-gray-card)",
									boxShadow: isLight ? "0 10px 30px rgba(0,0,0,0.03)" : "none"
								},
								children: /* @__PURE__ */ jsxs("div", {
									style: {
										padding: "32px 32px 40px",
										height: "100%",
										display: "flex",
										flexDirection: "column"
									},
									children: [
										/* @__PURE__ */ jsx("div", {
											style: {
												color: feature.color,
												marginBottom: 24,
												width: 48,
												height: 48,
												borderRadius: "50%",
												background: `color-mix(in srgb, ${feature.color} 15%, transparent)`,
												display: "flex",
												alignItems: "center",
												justifyContent: "center"
											},
											children: /* @__PURE__ */ jsx(Icon, {
												size: 24,
												strokeWidth: 2.5
											})
										}),
										/* @__PURE__ */ jsx("h3", {
											style: {
												fontFamily: "var(--font-heading)",
												color: isLight ? "#000" : "var(--zy-white)",
												fontSize: 20,
												fontWeight: 800,
												marginBottom: 12
											},
											children: feature.title
										}),
										/* @__PURE__ */ jsx("p", {
											style: {
												color: isLight ? "#666" : "var(--zy-gray-text)",
												fontSize: 15,
												lineHeight: 1.6,
												fontWeight: 500,
												margin: 0
											},
											children: feature.desc
										})
									]
								})
							})
						}, i);
					})
				})
			]
		}), /* @__PURE__ */ jsx("style", { children: `
                .value-prop-card:hover {
                    transform: translateY(-8px);
                }
            ` })]
	});
}
//#endregion
//#region resources/js/components/sections/IndustryUseCases.tsx
function IndustryUseCases({ service }) {
	return /* @__PURE__ */ jsx("section", {
		className: "zy-section",
		style: {
			background: "var(--zy-black)",
			borderBottom: "1px solid rgba(255,255,255,0.05)"
		},
		children: /* @__PURE__ */ jsxs("div", {
			style: {
				maxWidth: 1200,
				margin: "0 auto"
			},
			children: [
				/* @__PURE__ */ jsx("span", {
					className: "zy-section-label",
					children: "Versatility"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "zy-section-title",
					children: "Industry Applications"
				}),
				/* @__PURE__ */ jsx("div", {
					style: {
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
						gap: 24,
						marginTop: 60
					},
					children: [
						"Healthcare",
						"FinTech",
						"E-Commerce",
						"Logistics"
					].map((industry, i) => /* @__PURE__ */ jsxs("div", {
						style: {
							padding: 32,
							background: "var(--zy-gray-card)",
							borderRadius: 12,
							borderLeft: "2px solid var(--zy-blue)"
						},
						children: [/* @__PURE__ */ jsx("h3", {
							style: {
								fontSize: 24,
								color: "var(--zy-white)",
								fontWeight: 700,
								marginBottom: 12,
								fontFamily: "var(--font-heading)"
							},
							children: industry
						}), /* @__PURE__ */ jsxs("p", {
							style: { color: "var(--zy-gray-text)" },
							children: [
								"Tailored ",
								service?.title || "solutions",
								" ",
								"meeting the strict compliance and high-performance demands of the ",
								industry,
								" ",
								"sector."
							]
						})]
					}, i))
				})
			]
		})
	});
}
//#endregion
//#region resources/js/components/sections/TechnicalArchitecture.tsx
var TIERS = [
	{
		name: "Client Tier",
		desc: "Web & Mobile Apps",
		icon: /* @__PURE__ */ jsxs("svg", {
			width: "28",
			height: "28",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "2",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			children: [
				/* @__PURE__ */ jsx("rect", {
					x: "2",
					y: "3",
					width: "20",
					height: "14",
					rx: "2",
					ry: "2"
				}),
				/* @__PURE__ */ jsx("line", {
					x1: "8",
					y1: "21",
					x2: "16",
					y2: "21"
				}),
				/* @__PURE__ */ jsx("line", {
					x1: "12",
					y1: "17",
					x2: "12",
					y2: "21"
				})
			]
		}),
		color: "#3b82f6"
	},
	{
		name: "API Gateway",
		desc: "Routing & Security",
		icon: /* @__PURE__ */ jsx("svg", {
			width: "28",
			height: "28",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "2",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			children: /* @__PURE__ */ jsx("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" })
		}),
		color: "#8b5cf6"
	},
	{
		name: "Microservices",
		desc: "Business Logic",
		icon: /* @__PURE__ */ jsxs("svg", {
			width: "28",
			height: "28",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "2",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			children: [
				/* @__PURE__ */ jsx("polygon", { points: "12 2 2 7 12 12 22 7 12 2" }),
				/* @__PURE__ */ jsx("polyline", { points: "2 17 12 22 22 17" }),
				/* @__PURE__ */ jsx("polyline", { points: "2 12 12 17 22 12" })
			]
		}),
		color: "#ec4899"
	},
	{
		name: "Data Layer",
		desc: "Storage & Caching",
		icon: /* @__PURE__ */ jsxs("svg", {
			width: "28",
			height: "28",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "2",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			children: [
				/* @__PURE__ */ jsx("ellipse", {
					cx: "12",
					cy: "5",
					rx: "9",
					ry: "3"
				}),
				/* @__PURE__ */ jsx("path", { d: "M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" }),
				/* @__PURE__ */ jsx("path", { d: "M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" })
			]
		}),
		color: "#10b981"
	}
];
function TechnicalArchitecture({ service }) {
	const { theme } = useTheme();
	const isLight = theme === "light";
	const config = getServiceConfig(service?.slug);
	const themeColor = config.themeColor;
	const dynamicSteps = config.architecture.steps;
	return /* @__PURE__ */ jsxs("section", {
		className: "zy-section",
		style: {
			background: isLight ? "#FFFFFF" : "var(--zy-black)",
			position: "relative",
			overflow: "hidden"
		},
		children: [
			/* @__PURE__ */ jsx("div", { style: {
				position: "absolute",
				top: "50%",
				left: "50%",
				transform: "translate(-50%, -50%)",
				width: "100%",
				height: 1,
				background: `linear-gradient(90deg, transparent, ${isLight ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.1)"}, transparent)`,
				zIndex: 0
			} }),
			/* @__PURE__ */ jsxs("div", {
				style: {
					maxWidth: 1200,
					margin: "0 auto",
					textAlign: "center",
					position: "relative",
					zIndex: 1
				},
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "zy-section-label",
						style: {
							color: themeColor,
							opacity: 1
						},
						children: config.architecture.title
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "zy-section-title",
						style: { color: isLight ? "#000" : "var(--zy-white)" },
						children: "Technical Architecture Flow"
					}),
					/* @__PURE__ */ jsx("p", {
						style: {
							color: isLight ? "#555" : "var(--zy-gray-text)",
							marginBottom: 80,
							fontSize: 18
						},
						children: "Our highly optimized pipeline ensures infinite scalability and absolute resilience."
					}),
					/* @__PURE__ */ jsx("div", {
						className: "arch-flow-container",
						style: {
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							gap: 20,
							flexWrap: "wrap"
						},
						children: TIERS.map((tier, i) => /* @__PURE__ */ jsxs(React.Fragment, { children: [/* @__PURE__ */ jsx("div", {
							className: "arch-card-wrapper",
							style: { transition: "transform 0.3s" },
							children: /* @__PURE__ */ jsx(GradientCard, {
								themeColor: tier.color,
								style: {
									width: 240,
									background: isLight ? "#fdfdfd" : "var(--zy-gray-card)",
									boxShadow: isLight ? "0 15px 35px rgba(0,0,0,0.05)" : "0 15px 35px rgba(0,0,0,0.4)"
								},
								children: /* @__PURE__ */ jsxs("div", {
									style: {
										padding: "40px 24px",
										display: "flex",
										flexDirection: "column",
										alignItems: "center",
										textAlign: "center",
										background: isLight ? "#fdfdfd" : "var(--zy-gray-card)",
										borderRadius: 15,
										height: "100%"
									},
									children: [
										/* @__PURE__ */ jsx("div", {
											style: {
												width: 72,
												height: 72,
												borderRadius: "50%",
												background: `color-mix(in srgb, ${tier.color} 15%, transparent)`,
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												color: tier.color,
												marginBottom: 24,
												boxShadow: `0 0 20px ${tier.color}33`,
												border: `1px solid ${tier.color}40`
											},
											children: tier.icon
										}),
										/* @__PURE__ */ jsx("h3", {
											style: {
												fontSize: 18,
												color: isLight ? "#000" : "var(--zy-white)",
												fontWeight: 700,
												fontFamily: "var(--font-heading)",
												marginBottom: 12
											},
											children: dynamicSteps[i] || tier.name
										}),
										/* @__PURE__ */ jsx("p", {
											style: {
												fontSize: 13,
												color: isLight ? "#666" : "var(--zy-gray-text)",
												textTransform: "uppercase",
												letterSpacing: "0.05em",
												fontWeight: 700
											},
											children: tier.desc
										})
									]
								})
							})
						}), i < TIERS.length - 1 && /* @__PURE__ */ jsx("div", {
							className: "arch-connector",
							style: {
								display: "flex",
								alignItems: "center",
								color: isLight ? "#ccc" : "rgba(255,255,255,0.2)"
							},
							children: /* @__PURE__ */ jsxs("svg", {
								width: "40",
								height: "24",
								viewBox: "0 0 40 24",
								fill: "none",
								children: [/* @__PURE__ */ jsx("line", {
									x1: "0",
									y1: "12",
									x2: "38",
									y2: "12",
									stroke: "currentColor",
									strokeWidth: "2",
									strokeDasharray: "4 4",
									className: "flow-line"
								}), /* @__PURE__ */ jsx("polyline", {
									points: "32 6 38 12 32 18",
									stroke: "currentColor",
									strokeWidth: "2",
									strokeLinecap: "round",
									strokeLinejoin: "round"
								})]
							})
						})] }, i))
					})
				]
			}),
			/* @__PURE__ */ jsx("style", { children: `
                @keyframes flowRight {
                    0% { stroke-dashoffset: 8; }
                    100% { stroke-dashoffset: 0; }
                }
                .flow-line {
                    animation: flowRight 0.5s linear infinite;
                }
                .arch-card-wrapper:hover {
                    transform: translateY(-10px);
                }
                @media (max-width: 1000px) {
                    .arch-flow-container {
                        flex-direction: column !important;
                    }
                    .arch-connector {
                        transform: rotate(90deg);
                        margin: 10px 0;
                    }
                }
            ` })
		]
	});
}
//#endregion
//#region resources/js/components/sections/IntegrationCapabilities.tsx
var getIcon = (type) => {
	switch (type.toLowerCase()) {
		case "payments": return /* @__PURE__ */ jsx(CreditCard, { size: 24 });
		case "cloud":
		case "hosting":
		case "infrastructure": return /* @__PURE__ */ jsx(Cloud, { size: 24 });
		case "database":
		case "vector db": return /* @__PURE__ */ jsx(Database, { size: 24 });
		case "communication":
		case "email": return /* @__PURE__ */ jsx(MessageSquare, { size: 24 });
		case "security":
		case "sso": return /* @__PURE__ */ jsx(Shield, { size: 24 });
		case "framework":
		case "llm":
		case "models": return /* @__PURE__ */ jsx(Code, { size: 24 });
		default: return /* @__PURE__ */ jsx(Network, { size: 24 });
	}
};
function IntegrationCapabilities({ service }) {
	const { theme } = useTheme();
	const isLight = theme === "light";
	const config = getServiceConfig(service?.slug);
	const themeColor = config.themeColor;
	const baseItems = config.integrations;
	const marqueeItems = [
		...baseItems,
		...baseItems,
		...baseItems,
		...baseItems
	];
	return /* @__PURE__ */ jsxs("section", {
		className: "zy-section",
		style: {
			background: isLight ? "#FFFFFF" : "var(--zy-black)",
			overflow: "hidden"
		},
		children: [
			/* @__PURE__ */ jsxs("div", {
				style: {
					maxWidth: 1200,
					margin: "0 auto",
					textAlign: "center",
					marginBottom: 40
				},
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "zy-section-label",
						style: {
							color: themeColor,
							opacity: 1
						},
						children: "Connected Ecosystem"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "zy-section-title",
						style: { color: isLight ? "#000" : "var(--zy-white)" },
						children: "Integration Capabilities"
					}),
					/* @__PURE__ */ jsxs("p", {
						style: {
							color: isLight ? "#555" : "var(--zy-gray-text)",
							maxWidth: 600,
							margin: "24px auto 0",
							fontSize: 18,
							lineHeight: 1.6
						},
						children: [
							"We seamlessly connect your new ",
							service?.title || "system",
							" ",
							"with your existing enterprise tools, creating a unified digital infrastructure."
						]
					})
				]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "marquee-container",
				style: {
					position: "relative",
					width: "100%",
					padding: "20px 0"
				},
				children: /* @__PURE__ */ jsx("div", {
					className: "marquee-track",
					style: {
						display: "flex",
						gap: 24,
						width: "max-content",
						animation: "marqueeScroll 25s linear infinite"
					},
					children: marqueeItems.map((tool, i) => /* @__PURE__ */ jsxs("div", {
						style: {
							display: "flex",
							alignItems: "center",
							gap: 16,
							padding: "24px 40px",
							minWidth: 250,
							background: isLight ? "#fdfdfd" : "var(--zy-gray-card)",
							borderRadius: 16,
							border: `1px solid ${isLight ? "#eaeaea" : "rgba(255,255,255,0.05)"}`,
							color: isLight ? "#000" : "var(--zy-white)",
							fontWeight: 700,
							fontSize: 18,
							boxShadow: isLight ? "0 10px 30px rgba(0,0,0,0.02)" : "0 10px 30px rgba(0,0,0,0.2)",
							transition: "all 0.3s ease",
							"--hover-border": themeColor,
							"--hover-shadow": `0 10px 40px color-mix(in srgb, ${themeColor} 25%, transparent)`
						},
						className: "integration-card",
						children: [/* @__PURE__ */ jsx("div", {
							style: { color: themeColor },
							children: getIcon(tool.type)
						}), tool.name]
					}, i))
				})
			}),
			/* @__PURE__ */ jsx("div", { style: {
				position: "absolute",
				top: 0,
				bottom: 0,
				left: 0,
				width: "15%",
				background: `linear-gradient(to right, ${isLight ? "#FFF" : "var(--zy-black)"}, transparent)`,
				zIndex: 1,
				pointerEvents: "none"
			} }),
			/* @__PURE__ */ jsx("div", { style: {
				position: "absolute",
				top: 0,
				bottom: 0,
				right: 0,
				width: "15%",
				background: `linear-gradient(to left, ${isLight ? "#FFF" : "var(--zy-black)"}, transparent)`,
				zIndex: 1,
				pointerEvents: "none"
			} }),
			/* @__PURE__ */ jsx("style", { children: `
                @keyframes marqueeScroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .integration-card:hover {
                    transform: translateY(-5px);
                    border-color: var(--hover-border) !important;
                    box-shadow: var(--hover-shadow) !important;
                }
            ` })
		]
	});
}
//#endregion
//#region resources/js/components/sections/MigrationStrategy.tsx
function MigrationStrategy({ service }) {
	const { theme } = useTheme();
	const isLight = theme === "light";
	const steps = [
		{
			title: "Data Mapping & Backup",
			desc: "We secure and map your existing data to the new architecture.",
			icon: /* @__PURE__ */ jsxs("svg", {
				width: "24",
				height: "24",
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "2",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				children: [
					/* @__PURE__ */ jsx("ellipse", {
						cx: "12",
						cy: "5",
						rx: "9",
						ry: "3"
					}),
					/* @__PURE__ */ jsx("path", { d: "M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" }),
					/* @__PURE__ */ jsx("path", { d: "M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" })
				]
			}),
			color: "#3b82f6"
		},
		{
			title: "Parallel Run Testing",
			desc: "Both systems run simultaneously to ensure zero data loss.",
			icon: /* @__PURE__ */ jsx("svg", {
				width: "24",
				height: "24",
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "2",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				children: /* @__PURE__ */ jsx("polyline", { points: "22 12 18 12 15 21 9 3 6 12 2 12" })
			}),
			color: "#8b5cf6"
		},
		{
			title: "Seamless Switchover",
			desc: "Instant DNS routing cuts over traffic with zero downtime.",
			icon: /* @__PURE__ */ jsxs("svg", {
				width: "24",
				height: "24",
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "2",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				children: [/* @__PURE__ */ jsx("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }), /* @__PURE__ */ jsx("polyline", { points: "22 4 12 14.01 9 11.01" })]
			}),
			color: "#10b981"
		}
	];
	return /* @__PURE__ */ jsxs("section", {
		className: "zy-section",
		style: {
			background: isLight ? "#fdfdfd" : "var(--zy-black)",
			overflow: "hidden"
		},
		children: [/* @__PURE__ */ jsxs("div", {
			style: {
				maxWidth: 1200,
				margin: "0 auto",
				textAlign: "center"
			},
			children: [
				/* @__PURE__ */ jsx("span", {
					className: "zy-section-label",
					style: {
						color: "#10b981",
						opacity: 1
					},
					children: "Zero Downtime"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "zy-section-title",
					style: { color: isLight ? "#000" : "var(--zy-white)" },
					children: "Legacy Migration Strategy"
				}),
				/* @__PURE__ */ jsx("p", {
					style: {
						color: isLight ? "#555" : "var(--zy-gray-text)",
						lineHeight: 1.8,
						fontSize: 18,
						maxWidth: 800,
						margin: "0 auto 60px"
					},
					children: "Moving from an old system? Our zero-downtime migration protocols ensure your business operations never stop while we upgrade your technology."
				}),
				/* @__PURE__ */ jsx("div", {
					style: {
						display: "flex",
						flexDirection: "column",
						gap: 24,
						alignItems: "center"
					},
					children: /* @__PURE__ */ jsx("div", {
						className: "migration-flow",
						style: {
							display: "flex",
							justifyContent: "center",
							width: "100%",
							gap: 32,
							flexWrap: "wrap"
						},
						children: steps.map((step, i) => /* @__PURE__ */ jsxs(React.Fragment, { children: [/* @__PURE__ */ jsxs("div", {
							style: {
								flex: "1 1 300px",
								maxWidth: 400,
								position: "relative",
								marginTop: 15
							},
							children: [/* @__PURE__ */ jsx("div", {
								style: {
									position: "absolute",
									top: -15,
									left: "50%",
									transform: "translateX(-50%)",
									width: 30,
									height: 30,
									borderRadius: "50%",
									background: step.color,
									color: "#fff",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									fontWeight: 800,
									fontSize: 14,
									boxShadow: `0 4px 10px ${step.color}60`,
									zIndex: 10
								},
								children: i + 1
							}), /* @__PURE__ */ jsx(GradientCard, {
								themeColor: step.color,
								style: {
									height: "100%",
									background: isLight ? "#fff" : "var(--zy-gray-card)",
									boxShadow: isLight ? "0 10px 30px rgba(0,0,0,0.05)" : "0 10px 30px rgba(0,0,0,0.3)"
								},
								children: /* @__PURE__ */ jsxs("div", {
									style: {
										padding: "32px 24px",
										textAlign: "center",
										display: "flex",
										flexDirection: "column",
										alignItems: "center",
										height: "100%",
										background: isLight ? "#fff" : "var(--zy-gray-card)",
										borderRadius: 15
									},
									children: [
										/* @__PURE__ */ jsx("div", {
											style: {
												width: 64,
												height: 64,
												borderRadius: "50%",
												background: `color-mix(in srgb, ${step.color} 15%, transparent)`,
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												color: step.color,
												marginBottom: 24,
												border: `1px solid ${step.color}40`,
												boxShadow: `0 0 20px ${step.color}20`,
												marginTop: 8
											},
											children: step.icon
										}),
										/* @__PURE__ */ jsx("h3", {
											style: {
												fontSize: 20,
												fontWeight: 700,
												color: isLight ? "#000" : "var(--zy-white)",
												marginBottom: 12,
												fontFamily: "var(--font-heading)"
											},
											children: step.title
										}),
										/* @__PURE__ */ jsx("p", {
											style: {
												color: isLight ? "#666" : "var(--zy-gray-text)",
												fontSize: 15,
												lineHeight: 1.6,
												margin: 0
											},
											children: step.desc
										})
									]
								})
							})]
						}), i < steps.length - 1 && /* @__PURE__ */ jsx("div", {
							className: "migration-arrow",
							style: {
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								color: isLight ? "#ccc" : "rgba(255,255,255,0.1)"
							},
							children: /* @__PURE__ */ jsxs("svg", {
								width: "40",
								height: "40",
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: "2",
								strokeLinecap: "round",
								strokeLinejoin: "round",
								children: [/* @__PURE__ */ jsx("line", {
									x1: "5",
									y1: "12",
									x2: "19",
									y2: "12"
								}), /* @__PURE__ */ jsx("polyline", { points: "12 5 19 12 12 19" })]
							})
						})] }, i))
					})
				})
			]
		}), /* @__PURE__ */ jsx("style", { children: `
                @media (max-width: 950px) {
                    .migration-arrow {
                        transform: rotate(90deg);
                    }
                    .migration-flow {
                        flex-direction: column;
                    }
                }
            ` })]
	});
}
//#endregion
//#region resources/js/components/sections/LearningExperience.tsx
function LearningExperience({ service }) {
	const { theme } = useTheme();
	return /* @__PURE__ */ jsx("section", {
		className: "zy-section",
		style: { background: "var(--zy-black)" },
		children: /* @__PURE__ */ jsxs("div", {
			style: {
				maxWidth: 1e3,
				margin: "0 auto"
			},
			children: [/* @__PURE__ */ jsxs("div", {
				style: {
					textAlign: "center",
					marginBottom: 60
				},
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "zy-section-label",
						children: "Learning Center"
					}),
					/* @__PURE__ */ jsxs("h2", {
						className: "zy-section-title",
						children: ["Understanding ", service?.title || "Our Technology"]
					}),
					/* @__PURE__ */ jsx("p", {
						style: {
							color: "var(--zy-gray-text)",
							marginTop: 16,
							fontSize: 18
						},
						children: "We believe an informed client is our best partner. Here is a brief look under the hood."
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				style: {
					display: "grid",
					gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
					gap: 32
				},
				children: [
					/* @__PURE__ */ jsx(GradientCard, {
						themeColor: "var(--zy-blue)",
						style: { height: "100%" },
						children: /* @__PURE__ */ jsxs("div", {
							style: {
								padding: 32,
								height: "100%",
								display: "flex",
								flexDirection: "column"
							},
							children: [/* @__PURE__ */ jsx("h3", {
								style: {
									color: "var(--zy-white)",
									fontSize: 20,
									fontWeight: 700,
									marginBottom: 12,
									fontFamily: "var(--font-heading)"
								},
								children: "Architecture First"
							}), /* @__PURE__ */ jsx("p", {
								style: {
									color: "var(--zy-gray-text)",
									lineHeight: 1.6
								},
								children: "Before writing a single line of code, we design the system architecture. This ensures that when your user base scales from 1,000 to 1,000,000, the system doesn't crash. We use microservices and serverless infrastructure to achieve this."
							})]
						})
					}),
					/* @__PURE__ */ jsx(GradientCard, {
						themeColor: "#22c55e",
						style: { height: "100%" },
						children: /* @__PURE__ */ jsxs("div", {
							style: {
								padding: 32,
								height: "100%",
								display: "flex",
								flexDirection: "column"
							},
							children: [/* @__PURE__ */ jsx("h3", {
								style: {
									color: "var(--zy-white)",
									fontSize: 20,
									fontWeight: 700,
									marginBottom: 12,
									fontFamily: "var(--font-heading)"
								},
								children: "Data Security"
							}), /* @__PURE__ */ jsx("p", {
								style: {
									color: "var(--zy-gray-text)",
									lineHeight: 1.6
								},
								children: "In today's landscape, security cannot be an afterthought. We implement End-to-End Encryption (E2EE), strict role-based access controls (RBAC), and adhere to global compliance standards like GDPR and HIPAA."
							})]
						})
					}),
					/* @__PURE__ */ jsx(GradientCard, {
						themeColor: "#eab308",
						style: { height: "100%" },
						children: /* @__PURE__ */ jsxs("div", {
							style: {
								padding: 32,
								height: "100%",
								display: "flex",
								flexDirection: "column"
							},
							children: [/* @__PURE__ */ jsx("h3", {
								style: {
									color: "var(--zy-white)",
									fontSize: 20,
									fontWeight: 700,
									marginBottom: 12,
									fontFamily: "var(--font-heading)"
								},
								children: "Agile Iteration"
							}), /* @__PURE__ */ jsx("p", {
								style: {
									color: "var(--zy-gray-text)",
									lineHeight: 1.6
								},
								children: "We build products iteratively. Instead of waiting 6 months to see a result, we deliver working features every 2 weeks. This allows you to test the market early, gather feedback, and pivot if necessary without wasting budget."
							})]
						})
					})
				]
			})]
		})
	});
}
//#endregion
//#region resources/js/components/sections/ServiceEstimator.tsx
function ServiceEstimator({ service }) {
	const { theme } = useTheme();
	const isLight = theme === "light";
	const [projectSize, setProjectSize] = useState("medium");
	const [timeline, setTimeline] = useState("flexible");
	const [complexity, setComplexity] = useState("standard");
	const calculateEstimate = () => {
		const base = service?.slug === "ai-automation" ? 1e4 : 5e3;
		let multiplier = 1;
		if (projectSize === "large") multiplier *= 2.5;
		if (projectSize === "enterprise") multiplier *= 5;
		if (timeline === "rush") multiplier *= 1.5;
		if (complexity === "high") multiplier *= 1.8;
		if (complexity === "custom") multiplier *= 3;
		const low = Math.round(base * multiplier * .8);
		const high = Math.round(base * multiplier * 1.2);
		return `$${low.toLocaleString()} - $${high.toLocaleString()}`;
	};
	return /* @__PURE__ */ jsxs("section", {
		className: "zy-section",
		style: {
			background: isLight ? "#FFFFFF" : "var(--zy-black)",
			position: "relative"
		},
		children: [/* @__PURE__ */ jsxs("div", {
			style: {
				maxWidth: 1e3,
				margin: "0 auto",
				textAlign: "center"
			},
			children: [
				/* @__PURE__ */ jsx("span", {
					className: "zy-section-label",
					style: {
						color: "#6366f1",
						opacity: 1
					},
					children: "Transparent Pricing"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "zy-section-title",
					style: { color: isLight ? "#000" : "var(--zy-white)" },
					children: "Interactive Project Estimator"
				}),
				/* @__PURE__ */ jsxs("p", {
					style: {
						color: isLight ? "#555" : "var(--zy-gray-text)",
						marginBottom: 60,
						fontSize: 18
					},
					children: [
						"Tell us about your requirements and get an instant ballpark estimate for your ",
						service?.title || "project",
						". No emails required."
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					style: {
						position: "relative",
						borderRadius: 16,
						overflow: "hidden",
						padding: 1,
						display: "flex",
						flexDirection: "column",
						maxWidth: 800,
						margin: "0 auto",
						boxShadow: isLight ? "0 20px 50px rgba(0,0,0,0.08)" : "0 20px 40px rgba(0,0,0,0.4)"
					},
					children: [/* @__PURE__ */ jsx("div", { style: {
						position: "absolute",
						top: "50%",
						left: "50%",
						width: "250%",
						height: "250%",
						background: isLight ? "conic-gradient(from 0deg, transparent 75%, rgba(99, 102, 241, 0.4) 95%, #6366f1 100%)" : "conic-gradient(from 0deg, transparent 75%, rgba(99, 102, 241, 0.4) 95%, #6366f1 100%)",
						animation: "spinGradientCentered 4s linear infinite",
						zIndex: 0
					} }), /* @__PURE__ */ jsx("div", {
						style: {
							position: "relative",
							borderRadius: 15,
							background: isLight ? "#fdfdfd" : "var(--zy-gray-dark)",
							padding: "40px",
							zIndex: 1,
							textAlign: "left"
						},
						children: /* @__PURE__ */ jsxs("div", {
							style: {
								display: "grid",
								gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
								gap: 32
							},
							children: [/* @__PURE__ */ jsxs("div", {
								style: {
									display: "flex",
									flexDirection: "column",
									gap: 24
								},
								children: [
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
										style: {
											display: "block",
											color: isLight ? "#000" : "var(--zy-white)",
											fontWeight: 600,
											marginBottom: 12
										},
										children: "Project Scope"
									}), /* @__PURE__ */ jsxs("select", {
										value: projectSize,
										onChange: (e) => setProjectSize(e.target.value),
										style: {
											width: "100%",
											padding: "14px 16px",
											borderRadius: 8,
											background: isLight ? "#fff" : "var(--zy-black)",
											border: `1px solid ${isLight ? "#ddd" : "rgba(255, 255, 255, 0.1)"}`,
											color: isLight ? "#000" : "var(--zy-white)",
											outline: "none",
											fontSize: 16,
											cursor: "pointer",
											boxShadow: isLight ? "0 2px 10px rgba(0,0,0,0.02)" : "none"
										},
										children: [
											/* @__PURE__ */ jsx("option", {
												value: "small",
												children: "Small MVP / Prototype"
											}),
											/* @__PURE__ */ jsx("option", {
												value: "medium",
												children: "Medium Scale Application"
											}),
											/* @__PURE__ */ jsx("option", {
												value: "large",
												children: "Large Platform"
											}),
											/* @__PURE__ */ jsx("option", {
												value: "enterprise",
												children: "Enterprise Ecosystem"
											})
										]
									})] }),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
										style: {
											display: "block",
											color: isLight ? "#000" : "var(--zy-white)",
											fontWeight: 600,
											marginBottom: 12
										},
										children: "Technical Complexity"
									}), /* @__PURE__ */ jsxs("select", {
										value: complexity,
										onChange: (e) => setComplexity(e.target.value),
										style: {
											width: "100%",
											padding: "14px 16px",
											borderRadius: 8,
											background: isLight ? "#fff" : "var(--zy-black)",
											border: `1px solid ${isLight ? "#ddd" : "rgba(255, 255, 255, 0.1)"}`,
											color: isLight ? "#000" : "var(--zy-white)",
											outline: "none",
											fontSize: 16,
											cursor: "pointer",
											boxShadow: isLight ? "0 2px 10px rgba(0,0,0,0.02)" : "none"
										},
										children: [
											/* @__PURE__ */ jsx("option", {
												value: "standard",
												children: "Standard Integrations"
											}),
											/* @__PURE__ */ jsx("option", {
												value: "high",
												children: "High (Machine Learning, Real-time)"
											}),
											/* @__PURE__ */ jsx("option", {
												value: "custom",
												children: "Extreme (Custom Protocols, Hardware)"
											})
										]
									})] }),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
										style: {
											display: "block",
											color: isLight ? "#000" : "var(--zy-white)",
											fontWeight: 600,
											marginBottom: 12
										},
										children: "Timeline Required"
									}), /* @__PURE__ */ jsxs("select", {
										value: timeline,
										onChange: (e) => setTimeline(e.target.value),
										style: {
											width: "100%",
											padding: "14px 16px",
											borderRadius: 8,
											background: isLight ? "#fff" : "var(--zy-black)",
											border: `1px solid ${isLight ? "#ddd" : "rgba(255, 255, 255, 0.1)"}`,
											color: isLight ? "#000" : "var(--zy-white)",
											outline: "none",
											fontSize: 16,
											cursor: "pointer",
											boxShadow: isLight ? "0 2px 10px rgba(0,0,0,0.02)" : "none"
										},
										children: [/* @__PURE__ */ jsx("option", {
											value: "flexible",
											children: "Flexible (3-6 Months)"
										}), /* @__PURE__ */ jsx("option", {
											value: "rush",
											children: "Rush (1-2 Months)"
										})]
									})] })
								]
							}), /* @__PURE__ */ jsxs("div", {
								style: {
									background: isLight ? "#f0f4f8" : "var(--zy-black)",
									borderRadius: 12,
									padding: 32,
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
									border: `1px solid ${isLight ? "#e0e7ff" : "rgba(99, 102, 241, 0.2)"}`
								},
								children: [
									/* @__PURE__ */ jsx("div", {
										style: {
											color: isLight ? "#6366f1" : "var(--zy-gray-text)",
											fontSize: 14,
											textTransform: "uppercase",
											letterSpacing: "0.1em",
											fontWeight: 800,
											marginBottom: 16
										},
										children: "Estimated Budget"
									}),
									/* @__PURE__ */ jsx("div", {
										style: {
											fontSize: "clamp(28px, 3vw, 40px)",
											fontWeight: 900,
											color: "#6366f1",
											marginBottom: 24,
											fontFamily: "var(--font-heading)"
										},
										children: calculateEstimate()
									}),
									/* @__PURE__ */ jsx("button", {
										className: "zy-btn-primary",
										style: {
											width: "100%",
											padding: "16px",
											fontSize: 16,
											background: "#6366f1",
											borderColor: "#6366f1",
											color: "#fff",
											boxShadow: "0 10px 20px rgba(99, 102, 241, 0.3)"
										},
										children: "Lock This Estimate"
									}),
									/* @__PURE__ */ jsx("p", {
										style: {
											color: isLight ? "#888" : "var(--zy-gray-text)",
											fontSize: 12,
											marginTop: 16,
											textAlign: "center"
										},
										children: "*This is a ballpark estimate. Final cost will be determined after discovery phase."
									})
								]
							})]
						})
					})]
				})
			]
		}), /* @__PURE__ */ jsx("style", { children: `
                @keyframes spinGradientCentered { 0% { transform: translate(-50%, -50%) rotate(0deg); } 100% { transform: translate(-50%, -50%) rotate(360deg); } }
            ` })]
	});
}
//#endregion
//#region resources/js/components/sections/PricingMatrix.tsx
function PricingMatrix({ service }) {
	const { theme } = useTheme();
	const isLight = theme === "light";
	return /* @__PURE__ */ jsxs("section", {
		className: "zy-section",
		style: {
			background: isLight ? "#f9fafb" : "var(--zy-black)",
			position: "relative",
			overflow: "hidden"
		},
		children: [
			/* @__PURE__ */ jsx("div", { style: {
				position: "absolute",
				top: 0,
				left: "50%",
				transform: "translateX(-50%)",
				width: 800,
				height: 400,
				background: "#6366f1",
				filter: "blur(200px)",
				opacity: isLight ? .05 : .1,
				zIndex: 0
			} }),
			/* @__PURE__ */ jsxs("div", {
				style: {
					maxWidth: 1200,
					margin: "0 auto",
					textAlign: "center",
					position: "relative",
					zIndex: 1
				},
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "zy-section-label",
						style: {
							color: "#6366f1",
							opacity: 1
						},
						children: "Pricing"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "zy-section-title",
						style: {
							color: isLight ? "#000" : "var(--zy-white)",
							marginBottom: 16
						},
						children: "Transparent Engagement Models"
					}),
					/* @__PURE__ */ jsx("p", {
						style: {
							color: isLight ? "#555" : "var(--zy-gray-text)",
							fontSize: 18,
							maxWidth: 700,
							margin: "0 auto 64px",
							lineHeight: 1.6
						},
						children: "Choose the engagement model that best fits your project's scope, timeline, and flexibility requirements."
					}),
					/* @__PURE__ */ jsx("div", {
						style: {
							display: "grid",
							gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
							gap: 32,
							alignItems: "center"
						},
						children: [
							{
								name: "Fixed Price",
								price: "Custom Quote",
								desc: "Best for well-defined projects with clear scopes.",
								features: [
									"Defined Scope",
									"Strict Deadline",
									"Fixed Budget",
									"Dedicated PM"
								]
							},
							{
								name: "Dedicated Team",
								price: "Monthly Retainer",
								desc: "Hire our elite engineers to work exclusively for you.",
								features: [
									"Flexible Scope",
									"Direct Communication",
									"Agile Sprints",
									"Full Control"
								],
								highlighted: true
							},
							{
								name: "Time & Material",
								price: "Hourly Rate",
								desc: "Best for dynamic projects requiring ongoing changes.",
								features: [
									"Pay As You Go",
									"Flexible Resources",
									"Weekly Reports",
									"Continuous Delivery"
								]
							}
						].map((plan, i) => /* @__PURE__ */ jsxs("div", {
							className: "pricing-card-wrapper",
							style: {
								position: "relative",
								transform: plan.highlighted ? "scale(1.05)" : "none",
								zIndex: plan.highlighted ? 2 : 1,
								height: "100%",
								transition: "transform 0.3s"
							},
							children: [plan.highlighted && /* @__PURE__ */ jsx("div", {
								style: {
									position: "absolute",
									top: -16,
									left: "50%",
									transform: "translateX(-50%)",
									background: "linear-gradient(90deg, #6366f1, #8b5cf6)",
									color: "#fff",
									padding: "6px 20px",
									borderRadius: 50,
									fontSize: 12,
									fontWeight: 800,
									letterSpacing: "0.1em",
									zIndex: 10,
									boxShadow: "0 5px 15px rgba(99, 102, 241, 0.4)"
								},
								children: "MOST POPULAR"
							}), /* @__PURE__ */ jsxs("div", {
								style: {
									position: "relative",
									borderRadius: 16,
									overflow: "hidden",
									padding: plan.highlighted ? 2 : 0,
									height: "100%",
									boxShadow: isLight ? plan.highlighted ? "0 20px 40px rgba(99, 102, 241, 0.15)" : "0 10px 30px rgba(0,0,0,0.03)" : plan.highlighted ? "0 20px 40px rgba(99, 102, 241, 0.2)" : "0 10px 30px rgba(0,0,0,0.4)"
								},
								children: [plan.highlighted && /* @__PURE__ */ jsx("div", { style: {
									position: "absolute",
									top: "50%",
									left: "50%",
									width: "250%",
									height: "250%",
									background: isLight ? "conic-gradient(from 0deg, transparent 75%, rgba(99, 102, 241, 0.4) 95%, #6366f1 100%)" : "conic-gradient(from 0deg, transparent 75%, rgba(99, 102, 241, 0.4) 95%, #8b5cf6 100%)",
									animation: "spinGradientCentered 4s linear infinite",
									zIndex: 0
								} }), /* @__PURE__ */ jsxs("div", {
									style: {
										position: "relative",
										background: isLight ? "#fff" : plan.highlighted ? "#1a1b23" : "var(--zy-gray-card)",
										padding: "48px 40px",
										borderRadius: plan.highlighted ? 14 : 16,
										border: plan.highlighted ? "none" : `1px solid ${isLight ? "#eee" : "rgba(255,255,255,0.05)"}`,
										color: isLight ? "#000" : "var(--zy-white)",
										zIndex: 1,
										height: "100%",
										display: "flex",
										flexDirection: "column"
									},
									children: [
										/* @__PURE__ */ jsx("h3", {
											style: {
												fontSize: 22,
												fontWeight: 700,
												marginBottom: 12,
												fontFamily: "var(--font-heading)"
											},
											children: plan.name
										}),
										/* @__PURE__ */ jsx("div", {
											style: {
												fontSize: 32,
												fontWeight: 900,
												marginBottom: 16,
												color: plan.highlighted ? "#6366f1" : isLight ? "#000" : "var(--zy-white)"
											},
											children: plan.price
										}),
										/* @__PURE__ */ jsx("p", {
											style: {
												color: isLight ? "#666" : "var(--zy-gray-text)",
												marginBottom: 32,
												fontSize: 15,
												lineHeight: 1.6
											},
											children: plan.desc
										}),
										/* @__PURE__ */ jsx("ul", {
											style: {
												listStyle: "none",
												padding: 0,
												margin: "0 0 40px",
												textAlign: "left",
												flex: 1
											},
											children: plan.features.map((f, j) => /* @__PURE__ */ jsxs("li", {
												style: {
													display: "flex",
													alignItems: "center",
													gap: 12,
													marginBottom: 16
												},
												children: [/* @__PURE__ */ jsx("div", {
													style: {
														width: 24,
														height: 24,
														borderRadius: "50%",
														background: plan.highlighted ? "rgba(99, 102, 241, 0.1)" : isLight ? "#f3f4f6" : "rgba(255,255,255,0.05)",
														display: "flex",
														alignItems: "center",
														justifyContent: "center"
													},
													children: /* @__PURE__ */ jsx("svg", {
														width: "14",
														height: "14",
														viewBox: "0 0 24 24",
														fill: "none",
														stroke: plan.highlighted ? "#6366f1" : isLight ? "#000" : "var(--zy-white)",
														strokeWidth: "3",
														strokeLinecap: "round",
														strokeLinejoin: "round",
														children: /* @__PURE__ */ jsx("polyline", { points: "20 6 9 17 4 12" })
													})
												}), /* @__PURE__ */ jsx("span", {
													style: {
														fontWeight: 600,
														fontSize: 15,
														color: isLight ? "#333" : "#ddd"
													},
													children: f
												})]
											}, j))
										}),
										/* @__PURE__ */ jsx("button", {
											className: plan.highlighted ? "zy-btn-primary" : "zy-btn-outline",
											style: Object.assign({
												width: "100%",
												marginTop: "auto",
												padding: "16px",
												fontSize: 16
											}, plan.highlighted ? {
												background: "#6366f1",
												borderColor: "#6366f1",
												color: "#fff",
												boxShadow: "0 10px 20px rgba(99, 102, 241, 0.3)"
											} : isLight ? {
												borderColor: "#ddd",
												color: "#000",
												background: "transparent"
											} : {
												borderColor: "rgba(255,255,255,0.2)",
												color: "var(--zy-white)",
												background: "transparent"
											}),
											children: "Discuss Requirements"
										})
									]
								})]
							})]
						}, i))
					})
				]
			}),
			/* @__PURE__ */ jsx("style", { children: `
                @keyframes spinGradientCentered { 0% { transform: translate(-50%, -50%) rotate(0deg); } 100% { transform: translate(-50%, -50%) rotate(360deg); } }
                .pricing-card-wrapper:hover {
                    transform: scale(1.02) !important;
                }
                .pricing-card-wrapper[style*="scale(1.05)"]:hover {
                    transform: scale(1.07) !important;
                }
                @media (max-width: 900px) {
                    .pricing-card-wrapper[style*="scale(1.05)"] {
                        transform: scale(1) !important;
                    }
                    .pricing-card-wrapper[style*="scale(1.05)"]:hover {
                        transform: scale(1.02) !important;
                    }
                }
            ` })
		]
	});
}
//#endregion
//#region resources/js/components/sections/PostLaunchSupport.tsx
var IconMap = {
	robot: Bot,
	brain: Brain,
	clock: Clock,
	search: Search,
	"dollar-sign": DollarSign,
	shield: Shield,
	smartphone: Smartphone,
	layers: Layers,
	"wifi-off": WifiOff,
	fingerprint: Fingerprint,
	bell: Bell,
	link: Link$1,
	target: Target,
	"trending-up": TrendingUp,
	"pie-chart": PieChart,
	globe: Globe,
	split: Split,
	repeat: Repeat,
	activity: Activity,
	cpu: Cpu,
	wifi: Wifi,
	battery: Battery,
	"share-2": Share2,
	"hard-drive": HardDrive,
	box: Box,
	maximize: Maximize,
	users: Users,
	"git-commit": GitCommit,
	database: Database,
	zap: Zap,
	monitor: Monitor,
	edit: Edit,
	eye: Eye,
	server: Server
};
function PostLaunchSupport({ service }) {
	const { theme } = useTheme();
	const isLight = theme === "light";
	const config = getServiceConfig(service?.slug);
	const themeColor = config.themeColor;
	const supportFeatures = config.support;
	return /* @__PURE__ */ jsxs("section", {
		className: "zy-section",
		style: { background: isLight ? "#FFFFFF" : "var(--zy-black)" },
		children: [/* @__PURE__ */ jsxs("div", {
			style: {
				maxWidth: 1200,
				margin: "0 auto",
				textAlign: "center"
			},
			children: [
				/* @__PURE__ */ jsx("span", {
					className: "zy-section-label",
					style: {
						color: themeColor,
						opacity: 1
					},
					children: "Long-Term Partnership"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "zy-section-title",
					style: { color: isLight ? "#000" : "var(--zy-white)" },
					children: "Post-Launch Support SLAs"
				}),
				/* @__PURE__ */ jsx("p", {
					style: {
						color: isLight ? "#555" : "var(--zy-gray-text)",
						fontSize: 18,
						maxWidth: 700,
						margin: "0 auto 64px",
						lineHeight: 1.6
					},
					children: "Our relationship doesn't end at deployment. We provide enterprise-grade support to ensure your product remains secure, fast, and scalable."
				}),
				/* @__PURE__ */ jsx("div", {
					style: {
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
						gap: 32
					},
					children: supportFeatures.map((feature, i) => {
						const Icon = IconMap[feature.icon] || Zap;
						const colors = [
							themeColor,
							"#3b82f6",
							"#10b981",
							"#f59e0b",
							"#ec4899"
						];
						const featureColor = colors[i % colors.length];
						return /* @__PURE__ */ jsx("div", {
							className: "support-card-wrapper",
							style: { transition: "transform 0.3s" },
							children: /* @__PURE__ */ jsx(GradientCard, {
								themeColor: featureColor,
								style: {
									height: "100%",
									background: isLight ? "#fdfdfd" : "var(--zy-gray-card)",
									boxShadow: isLight ? "0 10px 30px rgba(0,0,0,0.03)" : "0 10px 30px rgba(0,0,0,0.3)"
								},
								children: /* @__PURE__ */ jsxs("div", {
									style: {
										padding: "40px 32px",
										height: "100%",
										display: "flex",
										flexDirection: "column",
										alignItems: "center"
									},
									children: [
										/* @__PURE__ */ jsx("div", {
											style: {
												width: 72,
												height: 72,
												borderRadius: "50%",
												background: `color-mix(in srgb, ${featureColor} 15%, transparent)`,
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												color: featureColor,
												marginBottom: 24,
												border: `1px solid ${featureColor}40`,
												boxShadow: `0 0 20px color-mix(in srgb, ${featureColor} 20%, transparent)`
											},
											children: /* @__PURE__ */ jsx(Icon, {
												size: 28,
												strokeWidth: 2
											})
										}),
										/* @__PURE__ */ jsx("h3", {
											style: {
												fontSize: 22,
												color: isLight ? "#000" : "var(--zy-white)",
												fontWeight: 800,
												marginBottom: 16,
												fontFamily: "var(--font-heading)"
											},
											children: feature.title
										}),
										/* @__PURE__ */ jsx("p", {
											style: {
												color: isLight ? "#666" : "var(--zy-gray-text)",
												fontSize: 15,
												lineHeight: 1.6,
												margin: 0
											},
											children: feature.desc
										})
									]
								})
							})
						}, i);
					})
				})
			]
		}), /* @__PURE__ */ jsx("style", { children: `
                .support-card-wrapper:hover {
                    transform: translateY(-8px);
                }
            ` })]
	});
}
//#endregion
//#region resources/js/components/sections/BlogPreviewSection.tsx
function BlogPreviewSection({ service }) {
	const dummyBlogs = [
		{
			title: service?.slug === "seo-digital-marketing" ? "Top 10 SEO Strategies for 2026" : `The Future of ${service?.title || "Tech"}`,
			excerpt: `Discover the latest trends and architectural patterns shaping the future of ${service?.title || "the industry"}.`,
			date: "July 2, 2026",
			image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=800&q=80"
		},
		{
			title: `Why Enterprise ${service?.title || "Solutions"} are Critical`,
			excerpt: "Scaling your business requires robust infrastructure and a dedicated technical approach.",
			date: "June 28, 2026",
			image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
		},
		{
			title: "Maximizing ROI with Zytrixon Tech",
			excerpt: "Learn how our clients achieve 10x ROI within the first year of partnership.",
			date: "June 15, 2026",
			image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
		}
	];
	return /* @__PURE__ */ jsx("section", {
		className: "zy-section",
		style: {
			background: "var(--zy-black)",
			borderTop: "1px solid rgba(255,255,255,0.05)"
		},
		children: /* @__PURE__ */ jsxs("div", {
			style: {
				maxWidth: 1200,
				margin: "0 auto"
			},
			children: [/* @__PURE__ */ jsxs("div", {
				style: {
					textAlign: "center",
					marginBottom: 60
				},
				children: [/* @__PURE__ */ jsx("span", {
					className: "zy-section-label",
					children: "LATEST INSIGHTS"
				}), /* @__PURE__ */ jsx("h2", {
					className: "zy-section-title",
					children: "Industry News & Blogs"
				})]
			}), /* @__PURE__ */ jsx("div", {
				style: {
					display: "grid",
					gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
					gap: 32
				},
				children: dummyBlogs.map((blog, i) => /* @__PURE__ */ jsxs(GradientCard, {
					style: {
						textAlign: "left",
						height: "100%"
					},
					children: [/* @__PURE__ */ jsx("div", {
						style: {
							height: 200,
							overflow: "hidden"
						},
						children: /* @__PURE__ */ jsx("img", {
							src: blog.image,
							alt: blog.title,
							loading: "lazy",
							decoding: "async",
							style: {
								width: "100%",
								height: "100%",
								objectFit: "cover",
								opacity: .8
							}
						})
					}), /* @__PURE__ */ jsxs("div", {
						style: { padding: "24px 32px 32px" },
						children: [
							/* @__PURE__ */ jsx("div", {
								style: {
									color: "var(--zy-blue)",
									fontSize: 13,
									fontWeight: 700,
									marginBottom: 12
								},
								children: blog.date
							}),
							/* @__PURE__ */ jsx("h3", {
								style: {
									fontSize: 20,
									color: "var(--zy-white)",
									fontWeight: 700,
									fontFamily: "var(--font-heading)",
									marginBottom: 12,
									lineHeight: 1.3
								},
								children: blog.title
							}),
							/* @__PURE__ */ jsx("p", {
								style: {
									color: "var(--zy-gray-text)",
									fontSize: 14,
									lineHeight: 1.6,
									marginBottom: 24
								},
								children: blog.excerpt
							}),
							/* @__PURE__ */ jsxs(Link, {
								href: "#",
								"aria-label": `Read article: ${blog.title}`,
								style: {
									color: "var(--zy-white)",
									fontWeight: 700,
									fontSize: 14,
									textDecoration: "none",
									display: "inline-flex",
									alignItems: "center",
									gap: 8
								},
								children: [
									"Read Article",
									" ",
									/* @__PURE__ */ jsx("svg", {
										width: "16",
										height: "16",
										viewBox: "0 0 24 24",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "2",
										children: /* @__PURE__ */ jsx("path", { d: "M5 12h14M12 5l7 7-7 7" })
									})
								]
							})
						]
					})]
				}, i))
			})]
		})
	});
}
//#endregion
//#region resources/js/pages/ServiceSeoPage.tsx
function ServiceSeoPage({ service, location, seo, content_overrides, caseStudies }) {
	const isSEO = service?.slug === "seo-digital-marketing";
	const isApp = service?.slug === "app-development";
	return /* @__PURE__ */ jsxs(ThemeProvider, { children: [
		/* @__PURE__ */ jsx(SeoHead, {
			seo,
			service,
			location
		}),
		/* @__PURE__ */ jsx(CustomCursor, {}),
		/* @__PURE__ */ jsx(Navbar, {}),
		/* @__PURE__ */ jsxs("main", {
			style: {
				paddingTop: "0px",
				background: "var(--zy-black)"
			},
			children: [
				/* @__PURE__ */ jsx(HeroDynamic, {
					service,
					location,
					h1: seo.h1,
					contentOverrides: content_overrides
				}),
				isSEO ? /* @__PURE__ */ jsxs(Fragment$1, { children: [
					/* @__PURE__ */ jsx(ServiceStats, {
						service,
						location,
						contentOverrides: content_overrides
					}),
					/* @__PURE__ */ jsx(ValueProposition, {
						service,
						location,
						contentOverrides: content_overrides
					}),
					/* @__PURE__ */ jsx(CaseStudiesList, {
						service,
						caseStudies
					}),
					/* @__PURE__ */ jsx(IndustryUseCases, { service }),
					/* @__PURE__ */ jsx(TechStackSection, {})
				] }) : isApp ? /* @__PURE__ */ jsxs(Fragment$1, { children: [
					/* @__PURE__ */ jsx(TechStackSection, {}),
					/* @__PURE__ */ jsx(ValueProposition, {
						service,
						location,
						contentOverrides: content_overrides
					}),
					/* @__PURE__ */ jsx(ServiceStats, {
						service,
						location,
						contentOverrides: content_overrides
					}),
					/* @__PURE__ */ jsx(CaseStudiesList, {
						service,
						caseStudies
					})
				] }) : /* @__PURE__ */ jsxs(Fragment$1, { children: [
					/* @__PURE__ */ jsx(ServicePlayground, { serviceSlug: service?.slug }),
					/* @__PURE__ */ jsx(ValueProposition, {
						service,
						location,
						contentOverrides: content_overrides
					}),
					/* @__PURE__ */ jsx(ServiceStats, {
						service,
						location,
						contentOverrides: content_overrides
					}),
					/* @__PURE__ */ jsx(TechnicalArchitecture, { service }),
					/* @__PURE__ */ jsx(TechStackSection, {}),
					/* @__PURE__ */ jsx(CaseStudiesList, {
						service,
						caseStudies
					})
				] }),
				/* @__PURE__ */ jsx(DevelopmentMethodology, { service }),
				/* @__PURE__ */ jsx(ProcessTimeline, { service }),
				/* @__PURE__ */ jsx(QAAndTesting, { service }),
				/* @__PURE__ */ jsx(SecurityStandards, { service }),
				/* @__PURE__ */ jsx(IntegrationCapabilities, { service }),
				/* @__PURE__ */ jsx(MigrationStrategy, { service }),
				/* @__PURE__ */ jsx(LearningExperience, { service }),
				/* @__PURE__ */ jsx(ServiceEstimator, { service }),
				/* @__PURE__ */ jsx(TestimonialsSection, {}),
				/* @__PURE__ */ jsx(GlobalFootprint, {}),
				/* @__PURE__ */ jsx(CoreValuesSection, {}),
				/* @__PURE__ */ jsx(PricingMatrix, { service }),
				/* @__PURE__ */ jsx(PostLaunchSupport, { service }),
				/* @__PURE__ */ jsx(FaqAccordion, {
					service,
					location
				}),
				/* @__PURE__ */ jsx(BlogPreviewSection, { service }),
				/* @__PURE__ */ jsx(FooterCTA, {}),
				/* @__PURE__ */ jsx(ContactSection, {})
			]
		}),
		/* @__PURE__ */ jsx(Footer, {})
	] });
}
//#endregion
export { ServiceSeoPage as default };

//# sourceMappingURL=ServiceSeoPage-BQNkypvb.js.map