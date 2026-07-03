import { a as useTheme, i as ThemeProvider, n as CustomCursor, t as Navbar } from "./navbar-C4sR4eBL.js";
import ContactSection from "./contact-section-BGP7rtke.js";
import CoreValuesSection from "./core-values-section-D3Bl0-UD.js";
import FooterCTA from "./footer-cta-DYRRvpzz.js";
import Footer from "./footer-Cf05z8zj.js";
import GlobalFootprint from "./global-footprint-EgwkSCQR.js";
import TechStackSection from "./tech-stack-section-CGQ9Cs_-.js";
import TestimonialsSection from "./testimonials-section-CV82NHtu.js";
import { t as SeoHead } from "./SeoHead-Bv-bTrU-.js";
import { i as DevelopmentMethodology, n as QAAndTesting, r as ProcessTimeline, t as SecurityStandards } from "./SecurityStandards-D-aFWj4q.js";
import { useEffect, useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/components/sections/HeroDynamic.tsx
function HeroDynamic({ service, location, h1 }) {
	const { theme } = useTheme();
	return /* @__PURE__ */ jsxs("section", {
		style: {
			padding: "120px 24px 80px",
			background: "var(--zy-black)",
			borderBottom: "1px solid rgba(255,255,255,0.05)",
			textAlign: "center",
			position: "relative",
			overflow: "hidden"
		},
		children: [/* @__PURE__ */ jsx("div", { style: {
			position: "absolute",
			top: -100,
			left: "50%",
			transform: "translateX(-50%)",
			width: 600,
			height: 600,
			background: "var(--zy-blue)",
			filter: "blur(150px)",
			opacity: .15,
			zIndex: 0
		} }), /* @__PURE__ */ jsxs("div", {
			style: {
				maxWidth: 1e3,
				margin: "0 auto",
				position: "relative",
				zIndex: 1
			},
			children: [
				/* @__PURE__ */ jsxs("div", {
					style: {
						display: "flex",
						justifyContent: "center",
						gap: 12,
						marginBottom: 24
					},
					children: [/* @__PURE__ */ jsx("span", {
						style: {
							padding: "6px 16px",
							background: "rgba(99, 102, 241, 0.1)",
							color: "#6366f1",
							borderRadius: 50,
							fontSize: 13,
							fontWeight: 700,
							letterSpacing: "0.05em"
						},
						children: "ENTERPRISE GRADE"
					}), location && /* @__PURE__ */ jsxs("span", {
						style: {
							padding: "6px 16px",
							background: "rgba(34, 197, 94, 0.1)",
							color: "#22c55e",
							borderRadius: 50,
							fontSize: 13,
							fontWeight: 700,
							letterSpacing: "0.05em"
						},
						children: ["AVAILABLE IN ", location.name.toUpperCase()]
					})]
				}),
				/* @__PURE__ */ jsx("h1", {
					style: {
						fontSize: "clamp(40px, 6vw, 72px)",
						fontWeight: 800,
						color: "var(--zy-white)",
						lineHeight: 1.1,
						marginBottom: 24,
						fontFamily: "var(--font-heading)"
					},
					children: h1
				}),
				/* @__PURE__ */ jsxs("p", {
					style: {
						fontSize: "clamp(18px, 2vw, 24px)",
						color: "var(--zy-gray-text)",
						maxWidth: 800,
						margin: "0 auto 40px"
					},
					children: [service.description, " We build high-performance systems designed to scale and dominate the market."]
				}),
				/* @__PURE__ */ jsxs("div", {
					style: {
						display: "flex",
						gap: 16,
						justifyContent: "center"
					},
					children: [/* @__PURE__ */ jsx("button", {
						className: "zy-btn-primary",
						children: "Start a Project"
					}), /* @__PURE__ */ jsx("button", {
						className: "zy-btn-outline",
						style: {
							borderColor: "rgba(255,255,255,0.2)",
							color: "var(--zy-white)"
						},
						children: "View Case Studies"
					})]
				})
			]
		})]
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
							children: "  return"
						}),
						" (\\n",
						/* @__PURE__ */ jsx("span", {
							style: { color: "#808080" },
							children: "    // Real-time preview rendering"
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
function ServiceStats({ location }) {
	const { theme } = useTheme();
	return /* @__PURE__ */ jsx("section", {
		className: "zy-section",
		style: {
			background: "var(--zy-black)",
			borderBottom: "1px solid rgba(255,255,255,0.05)"
		},
		children: /* @__PURE__ */ jsxs("div", {
			style: {
				maxWidth: 1200,
				margin: "0 auto",
				display: "grid",
				gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
				gap: 24,
				textAlign: "center"
			},
			children: [
				/* @__PURE__ */ jsxs("div", {
					style: {
						padding: 40,
						background: "var(--zy-gray-card)",
						borderRadius: 12,
						border: "1px solid rgba(255,255,255,0.05)"
					},
					children: [/* @__PURE__ */ jsx("h3", {
						style: {
							fontSize: 48,
							fontWeight: 900,
							color: "var(--zy-blue)",
							marginBottom: 8,
							fontFamily: "var(--font-heading)"
						},
						children: "99.9%"
					}), /* @__PURE__ */ jsx("p", {
						style: {
							color: "var(--zy-gray-text)",
							fontSize: 14,
							letterSpacing: "0.05em",
							textTransform: "uppercase",
							fontWeight: 600
						},
						children: "Uptime Guarantee"
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					style: {
						padding: 40,
						background: "var(--zy-gray-card)",
						borderRadius: 12,
						border: "1px solid rgba(255,255,255,0.05)"
					},
					children: [/* @__PURE__ */ jsx("h3", {
						style: {
							fontSize: 48,
							fontWeight: 900,
							color: "var(--zy-blue)",
							marginBottom: 8,
							fontFamily: "var(--font-heading)"
						},
						children: "250+"
					}), /* @__PURE__ */ jsx("p", {
						style: {
							color: "var(--zy-gray-text)",
							fontSize: 14,
							letterSpacing: "0.05em",
							textTransform: "uppercase",
							fontWeight: 600
						},
						children: "Projects Delivered"
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					style: {
						padding: 40,
						background: "var(--zy-gray-card)",
						borderRadius: 12,
						border: "1px solid rgba(255,255,255,0.05)"
					},
					children: [/* @__PURE__ */ jsx("h3", {
						style: {
							fontSize: 48,
							fontWeight: 900,
							color: "var(--zy-blue)",
							marginBottom: 8,
							fontFamily: "var(--font-heading)"
						},
						children: "24/7"
					}), /* @__PURE__ */ jsx("p", {
						style: {
							color: "var(--zy-gray-text)",
							fontSize: 14,
							letterSpacing: "0.05em",
							textTransform: "uppercase",
							fontWeight: 600
						},
						children: location ? `Local Support in ${location.name}` : "Global Support"
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					style: {
						padding: 40,
						background: "var(--zy-gray-card)",
						borderRadius: 12,
						border: "1px solid rgba(255,255,255,0.05)"
					},
					children: [/* @__PURE__ */ jsx("h3", {
						style: {
							fontSize: 48,
							fontWeight: 900,
							color: "var(--zy-blue)",
							marginBottom: 8,
							fontFamily: "var(--font-heading)"
						},
						children: "0"
					}), /* @__PURE__ */ jsx("p", {
						style: {
							color: "var(--zy-gray-text)",
							fontSize: 14,
							letterSpacing: "0.05em",
							textTransform: "uppercase",
							fontWeight: 600
						},
						children: "Hidden Fees"
					})]
				})
			]
		})
	});
}
//#endregion
//#region resources/js/components/sections/ValueProposition.tsx
function ValueProposition({ service, location }) {
	const { theme } = useTheme();
	const isLight = theme === "light";
	return /* @__PURE__ */ jsxs("section", {
		className: "zy-section",
		style: { background: "var(--zy-black)" },
		children: [/* @__PURE__ */ jsxs("div", {
			style: {
				maxWidth: 1200,
				margin: "0 auto",
				textAlign: "center"
			},
			children: [
				/* @__PURE__ */ jsx("span", {
					className: "zy-section-label",
					children: "WHY CHOOSE US"
				}),
				/* @__PURE__ */ jsxs("h2", {
					className: "zy-section-title",
					children: ["Unmatched Quality in ", service.title]
				}),
				/* @__PURE__ */ jsx("div", {
					style: {
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
						gap: 32
					},
					children: [
						{
							title: "Scalable Architecture",
							desc: "Built to handle millions of users effortlessly."
						},
						{
							title: "Security First",
							desc: "Bank-grade security protocols implemented from day one."
						},
						{
							title: "Lightning Fast",
							desc: "Optimized for speed, scoring 99+ on Google Lighthouse."
						},
						{
							title: "AI-Powered",
							desc: "Leveraging the latest AI to streamline processes."
						},
						{
							title: "Dedicated Support",
							desc: "A dedicated account manager for your project."
						},
						{
							title: "Transparent Pricing",
							desc: "No hidden fees. You get exactly what you pay for."
						}
					].map((feature, i) => /* @__PURE__ */ jsxs("div", {
						style: {
							position: "relative",
							borderRadius: 8,
							overflow: "hidden",
							padding: 1,
							display: "flex",
							flexDirection: "column",
							textAlign: "left"
						},
						children: [/* @__PURE__ */ jsx("div", { style: {
							position: "absolute",
							top: "50%",
							left: "50%",
							width: "250%",
							height: "250%",
							background: isLight ? "conic-gradient(from 0deg, transparent 75%, rgba(0,0,0,0.4) 95%, #000000 100%)" : "conic-gradient(from 0deg, transparent 75%, rgba(255,255,255,0.4) 95%, #ffffff 100%)",
							animation: "spinGradientCentered 4s linear infinite",
							zIndex: 0,
							opacity: .4
						} }), /* @__PURE__ */ jsxs("div", {
							style: {
								position: "relative",
								background: "var(--zy-gray-card)",
								padding: "32px",
								borderRadius: 7,
								zIndex: 1,
								height: "100%"
							},
							children: [
								/* @__PURE__ */ jsx("div", {
									style: {
										color: "var(--zy-white)",
										marginBottom: 24,
										opacity: .7
									},
									children: /* @__PURE__ */ jsxs("svg", {
										width: "24",
										height: "24",
										viewBox: "0 0 24 24",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "2",
										children: [/* @__PURE__ */ jsx("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }), /* @__PURE__ */ jsx("polyline", { points: "22 4 12 14.01 9 11.01" })]
									})
								}),
								/* @__PURE__ */ jsx("h3", {
									style: {
										fontFamily: "var(--font-heading)",
										color: "var(--zy-white)",
										fontSize: 20,
										fontWeight: 700,
										marginBottom: 12
									},
									children: feature.title
								}),
								/* @__PURE__ */ jsx("p", {
									style: {
										color: "var(--zy-gray-text)",
										fontSize: 13,
										lineHeight: 1.6
									},
									children: feature.desc
								})
							]
						})]
					}, i))
				})
			]
		}), /* @__PURE__ */ jsx("style", { children: `
                @keyframes spinGradientCentered { 0% { transform: translate(-50%, -50%) rotate(0deg); } 100% { transform: translate(-50%, -50%) rotate(360deg); } }
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
								" meeting the strict compliance and high-performance demands of the ",
								industry,
								" sector."
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
function TechnicalArchitecture({ service }) {
	return /* @__PURE__ */ jsx("section", {
		className: "zy-section",
		style: {
			background: "var(--zy-black)",
			borderTop: "1px solid rgba(255,255,255,0.05)"
		},
		children: /* @__PURE__ */ jsxs("div", {
			style: {
				maxWidth: 1e3,
				margin: "0 auto",
				textAlign: "center"
			},
			children: [
				/* @__PURE__ */ jsx("span", {
					className: "zy-section-label",
					children: "Infrastructure"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "zy-section-title",
					children: "Technical Architecture Flow"
				}),
				/* @__PURE__ */ jsx("p", {
					style: {
						color: "var(--zy-gray-text)",
						marginBottom: 60
					},
					children: "Our cloud-native approach ensures infinite scalability and absolute resilience."
				}),
				/* @__PURE__ */ jsx("div", {
					style: {
						padding: 60,
						background: "var(--zy-gray-card)",
						borderRadius: 12,
						border: "1px solid rgba(255,255,255,0.05)"
					},
					children: /* @__PURE__ */ jsx("div", {
						style: {
							display: "flex",
							justifyContent: "center",
							gap: 24,
							flexWrap: "wrap"
						},
						children: [
							"Client Tier",
							"API Gateway",
							"Microservices",
							"Data Layer"
						].map((tier, i) => /* @__PURE__ */ jsx("div", {
							style: {
								padding: "20px 40px",
								background: "var(--zy-gray-dark)",
								borderRadius: 8,
								border: "1px solid var(--zy-blue)",
								color: "var(--zy-white)",
								fontWeight: 600
							},
							children: tier
						}, i))
					})
				})
			]
		})
	});
}
//#endregion
//#region resources/js/components/sections/IntegrationCapabilities.tsx
function IntegrationCapabilities({ service }) {
	return /* @__PURE__ */ jsx("section", {
		className: "zy-section",
		style: { background: "var(--zy-black)" },
		children: /* @__PURE__ */ jsxs("div", {
			style: {
				maxWidth: 1200,
				margin: "0 auto",
				textAlign: "center"
			},
			children: [
				/* @__PURE__ */ jsx("span", {
					className: "zy-section-label",
					children: "Connected Ecosystem"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "zy-section-title",
					children: "Integration Capabilities"
				}),
				/* @__PURE__ */ jsxs("p", {
					style: {
						color: "var(--zy-gray-text)",
						marginBottom: 60,
						maxWidth: 600,
						margin: "0 auto 60px"
					},
					children: [
						"We seamlessly connect your new ",
						service?.title || "system",
						" with your existing enterprise tools."
					]
				}),
				/* @__PURE__ */ jsx("div", {
					style: {
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
						gap: 24
					},
					children: [
						"Salesforce",
						"SAP",
						"Stripe / PayPal",
						"AWS Services",
						"Twilio",
						"HubSpot"
					].map((tool, i) => /* @__PURE__ */ jsx("div", {
						style: {
							padding: 24,
							background: "var(--zy-gray-card)",
							borderRadius: 12,
							border: "1px solid rgba(255,255,255,0.05)",
							color: "var(--zy-white)",
							fontWeight: 700
						},
						children: tool
					}, i))
				})
			]
		})
	});
}
//#endregion
//#region resources/js/components/sections/MigrationStrategy.tsx
function MigrationStrategy({ service }) {
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
				children: [/* @__PURE__ */ jsx("span", {
					className: "zy-section-label",
					children: "Zero Downtime"
				}), /* @__PURE__ */ jsx("h2", {
					className: "zy-section-title",
					children: "Legacy Migration Strategy"
				})]
			}), /* @__PURE__ */ jsxs("div", {
				style: {
					background: "var(--zy-gray-card)",
					padding: 40,
					borderRadius: 12,
					border: "1px solid rgba(255,255,255,0.05)"
				},
				children: [
					/* @__PURE__ */ jsx("p", {
						style: {
							color: "var(--zy-gray-text)",
							lineHeight: 1.6,
							marginBottom: 32
						},
						children: "Moving from an old system? Our zero-downtime migration protocols ensure your business operations never stop while we upgrade your technology."
					}),
					/* @__PURE__ */ jsxs("div", {
						style: {
							display: "flex",
							gap: 16,
							alignItems: "center",
							color: "var(--zy-white)",
							fontWeight: 600
						},
						children: [/* @__PURE__ */ jsx("div", {
							style: {
								width: 40,
								height: 40,
								borderRadius: "50%",
								background: "var(--zy-blue)",
								display: "flex",
								alignItems: "center",
								justifyContent: "center"
							},
							children: "1"
						}), "Data Mapping & Backup"]
					}),
					/* @__PURE__ */ jsx("div", { style: {
						width: 2,
						height: 24,
						background: "rgba(255,255,255,0.1)",
						marginLeft: 19,
						margin: "8px 0"
					} }),
					/* @__PURE__ */ jsxs("div", {
						style: {
							display: "flex",
							gap: 16,
							alignItems: "center",
							color: "var(--zy-white)",
							fontWeight: 600
						},
						children: [/* @__PURE__ */ jsx("div", {
							style: {
								width: 40,
								height: 40,
								borderRadius: "50%",
								background: "var(--zy-blue)",
								display: "flex",
								alignItems: "center",
								justifyContent: "center"
							},
							children: "2"
						}), "Parallel Run Testing"]
					}),
					/* @__PURE__ */ jsx("div", { style: {
						width: 2,
						height: 24,
						background: "rgba(255,255,255,0.1)",
						marginLeft: 19,
						margin: "8px 0"
					} }),
					/* @__PURE__ */ jsxs("div", {
						style: {
							display: "flex",
							gap: 16,
							alignItems: "center",
							color: "var(--zy-white)",
							fontWeight: 600
						},
						children: [/* @__PURE__ */ jsx("div", {
							style: {
								width: 40,
								height: 40,
								borderRadius: "50%",
								background: "#22c55e",
								display: "flex",
								alignItems: "center",
								justifyContent: "center"
							},
							children: "3"
						}), "Seamless Switchover"]
					})
				]
			})]
		})
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
					/* @__PURE__ */ jsxs("div", {
						style: {
							padding: 32,
							background: "var(--zy-gray-card)",
							borderRadius: 12,
							borderLeft: "4px solid var(--zy-blue)",
							borderTop: "1px solid rgba(255,255,255,0.05)",
							borderRight: "1px solid rgba(255,255,255,0.05)",
							borderBottom: "1px solid rgba(255,255,255,0.05)"
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
					}),
					/* @__PURE__ */ jsxs("div", {
						style: {
							padding: 32,
							background: "var(--zy-gray-card)",
							borderRadius: 12,
							borderLeft: "4px solid #22c55e",
							borderTop: "1px solid rgba(255,255,255,0.05)",
							borderRight: "1px solid rgba(255,255,255,0.05)",
							borderBottom: "1px solid rgba(255,255,255,0.05)"
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
					}),
					/* @__PURE__ */ jsxs("div", {
						style: {
							padding: 32,
							background: "var(--zy-gray-card)",
							borderRadius: 12,
							borderLeft: "4px solid #eab308",
							borderTop: "1px solid rgba(255,255,255,0.05)",
							borderRight: "1px solid rgba(255,255,255,0.05)",
							borderBottom: "1px solid rgba(255,255,255,0.05)"
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
		let base = service?.slug === "ai-automation" ? 1e4 : 5e3;
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
			background: "var(--zy-black)",
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
					children: "Transparent Pricing"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "zy-section-title",
					children: "Interactive Project Estimator"
				}),
				/* @__PURE__ */ jsxs("p", {
					style: {
						color: "var(--zy-gray-text)",
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
						boxShadow: isLight ? "0 20px 40px rgba(0,0,0,0.05)" : "0 20px 40px rgba(0,0,0,0.4)"
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
							background: "var(--zy-gray-dark)",
							padding: "40px",
							zIndex: 1,
							textAlign: "left"
						},
						children: /* @__PURE__ */ jsxs("div", {
							style: {
								display: "grid",
								gridTemplateColumns: "1fr 1fr",
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
											color: "var(--zy-white)",
											fontWeight: 600,
											marginBottom: 12
										},
										children: "Project Scope"
									}), /* @__PURE__ */ jsxs("select", {
										value: projectSize,
										onChange: (e) => setProjectSize(e.target.value),
										style: {
											width: "100%",
											padding: "12px 16px",
											borderRadius: 8,
											background: "var(--zy-black)",
											border: "1px solid rgba(255, 255, 255, 0.1)",
											color: "var(--zy-white)",
											outline: "none"
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
											color: "var(--zy-white)",
											fontWeight: 600,
											marginBottom: 12
										},
										children: "Technical Complexity"
									}), /* @__PURE__ */ jsxs("select", {
										value: complexity,
										onChange: (e) => setComplexity(e.target.value),
										style: {
											width: "100%",
											padding: "12px 16px",
											borderRadius: 8,
											background: "var(--zy-black)",
											border: "1px solid rgba(255, 255, 255, 0.1)",
											color: "var(--zy-white)",
											outline: "none"
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
											color: "var(--zy-white)",
											fontWeight: 600,
											marginBottom: 12
										},
										children: "Timeline Required"
									}), /* @__PURE__ */ jsxs("select", {
										value: timeline,
										onChange: (e) => setTimeline(e.target.value),
										style: {
											width: "100%",
											padding: "12px 16px",
											borderRadius: 8,
											background: "var(--zy-black)",
											border: "1px solid rgba(255, 255, 255, 0.1)",
											color: "var(--zy-white)",
											outline: "none"
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
									background: "var(--zy-black)",
									borderRadius: 16,
									padding: 32,
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
									border: "1px solid rgba(99, 102, 241, 0.2)"
								},
								children: [
									/* @__PURE__ */ jsx("div", {
										style: {
											color: "var(--zy-gray-text)",
											fontSize: 14,
											textTransform: "uppercase",
											letterSpacing: "0.1em",
											fontWeight: 700,
											marginBottom: 16
										},
										children: "Estimated Budget"
									}),
									/* @__PURE__ */ jsx("div", {
										style: {
											fontSize: "clamp(28px, 3vw, 40px)",
											fontWeight: 900,
											color: "var(--zy-blue)",
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
											fontSize: 16
										},
										children: "Lock This Estimate"
									}),
									/* @__PURE__ */ jsx("p", {
										style: {
											color: "var(--zy-gray-text)",
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
//#region resources/js/components/sections/CaseStudiesList.tsx
function CaseStudiesList({ service }) {
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
					marginBottom: 60
				},
				children: [/* @__PURE__ */ jsx("span", {
					className: "zy-section-label",
					children: "Proven Results"
				}), /* @__PURE__ */ jsx("h2", {
					className: "zy-section-title",
					children: "Case Studies & Success Stories"
				})]
			}), /* @__PURE__ */ jsx("div", {
				style: {
					display: "grid",
					gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
					gap: 32
				},
				children: [1, 2].map((item) => /* @__PURE__ */ jsxs("div", {
					style: {
						background: "var(--zy-gray-card)",
						borderRadius: 12,
						overflow: "hidden",
						border: "1px solid rgba(255,255,255,0.05)"
					},
					children: [/* @__PURE__ */ jsx("div", { style: {
						height: 200,
						background: "var(--zy-gray-dark)"
					} }), /* @__PURE__ */ jsxs("div", {
						style: { padding: 32 },
						children: [
							/* @__PURE__ */ jsx("div", {
								style: {
									color: "var(--zy-blue)",
									fontSize: 14,
									fontWeight: 700,
									marginBottom: 8,
									letterSpacing: "0.05em"
								},
								children: "ENTERPRISE CLIENT"
							}),
							/* @__PURE__ */ jsxs("h3", {
								style: {
									fontSize: 24,
									fontWeight: 700,
									color: "var(--zy-white)",
									marginBottom: 16,
									fontFamily: "var(--font-heading)"
								},
								children: [service?.title || "Project", " Scaling"]
							}),
							/* @__PURE__ */ jsx("p", {
								style: {
									color: "var(--zy-gray-text)",
									lineHeight: 1.6
								},
								children: "How we helped a Fortune 500 company scale their infrastructure to support 10x traffic growth without downtime."
							})
						]
					})]
				}, item))
			})]
		})
	});
}
//#endregion
//#region resources/js/components/sections/ExpertTeamProfile.tsx
function ExpertTeamProfile({ service }) {
	return /* @__PURE__ */ jsx("section", {
		className: "zy-section",
		style: { background: "var(--zy-black)" },
		children: /* @__PURE__ */ jsxs("div", {
			style: {
				maxWidth: 1200,
				margin: "0 auto",
				textAlign: "center"
			},
			children: [
				/* @__PURE__ */ jsx("span", {
					className: "zy-section-label",
					children: "Your Dedicated Team"
				}),
				/* @__PURE__ */ jsxs("h2", {
					className: "zy-section-title",
					children: ["The Brains Behind Your ", service?.title || "Project"]
				}),
				/* @__PURE__ */ jsx("div", {
					style: {
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
						gap: 32,
						marginTop: 60
					},
					children: [
						"Lead Architect",
						"Senior Developer",
						"QA Engineer",
						"Project Manager"
					].map((role, i) => /* @__PURE__ */ jsxs("div", {
						style: {
							background: "var(--zy-gray-card)",
							padding: 40,
							borderRadius: 12,
							border: "1px solid rgba(255,255,255,0.05)"
						},
						children: [
							/* @__PURE__ */ jsx("div", { style: {
								width: 80,
								height: 80,
								borderRadius: "50%",
								background: "var(--zy-gray-dark)",
								margin: "0 auto 24px"
							} }),
							/* @__PURE__ */ jsx("h3", {
								style: {
									fontSize: 20,
									color: "var(--zy-white)",
									fontWeight: 700,
									fontFamily: "var(--font-heading)"
								},
								children: "Expert Engineer"
							}),
							/* @__PURE__ */ jsx("p", {
								style: {
									color: "var(--zy-blue)",
									fontSize: 14,
									fontWeight: 700,
									letterSpacing: "0.05em",
									marginTop: 8
								},
								children: role.toUpperCase()
							})
						]
					}, i))
				})
			]
		})
	});
}
//#endregion
//#region resources/js/components/sections/PricingMatrix.tsx
function PricingMatrix({ service }) {
	const { theme } = useTheme();
	return /* @__PURE__ */ jsxs("section", {
		className: "zy-section",
		style: {
			background: "var(--zy-black)",
			position: "relative"
		},
		children: [
			/* @__PURE__ */ jsx("div", { style: {
				position: "absolute",
				top: 0,
				left: "50%",
				transform: "translateX(-50%)",
				width: 800,
				height: 400,
				background: "var(--zy-blue)",
				filter: "blur(200px)",
				opacity: .1,
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
				children: [/* @__PURE__ */ jsx("h2", {
					className: "zy-section-title",
					style: { marginBottom: 60 },
					children: "Transparent Engagement Models"
				}), /* @__PURE__ */ jsx("div", {
					style: {
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
						gap: 32
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
						style: {
							position: "relative",
							borderRadius: 12,
							overflow: "hidden",
							padding: plan.highlighted ? 1 : 0,
							transform: plan.highlighted ? "scale(1.05)" : "none",
							zIndex: plan.highlighted ? 2 : 1
						},
						children: [plan.highlighted && /* @__PURE__ */ jsx("div", { style: {
							position: "absolute",
							top: "50%",
							left: "50%",
							width: "250%",
							height: "250%",
							background: "conic-gradient(from 0deg, transparent 75%, rgba(255,255,255,0.4) 95%, #ffffff 100%)",
							animation: "spinGradientCentered 4s linear infinite",
							zIndex: 0,
							opacity: .8
						} }), /* @__PURE__ */ jsxs("div", {
							style: {
								position: "relative",
								background: plan.highlighted ? "var(--zy-gray-dark)" : "var(--zy-gray-card)",
								padding: 40,
								borderRadius: 11,
								border: plan.highlighted ? "none" : "1px solid rgba(255,255,255,0.05)",
								color: "var(--zy-white)",
								zIndex: 1,
								height: "100%",
								display: "flex",
								flexDirection: "column"
							},
							children: [
								plan.highlighted && /* @__PURE__ */ jsx("div", {
									style: {
										position: "absolute",
										top: -16,
										left: "50%",
										transform: "translateX(-50%)",
										background: "var(--zy-blue)",
										color: "#fff",
										padding: "4px 16px",
										borderRadius: 50,
										fontSize: 12,
										fontWeight: 700,
										letterSpacing: "0.05em"
									},
									children: "MOST POPULAR"
								}),
								/* @__PURE__ */ jsx("h3", {
									style: {
										fontSize: 24,
										fontWeight: 700,
										marginBottom: 16,
										fontFamily: "var(--font-heading)"
									},
									children: plan.name
								}),
								/* @__PURE__ */ jsx("div", {
									style: {
										fontSize: 32,
										fontWeight: 900,
										marginBottom: 16,
										color: plan.highlighted ? "var(--zy-white)" : "var(--zy-blue)"
									},
									children: plan.price
								}),
								/* @__PURE__ */ jsx("p", {
									style: {
										color: "var(--zy-gray-text)",
										marginBottom: 32
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
										children: [/* @__PURE__ */ jsx("svg", {
											width: "20",
											height: "20",
											viewBox: "0 0 24 24",
											fill: "none",
											stroke: "var(--zy-blue)",
											strokeWidth: "3",
											children: /* @__PURE__ */ jsx("polyline", { points: "20 6 9 17 4 12" })
										}), /* @__PURE__ */ jsx("span", {
											style: { fontWeight: 600 },
											children: f
										})]
									}, j))
								}),
								/* @__PURE__ */ jsx("button", {
									className: plan.highlighted ? "zy-btn-primary" : "zy-btn-outline",
									style: {
										width: "100%",
										marginTop: "auto"
									},
									children: "Discuss Requirements"
								})
							]
						})]
					}, i))
				})]
			}),
			/* @__PURE__ */ jsx("style", { children: `
                @keyframes spinGradientCentered { 0% { transform: translate(-50%, -50%) rotate(0deg); } 100% { transform: translate(-50%, -50%) rotate(360deg); } }
            ` })
		]
	});
}
//#endregion
//#region resources/js/components/sections/PostLaunchSupport.tsx
function PostLaunchSupport({ service }) {
	return /* @__PURE__ */ jsx("section", {
		className: "zy-section",
		style: { background: "var(--zy-black)" },
		children: /* @__PURE__ */ jsxs("div", {
			style: {
				maxWidth: 1200,
				margin: "0 auto",
				textAlign: "center"
			},
			children: [
				/* @__PURE__ */ jsx("span", {
					className: "zy-section-label",
					children: "Long-Term Partnership"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "zy-section-title",
					children: "Post-Launch Support SLAs"
				}),
				/* @__PURE__ */ jsxs("div", {
					style: {
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
						gap: 32,
						marginTop: 60
					},
					children: [
						/* @__PURE__ */ jsxs("div", {
							style: {
								background: "var(--zy-gray-card)",
								padding: 40,
								borderRadius: 12,
								border: "1px solid rgba(255,255,255,0.05)"
							},
							children: [/* @__PURE__ */ jsx("h3", {
								style: {
									fontSize: 20,
									color: "var(--zy-white)",
									fontWeight: 700,
									marginBottom: 16,
									fontFamily: "var(--font-heading)"
								},
								children: "24/7 Monitoring"
							}), /* @__PURE__ */ jsx("p", {
								style: { color: "var(--zy-gray-text)" },
								children: "Automated alerts and DevOps engineers on standby ensuring 99.9% uptime."
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							style: {
								background: "var(--zy-gray-card)",
								padding: 40,
								borderRadius: 12,
								border: "1px solid rgba(255,255,255,0.05)"
							},
							children: [/* @__PURE__ */ jsx("h3", {
								style: {
									fontSize: 20,
									color: "var(--zy-white)",
									fontWeight: 700,
									marginBottom: 16,
									fontFamily: "var(--font-heading)"
								},
								children: "Continuous Updates"
							}), /* @__PURE__ */ jsx("p", {
								style: { color: "var(--zy-gray-text)" },
								children: "Regular security patches, library upgrades, and performance tuning."
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							style: {
								background: "var(--zy-gray-card)",
								padding: 40,
								borderRadius: 12,
								border: "1px solid rgba(255,255,255,0.05)"
							},
							children: [/* @__PURE__ */ jsx("h3", {
								style: {
									fontSize: 20,
									color: "var(--zy-white)",
									fontWeight: 700,
									marginBottom: 16,
									fontFamily: "var(--font-heading)"
								},
								children: "Feature Evolution"
							}), /* @__PURE__ */ jsx("p", {
								style: { color: "var(--zy-gray-text)" },
								children: "A dedicated team available to build new features as your business scales."
							})]
						})
					]
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
		"mainEntity": faqs.map((faq) => ({
			"@type": "Question",
			"name": faq.q,
			"acceptedAnswer": {
				"@type": "Answer",
				"text": faq.a
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
				children: faqs.map((faq, i) => /* @__PURE__ */ jsxs("div", {
					style: {
						background: "var(--zy-gray-card)",
						borderRadius: 12,
						border: "1px solid rgba(255,255,255,0.05)",
						overflow: "hidden"
					},
					children: [/* @__PURE__ */ jsxs("button", {
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
					})]
				}, i))
			})]
		})]
	});
}
//#endregion
//#region resources/js/pages/ServiceSeoPage.tsx
function ServiceSeoPage({ service, location, seo, content_overrides }) {
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
				paddingTop: "80px",
				background: "var(--zy-black)"
			},
			children: [
				/* @__PURE__ */ jsx(HeroDynamic, {
					service,
					location,
					h1: seo.h1
				}),
				/* @__PURE__ */ jsx(ServicePlayground, { serviceSlug: service.slug }),
				/* @__PURE__ */ jsx(ServiceStats, { location }),
				/* @__PURE__ */ jsx(ValueProposition, {
					service,
					location
				}),
				/* @__PURE__ */ jsx(IndustryUseCases, { service }),
				/* @__PURE__ */ jsx(TechnicalArchitecture, { service }),
				/* @__PURE__ */ jsx(TechStackSection, {}),
				/* @__PURE__ */ jsx(DevelopmentMethodology, { service }),
				/* @__PURE__ */ jsx(ProcessTimeline, { service }),
				/* @__PURE__ */ jsx(QAAndTesting, { service }),
				/* @__PURE__ */ jsx(SecurityStandards, { service }),
				/* @__PURE__ */ jsx(IntegrationCapabilities, { service }),
				/* @__PURE__ */ jsx(MigrationStrategy, { service }),
				/* @__PURE__ */ jsx(LearningExperience, { service }),
				/* @__PURE__ */ jsx(ServiceEstimator, { service }),
				/* @__PURE__ */ jsx(CaseStudiesList, { service }),
				/* @__PURE__ */ jsx(TestimonialsSection, {}),
				/* @__PURE__ */ jsx(ExpertTeamProfile, { service }),
				/* @__PURE__ */ jsx(GlobalFootprint, {}),
				/* @__PURE__ */ jsx(CoreValuesSection, {}),
				/* @__PURE__ */ jsx(PricingMatrix, { service }),
				/* @__PURE__ */ jsx(PostLaunchSupport, { service }),
				/* @__PURE__ */ jsx(FaqAccordion, {
					service,
					location
				}),
				/* @__PURE__ */ jsx(FooterCTA, {}),
				/* @__PURE__ */ jsx(ContactSection, {})
			]
		}),
		/* @__PURE__ */ jsx(Footer, {})
	] });
}
//#endregion
export { ServiceSeoPage as default };

//# sourceMappingURL=ServiceSeoPage-DLAlL93B.js.map