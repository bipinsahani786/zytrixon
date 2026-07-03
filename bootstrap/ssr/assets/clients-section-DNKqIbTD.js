import { a as useTheme } from "./navbar-AKB7jtts.js";
import "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/components/landing/clients-section.tsx
var CLIENTS = [
	{
		name: "Google",
		icon: "google",
		url: "https://google.com"
	},
	{
		name: "Cisco",
		icon: "cisco",
		url: "https://cisco.com"
	},
	{
		name: "Intel",
		icon: "intel",
		url: "https://intel.com"
	},
	{
		name: "Netflix",
		icon: "netflix",
		url: "https://netflix.com"
	},
	{
		name: "Meta",
		icon: "meta",
		url: "https://meta.com"
	},
	{
		name: "Stripe",
		icon: "stripe",
		url: "https://stripe.com"
	},
	{
		name: "Spotify",
		icon: "spotify",
		url: "https://spotify.com"
	},
	{
		name: "Uber",
		icon: "uber",
		url: "https://uber.com"
	},
	{
		name: "Tesla",
		icon: "tesla",
		url: "https://tesla.com"
	},
	{
		name: "Airbnb",
		icon: "airbnb",
		url: "https://airbnb.com"
	}
];
function ClientsSection() {
	const { theme } = useTheme();
	const isLight = theme === "light";
	const iconColor = isLight ? "000000" : "ffffff";
	return /* @__PURE__ */ jsxs("section", {
		className: "zy-section",
		style: {
			background: isLight ? "#f9f9f9" : "var(--zy-black)",
			paddingBottom: "20px"
		},
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "zy-section-header",
				style: {
					textAlign: "center",
					marginBottom: "40px"
				},
				children: [/* @__PURE__ */ jsx("span", {
					className: "zy-section-label",
					children: "Our Partners"
				}), /* @__PURE__ */ jsx("h2", {
					className: "zy-section-title",
					style: { fontSize: "28px" },
					children: "Trusted By Innovative Companies"
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				style: {
					position: "relative",
					width: "100%",
					overflow: "hidden",
					padding: "30px 0",
					display: "flex",
					background: "rgba(255, 255, 255, 0.02)",
					borderTop: "1px solid rgba(255, 255, 255, 0.05)",
					borderBottom: "1px solid rgba(255, 255, 255, 0.05)"
				},
				children: [
					/* @__PURE__ */ jsx("div", { style: {
						position: "absolute",
						top: 0,
						left: 0,
						width: "150px",
						height: "100%",
						background: isLight ? "linear-gradient(to right, #f9f9f9 0%, transparent 100%)" : "linear-gradient(to right, var(--zy-black) 0%, transparent 100%)",
						zIndex: 2,
						pointerEvents: "none"
					} }),
					/* @__PURE__ */ jsxs("div", {
						className: "marquee-track",
						style: { padding: "10px 0" },
						children: [/* @__PURE__ */ jsx("div", {
							style: {
								display: "flex",
								alignItems: "center",
								gap: "80px",
								paddingRight: "80px"
							},
							children: CLIENTS.map((client, i) => /* @__PURE__ */ jsx("a", {
								href: client.url,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "client-logo-link",
								style: {
									display: "block",
									transition: "all 0.4s var(--zy-ease)",
									opacity: .4
								},
								title: `Visit ${client.name}`,
								children: /* @__PURE__ */ jsx("img", {
									src: `https://cdn.simpleicons.org/${client.icon}/${iconColor}`,
									alt: client.name,
									style: {
										height: "36px",
										width: "auto",
										maxWidth: "140px",
										objectFit: "contain"
									},
									loading: "lazy"
								})
							}, `a-${i}`))
						}), /* @__PURE__ */ jsx("div", {
							style: {
								display: "flex",
								alignItems: "center",
								gap: "80px",
								paddingRight: "80px"
							},
							children: CLIENTS.map((client, i) => /* @__PURE__ */ jsx("a", {
								href: client.url,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "client-logo-link",
								style: {
									display: "block",
									transition: "all 0.4s var(--zy-ease)",
									opacity: .4
								},
								title: `Visit ${client.name}`,
								children: /* @__PURE__ */ jsx("img", {
									src: `https://cdn.simpleicons.org/${client.icon}/${iconColor}`,
									alt: client.name,
									style: {
										height: "36px",
										width: "auto",
										maxWidth: "140px",
										objectFit: "contain"
									},
									loading: "lazy"
								})
							}, `b-${i}`))
						})]
					}),
					/* @__PURE__ */ jsx("div", { style: {
						position: "absolute",
						top: 0,
						right: 0,
						width: "150px",
						height: "100%",
						background: isLight ? "linear-gradient(to left, #f9f9f9 0%, transparent 100%)" : "linear-gradient(to left, var(--zy-black) 0%, transparent 100%)",
						zIndex: 2,
						pointerEvents: "none"
					} })
				]
			}),
			/* @__PURE__ */ jsx("style", { children: `
                .client-logo-link:hover {
                    opacity: 1 !important;
                    transform: scale(1.1);
                }
            ` })
		]
	});
}
//#endregion
export { ClientsSection as default };

//# sourceMappingURL=clients-section-DNKqIbTD.js.map