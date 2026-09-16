import { f as Input, o as login, p as Button, u as queryParams } from "../ssr.js";
import { t as InputError } from "./input-error-B7Zt7zmb.js";
import { t as Spinner } from "./spinner-S4UuKrpj.js";
import { t as PasswordInput } from "./password-input-CSddIxsW.js";
import { t as Label } from "./label-DU-ZaSIn.js";
import { t as TextLink } from "./text-link-D7SOoxZN.js";
import { Form, Head } from "@inertiajs/react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/routes/register/index.ts
/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::store
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:53
* @route '/register'
*/
var store = (options) => ({
	url: store.url(options),
	method: "post"
});
store.definition = {
	methods: ["post"],
	url: "/register"
};
/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::store
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:53
* @route '/register'
*/
store.url = (options) => {
	return store.definition.url + queryParams(options);
};
/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::store
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:53
* @route '/register'
*/
store.post = (options) => ({
	url: store.url(options),
	method: "post"
});
/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::store
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:53
* @route '/register'
*/
var storeForm = (options) => ({
	action: store.url(options),
	method: "post"
});
/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::store
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:53
* @route '/register'
*/
storeForm.post = (options) => ({
	action: store.url(options),
	method: "post"
});
store.form = storeForm;
Object.assign(store, store);
//#endregion
//#region resources/js/pages/auth/register.tsx
function Register({ passwordRules }) {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Head, { title: "Register" }), /* @__PURE__ */ jsx(Form, {
		...store.form(),
		resetOnSuccess: ["password", "password_confirmation"],
		disableWhileProcessing: true,
		className: "flex flex-col gap-6",
		children: ({ processing, errors }) => /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
			className: "grid gap-6",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "grid gap-2",
					children: [
						/* @__PURE__ */ jsx(Label, {
							htmlFor: "name",
							children: "Name"
						}),
						/* @__PURE__ */ jsx(Input, {
							id: "name",
							type: "text",
							required: true,
							autoFocus: true,
							tabIndex: 1,
							autoComplete: "name",
							name: "name",
							placeholder: "Full name"
						}),
						/* @__PURE__ */ jsx(InputError, {
							message: errors.name,
							className: "mt-2"
						})
					]
				}),
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
							required: true,
							tabIndex: 2,
							autoComplete: "email",
							name: "email",
							placeholder: "email@example.com"
						}),
						/* @__PURE__ */ jsx(InputError, { message: errors.email })
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "grid gap-2",
					children: [
						/* @__PURE__ */ jsx(Label, {
							htmlFor: "password",
							children: "Password"
						}),
						/* @__PURE__ */ jsx(PasswordInput, {
							id: "password",
							required: true,
							tabIndex: 3,
							autoComplete: "new-password",
							name: "password",
							placeholder: "Password",
							passwordrules: passwordRules
						}),
						/* @__PURE__ */ jsx(InputError, { message: errors.password })
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "grid gap-2",
					children: [
						/* @__PURE__ */ jsx(Label, {
							htmlFor: "password_confirmation",
							children: "Confirm password"
						}),
						/* @__PURE__ */ jsx(PasswordInput, {
							id: "password_confirmation",
							required: true,
							tabIndex: 4,
							autoComplete: "new-password",
							name: "password_confirmation",
							placeholder: "Confirm password",
							passwordrules: passwordRules
						}),
						/* @__PURE__ */ jsx(InputError, { message: errors.password_confirmation })
					]
				}),
				/* @__PURE__ */ jsxs(Button, {
					type: "submit",
					className: "mt-2 w-full",
					tabIndex: 5,
					"data-test": "register-user-button",
					children: [processing && /* @__PURE__ */ jsx(Spinner, {}), "Create account"]
				})
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "text-center text-sm text-muted-foreground",
			children: [
				"Already have an account?",
				" ",
				/* @__PURE__ */ jsx(TextLink, {
					href: login(),
					tabIndex: 6,
					children: "Log in"
				})
			]
		})] })
	})] });
}
Register.layout = {
	title: "Create an account",
	description: "Enter your details below to create your account"
};
//#endregion
export { Register as default };

//# sourceMappingURL=register-DacS1al0.js.map