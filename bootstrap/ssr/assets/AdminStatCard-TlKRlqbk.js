import { useId } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/components/admin/AdminStatCard.tsx
function AdminStatCard({ title, value, icon: Icon, badgeVariant = "emerald" }) {
	const patternId = useId().replace(/:/g, "");
	const variantStyles = {
		emerald: {
			topLine: "from-emerald-500 via-teal-400 to-emerald-600",
			glow: "bg-emerald-500/20",
			iconBox: "bg-emerald-500/10 text-emerald-500 border-emerald-500/30 group-hover:bg-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.15)]",
			shapeBorder: "border-emerald-500/20",
			dotFill: "#10b981"
		},
		blue: {
			topLine: "from-blue-500 via-cyan-400 to-indigo-500",
			glow: "bg-blue-500/20",
			iconBox: "bg-blue-500/10 text-blue-500 border-blue-500/30 group-hover:bg-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.15)]",
			shapeBorder: "border-blue-500/20",
			dotFill: "#3b82f6"
		},
		purple: {
			topLine: "from-purple-500 via-fuchsia-400 to-indigo-500",
			glow: "bg-purple-500/20",
			iconBox: "bg-purple-500/10 text-purple-400 border-purple-500/30 group-hover:bg-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.15)]",
			shapeBorder: "border-purple-500/20",
			dotFill: "#a855f7"
		},
		amber: {
			topLine: "from-amber-500 via-yellow-400 to-orange-500",
			glow: "bg-amber-500/20",
			iconBox: "bg-amber-500/10 text-amber-500 border-amber-500/30 group-hover:bg-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.15)]",
			shapeBorder: "border-amber-500/20",
			dotFill: "#f59e0b"
		},
		rose: {
			topLine: "from-rose-500 via-pink-400 to-red-500",
			glow: "bg-rose-500/20",
			iconBox: "bg-rose-500/10 text-rose-500 border-rose-500/30 group-hover:bg-rose-500/20 shadow-[0_0_15px_rgba(244,63,94,0.15)]",
			shapeBorder: "border-rose-500/20",
			dotFill: "#f43f5e"
		}
	};
	const currentStyle = variantStyles[badgeVariant] || variantStyles.emerald;
	return /* @__PURE__ */ jsxs("div", {
		className: "group relative flex h-full min-h-[105px] flex-col justify-center overflow-hidden rounded-2xl border p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl",
		style: {
			backgroundColor: "var(--admin-card-bg)",
			borderColor: "var(--admin-border)",
			color: "var(--admin-text-primary)"
		},
		children: [
			/* @__PURE__ */ jsx("div", { className: `absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${currentStyle.topLine} opacity-90 transition-all duration-300 group-hover:h-1.5` }),
			/* @__PURE__ */ jsxs("svg", {
				className: "pointer-events-none absolute inset-0 h-full w-full opacity-[0.07] transition-opacity duration-300 group-hover:opacity-[0.14] dark:opacity-[0.12]",
				xmlns: "http://www.w3.org/2000/svg",
				children: [/* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("pattern", {
					id: `grid-${patternId}`,
					width: "14",
					height: "14",
					patternUnits: "userSpaceOnUse",
					children: /* @__PURE__ */ jsx("circle", {
						cx: "2",
						cy: "2",
						r: "1",
						fill: currentStyle.dotFill
					})
				}) }), /* @__PURE__ */ jsx("rect", {
					width: "100%",
					height: "100%",
					fill: `url(#grid-${patternId})`
				})]
			}),
			/* @__PURE__ */ jsx("div", { className: `pointer-events-none absolute -top-8 -right-8 h-28 w-28 rounded-full opacity-20 blur-2xl transition-all duration-500 group-hover:scale-125 group-hover:opacity-40 ${currentStyle.glow}` }),
			/* @__PURE__ */ jsx("div", { className: `pointer-events-none absolute -right-5 -bottom-5 h-20 w-20 rounded-2xl border ${currentStyle.shapeBorder} rotate-12 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-45` }),
			/* @__PURE__ */ jsx("div", { className: `pointer-events-none absolute -right-2 -bottom-2 h-12 w-12 rounded-xl border ${currentStyle.shapeBorder} -rotate-6 transition-transform duration-500 group-hover:-rotate-12` }),
			/* @__PURE__ */ jsxs("div", {
				className: "relative z-10 flex items-center justify-between gap-4",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ jsx("span", {
						className: "block truncate font-mono text-[11px] font-semibold tracking-wider uppercase",
						style: { color: "var(--admin-text-muted)" },
						children: title
					}), /* @__PURE__ */ jsx("div", {
						className: "mt-1 font-heading text-3xl font-bold tracking-tight",
						style: { color: "var(--admin-text-primary)" },
						children: value
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: `flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border transition-all duration-300 group-hover:scale-105 ${currentStyle.iconBox}`,
					children: /* @__PURE__ */ jsx(Icon, { className: "h-6 w-6" })
				})]
			})
		]
	});
}
//#endregion
export { AdminStatCard as t };

//# sourceMappingURL=AdminStatCard-TlKRlqbk.js.map