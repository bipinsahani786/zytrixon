import { p as Button, s as logout } from "../ssr.js";
import { t as Spinner } from "./spinner-Dk8sPI44.js";
import { t as TextLink } from "./text-link-D7SOoxZN.js";
import { t as send } from "./verification-C4boZ_Wm.js";
import { Form, Head } from "@inertiajs/react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/pages/auth/verify-email.tsx
function VerifyEmail({ status }) {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(Head, { title: "Email verification" }),
		status === "verification-link-sent" && /* @__PURE__ */ jsx("div", {
			className: "mb-4 text-center text-sm font-medium text-green-600",
			children: "A new verification link has been sent to the email address you provided during registration."
		}),
		/* @__PURE__ */ jsx(Form, {
			...send.form(),
			className: "space-y-6 text-center",
			children: ({ processing }) => /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs(Button, {
				disabled: processing,
				variant: "secondary",
				children: [processing && /* @__PURE__ */ jsx(Spinner, {}), "Resend verification email"]
			}), /* @__PURE__ */ jsx(TextLink, {
				href: logout(),
				className: "mx-auto block text-sm",
				children: "Log out"
			})] })
		})
	] });
}
VerifyEmail.layout = {
	title: "Email verification",
	description: "Please verify your email address by clicking on the link we just emailed to you."
};
//#endregion
export { VerifyEmail as default };

//# sourceMappingURL=verify-email-Dj8S5ALp.js.map