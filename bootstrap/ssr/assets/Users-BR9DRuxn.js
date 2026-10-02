import { t as AdminLayout } from "./AdminLayout-TYYnUASU.js";
import { t as AdminStatCard } from "./AdminStatCard-TlKRlqbk.js";
import { t as AdminDropdown } from "./AdminDropdown-D_rYU8MI.js";
import { Head, router, usePage } from "@inertiajs/react";
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { AlertTriangle, CheckCircle2, Clock, Edit3, Filter, Key, Plus, RotateCcw, Search, Shield, ShieldCheck, Trash2, UserCheck, Users, X } from "lucide-react";
import { createPortal } from "react-dom";
//#region resources/js/components/admin/users/UserStatsCards.tsx
function UserStatsCards({ kpis }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4",
		children: [
			/* @__PURE__ */ jsx(AdminStatCard, {
				title: "Total Accounts",
				value: kpis.total,
				icon: Users,
				badgeVariant: "emerald"
			}),
			/* @__PURE__ */ jsx(AdminStatCard, {
				title: "Administrators",
				value: kpis.admins,
				icon: ShieldCheck,
				badgeVariant: "purple"
			}),
			/* @__PURE__ */ jsx(AdminStatCard, {
				title: "Customers",
				value: kpis.customers,
				icon: Shield,
				badgeVariant: "blue"
			}),
			/* @__PURE__ */ jsx(AdminStatCard, {
				title: "Verified Accounts",
				value: kpis.verified,
				icon: UserCheck,
				badgeVariant: "amber"
			})
		]
	});
}
//#endregion
//#region resources/js/components/admin/users/UserFilterBar.tsx
function UserFilterBar({ search, onSearchChange, selectedRole, onRoleChange, kpis, onSubmit, onClear, onOpenCreate, hasActiveFilters }) {
	const roleOptions = [
		{
			value: "all",
			label: "All Roles",
			badge: `${kpis.total}`,
			icon: Users
		},
		{
			value: "admin",
			label: "Administrators",
			badge: `${kpis.admins}`,
			icon: ShieldCheck
		},
		{
			value: "customer",
			label: "Customers",
			badge: `${kpis.customers}`,
			icon: Shield
		}
	];
	return /* @__PURE__ */ jsxs("div", {
		className: "relative z-30 flex flex-col justify-between gap-4 rounded-2xl border p-4 backdrop-blur-sm transition-colors duration-200 lg:flex-row lg:items-center",
		style: {
			backgroundColor: "var(--admin-card-bg)",
			borderColor: "var(--admin-border)"
		},
		children: [/* @__PURE__ */ jsxs("form", {
			onSubmit,
			className: "flex flex-1 flex-wrap items-center gap-3",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "relative min-w-[240px] flex-1 sm:max-w-md",
					children: [/* @__PURE__ */ jsx(Search, {
						className: "pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2",
						style: { color: "var(--admin-text-dim)" }
					}), /* @__PURE__ */ jsx("input", {
						type: "text",
						value: search,
						onChange: (e) => onSearchChange(e.target.value),
						placeholder: "Search users by name or email...",
						className: "w-full rounded-xl border py-2.5 pr-4 pl-9 text-xs transition-colors focus:outline-none",
						style: {
							backgroundColor: "var(--admin-input-bg)",
							borderColor: "var(--admin-input-border)",
							color: "var(--admin-text-primary)"
						}
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "min-w-[190px]",
					children: /* @__PURE__ */ jsx(AdminDropdown, {
						value: selectedRole,
						onChange: (val) => {
							onRoleChange(val);
						},
						options: roleOptions,
						placeholder: "Select role..."
					})
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ jsxs("button", {
						type: "submit",
						className: "inline-flex cursor-pointer items-center gap-1.5 rounded-xl px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition-all hover:opacity-90 active:scale-95",
						style: { backgroundColor: "var(--admin-accent)" },
						children: [/* @__PURE__ */ jsx(Filter, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ jsx("span", { children: "Filter" })]
					}), hasActiveFilters && /* @__PURE__ */ jsx("button", {
						type: "button",
						onClick: onClear,
						title: "Reset filters",
						className: "cursor-pointer rounded-xl border p-2.5 transition-colors",
						style: {
							backgroundColor: "var(--admin-button-secondary-bg)",
							borderColor: "var(--admin-border)",
							color: "var(--admin-text-secondary)"
						},
						children: /* @__PURE__ */ jsx(RotateCcw, { className: "h-4 w-4" })
					})]
				})
			]
		}), /* @__PURE__ */ jsxs("button", {
			type: "button",
			onClick: onOpenCreate,
			className: "inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition-all hover:opacity-90 active:scale-95",
			style: { backgroundColor: "var(--admin-accent)" },
			children: [/* @__PURE__ */ jsx(Plus, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", { children: "Add New User" })]
		})]
	});
}
//#endregion
//#region resources/js/components/admin/users/UserTable.tsx
function UserTable({ users, currentUserId, onEdit, onDelete }) {
	return /* @__PURE__ */ jsx("div", {
		className: "overflow-x-auto rounded-t-2xl",
		children: /* @__PURE__ */ jsxs("table", {
			className: "w-full text-left text-xs",
			children: [/* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", {
				className: "border-b font-mono",
				style: {
					backgroundColor: "var(--admin-table-head-bg)",
					borderColor: "var(--admin-table-border)",
					color: "var(--admin-text-secondary)"
				},
				children: [
					/* @__PURE__ */ jsx("th", {
						className: "px-4 py-3.5 font-semibold",
						children: "User"
					}),
					/* @__PURE__ */ jsx("th", {
						className: "px-4 py-3.5 font-semibold",
						children: "Role"
					}),
					/* @__PURE__ */ jsx("th", {
						className: "px-4 py-3.5 font-semibold",
						children: "Email Verification"
					}),
					/* @__PURE__ */ jsx("th", {
						className: "px-4 py-3.5 font-semibold",
						children: "Registered"
					}),
					/* @__PURE__ */ jsx("th", {
						className: "px-4 py-3.5 text-right font-semibold",
						children: "Actions"
					})
				]
			}) }), /* @__PURE__ */ jsx("tbody", {
				className: "divide-y",
				style: { borderColor: "var(--admin-table-border)" },
				children: users.length > 0 ? users.map((u) => {
					const isSelf = currentUserId === u.id;
					return /* @__PURE__ */ jsxs("tr", {
						className: "transition-colors",
						style: { borderBottom: "1px solid var(--admin-table-border)" },
						children: [
							/* @__PURE__ */ jsx("td", {
								className: "px-4 py-3",
								children: /* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ jsx("div", {
										className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border text-xs font-bold uppercase shadow-sm",
										style: {
											backgroundColor: u.role === "admin" ? "rgba(16, 185, 129, 0.12)" : "var(--admin-button-secondary-bg)",
											borderColor: u.role === "admin" ? "rgba(16, 185, 129, 0.3)" : "var(--admin-border)",
											color: u.role === "admin" ? "var(--admin-accent)" : "var(--admin-text-primary)"
										},
										children: u.name.charAt(0)
									}), /* @__PURE__ */ jsxs("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ jsxs("div", {
											className: "flex items-center gap-2 font-semibold",
											style: { color: "var(--admin-text-primary)" },
											children: [/* @__PURE__ */ jsx("span", { children: u.name }), isSelf && /* @__PURE__ */ jsx("span", {
												className: "rounded-full px-2 py-0.5 font-mono text-[9px] font-bold tracking-wider uppercase",
												style: {
													backgroundColor: "var(--admin-button-secondary-bg)",
													color: "var(--admin-text-secondary)"
												},
												children: "You"
											})]
										}), /* @__PURE__ */ jsx("div", {
											className: "truncate font-mono text-[11px]",
											style: { color: "var(--admin-text-muted)" },
											children: u.email
										})]
									})]
								})
							}),
							/* @__PURE__ */ jsx("td", {
								className: "px-4 py-3",
								children: u.role === "admin" ? /* @__PURE__ */ jsxs("span", {
									className: "inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 font-mono text-[10px] font-bold text-emerald-500",
									children: [/* @__PURE__ */ jsx(ShieldCheck, { className: "h-3.5 w-3.5" }), "ADMINISTRATOR"]
								}) : /* @__PURE__ */ jsxs("span", {
									className: "inline-flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 px-2.5 py-1 font-mono text-[10px] font-bold text-blue-500",
									children: [/* @__PURE__ */ jsx(Shield, { className: "h-3.5 w-3.5" }), "CUSTOMER"]
								})
							}),
							/* @__PURE__ */ jsx("td", {
								className: "px-4 py-3",
								children: u.email_verified_at ? /* @__PURE__ */ jsxs("span", {
									className: "inline-flex items-center gap-1 font-mono text-[11px] text-emerald-500",
									children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ jsx("span", { children: "Verified" })]
								}) : /* @__PURE__ */ jsxs("span", {
									className: "inline-flex items-center gap-1 font-mono text-[11px]",
									style: { color: "var(--admin-text-dim)" },
									children: [/* @__PURE__ */ jsx(Clock, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ jsx("span", { children: "Unverified" })]
								})
							}),
							/* @__PURE__ */ jsx("td", {
								className: "px-4 py-3 font-mono text-[11px]",
								style: { color: "var(--admin-text-muted)" },
								children: new Date(u.created_at).toLocaleDateString()
							}),
							/* @__PURE__ */ jsx("td", {
								className: "px-4 py-3 text-right",
								children: /* @__PURE__ */ jsxs("div", {
									className: "flex items-center justify-end gap-1.5",
									children: [/* @__PURE__ */ jsx("button", {
										type: "button",
										onClick: () => onEdit(u),
										className: "cursor-pointer rounded-lg border p-1.5 transition-colors",
										style: {
											backgroundColor: "var(--admin-button-secondary-bg)",
											borderColor: "var(--admin-border)",
											color: "var(--admin-text-secondary)"
										},
										title: "Edit User",
										children: /* @__PURE__ */ jsx(Edit3, { className: "h-3.5 w-3.5" })
									}), /* @__PURE__ */ jsx("button", {
										type: "button",
										onClick: () => onDelete(u),
										disabled: isSelf,
										className: `rounded-lg border p-1.5 transition-colors ${isSelf ? "cursor-not-allowed opacity-30" : "cursor-pointer hover:bg-red-500/20"}`,
										style: {
											backgroundColor: "rgba(239, 68, 68, 0.1)",
											borderColor: "rgba(239, 68, 68, 0.2)",
											color: "#ef4444"
										},
										title: isSelf ? "Cannot delete your own active account" : "Delete User",
										children: /* @__PURE__ */ jsx(Trash2, { className: "h-3.5 w-3.5" })
									})]
								})
							})
						]
					}, u.id);
				}) : /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsxs("td", {
					colSpan: 5,
					className: "px-4 py-12 text-center",
					style: { color: "var(--admin-text-muted)" },
					children: [
						/* @__PURE__ */ jsx(Users, {
							className: "mx-auto mb-2 h-8 w-8",
							style: { color: "var(--admin-text-dim)" }
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-sm font-semibold",
							style: { color: "var(--admin-text-primary)" },
							children: "No users found"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-0.5 text-xs",
							children: "Try changing your search keyword or role filter."
						})
					]
				}) })
			})]
		})
	});
}
//#endregion
//#region resources/js/components/admin/users/UserPagination.tsx
var PER_PAGE_OPTIONS = [
	{
		value: "5",
		label: "5 per page"
	},
	{
		value: "10",
		label: "10 per page"
	},
	{
		value: "25",
		label: "25 per page"
	},
	{
		value: "50",
		label: "50 per page"
	},
	{
		value: "100",
		label: "100 per page"
	}
];
function UserPagination({ users, filters, onPerPageChange }) {
	const handlePerPageChange = (val) => {
		const num = Number(val);
		if (onPerPageChange) {
			onPerPageChange(num);
			return;
		}
		router.get("/z-admin/users", {
			search: filters?.search || void 0,
			role: filters?.role !== "all" ? filters?.role : void 0,
			per_page: num,
			page: 1
		}, {
			preserveState: true,
			preserveScroll: true
		});
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "relative z-20 flex flex-col items-center justify-between gap-4 rounded-b-2xl border-t p-4 text-xs transition-colors duration-200 sm:flex-row",
		style: {
			borderColor: "var(--admin-border)",
			color: "var(--admin-text-secondary)"
		},
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex flex-wrap items-center gap-3",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ jsx("span", {
						className: "text-[11px] font-medium whitespace-nowrap",
						style: { color: "var(--admin-text-muted)" },
						children: "Show:"
					}), /* @__PURE__ */ jsx(AdminDropdown, {
						value: String(users.per_page || 10),
						onChange: handlePerPageChange,
						options: PER_PAGE_OPTIONS,
						direction: "up",
						className: "w-32"
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "h-4 w-px bg-neutral-200 dark:bg-neutral-800" }),
				/* @__PURE__ */ jsxs("div", { children: [
					"Showing",
					" ",
					/* @__PURE__ */ jsx("span", {
						className: "font-semibold",
						style: { color: "var(--admin-text-primary)" },
						children: users.from || 0
					}),
					" ",
					"to",
					" ",
					/* @__PURE__ */ jsx("span", {
						className: "font-semibold",
						style: { color: "var(--admin-text-primary)" },
						children: users.to || 0
					}),
					" ",
					"of",
					" ",
					/* @__PURE__ */ jsx("span", {
						className: "font-semibold",
						style: { color: "var(--admin-text-primary)" },
						children: users.total
					}),
					" ",
					"users"
				] })
			]
		}), users.last_page > 1 && /* @__PURE__ */ jsx("div", {
			className: "flex flex-wrap items-center gap-1",
			children: users.links.map((link, idx) => /* @__PURE__ */ jsx("button", {
				type: "button",
				disabled: !link.url,
				onClick: () => {
					if (link.url) router.get(link.url, {}, {
						preserveState: true,
						preserveScroll: true
					});
				},
				dangerouslySetInnerHTML: { __html: link.label },
				className: `rounded-lg px-3 py-1.5 font-mono text-xs transition-colors ${link.active ? "font-bold text-white shadow-sm" : link.url ? "cursor-pointer hover:opacity-80" : "cursor-not-allowed opacity-30"}`,
				style: link.active ? { backgroundColor: "var(--admin-accent)" } : {
					backgroundColor: "var(--admin-button-secondary-bg)",
					color: "var(--admin-text-secondary)"
				}
			}, idx))
		})]
	});
}
//#endregion
//#region resources/js/components/admin/users/UserModal.tsx
function UserModal({ isOpen, mode, formData, onChange, onSubmit, onClose, targetUser }) {
	if (!isOpen) return null;
	if (typeof document === "undefined") return null;
	const isEdit = mode === "edit";
	return createPortal(/* @__PURE__ */ jsx("div", {
		className: "animate-fadeIn fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-md",
		style: { backgroundColor: "var(--admin-modal-overlay)" },
		children: /* @__PURE__ */ jsxs("div", {
			className: "relative w-full max-w-lg space-y-5 rounded-2xl border p-6 shadow-2xl transition-colors duration-200",
			style: {
				backgroundColor: "var(--admin-modal-bg)",
				borderColor: "var(--admin-border)"
			},
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-center justify-between border-b pb-4",
				style: { borderColor: "var(--admin-border)" },
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ jsx("div", {
						className: "flex h-10 w-10 items-center justify-center rounded-xl border text-sm font-bold shadow-sm",
						style: {
							backgroundColor: "var(--admin-button-secondary-bg)",
							borderColor: "var(--admin-border)",
							color: "var(--admin-accent)"
						},
						children: /* @__PURE__ */ jsx(UserCheck, { className: "h-5 w-5" })
					}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
						className: "font-heading text-base font-bold",
						style: { color: "var(--admin-text-primary)" },
						children: isEdit ? `Edit User: ${targetUser?.name}` : "Create New Account"
					}), /* @__PURE__ */ jsx("p", {
						className: "text-xs",
						style: { color: "var(--admin-text-muted)" },
						children: isEdit ? "Update identity, portal access role, or set a new password" : "Add an administrator or client account to Zytrixon"
					})] })]
				}), /* @__PURE__ */ jsx("button", {
					type: "button",
					onClick: onClose,
					className: "cursor-pointer rounded-lg p-1.5 transition-colors",
					style: {
						color: "var(--admin-text-secondary)",
						backgroundColor: "var(--admin-button-secondary-bg)"
					},
					children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
				})]
			}), /* @__PURE__ */ jsxs("form", {
				onSubmit,
				className: "space-y-4",
				children: [
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
						className: "mb-1.5 block text-xs font-semibold",
						style: { color: "var(--admin-text-secondary)" },
						children: "Full Name"
					}), /* @__PURE__ */ jsx("input", {
						type: "text",
						required: true,
						value: formData.name,
						onChange: (e) => onChange("name", e.target.value),
						placeholder: "e.g. John Doe",
						className: "w-full rounded-xl border px-3.5 py-2.5 text-xs transition-colors focus:outline-none",
						style: {
							backgroundColor: "var(--admin-input-bg)",
							borderColor: "var(--admin-input-border)",
							color: "var(--admin-text-primary)"
						}
					})] }),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
						className: "mb-1.5 block text-xs font-semibold",
						style: { color: "var(--admin-text-secondary)" },
						children: "Email Address"
					}), /* @__PURE__ */ jsx("input", {
						type: "email",
						required: true,
						value: formData.email,
						onChange: (e) => onChange("email", e.target.value),
						placeholder: "john@example.com",
						className: "w-full rounded-xl border px-3.5 py-2.5 text-xs transition-colors focus:outline-none",
						style: {
							backgroundColor: "var(--admin-input-bg)",
							borderColor: "var(--admin-input-border)",
							color: "var(--admin-text-primary)"
						}
					})] }),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
						className: "mb-1.5 block text-xs font-semibold",
						style: { color: "var(--admin-text-secondary)" },
						children: "Account Role & Permissions"
					}), /* @__PURE__ */ jsx(AdminDropdown, {
						value: formData.role,
						onChange: (val) => onChange("role", val),
						options: [{
							value: "customer",
							label: "Customer (Client Portal)",
							description: "Restricted to client dashboard and orders",
							icon: Shield
						}, {
							value: "admin",
							label: "Administrator (Full IAM)",
							description: "Full administrative rights and console access",
							icon: ShieldCheck
						}],
						placeholder: "Select role..."
					})] }),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
						className: "mb-1.5 flex items-center justify-between",
						children: [/* @__PURE__ */ jsx("label", {
							className: "text-xs font-semibold",
							style: { color: "var(--admin-text-secondary)" },
							children: isEdit ? "New Password (Optional)" : "Account Password"
						}), isEdit && /* @__PURE__ */ jsx("span", {
							className: "text-[11px]",
							style: { color: "var(--admin-text-muted)" },
							children: "Leave blank to keep unchanged"
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "relative",
						children: [/* @__PURE__ */ jsx(Key, {
							className: "pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2",
							style: { color: "var(--admin-text-dim)" }
						}), /* @__PURE__ */ jsx("input", {
							type: "password",
							required: !isEdit,
							minLength: 8,
							value: formData.password || "",
							onChange: (e) => onChange("password", e.target.value),
							placeholder: isEdit ? "•••••••• (unchanged)" : "Minimum 8 characters",
							className: "w-full rounded-xl border py-2.5 pr-4 pl-9 text-xs transition-colors focus:outline-none",
							style: {
								backgroundColor: "var(--admin-input-bg)",
								borderColor: "var(--admin-input-border)",
								color: "var(--admin-text-primary)"
							}
						})]
					})] }),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-end gap-3 border-t pt-4",
						style: { borderColor: "var(--admin-border)" },
						children: [/* @__PURE__ */ jsx("button", {
							type: "button",
							onClick: onClose,
							className: "cursor-pointer rounded-xl border px-4 py-2.5 text-xs font-semibold transition-colors",
							style: {
								backgroundColor: "var(--admin-button-secondary-bg)",
								borderColor: "var(--admin-border)",
								color: "var(--admin-text-secondary)"
							},
							children: "Cancel"
						}), /* @__PURE__ */ jsx("button", {
							type: "submit",
							className: "cursor-pointer rounded-xl px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition-all hover:opacity-90 active:scale-95",
							style: { backgroundColor: "var(--admin-accent)" },
							children: isEdit ? "Save Changes" : "Create Account"
						})]
					})
				]
			})]
		})
	}), document.body);
}
//#endregion
//#region resources/js/components/admin/users/UserDeleteModal.tsx
function UserDeleteModal({ isOpen, user, onConfirm, onClose }) {
	if (!isOpen || !user) return null;
	if (typeof document === "undefined") return null;
	return createPortal(/* @__PURE__ */ jsx("div", {
		className: "animate-fadeIn fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-md",
		style: { backgroundColor: "var(--admin-modal-overlay)" },
		children: /* @__PURE__ */ jsxs("div", {
			className: "relative w-full max-w-md space-y-4 rounded-2xl border p-6 shadow-2xl transition-colors duration-200",
			style: {
				backgroundColor: "var(--admin-modal-bg)",
				borderColor: "var(--admin-border)"
			},
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ jsx("div", {
						className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-red-500/20 bg-red-500/10 text-red-500",
						children: /* @__PURE__ */ jsx(AlertTriangle, { className: "h-5 w-5" })
					}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
						className: "font-heading text-base font-bold",
						style: { color: "var(--admin-text-primary)" },
						children: "Delete User Account?"
					}), /* @__PURE__ */ jsx("p", {
						className: "text-xs",
						style: { color: "var(--admin-text-muted)" },
						children: "This action cannot be undone."
					})] })]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "rounded-xl border p-3.5 text-xs",
					style: {
						backgroundColor: "var(--admin-card-subtle)",
						borderColor: "var(--admin-border-subtle)"
					},
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "font-semibold",
							style: { color: "var(--admin-text-primary)" },
							children: user.name
						}),
						/* @__PURE__ */ jsx("div", {
							className: "font-mono text-[11px]",
							style: { color: "var(--admin-text-muted)" },
							children: user.email
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-2",
							children: /* @__PURE__ */ jsxs("span", {
								className: "rounded px-2 py-0.5 font-mono text-[10px] font-bold uppercase",
								style: {
									backgroundColor: user.role === "admin" ? "rgba(16, 185, 129, 0.15)" : "rgba(59, 130, 246, 0.15)",
									color: user.role === "admin" ? "var(--admin-accent)" : "#3b82f6"
								},
								children: ["Role: ", user.role]
							})
						})
					]
				}),
				user.role === "admin" && /* @__PURE__ */ jsxs("div", {
					className: "rounded-xl border border-amber-500/20 bg-amber-500/10 p-3 text-xs text-amber-500",
					children: [/* @__PURE__ */ jsx("strong", { children: "Warning:" }), " You are about to delete an Administrator account. Ensure there is at least one other active admin before proceeding."]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-end gap-2.5 border-t pt-3",
					style: { borderColor: "var(--admin-border)" },
					children: [/* @__PURE__ */ jsx("button", {
						type: "button",
						onClick: onClose,
						className: "cursor-pointer rounded-xl border px-4 py-2 text-xs font-semibold transition-colors",
						style: {
							backgroundColor: "var(--admin-button-secondary-bg)",
							borderColor: "var(--admin-border)",
							color: "var(--admin-text-secondary)"
						},
						children: "Cancel"
					}), /* @__PURE__ */ jsxs("button", {
						type: "button",
						onClick: onConfirm,
						className: "inline-flex cursor-pointer items-center gap-1.5 rounded-xl bg-red-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:bg-red-500 active:scale-95",
						children: [/* @__PURE__ */ jsx(Trash2, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ jsx("span", { children: "Delete User" })]
					})]
				})
			]
		})
	}), document.body);
}
//#endregion
//#region resources/js/pages/Admin/Users.tsx
function UsersPage({ users, kpis, filters }) {
	const { auth } = usePage().props;
	const currentUserId = auth?.user?.id;
	const [search, setSearch] = useState(filters.search || "");
	const [selectedRole, setSelectedRole] = useState(filters.role || "all");
	const [isCreateOpen, setIsCreateOpen] = useState(false);
	const [createForm, setCreateForm] = useState({
		name: "",
		email: "",
		role: "customer",
		password: ""
	});
	const [editUser, setEditUser] = useState(null);
	const [editForm, setEditForm] = useState({
		name: "",
		email: "",
		role: "customer",
		password: ""
	});
	const [deleteUser, setDeleteUser] = useState(null);
	const handleFilterSubmit = (e) => {
		e.preventDefault();
		router.get("/z-admin/users", {
			search: search || void 0,
			role: selectedRole !== "all" ? selectedRole : void 0,
			per_page: filters.per_page || 10,
			page: 1
		}, {
			preserveState: true,
			preserveScroll: true
		});
	};
	const handleClearFilters = () => {
		setSearch("");
		setSelectedRole("all");
		router.get("/z-admin/users", { per_page: filters.per_page || 10 });
	};
	const handlePerPageChange = (newPerPage) => {
		router.get("/z-admin/users", {
			search: search || void 0,
			role: selectedRole !== "all" ? selectedRole : void 0,
			per_page: newPerPage,
			page: 1
		}, {
			preserveState: true,
			preserveScroll: true
		});
	};
	const handleOpenEdit = (user) => {
		setEditUser(user);
		setEditForm({
			name: user.name,
			email: user.email,
			role: user.role,
			password: ""
		});
	};
	const handleCreateSubmit = (e) => {
		e.preventDefault();
		router.post("/z-admin/users", createForm, {
			preserveScroll: true,
			onSuccess: () => {
				setIsCreateOpen(false);
				setCreateForm({
					name: "",
					email: "",
					role: "customer",
					password: ""
				});
			}
		});
	};
	const handleEditSubmit = (e) => {
		e.preventDefault();
		if (!editUser) return;
		const payload = {
			name: editForm.name,
			email: editForm.email,
			role: editForm.role
		};
		if (editForm.password) payload.password = editForm.password;
		router.put(`/z-admin/users/${editUser.id}`, payload, {
			preserveScroll: true,
			onSuccess: () => setEditUser(null)
		});
	};
	const handleConfirmDelete = () => {
		if (!deleteUser) return;
		router.delete(`/z-admin/users/${deleteUser.id}`, {
			preserveScroll: true,
			onSuccess: () => setDeleteUser(null)
		});
	};
	return /* @__PURE__ */ jsxs(AdminLayout, {
		title: "Users Directory",
		children: [
			/* @__PURE__ */ jsx(Head, { title: "Users Directory — Admin Console | Zytrixon Tech" }),
			/* @__PURE__ */ jsxs("div", {
				className: "space-y-6",
				children: [
					/* @__PURE__ */ jsx(UserStatsCards, { kpis }),
					/* @__PURE__ */ jsx(UserFilterBar, {
						search,
						onSearchChange: setSearch,
						selectedRole,
						onRoleChange: setSelectedRole,
						kpis,
						onSubmit: handleFilterSubmit,
						onClear: handleClearFilters,
						onOpenCreate: () => setIsCreateOpen(true),
						hasActiveFilters: Boolean(filters.search || filters.role !== "all")
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "relative z-10 rounded-2xl border shadow-xl backdrop-blur-sm transition-colors duration-200",
						style: {
							backgroundColor: "var(--admin-card-bg)",
							borderColor: "var(--admin-border)"
						},
						children: [/* @__PURE__ */ jsx(UserTable, {
							users: users.data,
							currentUserId,
							onEdit: handleOpenEdit,
							onDelete: setDeleteUser
						}), /* @__PURE__ */ jsx(UserPagination, {
							users,
							filters,
							onPerPageChange: handlePerPageChange
						})]
					})
				]
			}),
			/* @__PURE__ */ jsx(UserModal, {
				isOpen: isCreateOpen,
				mode: "create",
				formData: createForm,
				onChange: (field, val) => setCreateForm((prev) => ({
					...prev,
					[field]: val
				})),
				onSubmit: handleCreateSubmit,
				onClose: () => setIsCreateOpen(false)
			}),
			/* @__PURE__ */ jsx(UserModal, {
				isOpen: Boolean(editUser),
				mode: "edit",
				targetUser: editUser,
				formData: editForm,
				onChange: (field, val) => setEditForm((prev) => ({
					...prev,
					[field]: val
				})),
				onSubmit: handleEditSubmit,
				onClose: () => setEditUser(null)
			}),
			/* @__PURE__ */ jsx(UserDeleteModal, {
				isOpen: Boolean(deleteUser),
				user: deleteUser,
				onConfirm: handleConfirmDelete,
				onClose: () => setDeleteUser(null)
			})
		]
	});
}
//#endregion
export { UsersPage as default };

//# sourceMappingURL=Users-BR9DRuxn.js.map