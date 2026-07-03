import { a as useTheme } from "./navbar-AKB7jtts.js";
import { useCallback, useEffect, useRef, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//#region resources/js/components/landing/playground-iot.tsx
var INITIAL_SENSORS = [
	{
		id: "temp",
		label: "Temperature",
		icon: "🌡️",
		unit: "°C",
		min: 18,
		max: 45,
		value: 27,
		active: true,
		color: "#ff6b6b"
	},
	{
		id: "humid",
		label: "Humidity",
		icon: "💧",
		unit: "%",
		min: 20,
		max: 95,
		value: 65,
		active: true,
		color: "#4ecdc4"
	},
	{
		id: "motion",
		label: "Motion",
		icon: "📡",
		unit: "",
		min: 0,
		max: 1,
		value: 1,
		active: true,
		color: "#ffe66d"
	},
	{
		id: "light",
		label: "Light",
		icon: "☀️",
		unit: "lux",
		min: 0,
		max: 1e3,
		value: 450,
		active: false,
		color: "#a8e6cf"
	},
	{
		id: "pressure",
		label: "Pressure",
		icon: "🔵",
		unit: "hPa",
		min: 980,
		max: 1040,
		value: 1013,
		active: true,
		color: "#7c5ce0"
	},
	{
		id: "gas",
		label: "Gas",
		icon: "🌫️",
		unit: "ppm",
		min: 0,
		max: 500,
		value: 42,
		active: false,
		color: "#ff8a5c"
	}
];
function PlaygroundIoT() {
	const [sensors, setSensors] = useState(INITIAL_SENSORS);
	const [logs, setLogs] = useState(["[System] IoT Dashboard initialized..."]);
	const canvasRef = useRef(null);
	useEffect(() => {
		const interval = setInterval(() => {
			setSensors((prev) => prev.map((s) => {
				if (!s.active) return s;
				const delta = (Math.random() - .5) * (s.max - s.min) * .05;
				const newVal = Math.max(s.min, Math.min(s.max, s.value + delta));
				return {
					...s,
					value: Math.round(newVal * 10) / 10
				};
			}));
		}, 800);
		return () => clearInterval(interval);
	}, []);
	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		const w = canvas.width = canvas.offsetWidth;
		const h = canvas.height = canvas.offsetHeight;
		ctx.clearRect(0, 0, w, h);
		ctx.strokeStyle = "rgba(255,255,255,0.06)";
		ctx.lineWidth = 1;
		const activeSensors = sensors.filter((s) => s.active);
		const centerX = w / 2;
		const centerY = h / 2;
		activeSensors.forEach((_, i) => {
			const angle = i / activeSensors.length * Math.PI * 2 - Math.PI / 2;
			const x = centerX + Math.cos(angle) * 60;
			const y = centerY + Math.sin(angle) * 40;
			ctx.beginPath();
			ctx.moveTo(centerX, centerY);
			ctx.lineTo(x, y);
			ctx.stroke();
			ctx.beginPath();
			ctx.arc(x, y, 3, 0, Math.PI * 2);
			ctx.fillStyle = "rgba(255,255,255,0.3)";
			ctx.fill();
		});
		ctx.beginPath();
		ctx.arc(centerX, centerY, 8, 0, Math.PI * 2);
		ctx.fillStyle = "rgba(255,255,255,0.1)";
		ctx.fill();
		ctx.strokeStyle = "rgba(255,255,255,0.2)";
		ctx.stroke();
	}, [sensors]);
	const toggleSensor = (id) => {
		setSensors((prev) => prev.map((s) => {
			if (s.id !== id) return s;
			const next = {
				...s,
				active: !s.active
			};
			setLogs((l) => [`[${(/* @__PURE__ */ new Date()).toLocaleTimeString()}] ${s.label} ${next.active ? "ACTIVATED" : "DEACTIVATED"}`, ...l.slice(0, 6)]);
			return next;
		}));
	};
	return /* @__PURE__ */ jsxs("div", {
		style: {
			background: "var(--zy-gray-card)",
			border: "1px solid var(--zy-gray-border)",
			padding: 24,
			position: "relative"
		},
		children: [
			/* @__PURE__ */ jsx("div", {
				style: {
					fontSize: 11,
					fontWeight: 600,
					letterSpacing: "0.1em",
					textTransform: "uppercase",
					color: "var(--zy-gray-text)",
					marginBottom: 16
				},
				children: "⚡ LIVE IoT DASHBOARD — Click sensors to toggle"
			}),
			/* @__PURE__ */ jsx("div", {
				style: {
					display: "grid",
					gridTemplateColumns: "repeat(3, 1fr)",
					gap: 10,
					marginBottom: 16
				},
				children: sensors.map((s) => /* @__PURE__ */ jsxs("button", {
					onClick: () => toggleSensor(s.id),
					style: {
						background: s.active ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.01)",
						border: `1px solid ${s.active ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.05)"}`,
						padding: "12px 10px",
						cursor: "pointer",
						textAlign: "left",
						color: "var(--zy-white)",
						opacity: s.active ? 1 : .4,
						transition: "all 0.3s ease"
					},
					children: [
						/* @__PURE__ */ jsx("div", {
							style: {
								fontSize: 16,
								marginBottom: 4
							},
							children: s.icon
						}),
						/* @__PURE__ */ jsx("div", {
							style: {
								fontSize: 10,
								color: "var(--zy-gray-text)",
								textTransform: "uppercase",
								letterSpacing: "0.05em"
							},
							children: s.label
						}),
						/* @__PURE__ */ jsx("div", {
							style: {
								fontFamily: "var(--font-heading)",
								fontSize: 20,
								fontWeight: 700,
								marginTop: 4
							},
							children: s.active ? `${s.value}${s.unit}` : "OFF"
						}),
						s.active && /* @__PURE__ */ jsx("div", {
							style: {
								height: 2,
								background: "rgba(255,255,255,0.1)",
								marginTop: 8
							},
							children: /* @__PURE__ */ jsx("div", { style: {
								height: "100%",
								width: `${(s.value - s.min) / (s.max - s.min) * 100}%`,
								background: s.color,
								transition: "width 0.5s ease"
							} })
						})
					]
				}, s.id))
			}),
			/* @__PURE__ */ jsx("canvas", {
				ref: canvasRef,
				style: {
					width: "100%",
					height: 80,
					display: "block",
					marginBottom: 12
				}
			}),
			/* @__PURE__ */ jsx("div", {
				style: {
					background: "rgba(0,0,0,0.3)",
					padding: "8px 12px",
					fontFamily: "monospace",
					fontSize: 10,
					color: "var(--zy-gray-text)",
					maxHeight: 80,
					overflow: "hidden",
					lineHeight: 1.8
				},
				children: logs.map((log, i) => /* @__PURE__ */ jsx("div", {
					style: { opacity: 1 - i * .12 },
					children: log
				}, i))
			})
		]
	});
}
//#endregion
//#region resources/js/components/landing/playground-webapp.tsx
var DEFAULT_HTML = `<div class="card">
  <h2>Hello World</h2>
  <p>Edit this code!</p>
  <button>Click Me</button>
</div>`;
var DEFAULT_CSS = `.card {
  padding: 24px;
  background: #111;
  border: 1px solid #333;
  color: #fff;
  font-family: sans-serif;
  text-align: center;
}
.card h2 { 
  margin: 0 0 8px;
  font-size: 20px;
}
.card button {
  margin-top: 12px;
  padding: 8px 20px;
  background: #fff;
  color: #000;
  border: none;
  cursor: pointer;
  font-weight: 700;
}`;
function PlaygroundWebApp() {
	const [html, setHtml] = useState(DEFAULT_HTML);
	const [css, setCss] = useState(DEFAULT_CSS);
	const [activeTab, setActiveTab] = useState("html");
	const getPreview = useCallback(() => {
		return `<!DOCTYPE html><html><head><style>body{margin:0;display:flex;align-items:center;justify-content:center;min-height:100%;background:#0a0a0a;}${css}</style></head><body>${html}</body></html>`;
	}, [html, css]);
	return /* @__PURE__ */ jsxs("div", {
		style: {
			background: "var(--zy-gray-card)",
			border: "1px solid var(--zy-gray-border)",
			padding: 0,
			overflow: "hidden"
		},
		children: [/* @__PURE__ */ jsx("div", {
			style: {
				fontSize: 11,
				fontWeight: 600,
				letterSpacing: "0.1em",
				textTransform: "uppercase",
				color: "var(--zy-gray-text)",
				padding: "12px 16px",
				borderBottom: "1px solid var(--zy-gray-border)"
			},
			children: "💻 LIVE CODE EDITOR — Edit and see changes instantly"
		}), /* @__PURE__ */ jsxs("div", {
			style: {
				display: "grid",
				gridTemplateColumns: "1fr 1fr",
				minHeight: 280
			},
			children: [/* @__PURE__ */ jsxs("div", {
				style: {
					borderRight: "1px solid var(--zy-gray-border)",
					display: "flex",
					flexDirection: "column"
				},
				children: [/* @__PURE__ */ jsx("div", {
					style: {
						display: "flex",
						borderBottom: "1px solid var(--zy-gray-border)"
					},
					children: ["html", "css"].map((tab) => /* @__PURE__ */ jsx("button", {
						onClick: () => setActiveTab(tab),
						style: {
							flex: 1,
							padding: "8px 0",
							background: activeTab === tab ? "rgba(255,255,255,0.04)" : "transparent",
							border: "none",
							borderBottom: activeTab === tab ? "2px solid var(--zy-white)" : "2px solid transparent",
							color: activeTab === tab ? "var(--zy-white)" : "var(--zy-gray-text)",
							fontSize: 11,
							fontWeight: 600,
							textTransform: "uppercase",
							letterSpacing: "0.05em",
							cursor: "pointer",
							fontFamily: "monospace"
						},
						children: tab.toUpperCase()
					}, tab))
				}), /* @__PURE__ */ jsx("textarea", {
					value: activeTab === "html" ? html : css,
					onChange: (e) => activeTab === "html" ? setHtml(e.target.value) : setCss(e.target.value),
					spellCheck: false,
					style: {
						flex: 1,
						background: "transparent",
						color: "var(--zy-white)",
						border: "none",
						padding: 16,
						fontFamily: "monospace",
						fontSize: 11,
						lineHeight: 1.6,
						resize: "none",
						outline: "none",
						minHeight: 200
					}
				})]
			}), /* @__PURE__ */ jsxs("div", {
				style: {
					position: "relative",
					background: "var(--zy-black)"
				},
				children: [/* @__PURE__ */ jsx("div", {
					style: {
						position: "absolute",
						top: 8,
						right: 8,
						fontSize: 9,
						color: "#555",
						fontFamily: "monospace",
						textTransform: "uppercase",
						letterSpacing: "0.1em"
					},
					children: "PREVIEW"
				}), /* @__PURE__ */ jsx("iframe", {
					srcDoc: getPreview(),
					title: "Preview",
					sandbox: "allow-scripts",
					style: {
						width: "100%",
						height: "100%",
						border: "none",
						minHeight: 250
					}
				})]
			})]
		})]
	});
}
//#endregion
//#region resources/js/components/landing/playground-mobile.tsx
var PALETTE = [
	{
		type: "header",
		label: "Header",
		icon: "📝"
	},
	{
		type: "button",
		label: "Button",
		icon: "🔲"
	},
	{
		type: "text",
		label: "Text",
		icon: "📄"
	},
	{
		type: "image",
		label: "Image",
		icon: "🖼️"
	},
	{
		type: "input",
		label: "Input",
		icon: "⌨️"
	},
	{
		type: "card",
		label: "Card",
		icon: "📦"
	}
];
function PlaygroundMobile() {
	const [elements, setElements] = useState([
		{
			id: "1",
			type: "header",
			label: "My App",
			y: 0
		},
		{
			id: "2",
			type: "text",
			label: "Welcome to the app!",
			y: 1
		},
		{
			id: "3",
			type: "button",
			label: "Get Started",
			y: 2
		}
	]);
	const nextId = useRef(4);
	const addElement = (type) => {
		setElements((prev) => [...prev, {
			id: String(nextId.current++),
			type,
			label: type === "header" ? "New Header" : type === "button" ? "Click Me" : type === "text" ? "Some text here" : type === "input" ? "Enter value..." : type === "card" ? "Card Title" : "Image",
			y: prev.length
		}]);
	};
	const removeElement = (id) => {
		setElements((prev) => prev.filter((e) => e.id !== id));
	};
	const renderElement = (el) => {
		const common = {
			width: "100%",
			fontFamily: "sans-serif",
			boxSizing: "border-box"
		};
		switch (el.type) {
			case "header": return /* @__PURE__ */ jsx("div", {
				style: {
					...common,
					fontSize: 16,
					fontWeight: 700,
					color: "var(--zy-white)",
					padding: "8px 0",
					borderBottom: "1px solid #222"
				},
				children: el.label
			});
			case "button": return /* @__PURE__ */ jsx("div", {
				style: {
					...common,
					background: "#fff",
					color: "#000",
					textAlign: "center",
					padding: "10px",
					fontSize: 12,
					fontWeight: 700
				},
				children: el.label
			});
			case "text": return /* @__PURE__ */ jsx("div", {
				style: {
					...common,
					fontSize: 12,
					color: "#999",
					padding: "6px 0",
					lineHeight: 1.5
				},
				children: el.label
			});
			case "image": return /* @__PURE__ */ jsx("div", {
				style: {
					...common,
					height: 60,
					background: "linear-gradient(135deg, #1a1a1a, #0a0a0a)",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					color: "#333",
					fontSize: 20
				},
				children: "🖼️"
			});
			case "input": return /* @__PURE__ */ jsx("div", {
				style: {
					...common,
					background: "#111",
					border: "1px solid #333",
					padding: "8px",
					fontSize: 11,
					color: "var(--zy-gray-text)"
				},
				children: el.label
			});
			case "card": return /* @__PURE__ */ jsxs("div", {
				style: {
					...common,
					background: "#111",
					border: "1px solid #222",
					padding: 12
				},
				children: [/* @__PURE__ */ jsx("div", {
					style: {
						fontSize: 12,
						fontWeight: 600,
						color: "var(--zy-white)"
					},
					children: el.label
				}), /* @__PURE__ */ jsx("div", {
					style: {
						fontSize: 10,
						color: "var(--zy-gray-text)",
						marginTop: 4
					},
					children: "Card content goes here"
				})]
			});
			default: return null;
		}
	};
	return /* @__PURE__ */ jsxs("div", {
		style: {
			background: "var(--zy-gray-card)",
			border: "1px solid var(--zy-gray-border)",
			padding: 0,
			overflow: "hidden"
		},
		children: [/* @__PURE__ */ jsx("div", {
			style: {
				fontSize: 11,
				fontWeight: 600,
				letterSpacing: "0.1em",
				textTransform: "uppercase",
				color: "var(--zy-gray-text)",
				padding: "12px 16px",
				borderBottom: "1px solid var(--zy-gray-border)"
			},
			children: "📱 APP UI BUILDER — Click components to add to the phone"
		}), /* @__PURE__ */ jsxs("div", {
			style: {
				display: "grid",
				gridTemplateColumns: "1fr 180px",
				minHeight: 340
			},
			children: [/* @__PURE__ */ jsx("div", {
				style: {
					display: "flex",
					justifyContent: "center",
					padding: "20px 16px"
				},
				children: /* @__PURE__ */ jsxs("div", {
					style: {
						width: 200,
						height: 380,
						border: "3px solid #333",
						borderRadius: 24,
						background: "var(--zy-black)",
						overflow: "hidden",
						position: "relative"
					},
					children: [
						/* @__PURE__ */ jsx("div", {
							style: {
								height: 24,
								background: "var(--zy-black)",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								fontSize: 9,
								color: "var(--zy-gray-text)"
							},
							children: "9:41 AM"
						}),
						/* @__PURE__ */ jsx("div", { style: {
							width: 80,
							height: 20,
							background: "var(--zy-black)",
							borderRadius: "0 0 12px 12px",
							margin: "-20px auto 0",
							position: "relative",
							zIndex: 2
						} }),
						/* @__PURE__ */ jsxs("div", {
							style: {
								padding: "12px",
								display: "flex",
								flexDirection: "column",
								gap: 8,
								maxHeight: 320,
								overflowY: "auto"
							},
							children: [elements.map((el) => /* @__PURE__ */ jsxs("div", {
								style: {
									position: "relative",
									cursor: "pointer"
								},
								onClick: () => removeElement(el.id),
								children: [renderElement(el), /* @__PURE__ */ jsx("div", {
									style: {
										position: "absolute",
										top: -4,
										right: -4,
										width: 14,
										height: 14,
										borderRadius: "50%",
										background: "#333",
										color: "#999",
										fontSize: 8,
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										opacity: .6
									},
									children: "✕"
								})]
							}, el.id)), elements.length === 0 && /* @__PURE__ */ jsx("div", {
								style: {
									textAlign: "center",
									color: "#333",
									fontSize: 11,
									padding: "40px 0"
								},
								children: "Add components →"
							})]
						}),
						/* @__PURE__ */ jsx("div", { style: {
							position: "absolute",
							bottom: 6,
							left: "50%",
							transform: "translateX(-50%)",
							width: 60,
							height: 4,
							background: "#333",
							borderRadius: 2
						} })
					]
				})
			}), /* @__PURE__ */ jsxs("div", {
				style: {
					borderLeft: "1px solid var(--zy-gray-border)",
					padding: 12,
					display: "flex",
					flexDirection: "column",
					gap: 6
				},
				children: [
					/* @__PURE__ */ jsx("div", {
						style: {
							fontSize: 10,
							color: "var(--zy-gray-text)",
							marginBottom: 4,
							fontWeight: 600
						},
						children: "COMPONENTS"
					}),
					PALETTE.map((p) => /* @__PURE__ */ jsxs("button", {
						onClick: () => addElement(p.type),
						style: {
							background: "rgba(255,255,255,0.03)",
							border: "1px solid var(--zy-gray-border)",
							padding: "8px 10px",
							color: "var(--zy-white)",
							cursor: "pointer",
							fontSize: 11,
							textAlign: "left",
							display: "flex",
							alignItems: "center",
							gap: 8,
							transition: "all 0.2s ease"
						},
						onMouseEnter: (e) => {
							e.target.style.borderColor = "rgba(255,255,255,0.3)";
						},
						onMouseLeave: (e) => {
							e.target.style.borderColor = "var(--zy-gray-border)";
						},
						children: [/* @__PURE__ */ jsx("span", { children: p.icon }), /* @__PURE__ */ jsx("span", { children: p.label })]
					}, p.type)),
					/* @__PURE__ */ jsx("button", {
						onClick: () => setElements([]),
						style: {
							marginTop: 8,
							background: "transparent",
							border: "1px solid rgba(255,100,100,0.3)",
							padding: "6px",
							color: "#ff6b6b",
							cursor: "pointer",
							fontSize: 10
						},
						children: "🗑️ Clear All"
					})
				]
			})]
		})]
	});
}
//#endregion
//#region resources/js/components/landing/playground-marketing.tsx
function generateScore() {
	const speed = Math.floor(Math.random() * 30) + 55;
	const seo = Math.floor(Math.random() * 25) + 65;
	const accessibility = Math.floor(Math.random() * 20) + 70;
	return {
		overall: Math.round((speed + seo + accessibility) / 3),
		speed,
		seo,
		accessibility,
		tips: [
			"🔴 Images are not optimized — use WebP format",
			"🟡 Missing meta description on 3 pages",
			"🟢 SSL certificate is valid",
			"🔴 Page load time is 4.2s — should be under 2s",
			"🟡 No sitemap.xml found",
			"🟢 Mobile responsive design detected",
			"🔴 No structured data (JSON-LD) found",
			"🟡 H1 tag missing on homepage",
			"🟢 HTTPS enabled",
			"🔴 Core Web Vitals: LCP = 3.8s (poor)"
		].sort(() => Math.random() - .5).slice(0, 5)
	};
}
function ScoreCircle({ value, label, size = 60 }) {
	const circumference = 2 * Math.PI * 22;
	const offset = circumference - value / 100 * circumference;
	const color = value >= 80 ? "#4ecdc4" : value >= 60 ? "#ffe66d" : "#ff6b6b";
	return /* @__PURE__ */ jsxs("div", {
		style: { textAlign: "center" },
		children: [/* @__PURE__ */ jsxs("svg", {
			width: size,
			height: size,
			viewBox: "0 0 50 50",
			children: [
				/* @__PURE__ */ jsx("circle", {
					cx: "25",
					cy: "25",
					r: "22",
					fill: "none",
					stroke: "rgba(255,255,255,0.06)",
					strokeWidth: "3"
				}),
				/* @__PURE__ */ jsx("circle", {
					cx: "25",
					cy: "25",
					r: "22",
					fill: "none",
					stroke: color,
					strokeWidth: "3",
					strokeDasharray: circumference,
					strokeDashoffset: offset,
					strokeLinecap: "round",
					transform: "rotate(-90 25 25)",
					style: { transition: "stroke-dashoffset 1s ease" }
				}),
				/* @__PURE__ */ jsx("text", {
					x: "25",
					y: "28",
					textAnchor: "middle",
					fontSize: "12",
					fontWeight: "700",
					fill: color,
					children: value
				})
			]
		}), /* @__PURE__ */ jsx("div", {
			style: {
				fontSize: 9,
				color: "var(--zy-gray-text)",
				marginTop: 4,
				textTransform: "uppercase",
				letterSpacing: "0.05em"
			},
			children: label
		})]
	});
}
function PlaygroundMarketing() {
	const [url, setUrl] = useState("");
	const [loading, setLoading] = useState(false);
	const [result, setResult] = useState(null);
	const analyze = () => {
		if (!url.trim()) return;
		setLoading(true);
		setResult(null);
		setTimeout(() => {
			setResult(generateScore());
			setLoading(false);
		}, 1500);
	};
	return /* @__PURE__ */ jsxs("div", {
		style: {
			background: "var(--zy-gray-card)",
			border: "1px solid var(--zy-gray-border)",
			padding: 0,
			overflow: "hidden"
		},
		children: [/* @__PURE__ */ jsx("div", {
			style: {
				fontSize: 11,
				fontWeight: 600,
				letterSpacing: "0.1em",
				textTransform: "uppercase",
				color: "var(--zy-gray-text)",
				padding: "12px 16px",
				borderBottom: "1px solid var(--zy-gray-border)"
			},
			children: "📊 SEO SCORE ANALYZER — Enter any website URL"
		}), /* @__PURE__ */ jsxs("div", {
			style: { padding: 20 },
			children: [
				/* @__PURE__ */ jsxs("div", {
					style: {
						display: "flex",
						gap: 8,
						marginBottom: 20
					},
					children: [/* @__PURE__ */ jsx("input", {
						type: "text",
						value: url,
						onChange: (e) => setUrl(e.target.value),
						placeholder: "example.com",
						onKeyDown: (e) => e.key === "Enter" && analyze(),
						style: {
							flex: 1,
							background: "rgba(255,255,255,0.03)",
							border: "1px solid var(--zy-gray-border)",
							padding: "10px 14px",
							color: "var(--zy-white)",
							fontSize: 13,
							fontFamily: "monospace",
							outline: "none"
						}
					}), /* @__PURE__ */ jsx("button", {
						onClick: analyze,
						disabled: loading,
						style: {
							background: "var(--zy-white)",
							color: "var(--zy-black)",
							border: "none",
							padding: "10px 20px",
							fontSize: 12,
							fontWeight: 700,
							cursor: loading ? "wait" : "pointer",
							fontFamily: "var(--font-heading)",
							textTransform: "uppercase",
							letterSpacing: "0.05em",
							opacity: loading ? .5 : 1
						},
						children: loading ? "Analyzing..." : "Analyze"
					})]
				}),
				loading && /* @__PURE__ */ jsxs("div", {
					style: {
						height: 2,
						background: "var(--zy-gray-border)",
						marginBottom: 16
					},
					children: [/* @__PURE__ */ jsx("div", { style: {
						height: "100%",
						background: "#fff",
						animation: "loading-bar 1.5s ease-in-out",
						width: "100%"
					} }), /* @__PURE__ */ jsx("style", { children: `@keyframes loading-bar { from { width: 0; } to { width: 100%; } }` })]
				}),
				result && /* @__PURE__ */ jsxs("div", {
					style: { animation: "fadeInUp 0.4s ease" },
					children: [
						/* @__PURE__ */ jsx("style", { children: `@keyframes fadeInUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }` }),
						/* @__PURE__ */ jsxs("div", {
							style: {
								display: "flex",
								justifyContent: "space-around",
								marginBottom: 20
							},
							children: [
								/* @__PURE__ */ jsx(ScoreCircle, {
									value: result.overall,
									label: "Overall",
									size: 70
								}),
								/* @__PURE__ */ jsx(ScoreCircle, {
									value: result.speed,
									label: "Speed"
								}),
								/* @__PURE__ */ jsx(ScoreCircle, {
									value: result.seo,
									label: "SEO"
								}),
								/* @__PURE__ */ jsx(ScoreCircle, {
									value: result.accessibility,
									label: "A11y"
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							style: {
								borderTop: "1px solid var(--zy-gray-border)",
								paddingTop: 12
							},
							children: [/* @__PURE__ */ jsx("div", {
								style: {
									fontSize: 10,
									fontWeight: 600,
									color: "var(--zy-gray-text)",
									marginBottom: 8,
									textTransform: "uppercase",
									letterSpacing: "0.05em"
								},
								children: "FINDINGS"
							}), result.tips.map((tip, i) => /* @__PURE__ */ jsx("div", {
								style: {
									fontSize: 11,
									color: "var(--zy-gray-light)",
									padding: "6px 0",
									borderBottom: "1px solid rgba(255,255,255,0.03)",
									lineHeight: 1.4
								},
								children: tip
							}, i))]
						}),
						/* @__PURE__ */ jsxs("div", {
							style: {
								marginTop: 12,
								fontSize: 10,
								color: "var(--zy-gray-text)",
								fontStyle: "italic"
							},
							children: [
								"💡 Want a real audit? ",
								/* @__PURE__ */ jsx("a", {
									href: "#contact",
									style: {
										color: "var(--zy-white)",
										textDecoration: "underline"
									},
									children: "Contact us"
								}),
								" for a free detailed report."
							]
						})
					]
				}),
				!result && !loading && /* @__PURE__ */ jsx("div", {
					style: {
						textAlign: "center",
						color: "#333",
						fontSize: 11,
						padding: "30px 0"
					},
					children: "Enter a website URL and click Analyze to get an instant score"
				})
			]
		})]
	});
}
//#endregion
//#region resources/js/components/landing/playground-ai.tsx
function PlaygroundAI() {
	const [status, setStatus] = useState("idle");
	const [progress, setProgress] = useState(0);
	const [output, setOutput] = useState("");
	useEffect(() => {
		if (status === "analyzing") {
			const interval = setInterval(() => {
				setProgress((p) => {
					if (p >= 100) {
						clearInterval(interval);
						setStatus("done");
						return 100;
					}
					return p + Math.floor(Math.random() * 15) + 5;
				});
			}, 300);
			return () => clearInterval(interval);
		}
	}, [status]);
	useEffect(() => {
		if (status === "done") {
			const fullText = "Analysis complete. Detected 3 optimization opportunities in workflow. Automated script generated to reduce manual entry by 85%.";
			let i = 0;
			const typingInterval = setInterval(() => {
				if (i <= 127) {
					setOutput(fullText.substring(0, i));
					i++;
				} else clearInterval(typingInterval);
			}, 30);
			return () => clearInterval(typingInterval);
		} else if (status === "idle") {
			setOutput("");
			setProgress(0);
		}
	}, [status]);
	return /* @__PURE__ */ jsxs("div", {
		style: {
			background: "var(--zy-black)",
			border: "1px solid var(--zy-gray-border)",
			borderRadius: 12,
			padding: 32,
			color: "var(--zy-white)"
		},
		children: [/* @__PURE__ */ jsxs("div", {
			style: {
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				marginBottom: 24
			},
			children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
				style: {
					fontFamily: "var(--font-heading)",
					fontSize: 18,
					marginBottom: 4
				},
				children: "AI & Automation Engine"
			}), /* @__PURE__ */ jsx("p", {
				style: {
					fontSize: 13,
					color: "var(--zy-gray-text)"
				},
				children: "Simulate an automated workflow analysis"
			})] }), /* @__PURE__ */ jsx("button", {
				onClick: () => setStatus("analyzing"),
				disabled: status === "analyzing",
				style: {
					padding: "10px 20px",
					background: status === "analyzing" ? "#333" : "#4ecdc4",
					color: status === "analyzing" ? "#888" : "#000",
					border: "none",
					borderRadius: 6,
					fontWeight: 600,
					cursor: status === "analyzing" ? "not-allowed" : "pointer",
					fontSize: 13,
					transition: "all 0.3s"
				},
				children: status === "analyzing" ? "Processing..." : status === "done" ? "Run Again" : "Start Analysis"
			})]
		}), /* @__PURE__ */ jsxs("div", {
			style: {
				background: "var(--zy-gray-card)",
				border: "1px solid var(--zy-gray-border)",
				borderRadius: 8,
				padding: 20,
				minHeight: 120,
				position: "relative",
				overflow: "hidden"
			},
			children: [
				status === "idle" && /* @__PURE__ */ jsx("div", {
					style: {
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						height: "100%",
						color: "var(--zy-gray-text)",
						fontSize: 13
					},
					children: "Waiting for input..."
				}),
				status === "analyzing" && /* @__PURE__ */ jsxs("div", {
					style: { padding: "20px 0" },
					children: [/* @__PURE__ */ jsxs("div", {
						style: {
							display: "flex",
							justifyContent: "space-between",
							marginBottom: 8,
							fontSize: 12,
							color: "var(--zy-white)"
						},
						children: [/* @__PURE__ */ jsx("span", { children: "Analyzing data streams..." }), /* @__PURE__ */ jsxs("span", { children: [progress, "%"] })]
					}), /* @__PURE__ */ jsx("div", {
						style: {
							height: 4,
							background: "#222",
							borderRadius: 2,
							overflow: "hidden"
						},
						children: /* @__PURE__ */ jsx("div", { style: {
							height: "100%",
							width: `${progress}%`,
							background: "#4ecdc4",
							transition: "width 0.3s"
						} })
					})]
				}),
				status === "done" && /* @__PURE__ */ jsxs("div", {
					style: {
						fontFamily: "monospace",
						fontSize: 13,
						color: "#4ecdc4",
						lineHeight: 1.6
					},
					children: [
						/* @__PURE__ */ jsx("span", {
							style: { color: "#888" },
							children: "> "
						}),
						output,
						/* @__PURE__ */ jsx("span", {
							style: { animation: "cursorBlink 1s step-end infinite" },
							children: "_"
						})
					]
				})
			]
		})]
	});
}
//#endregion
//#region resources/js/components/landing/playground-custom.tsx
var STACKS = {
	frontend: [
		"React",
		"Vue",
		"Next.js",
		"Angular"
	],
	backend: [
		"Node.js",
		"Laravel",
		"Python",
		"Java"
	],
	database: [
		"PostgreSQL",
		"MongoDB",
		"MySQL",
		"Redis"
	]
};
function PlaygroundCustom() {
	const [selections, setSelections] = useState({
		frontend: "React",
		backend: "Laravel",
		database: "PostgreSQL"
	});
	const handleSelect = (category, item) => {
		setSelections((prev) => ({
			...prev,
			[category]: item
		}));
	};
	return /* @__PURE__ */ jsxs("div", {
		style: {
			background: "var(--zy-black)",
			border: "1px solid var(--zy-gray-border)",
			borderRadius: 12,
			padding: 32,
			color: "var(--zy-white)"
		},
		children: [
			/* @__PURE__ */ jsxs("div", {
				style: {
					marginBottom: 24,
					textAlign: "center"
				},
				children: [/* @__PURE__ */ jsx("h4", {
					style: {
						fontFamily: "var(--font-heading)",
						fontSize: 18,
						marginBottom: 4
					},
					children: "Stack Architect"
				}), /* @__PURE__ */ jsx("p", {
					style: {
						fontSize: 13,
						color: "var(--zy-gray-text)"
					},
					children: "Build your custom software architecture"
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				style: {
					display: "grid",
					gridTemplateColumns: "repeat(3, 1fr)",
					gap: 20
				},
				children: Object.entries(STACKS).map(([category, items]) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
					style: {
						fontSize: 11,
						fontWeight: 600,
						textTransform: "uppercase",
						color: "var(--zy-gray-text)",
						marginBottom: 12,
						letterSpacing: "0.05em"
					},
					children: category
				}), /* @__PURE__ */ jsx("div", {
					style: {
						display: "flex",
						flexDirection: "column",
						gap: 8
					},
					children: items.map((item) => /* @__PURE__ */ jsx("button", {
						onClick: () => handleSelect(category, item),
						style: {
							padding: "10px",
							background: selections[category] === item ? "rgba(255,255,255,0.1)" : "var(--zy-gray-card)",
							border: `1px solid ${selections[category] === item ? "#fff" : "var(--zy-gray-border)"}`,
							borderRadius: 6,
							color: selections[category] === item ? "#fff" : "var(--zy-gray-text)",
							cursor: "pointer",
							transition: "all 0.3s",
							textAlign: "left",
							fontSize: 13
						},
						children: item
					}, item))
				})] }, category))
			}),
			/* @__PURE__ */ jsxs("div", {
				style: {
					marginTop: 32,
					padding: 20,
					background: "var(--zy-gray-card)",
					borderRadius: 8,
					border: "1px dashed var(--zy-gray-border)",
					textAlign: "center"
				},
				children: [/* @__PURE__ */ jsx("div", {
					style: {
						fontSize: 12,
						color: "var(--zy-gray-text)",
						marginBottom: 12
					},
					children: "YOUR ARCHITECTURE"
				}), /* @__PURE__ */ jsxs("div", {
					style: {
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						gap: 16
					},
					children: [
						/* @__PURE__ */ jsx("div", {
							style: {
								padding: "8px 16px",
								background: "#222",
								borderRadius: 4,
								fontSize: 13
							},
							children: selections.frontend
						}),
						/* @__PURE__ */ jsx("div", {
							style: { color: "#666" },
							children: "⇄"
						}),
						/* @__PURE__ */ jsx("div", {
							style: {
								padding: "8px 16px",
								background: "#222",
								borderRadius: 4,
								fontSize: 13
							},
							children: selections.backend
						}),
						/* @__PURE__ */ jsx("div", {
							style: { color: "#666" },
							children: "⇄"
						}),
						/* @__PURE__ */ jsx("div", {
							style: {
								padding: "8px 16px",
								background: "#222",
								borderRadius: 4,
								fontSize: 13
							},
							children: selections.database
						})
					]
				})]
			})
		]
	});
}
//#endregion
//#region resources/js/components/landing/services-section.tsx
gsap.registerPlugin(ScrollTrigger);
var SERVICES = [
	{
		id: "web",
		title: "Web Development",
		desc: "Full-stack web apps with React, Next.js, Laravel — blazing fast, secure, and scalable.",
		icon: /* @__PURE__ */ jsxs("svg", {
			width: "32",
			height: "32",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.5",
			children: [
				/* @__PURE__ */ jsx("rect", {
					x: "2",
					y: "3",
					width: "20",
					height: "14",
					rx: "2"
				}),
				/* @__PURE__ */ jsx("line", {
					x1: "2",
					y1: "7",
					x2: "22",
					y2: "7"
				}),
				/* @__PURE__ */ jsx("circle", {
					cx: "5",
					cy: "5",
					r: "0.5",
					fill: "currentColor"
				}),
				/* @__PURE__ */ jsx("circle", {
					cx: "7.5",
					cy: "5",
					r: "0.5",
					fill: "currentColor"
				}),
				/* @__PURE__ */ jsx("circle", {
					cx: "10",
					cy: "5",
					r: "0.5",
					fill: "currentColor"
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
		playground: /* @__PURE__ */ jsx(PlaygroundWebApp, {})
	},
	{
		id: "mobile",
		title: "App Development",
		desc: "Native & cross-platform mobile apps with React Native and Flutter — iOS & Android.",
		icon: /* @__PURE__ */ jsxs("svg", {
			width: "32",
			height: "32",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.5",
			children: [/* @__PURE__ */ jsx("rect", {
				x: "5",
				y: "2",
				width: "14",
				height: "20",
				rx: "2"
			}), /* @__PURE__ */ jsx("line", {
				x1: "12",
				y1: "18",
				x2: "12",
				y2: "18.01",
				strokeWidth: "2",
				strokeLinecap: "round"
			})]
		}),
		playground: /* @__PURE__ */ jsx(PlaygroundMobile, {})
	},
	{
		id: "iot",
		title: "IoT Solutions",
		desc: "Smart devices, sensor networks, real-time dashboards — connecting the physical and digital world.",
		icon: /* @__PURE__ */ jsxs("svg", {
			width: "32",
			height: "32",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.5",
			children: [
				/* @__PURE__ */ jsx("circle", {
					cx: "12",
					cy: "12",
					r: "3"
				}),
				/* @__PURE__ */ jsx("path", { d: "M4.93 4.93a10 10 0 0114.14 0" }),
				/* @__PURE__ */ jsx("path", { d: "M7.76 7.76a6 6 0 018.48 0" }),
				/* @__PURE__ */ jsx("path", { d: "M4.93 19.07a10 10 0 010-14.14" }),
				/* @__PURE__ */ jsx("path", { d: "M19.07 4.93a10 10 0 010 14.14" })
			]
		}),
		playground: /* @__PURE__ */ jsx(PlaygroundIoT, {})
	},
	{
		id: "ai",
		title: "AI & Automation",
		desc: "Custom AI models, workflow automation, and smart analytics to streamline your business operations.",
		icon: /* @__PURE__ */ jsxs("svg", {
			width: "32",
			height: "32",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.5",
			children: [/* @__PURE__ */ jsx("path", { d: "M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" }), /* @__PURE__ */ jsx("path", { d: "M19 12a7 7 0 0 0-14 0" })]
		}),
		playground: /* @__PURE__ */ jsx(PlaygroundAI, {})
	},
	{
		id: "custom",
		title: "Custom Software",
		desc: "Tailor-made enterprise software, CRM, and ERP systems designed precisely for your needs.",
		icon: /* @__PURE__ */ jsxs("svg", {
			width: "32",
			height: "32",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.5",
			children: [
				/* @__PURE__ */ jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
				/* @__PURE__ */ jsx("polyline", { points: "14 2 14 8 20 8" }),
				/* @__PURE__ */ jsx("line", {
					x1: "16",
					y1: "13",
					x2: "8",
					y2: "13"
				}),
				/* @__PURE__ */ jsx("line", {
					x1: "16",
					y1: "17",
					x2: "8",
					y2: "17"
				}),
				/* @__PURE__ */ jsx("polyline", { points: "10 9 9 9 8 9" })
			]
		}),
		playground: /* @__PURE__ */ jsx(PlaygroundCustom, {})
	},
	{
		id: "marketing",
		title: "Digital Marketing",
		desc: "SEO, PPC, Social Media Marketing, and Analytics — data-driven strategies for growth.",
		icon: /* @__PURE__ */ jsxs("svg", {
			width: "32",
			height: "32",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.5",
			children: [
				/* @__PURE__ */ jsx("path", { d: "M18 20V10" }),
				/* @__PURE__ */ jsx("path", { d: "M12 20V4" }),
				/* @__PURE__ */ jsx("path", { d: "M6 20v-6" })
			]
		}),
		playground: /* @__PURE__ */ jsx(PlaygroundMarketing, {})
	}
];
function ServicesSection() {
	const sectionRef = useRef(null);
	const [activeService, setActiveService] = useState(null);
	const { theme } = useTheme();
	const isLight = theme === "light";
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
		if (!sectionRef.current) return;
		const ctx = gsap.context(() => {
			gsap.utils.toArray(".service-card-new").forEach((card, i) => {
				gsap.fromTo(card, {
					opacity: 0,
					y: 60
				}, {
					opacity: 1,
					y: 0,
					duration: .7,
					ease: "power3.out",
					scrollTrigger: {
						trigger: card,
						start: "top 85%",
						once: true
					},
					delay: i * .1
				});
			});
		}, sectionRef);
		return () => ctx.revert();
	}, []);
	const activeIsLight = mounted && isLight;
	return /* @__PURE__ */ jsxs("section", {
		ref: sectionRef,
		id: "services",
		className: "zy-section",
		style: { background: "var(--zy-black)" },
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "zy-section-header",
				style: { textAlign: "center" },
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "zy-section-label",
						children: "What We Build"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "zy-section-title",
						children: "Our Services"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "zy-section-subtitle",
						style: { margin: "20px auto 0" },
						children: "Click on any service to try an interactive demo — experience what we build."
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				style: {
					maxWidth: 1100,
					margin: "0 auto"
				},
				children: [/* @__PURE__ */ jsx("div", {
					style: {
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
						gap: 16,
						marginBottom: 32
					},
					children: SERVICES.map((service) => /* @__PURE__ */ jsxs("div", {
						className: "service-card-new",
						style: {
							position: "relative",
							borderRadius: 8,
							overflow: "hidden",
							opacity: 0,
							padding: 1,
							display: "flex",
							flexDirection: "column"
						},
						children: [/* @__PURE__ */ jsx("div", { style: {
							position: "absolute",
							top: "50%",
							left: "50%",
							width: "250%",
							height: "250%",
							background: activeIsLight ? "conic-gradient(from 0deg, transparent 75%, rgba(0,0,0,0.4) 95%, #000000 100%)" : "conic-gradient(from 0deg, transparent 75%, rgba(255,255,255,0.4) 95%, #ffffff 100%)",
							animation: "spinGradientCentered 4s linear infinite",
							zIndex: 0,
							opacity: activeService === service.id ? 1 : .4,
							transition: "opacity 0.3s"
						} }), /* @__PURE__ */ jsxs("button", {
							onClick: () => setActiveService(activeService === service.id ? null : service.id),
							style: {
								position: "relative",
								borderRadius: 7,
								background: activeService === service.id ? "var(--zy-gray-dark)" : "var(--zy-gray-card)",
								padding: "28px 24px",
								textAlign: "left",
								cursor: "pointer",
								color: "var(--zy-white)",
								transition: "background 0.3s var(--zy-ease)",
								zIndex: 1,
								flex: 1,
								border: "none",
								display: "flex",
								flexDirection: "column",
								height: "100%"
							},
							children: [
								/* @__PURE__ */ jsx("div", {
									style: {
										color: "var(--zy-white)",
										marginBottom: 16,
										opacity: .7
									},
									children: service.icon
								}),
								/* @__PURE__ */ jsx("h3", {
									style: {
										fontFamily: "var(--font-heading)",
										fontSize: 18,
										fontWeight: 700,
										marginBottom: 8
									},
									children: service.title
								}),
								/* @__PURE__ */ jsx("p", {
									style: {
										fontSize: 13,
										color: "var(--zy-gray-text)",
										lineHeight: 1.5,
										marginBottom: 24
									},
									children: service.desc
								}),
								/* @__PURE__ */ jsx("div", {
									style: { marginTop: "auto" },
									children: /* @__PURE__ */ jsxs("div", {
										style: {
											display: "inline-flex",
											alignItems: "center",
											gap: 8,
											padding: "4px 12px",
											background: activeService === service.id ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.03)",
											border: "1px solid rgba(255, 255, 255, 0.1)",
											borderRadius: 30,
											transition: "all 0.3s"
										},
										children: [/* @__PURE__ */ jsx("span", { style: {
											width: 6,
											height: 6,
											borderRadius: "50%",
											background: activeService === service.id ? "#888" : "#fff",
											boxShadow: activeService === service.id ? "none" : "0 0 10px #fff",
											animation: activeService === service.id ? "none" : "pulseScale 1.5s infinite"
										} }), /* @__PURE__ */ jsx("span", {
											style: {
												fontSize: 10,
												letterSpacing: "0.1em",
												textTransform: "uppercase",
												color: "var(--zy-gray-text)",
												fontWeight: 600
											},
											children: activeService === service.id ? "Close Demo" : "Interactive Demo"
										})]
									})
								})
							]
						})]
					}, service.id))
				}), activeService && /* @__PURE__ */ jsx("div", {
					style: { animation: "fadeInUp 0.4s ease" },
					children: SERVICES.find((s) => s.id === activeService)?.playground
				})]
			}),
			/* @__PURE__ */ jsx("style", { children: `
                @keyframes fadeInUp { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }
                @keyframes spinGradientCentered { 0% { transform: translate(-50%, -50%) rotate(0deg); } 100% { transform: translate(-50%, -50%) rotate(360deg); } }
                @keyframes pulseScale { 0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.5); opacity: 0.5; } }
            ` })
		]
	});
}
//#endregion
export { ServicesSection as default };

//# sourceMappingURL=services-section-jxi6R2Ci.js.map