import { o as useTheme } from "./custom-cursor-s6CGr8GY.js";
import "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/components/ui/GradientCard.tsx
function GradientCard({ children, themeColor, style = {}, className = "" }) {
	const { theme } = useTheme();
	const isLight = theme === "light";
	return /* @__PURE__ */ jsxs("div", {
		className,
		style: {
			position: "relative",
			borderRadius: 16,
			overflow: "hidden",
			padding: 1,
			display: "flex",
			flexDirection: "column",
			...style
		},
		children: [
			/* @__PURE__ */ jsx("div", { style: {
				position: "absolute",
				top: "50%",
				left: "50%",
				width: "250%",
				height: "250%",
				background: themeColor ? `conic-gradient(from 0deg, transparent 75%, ${themeColor} 95%, ${themeColor} 100%)` : isLight ? "conic-gradient(from 0deg, transparent 75%, rgba(0,0,0,0.4) 95%, #000000 100%)" : "conic-gradient(from 0deg, transparent 75%, rgba(255,255,255,0.4) 95%, #ffffff 100%)",
				animation: "spinGradientCentered 4s linear infinite",
				zIndex: 0,
				opacity: themeColor ? .6 : .4
			} }),
			/* @__PURE__ */ jsx("div", {
				style: {
					position: "relative",
					background: "var(--zy-gray-card)",
					borderRadius: 15,
					zIndex: 1,
					height: "100%",
					width: "100%",
					display: "flex",
					flexDirection: "column"
				},
				children
			}),
			/* @__PURE__ */ jsx("style", { children: `
                @keyframes spinGradientCentered { 0% { transform: translate(-50%, -50%) rotate(0deg); } 100% { transform: translate(-50%, -50%) rotate(360deg); } }
            ` })
		]
	});
}
//#endregion
export { GradientCard as t };

//# sourceMappingURL=GradientCard-BV-j2-UN.js.map