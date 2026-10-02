import { t as Logo } from "./logo-BcYw_ZRA.js";
import { t as AdminThemeToggle } from "./AdminThemeToggle-CGtv_TvQ.js";
import { Link, router, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
import { AlertCircle, CheckCircle2, ChevronLeft, ChevronRight, Clock, Globe, LayoutDashboard, LogOut, Mail, MapPin, Menu, Newspaper, ShieldAlert, Users } from "lucide-react";
import { createPortal } from "react-dom";
//#region resources/js/config/admin-navigation.ts
var ADMIN_NAV_ITEMS = [
	{
		id: "dashboard",
		label: "Dashboard",
		href: "/z-admin/dashboard",
		icon: LayoutDashboard,
		description: "Realtime Telemetry & System Control",
		matcher: (url) => url === "/z-admin" || url === "/z-admin/dashboard" || url.startsWith("/z-admin/dashboard")
	},
	{
		id: "users",
		label: "Users Directory",
		href: "/z-admin/users",
		icon: Users,
		description: "User Accounts, Roles & Access Control",
		matcher: (url) => url.startsWith("/z-admin/users")
	},
	{
		id: "enquiries",
		label: "Enquiries / Leads",
		href: "/z-admin/contacts",
		icon: Mail,
		description: "Client Project Inquiries & Realtime Leads",
		matcher: (url) => url.startsWith("/z-admin/contacts") || url.startsWith("/z-admin/enquiries")
	},
	{
		id: "blogs",
		label: "Blog Articles",
		href: "/z-admin/blogs",
		icon: Newspaper,
		description: "Publish Technical Insights & Rich HTML Content",
		matcher: (url) => url.startsWith("/z-admin/blogs")
	},
	{
		id: "seo-pages",
		label: "SEO Location Pages",
		href: "/z-admin/seo-pages",
		icon: MapPin,
		description: "AI-Powered Location × Service SEO Pages",
		matcher: (url) => url.startsWith("/z-admin/seo-pages")
	}
];
function getActiveAdminNavItem(url) {
	return ADMIN_NAV_ITEMS.find((item) => item.matcher(url)) || ADMIN_NAV_ITEMS[0];
}
//#endregion
//#region resources/js/components/admin/AdminSidebar.tsx
function AdminSidebar({ className = "", mobileOpen, onCloseMobile, collapsed, onToggleCollapse }) {
	const { auth } = usePage().props;
	const { url } = usePage();
	const user = auth?.user;
	const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
	const handleConfirmLogout = () => {
		setShowLogoutConfirm(false);
		router.post("/z-admin/logout");
	};
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [
		mobileOpen && /* @__PURE__ */ jsx("div", {
			onClick: onCloseMobile,
			"aria-hidden": "true",
			className: "fixed inset-0 z-40 bg-black/80 backdrop-blur-sm transition-opacity duration-300 lg:hidden"
		}),
		/* @__PURE__ */ jsxs("aside", {
			className: `fixed inset-y-0 left-0 z-40 flex h-screen shrink-0 flex-col justify-between border-r transition-all duration-300 ease-in-out ${mobileOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 ${collapsed ? "w-16" : "w-56"} ${className}`,
			style: {
				backgroundColor: "var(--admin-sidebar-bg)",
				borderColor: "var(--admin-border)"
			},
			children: [
				/* @__PURE__ */ jsx("button", {
					type: "button",
					onClick: () => {
						if (mobileOpen) onCloseMobile();
						else onToggleCollapse();
					},
					"aria-label": collapsed ? "Expand sidebar" : "Collapse sidebar",
					title: collapsed ? "Expand sidebar" : "Collapse sidebar",
					className: "absolute top-5 -right-3.5 z-50 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border shadow-md transition-all duration-200 hover:scale-110 active:scale-95",
					style: {
						backgroundColor: "var(--admin-card-bg)",
						borderColor: "var(--admin-border)",
						color: "var(--admin-text-primary)",
						boxShadow: "0 2px 8px rgba(0, 0, 0, 0.25)"
					},
					children: collapsed ? /* @__PURE__ */ jsx(ChevronRight, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ jsx(ChevronLeft, { className: "h-3.5 w-3.5" })
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex flex-1 flex-col overflow-x-hidden overflow-y-auto",
					children: [/* @__PURE__ */ jsx("div", {
						className: `flex h-16 shrink-0 items-center border-b ${collapsed ? "justify-center px-2" : "justify-between px-3.5"}`,
						style: { borderColor: "var(--admin-border)" },
						children: /* @__PURE__ */ jsxs(Link, {
							href: "/z-admin/dashboard",
							onClick: onCloseMobile,
							className: "flex items-center gap-2.5 overflow-hidden",
							children: [/* @__PURE__ */ jsx("div", {
								className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border p-1.5 backdrop-blur-sm",
								style: {
									backgroundColor: "var(--admin-button-secondary-bg)",
									borderColor: "var(--admin-border)"
								},
								children: /* @__PURE__ */ jsx(Logo, {
									className: "h-full w-full fill-current",
									style: { color: "var(--admin-text-primary)" }
								})
							}), !collapsed && /* @__PURE__ */ jsxs("div", {
								className: "truncate",
								children: [/* @__PURE__ */ jsx("div", {
									className: "font-heading text-xs font-bold tracking-wider",
									style: { color: "var(--admin-text-primary)" },
									children: "ZYTRIXON"
								}), /* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-1 font-mono text-[9px] font-semibold",
									style: { color: "var(--admin-accent)" },
									children: [/* @__PURE__ */ jsx("span", {
										className: "h-1.5 w-1.5 animate-pulse rounded-full",
										style: { backgroundColor: "var(--admin-accent)" }
									}), "Console"]
								})]
							})]
						})
					}), /* @__PURE__ */ jsxs("nav", {
						className: "space-y-1 p-2",
						children: [!collapsed && /* @__PURE__ */ jsx("div", {
							className: "px-2.5 py-1 font-mono text-[9px] font-bold tracking-wider uppercase",
							style: { color: "var(--admin-text-muted)" },
							children: "Management"
						}), ADMIN_NAV_ITEMS.map((item) => {
							const Icon = item.icon;
							const isActive = item.matcher(url);
							return /* @__PURE__ */ jsxs(Link, {
								href: item.href,
								onClick: onCloseMobile,
								title: collapsed ? item.label : void 0,
								className: `group flex items-center rounded-xl py-2 text-xs font-medium transition-all ${collapsed ? "justify-center px-2" : "justify-between px-3"}`,
								style: isActive ? {
									backgroundColor: "var(--admin-accent)",
									color: "#ffffff",
									fontWeight: 600,
									boxShadow: "0 4px 12px var(--admin-accent-glow)"
								} : { color: "var(--admin-text-secondary)" },
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2.5 truncate",
									children: [/* @__PURE__ */ jsx("div", {
										className: "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg transition-colors",
										style: {
											backgroundColor: isActive ? "rgba(255, 255, 255, 0.2)" : "var(--admin-button-secondary-bg)",
											color: isActive ? "#ffffff" : "inherit"
										},
										children: /* @__PURE__ */ jsx(Icon, { className: "h-3.5 w-3.5" })
									}), !collapsed && /* @__PURE__ */ jsx("span", {
										className: "truncate text-[11px] tracking-tight",
										children: item.label
									})]
								}), !collapsed && isActive && /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 shrink-0 rounded-full bg-white" })]
							}, item.id);
						})]
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "shrink-0 space-y-2 border-t p-2.5",
					style: { borderColor: "var(--admin-border)" },
					children: [!collapsed ? /* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between rounded-xl border p-2",
						style: {
							backgroundColor: "var(--admin-card-subtle)",
							borderColor: "var(--admin-border-subtle)"
						},
						children: [/* @__PURE__ */ jsxs("div", {
							className: "min-w-0 pr-1.5",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-1.5 truncate text-[11px] font-semibold",
								style: { color: "var(--admin-text-primary)" },
								children: [/* @__PURE__ */ jsx(ShieldAlert, {
									className: "h-3 w-3 shrink-0",
									style: { color: "var(--admin-accent)" }
								}), /* @__PURE__ */ jsx("span", {
									className: "truncate",
									children: user?.name || "Administrator"
								})]
							}), /* @__PURE__ */ jsx("div", {
								className: "truncate font-mono text-[10px]",
								style: { color: "var(--admin-text-muted)" },
								children: user?.email || "admin@zytrixon.com"
							})]
						}), /* @__PURE__ */ jsx("span", {
							className: "shrink-0 rounded border px-1 py-0.5 font-mono text-[8px] font-bold uppercase",
							style: {
								borderColor: "var(--admin-border)",
								backgroundColor: "var(--admin-button-secondary-bg)",
								color: "var(--admin-accent)"
							},
							children: "Admin"
						})]
					}) : /* @__PURE__ */ jsx("div", {
						className: "flex justify-center",
						title: `${user?.name || "Administrator"} (${user?.email || ""})`,
						children: /* @__PURE__ */ jsx("div", {
							className: "flex h-7 w-7 items-center justify-center rounded-lg border text-xs font-bold",
							style: {
								borderColor: "var(--admin-border)",
								backgroundColor: "var(--admin-button-secondary-bg)",
								color: "var(--admin-accent)"
							},
							children: user?.name ? user.name.charAt(0).toUpperCase() : "A"
						})
					}), /* @__PURE__ */ jsxs("button", {
						type: "button",
						onClick: () => setShowLogoutConfirm(true),
						title: "Logout",
						className: `flex w-full cursor-pointer items-center justify-center rounded-xl border border-transparent p-2 text-xs font-medium text-red-500 transition-all hover:bg-red-500/10 ${collapsed ? "" : "gap-2"}`,
						children: [/* @__PURE__ */ jsx(LogOut, { className: "h-4 w-4 shrink-0" }), !collapsed && /* @__PURE__ */ jsx("span", {
							className: "text-[11px] font-semibold",
							children: "Logout"
						})]
					})]
				})
			]
		}),
		showLogoutConfirm && typeof document !== "undefined" && createPortal(/* @__PURE__ */ jsx("div", {
			className: "animate-fadeIn fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-md",
			style: { backgroundColor: "var(--admin-modal-overlay)" },
			children: /* @__PURE__ */ jsxs("div", {
				className: "relative w-full max-w-sm space-y-4 rounded-2xl border p-6 shadow-2xl transition-colors duration-200",
				style: {
					backgroundColor: "var(--admin-modal-bg)",
					borderColor: "var(--admin-border)"
				},
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ jsx("div", {
							className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-red-500/20 bg-red-500/10 text-red-500",
							children: /* @__PURE__ */ jsx(LogOut, { className: "h-5 w-5" })
						}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
							className: "font-heading text-base font-bold",
							style: { color: "var(--admin-text-primary)" },
							children: "Confirm Logout"
						}), /* @__PURE__ */ jsx("p", {
							className: "text-xs",
							style: { color: "var(--admin-text-muted)" },
							children: "Are you sure you want to end your session?"
						})] })]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-xs leading-relaxed",
						style: { color: "var(--admin-text-secondary)" },
						children: "You will be safely signed out of the Zytrixon Admin Console and redirected to the login screen."
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-end gap-2.5 border-t pt-3",
						style: { borderColor: "var(--admin-border)" },
						children: [/* @__PURE__ */ jsx("button", {
							type: "button",
							onClick: () => setShowLogoutConfirm(false),
							className: "cursor-pointer rounded-xl border px-4 py-2 text-xs font-semibold transition-colors",
							style: {
								backgroundColor: "var(--admin-button-secondary-bg)",
								borderColor: "var(--admin-border)",
								color: "var(--admin-text-secondary)"
							},
							children: "Cancel"
						}), /* @__PURE__ */ jsxs("button", {
							type: "button",
							onClick: handleConfirmLogout,
							className: "inline-flex cursor-pointer items-center gap-1.5 rounded-xl bg-red-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:bg-red-500 active:scale-95",
							children: [/* @__PURE__ */ jsx(LogOut, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ jsx("span", { children: "Logout" })]
						})]
					})
				]
			})
		}), document.body)
	] });
}
//#endregion
//#region resources/js/components/admin/AdminTopNav.tsx
function AdminTopNav({ title: _title, onToggleMobileSidebar, collapsed = false } = {}) {
	const { auth } = usePage().props;
	const { url } = usePage();
	const user = auth?.user;
	const activeItem = getActiveAdminNavItem(url);
	const ActiveIcon = activeItem.icon;
	const [currentTime, setCurrentTime] = useState("");
	const [currentDate, setCurrentDate] = useState("");
	useEffect(() => {
		const updateClock = () => {
			const now = /* @__PURE__ */ new Date();
			setCurrentTime(now.toLocaleTimeString("en-US", {
				hour: "2-digit",
				minute: "2-digit",
				second: "2-digit",
				hour12: true
			}));
			setCurrentDate(now.toLocaleDateString("en-US", {
				weekday: "short",
				day: "numeric",
				month: "short"
			}));
		};
		updateClock();
		const intervalId = setInterval(updateClock, 1e3);
		return () => clearInterval(intervalId);
	}, []);
	return /* @__PURE__ */ jsxs("header", {
		className: `fixed top-0 right-0 left-0 z-30 flex h-16 items-center justify-between border-b px-3 backdrop-blur-xl transition-all duration-300 ease-in-out sm:px-6 ${collapsed ? "lg:left-16" : "lg:left-56"}`,
		style: {
			backgroundColor: "var(--admin-topbar-bg)",
			borderColor: "var(--admin-border)"
		},
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex min-w-0 items-center gap-2.5",
			children: [/* @__PURE__ */ jsx("button", {
				type: "button",
				onClick: onToggleMobileSidebar,
				"aria-label": "Open sidebar menu",
				className: "flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-xl border transition-colors lg:hidden",
				style: {
					backgroundColor: "var(--admin-button-secondary-bg)",
					borderColor: "var(--admin-border)",
					color: "var(--admin-text-secondary)"
				},
				children: /* @__PURE__ */ jsx(Menu, { className: "h-4 w-4" })
			}), /* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-2 rounded-xl border px-3 py-1.5 shadow-sm transition-all duration-200",
				style: {
					backgroundColor: "var(--admin-card-bg)",
					borderColor: "var(--admin-border)"
				},
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "h-3.5 w-1 shrink-0 rounded-full",
						style: {
							backgroundColor: "var(--admin-accent)",
							boxShadow: "0 0 8px var(--admin-accent)"
						}
					}),
					/* @__PURE__ */ jsx(ActiveIcon, {
						className: "h-3.5 w-3.5 shrink-0",
						style: { color: "var(--admin-accent)" }
					}),
					/* @__PURE__ */ jsx("span", {
						className: "font-heading text-xs font-bold tracking-tight whitespace-nowrap sm:text-sm",
						style: { color: "var(--admin-text-primary)" },
						children: activeItem.label
					})
				]
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex shrink-0 items-center gap-1.5 sm:gap-2.5",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-1.5 rounded-xl border px-2.5 py-1.5 font-mono text-xs shadow-inner sm:gap-2 sm:px-3 sm:py-1.5",
					title: "Live system time",
					style: {
						backgroundColor: "var(--admin-card-subtle)",
						borderColor: "var(--admin-border)",
						color: "var(--admin-text-primary)"
					},
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "relative flex h-2 w-2 shrink-0 items-center justify-center",
							children: [/* @__PURE__ */ jsx("span", {
								className: "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
								style: { backgroundColor: "var(--admin-accent)" }
							}), /* @__PURE__ */ jsx("span", {
								className: "relative inline-flex h-1.5 w-1.5 rounded-full",
								style: { backgroundColor: "var(--admin-accent)" }
							})]
						}),
						/* @__PURE__ */ jsx(Clock, {
							className: "h-3 w-3 shrink-0",
							style: { color: "var(--admin-accent)" }
						}),
						/* @__PURE__ */ jsx("span", {
							className: "text-[11px] font-bold tracking-wide sm:text-xs",
							style: { color: "var(--admin-text-primary)" },
							children: currentTime || "--:--"
						}),
						/* @__PURE__ */ jsxs("span", {
							className: "hidden text-[11px] md:inline",
							style: { color: "var(--admin-text-muted)" },
							children: [
								"(",
								currentDate,
								")"
							]
						})
					]
				}),
				/* @__PURE__ */ jsx(AdminThemeToggle, {}),
				/* @__PURE__ */ jsxs("a", {
					href: "/",
					target: "_blank",
					rel: "noreferrer",
					className: "hidden items-center gap-1.5 rounded-xl border px-3 py-1.5 font-mono text-xs transition-all xl:flex",
					title: "Open live website in new tab",
					style: {
						backgroundColor: "var(--admin-button-secondary-bg)",
						borderColor: "var(--admin-border)",
						color: "var(--admin-text-secondary)"
					},
					children: [/* @__PURE__ */ jsx(Globe, { className: "h-3.5 w-3.5 text-blue-400" }), /* @__PURE__ */ jsx("span", { children: "Live Site" })]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "hidden h-5 w-px sm:block",
					style: { backgroundColor: "var(--admin-border)" }
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2 rounded-xl border p-1 sm:pr-3",
					style: {
						backgroundColor: "var(--admin-card-subtle)",
						borderColor: "var(--admin-border)"
					},
					children: [/* @__PURE__ */ jsx("div", {
						className: "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[11px] font-bold",
						style: {
							borderColor: "var(--admin-border)",
							backgroundColor: "var(--admin-button-secondary-bg)",
							color: "var(--admin-accent)"
						},
						children: user?.name ? user.name.charAt(0).toUpperCase() : "A"
					}), /* @__PURE__ */ jsxs("div", {
						className: "hidden text-left sm:block",
						children: [/* @__PURE__ */ jsx("div", {
							className: "max-w-[90px] truncate text-[11px] leading-tight font-semibold",
							style: { color: "var(--admin-text-primary)" },
							children: user?.name || "Admin"
						}), /* @__PURE__ */ jsx("div", {
							className: "text-[9px] capitalize",
							style: { color: "var(--admin-text-muted)" },
							children: user?.role || "admin"
						})]
					})]
				})
			]
		})]
	});
}
//#endregion
//#region resources/js/layouts/AdminLayout.tsx
function AdminLayout({ children, title = "Administration Panel" }) {
	const { flash } = usePage().props;
	const { url } = usePage();
	const [mobileOpen, setMobileOpen] = useState(false);
	const [collapsed, setCollapsed] = useState(false);
	useEffect(() => {
		if (localStorage.getItem("zy-theme") === "light") {
			document.documentElement.classList.add("light");
			document.documentElement.classList.remove("dark");
			document.body.classList.add("light");
			document.body.classList.remove("dark");
		}
		document.body.classList.add("admin-body");
		return () => {
			document.body.classList.remove("admin-body");
		};
	}, []);
	useEffect(() => {
		setMobileOpen(false);
	}, [url]);
	return /* @__PURE__ */ jsxs("div", {
		className: "admin-panel min-h-screen font-sans transition-colors duration-200",
		style: {
			backgroundColor: "var(--admin-bg)",
			color: "var(--admin-text-primary)"
		},
		children: [
			/* @__PURE__ */ jsx(AdminSidebar, {
				mobileOpen,
				onCloseMobile: () => setMobileOpen(false),
				collapsed,
				onToggleCollapse: () => setCollapsed((prev) => !prev)
			}),
			/* @__PURE__ */ jsx(AdminTopNav, {
				title,
				collapsed,
				onToggleMobileSidebar: () => setMobileOpen((prev) => !prev),
				onToggleCollapse: () => setCollapsed((prev) => !prev)
			}),
			/* @__PURE__ */ jsxs("div", {
				className: `flex min-h-screen min-w-0 flex-col pt-16 transition-all duration-300 ease-in-out ${collapsed ? "lg:pl-16" : "lg:pl-56"}`,
				style: { backgroundColor: "var(--admin-bg)" },
				children: [
					flash?.success && /* @__PURE__ */ jsxs("div", {
						className: "mx-3 mt-3 flex items-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-3 text-xs text-emerald-500 sm:mx-6 sm:mt-4",
						children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 shrink-0" }), /* @__PURE__ */ jsx("span", { children: flash.success })]
					}),
					flash?.error && /* @__PURE__ */ jsxs("div", {
						className: "mx-3 mt-3 flex items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 p-3 text-xs text-red-500 sm:mx-6 sm:mt-4",
						children: [/* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4 shrink-0" }), /* @__PURE__ */ jsx("span", { children: flash.error })]
					}),
					/* @__PURE__ */ jsx("main", {
						className: "min-w-0 flex-1 p-3.5 sm:p-6",
						children: /* @__PURE__ */ jsx("div", {
							className: "admin-page-enter",
							children
						}, url)
					})
				]
			})
		]
	});
}
//#endregion
export { AdminLayout as t };

//# sourceMappingURL=AdminLayout-TYYnUASU.js.map