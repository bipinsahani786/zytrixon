import { useEffect, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/components/admin/AdminThemeToggle.tsx
function AdminThemeToggle({ className = "" }) {
	const [theme, setTheme] = useState("dark");
	const [mounted, setMounted] = useState(false);
	const applyTheme = (targetTheme) => {
		const isLight = targetTheme === "light";
		document.documentElement.classList.toggle("light", isLight);
		document.documentElement.classList.toggle("dark", !isLight);
		document.body.classList.toggle("light", isLight);
		document.body.classList.toggle("dark", !isLight);
	};
	useEffect(() => {
		setMounted(true);
		const storedTheme = localStorage.getItem("zy-theme") || "dark";
		setTheme(storedTheme);
		applyTheme(storedTheme);
	}, []);
	const toggleTheme = () => {
		const nextTheme = theme === "dark" ? "light" : "dark";
		setTheme(nextTheme);
		applyTheme(nextTheme);
		localStorage.setItem("zy-theme", nextTheme);
	};
	return /* @__PURE__ */ jsx("button", {
		type: "button",
		onClick: toggleTheme,
		"aria-label": "Toggle theme",
		title: `Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`,
		className: `flex cursor-pointer items-center justify-center rounded-xl transition-all duration-200 active:scale-95 ${className}`,
		style: {
			width: 38,
			height: 38,
			backgroundColor: "var(--admin-button-secondary-bg)",
			border: "1px solid var(--admin-border)",
			color: "var(--admin-text-primary)"
		},
		children: !mounted || theme === "dark" ? /* @__PURE__ */ jsxs("svg", {
			width: "17",
			height: "17",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "2",
			strokeLinecap: "round",
			strokeLinejoin: "round",
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
			width: "17",
			height: "17",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "2",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			children: /* @__PURE__ */ jsx("path", { d: "M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" })
		})
	});
}
//#endregion
export { AdminThemeToggle as t };

//# sourceMappingURL=AdminThemeToggle-CGtv_TvQ.js.map