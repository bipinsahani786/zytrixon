import { t as PublicLayout } from "./PublicLayout-Cx-2KrXT.js";
import { Link } from "@inertiajs/react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/pages/Error.tsx
function Error({ status }) {
	const title = {
		503: "Service Unavailable",
		500: "Server Error",
		404: "Page Not Found",
		403: "Forbidden"
	}[status] || "Error";
	const description = {
		503: "Sorry, we are doing some maintenance. Please check back soon.",
		500: "Whoops, something went wrong on our servers.",
		404: "Sorry, the page you are looking for could not be found.",
		403: "Sorry, you are forbidden from accessing this page."
	}[status] || "An unexpected error occurred.";
	return /* @__PURE__ */ jsx(PublicLayout, {
		seo: {
			title: `${title} | Zytrixon Tech`,
			description
		},
		hideFooterCTA: true,
		children: /* @__PURE__ */ jsx("div", {
			className: "min-h-[75vh] flex items-center justify-center px-6 py-24 text-center",
			children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-md mx-auto",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "font-heading text-8xl sm:text-9xl font-black text-foreground/10 select-none -mb-8 sm:-mb-10 leading-none",
						children: status
					}),
					/* @__PURE__ */ jsx("h1", {
						className: "font-heading text-3xl sm:text-4xl font-extrabold text-foreground mb-4",
						children: title
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-muted-foreground text-base mb-8 leading-relaxed",
						children: description
					}),
					/* @__PURE__ */ jsx(Link, {
						href: "/",
						className: "inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-heading font-bold text-sm uppercase tracking-wider shadow-[0_0_20px_var(--accent-cyan-glow)] hover:scale-105 active:scale-95 transition-all duration-200",
						children: "Return Home"
					})
				]
			})
		})
	});
}
//#endregion
export { Error as default };

//# sourceMappingURL=Error-BnaQ7ZA-.js.map