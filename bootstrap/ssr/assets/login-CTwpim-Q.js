import { c as register, f as Input, m as cn, p as Button, u as queryParams } from "../ssr.js";
import { t as InputError } from "./input-error-B7Zt7zmb.js";
import { t as Spinner } from "./spinner-Dk8sPI44.js";
import { t as PasskeyVerify } from "./passkey-verify-COPaitTo.js";
import { t as PasswordInput } from "./password-input-B3m6zNQ6.js";
import { t as Label } from "./label-DU-ZaSIn.js";
import { t as TextLink } from "./text-link-D7SOoxZN.js";
import { n as request } from "./password-BPKJPJwJ.js";
import { Form, Head } from "@inertiajs/react";
import "react";
import { CheckIcon } from "lucide-react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
//#region resources/js/components/ui/checkbox.tsx
function Checkbox({ className, ...props }) {
	return /* @__PURE__ */ jsx(CheckboxPrimitive.Root, {
		"data-slot": "checkbox",
		className: cn("peer border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50", className),
		...props,
		children: /* @__PURE__ */ jsx(CheckboxPrimitive.Indicator, {
			"data-slot": "checkbox-indicator",
			className: "flex items-center justify-center text-current transition-none",
			children: /* @__PURE__ */ jsx(CheckIcon, { className: "size-3.5" })
		})
	});
}
//#endregion
//#region resources/js/routes/login/index.ts
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::store
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:58
* @route '/login'
*/
var store = (options) => ({
	url: store.url(options),
	method: "post"
});
store.definition = {
	methods: ["post"],
	url: "/login"
};
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::store
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:58
* @route '/login'
*/
store.url = (options) => {
	return store.definition.url + queryParams(options);
};
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::store
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:58
* @route '/login'
*/
store.post = (options) => ({
	url: store.url(options),
	method: "post"
});
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::store
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:58
* @route '/login'
*/
var storeForm = (options) => ({
	action: store.url(options),
	method: "post"
});
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::store
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:58
* @route '/login'
*/
storeForm.post = (options) => ({
	action: store.url(options),
	method: "post"
});
store.form = storeForm;
Object.assign(store, store);
//#endregion
//#region resources/js/pages/auth/login.tsx
function Login({ status, canResetPassword }) {
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [
		/* @__PURE__ */ jsx(Head, { title: "Log in" }),
		/* @__PURE__ */ jsx(PasskeyVerify, {}),
		/* @__PURE__ */ jsx(Form, {
			...store.form(),
			resetOnSuccess: ["password"],
			className: "flex flex-col gap-6",
			children: ({ processing, errors }) => /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsxs("div", {
				className: "grid gap-6",
				children: [
					/* @__PURE__ */ jsxs("div", {
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
								required: true,
								autoFocus: true,
								tabIndex: 1,
								autoComplete: "email",
								placeholder: "email@example.com"
							}),
							/* @__PURE__ */ jsx(InputError, { message: errors.email })
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "grid gap-2",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center",
								children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "password",
									children: "Password"
								}), canResetPassword && /* @__PURE__ */ jsx(TextLink, {
									href: request(),
									className: "ml-auto text-sm",
									tabIndex: 5,
									children: "Forgot your password?"
								})]
							}),
							/* @__PURE__ */ jsx(PasswordInput, {
								id: "password",
								name: "password",
								required: true,
								tabIndex: 2,
								autoComplete: "current-password",
								placeholder: "Password"
							}),
							/* @__PURE__ */ jsx(InputError, { message: errors.password })
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center space-x-3",
						children: [/* @__PURE__ */ jsx(Checkbox, {
							id: "remember",
							name: "remember",
							tabIndex: 3
						}), /* @__PURE__ */ jsx(Label, {
							htmlFor: "remember",
							children: "Remember me"
						})]
					}),
					/* @__PURE__ */ jsxs(Button, {
						type: "submit",
						className: "mt-4 w-full",
						tabIndex: 4,
						disabled: processing,
						"data-test": "login-button",
						children: [processing && /* @__PURE__ */ jsx(Spinner, {}), "Log in"]
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "text-center text-sm text-muted-foreground",
				children: [
					"Don't have an account?",
					" ",
					/* @__PURE__ */ jsx(TextLink, {
						href: register(),
						tabIndex: 5,
						children: "Sign up"
					})
				]
			})] })
		}),
		status && /* @__PURE__ */ jsx("div", {
			className: "mb-4 text-center text-sm font-medium text-green-600",
			children: status
		})
	] });
}
Login.layout = {
	title: "Log in to your account",
	description: "Enter your email and password below to log in"
};
//#endregion
export { Login as default };

//# sourceMappingURL=login-CTwpim-Q.js.map