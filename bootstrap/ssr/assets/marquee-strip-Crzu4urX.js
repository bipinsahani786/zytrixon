import { jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/components/landing/marquee-strip.tsx
var KEYWORDS = [
	"IoT Solutions",
	"React",
	"Laravel",
	"Cloud Infrastructure",
	"AI & ML",
	"Embedded Systems",
	"TypeScript",
	"Digital Twins",
	"Edge Computing",
	"Full Stack",
	"UI/UX Design",
	"DevOps",
	"Smart Devices",
	"Blockchain",
	"APIs",
	"Mobile Apps"
];
function MarqueeStrip() {
	const separator = /* @__PURE__ */ jsx("span", { style: {
		display: "inline-block",
		width: "6px",
		height: "6px",
		backgroundColor: "var(--zy-white)",
		borderRadius: "50%",
		margin: "0 32px",
		flexShrink: 0
	} });
	const items = KEYWORDS.map((kw, i) => /* @__PURE__ */ jsxs("span", {
		style: {
			display: "inline-flex",
			alignItems: "center"
		},
		children: [/* @__PURE__ */ jsx("span", {
			style: {
				fontFamily: "var(--font-heading)",
				fontSize: "13px",
				fontWeight: 600,
				letterSpacing: "0.12em",
				textTransform: "uppercase",
				color: "var(--zy-gray-text)",
				whiteSpace: "nowrap",
				transition: "color 0.3s"
			},
			onMouseEnter: (e) => {
				e.target.style.color = "#FFFFFF";
			},
			onMouseLeave: (e) => {
				e.target.style.color = "#666";
			},
			children: kw
		}), separator]
	}, i));
	return /* @__PURE__ */ jsx("div", {
		style: {
			width: "100%",
			overflow: "hidden",
			borderTop: "1px solid var(--zy-gray-border)",
			borderBottom: "1px solid #1a1a1a",
			padding: "20px 0",
			background: "var(--zy-black)"
		},
		children: /* @__PURE__ */ jsxs("div", {
			className: "marquee-track",
			children: [/* @__PURE__ */ jsx("div", {
				style: {
					display: "flex",
					alignItems: "center"
				},
				children: items
			}), /* @__PURE__ */ jsx("div", {
				style: {
					display: "flex",
					alignItems: "center"
				},
				children: items
			})]
		})
	});
}
//#endregion
export { MarqueeStrip as default };

//# sourceMappingURL=marquee-strip-Crzu4urX.js.map