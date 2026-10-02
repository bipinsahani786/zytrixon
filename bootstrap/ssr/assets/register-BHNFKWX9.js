import { Head, Link } from "@inertiajs/react";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowLeft, ShieldAlert } from "lucide-react";
//#region resources/js/pages/auth/register.tsx
function Register() {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex min-h-screen items-center justify-center bg-black p-6 text-white",
		children: [/* @__PURE__ */ jsx(Head, { title: "Registration Disabled" }), /* @__PURE__ */ jsxs("div", {
			className: "w-full max-w-md space-y-4 rounded-2xl border border-white/10 bg-[#0a0a0d] p-8 text-center",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-amber-500/20 bg-amber-500/10 text-amber-400",
					children: /* @__PURE__ */ jsx(ShieldAlert, { className: "h-6 w-6" })
				}),
				/* @__PURE__ */ jsx("h1", {
					className: "font-heading text-xl font-bold text-white",
					children: "Public Registration Disabled"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-xs text-neutral-400",
					children: "Accounts are managed exclusively by the system administrator. Self-registration is disabled for security compliance."
				}),
				/* @__PURE__ */ jsx("div", {
					className: "pt-2",
					children: /* @__PURE__ */ jsxs(Link, {
						href: "/z-admin",
						className: "inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-xs font-semibold text-black transition-colors hover:bg-neutral-200",
						children: [/* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", { children: "Return to Sign In" })]
					})
				})
			]
		})]
	});
}
//#endregion
export { Register as default };

//# sourceMappingURL=register-BHNFKWX9.js.map