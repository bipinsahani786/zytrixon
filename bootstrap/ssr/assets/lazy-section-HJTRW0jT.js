import { useRef } from "react";
import { jsx } from "react/jsx-runtime";
//#region resources/js/components/landing/lazy-section.tsx
function LazySection({ children, minHeight = "auto", className = "" }) {
	return /* @__PURE__ */ jsx("div", {
		ref: useRef(null),
		className,
		style: {
			contentVisibility: "auto",
			containIntrinsicSize: typeof minHeight === "number" ? `${minHeight}px` : minHeight !== "auto" ? minHeight : "600px",
			width: "100%"
		},
		children
	});
}
//#endregion
export { LazySection as t };

//# sourceMappingURL=lazy-section-HJTRW0jT.js.map