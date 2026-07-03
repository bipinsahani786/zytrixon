import { f as Input, o as login, p as Button } from "../ssr.js";
import { t as InputError } from "./input-error-B7Zt7zmb.js";
import { t as Label } from "./label-DU-ZaSIn.js";
import { t as TextLink } from "./text-link-D7SOoxZN.js";
import { t as email } from "./password-BPKJPJwJ.js";
import { Form, Head } from "@inertiajs/react";
import { LoaderCircle } from "lucide-react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/pages/auth/forgot-password.tsx
function ForgotPassword({ status }) {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(Head, { title: "Forgot password" }),
		status && /* @__PURE__ */ jsx("div", {
			className: "mb-4 text-center text-sm font-medium text-green-600",
			children: status
		}),
		/* @__PURE__ */ jsxs("div", {
			className: "space-y-6",
			children: [/* @__PURE__ */ jsx(Form, {
				...email.form(),
				children: ({ processing, errors }) => /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
					className: "grid gap-2",
					children: [
						/* @__PURE__ */ jsx(Label, {
							htmlFor: "email",
							children: "Email address"
						}),
						/* @__PURE__ */ jsx(Input, {
							id: "email",
							type: "email",
							name: "email",
							autoComplete: "off",
							autoFocus: true,
							placeholder: "email@example.com"
						}),
						/* @__PURE__ */ jsx(InputError, { message: errors.email })
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "my-6 flex items-center justify-start",
					children: /* @__PURE__ */ jsxs(Button, {
						className: "w-full",
						disabled: processing,
						"data-test": "email-password-reset-link-button",
						children: [processing && /* @__PURE__ */ jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }), "Email password reset link"]
					})
				})] })
			}), /* @__PURE__ */ jsxs("div", {
				className: "space-x-1 text-center text-sm text-muted-foreground",
				children: [/* @__PURE__ */ jsx("span", { children: "Or, return to" }), /* @__PURE__ */ jsx(TextLink, {
					href: login(),
					children: "log in"
				})]
			})]
		})
	] });
}
ForgotPassword.layout = {
	title: "Forgot password",
	description: "Enter your email to receive a password reset link"
};
//#endregion
export { ForgotPassword as default };

//# sourceMappingURL=forgot-password-B4GwspS5.js.map