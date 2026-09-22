import { o as useTheme } from "./footer-CTOChFY-.js";
import { useEffect, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/components/landing/clients-section.tsx
var CLIENTS = [
	{
		name: "Thread Ax",
		darkLogo: "/assets/clients/threadax-dark.png",
		lightLogo: "/assets/clients/threadax.png",
		height: 38,
		alt: "Thread Ax"
	},
	{
		name: "Smart India Detective",
		darkLogo: "/assets/clients/smart-india.png",
		lightLogo: "/assets/clients/smart-india-light.png",
		height: 40,
		alt: "Smart India Detective Investigation Agency"
	},
	{
		name: "S.K. Infratech",
		darkLogo: "/assets/clients/sk-infratech-dark.png",
		lightLogo: "/assets/clients/sk-infratech-light.png",
		height: 34,
		alt: "S.K. Infratech"
	},
	{
		name: "Mithila Grocery",
		darkLogo: "/assets/clients/mithila-grocery-dark.png",
		lightLogo: "/assets/clients/mithila-grocery.png",
		height: 38,
		alt: "Mithila Grocery - Supermarket & Daily Essentials"
	}
];
var REPEATED_CLIENTS = [
	...CLIENTS,
	...CLIENTS,
	...CLIENTS
];
function ClientsSection() {
	const { theme } = useTheme();
	const isLight = theme === "light";
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, []);
	const activeIsLight = mounted && isLight;
	return /* @__PURE__ */ jsxs("section", {
		className: "zy-section",
		style: {
			background: activeIsLight ? "#f9fafb" : "var(--zy-black)",
			paddingBottom: "40px",
			paddingTop: "60px",
			overflow: "hidden",
			transition: "background-color 0.3s ease"
		},
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "zy-section-header",
				style: {
					textAlign: "center",
					marginBottom: "45px"
				},
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "zy-section-label",
						children: "Our Partners"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "zy-section-title",
						style: {
							fontSize: "32px",
							color: activeIsLight ? "#0f172a" : "var(--zy-white)"
						},
						children: "Trusted By Innovative Companies"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "zy-section-subtitle",
						style: {
							margin: "12px auto 0",
							fontSize: "15px",
							color: activeIsLight ? "#64748b" : "var(--zy-gray-text)"
						},
						children: "Empowering industry leaders across technology, investigation, and infrastructure."
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				style: {
					position: "relative",
					width: "100%",
					overflow: "hidden",
					padding: "24px 0",
					display: "flex",
					background: activeIsLight ? "rgba(0, 0, 0, 0.015)" : "rgba(255, 255, 255, 0.015)",
					borderTop: activeIsLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.06)",
					borderBottom: activeIsLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.06)"
				},
				children: [
					/* @__PURE__ */ jsx("div", { style: {
						position: "absolute",
						top: 0,
						left: 0,
						width: "160px",
						height: "100%",
						background: activeIsLight ? "linear-gradient(to right, #f9fafb 0%, transparent 100%)" : "linear-gradient(to right, var(--zy-black) 0%, transparent 100%)",
						zIndex: 2,
						pointerEvents: "none"
					} }),
					/* @__PURE__ */ jsxs("div", {
						className: "marquee-track",
						style: { padding: "8px 0" },
						children: [/* @__PURE__ */ jsx("div", {
							style: {
								display: "flex",
								alignItems: "center",
								gap: "40px",
								paddingRight: "40px"
							},
							children: REPEATED_CLIENTS.map((client, i) => /* @__PURE__ */ jsx("div", {
								className: "partner-card",
								style: {
									display: "inline-flex",
									alignItems: "center",
									justifyContent: "center",
									padding: "16px 32px",
									borderRadius: "16px",
									background: activeIsLight ? "#ffffff" : "rgba(255, 255, 255, 0.03)",
									border: activeIsLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
									boxShadow: activeIsLight ? "0 4px 20px rgba(0, 0, 0, 0.04)" : "0 8px 24px rgba(0, 0, 0, 0.4)",
									minHeight: "74px",
									transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
									flexShrink: 0
								},
								title: client.name,
								children: /* @__PURE__ */ jsx("img", {
									src: activeIsLight ? client.lightLogo : client.darkLogo,
									alt: client.alt,
									style: {
										height: `${client.height}px`,
										width: "auto",
										maxWidth: "280px",
										objectFit: "contain",
										display: "block"
									},
									loading: "lazy"
								})
							}, `first-${i}`))
						}), /* @__PURE__ */ jsx("div", {
							style: {
								display: "flex",
								alignItems: "center",
								gap: "40px",
								paddingRight: "40px"
							},
							children: REPEATED_CLIENTS.map((client, i) => /* @__PURE__ */ jsx("div", {
								className: "partner-card",
								style: {
									display: "inline-flex",
									alignItems: "center",
									justifyContent: "center",
									padding: "16px 32px",
									borderRadius: "16px",
									background: activeIsLight ? "#ffffff" : "rgba(255, 255, 255, 0.03)",
									border: activeIsLight ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
									boxShadow: activeIsLight ? "0 4px 20px rgba(0, 0, 0, 0.04)" : "0 8px 24px rgba(0, 0, 0, 0.4)",
									minHeight: "74px",
									transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
									flexShrink: 0
								},
								title: client.name,
								children: /* @__PURE__ */ jsx("img", {
									src: activeIsLight ? client.lightLogo : client.darkLogo,
									alt: client.alt,
									style: {
										height: `${client.height}px`,
										width: "auto",
										maxWidth: "280px",
										objectFit: "contain",
										display: "block"
									},
									loading: "lazy"
								})
							}, `second-${i}`))
						})]
					}),
					/* @__PURE__ */ jsx("div", { style: {
						position: "absolute",
						top: 0,
						right: 0,
						width: "160px",
						height: "100%",
						background: activeIsLight ? "linear-gradient(to left, #f9fafb 0%, transparent 100%)" : "linear-gradient(to left, var(--zy-black) 0%, transparent 100%)",
						zIndex: 2,
						pointerEvents: "none"
					} })
				]
			}),
			/* @__PURE__ */ jsx("style", { children: `
                .partner-card:hover {
                    transform: translateY(-4px) scale(1.03);
                    border-color: rgba(0, 240, 255, 0.45) !important;
                    box-shadow: 0 12px 30px rgba(0, 240, 255, 0.15) !important;
                }
            ` })
		]
	});
}
//#endregion
export { ClientsSection as t };

//# sourceMappingURL=clients-section-BWWQjAl6.js.map