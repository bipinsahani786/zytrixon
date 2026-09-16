import { jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/components/common/SectionHeader.tsx
/**
* SectionHeader: Universal section title & subtitle component.
* Standardizes typography, spacing, and accent badges across all website sections.
*/
function SectionHeader({ badge, title, subtitle, align = "center", className = "" }) {
	const alignmentClasses = {
		left: "text-left items-start",
		center: "text-center items-center mx-auto",
		right: "text-right items-end ml-auto"
	}[align];
	return /* @__PURE__ */ jsxs("div", {
		className: `flex flex-col mb-12 sm:mb-16 ${alignmentClasses} ${className}`,
		children: [
			badge && /* @__PURE__ */ jsx("span", {
				className: "inline-block font-heading text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit",
				children: badge
			}),
			/* @__PURE__ */ jsx("h2", {
				className: "font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1] max-w-3xl",
				children: title
			}),
			subtitle && /* @__PURE__ */ jsx("p", {
				className: "text-base sm:text-lg text-muted-foreground max-w-2xl mt-4 leading-relaxed font-normal",
				children: subtitle
			})
		]
	});
}
//#endregion
export { SectionHeader as t };

//# sourceMappingURL=SectionHeader-D8pjpt5Q.js.map