import { Link, usePage } from "@inertiajs/react";
import { Suspense, createContext, lazy, useContext, useEffect, useRef, useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
import gsap from "gsap";
//#region resources/js/components/landing/global-watermark.tsx
function GlobalWatermark() {
	const { theme } = useTheme();
	const isLight = theme === "light";
	return /* @__PURE__ */ jsxs("div", {
		"aria-hidden": "true",
		style: {
			position: "fixed",
			inset: 0,
			pointerEvents: "none",
			zIndex: 0,
			overflow: "hidden",
			display: "flex",
			alignItems: "center",
			justifyContent: "center"
		},
		children: [/* @__PURE__ */ jsx("div", {
			style: {
				position: "absolute",
				left: "-10%",
				top: "50%",
				transform: "translateY(-50%) rotate(-90deg)",
				fontFamily: "var(--font-heading)",
				fontSize: "clamp(80px, 15vw, 200px)",
				fontWeight: 900,
				color: isLight ? "rgba(0,0,0,0.015)" : "rgba(255,255,255,0.015)",
				lineHeight: 1,
				userSelect: "none",
				letterSpacing: "0.2em"
			},
			children: "ZYTRIXON"
		}), /* @__PURE__ */ jsxs("div", {
			style: {
				position: "absolute",
				top: "5%",
				left: "-5%",
				width: "110%",
				fontFamily: "var(--font-heading)",
				fontSize: "clamp(40px, 8vw, 120px)",
				fontWeight: 900,
				color: isLight ? "rgba(0,0,0,0.015)" : "rgba(255,255,255,0.015)",
				lineHeight: 1,
				userSelect: "none",
				pointerEvents: "none",
				letterSpacing: "0.2em",
				whiteSpace: "nowrap",
				display: "flex",
				justifyContent: "space-between",
				transform: "rotate(-2deg)"
			},
			children: [
				/* @__PURE__ */ jsx("span", { children: "ZYTRIXON" }),
				/* @__PURE__ */ jsx("span", { children: "ZYTRIXON" }),
				/* @__PURE__ */ jsx("span", { children: "ZYTRIXON" }),
				/* @__PURE__ */ jsx("span", { children: "ZYTRIXON" }),
				/* @__PURE__ */ jsx("span", { children: "ZYTRIXON" })
			]
		})]
	});
}
//#endregion
//#region resources/js/components/landing/theme-provider.tsx
var LazyFloatingButtons = lazy(() => import("./whatsapp-float-DrYWXU_u.js"));
var ThemeContext = createContext({
	theme: "dark",
	toggleTheme: () => {}
});
function useTheme() {
	return useContext(ThemeContext);
}
function ThemeProvider({ children }) {
	const [theme, setTheme] = useState(() => {
		if (typeof window !== "undefined") return localStorage.getItem("zy-theme") || "dark";
		return "dark";
	});
	useEffect(() => {
		document.body.classList.toggle("light", theme === "light");
		localStorage.setItem("zy-theme", theme);
	}, [theme]);
	const toggleTheme = () => setTheme((t) => t === "dark" ? "light" : "dark");
	return /* @__PURE__ */ jsxs(ThemeContext.Provider, {
		value: {
			theme,
			toggleTheme
		},
		children: [
			/* @__PURE__ */ jsx(GlobalWatermark, {}),
			/* @__PURE__ */ jsx(Suspense, {
				fallback: null,
				children: /* @__PURE__ */ jsx(LazyFloatingButtons, {})
			}),
			children
		]
	});
}
//#endregion
//#region resources/js/components/ui/logo.tsx
function Logo({ className, style }) {
	return /* @__PURE__ */ jsx("svg", {
		className,
		style,
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "288 232 1152 927",
		children: /* @__PURE__ */ jsxs("g", {
			fill: "currentColor",
			strokeWidth: "0",
			children: [
				/* @__PURE__ */ jsx("path", { d: "M765 378.1c0 .9-5.4 8.8-11.9 17.6l-5.5 7.3h-57.3c-33.8 0-57.3-.4-57.3-.9s1.2-2 2.8-3.3c1.5-1.3 5.9-6.6 9.9-11.8l7.2-9.5h56c30.9 0 56.1.3 56.1.6m333.5 10.3c.8 12.8.4 14.6-3.6 19.6-4.3 5.3-16.9 21.2-21.1 26.7-2.1 2.6-9 11.6-15.5 19.9s-13.9 17.7-16.4 21c-2.5 3.2-15.3 19.6-28.4 36.4s-25.2 32.3-26.9 34.5-5.7 7.2-8.8 11.2c-3.2 3.9-8 10-10.6 13.5s-22.4 28.8-43.8 56.3c-21.5 27.5-42.5 54.5-46.8 60-4.2 5.5-10.5 13.5-13.9 17.8s-7.3 9.4-8.7 11.2c-2.2 2.8-9.9 12.8-20.5 26.4-21.3 27.4-54.2 69.5-66 84.6-8.1 10.4-15.3 19.3-15.9 19.7s-27.3.8-59.3.8H634v-63l3.8-4.3c4-4.4 12.3-14.9 36.2-45.7 7.9-10.2 18.5-23.7 23.5-30 11.7-14.7 76.4-97.2 143.5-183 10-12.7 57.3-73.1 66.3-84.5 4.3-5.5 11.5-14.7 16-20.5 4.4-5.8 13.2-16.9 19.5-24.7l11.4-14.3 70.1-.3c38.6-.1 70.9-.3 71.8-.5 1.4-.2 1.8 1.5 2.4 11.2m-.1 394.5c.5.7-6.5 10.4-21.7 30-2.3 2.9-5.3 6.8-6.7 8.6-9.2 12-19.1 24.3-20.3 25.3-1.6 1.4-119 1.8-119.4.5-.2-.4 2.8-4.7 6.5-9.4 3.7-4.8 14.2-18.3 23.3-30 9.2-11.8 17.7-22.4 18.8-23.7l2.2-2.2h58.4c32.1 0 58.6.4 58.9.9m29.6 105.8c21.6 5.9 36 24.4 36 46 0 14.1-4.3 24.6-14 34.4-10.1 10.2-22 14.9-37.7 14.9-10.6 0-17.1-1.4-25.8-5.5-12.1-5.8-20.7-15.9-24.7-28.8-1.7-5.7-2-8.7-1.6-17.2.4-9.2.8-11 4.1-17.9 10.6-22.3 37.4-33.2 63.7-25.9m-599.1 8v8.8L505.5 933l-23.3 27.5 24.4.3 24.4.2v21h-85v-16.5l23-27.3c12.7-15 23-27.4 23-27.7s-10.1-.5-22.5-.5H447v-10.3c0-5.7.3-10.7.7-11 .3-.4 18.8-.7 41-.7H529zm57 9.5c5.8 9.8 10.8 17.8 11.1 17.8s5.4-8.1 11.3-18l10.8-18h13c7.1 0 12.9.2 12.9.6 0 .3-8.1 14.1-18 30.8l-18 30.2V982h-27v-34.2l-17-28.3c-9.3-15.5-17.3-29-17.6-29.9-.6-1.5.8-1.6 13.7-1.4l14.3.3zM744 899v11h-28v72h-28v-72h-28v-22h84zm87-8.2c11.4 3.8 20.3 12.4 23 22.2 1.5 5.4 1.2 16.2-.7 22-1.8 5.5-8.2 13.5-12.7 15.9-1.4.8-2.6 1.8-2.6 2.2s4.3 7 9.5 14.6l9.6 13.8-13.8.3c-7.5.1-14.2.1-14.8-.2-.6-.2-4.6-5.6-9-12l-7.9-11.6H798v24h-28v-46.3c0-25.5.3-46.7.8-47.1.4-.4 12.6-.6 27.2-.4 23.9.4 27.1.7 33 2.6m83 44.2v47h-28v-46.3c0-25.5.3-46.7.7-47 .3-.4 6.6-.7 14-.7H914zm66.1-33.8c5.1 7.3 9.3 13.4 9.3 13.5.1.1 4.1-5.6 9-12.8 4.8-7.2 9.3-13.2 10-13.5.6-.2 7.4-.3 15-.2l13.8.3-16.2 22.4c-8.9 12.3-15.9 22.8-15.7 23.5.3.6 6.9 10.1 14.8 21.1 8 11 15.5 21.5 16.7 23.2l2.3 3.3h-31.6l-8.9-13.5c-4.9-7.4-9.2-13.5-9.6-13.5s-4.7 6.1-9.6 13.5l-8.9 13.5h-15.2c-8.4 0-15.3-.3-15.3-.6s7.5-11 16.6-23.6l16.6-23-1.9-2.7c-7.5-10.2-30.3-43-30.3-43.5 0-.3 6.7-.6 14.9-.6h15zm256.4 10.9 20 24.2.3-24.2.2-24.1h27v94h-22.8l-19.8-24-19.9-24-.3 24-.2 24h-27v-46.3c0-25.5.3-46.7.7-47 .3-.4 5.4-.7 11.3-.7h10.6z" }),
				/* @__PURE__ */ jsx("path", { d: "M1104.2 910.4c-6.1 2-10.3 5.6-13.7 11.7-2.5 4.6-2.9 6.5-2.9 12.9-.1 15.7 9.4 26.1 23.9 26.2 7.8 0 13.8-2.5 18.4-7.7 4.8-5.5 6.3-9.9 6.3-18.1 0-11.2-4.9-19.7-13.9-23.9-4.8-2.3-12.9-2.8-18.1-1.1M798 922.9V936h10.3c8.4 0 10.8-.4 13.4-2 5.7-3.5 7.7-9.8 4.9-16.3-2.3-5.7-5.7-7.1-17.8-7.5l-10.8-.4z" }),
				/* @__PURE__ */ jsx("path", {
					fill: "#d4d4d4",
					d: "M653.8 377.7c.7.3 1.6.2 1.9-.1.4-.3-.2-.6-1.3-.5-1.1 0-1.4.3-.6.6m441 0c.6.2 1.8.2 2.5 0 .6-.3.1-.5-1.3-.5s-1.9.2-1.2.5m3.5 17.8c0 3.8.2 5.3.4 3.2.2-2 .2-5.2 0-7-.2-1.7-.4-.1-.4 3.8m-155.4-3.8c-1.3 1.6-1.2 1.7.4.4.9-.7 1.7-1.5 1.7-1.7 0-.8-.8-.3-2.1 1.3M635 399.5c-1.3 1.4-2.2 2.7-1.9 2.9.2.2 1.4-1 2.7-2.5 2.9-3.6 2.4-3.8-.8-.4m112 2.5c-.9.6-1 1-.3 1 .6 0 1.5-.5 1.8-1 .8-1.2.4-1.2-1.5 0m-84.7.7c14.7.2 38.7.2 53.5 0 14.7-.1 2.6-.2-26.8-.2s-41.5.1-26.7.2m269.6 3c-1.3 1.6-1.2 1.7.4.4.9-.7 1.7-1.5 1.7-1.7 0-.8-.8-.3-2.1 1.3m164 0c-1.3 1.6-1.2 1.7.4.4.9-.7 1.7-1.5 1.7-1.7 0-.8-.8-.3-2.1 1.3m-7 9c-1.3 1.6-1.2 1.7.4.4.9-.7 1.7-1.5 1.7-1.7 0-.8-.8-.3-2.1 1.3m-50 64c-1.3 1.6-1.2 1.7.4.4.9-.7 1.7-1.5 1.7-1.7 0-.8-.8-.3-2.1 1.3m-15 19c-1.3 1.6-1.2 1.7.4.4.9-.7 1.7-1.5 1.7-1.7 0-.8-.8-.3-2.1 1.3m-7 9c-1.3 1.6-1.2 1.7.4.4.9-.7 1.7-1.5 1.7-1.7 0-.8-.8-.3-2.1 1.3m-172 10c-1.3 1.6-1.2 1.7.4.4.9-.7 1.7-1.5 1.7-1.7 0-.8-.8-.3-2.1 1.3m158 8c-1.3 1.6-1.2 1.7.4.4.9-.7 1.7-1.5 1.7-1.7 0-.8-.8-.3-2.1 1.3m-39 50c-1.3 1.6-1.2 1.7.4.4.9-.7 1.7-1.5 1.7-1.7 0-.8-.8-.3-2.1 1.3m-98.5 126.5-1.9 2.3 2.3-1.9c2.1-1.8 2.7-2.6 1.9-2.6-.2 0-1.2 1-2.3 2.2m-7.5 9.5c-1.3 1.6-1.2 1.7.4.4s2.1-2.1 1.3-2.1c-.2 0-1 .8-1.7 1.7m-169 5c-1.3 1.6-1.2 1.7.4.4.9-.7 1.7-1.5 1.7-1.7 0-.8-.8-.3-2.1 1.3m162 4c-1.3 1.6-1.2 1.7.4.4.9-.7 1.7-1.5 1.7-1.7 0-.8-.8-.3-2.1 1.3m-166 1c-1.3 1.6-1.2 1.7.4.4.9-.7 1.7-1.5 1.7-1.7 0-.8-.8-.3-2.1 1.3m159 8c-1.3 1.6-1.2 1.7.4.4.9-.7 1.7-1.5 1.7-1.7 0-.8-.8-.3-2.1 1.3m-7 9c-1.3 1.6-1.2 1.7.4.4.9-.7 1.7-1.5 1.7-1.7 0-.8-.8-.3-2.1 1.3m-166 1c-1.3 1.6-1.2 1.7.4.4.9-.7 1.7-1.5 1.7-1.7 0-.8-.8-.3-2.1 1.3m159 8c-1.3 1.6-1.2 1.7.4.4.9-.7 1.7-1.5 1.7-1.7 0-.8-.8-.3-2.1 1.3m-166 1c-1.3 1.6-1.2 1.7.4.4.9-.7 1.7-1.5 1.7-1.7 0-.8-.8-.3-2.1 1.3m-26.5 33.5-2.9 3.3 3.3-2.9c3-2.8 3.7-3.6 2.9-3.6-.2 0-1.6 1.5-3.3 3.2m364.1 1.5c54.2.7 97.3.7 96.8 0-.2-.4-26.8-.6-59.1-.5-32.3.2-49.2.4-37.7.5m-26.6 6c-1.3 1.6-1.2 1.7.4.4s2.1-2.1 1.3-2.1c-.2 0-1 .8-1.7 1.7m106 18c-1.3 1.6-1.2 1.7.4.4.9-.7 1.7-1.5 1.7-1.7 0-.8-.8-.3-2.1 1.3m-7 9c-1.3 1.6-1.2 1.7.4.4.9-.7 1.7-1.5 1.7-1.7 0-.8-.8-.3-2.1 1.3m-7 9c-1.3 1.6-1.2 1.7.4.4.9-.7 1.7-1.5 1.7-1.7 0-.8-.8-.3-2.1 1.3m43.4 62c.9.2 2.5.2 3.5 0 .9-.3.1-.5-1.8-.5s-2.7.2-1.7.5m-662.9 12.8c0 6 .1 8.4.3 5.2s.2-8.1 0-11-.3-.3-.3 5.8m323.1 36c0 25.8.1 36.6.2 23.8.2-12.7.2-33.9 0-47-.1-13.1-.2-2.7-.2 23.2m116 0c0 25.8.1 36.6.2 23.8.2-12.7.2-33.9 0-47-.1-13.1-.2-2.7-.2 23.2m308 0c0 25.8.1 36.6.2 23.8.2-12.7.2-33.9 0-47-.1-13.1-.2-2.7-.2 23.2m-45.5-35.1c0 .2.8 1 1.8 1.7 1.5 1.3 1.6 1.2.3-.4s-2.1-2.1-2.1-1.3M715.5 946c0 20.1.1 28.3.2 18.2.2-10 .2-26.4 0-36.5-.1-10-.2-1.8-.2 18.3m420.6-13.4c0 1.1.3 1.4.6.6.3-.7.2-1.6-.1-1.9-.3-.4-.6.2-.5 1.3m-334.8 4.1c2 .2 5.4.2 7.5 0 2-.2.3-.4-3.8-.4s-5.8.2-3.7.4m270.7 31.7c0 .2.8 1 1.8 1.7 1.5 1.3 1.6 1.2.3-.4s-2.1-2.1-2.1-1.3"
				}),
				/* @__PURE__ */ jsx("path", {
					fill: "#aaa",
					d: "M762 377.4c0 .2.7.7 1.6 1 .8.3 1.2.2.9-.4-.6-1-2.5-1.4-2.5-.6m-19.2 25.3c.6.2 1.8.2 2.5 0 .6-.3.1-.5-1.3-.5s-1.9.2-1.2.5M634.4 816.5c0 15.9.2 22.3.3 14.2.2-8.2.2-21.2 0-29-.1-7.8-.3-1.2-.3 14.8m423.5 19.2c-1.3 1.6-1.2 1.7.4.4.9-.7 1.7-1.5 1.7-1.7 0-.8-.8-.3-2.1 1.3m-8 10c-1.3 1.6-1.2 1.7.4.4.9-.7 1.7-1.5 1.7-1.7 0-.8-.8-.3-2.1 1.3m-119.4.4c-.4.6-.5 1.2-.2 1.5.2.3.7-.2 1-1.1.7-1.7.1-2-.8-.4m-442.8 42.6 40.2.3.4 8.3.3 8.2V897l-.1-8.5h-81zm66.1 0c3.9.2 10.5.2 14.5 0 3.9-.1.7-.3-7.3-.3s-11.2.2-7.2.3m64.9 0c-.3.5 5.5.8 12.8.8s13.1-.3 12.8-.8c-.2-.4-6-.7-12.8-.7s-12.6.3-12.8.7m62.1 0c11.7.2 30.6.2 42 0 11.4-.1 1.8-.2-21.3-.2s-32.4.1-20.7.2m101.5 0c6.4.2 17 .2 23.5 0 6.4-.1 1.1-.3-11.8-.3s-18.2.2-11.7.3m117.7 0 13 .4.3 46.4.2 46.5v-93.5h-13.3l-13.2-.1zm41 0c0 .5 4.6.7 10.2.5 18.7-.4 20.5-.8 5.1-1-8.4-.1-15.3.1-15.3.5m73.8 0c3.9.2 10.5.2 14.5 0 3.9-.1.7-.3-7.3-.3s-11.2.2-7.2.3m185.5 0c3.2.2 8.1.2 11 0s.3-.3-5.8-.3c-6 0-8.4.1-5.2.3m57.1.6c-.2.7-.3 11.8-.1 24.7l.2 23.5.3-24.2.2-24.2 12.8-.4 12.7-.3-12.8-.2c-9.6-.1-12.9.1-13.3 1.1M845.5 900c1 1.1 2 2 2.3 2s-.3-.9-1.3-2-2-2-2.3-2 .3.9 1.3 2m227.4 1.7c-1.3 1.6-1.2 1.7.4.4s2.1-2.1 1.3-2.1c-.2 0-1 .8-1.7 1.7M688.5 946c0 20.1.1 28.3.2 18.2.2-10 .2-26.4 0-36.5-.1-10-.2-1.8-.2 18.3m108.9-22.5c0 7.7.2 10.7.3 6.7.2-4 .2-10.3 0-14s-.3-.4-.3 7.3m15.4 13.2c.7.3 1.6.2 1.9-.1.4-.3-.2-.6-1.3-.5-1.1 0-1.4.3-.6.6M582.4 965c0 9.6.2 13.6.3 8.7.2-4.8.2-12.6 0-17.5-.1-4.8-.3-.8-.3 8.8m215-6.7c-.2.7-.3 6.5-.1 12.8l.3 11.4.2-12.2.2-12.2 7.3-.4 7.2-.3-7.3-.2c-5.2-.1-7.4.2-7.8 1.1m-267 13.2c0 6 .1 8.4.3 5.2s.2-8.1 0-11-.3-.3-.3 5.8m-84 2c0 4.9.1 7.1.3 4.8s.2-6.4 0-9-.3-.8-.3 4.2"
				}),
				/* @__PURE__ */ jsx("path", { d: "M646.1 388.1c-4.1 5.5-8.3 10.5-9.3 11s-1.8 1.3-1.8 1.8 25.2.9 56 1l55.9.2 8.6-11.5c4.7-6.3 8.5-11.7 8.5-12s-24.9-.6-55.3-.6h-55.2zm291.2 12.6c-15.8 20.1-58.9 75-102.2 130.3-7.9 10.2-17 21.7-20 25.6-3.1 3.9-7.7 9.7-10.2 13-4.5 5.8-17.7 22.7-57.5 73.4-26.8 34.2-87.3 111.3-100.1 127.7-5.7 7.3-10.8 13.5-11.3 13.8-.6.4-1 12.6-1 31.6V847h115.9l7.4-9.3c4-5 18.4-23.4 31.8-40.7 13.5-17.3 42.3-54.2 63.9-82 21.7-27.8 59-75.7 83-106.5s67.7-86.8 97.1-124.5 55.8-71.6 58.7-75.4l5.3-6.8-.3-11.7-.3-11.6-71.1-.3-71.1-.2zm25 406c-9.8 12.6-20.9 26.7-24.7 31.5l-6.8 8.8h118l18.9-24.3c27.4-35 29.3-37.6 29.3-38.2 0-.3-26.3-.5-58.4-.5h-58.5zm136 81.8c-13.6 3-27.1 13.2-33 25.2-10.6 21.3-3.9 48.1 15.2 60.8 9.2 6.1 18.2 8.8 30 8.9s18.6-1.4 27.7-6.1c30.3-15.7 34.1-58.8 7.1-79.5-12.7-9.6-29.9-13-47-9.3m23.5 22.1c8.6 3.5 14.2 12.1 15 22.5.8 12.1-4.5 22-14.2 26.5-12.9 6-28 .3-33.6-12.8-1.9-4.4-2.2-6.5-1.8-13.3.3-4.7 1.1-9.3 2.1-11.1 2.4-4.5 7.5-9.4 12.2-11.5 5-2.3 15.2-2.5 20.3-.3M448 899.5V910l22.6.2 22.5.3-23 27.4-23.1 27.3V982h83v-21h-24c-13.2 0-24-.3-24-.6s10.3-12.8 23-27.7l23-27.2V889h-80zm100-9.9c0 .3 7.9 13.7 17.5 29.7l17.5 29.2V982h26v-33.6l17.5-29.3c9.6-16.2 17.5-29.5 17.5-29.7s-5.6-.4-12.5-.4H619l-10.6 18c-5.9 9.9-11 18-11.3 18s-5.5-8.1-11.4-18l-10.8-18h-13.5c-7.3 0-13.4.3-13.4.6m112.2 9.6.3 10.3 14.3.3 14.2.3V982h26v-72h28v-21h-83.1zM771 935.5V982h26v-25h14.6l8.5 12.5 8.4 12.5h13.8c7.5 0 13.7-.2 13.7-.5 0-.4-4.1-6.5-9.1-13.8-9.7-14-10.7-15.7-9.1-15.7 2.5 0 12.1-10.2 14.3-15.2 3.1-7.2 3.3-20.1.2-26.9-2.8-6.3-8.7-12.5-14.5-15.5-9.4-4.8-14.3-5.4-41.5-5.4H771zm51.3-23.6c4.2 2.6 5.7 5.8 5.7 12.1 0 9.5-5.9 13-21.9 13H797v-28.3l10.9.5c8.8.4 11.6 1 14.4 2.7m64.7 23.6V982h26v-93h-26zm55.6-45.3c.4.7 7.6 11 16 23l15.2 21.6-13.5 18.9c-7.5 10.3-15.1 20.9-17 23.5l-3.5 4.8h29.9l9.3-14c5.1-7.7 9.6-14 10-14s4.9 6.3 10 14l9.3 14h14.9c11.7 0 14.8-.3 14.2-1.3-.4-.6-8.1-11.5-17.1-24-10-13.9-16.1-23.3-15.6-24 .6-1 13-18.3 28-39l3.5-4.8-14.3.3-14.4.3-8.5 12.4c-4.7 6.9-8.9 12.5-9.4 12.5-.5.1-4.9-5.6-9.8-12.7l-8.9-12.7h-14.5c-11.3 0-14.4.3-13.8 1.2m252.4 45.3V982h26l.2-24.4.3-24.5 20.2 24.5L1262 982h21v-93h-25l-.2 24.7-.3 24.6-20.4-24.6-20.4-24.7H1195z" }),
				/* @__PURE__ */ jsx("path", {
					fill: "#555",
					d: "m638.4 397.2-1.9 2.3 2.3-1.9c2.1-1.8 2.7-2.6 1.9-2.6-.2 0-1.2 1-2.3 2.2m.4 4.5c1.2.2 3 .2 4 0 .9-.3-.1-.5-2.3-.4-2.2 0-3 .2-1.7.4m-1.9 381-2.4 2.8 2.8-2.4c1.5-1.4 2.7-2.6 2.7-2.8 0-.8-.8-.1-3.1 2.4m364.6 1c54.3.7 96.3.7 95.8 0-.2-.4-26.6-.6-58.6-.5-32 .2-48.7.4-37.2.5m-59.7 64c1.2.2 3.2.2 4.5 0 1.2-.2.2-.4-2.3-.4s-3.5.2-2.2.4M743.4 899c0 5.8.1 8.1.3 5.2.2-2.8.2-7.6 0-10.5-.2-2.8-.3-.5-.3 5.3m540.1 36.5c0 25.8.1 36.6.2 23.8.2-12.7.2-33.9 0-47-.1-13.1-.2-2.7-.2 23.2m-482.2-25.8c2.6.2 6.7.2 9 0s.2-.3-4.8-.3c-4.9 0-6.8.1-4.2.3m44.1 36.5-1.9 2.3 2.3-1.9c1.2-1.1 2.2-2.1 2.2-2.3 0-.8-.8-.2-2.6 1.9m304 23-1.9 2.3 2.3-1.9c2.1-1.8 2.7-2.6 1.9-2.6-.2 0-1.2 1-2.3 2.2"
				}),
				/* @__PURE__ */ jsx("path", {
					fill: "gray",
					d: "M667.3 847.7c15.2.2 40.2.2 55.5 0 15.2-.1 2.7-.2-27.8-.2s-43 .1-27.7.2m267.5 0c1.2.2 3 .2 4 0 .9-.3-.1-.5-2.3-.4-2.2 0-3 .2-1.7.4m38 0c13.8.2 36.6.2 50.5 0 13.8-.1 2.5-.2-25.3-.2s-39.1.1-25.2.2"
				})
			]
		})
	});
}
//#endregion
//#region resources/js/components/landing/navbar.tsx
var NAV_LINKS = [
	{
		label: "HOME",
		href: "/"
	},
	{
		label: "SERVICES",
		href: "/services"
	},
	{
		label: "WORK",
		href: "/portfolio"
	},
	{
		label: "ABOUT",
		href: "/about"
	},
	{
		label: "TEAM",
		href: "/team"
	},
	{
		label: "BLOG",
		href: "/blog"
	},
	{
		label: "CONTACT",
		href: "/contact"
	}
];
function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);
	const [mounted, setMounted] = useState(false);
	const navRef = useRef(null);
	const { theme, toggleTheme } = useTheme();
	const { url } = usePage();
	const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
	useEffect(() => {
		setMounted(true);
		const handleScroll = () => {
			setScrolled(window.scrollY > 60);
		};
		window.addEventListener("scroll", handleScroll, { passive: true });
		gsap.fromTo(navRef.current, {
			y: -80,
			opacity: 0
		}, {
			y: 0,
			opacity: 1,
			duration: .8,
			ease: "power3.out"
		});
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	useEffect(() => {
		if (mobileOpen) document.body.style.overflow = "hidden";
		else document.body.style.overflow = "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [mobileOpen]);
	useEffect(() => {
		const handleClickOutside = (e) => {
			if (servicesDropdownOpen && navRef.current && !navRef.current.contains(e.target)) setServicesDropdownOpen(false);
		};
		document.addEventListener("touchstart", handleClickOutside);
		return () => document.removeEventListener("touchstart", handleClickOutside);
	}, [servicesDropdownOpen]);
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsxs("nav", {
		ref: navRef,
		className: `navbar ${scrolled ? "scrolled" : ""} ${mobileOpen ? "menu-open" : ""}`,
		style: { opacity: 0 },
		children: [
			/* @__PURE__ */ jsx(Link, {
				href: "/",
				className: "navbar-logo",
				"aria-label": "Zytrixon Home",
				style: {
					display: "flex",
					alignItems: "center"
				},
				children: /* @__PURE__ */ jsx(Logo, { className: "h-[56px] w-auto text-[var(--zy-white)]" })
			}),
			/* @__PURE__ */ jsx("ul", {
				className: "navbar-links",
				children: NAV_LINKS.map((link) => {
					if (link.label === "SERVICES") {
						const isServicesActive = url.startsWith("/services");
						return /* @__PURE__ */ jsxs("li", {
							className: "nav-dropdown-wrapper",
							style: { position: "relative" },
							onMouseEnter: () => setServicesDropdownOpen(true),
							onMouseLeave: () => setServicesDropdownOpen(false),
							children: [
								/* @__PURE__ */ jsxs(Link, {
									href: link.href,
									className: `navbar-link ${isServicesActive ? "active" : ""}`,
									style: {
										display: "inline-flex",
										alignItems: "center",
										gap: 4,
										color: isServicesActive ? "var(--zy-blue)" : void 0
									},
									onClick: (e) => {
										if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) {
											if (!servicesDropdownOpen) {
												e.preventDefault();
												setServicesDropdownOpen(true);
											}
										}
									},
									children: [link.label, /* @__PURE__ */ jsx("svg", {
										width: "12",
										height: "12",
										viewBox: "0 0 24 24",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "2",
										strokeLinecap: "round",
										strokeLinejoin: "round",
										style: {
											transform: servicesDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
											transition: "transform 0.3s"
										},
										children: /* @__PURE__ */ jsx("polyline", { points: "6 9 12 15 18 9" })
									})]
								}),
								/* @__PURE__ */ jsx("div", {
									className: "nav-dropdown-content",
									style: {
										position: "absolute",
										top: "100%",
										left: "50%",
										transform: "translateX(-50%)",
										width: 260,
										background: "var(--zy-gray-card)",
										borderRadius: 12,
										border: "1px solid var(--zy-gray-border)",
										padding: 16,
										display: "flex",
										flexDirection: "column",
										gap: 8,
										marginTop: servicesDropdownOpen ? 8 : 16,
										opacity: servicesDropdownOpen ? 1 : 0,
										visibility: servicesDropdownOpen ? "visible" : "hidden",
										transition: "all 0.3s ease",
										boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
										zIndex: 100
									},
									children: [
										{
											title: "Web Development",
											slug: "web-development"
										},
										{
											title: "App Development",
											slug: "app-development"
										},
										{
											title: "IoT Solutions",
											slug: "iot-solutions"
										},
										{
											title: "AI & Automation",
											slug: "ai-automation"
										},
										{
											title: "Custom Software",
											slug: "custom-software"
										},
										{
											title: "Digital Marketing",
											slug: "digital-marketing"
										}
									].map((svc) => /* @__PURE__ */ jsx(Link, {
										href: `/services/${svc.slug}`,
										style: {
											padding: "12px 16px",
											borderRadius: 8,
											color: "var(--zy-white)",
											textDecoration: "none",
											fontSize: 14,
											fontWeight: 600,
											transition: "all 0.2s",
											background: "transparent"
										},
										onMouseEnter: (e) => {
											e.currentTarget.style.background = "var(--zy-gray-dark)";
											e.currentTarget.style.color = "var(--zy-blue)";
										},
										onMouseLeave: (e) => {
											e.currentTarget.style.background = "transparent";
											e.currentTarget.style.color = "var(--zy-white)";
										},
										onClick: () => setServicesDropdownOpen(false),
										children: svc.title
									}, svc.slug))
								}),
								/* @__PURE__ */ jsx("style", { children: `
                                        @media (hover: hover) and (pointer: fine) {
                                            .nav-dropdown-wrapper:hover .nav-dropdown-content {
                                                opacity: 1 !important;
                                                visibility: visible !important;
                                                margin-top: 8px !important;
                                            }
                                            .nav-dropdown-wrapper:hover svg {
                                                transform: rotate(180deg) !important;
                                            }
                                        }
                                    ` })
							]
						}, link.href);
					}
					const isActive = url === link.href || link.href !== "/" && url.startsWith(link.href);
					return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
						href: link.href,
						className: `navbar-link ${isActive ? "active" : ""}`,
						style: isActive ? { color: "var(--zy-blue)" } : {},
						children: link.label
					}) }, link.href);
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "header-actions",
				style: {
					display: "flex",
					alignItems: "center",
					gap: 16
				},
				children: [
					/* @__PURE__ */ jsx("button", {
						onClick: toggleTheme,
						"aria-label": "Toggle theme",
						className: "theme-toggle-btn",
						style: {
							background: "none",
							border: "1px solid var(--zy-gray-border)",
							width: 38,
							height: 38,
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							color: "var(--zy-white)",
							cursor: "pointer",
							transition: "all 0.3s var(--zy-ease)"
						},
						children: !mounted || theme === "dark" ? /* @__PURE__ */ jsxs("svg", {
							width: "16",
							height: "16",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: "2",
							children: [
								/* @__PURE__ */ jsx("circle", {
									cx: "12",
									cy: "12",
									r: "5"
								}),
								/* @__PURE__ */ jsx("line", {
									x1: "12",
									y1: "1",
									x2: "12",
									y2: "3"
								}),
								/* @__PURE__ */ jsx("line", {
									x1: "12",
									y1: "21",
									x2: "12",
									y2: "23"
								}),
								/* @__PURE__ */ jsx("line", {
									x1: "4.22",
									y1: "4.22",
									x2: "5.64",
									y2: "5.64"
								}),
								/* @__PURE__ */ jsx("line", {
									x1: "18.36",
									y1: "18.36",
									x2: "19.78",
									y2: "19.78"
								}),
								/* @__PURE__ */ jsx("line", {
									x1: "1",
									y1: "12",
									x2: "3",
									y2: "12"
								}),
								/* @__PURE__ */ jsx("line", {
									x1: "21",
									y1: "12",
									x2: "23",
									y2: "12"
								}),
								/* @__PURE__ */ jsx("line", {
									x1: "4.22",
									y1: "19.78",
									x2: "5.64",
									y2: "18.36"
								}),
								/* @__PURE__ */ jsx("line", {
									x1: "18.36",
									y1: "5.64",
									x2: "19.78",
									y2: "4.22"
								})
							]
						}) : /* @__PURE__ */ jsx("svg", {
							width: "16",
							height: "16",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: "2",
							children: /* @__PURE__ */ jsx("path", { d: "M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" })
						})
					}),
					/* @__PURE__ */ jsx("a", {
						href: "tel:+917049711475",
						"aria-label": "Call us",
						className: "call-btn",
						style: {
							width: 38,
							height: 38,
							border: "1px solid var(--zy-gray-border)",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							color: "var(--zy-white)",
							textDecoration: "none",
							transition: "all 0.3s var(--zy-ease)"
						},
						children: /* @__PURE__ */ jsx("svg", {
							width: "16",
							height: "16",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: "2",
							children: /* @__PURE__ */ jsx("path", { d: "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" })
						})
					}),
					/* @__PURE__ */ jsxs(Link, {
						href: "/contact",
						className: "magnetic-btn",
						style: {
							padding: "10px 24px",
							fontSize: 12
						},
						children: ["Get a Quote", /* @__PURE__ */ jsx("svg", {
							className: "btn-arrow",
							width: "14",
							height: "14",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: "2.5",
							children: /* @__PURE__ */ jsx("path", { d: "M5 12h14M12 5l7 7-7 7" })
						})]
					})
				]
			}),
			/* @__PURE__ */ jsxs("button", {
				className: `mobile-nav-toggle ${mobileOpen ? "open" : ""}`,
				onClick: () => setMobileOpen(!mobileOpen),
				"aria-label": "Toggle navigation",
				children: [
					/* @__PURE__ */ jsx("span", {}),
					/* @__PURE__ */ jsx("span", {}),
					/* @__PURE__ */ jsx("span", {})
				]
			})
		]
	}), /* @__PURE__ */ jsxs("div", {
		className: `mobile-nav-panel ${mobileOpen ? "open" : ""}`,
		"data-lenis-prevent": "true",
		children: [/* @__PURE__ */ jsx("div", {
			className: "mobile-links-container",
			children: NAV_LINKS.map((link, idx) => {
				const isActive = url === link.href || link.href !== "/" && url.startsWith(link.href);
				return /* @__PURE__ */ jsxs(Link, {
					href: link.href,
					className: `mobile-nav-link ${isActive ? "active" : ""}`,
					style: isActive ? { color: "var(--zy-blue)" } : {},
					onClick: () => setMobileOpen(false),
					children: [/* @__PURE__ */ jsxs("span", {
						className: "link-num",
						children: [
							"0",
							idx + 1,
							"."
						]
					}), link.label]
				}, link.href);
			})
		}), /* @__PURE__ */ jsxs("div", {
			className: "mobile-nav-footer",
			children: [
				/* @__PURE__ */ jsx("button", {
					onClick: () => {
						toggleTheme();
					},
					style: {
						background: "none",
						border: "1px solid var(--zy-gray-border)",
						padding: "10px 24px",
						borderRadius: "30px",
						color: "var(--zy-white)",
						fontFamily: "var(--font-heading)",
						fontSize: 12,
						fontWeight: 600,
						letterSpacing: "0.1em",
						textTransform: "uppercase",
						cursor: "pointer",
						display: "flex",
						alignItems: "center",
						gap: 8,
						transition: "all 0.3s var(--zy-ease)"
					},
					children: !mounted || theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"
				}),
				/* @__PURE__ */ jsx(Link, {
					href: "/contact",
					className: "magnetic-btn",
					style: {
						borderRadius: "30px",
						padding: "14px 40px",
						fontSize: 13
					},
					onClick: () => setMobileOpen(false),
					children: "Get a Quote"
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mobile-footer-contacts",
					children: [/* @__PURE__ */ jsx("a", {
						href: "mailto:zytrixon@gmail.com",
						children: "zytrixon@gmail.com"
					}), /* @__PURE__ */ jsx("a", {
						href: "tel:+917049711475",
						children: "+91 70497 11475"
					})]
				})
			]
		})]
	})] });
}
//#endregion
//#region resources/js/components/landing/footer.tsx
var FOOTER_LINKS = {
	services: [
		{
			label: "Web Development",
			href: "/services/web-development"
		},
		{
			label: "App Development",
			href: "/services/app-development"
		},
		{
			label: "IoT Solutions",
			href: "/services/iot-solutions"
		},
		{
			label: "AI & Automation",
			href: "/services/ai-automation"
		},
		{
			label: "Custom Software",
			href: "/services/custom-software"
		},
		{
			label: "Digital Marketing",
			href: "/services/seo-digital-marketing"
		}
	],
	locations: [
		{
			label: "Web Development in Patna",
			href: "/services/web-development/in/patna"
		},
		{
			label: "App Development in Patna",
			href: "/services/app-development/in/patna"
		},
		{
			label: "AI & Automation in Patna",
			href: "/services/ai-automation/in/patna"
		},
		{
			label: "Digital Marketing in Patna",
			href: "/services/seo-digital-marketing/in/patna"
		},
		{
			label: "Custom Software in Bihar",
			href: "/services/custom-software/in/bihar"
		}
	],
	company: [
		{
			label: "About Us",
			href: "/about"
		},
		{
			label: "Our Process",
			href: "/process"
		},
		{
			label: "Portfolio",
			href: "/work"
		},
		{
			label: "Blog",
			href: "/blog"
		},
		{
			label: "Careers",
			href: "/careers"
		}
	],
	legal: [
		{
			label: "Privacy Policy",
			href: "/privacy-policy"
		},
		{
			label: "Terms of Service",
			href: "/terms-and-conditions"
		},
		{
			label: "Sitemap",
			href: "/sitemap.xml"
		}
	]
};
var SOCIALS = [
	{
		label: "Facebook",
		href: "https://www.facebook.com/share/1Jdf9MjT4H/",
		icon: /* @__PURE__ */ jsx("svg", {
			width: "18",
			height: "18",
			viewBox: "0 0 24 24",
			fill: "currentColor",
			children: /* @__PURE__ */ jsx("path", { d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" })
		})
	},
	{
		label: "Instagram",
		href: "https://www.instagram.com/zytrixontech_com?stkn=OHdydzVtN3VwYmJj",
		icon: /* @__PURE__ */ jsx("svg", {
			width: "18",
			height: "18",
			viewBox: "0 0 24 24",
			fill: "currentColor",
			children: /* @__PURE__ */ jsx("path", { d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" })
		})
	},
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/company/zytrixon/",
		icon: /* @__PURE__ */ jsx("svg", {
			width: "18",
			height: "18",
			viewBox: "0 0 24 24",
			fill: "currentColor",
			children: /* @__PURE__ */ jsx("path", { d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" })
		})
	}
];
function Footer() {
	return /* @__PURE__ */ jsxs("footer", {
		className: "site-footer",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "footer-grid",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "footer-col",
					children: [
						/* @__PURE__ */ jsx(Link, {
							href: "/",
							"aria-label": "Zytrixon Home",
							className: "mb-6 flex items-center",
							children: /* @__PURE__ */ jsx(Logo, { className: "h-[64px] w-auto text-[var(--zy-white)]" })
						}),
						/* @__PURE__ */ jsx("p", {
							style: {
								fontSize: "14px",
								color: "var(--zy-gray-text)",
								lineHeight: 1.7,
								maxWidth: "320px",
								marginBottom: "24px"
							},
							children: "Building robust software solutions for tomorrow's challenges. Enterprise-grade Web, Mobile, and IoT solutions from Patna, India."
						}),
						/* @__PURE__ */ jsx("div", {
							style: {
								display: "flex",
								gap: "12px"
							},
							children: SOCIALS.map((social) => /* @__PURE__ */ jsx("a", {
								href: social.href,
								"aria-label": social.label,
								target: social.href.startsWith("http") ? "_blank" : void 0,
								rel: social.href.startsWith("http") ? "noopener noreferrer" : void 0,
								className: "footer-social-btn",
								children: social.icon
							}, social.label))
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "footer-col",
					children: [/* @__PURE__ */ jsx("div", {
						className: "footer-heading",
						style: {
							fontWeight: 600,
							fontSize: 14,
							marginBottom: 16,
							color: "var(--zy-white)"
						},
						children: "Services"
					}), FOOTER_LINKS.services.map((link) => /* @__PURE__ */ jsx(Link, {
						href: link.href,
						className: "footer-link",
						children: link.label
					}, link.href))]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "footer-col",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "footer-heading",
							style: {
								fontWeight: 600,
								fontSize: 14,
								marginBottom: 16,
								color: "var(--zy-white)"
							},
							children: "Services in Patna"
						}),
						FOOTER_LINKS.locations.map((link) => /* @__PURE__ */ jsx(Link, {
							href: link.href,
							className: "footer-link",
							children: link.label
						}, link.href)),
						/* @__PURE__ */ jsx(Link, {
							href: "/locations",
							className: "footer-link footer-link-highlight",
							style: { marginTop: "4px" },
							children: "View All Locations →"
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "footer-col",
					children: [/* @__PURE__ */ jsx("div", {
						className: "footer-heading",
						style: {
							fontWeight: 600,
							fontSize: 14,
							marginBottom: 16,
							color: "var(--zy-white)"
						},
						children: "Company"
					}), FOOTER_LINKS.company.map((link) => /* @__PURE__ */ jsx(Link, {
						href: link.href,
						className: "footer-link",
						children: link.label
					}, link.href))]
				}),
				/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx("div", {
						className: "footer-heading",
						style: {
							fontWeight: 600,
							fontSize: 14,
							marginBottom: 16,
							color: "var(--zy-white)"
						},
						children: "Get in Touch"
					}),
					/* @__PURE__ */ jsx("a", {
						href: "mailto:zytrixon@gmail.com",
						className: "footer-link",
						children: "zytrixon@gmail.com"
					}),
					/* @__PURE__ */ jsxs("div", {
						style: {
							display: "flex",
							alignItems: "center",
							gap: "6px",
							flexWrap: "wrap",
							marginBottom: "12px"
						},
						children: [
							/* @__PURE__ */ jsx("a", {
								href: "tel:+917049711475",
								className: "footer-link",
								style: { marginBottom: 0 },
								children: "+91 70497 11475"
							}),
							/* @__PURE__ */ jsx("span", {
								style: {
									color: "var(--zy-gray-text)",
									fontSize: "13px"
								},
								children: "/"
							}),
							/* @__PURE__ */ jsx("a", {
								href: "tel:+919031985702",
								className: "footer-link",
								style: { marginBottom: 0 },
								children: "+91 90319 85702"
							})
						]
					}),
					/* @__PURE__ */ jsxs("p", {
						style: {
							fontSize: "14px",
							color: "var(--zy-gray-text)",
							lineHeight: 1.7,
							marginTop: "12px"
						},
						children: [
							"Patna, Bihar",
							/* @__PURE__ */ jsx("br", {}),
							"India 800001"
						]
					})
				] })
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "footer-bottom",
			children: [/* @__PURE__ */ jsxs("span", { children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" Zytrixon Tech. All rights reserved."
			] }), /* @__PURE__ */ jsx("div", {
				style: {
					display: "flex",
					gap: "24px",
					flexWrap: "wrap"
				},
				children: FOOTER_LINKS.legal.map((link) => link.href.endsWith(".xml") ? /* @__PURE__ */ jsx("a", {
					href: link.href,
					className: "footer-bottom-link",
					target: "_blank",
					rel: "noopener noreferrer",
					children: link.label
				}, link.href) : /* @__PURE__ */ jsx(Link, {
					href: link.href,
					className: "footer-bottom-link",
					children: link.label
				}, link.href))
			})]
		})]
	});
}
//#endregion
//#region resources/js/components/landing/custom-cursor.tsx
function CustomCursor() {
	return null;
}
//#endregion
export { ThemeProvider as a, Logo as i, Footer as n, useTheme as o, Navbar as r, CustomCursor as t };

//# sourceMappingURL=custom-cursor-BiK9FZ3v.js.map