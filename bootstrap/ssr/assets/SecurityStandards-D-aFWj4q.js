import { a as useTheme } from "./navbar-C4sR4eBL.js";
import "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/components/sections/DevelopmentMethodology.tsx
function DevelopmentMethodology({ service }) {
	return /* @__PURE__ */ jsx("section", {
		className: "zy-section",
		style: { background: "var(--zy-black)" },
		children: /* @__PURE__ */ jsxs("div", {
			style: {
				maxWidth: 1e3,
				margin: "0 auto",
				textAlign: "center"
			},
			children: [
				/* @__PURE__ */ jsx("span", {
					className: "zy-section-label",
					children: "Agile Sprints"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "zy-section-title",
					children: "Development Methodology"
				}),
				/* @__PURE__ */ jsx("p", {
					style: {
						color: "var(--zy-gray-text)",
						marginBottom: 60
					},
					children: "We don't do black boxes. You see progress every two weeks."
				}),
				/* @__PURE__ */ jsx("div", {
					style: {
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
						gap: 24
					},
					children: [
						"Sprint Planning",
						"Daily Standups",
						"Iterative Development",
						"Sprint Review"
					].map((step, i) => /* @__PURE__ */ jsxs("div", {
						style: {
							background: "var(--zy-gray-card)",
							padding: 32,
							borderRadius: 12,
							border: "1px solid rgba(255,255,255,0.05)"
						},
						children: [/* @__PURE__ */ jsxs("div", {
							style: {
								fontSize: 48,
								fontWeight: 900,
								color: "var(--zy-blue)",
								opacity: .2,
								marginBottom: -20,
								textAlign: "left"
							},
							children: ["0", i + 1]
						}), /* @__PURE__ */ jsx("h3", {
							style: {
								fontSize: 18,
								color: "var(--zy-white)",
								fontWeight: 700,
								fontFamily: "var(--font-heading)",
								textAlign: "left",
								position: "relative",
								zIndex: 1
							},
							children: step
						})]
					}, i))
				})
			]
		})
	});
}
//#endregion
//#region resources/js/components/sections/ProcessTimeline.tsx
function ProcessTimeline({ service }) {
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
				children: [/* @__PURE__ */ jsxs("h2", {
					className: "zy-section-title",
					children: ["How We Deliver ", service?.title || "Excellence"]
				}), /* @__PURE__ */ jsx("p", {
					style: {
						color: "var(--zy-gray-text)",
						marginTop: 16
					},
					children: "A transparent, agile process guaranteed to yield results."
				})]
			}), /* @__PURE__ */ jsxs("div", {
				style: { position: "relative" },
				children: [/* @__PURE__ */ jsx("div", { style: {
					position: "absolute",
					top: 0,
					bottom: 0,
					left: 32,
					width: 2,
					background: "rgba(255,255,255,0.05)"
				} }), [
					{
						step: "01",
						title: "Discovery & Strategy",
						desc: "We dive deep into your business goals and technical requirements to formulate a bulletproof plan."
					},
					{
						step: "02",
						title: "Design & Prototyping",
						desc: "Crafting high-fidelity wireframes and interactive prototypes for your approval."
					},
					{
						step: "03",
						title: "Agile Development",
						desc: "Our engineering team builds your product in transparent, two-week sprints."
					},
					{
						step: "04",
						title: "Testing & QA",
						desc: "Rigorous automated and manual testing to ensure zero critical bugs."
					},
					{
						step: "05",
						title: "Launch & Scale",
						desc: "Seamless deployment with 24/7 monitoring and scalable infrastructure."
					}
				].map((item, i) => /* @__PURE__ */ jsxs("div", {
					style: {
						display: "flex",
						gap: 32,
						marginBottom: 40,
						position: "relative"
					},
					children: [/* @__PURE__ */ jsx("div", {
						style: {
							width: 64,
							height: 64,
							borderRadius: "50%",
							background: "var(--zy-blue)",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							color: "#fff",
							fontSize: 24,
							fontWeight: 800,
							zIndex: 1,
							flexShrink: 0,
							boxShadow: "0 0 20px rgba(99, 102, 241, 0.2)"
						},
						children: item.step
					}), /* @__PURE__ */ jsxs("div", {
						style: { paddingTop: 12 },
						children: [/* @__PURE__ */ jsx("h3", {
							style: {
								color: "var(--zy-white)",
								fontSize: 24,
								fontWeight: 700,
								marginBottom: 8,
								fontFamily: "var(--font-heading)"
							},
							children: item.title
						}), /* @__PURE__ */ jsx("p", {
							style: {
								color: "var(--zy-gray-text)",
								fontSize: 16,
								lineHeight: 1.6
							},
							children: item.desc
						})]
					})]
				}, i))]
			})]
		})
	});
}
//#endregion
//#region resources/js/components/sections/QAAndTesting.tsx
function QAAndTesting({ service }) {
	return /* @__PURE__ */ jsx("section", {
		className: "zy-section",
		style: { background: "var(--zy-black)" },
		children: /* @__PURE__ */ jsxs("div", {
			style: {
				maxWidth: 1200,
				margin: "0 auto",
				display: "flex",
				gap: 60,
				alignItems: "center",
				flexWrap: "wrap-reverse"
			},
			children: [/* @__PURE__ */ jsx("div", {
				style: {
					flex: "1 1 400px",
					background: "var(--zy-gray-card)",
					borderRadius: 12,
					padding: 40,
					border: "1px solid rgba(255,255,255,0.05)"
				},
				children: /* @__PURE__ */ jsx("div", {
					style: {
						display: "flex",
						flexDirection: "column",
						gap: 16
					},
					children: [
						"Unit Testing: 95% Coverage",
						"End-to-End Cypress Tests",
						"Load Testing (JMeter)",
						"Manual Exploratory Testing"
					].map((test, i) => /* @__PURE__ */ jsxs("div", {
						style: {
							background: "var(--zy-gray-dark)",
							padding: 16,
							borderRadius: 8,
							color: "var(--zy-white)",
							fontWeight: 600
						},
						children: ["✓ ", test]
					}, i))
				})
			}), /* @__PURE__ */ jsxs("div", {
				style: { flex: "1 1 400px" },
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "zy-section-label",
						children: "Zero Bugs"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "zy-section-title",
						children: "Rigorous QA & Testing"
					}),
					/* @__PURE__ */ jsx("p", {
						style: {
							color: "var(--zy-gray-text)",
							lineHeight: 1.6
						},
						children: "A single bug in production can cost millions. Our QA engineers work in parallel with developers to ensure that every release is bulletproof. Automated CI/CD pipelines run thousands of tests before any code hits the live server."
					})
				]
			})]
		})
	});
}
//#endregion
//#region resources/js/components/sections/SecurityStandards.tsx
function SecurityStandards({ service }) {
	return /* @__PURE__ */ jsx("section", {
		className: "zy-section",
		style: { background: "var(--zy-black)" },
		children: /* @__PURE__ */ jsxs("div", {
			style: {
				maxWidth: 1200,
				margin: "0 auto",
				display: "flex",
				gap: 60,
				alignItems: "center",
				flexWrap: "wrap"
			},
			children: [/* @__PURE__ */ jsxs("div", {
				style: { flex: "1 1 400px" },
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "zy-section-label",
						children: "Enterprise Security"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "zy-section-title",
						children: "Military-Grade Protection"
					}),
					/* @__PURE__ */ jsxs("p", {
						style: {
							color: "var(--zy-gray-text)",
							lineHeight: 1.6,
							marginBottom: 24
						},
						children: [
							"Security isn't a feature; it's the foundation. Every ",
							service?.title || "solution",
							" we deploy adheres to strict international compliance standards, ensuring your data is impenetrable."
						]
					}),
					/* @__PURE__ */ jsx("ul", {
						style: {
							listStyle: "none",
							padding: 0
						},
						children: [
							"End-to-End Encryption (AES-256)",
							"SOC 2 Type II Compliance",
							"GDPR & HIPAA Readiness",
							"Automated Penetration Testing"
						].map((item, i) => /* @__PURE__ */ jsxs("li", {
							style: {
								display: "flex",
								alignItems: "center",
								gap: 12,
								marginBottom: 16,
								color: "var(--zy-white)",
								fontWeight: 600
							},
							children: [/* @__PURE__ */ jsx("svg", {
								width: "20",
								height: "20",
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "var(--zy-blue)",
								strokeWidth: "3",
								children: /* @__PURE__ */ jsx("polyline", { points: "20 6 9 17 4 12" })
							}), item]
						}, i))
					})
				]
			}), /* @__PURE__ */ jsx("div", {
				style: {
					flex: "1 1 400px",
					background: "var(--zy-gray-card)",
					borderRadius: 12,
					padding: 40,
					border: "1px solid rgba(255,255,255,0.05)",
					position: "relative"
				},
				children: /* @__PURE__ */ jsx("div", {
					style: {
						width: 120,
						height: 120,
						margin: "0 auto",
						background: "rgba(99, 102, 241, 0.1)",
						borderRadius: "50%",
						display: "flex",
						alignItems: "center",
						justifyContent: "center"
					},
					children: /* @__PURE__ */ jsx("svg", {
						width: "60",
						height: "60",
						viewBox: "0 0 24 24",
						fill: "none",
						stroke: "var(--zy-blue)",
						strokeWidth: "2",
						children: /* @__PURE__ */ jsx("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" })
					})
				})
			})]
		})
	});
}
//#endregion
export { DevelopmentMethodology as i, QAAndTesting as n, ProcessTimeline as r, SecurityStandards as t };

//# sourceMappingURL=SecurityStandards-D-aFWj4q.js.map