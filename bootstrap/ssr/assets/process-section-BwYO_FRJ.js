import { t as GradientCard } from "./GradientCard-CqPeBOUo.js";
import { useEffect, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/components/landing/process-section.tsx
var STEPS = [
	{
		number: "01",
		title: "Discovery",
		description: "We dive deep into your business, industry, and goals. Through workshops and research, we map the landscape and uncover opportunities others miss.",
		color: "#3b82f6"
	},
	{
		number: "02",
		title: "Design",
		description: "Wireframes evolve into high-fidelity prototypes. Every pixel is intentional — balancing aesthetics with usability to create interfaces that convert.",
		color: "#a855f7"
	},
	{
		number: "03",
		title: "Architecture",
		description: "Before writing a line of code, we design scalable system architectures, design robust database schemas, and select the perfect tech stack.",
		color: "#ec4899"
	},
	{
		number: "04",
		title: "Develop",
		description: "Clean, modular code built for scale. Agile sprints with transparent progress updates. We ship fast without cutting corners.",
		color: "#10b981"
	},
	{
		number: "05",
		title: "QA & Testing",
		description: "Rigorous automated and manual testing. We hunt for bugs, optimize performance bottlenecks, and ensure military-grade security before launch.",
		color: "#f59e0b"
	},
	{
		number: "06",
		title: "Deploy",
		description: "Smooth deployment to production. Post-launch monitoring and iterative improvements ensure your software delivers lasting success.",
		color: "#6366f1"
	}
];
function ProcessSection() {
	const [isMobile, setIsMobile] = useState(false);
	useEffect(() => {
		const checkMobile = () => setIsMobile(window.innerWidth <= 900);
		checkMobile();
		window.addEventListener("resize", checkMobile);
		return () => window.removeEventListener("resize", checkMobile);
	}, []);
	const rows = [];
	for (let i = 0; i < STEPS.length; i += 3) rows.push(STEPS.slice(i, i + 3));
	return /* @__PURE__ */ jsxs("section", {
		className: "zy-section",
		style: {
			background: "var(--zy-black)",
			position: "relative"
		},
		children: [/* @__PURE__ */ jsxs("div", {
			className: "zy-section-header",
			style: {
				textAlign: "center",
				marginBottom: 80
			},
			children: [/* @__PURE__ */ jsx("span", {
				className: "zy-section-label",
				children: "Our Process"
			}), /* @__PURE__ */ jsx("h2", {
				className: "zy-section-title",
				children: "How We Work"
			})]
		}), /* @__PURE__ */ jsx("div", {
			style: {
				maxWidth: 1200,
				margin: "0 auto",
				display: "flex",
				flexDirection: "column",
				gap: isMobile ? 48 : 120,
				padding: "0 20px"
			},
			children: isMobile ? STEPS.map((step, i) => /* @__PURE__ */ jsxs("div", {
				style: { position: "relative" },
				children: [/* @__PURE__ */ jsx(GradientCard, {
					themeColor: step.color,
					style: { height: "100%" },
					children: /* @__PURE__ */ jsxs("div", {
						style: {
							padding: 40,
							position: "relative",
							overflow: "hidden",
							height: "100%"
						},
						children: [
							/* @__PURE__ */ jsx("div", {
								style: {
									position: "absolute",
									top: -10,
									right: -10,
									fontSize: 120,
									fontWeight: 900,
									lineHeight: .8,
									color: step.color,
									opacity: .05,
									userSelect: "none"
								},
								children: step.number
							}),
							/* @__PURE__ */ jsx("div", {
								style: {
									width: 48,
									height: 48,
									borderRadius: 12,
									background: `${step.color}20`,
									color: step.color,
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									fontSize: 20,
									fontWeight: 800,
									marginBottom: 24,
									border: `1px solid ${step.color}40`
								},
								children: step.number
							}),
							/* @__PURE__ */ jsx("h3", {
								style: {
									fontFamily: "var(--font-heading)",
									fontSize: 24,
									fontWeight: 700,
									color: "var(--zy-white)",
									marginBottom: 16,
									position: "relative",
									zIndex: 1
								},
								children: step.title
							}),
							/* @__PURE__ */ jsx("p", {
								style: {
									fontSize: 15,
									lineHeight: 1.7,
									color: "var(--zy-gray-text)"
								},
								children: step.description
							})
						]
					})
				}), i < STEPS.length - 1 && /* @__PURE__ */ jsx("div", {
					style: {
						position: "absolute",
						bottom: -36,
						left: "50%",
						transform: "translateX(-50%)",
						color: step.color,
						opacity: .6,
						zIndex: 10
					},
					children: /* @__PURE__ */ jsxs("svg", {
						width: "24",
						height: "32",
						viewBox: "0 0 24 32",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "2",
						strokeLinecap: "round",
						strokeLinejoin: "round",
						strokeDasharray: "4 4",
						children: [/* @__PURE__ */ jsx("line", {
							x1: "12",
							y1: "2",
							x2: "12",
							y2: "28"
						}), /* @__PURE__ */ jsx("polyline", { points: "19 21 12 28 5 21" })]
					})
				})]
			}, i)) : rows.map((row, rowIndex) => /* @__PURE__ */ jsxs("div", {
				style: {
					position: "relative",
					display: "flex",
					flexDirection: "column"
				},
				children: [/* @__PURE__ */ jsx("div", {
					style: {
						display: "flex",
						flexDirection: rowIndex % 2 === 0 ? "row" : "row-reverse",
						gap: 100,
						position: "relative"
					},
					children: row.map((step, colIndex) => /* @__PURE__ */ jsxs("div", {
						style: {
							flex: 1,
							position: "relative"
						},
						children: [/* @__PURE__ */ jsx(GradientCard, {
							themeColor: step.color,
							style: { height: "100%" },
							children: /* @__PURE__ */ jsxs("div", {
								style: {
									padding: 48,
									height: "100%",
									position: "relative",
									zIndex: 2,
									overflow: "hidden"
								},
								children: [
									/* @__PURE__ */ jsx("div", {
										style: {
											position: "absolute",
											top: -10,
											right: -10,
											fontSize: 140,
											fontWeight: 900,
											lineHeight: .8,
											color: step.color,
											opacity: .05,
											userSelect: "none"
										},
										children: step.number
									}),
									/* @__PURE__ */ jsx("div", {
										style: {
											width: 48,
											height: 48,
											borderRadius: 12,
											background: `${step.color}20`,
											color: step.color,
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											fontSize: 20,
											fontWeight: 800,
											marginBottom: 24,
											border: `1px solid ${step.color}40`,
											position: "relative",
											zIndex: 2
										},
										children: step.number
									}),
									/* @__PURE__ */ jsx("h3", {
										style: {
											fontFamily: "var(--font-heading)",
											fontSize: 24,
											fontWeight: 700,
											color: "var(--zy-white)",
											marginBottom: 16,
											position: "relative",
											zIndex: 1
										},
										children: step.title
									}),
									/* @__PURE__ */ jsx("p", {
										style: {
											fontSize: 15,
											lineHeight: 1.7,
											color: "var(--zy-gray-text)",
											position: "relative",
											zIndex: 1
										},
										children: step.description
									})
								]
							})
						}), colIndex < row.length - 1 && /* @__PURE__ */ jsx("div", {
							style: {
								position: "absolute",
								top: "50%",
								[rowIndex % 2 === 0 ? "right" : "left"]: -80,
								transform: `translateY(-50%) ${rowIndex % 2 !== 0 ? "scaleX(-1)" : ""}`,
								zIndex: 1,
								width: 60,
								overflow: "hidden"
							},
							children: /* @__PURE__ */ jsx("svg", {
								width: "60",
								height: "24",
								viewBox: "0 0 60 24",
								fill: "none",
								xmlns: "http://www.w3.org/2000/svg",
								children: /* @__PURE__ */ jsx("path", {
									d: "M0 12h54M46 4l8 8-8 8",
									stroke: step.color,
									strokeWidth: "2",
									strokeDasharray: "6 6",
									strokeLinecap: "round",
									strokeLinejoin: "round",
									style: { opacity: .7 }
								})
							})
						})]
					}, step.number))
				}), rowIndex < rows.length - 1 && /* @__PURE__ */ jsx("div", {
					style: {
						position: "absolute",
						bottom: -100,
						[rowIndex % 2 === 0 ? "right" : "left"]: "16%",
						zIndex: 1
					},
					children: /* @__PURE__ */ jsx("svg", {
						width: "24",
						height: "80",
						viewBox: "0 0 24 80",
						fill: "none",
						xmlns: "http://www.w3.org/2000/svg",
						children: /* @__PURE__ */ jsx("path", {
							d: "M12 0v76M4 68l8 8 8-8",
							stroke: row[row.length - 1].color,
							strokeWidth: "2",
							strokeDasharray: "6 6",
							strokeLinecap: "round",
							strokeLinejoin: "round",
							style: { opacity: .7 }
						})
					})
				})]
			}, rowIndex))
		})]
	});
}
//#endregion
export { ProcessSection as default };

//# sourceMappingURL=process-section-BwYO_FRJ.js.map