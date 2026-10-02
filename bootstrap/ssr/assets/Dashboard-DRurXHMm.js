import { t as Logo } from "./logo-BcYw_ZRA.js";
import { Head, Link, router, usePage } from "@inertiajs/react";
import "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { AlertCircle, ArrowRight, Briefcase, CheckCircle2, Globe, Lock, LogOut, Mail, Phone, UserCheck } from "lucide-react";
//#region resources/js/components/customer/CustomerTopNav.tsx
function CustomerTopNav() {
	const { auth } = usePage().props;
	const user = auth?.user;
	const handleLogout = () => {
		router.post("/z-admin/logout");
	};
	return /* @__PURE__ */ jsxs("header", {
		className: "sticky top-0 z-20 flex h-16 items-center justify-between border-b border-white/10 bg-[#0a0a0d]/90 px-6 backdrop-blur-md",
		children: [/* @__PURE__ */ jsx("div", {
			className: "flex items-center gap-3",
			children: /* @__PURE__ */ jsxs("a", {
				href: "/",
				className: "flex items-center gap-2.5",
				children: [/* @__PURE__ */ jsx("div", {
					className: "flex h-8 w-8 items-center justify-center rounded-lg border border-white/20 bg-white/10 p-1.5 backdrop-blur-sm",
					children: /* @__PURE__ */ jsx(Logo, { className: "h-full w-full fill-current text-white" })
				}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
					className: "font-heading text-sm font-bold tracking-wider text-white",
					children: "ZYTRIXON"
				}), /* @__PURE__ */ jsx("div", {
					className: "-mt-0.5 font-mono text-[10px] text-blue-400",
					children: "Customer Portal"
				})] })]
			})
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-3",
			children: [
				/* @__PURE__ */ jsxs("a", {
					href: "/",
					target: "_blank",
					rel: "noreferrer",
					className: "hidden items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-neutral-300 transition-all hover:text-white sm:flex",
					children: [/* @__PURE__ */ jsx(Globe, { className: "h-3.5 w-3.5 text-neutral-400" }), /* @__PURE__ */ jsx("span", { children: "Website" })]
				}),
				/* @__PURE__ */ jsx("div", { className: "hidden h-4 w-px bg-white/10 sm:block" }),
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ jsx("div", {
						className: "flex h-7 w-7 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/20 text-xs font-bold text-blue-300",
						children: /* @__PURE__ */ jsx(UserCheck, { className: "h-4 w-4" })
					}), /* @__PURE__ */ jsxs("div", {
						className: "hidden text-left md:block",
						children: [/* @__PURE__ */ jsx("div", {
							className: "text-xs leading-none font-semibold text-white",
							children: user?.name || "Customer"
						}), /* @__PURE__ */ jsx("div", {
							className: "mt-0.5 font-mono text-[10px] text-neutral-400",
							children: user?.email
						})]
					})]
				}),
				/* @__PURE__ */ jsxs("button", {
					type: "button",
					onClick: handleLogout,
					className: "flex items-center gap-1.5 rounded-lg border border-transparent px-3 py-1.5 text-xs font-medium text-red-400 transition-all hover:border-red-500/20 hover:bg-red-500/10 hover:text-red-300",
					title: "Sign Out",
					children: [/* @__PURE__ */ jsx(LogOut, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ jsx("span", {
						className: "hidden sm:inline",
						children: "Sign Out"
					})]
				})
			]
		})]
	});
}
//#endregion
//#region resources/js/layouts/CustomerLayout.tsx
function CustomerLayout({ children }) {
	const { flash } = usePage().props;
	return /* @__PURE__ */ jsxs("div", {
		className: "flex min-h-screen flex-col bg-black font-sans text-white selection:bg-white selection:text-black",
		children: [
			/* @__PURE__ */ jsx(CustomerTopNav, {}),
			flash?.success && /* @__PURE__ */ jsx("div", {
				className: "mx-auto mt-4 w-full max-w-6xl px-6",
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-3 text-xs text-emerald-400",
					children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 shrink-0" }), /* @__PURE__ */ jsx("span", { children: flash.success })]
				})
			}),
			flash?.error && /* @__PURE__ */ jsx("div", {
				className: "mx-auto mt-4 w-full max-w-6xl px-6",
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 p-3 text-xs text-red-400",
					children: [/* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4 shrink-0" }), /* @__PURE__ */ jsx("span", { children: flash.error })]
				})
			}),
			/* @__PURE__ */ jsx("main", {
				className: "mx-auto w-full max-w-6xl flex-1 px-6 py-8",
				children
			}),
			/* @__PURE__ */ jsx("footer", {
				className: "border-t border-white/5 px-6 py-6 text-center text-xs text-neutral-500",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 sm:flex-row",
					children: [/* @__PURE__ */ jsx("span", { children: "Zytrixon Client Workspace • Dedicated Enterprise Service" }), /* @__PURE__ */ jsx("span", { children: "Direct Hotline: +91 7049711475" })]
				})
			})
		]
	});
}
//#endregion
//#region resources/js/pages/Customer/Dashboard.tsx
function Dashboard({ user, services, supportPhone, supportEmail }) {
	return /* @__PURE__ */ jsxs(CustomerLayout, { children: [/* @__PURE__ */ jsx(Head, { title: "Customer Portal | Zytrixon Tech" }), /* @__PURE__ */ jsxs("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-[#0c0c10] via-[#101018] to-[#0c0c10] p-6 backdrop-blur-xl sm:p-8",
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex flex-col justify-between gap-4 md:flex-row md:items-center",
					children: [/* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsxs("div", {
							className: "mb-2 flex items-center gap-2",
							children: [/* @__PURE__ */ jsxs("span", {
								className: "inline-flex items-center gap-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-blue-400",
								children: [/* @__PURE__ */ jsx(UserCheck, { className: "h-3.5 w-3.5" }), "Customer Workspace"]
							}), /* @__PURE__ */ jsxs("span", {
								className: "font-mono text-xs text-neutral-500",
								children: ["Role: ", user.role]
							})]
						}),
						/* @__PURE__ */ jsxs("h1", {
							className: "font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl",
							children: ["Welcome, ", user.name]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-1 max-w-2xl text-sm text-neutral-400",
							children: "You are signed in to your dedicated client portal. Your active services, project roadmaps, and priority concierge contacts are managed here."
						})
					] }), /* @__PURE__ */ jsx("div", {
						className: "flex shrink-0 items-center gap-2",
						children: /* @__PURE__ */ jsx("span", {
							className: "rounded-xl border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-xs text-neutral-300",
							children: "Status: Active Account"
						})
					})]
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "rounded-2xl border border-amber-500/30 bg-amber-500/[0.04] p-5 backdrop-blur-sm",
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex flex-col justify-between gap-3 sm:flex-row sm:items-center",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-start gap-3",
						children: [/* @__PURE__ */ jsx("div", {
							className: "shrink-0 rounded-lg border border-amber-500/20 bg-amber-500/10 p-2 text-amber-400",
							children: /* @__PURE__ */ jsx(Lock, { className: "h-5 w-5" })
						}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
							className: "flex items-center gap-2 text-sm font-semibold text-white",
							children: "Role Separation Enforcement Test"
						}), /* @__PURE__ */ jsxs("p", {
							className: "mt-0.5 text-xs text-neutral-400",
							children: [
								"Because your role is",
								" ",
								/* @__PURE__ */ jsx("span", {
									className: "font-mono font-bold text-blue-400",
									children: "customer"
								}),
								", you are isolated from administrator panels. You can verify this security guard by clicking the test button."
							]
						})] })]
					}), /* @__PURE__ */ jsxs(Link, {
						href: "/z-admin/dashboard",
						className: "inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-amber-500/30 bg-amber-500/10 px-3.5 py-2 text-xs font-medium text-amber-300 transition-all hover:bg-amber-500/20",
						children: [/* @__PURE__ */ jsx("span", { children: "Test Admin Access" }), /* @__PURE__ */ jsx(ArrowRight, { className: "h-3.5 w-3.5" })]
					})]
				})
			}),
			/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
				className: "mb-4 flex items-center justify-between",
				children: /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
					className: "font-heading text-lg font-bold text-white",
					children: "Assigned Services & Solutions"
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-0.5 text-xs text-neutral-400",
					children: "Your available technology stack and deployed infrastructure"
				})] })
			}), /* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-1 gap-4 md:grid-cols-3",
				children: services.map((svc, idx) => /* @__PURE__ */ jsxs("div", {
					className: "flex flex-col justify-between rounded-xl border border-white/10 bg-[#0a0a0d] p-5 transition-all hover:border-white/20",
					children: [/* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsxs("div", {
							className: "mb-3 flex items-center justify-between",
							children: [/* @__PURE__ */ jsx("div", {
								className: "rounded-lg border border-white/10 bg-white/[0.04] p-2 text-white",
								children: /* @__PURE__ */ jsx(Briefcase, { className: "h-4 w-4" })
							}), /* @__PURE__ */ jsx("span", {
								className: "rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] text-emerald-400",
								children: svc.status
							})]
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "font-heading text-sm font-semibold text-white",
							children: svc.title
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-1 text-xs leading-relaxed text-neutral-400",
							children: svc.description
						})
					] }), /* @__PURE__ */ jsxs("div", {
						className: "mt-4 flex items-center justify-between border-t border-white/5 pt-3 text-[11px] text-neutral-500",
						children: [/* @__PURE__ */ jsx("span", { children: "24/7 Monitored" }), /* @__PURE__ */ jsx("span", {
							className: "font-mono text-blue-400",
							children: "SLA 99.9%"
						})]
					})]
				}, idx))
			})] }),
			/* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-1 gap-4 md:grid-cols-2",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "rounded-xl border border-white/10 bg-[#0a0a0d] p-5",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "mb-2 flex items-center gap-3",
						children: [/* @__PURE__ */ jsx("div", {
							className: "rounded-lg border border-emerald-500/20 bg-emerald-500/10 p-2 text-emerald-400",
							children: /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4" })
						}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
							className: "font-mono text-xs font-semibold tracking-wider text-neutral-400 uppercase",
							children: "Direct Support Line"
						}), /* @__PURE__ */ jsx("a", {
							href: `tel:${supportPhone}`,
							className: "font-mono text-base font-bold text-white transition-colors hover:text-emerald-400",
							children: supportPhone
						})] })]
					}), /* @__PURE__ */ jsx("p", {
						className: "text-xs text-neutral-500",
						children: "Direct technical hotline for rapid troubleshooting and service deployment."
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "rounded-xl border border-white/10 bg-[#0a0a0d] p-5",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "mb-2 flex items-center gap-3",
						children: [/* @__PURE__ */ jsx("div", {
							className: "rounded-lg border border-blue-500/20 bg-blue-500/10 p-2 text-blue-400",
							children: /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4" })
						}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
							className: "font-mono text-xs font-semibold tracking-wider text-neutral-400 uppercase",
							children: "Support Desk Email"
						}), /* @__PURE__ */ jsx("a", {
							href: `mailto:${supportEmail}`,
							className: "font-mono text-base font-bold text-white transition-colors hover:text-blue-400",
							children: supportEmail
						})] })]
					}), /* @__PURE__ */ jsx("p", {
						className: "text-xs text-neutral-500",
						children: "Email ticketing system for feature requests and project milestone tracking."
					})]
				})]
			})
		]
	})] });
}
Dashboard.layout = (page) => page;
//#endregion
export { Dashboard as default };

//# sourceMappingURL=Dashboard-DRurXHMm.js.map