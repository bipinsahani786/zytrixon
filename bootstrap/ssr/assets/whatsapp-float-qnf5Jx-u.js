import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/components/landing/whatsapp-float.tsx
function FloatingButtons() {
	const [expanded, setExpanded] = useState(false);
	return /* @__PURE__ */ jsxs("div", {
		className: "fixed bottom-7 right-7 z-[9998] flex flex-col items-end gap-3 pointer-events-auto",
		children: [expanded && /* @__PURE__ */ jsxs("div", {
			className: "flex flex-col gap-2.5 animate-in fade-in slide-in-from-bottom-2 duration-200",
			children: [/* @__PURE__ */ jsxs("a", {
				href: "tel:+917049711475",
				className: "group flex items-center gap-2.5 bg-card/95 text-foreground border border-border px-3.5 py-2 rounded-full text-xs font-heading font-semibold shadow-xl backdrop-blur-md hover:scale-105 hover:border-primary/50 transition-all duration-200",
				children: [/* @__PURE__ */ jsx("div", {
					className: "w-8 h-8 rounded-full bg-primary/15 text-primary flex items-center justify-center transition-transform group-hover:scale-110",
					children: /* @__PURE__ */ jsx("svg", {
						width: "16",
						height: "16",
						viewBox: "0 0 24 24",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "2",
						children: /* @__PURE__ */ jsx("path", { d: "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" })
					})
				}), /* @__PURE__ */ jsx("span", { children: "Call Us" })]
			}), /* @__PURE__ */ jsxs("a", {
				href: "https://wa.me/917049711475",
				target: "_blank",
				rel: "noopener noreferrer",
				className: "group flex items-center gap-2.5 bg-[#25d366] text-white px-3.5 py-2 rounded-full text-xs font-heading font-semibold shadow-xl shadow-emerald-500/25 hover:scale-105 hover:shadow-emerald-500/40 transition-all duration-200",
				children: [/* @__PURE__ */ jsx("div", {
					className: "w-8 h-8 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:scale-110",
					children: /* @__PURE__ */ jsx("svg", {
						width: "18",
						height: "18",
						viewBox: "0 0 24 24",
						fill: "currentColor",
						children: /* @__PURE__ */ jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" })
					})
				}), /* @__PURE__ */ jsx("span", { children: "WhatsApp" })]
			})]
		}), /* @__PURE__ */ jsx("button", {
			onClick: () => setExpanded(!expanded),
			"aria-label": "Contact options",
			className: `w-14 h-14 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 shadow-xl ${expanded ? "bg-card text-foreground border border-border rotate-45 scale-95 hover:bg-muted" : "bg-[#25d366] text-white shadow-emerald-500/30 hover:scale-105 hover:shadow-emerald-500/50"}`,
			children: expanded ? /* @__PURE__ */ jsxs("svg", {
				width: "20",
				height: "20",
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "2.5",
				children: [/* @__PURE__ */ jsx("line", {
					x1: "12",
					y1: "5",
					x2: "12",
					y2: "19"
				}), /* @__PURE__ */ jsx("line", {
					x1: "5",
					y1: "12",
					x2: "19",
					y2: "12"
				})]
			}) : /* @__PURE__ */ jsx("svg", {
				width: "28",
				height: "28",
				viewBox: "0 0 24 24",
				fill: "currentColor",
				children: /* @__PURE__ */ jsx("path", { d: "M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" })
			})
		})]
	});
}
//#endregion
export { FloatingButtons as default };

//# sourceMappingURL=whatsapp-float-qnf5Jx-u.js.map