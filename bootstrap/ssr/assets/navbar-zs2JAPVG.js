import { Link, usePage } from "@inertiajs/react";
import { Suspense, createContext, lazy, useCallback, useContext, useEffect, useRef, useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
import { ArrowUpRight, ChevronDown, Globe, Layers, Mail, Menu, Moon, Phone, Radio, Shield, Smartphone, Sparkles, Sun, TrendingUp, X } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
var LazyFloatingButtons = lazy(() => import("./whatsapp-float-qnf5Jx-u.js"));
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
		document.documentElement.classList.toggle("dark", theme === "dark");
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
//#region resources/js/components/landing/custom-cursor.tsx
function CustomCursor() {
	return null;
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
			href: "/services/digital-marketing"
		}
	],
	locations: [
		{
			label: "Web Development in Samastipur",
			href: "/services/web-development/in/samastipur"
		},
		{
			label: "App Development in Samastipur",
			href: "/services/app-development/in/samastipur"
		},
		{
			label: "AI & Automation in Samastipur",
			href: "/services/ai-automation/in/samastipur"
		},
		{
			label: "Digital Marketing in Samastipur",
			href: "/services/digital-marketing/in/samastipur"
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
			label: "Case Studies",
			href: "/case-studies"
		},
		{
			label: "Our Process",
			href: "/process"
		},
		{
			label: "Portfolio",
			href: "/portfolio"
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
		label: "LinkedIn",
		href: "#",
		icon: /* @__PURE__ */ jsx("svg", {
			width: "18",
			height: "18",
			viewBox: "0 0 24 24",
			fill: "currentColor",
			children: /* @__PURE__ */ jsx("path", { d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" })
		})
	},
	{
		label: "Twitter",
		href: "#",
		icon: /* @__PURE__ */ jsx("svg", {
			width: "18",
			height: "18",
			viewBox: "0 0 24 24",
			fill: "currentColor",
			children: /* @__PURE__ */ jsx("path", { d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" })
		})
	},
	{
		label: "Instagram",
		href: "#",
		icon: /* @__PURE__ */ jsx("svg", {
			width: "18",
			height: "18",
			viewBox: "0 0 24 24",
			fill: "currentColor",
			children: /* @__PURE__ */ jsx("path", { d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" })
		})
	},
	{
		label: "GitHub",
		href: "#",
		icon: /* @__PURE__ */ jsx("svg", {
			width: "18",
			height: "18",
			viewBox: "0 0 24 24",
			fill: "currentColor",
			children: /* @__PURE__ */ jsx("path", { d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" })
		})
	}
];
function Footer() {
	return /* @__PURE__ */ jsxs("footer", {
		className: "bg-background text-foreground border-t border-border pt-20 pb-12 px-6 sm:px-10 md:px-16 lg:px-20 transition-colors duration-300",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "lg:col-span-1",
					children: [
						/* @__PURE__ */ jsx(Link, {
							href: "/",
							"aria-label": "Zytrixon Home",
							className: "mb-6 inline-flex items-center",
							children: /* @__PURE__ */ jsx(Logo, { className: "h-12 w-auto text-foreground" })
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-sm text-muted-foreground leading-relaxed max-w-xs mb-6",
							children: "Building robust software solutions for tomorrow's challenges. Enterprise-grade Web, Mobile, and IoT solutions from Samastipur, Bihar."
						}),
						/* @__PURE__ */ jsx("div", {
							className: "flex items-center gap-3",
							children: SOCIALS.map((social) => /* @__PURE__ */ jsx("a", {
								href: social.href,
								"aria-label": social.label,
								className: "w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/50 hover:bg-accent/40 transition-all duration-200",
								children: social.icon
							}, social.label))
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
					className: "font-heading font-semibold text-sm uppercase tracking-wider text-foreground mb-4",
					children: "Services"
				}), FOOTER_LINKS.services.map((link) => /* @__PURE__ */ jsx(Link, {
					href: link.href,
					className: "block text-sm text-muted-foreground hover:text-primary transition-colors duration-150 mb-2.5",
					children: link.label
				}, link.href))] }),
				/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx("div", {
						className: "font-heading font-semibold text-sm uppercase tracking-wider text-foreground mb-4",
						children: "Services in Bihar"
					}),
					FOOTER_LINKS.locations.map((link) => /* @__PURE__ */ jsx(Link, {
						href: link.href,
						className: "block text-sm text-muted-foreground hover:text-primary transition-colors duration-150 mb-2.5",
						children: link.label
					}, link.href)),
					/* @__PURE__ */ jsx(Link, {
						href: "/locations",
						className: "inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline mt-2 transition-colors duration-150",
						children: "View All Locations →"
					})
				] }),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
					className: "font-heading font-semibold text-sm uppercase tracking-wider text-foreground mb-4",
					children: "Company"
				}), FOOTER_LINKS.company.map((link) => /* @__PURE__ */ jsx(Link, {
					href: link.href,
					className: "block text-sm text-muted-foreground hover:text-primary transition-colors duration-150 mb-2.5",
					children: link.label
				}, link.href))] }),
				/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx("div", {
						className: "font-heading font-semibold text-sm uppercase tracking-wider text-foreground mb-4",
						children: "Get in Touch"
					}),
					/* @__PURE__ */ jsx("a", {
						href: "mailto:zytrixon@gmail.com",
						className: "block text-sm text-muted-foreground hover:text-primary transition-colors duration-150 mb-2",
						children: "zytrixon@gmail.com"
					}),
					/* @__PURE__ */ jsx("a", {
						href: "tel:+917049711475",
						className: "block text-sm text-muted-foreground hover:text-primary transition-colors duration-150 mb-4",
						children: "+91 70497 11475"
					}),
					/* @__PURE__ */ jsxs("p", {
						className: "text-sm text-muted-foreground leading-relaxed",
						children: [
							"Samastipur, Bihar",
							/* @__PURE__ */ jsx("br", {}),
							"India 848101"
						]
					})
				] })
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "max-w-7xl mx-auto border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-muted-foreground",
			children: [/* @__PURE__ */ jsxs("span", { children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" Zytrixon Tech. All rights reserved. Made with ❤️ in Samastipur."
			] }), /* @__PURE__ */ jsx("div", {
				className: "flex items-center gap-6",
				children: FOOTER_LINKS.legal.map((link) => link.href.endsWith(".xml") ? /* @__PURE__ */ jsx("a", {
					href: link.href,
					className: "text-muted-foreground hover:text-primary transition-colors duration-150",
					target: "_blank",
					rel: "noopener noreferrer",
					children: link.label
				}, link.href) : /* @__PURE__ */ jsx(Link, {
					href: link.href,
					className: "text-muted-foreground hover:text-primary transition-colors duration-150",
					children: link.label
				}, link.href))
			})]
		})]
	});
}
//#endregion
//#region resources/js/components/landing/footer-cta.tsx
gsap.registerPlugin(ScrollTrigger);
function FooterCTA() {
	const sectionRef = useRef(null);
	const headlineRef = useRef(null);
	const btnRef = useRef(null);
	const handleMouseMove = useCallback((e) => {
		if (!btnRef.current) return;
		const rect = btnRef.current.getBoundingClientRect();
		const centerX = rect.left + rect.width / 2;
		const centerY = rect.top + rect.height / 2;
		const distX = e.clientX - centerX;
		const distY = e.clientY - centerY;
		gsap.to(btnRef.current, {
			x: distX * .25,
			y: distY * .25,
			duration: .3,
			ease: "power2.out"
		});
	}, []);
	const handleMouseLeave = useCallback(() => {
		if (!btnRef.current) return;
		gsap.to(btnRef.current, {
			x: 0,
			y: 0,
			duration: .5,
			ease: "elastic.out(1, 0.4)"
		});
	}, []);
	useEffect(() => {
		if (!sectionRef.current) return;
		const ctx = gsap.context(() => {
			gsap.fromTo(headlineRef.current, {
				opacity: 0,
				y: 60
			}, {
				opacity: 1,
				y: 0,
				duration: .9,
				ease: "power3.out",
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top 75%",
					once: true
				}
			});
		}, sectionRef);
		return () => ctx.revert();
	}, []);
	return /* @__PURE__ */ jsxs("section", {
		ref: sectionRef,
		className: "bg-background text-foreground py-28 sm:py-36 px-6 sm:px-12 text-center border-t border-border transition-colors duration-300",
		children: [
			/* @__PURE__ */ jsxs("h2", {
				ref: headlineRef,
				className: "font-heading text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground max-w-3xl mx-auto leading-tight",
				children: [
					"Let's Build Something",
					" ",
					/* @__PURE__ */ jsx("span", {
						className: "text-primary",
						children: "Extraordinary"
					})
				]
			}),
			/* @__PURE__ */ jsx("p", {
				className: "text-base sm:text-lg text-muted-foreground max-w-lg mx-auto mt-6 leading-relaxed",
				children: "Ready to transform your idea into reality? Let's start the conversation."
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mt-10 inline-block",
				onMouseMove: handleMouseMove,
				onMouseLeave: handleMouseLeave,
				children: /* @__PURE__ */ jsxs(Link, {
					ref: btnRef,
					href: "/contact",
					className: "group inline-flex items-center gap-3 px-8 sm:px-12 py-4 sm:py-5 rounded-full bg-primary text-primary-foreground font-heading font-bold text-sm sm:text-base uppercase tracking-wider shadow-[0_0_30px_var(--accent-cyan-glow)] hover:shadow-[0_0_50px_var(--accent-cyan-glow)] hover:scale-105 active:scale-95 transition-all duration-300",
					children: [/* @__PURE__ */ jsx("span", { children: "Start a Project" }), /* @__PURE__ */ jsx("svg", {
						className: "w-5 h-5 transition-transform duration-300 group-hover:translate-x-1",
						viewBox: "0 0 24 24",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "2.5",
						children: /* @__PURE__ */ jsx("path", { d: "M5 12h14M12 5l7 7-7 7" })
					})]
				})
			})
		]
	});
}
//#endregion
//#region resources/js/components/landing/navbar.tsx
var SERVICES = [
	{
		title: "Web Development",
		slug: "web-development",
		desc: "Custom React, Next.js & ultra-fast scalable platforms",
		icon: Globe,
		badge: "POPULAR",
		gradient: "from-cyan-500/20 to-blue-500/10"
	},
	{
		title: "App Development",
		slug: "app-development",
		desc: "Native iOS, Android & Flutter cross-platform mobile apps",
		icon: Smartphone,
		badge: "HIGH DEMAND",
		gradient: "from-blue-500/20 to-indigo-500/10"
	},
	{
		title: "AI & Automation",
		slug: "ai-automation",
		desc: "Autonomous LLM agents, workflow bots & custom AI models",
		icon: Sparkles,
		badge: "AI-FIRST",
		gradient: "from-purple-500/20 to-pink-500/10"
	},
	{
		title: "IoT Solutions",
		slug: "iot-solutions",
		desc: "Smart connected hardware, embedded sensors & firmware",
		icon: Radio,
		badge: "HARDWARE",
		gradient: "from-emerald-500/20 to-teal-500/10"
	},
	{
		title: "Custom Software",
		slug: "custom-software",
		desc: "Enterprise ERP, CRM & mission-critical cloud microservices",
		icon: Layers,
		badge: "ENTERPRISE",
		gradient: "from-amber-500/20 to-orange-500/10"
	},
	{
		title: "Digital Marketing",
		slug: "digital-marketing",
		desc: "Data-driven SEO, ROI performance campaigns & global scale",
		icon: TrendingUp,
		badge: "GROWTH",
		gradient: "from-rose-500/20 to-red-500/10"
	}
];
var MAIN_LINKS = [
	{
		label: "HOME",
		href: "/"
	},
	{
		label: "WORK",
		href: "/portfolio"
	},
	{
		label: "CASE STUDIES",
		href: "/case-studies",
		badge: "NEW"
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
	const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
	const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
	const [mounted, setMounted] = useState(false);
	const navRef = useRef(null);
	const dropdownRef = useRef(null);
	const dropdownTimeoutRef = useRef(null);
	const { theme, toggleTheme } = useTheme();
	const { url } = usePage();
	const isDark = !mounted || theme === "dark";
	useEffect(() => {
		setMounted(true);
		let ticking = false;
		const handleScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(() => {
					const y = window.scrollY;
					setScrolled(y > 40);
					const progressBar = document.getElementById("zy-scroll-progress");
					if (progressBar) {
						const docHeight = document.documentElement.scrollHeight - window.innerHeight;
						if (docHeight > 0) {
							const ratio = Math.min(Math.max(y / docHeight, 0), 1);
							progressBar.style.transform = `scaleX(${ratio})`;
						}
					}
					ticking = false;
				});
				ticking = true;
			}
		};
		window.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll();
		if (navRef.current) gsap.fromTo(navRef.current, {
			y: -60,
			opacity: 0
		}, {
			y: 0,
			opacity: 1,
			duration: .9,
			ease: "power4.out",
			delay: .1
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
	const handleMouseEnterDropdown = () => {
		if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
		setServicesDropdownOpen(true);
	};
	const handleMouseLeaveDropdown = () => {
		dropdownTimeoutRef.current = setTimeout(() => {
			setServicesDropdownOpen(false);
		}, 180);
	};
	const isServicesActive = url.startsWith("/services");
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [
		/* @__PURE__ */ jsx("div", {
			id: "zy-scroll-progress",
			className: "zy-scroll-progress-line",
			"aria-hidden": "true"
		}),
		/* @__PURE__ */ jsx("header", {
			ref: navRef,
			className: `sticky top-0 left-0 right-0 z-50 w-full flex justify-center pointer-events-none transition-all duration-500 ease-out ${scrolled ? "pt-3.5 px-4" : "pt-0 px-0"}`,
			children: /* @__PURE__ */ jsxs("div", {
				className: `pointer-events-auto w-full flex items-center justify-between transition-all duration-500 ease-out ${scrolled ? isDark ? "max-w-[1240px] h-[58px] px-5 rounded-full bg-[#080b13]/90 border border-cyan-400/25 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.75),0_0_35px_-10px_rgba(0,240,255,0.18)] backdrop-blur-xl" : "max-w-[1240px] h-[58px] px-5 rounded-full bg-white/95 border border-sky-400/25 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.12)] backdrop-blur-xl" : isDark ? "max-w-full h-[76px] px-6 md:px-12 lg:px-16 rounded-none bg-[#0a0e17]/80 border-b border-white/10 shadow-sm backdrop-blur-xl" : "max-w-full h-[76px] px-6 md:px-12 lg:px-16 rounded-none bg-white/90 border-b border-zinc-200 shadow-sm backdrop-blur-xl"}`,
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "flex items-center gap-4",
						children: /* @__PURE__ */ jsx(Link, {
							href: "/",
							className: "flex items-center transition-transform duration-300 hover:scale-105",
							"aria-label": "Zytrixon Tech Homepage",
							onClick: () => setMobileOpen(false),
							children: /* @__PURE__ */ jsx(Logo, { className: `w-auto transition-all duration-500 ${scrolled ? "h-[34px]" : "h-[46px]"} ${isDark ? "text-white" : "text-zinc-900"}` })
						})
					}),
					/* @__PURE__ */ jsx("nav", {
						className: "hidden lg:flex items-center justify-center",
						"aria-label": "Main Navigation",
						children: /* @__PURE__ */ jsxs("ul", {
							className: `flex items-center gap-1 p-1 rounded-full border transition-colors duration-300 ${isDark ? "bg-white/[0.03] border-white/[0.06]" : "bg-zinc-100/90 border-zinc-200"}`,
							children: [
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link, {
									href: "/",
									className: `relative inline-flex items-center px-3.5 py-1.5 rounded-full text-[11.5px] font-semibold uppercase tracking-wider transition-all duration-200 whitespace-nowrap ${url === "/" ? isDark ? "text-white bg-cyan-400/15 shadow-[inset_0_0_12px_rgba(0,240,255,0.2)]" : "text-sky-700 bg-sky-100" : isDark ? "text-zinc-400 hover:text-white hover:bg-white/10" : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/60"}`,
									children: [/* @__PURE__ */ jsx("span", { children: "HOME" }), url === "/" && /* @__PURE__ */ jsx("span", { className: "absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f0ff]" })]
								}) }),
								/* @__PURE__ */ jsxs("li", {
									className: "relative",
									onMouseEnter: handleMouseEnterDropdown,
									onMouseLeave: handleMouseLeaveDropdown,
									children: [/* @__PURE__ */ jsxs(Link, {
										href: "/services",
										className: `relative group inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11.5px] font-semibold uppercase tracking-wider transition-all duration-200 whitespace-nowrap ${isServicesActive ? isDark ? "text-white bg-cyan-400/15 shadow-[inset_0_0_12px_rgba(0,240,255,0.2)]" : "text-sky-700 bg-sky-100" : isDark ? "text-zinc-400 hover:text-white hover:bg-white/10" : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/60"}`,
										"aria-expanded": servicesDropdownOpen,
										onClick: (e) => {
											if (window.matchMedia("(hover: none)").matches) {
												if (!servicesDropdownOpen) {
													e.preventDefault();
													setServicesDropdownOpen(true);
												}
											}
										},
										children: [
											/* @__PURE__ */ jsx("span", { children: "SERVICES" }),
											/* @__PURE__ */ jsx(ChevronDown, { className: `h-3.5 w-3.5 transition-transform duration-300 ${servicesDropdownOpen ? "rotate-180 text-cyan-400" : "text-zinc-400 group-hover:text-white"}` }),
											isServicesActive && /* @__PURE__ */ jsx("span", { className: "absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f0ff]" })
										]
									}), /* @__PURE__ */ jsxs("div", {
										ref: dropdownRef,
										className: `absolute top-[calc(100%+14px)] left-1/2 -translate-x-1/2 w-[630px] p-4 rounded-2xl border transition-all duration-300 z-50 backdrop-blur-2xl ${isDark ? "bg-[#0c101a]/95 border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8),0_0_40px_-10px_rgba(0,240,255,0.15)]" : "bg-white/98 border-zinc-200 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)]"} ${servicesDropdownOpen ? "opacity-100 visible translate-y-0 scale-100 pointer-events-auto" : "opacity-0 invisible translate-y-2 scale-95 pointer-events-none"}`,
										children: [/* @__PURE__ */ jsx("div", {
											className: "grid grid-cols-2 gap-2",
											children: SERVICES.map((svc) => {
												const Icon = svc.icon;
												const isActiveService = url === `/services/${svc.slug}`;
												return /* @__PURE__ */ jsxs(Link, {
													href: `/services/${svc.slug}`,
													className: `group flex items-start gap-3 p-2.5 rounded-xl border transition-all duration-200 ${isActiveService ? isDark ? "bg-cyan-500/10 border-cyan-500/30" : "bg-sky-50 border-sky-200" : isDark ? "bg-white/[0.02] border-transparent hover:bg-white/[0.06] hover:border-cyan-500/25 hover:-translate-y-0.5" : "bg-zinc-50 border-transparent hover:bg-zinc-100 hover:border-sky-300 hover:-translate-y-0.5"}`,
													onClick: () => setServicesDropdownOpen(false),
													children: [/* @__PURE__ */ jsx("div", {
														className: `w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border border-white/10 bg-gradient-to-br ${svc.gradient}`,
														children: /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4 text-cyan-400 transition-transform duration-300 group-hover:scale-110" })
													}), /* @__PURE__ */ jsxs("div", {
														className: "flex flex-col min-w-0",
														children: [/* @__PURE__ */ jsxs("div", {
															className: "flex items-center gap-1.5",
															children: [/* @__PURE__ */ jsx("span", {
																className: `text-[13px] font-semibold transition-colors ${isDark ? "text-white group-hover:text-cyan-400" : "text-zinc-900 group-hover:text-sky-600"}`,
																children: svc.title
															}), svc.badge && /* @__PURE__ */ jsx("span", {
																className: "text-[8.5px] font-bold px-1.5 py-0.5 rounded bg-cyan-400/15 text-cyan-400 border border-cyan-400/25 tracking-wide",
																children: svc.badge
															})]
														}), /* @__PURE__ */ jsx("p", {
															className: `text-[11px] leading-tight mt-0.5 ${isDark ? "text-zinc-400" : "text-zinc-500"}`,
															children: svc.desc
														})]
													})]
												}, svc.slug);
											})
										}), /* @__PURE__ */ jsxs("div", {
											className: `mt-3 pt-3 flex items-center justify-between border-t text-[11.5px] ${isDark ? "border-white/10 text-zinc-400" : "border-zinc-200 text-zinc-600"}`,
											children: [/* @__PURE__ */ jsxs("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ jsx(Shield, { className: "h-4 w-4 text-cyan-400" }), /* @__PURE__ */ jsx("span", { children: "Need tailored enterprise architecture or NDA?" })]
											}), /* @__PURE__ */ jsxs(Link, {
												href: "/contact",
												className: "inline-flex items-center gap-1 font-semibold text-cyan-400 hover:text-cyan-300 hover:translate-x-0.5 transition-all",
												onClick: () => setServicesDropdownOpen(false),
												children: [/* @__PURE__ */ jsx("span", { children: "Consult with CTO" }), /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-3.5 w-3.5" })]
											})]
										})]
									})]
								}),
								MAIN_LINKS.slice(1).map((link) => {
									const isActive = url === link.href || link.href !== "/" && url.startsWith(link.href);
									return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link, {
										href: link.href,
										className: `relative inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full text-[11.5px] font-semibold uppercase tracking-wider transition-all duration-200 whitespace-nowrap ${isActive ? isDark ? "text-white bg-cyan-400/15 shadow-[inset_0_0_12px_rgba(0,240,255,0.2)]" : "text-sky-700 bg-sky-100" : isDark ? "text-zinc-400 hover:text-white hover:bg-white/10" : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/60"}`,
										children: [
											/* @__PURE__ */ jsx("span", { children: link.label }),
											link.badge && /* @__PURE__ */ jsx("span", {
												className: "text-[8px] font-bold px-1.5 py-0.5 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white",
												children: link.badge
											}),
											isActive && /* @__PURE__ */ jsx("span", { className: "absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f0ff]" })
										]
									}) }, link.href);
								})
							]
						})
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ jsx("button", {
								onClick: toggleTheme,
								"aria-label": "Switch visual mode",
								className: `w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-200 hover:scale-105 cursor-pointer ${isDark ? "bg-white/[0.04] border-white/10 text-white hover:bg-white/10 hover:border-cyan-400/30" : "bg-zinc-100 border-zinc-300 text-zinc-900 hover:bg-zinc-200 hover:border-sky-400/30"}`,
								title: "Toggle Light / Dark Mode",
								children: isDark ? /* @__PURE__ */ jsx(Sun, { className: "h-4 w-4 text-amber-300 transition-transform duration-500 hover:rotate-90" }) : /* @__PURE__ */ jsx(Moon, { className: "h-4 w-4 text-cyan-600 transition-transform duration-500 hover:-rotate-12" })
							}),
							/* @__PURE__ */ jsx("a", {
								href: "mailto:zytrixon@gmail.com",
								className: `hidden sm:inline-flex w-9 h-9 rounded-full items-center justify-center border transition-all duration-200 hover:scale-105 ${isDark ? "bg-white/[0.04] border-white/10 hover:bg-white/10 hover:border-cyan-400/40 hover:shadow-[0_0_15px_rgba(0,240,255,0.25)]" : "bg-zinc-100 border-zinc-300 hover:bg-zinc-200 hover:border-sky-400/40"}`,
								"aria-label": "Send email",
								title: "Email: zytrixon@gmail.com",
								children: /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4 text-cyan-400 transition-transform duration-300 hover:scale-110" })
							}),
							/* @__PURE__ */ jsx("a", {
								href: "https://wa.me/917049711475",
								target: "_blank",
								rel: "noopener noreferrer",
								className: `hidden sm:inline-flex w-9 h-9 rounded-full items-center justify-center border transition-all duration-200 hover:scale-105 ${isDark ? "bg-white/[0.04] border-white/10 hover:bg-emerald-500/10 hover:border-emerald-500/40 hover:shadow-[0_0_16px_rgba(37,211,102,0.3)]" : "bg-zinc-100 border-zinc-300 hover:bg-emerald-50 hover:border-emerald-500/40"}`,
								"aria-label": "Chat on WhatsApp",
								title: "WhatsApp: +91 70497 11475",
								children: /* @__PURE__ */ jsx("svg", {
									className: "h-4 w-4 fill-[#25D366] transition-transform duration-300 hover:scale-110",
									viewBox: "0 0 24 24",
									fill: "currentColor",
									xmlns: "http://www.w3.org/2000/svg",
									children: /* @__PURE__ */ jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" })
								})
							}),
							/* @__PURE__ */ jsx("button", {
								className: `lg:hidden w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-200 cursor-pointer ${isDark ? "bg-white/[0.06] border-white/10 text-white" : "bg-zinc-100 border-zinc-300 text-zinc-900"}`,
								onClick: () => setMobileOpen(!mobileOpen),
								"aria-label": "Toggle navigation drawer",
								children: mobileOpen ? /* @__PURE__ */ jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(Menu, { className: "h-5 w-5" })
							})
						]
					})
				]
			})
		}),
		/* @__PURE__ */ jsxs("div", {
			className: `fixed inset-0 z-[1005] lg:hidden flex transition-opacity duration-300 ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`,
			"aria-hidden": !mobileOpen,
			children: [/* @__PURE__ */ jsx("div", {
				className: "absolute inset-0 bg-black/75 backdrop-blur-md",
				onClick: () => setMobileOpen(false)
			}), /* @__PURE__ */ jsxs("div", {
				className: `relative ml-auto w-full max-w-[380px] h-full h-dvh flex flex-col p-6 overflow-y-auto border-l transition-transform duration-300 ease-out ${isDark ? "bg-[#0a0e17] border-white/10 text-white" : "bg-white border-zinc-200 text-zinc-900"} ${mobileOpen ? "translate-x-0" : "translate-x-full"}`,
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: `flex items-center justify-between pb-4 border-b ${isDark ? "border-white/10" : "border-zinc-200"}`,
						children: [/* @__PURE__ */ jsx(Link, {
							href: "/",
							onClick: () => setMobileOpen(false),
							children: /* @__PURE__ */ jsx(Logo, { className: `h-10 w-auto ${isDark ? "text-white" : "text-zinc-900"}` })
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ jsx("button", {
								onClick: toggleTheme,
								className: `w-9 h-9 rounded-full flex items-center justify-center border cursor-pointer ${isDark ? "bg-white/[0.04] border-white/10 text-white" : "bg-zinc-100 border-zinc-300 text-zinc-900"}`,
								"aria-label": "Toggle Theme",
								children: isDark ? /* @__PURE__ */ jsx(Sun, { className: "h-4 w-4 text-amber-300" }) : /* @__PURE__ */ jsx(Moon, { className: "h-4 w-4 text-cyan-600" })
							}), /* @__PURE__ */ jsx("button", {
								onClick: () => setMobileOpen(false),
								className: `w-9 h-9 rounded-full flex items-center justify-center border cursor-pointer ${isDark ? "bg-white/[0.04] border-white/10 text-white" : "bg-zinc-100 border-zinc-300 text-zinc-900"}`,
								"aria-label": "Close menu",
								children: /* @__PURE__ */ jsx(X, { className: "h-5 w-5" })
							})]
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex flex-col gap-1.5 py-5",
						children: [
							/* @__PURE__ */ jsxs(Link, {
								href: "/",
								className: `flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-heading text-base font-bold transition-all ${url === "/" ? isDark ? "bg-white/[0.06] text-cyan-400" : "bg-zinc-100 text-sky-600" : isDark ? "text-zinc-200 hover:bg-white/[0.04] hover:text-cyan-400" : "text-zinc-800 hover:bg-zinc-100 hover:text-sky-600"}`,
								onClick: () => setMobileOpen(false),
								children: [/* @__PURE__ */ jsx("span", {
									className: "font-mono text-xs text-zinc-500",
									children: "01"
								}), /* @__PURE__ */ jsx("span", { children: "Home" })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex flex-col",
								children: [/* @__PURE__ */ jsxs("button", {
									className: `flex items-center justify-between w-full px-3.5 py-2.5 rounded-xl font-heading text-base font-bold transition-all cursor-pointer ${isServicesActive ? isDark ? "bg-white/[0.06] text-cyan-400" : "bg-zinc-100 text-sky-600" : isDark ? "text-zinc-200 hover:bg-white/[0.04] hover:text-cyan-400" : "text-zinc-800 hover:bg-zinc-100 hover:text-sky-600"}`,
									onClick: () => setMobileServicesOpen(!mobileServicesOpen),
									children: [/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ jsx("span", {
											className: "font-mono text-xs text-zinc-500",
											children: "02"
										}), /* @__PURE__ */ jsx("span", { children: "Services" })]
									}), /* @__PURE__ */ jsx(ChevronDown, { className: `h-5 w-5 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180 text-cyan-400" : "text-zinc-500"}` })]
								}), mobileServicesOpen && /* @__PURE__ */ jsxs("div", {
									className: "flex flex-col gap-1.5 py-2 pl-7",
									children: [/* @__PURE__ */ jsxs(Link, {
										href: "/services",
										className: "flex items-center gap-2.5 p-2 rounded-lg border border-dashed border-cyan-400/40 text-cyan-400 font-semibold text-xs transition-colors hover:bg-cyan-400/10",
										onClick: () => setMobileOpen(false),
										children: [/* @__PURE__ */ jsx(Layers, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", { children: "All Services Overview" })]
									}), SERVICES.map((svc) => {
										const Icon = svc.icon;
										return /* @__PURE__ */ jsxs(Link, {
											href: `/services/${svc.slug}`,
											className: `flex items-start gap-2.5 p-2 rounded-lg transition-colors ${isDark ? "bg-white/[0.02] hover:bg-cyan-400/10" : "bg-zinc-50 hover:bg-sky-50"}`,
											onClick: () => setMobileOpen(false),
											children: [/* @__PURE__ */ jsx(Icon, { className: "h-4 w-4 text-cyan-400 mt-0.5 shrink-0" }), /* @__PURE__ */ jsxs("div", {
												className: "flex flex-col min-w-0",
												children: [/* @__PURE__ */ jsx("span", {
													className: `text-xs font-semibold ${isDark ? "text-white" : "text-zinc-900"}`,
													children: svc.title
												}), /* @__PURE__ */ jsx("span", {
													className: "text-[11px] text-zinc-400 leading-tight",
													children: svc.desc
												})]
											})]
										}, svc.slug);
									})]
								})]
							}),
							/* @__PURE__ */ jsxs(Link, {
								href: "/portfolio",
								className: `flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-heading text-base font-bold transition-all ${url.startsWith("/portfolio") ? isDark ? "bg-white/[0.06] text-cyan-400" : "bg-zinc-100 text-sky-600" : isDark ? "text-zinc-200 hover:bg-white/[0.04] hover:text-cyan-400" : "text-zinc-800 hover:bg-zinc-100 hover:text-sky-600"}`,
								onClick: () => setMobileOpen(false),
								children: [/* @__PURE__ */ jsx("span", {
									className: "font-mono text-xs text-zinc-500",
									children: "03"
								}), /* @__PURE__ */ jsx("span", { children: "Work" })]
							}),
							/* @__PURE__ */ jsxs(Link, {
								href: "/case-studies",
								className: `flex items-center justify-between px-3.5 py-2.5 rounded-xl font-heading text-base font-bold transition-all ${url.startsWith("/case-studies") ? isDark ? "bg-white/[0.06] text-cyan-400" : "bg-zinc-100 text-sky-600" : isDark ? "text-zinc-200 hover:bg-white/[0.04] hover:text-cyan-400" : "text-zinc-800 hover:bg-zinc-100 hover:text-sky-600"}`,
								onClick: () => setMobileOpen(false),
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ jsx("span", {
										className: "font-mono text-xs text-zinc-500",
										children: "04"
									}), /* @__PURE__ */ jsx("span", { children: "Case Studies" })]
								}), /* @__PURE__ */ jsx("span", {
									className: "text-[9px] font-bold px-1.5 py-0.5 rounded bg-cyan-400/15 text-cyan-400 border border-cyan-400/25",
									children: "NEW"
								})]
							}),
							/* @__PURE__ */ jsxs(Link, {
								href: "/about",
								className: `flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-heading text-base font-bold transition-all ${url.startsWith("/about") ? isDark ? "bg-white/[0.06] text-cyan-400" : "bg-zinc-100 text-sky-600" : isDark ? "text-zinc-200 hover:bg-white/[0.04] hover:text-cyan-400" : "text-zinc-800 hover:bg-zinc-100 hover:text-sky-600"}`,
								onClick: () => setMobileOpen(false),
								children: [/* @__PURE__ */ jsx("span", {
									className: "font-mono text-xs text-zinc-500",
									children: "05"
								}), /* @__PURE__ */ jsx("span", { children: "About" })]
							}),
							/* @__PURE__ */ jsxs(Link, {
								href: "/team",
								className: `flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-heading text-base font-bold transition-all ${url.startsWith("/team") ? isDark ? "bg-white/[0.06] text-cyan-400" : "bg-zinc-100 text-sky-600" : isDark ? "text-zinc-200 hover:bg-white/[0.04] hover:text-cyan-400" : "text-zinc-800 hover:bg-zinc-100 hover:text-sky-600"}`,
								onClick: () => setMobileOpen(false),
								children: [/* @__PURE__ */ jsx("span", {
									className: "font-mono text-xs text-zinc-500",
									children: "06"
								}), /* @__PURE__ */ jsx("span", { children: "Team" })]
							}),
							/* @__PURE__ */ jsxs(Link, {
								href: "/blog",
								className: `flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-heading text-base font-bold transition-all ${url.startsWith("/blog") ? isDark ? "bg-white/[0.06] text-cyan-400" : "bg-zinc-100 text-sky-600" : isDark ? "text-zinc-200 hover:bg-white/[0.04] hover:text-cyan-400" : "text-zinc-800 hover:bg-zinc-100 hover:text-sky-600"}`,
								onClick: () => setMobileOpen(false),
								children: [/* @__PURE__ */ jsx("span", {
									className: "font-mono text-xs text-zinc-500",
									children: "07"
								}), /* @__PURE__ */ jsx("span", { children: "Blog" })]
							}),
							/* @__PURE__ */ jsxs(Link, {
								href: "/contact",
								className: `flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-heading text-base font-bold transition-all ${url.startsWith("/contact") ? isDark ? "bg-white/[0.06] text-cyan-400" : "bg-zinc-100 text-sky-600" : isDark ? "text-zinc-200 hover:bg-white/[0.04] hover:text-cyan-400" : "text-zinc-800 hover:bg-zinc-100 hover:text-sky-600"}`,
								onClick: () => setMobileOpen(false),
								children: [/* @__PURE__ */ jsx("span", {
									className: "font-mono text-xs text-zinc-500",
									children: "08"
								}), /* @__PURE__ */ jsx("span", { children: "Contact" })]
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: `mt-auto flex flex-col gap-3 pt-4 border-t ${isDark ? "border-white/10" : "border-zinc-200"}`,
						children: [
							/* @__PURE__ */ jsxs(Link, {
								href: "/contact",
								className: "flex items-center justify-center gap-2 w-full py-3 px-5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-bold uppercase tracking-wider shadow-[0_10px_25px_-5px_rgba(0,240,255,0.3)] hover:opacity-95 transition-opacity",
								onClick: () => setMobileOpen(false),
								children: [/* @__PURE__ */ jsx("span", { children: "Start a Project" }), /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-4 w-4" })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "grid grid-cols-2 gap-2.5",
								children: [/* @__PURE__ */ jsxs("a", {
									href: "tel:+917049711475",
									className: `flex items-center justify-center gap-1.5 p-2.5 rounded-xl border text-xs font-semibold ${isDark ? "bg-white/[0.04] border-white/10 text-white" : "bg-zinc-100 border-zinc-200 text-zinc-900"}`,
									children: [/* @__PURE__ */ jsx(Phone, { className: "h-4 w-4 text-cyan-400" }), /* @__PURE__ */ jsx("span", { children: "+91 70497 11475" })]
								}), /* @__PURE__ */ jsxs("a", {
									href: "https://wa.me/917049711475",
									target: "_blank",
									rel: "noopener noreferrer",
									className: `flex items-center justify-center gap-1.5 p-2.5 rounded-xl border text-xs font-semibold ${isDark ? "bg-white/[0.04] border-white/10 text-white" : "bg-zinc-100 border-zinc-200 text-zinc-900"}`,
									children: [/* @__PURE__ */ jsx("svg", {
										className: "h-4 w-4 fill-[#25D366]",
										viewBox: "0 0 24 24",
										fill: "currentColor",
										children: /* @__PURE__ */ jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" })
									}), /* @__PURE__ */ jsx("span", { children: "WhatsApp" })]
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center justify-center gap-2 text-[11px] text-zinc-500",
								children: [
									/* @__PURE__ */ jsx("span", { children: "Samastipur, Bihar, India" }),
									/* @__PURE__ */ jsx("span", { children: "•" }),
									/* @__PURE__ */ jsx("a", {
										href: "mailto:zytrixon@gmail.com",
										className: "hover:text-cyan-400 transition-colors",
										children: "zytrixon@gmail.com"
									})
								]
							})
						]
					})
				]
			})]
		})
	] });
}
//#endregion
export { Logo as a, CustomCursor as i, FooterCTA as n, ThemeProvider as o, Footer as r, useTheme as s, Navbar as t };

//# sourceMappingURL=navbar-zs2JAPVG.js.map