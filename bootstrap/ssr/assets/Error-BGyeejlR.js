import { a as ThemeProvider, n as Footer, r as Navbar, t as CustomCursor } from "./custom-cursor-s6CGr8GY.js";
import { t as TopBar } from "./top-bar-C3HAjSYy.js";
import { Head, Link } from "@inertiajs/react";
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
	return /* @__PURE__ */ jsxs(ThemeProvider, { children: [
		/* @__PURE__ */ jsxs(Head, { children: [/* @__PURE__ */ jsxs("title", { children: [title, " | Zytrixon Tech"] }), /* @__PURE__ */ jsx("meta", {
			name: "description",
			content: description
		})] }),
		/* @__PURE__ */ jsx(CustomCursor, {}),
		/* @__PURE__ */ jsx(TopBar, {}),
		/* @__PURE__ */ jsx(Navbar, {}),
		/* @__PURE__ */ jsx("main", {
			style: {
				minHeight: "80vh",
				padding: "160px var(--zy-section-pad-x) 80px",
				background: "var(--zy-black)",
				display: "flex",
				alignItems: "center",
				justifyContent: "center"
			},
			children: /* @__PURE__ */ jsxs("div", {
				style: {
					textAlign: "center",
					maxWidth: "600px",
					margin: "0 auto"
				},
				children: [
					/* @__PURE__ */ jsx("div", {
						style: {
							fontSize: "clamp(80px, 15vw, 120px)",
							fontWeight: 900,
							fontFamily: "var(--font-heading)",
							color: "var(--zy-white)",
							lineHeight: 1,
							opacity: .1,
							marginBottom: "-40px",
							letterSpacing: "-0.05em"
						},
						children: status
					}),
					/* @__PURE__ */ jsx("h1", {
						style: {
							fontFamily: "var(--font-heading)",
							fontSize: "clamp(32px, 5vw, 48px)",
							color: "var(--zy-white)",
							marginBottom: "16px",
							position: "relative"
						},
						children: title
					}),
					/* @__PURE__ */ jsx("p", {
						style: {
							color: "var(--zy-gray-text)",
							fontSize: "18px",
							marginBottom: "40px",
							lineHeight: 1.6
						},
						children: description
					}),
					/* @__PURE__ */ jsx(Link, {
						href: "/",
						className: "zy-btn-primary",
						style: {
							display: "inline-flex",
							padding: "16px 32px",
							fontSize: "14px",
							fontWeight: 600,
							color: "#000",
							backgroundColor: "#FFF",
							textDecoration: "none",
							borderRadius: "4px"
						},
						children: "Return Home"
					})
				]
			})
		}),
		/* @__PURE__ */ jsx(Footer, {})
	] });
}
//#endregion
export { Error as default };

//# sourceMappingURL=Error-BGyeejlR.js.map