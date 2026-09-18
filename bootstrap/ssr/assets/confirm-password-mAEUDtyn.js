import { p as Button, u as queryParams } from "../ssr.js";
import { t as InputError } from "./input-error-B7Zt7zmb.js";
import { t as Spinner } from "./spinner-S4UuKrpj.js";
import { t as PasskeyVerify } from "./passkey-verify-B8m83sMb.js";
import { t as PasswordInput } from "./password-input-CSddIxsW.js";
import { t as Label } from "./label-DU-ZaSIn.js";
import { n as store$1 } from "./confirm-Cjt1Oq4_.js";
import { Form, Head } from "@inertiajs/react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/actions/Laravel/Passkeys/Http/Controllers/PasskeyConfirmationController.ts
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyConfirmationController::index
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyConfirmationController.php:27
* @route '/passkeys/confirm/options'
*/
var index = (options) => ({
	url: index.url(options),
	method: "get"
});
index.definition = {
	methods: ["get", "head"],
	url: "/passkeys/confirm/options"
};
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyConfirmationController::index
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyConfirmationController.php:27
* @route '/passkeys/confirm/options'
*/
index.url = (options) => {
	return index.definition.url + queryParams(options);
};
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyConfirmationController::index
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyConfirmationController.php:27
* @route '/passkeys/confirm/options'
*/
index.get = (options) => ({
	url: index.url(options),
	method: "get"
});
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyConfirmationController::index
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyConfirmationController.php:27
* @route '/passkeys/confirm/options'
*/
index.head = (options) => ({
	url: index.url(options),
	method: "head"
});
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyConfirmationController::index
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyConfirmationController.php:27
* @route '/passkeys/confirm/options'
*/
var indexForm = (options) => ({
	action: index.url(options),
	method: "get"
});
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyConfirmationController::index
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyConfirmationController.php:27
* @route '/passkeys/confirm/options'
*/
indexForm.get = (options) => ({
	action: index.url(options),
	method: "get"
});
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyConfirmationController::index
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyConfirmationController.php:27
* @route '/passkeys/confirm/options'
*/
indexForm.head = (options) => ({
	action: index.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "HEAD",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "get"
});
index.form = indexForm;
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyConfirmationController::store
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyConfirmationController.php:50
* @route '/passkeys/confirm'
*/
var store = (options) => ({
	url: store.url(options),
	method: "post"
});
store.definition = {
	methods: ["post"],
	url: "/passkeys/confirm"
};
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyConfirmationController::store
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyConfirmationController.php:50
* @route '/passkeys/confirm'
*/
store.url = (options) => {
	return store.definition.url + queryParams(options);
};
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyConfirmationController::store
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyConfirmationController.php:50
* @route '/passkeys/confirm'
*/
store.post = (options) => ({
	url: store.url(options),
	method: "post"
});
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyConfirmationController::store
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyConfirmationController.php:50
* @route '/passkeys/confirm'
*/
var storeForm = (options) => ({
	action: store.url(options),
	method: "post"
});
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyConfirmationController::store
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyConfirmationController.php:50
* @route '/passkeys/confirm'
*/
storeForm.post = (options) => ({
	action: store.url(options),
	method: "post"
});
store.form = storeForm;
//#endregion
//#region resources/js/pages/auth/confirm-password.tsx
function ConfirmPassword() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(Head, { title: "Confirm password" }),
		/* @__PURE__ */ jsx(PasskeyVerify, {
			routes: {
				options: index(),
				submit: store()
			},
			label: "Confirm with passkey",
			loadingLabel: "Confirming...",
			separator: "Or confirm with password"
		}),
		/* @__PURE__ */ jsx(Form, {
			...store$1.form(),
			resetOnSuccess: ["password"],
			children: ({ processing, errors }) => /* @__PURE__ */ jsxs("div", {
				className: "space-y-6",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "grid gap-2",
					children: [
						/* @__PURE__ */ jsx(Label, {
							htmlFor: "password",
							children: "Password"
						}),
						/* @__PURE__ */ jsx(PasswordInput, {
							id: "password",
							name: "password",
							placeholder: "Password",
							autoComplete: "current-password",
							autoFocus: true
						}),
						/* @__PURE__ */ jsx(InputError, { message: errors.password })
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "flex items-center",
					children: /* @__PURE__ */ jsxs(Button, {
						className: "w-full",
						disabled: processing,
						"data-test": "confirm-password-button",
						children: [processing && /* @__PURE__ */ jsx(Spinner, {}), "Confirm password"]
					})
				})]
			})
		})
	] });
}
ConfirmPassword.layout = {
	title: "Confirm password",
	description: "This is a secure area of the application. Please confirm your password before continuing."
};
//#endregion
export { ConfirmPassword as default };

//# sourceMappingURL=confirm-password-mAEUDtyn.js.map