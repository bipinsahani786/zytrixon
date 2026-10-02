import { useEffect, useRef, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { Check, ChevronDown } from "lucide-react";
//#region resources/js/components/admin/AdminDropdown.tsx
function AdminDropdown({ value, onChange, options, placeholder = "Select option...", label, icon: TriggerIcon, className = "", disabled = false, direction = "down" }) {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef(null);
	const selectedOption = options.find((opt) => opt.value === value);
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) setIsOpen(false);
		};
		const handleKeyDown = (event) => {
			if (event.key === "Escape") setIsOpen(false);
		};
		if (isOpen) {
			document.addEventListener("mousedown", handleClickOutside);
			document.addEventListener("keydown", handleKeyDown);
		}
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [isOpen]);
	const handleSelect = (optionValue) => {
		onChange(optionValue);
		setIsOpen(false);
	};
	return /* @__PURE__ */ jsxs("div", {
		ref: dropdownRef,
		className: `relative ${className}`,
		children: [
			label && /* @__PURE__ */ jsx("label", {
				className: "mb-1.5 block text-xs font-semibold",
				style: { color: "var(--admin-text-secondary)" },
				children: label
			}),
			/* @__PURE__ */ jsxs("button", {
				type: "button",
				disabled,
				onClick: () => !disabled && setIsOpen((prev) => !prev),
				"aria-haspopup": "listbox",
				"aria-expanded": isOpen,
				className: `flex w-full cursor-pointer items-center justify-between gap-2.5 rounded-xl border px-3.5 py-2.5 text-xs font-medium transition-all duration-200 outline-none ${disabled ? "cursor-not-allowed opacity-50" : "hover:opacity-90"}`,
				style: {
					backgroundColor: "var(--admin-input-bg)",
					borderColor: isOpen ? "var(--admin-accent)" : "var(--admin-input-border)",
					color: selectedOption ? "var(--admin-text-primary)" : "var(--admin-text-dim)",
					boxShadow: isOpen ? "0 0 0 2px var(--admin-accent-glow)" : "none"
				},
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex min-w-0 items-center gap-2 truncate",
					children: [
						TriggerIcon && /* @__PURE__ */ jsx(TriggerIcon, {
							className: "h-3.5 w-3.5 shrink-0",
							style: { color: "var(--admin-text-dim)" }
						}),
						selectedOption?.icon && /* @__PURE__ */ jsx(selectedOption.icon, {
							className: "h-3.5 w-3.5 shrink-0",
							style: { color: "var(--admin-accent)" }
						}),
						/* @__PURE__ */ jsx("span", {
							className: "truncate",
							children: selectedOption ? selectedOption.label : placeholder
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex shrink-0 items-center gap-1.5",
					children: [selectedOption?.badge && /* @__PURE__ */ jsx("span", {
						className: "rounded-full px-1.5 py-0.5 font-mono text-[9px] font-semibold",
						style: {
							backgroundColor: "var(--admin-button-secondary-bg)",
							color: "var(--admin-text-secondary)"
						},
						children: selectedOption.badge
					}), /* @__PURE__ */ jsx(ChevronDown, {
						className: `h-3.5 w-3.5 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`,
						style: { color: "var(--admin-text-dim)" }
					})]
				})]
			}),
			isOpen && /* @__PURE__ */ jsx("div", {
				role: "listbox",
				className: `absolute left-0 z-50 ${direction === "up" ? "bottom-full mb-1.5 origin-bottom" : "top-full mt-1.5 origin-top"} max-h-60 w-full min-w-[140px] animate-in overflow-y-auto rounded-xl border p-1 shadow-2xl backdrop-blur-xl zoom-in-95 fade-in`,
				style: {
					backgroundColor: "var(--admin-card-bg)",
					borderColor: "var(--admin-border)"
				},
				children: options.map((option) => {
					const isSelected = option.value === value;
					const OptionIcon = option.icon;
					return /* @__PURE__ */ jsxs("div", {
						role: "option",
						"aria-selected": isSelected,
						onClick: () => handleSelect(option.value),
						className: "group flex cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-xs transition-colors",
						style: {
							backgroundColor: isSelected ? "var(--admin-button-secondary-bg)" : "transparent",
							color: isSelected ? "var(--admin-accent)" : "var(--admin-text-primary)"
						},
						onMouseEnter: (e) => {
							if (!isSelected) e.currentTarget.style.backgroundColor = "var(--admin-card-subtle)";
						},
						onMouseLeave: (e) => {
							if (!isSelected) e.currentTarget.style.backgroundColor = "transparent";
						},
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex min-w-0 items-center gap-2 truncate",
							children: [OptionIcon && /* @__PURE__ */ jsx(OptionIcon, {
								className: "h-3.5 w-3.5 shrink-0 transition-colors",
								style: { color: isSelected ? "var(--admin-accent)" : "var(--admin-text-secondary)" }
							}), /* @__PURE__ */ jsxs("div", {
								className: "truncate",
								children: [/* @__PURE__ */ jsx("div", {
									className: "truncate font-medium",
									children: option.label
								}), option.description && /* @__PURE__ */ jsx("div", {
									className: "truncate text-[10px]",
									style: { color: "var(--admin-text-muted)" },
									children: option.description
								})]
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex shrink-0 items-center gap-2",
							children: [option.badge && /* @__PURE__ */ jsx("span", {
								className: "rounded-full px-1.5 py-0.5 font-mono text-[9px] font-semibold",
								style: {
									backgroundColor: "var(--admin-button-secondary-bg)",
									color: "var(--admin-text-secondary)"
								},
								children: option.badge
							}), isSelected && /* @__PURE__ */ jsx(Check, {
								className: "h-3.5 w-3.5",
								style: { color: "var(--admin-accent)" }
							})]
						})]
					}, option.value);
				})
			})
		]
	});
}
//#endregion
export { AdminDropdown as t };

//# sourceMappingURL=AdminDropdown-D_rYU8MI.js.map