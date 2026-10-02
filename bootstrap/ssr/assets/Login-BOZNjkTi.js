import { t as Logo } from "./logo-BcYw_ZRA.js";
import { t as AdminThemeToggle } from "./AdminThemeToggle-CGtv_TvQ.js";
import { Head, useForm } from "@inertiajs/react";
import { useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
import { AlertCircle, Eye, EyeOff, Loader2, Lock, Mail } from "lucide-react";
//#region resources/js/components/admin/LoginFormCard.tsx
function LoginFormCard({ data, setData, errors, processing, onSubmit, sessionError }) {
	const [showPassword, setShowPassword] = useState(false);
	return /* @__PURE__ */ jsxs("div", {
		className: "w-full space-y-4",
		children: [sessionError && /* @__PURE__ */ jsxs("div", {
			className: "flex animate-in items-center gap-2.5 rounded-xl border border-rose-500/20 bg-rose-500/10 p-3 text-xs font-medium text-rose-500 backdrop-blur-sm fade-in slide-in-from-top-1",
			children: [/* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4 shrink-0" }), /* @__PURE__ */ jsx("span", { children: sessionError })]
		}), /* @__PURE__ */ jsxs("form", {
			onSubmit,
			className: "space-y-4",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "space-y-1",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "relative",
						children: [/* @__PURE__ */ jsx("div", {
							className: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-neutral-400 dark:text-neutral-500",
							children: /* @__PURE__ */ jsx(Mail, { className: "h-5 w-5" })
						}), /* @__PURE__ */ jsx("input", {
							id: "email",
							type: "text",
							required: true,
							autoComplete: "username",
							value: data.email,
							onChange: (e) => setData("email", e.target.value),
							placeholder: "Email Address",
							className: "w-full rounded-xl py-3.5 pr-4 pl-12 font-sans text-sm shadow-sm transition-all duration-200 focus:outline-none",
							style: {
								backgroundColor: "var(--zy-card-bg, #ffffff)",
								color: "var(--zy-text-primary, #111111)",
								borderColor: errors.email ? "#ef4444" : "var(--zy-border-subtle, #e5e7eb)",
								borderWidth: "1.5px",
								borderStyle: "solid"
							},
							onFocus: (e) => {
								if (!errors.email) {
									e.currentTarget.style.borderColor = "#111111";
									e.currentTarget.style.boxShadow = "0 0 0 3px rgba(0, 0, 0, 0.08)";
								}
							},
							onBlur: (e) => {
								if (!errors.email) {
									e.currentTarget.style.borderColor = "var(--zy-border-subtle, #e5e7eb)";
									e.currentTarget.style.boxShadow = "none";
								}
							}
						})]
					}), errors.email && /* @__PURE__ */ jsxs("p", {
						className: "mt-1 flex items-center gap-1 pl-1 text-[11px] font-medium text-rose-500",
						children: [/* @__PURE__ */ jsx(AlertCircle, { className: "h-3.5 w-3.5 shrink-0" }), errors.email]
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "space-y-1",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "relative",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-neutral-400 dark:text-neutral-500",
								children: /* @__PURE__ */ jsx(Lock, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ jsx("input", {
								id: "password",
								type: showPassword ? "text" : "password",
								required: true,
								autoComplete: "current-password",
								value: data.password,
								onChange: (e) => setData("password", e.target.value),
								placeholder: "Password",
								className: "w-full rounded-xl py-3.5 pr-12 pl-12 font-sans text-sm shadow-sm transition-all duration-200 focus:outline-none",
								style: {
									backgroundColor: "var(--zy-card-bg, #ffffff)",
									color: "var(--zy-text-primary, #111111)",
									borderColor: errors.password ? "#ef4444" : "var(--zy-border-subtle, #e5e7eb)",
									borderWidth: "1.5px",
									borderStyle: "solid"
								},
								onFocus: (e) => {
									if (!errors.password) {
										e.currentTarget.style.borderColor = "#111111";
										e.currentTarget.style.boxShadow = "0 0 0 3px rgba(0, 0, 0, 0.08)";
									}
								},
								onBlur: (e) => {
									if (!errors.password) {
										e.currentTarget.style.borderColor = "var(--zy-border-subtle, #e5e7eb)";
										e.currentTarget.style.boxShadow = "none";
									}
								}
							}),
							/* @__PURE__ */ jsx("button", {
								type: "button",
								onClick: () => setShowPassword(!showPassword),
								className: "absolute inset-y-0 right-0 flex cursor-pointer items-center pr-4 text-neutral-400 transition-colors hover:text-neutral-700 dark:hover:text-neutral-200",
								tabIndex: -1,
								title: showPassword ? "Hide password" : "Show password",
								children: showPassword ? /* @__PURE__ */ jsx(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(Eye, { className: "h-4 w-4" })
							})
						]
					}), errors.password && /* @__PURE__ */ jsxs("p", {
						className: "mt-1 flex items-center gap-1 pl-1 text-[11px] font-medium text-rose-500",
						children: [/* @__PURE__ */ jsx(AlertCircle, { className: "h-3.5 w-3.5 shrink-0" }), errors.password]
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "pt-2",
					children: /* @__PURE__ */ jsx("button", {
						type: "submit",
						disabled: processing,
						className: "flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-black px-4 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-neutral-800 hover:shadow-lg active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50 dark:bg-white dark:text-black dark:hover:bg-neutral-200",
						children: processing ? /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(Loader2, { className: "h-4 w-4 animate-spin" }), /* @__PURE__ */ jsx("span", { children: "Signing in..." })] }) : /* @__PURE__ */ jsx("span", { children: "Sign In" })
					})
				})
			]
		})]
	});
}
//#endregion
//#region resources/js/pages/Admin/Login.tsx
function Login({ status, error }) {
	const { data, setData, post, processing, errors, reset } = useForm({
		email: "",
		password: ""
	});
	const handleSubmit = (e) => {
		e.preventDefault();
		post("/z-admin/login", { onFinish: () => reset("password") });
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "relative flex min-h-screen w-full flex-col justify-between overflow-hidden font-sans transition-colors duration-300 selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black",
		style: {
			backgroundColor: "var(--zy-bg, #ffffff)",
			color: "var(--zy-text-primary, #111111)"
		},
		children: [
			/* @__PURE__ */ jsx(Head, { title: "Sign In | Zytrixon" }),
			/* @__PURE__ */ jsxs("div", {
				className: "pointer-events-none absolute inset-0 z-0 h-full w-full select-none",
				style: {
					backgroundImage: `url('/assets/aura-liquid-silk.jpg')`,
					backgroundSize: "cover",
					backgroundPosition: "left center"
				},
				children: [/* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" }), /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 bg-black/20" })]
			}),
			/* @__PURE__ */ jsx("svg", {
				viewBox: "0 0 1000 1000",
				preserveAspectRatio: "none",
				className: "pointer-events-none absolute inset-0 z-10 hidden h-full w-full fill-current lg:block",
				style: { color: "var(--zy-bg, #ffffff)" },
				children: /* @__PURE__ */ jsx("path", { d: "M 780,0 C 790,90 730,170 680,270 C 630,370 570,440 550,540 C 530,640 600,720 570,820 C 540,900 460,950 420,1000 L 1000,1000 L 1000,0 Z" })
			}),
			/* @__PURE__ */ jsx("svg", {
				viewBox: "0 0 1000 600",
				preserveAspectRatio: "none",
				className: "pointer-events-none absolute inset-0 z-10 h-full w-full fill-current lg:hidden",
				style: { color: "var(--zy-bg, #ffffff)" },
				children: /* @__PURE__ */ jsx("path", { d: "M 0,220 C 260,245 480,195 720,230 C 850,245 940,215 1000,220 L 1000,600 L 0,600 Z" })
			}),
			/* @__PURE__ */ jsxs("header", {
				className: "relative z-30 flex w-full shrink-0 items-center justify-between px-6 pt-7 pb-4 sm:px-12 sm:pt-9 lg:px-16",
				children: [/* @__PURE__ */ jsxs("a", {
					href: "/",
					className: "group inline-flex items-center gap-3 transition-opacity hover:opacity-90 sm:gap-3.5",
					title: "Return to Zytrixon",
					children: [/* @__PURE__ */ jsx("div", {
						className: "flex h-10 w-10 items-center justify-center rounded-2xl border border-white/20 bg-white/10 p-2 shadow-lg backdrop-blur-md transition-transform group-hover:scale-105 sm:h-11 sm:w-11 sm:p-2.5",
						children: /* @__PURE__ */ jsx(Logo, { className: "h-full w-full fill-current text-white" })
					}), /* @__PURE__ */ jsx("span", {
						className: "font-serif text-2xl font-bold tracking-[0.2em] text-white uppercase drop-shadow-sm sm:text-3xl",
						children: "ZYTRIXON"
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "flex items-center gap-2",
					children: /* @__PURE__ */ jsx(AdminThemeToggle, { className: "border border-white/25 bg-white/15 text-white shadow-md backdrop-blur-md hover:bg-white/25 dark:border-white/10 dark:bg-white/5 dark:text-white" })
				})]
			}),
			/* @__PURE__ */ jsxs("main", {
				className: "relative z-20 mx-auto my-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-between gap-10 px-6 py-6 sm:px-12 sm:py-10 lg:flex-row lg:gap-14 lg:px-16",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "w-full pt-4 text-white select-none lg:max-w-md lg:pt-0 xl:max-w-lg",
					children: [/* @__PURE__ */ jsx("h1", {
						className: "font-serif text-4xl leading-[1.08] font-bold tracking-tight text-white drop-shadow-sm sm:text-5xl lg:text-6xl xl:text-7xl",
						children: "Welcome Back."
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-3 font-sans text-base font-normal tracking-wide text-neutral-300 drop-shadow-sm sm:text-lg lg:text-xl",
						children: "Access your dashboard."
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "w-full max-w-sm sm:max-w-md lg:ml-auto lg:translate-x-4 xl:translate-x-6",
					children: [/* @__PURE__ */ jsx("div", {
						className: "mb-6",
						children: /* @__PURE__ */ jsx("h2", {
							className: "text-right font-sans text-3xl font-bold tracking-tight sm:text-4xl",
							style: { color: "var(--zy-text-primary, #111111)" },
							children: "Sign In"
						})
					}), /* @__PURE__ */ jsx(LoginFormCard, {
						data,
						setData,
						errors,
						processing,
						onSubmit: handleSubmit,
						sessionError: error || status
					})]
				})]
			}),
			/* @__PURE__ */ jsxs("footer", {
				className: "relative z-20 w-full shrink-0 px-6 py-6 font-sans text-xs tracking-wide text-neutral-400 sm:px-12 lg:px-16",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Zytrixon Tech. All rights reserved."
				]
			})
		]
	});
}
Login.layout = (page) => page;
//#endregion
export { Login as default };

//# sourceMappingURL=Login-BOZNjkTi.js.map