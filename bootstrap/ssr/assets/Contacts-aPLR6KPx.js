import { t as AdminLayout } from "./AdminLayout-TYYnUASU.js";
import { t as AdminStatCard } from "./AdminStatCard-TlKRlqbk.js";
import { t as AdminDropdown } from "./AdminDropdown-D_rYU8MI.js";
import { Head, router } from "@inertiajs/react";
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { AlertTriangle, CheckCircle2, Clock, ExternalLink, Eye, FileText, Filter, Inbox, Layers, Mail, Phone, Plus, RotateCcw, Search, Tag, Trash2, X } from "lucide-react";
import { createPortal } from "react-dom";
//#region resources/js/components/admin/contacts/ContactKpiCards.tsx
function ContactKpiCards({ kpis, onSelectStatus }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-5",
		children: [
			/* @__PURE__ */ jsx("div", {
				onClick: () => onSelectStatus?.("all"),
				className: "h-full cursor-pointer transition-transform active:scale-[0.98]",
				children: /* @__PURE__ */ jsx(AdminStatCard, {
					title: "Total Leads",
					value: kpis.total,
					icon: Inbox,
					badgeVariant: "blue"
				})
			}),
			/* @__PURE__ */ jsx("div", {
				onClick: () => onSelectStatus?.("new"),
				className: "h-full cursor-pointer transition-transform active:scale-[0.98]",
				children: /* @__PURE__ */ jsx(AdminStatCard, {
					title: "New Leads",
					value: kpis.new,
					icon: Mail,
					badgeVariant: "emerald"
				})
			}),
			/* @__PURE__ */ jsx("div", {
				onClick: () => onSelectStatus?.("contacted"),
				className: "h-full cursor-pointer transition-transform active:scale-[0.98]",
				children: /* @__PURE__ */ jsx(AdminStatCard, {
					title: "Contacted",
					value: kpis.contacted,
					icon: Clock,
					badgeVariant: "rose"
				})
			}),
			/* @__PURE__ */ jsx("div", {
				onClick: () => onSelectStatus?.("in_progress"),
				className: "h-full cursor-pointer transition-transform active:scale-[0.98]",
				children: /* @__PURE__ */ jsx(AdminStatCard, {
					title: "In Progress",
					value: kpis.in_progress,
					icon: AlertTriangle,
					badgeVariant: "amber"
				})
			}),
			/* @__PURE__ */ jsx("div", {
				onClick: () => onSelectStatus?.("resolved"),
				className: "h-full cursor-pointer transition-transform active:scale-[0.98]",
				children: /* @__PURE__ */ jsx(AdminStatCard, {
					title: "Resolved / Won",
					value: kpis.resolved,
					icon: CheckCircle2,
					badgeVariant: "purple"
				})
			})
		]
	});
}
//#endregion
//#region resources/js/components/admin/contacts/ContactFilterBar.tsx
function ContactFilterBar({ search, onSearchChange, selectedStatus, onStatusChange, selectedService, onServiceChange, availableServices, kpis, onSubmit, onClear, hasActiveFilters }) {
	const statusOptions = [
		{
			value: "all",
			label: "All Statuses",
			badge: `${kpis.total}`
		},
		{
			value: "new",
			label: "New",
			badge: `${kpis.new}`
		},
		{
			value: "contacted",
			label: "Contacted",
			badge: `${kpis.contacted}`
		},
		{
			value: "in_progress",
			label: "In Progress",
			badge: `${kpis.in_progress}`
		},
		{
			value: "resolved",
			label: "Resolved",
			badge: `${kpis.resolved}`
		},
		{
			value: "spam",
			label: "Spam",
			badge: `${kpis.spam}`
		}
	];
	const serviceOptions = [{
		value: "all",
		label: "All Services",
		icon: Layers
	}, ...availableServices.map((svc) => ({
		value: svc,
		label: svc,
		icon: Tag
	}))];
	return /* @__PURE__ */ jsxs("div", {
		className: "relative z-30 rounded-2xl border p-4 backdrop-blur-sm transition-colors duration-200",
		style: {
			backgroundColor: "var(--admin-card-bg)",
			borderColor: "var(--admin-border)"
		},
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mb-3 flex items-center gap-2 font-mono text-xs font-semibold",
			style: { color: "var(--admin-text-primary)" },
			children: [/* @__PURE__ */ jsx(Filter, {
				className: "h-3.5 w-3.5",
				style: { color: "var(--admin-accent)" }
			}), /* @__PURE__ */ jsx("span", { children: "Filter & Search Leads" })]
		}), /* @__PURE__ */ jsxs("form", {
			onSubmit,
			className: "grid grid-cols-1 gap-3 sm:grid-cols-12",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "relative sm:col-span-5",
					children: [/* @__PURE__ */ jsx(Search, {
						className: "pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2",
						style: { color: "var(--admin-text-dim)" }
					}), /* @__PURE__ */ jsx("input", {
						type: "text",
						value: search,
						onChange: (e) => onSearchChange(e.target.value),
						placeholder: "Search by name, email, phone, message...",
						className: "w-full rounded-xl border py-2.5 pr-4 pl-9 text-xs transition-colors focus:outline-none",
						style: {
							backgroundColor: "var(--admin-input-bg)",
							borderColor: "var(--admin-input-border)",
							color: "var(--admin-text-primary)"
						}
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "sm:col-span-3",
					children: /* @__PURE__ */ jsx(AdminDropdown, {
						value: selectedStatus,
						onChange: onStatusChange,
						options: statusOptions,
						placeholder: "Filter status..."
					})
				}),
				/* @__PURE__ */ jsx("div", {
					className: "sm:col-span-2",
					children: /* @__PURE__ */ jsx(AdminDropdown, {
						value: selectedService,
						onChange: onServiceChange,
						options: serviceOptions,
						placeholder: "Filter service..."
					})
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2 sm:col-span-2",
					children: [/* @__PURE__ */ jsx("button", {
						type: "submit",
						className: "flex-1 cursor-pointer rounded-xl px-3 py-2.5 text-center text-xs font-semibold transition-colors hover:opacity-90 active:scale-95",
						style: {
							backgroundColor: "var(--admin-button-secondary-bg)",
							borderColor: "var(--admin-border)",
							borderWidth: 1,
							color: "var(--admin-text-primary)"
						},
						children: "Filter"
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
		})]
	});
}
//#endregion
//#region resources/js/components/admin/contacts/ContactBulkBar.tsx
function ContactBulkBar({ selectedCount, onDeselectAll, onConfirmBulkDelete }) {
	if (selectedCount === 0) return null;
	return /* @__PURE__ */ jsxs("div", {
		className: "animate-fadeIn sticky top-4 z-30 flex flex-wrap items-center justify-between gap-3 rounded-2xl border p-3.5 shadow-2xl backdrop-blur-xl",
		style: {
			backgroundColor: "var(--admin-card-bg)",
			borderColor: "#ef4444"
		},
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-3",
			children: [/* @__PURE__ */ jsx("div", {
				className: "flex h-7 w-7 items-center justify-center rounded-lg border border-red-500/30 bg-red-500/20 text-xs font-bold text-red-500",
				children: selectedCount
			}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("span", {
				className: "text-xs font-semibold",
				style: { color: "var(--admin-text-primary)" },
				children: [
					selectedCount,
					" ",
					selectedCount === 1 ? "enquiry" : "enquiries",
					" selected"
				]
			}), /* @__PURE__ */ jsx("span", {
				className: "ml-2 hidden text-[11px] sm:inline",
				style: { color: "var(--admin-text-muted)" },
				children: "Delete selected records in one batch"
			})] })]
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ jsx("button", {
				type: "button",
				onClick: onDeselectAll,
				className: "cursor-pointer rounded-xl border px-3 py-1.5 text-xs font-medium transition-colors",
				style: {
					backgroundColor: "var(--admin-button-secondary-bg)",
					borderColor: "var(--admin-border)",
					color: "var(--admin-text-secondary)"
				},
				children: "Deselect All"
			}), /* @__PURE__ */ jsxs("button", {
				type: "button",
				onClick: onConfirmBulkDelete,
				className: "inline-flex cursor-pointer items-center gap-1.5 rounded-xl bg-red-600 px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm transition-all hover:bg-red-500 active:scale-95",
				children: [/* @__PURE__ */ jsx(Trash2, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ jsxs("span", { children: [
					"Delete Selected (",
					selectedCount,
					")"
				] })]
			})]
		})]
	});
}
//#endregion
//#region resources/js/components/admin/contacts/ContactTable.tsx
function ContactTable({ enquiries, selectedIds, isAllSelected, onToggleSelectAll, onToggleSelectOne, onOpenDetail, onQuickStatusChange, onDeleteSingle, onClearFilters, hasActiveFilters }) {
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
						className: "w-10 p-4",
						children: /* @__PURE__ */ jsx("input", {
							type: "checkbox",
							checked: isAllSelected,
							onChange: onToggleSelectAll,
							"aria-label": "Select all",
							className: "h-4 w-4 cursor-pointer rounded text-emerald-500"
						})
					}),
					/* @__PURE__ */ jsx("th", {
						className: "px-3 py-4 font-semibold",
						children: "Client Name"
					}),
					/* @__PURE__ */ jsx("th", {
						className: "px-3 py-4 font-semibold",
						children: "Contact Info"
					}),
					/* @__PURE__ */ jsx("th", {
						className: "px-3 py-4 font-semibold",
						children: "Service & Budget"
					}),
					/* @__PURE__ */ jsx("th", {
						className: "px-3 py-4 font-semibold",
						children: "Message Preview"
					}),
					/* @__PURE__ */ jsx("th", {
						className: "px-3 py-4 font-semibold",
						children: "Status"
					}),
					/* @__PURE__ */ jsx("th", {
						className: "px-3 py-4 text-right font-semibold",
						children: "Received"
					}),
					/* @__PURE__ */ jsx("th", {
						className: "px-4 py-4 text-right font-semibold",
						children: "Actions"
					})
				]
			}) }), /* @__PURE__ */ jsx("tbody", {
				className: "divide-y",
				style: { borderColor: "var(--admin-table-border)" },
				children: enquiries.length > 0 ? enquiries.map((item) => {
					const isSelected = selectedIds.includes(item.id);
					return /* @__PURE__ */ jsxs("tr", {
						className: "transition-colors",
						style: {
							borderBottom: "1px solid var(--admin-table-border)",
							backgroundColor: isSelected ? "rgba(239, 68, 68, 0.05)" : void 0
						},
						children: [
							/* @__PURE__ */ jsx("td", {
								className: "p-4",
								children: /* @__PURE__ */ jsx("input", {
									type: "checkbox",
									checked: isSelected,
									onChange: () => onToggleSelectOne(item.id),
									className: "h-4 w-4 cursor-pointer rounded text-emerald-500"
								})
							}),
							/* @__PURE__ */ jsx("td", {
								className: "px-3 py-3 font-medium",
								children: /* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2.5",
									children: [/* @__PURE__ */ jsx("div", {
										className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border text-xs font-bold uppercase",
										style: {
											backgroundColor: "var(--admin-button-secondary-bg)",
											borderColor: "var(--admin-border)",
											color: "var(--admin-accent)"
										},
										children: item.name.charAt(0)
									}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("button", {
										type: "button",
										onClick: () => onOpenDetail(item),
										className: "cursor-pointer text-left font-semibold transition-opacity hover:opacity-80",
										style: { color: "var(--admin-text-primary)" },
										children: item.name
									}), item.admin_notes && /* @__PURE__ */ jsxs("div", {
										className: "mt-0.5 flex items-center gap-1 font-mono text-[10px] text-amber-500",
										children: [/* @__PURE__ */ jsx(FileText, { className: "h-2.5 w-2.5" }), /* @__PURE__ */ jsx("span", { children: "Internal Notes" })]
									})] })]
								})
							}),
							/* @__PURE__ */ jsxs("td", {
								className: "space-y-1 px-3 py-3 font-mono text-[11px]",
								children: [/* @__PURE__ */ jsx("div", {
									className: "flex items-center gap-1.5",
									children: /* @__PURE__ */ jsxs("a", {
										href: `mailto:${item.email}`,
										className: "flex items-center gap-1 transition-opacity hover:opacity-80",
										style: { color: "var(--admin-text-secondary)" },
										title: "Send Email",
										children: [/* @__PURE__ */ jsx(Mail, {
											className: "h-3 w-3",
											style: { color: "var(--admin-text-dim)" }
										}), /* @__PURE__ */ jsx("span", { children: item.email })]
									})
								}), /* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ jsxs("a", {
										href: `tel:${item.phone}`,
										className: "flex items-center gap-1 transition-opacity hover:opacity-80",
										style: { color: "var(--admin-text-secondary)" },
										title: "Call Phone",
										children: [/* @__PURE__ */ jsx(Phone, {
											className: "h-3 w-3",
											style: { color: "var(--admin-text-dim)" }
										}), /* @__PURE__ */ jsx("span", { children: item.phone })]
									}), /* @__PURE__ */ jsx("a", {
										href: `https://wa.me/${item.phone.replace(/[^0-9]/g, "")}`,
										target: "_blank",
										rel: "noreferrer",
										className: "font-sans text-[10px] font-semibold text-emerald-500 underline hover:opacity-80",
										children: "WhatsApp"
									})]
								})]
							}),
							/* @__PURE__ */ jsxs("td", {
								className: "px-3 py-3",
								children: [/* @__PURE__ */ jsx("div", {
									className: "font-medium",
									style: { color: "var(--admin-text-primary)" },
									children: item.service || /* @__PURE__ */ jsx("span", {
										className: "italic",
										style: { color: "var(--admin-text-muted)" },
										children: "Not Specified"
									})
								}), /* @__PURE__ */ jsx("div", {
									className: "mt-0.5 font-mono text-[11px]",
									style: { color: "var(--admin-text-muted)" },
									children: item.budget || "Custom Budget"
								})]
							}),
							/* @__PURE__ */ jsx("td", {
								className: "max-w-[200px] px-3 py-3",
								children: /* @__PURE__ */ jsx("p", {
									onClick: () => onOpenDetail(item),
									className: "line-clamp-2 cursor-pointer text-[11px] transition-opacity hover:opacity-80",
									style: { color: "var(--admin-text-secondary)" },
									title: item.message || "No description provided",
									children: item.message || /* @__PURE__ */ jsx("span", {
										className: "italic",
										style: { color: "var(--admin-text-dim)" },
										children: "No message content"
									})
								})
							}),
							/* @__PURE__ */ jsx("td", {
								className: "px-3 py-3",
								children: /* @__PURE__ */ jsxs("select", {
									value: item.status,
									onChange: (e) => onQuickStatusChange(item.id, e.target.value),
									className: "cursor-pointer rounded-lg border px-2 py-1 font-mono text-[11px] font-semibold transition-colors focus:outline-none",
									style: {
										backgroundColor: "var(--admin-input-bg)",
										borderColor: "var(--admin-input-border)",
										color: "var(--admin-text-primary)"
									},
									children: [
										/* @__PURE__ */ jsx("option", {
											value: "new",
											children: "🟢 New"
										}),
										/* @__PURE__ */ jsx("option", {
											value: "contacted",
											children: "🔵 Contacted"
										}),
										/* @__PURE__ */ jsx("option", {
											value: "in_progress",
											children: "🟠 In Progress"
										}),
										/* @__PURE__ */ jsx("option", {
											value: "resolved",
											children: "🟣 Resolved"
										}),
										/* @__PURE__ */ jsx("option", {
											value: "spam",
											children: "🔴 Spam"
										})
									]
								})
							}),
							/* @__PURE__ */ jsxs("td", {
								className: "px-3 py-3 text-right font-mono text-[11px]",
								style: { color: "var(--admin-text-secondary)" },
								children: [/* @__PURE__ */ jsx("div", { children: new Date(item.created_at).toLocaleDateString() }), /* @__PURE__ */ jsx("div", {
									className: "text-[10px]",
									style: { color: "var(--admin-text-dim)" },
									children: new Date(item.created_at).toLocaleTimeString([], {
										hour: "2-digit",
										minute: "2-digit"
									})
								})]
							}),
							/* @__PURE__ */ jsx("td", {
								className: "px-4 py-3 text-right",
								children: /* @__PURE__ */ jsxs("div", {
									className: "flex items-center justify-end gap-1.5",
									children: [/* @__PURE__ */ jsx("button", {
										type: "button",
										onClick: () => onOpenDetail(item),
										className: "cursor-pointer rounded-lg border p-1.5 transition-colors",
										style: {
											backgroundColor: "var(--admin-button-secondary-bg)",
											borderColor: "var(--admin-border)",
											color: "var(--admin-text-secondary)"
										},
										title: "View details & edit notes",
										children: /* @__PURE__ */ jsx(Eye, { className: "h-3.5 w-3.5" })
									}), /* @__PURE__ */ jsx("button", {
										type: "button",
										onClick: () => onDeleteSingle(item.id, item.name),
										className: "cursor-pointer rounded-lg border border-red-500/20 bg-red-500/10 p-1.5 text-red-500 transition-colors hover:bg-red-500/20",
										title: "Delete enquiry",
										children: /* @__PURE__ */ jsx(Trash2, { className: "h-3.5 w-3.5" })
									})]
								})
							})
						]
					}, item.id);
				}) : /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsxs("td", {
					colSpan: 8,
					className: "px-4 py-16 text-center",
					style: { color: "var(--admin-text-muted)" },
					children: [
						/* @__PURE__ */ jsx(Mail, {
							className: "mx-auto mb-3 h-10 w-10",
							style: { color: "var(--admin-text-dim)" }
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-sm font-semibold",
							style: { color: "var(--admin-text-primary)" },
							children: "No inquiries match your criteria"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mx-auto mt-1 max-w-sm text-xs",
							children: "Try adjusting search keywords or changing the status filter."
						}),
						hasActiveFilters && /* @__PURE__ */ jsxs("button", {
							type: "button",
							onClick: onClearFilters,
							className: "mt-3 inline-flex cursor-pointer items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-semibold transition-colors",
							style: {
								backgroundColor: "var(--admin-button-secondary-bg)",
								borderColor: "var(--admin-border)",
								color: "var(--admin-text-primary)"
							},
							children: [/* @__PURE__ */ jsx(RotateCcw, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ jsx("span", { children: "Reset Filters" })]
						})
					]
				}) })
			})]
		})
	});
}
//#endregion
//#region resources/js/components/admin/contacts/ContactPagination.tsx
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
function ContactPagination({ enquiries, filters, onPerPageChange }) {
	const handlePerPageChange = (val) => {
		const num = Number(val);
		if (onPerPageChange) {
			onPerPageChange(num);
			return;
		}
		router.get("/z-admin/contacts", {
			search: filters?.search || void 0,
			status: filters?.status && filters.status !== "all" ? filters.status : void 0,
			service: filters?.service && filters.service !== "all" ? filters.service : void 0,
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
						value: String(enquiries.per_page || 10),
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
						children: enquiries.from || 0
					}),
					" ",
					"to",
					" ",
					/* @__PURE__ */ jsx("span", {
						className: "font-semibold",
						style: { color: "var(--admin-text-primary)" },
						children: enquiries.to || 0
					}),
					" ",
					"of",
					" ",
					/* @__PURE__ */ jsx("span", {
						className: "font-semibold",
						style: { color: "var(--admin-text-primary)" },
						children: enquiries.total
					}),
					" ",
					"enquiries"
				] })
			]
		}), enquiries.last_page > 1 && /* @__PURE__ */ jsx("div", {
			className: "flex flex-wrap items-center gap-1",
			children: enquiries.links.map((link, idx) => /* @__PURE__ */ jsx("button", {
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
//#region resources/js/components/admin/contacts/ContactDetailModal.tsx
function ContactDetailModal({ enquiry, editStatus, onStatusChange, editNotes, onNotesChange, isSaving, onSave, onClose }) {
	if (!enquiry) return null;
	if (typeof document === "undefined") return null;
	const getStatusBadge = (status) => {
		switch (status) {
			case "new": return /* @__PURE__ */ jsxs("span", {
				className: "inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-emerald-500",
				children: [/* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" }), "NEW"]
			});
			case "contacted": return /* @__PURE__ */ jsxs("span", {
				className: "inline-flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-500/15 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-blue-500",
				children: [/* @__PURE__ */ jsx(Clock, { className: "h-3 w-3" }), "CONTACTED"]
			});
			case "in_progress": return /* @__PURE__ */ jsx("span", {
				className: "inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/15 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-amber-500",
				children: "IN PROGRESS"
			});
			case "resolved": return /* @__PURE__ */ jsxs("span", {
				className: "inline-flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-500/15 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-purple-500",
				children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "h-3 w-3" }), "RESOLVED"]
			});
			default: return /* @__PURE__ */ jsx("span", {
				className: "inline-flex items-center gap-1.5 rounded-full border border-red-500/30 bg-red-500/15 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-red-500",
				children: status.toUpperCase()
			});
		}
	};
	return createPortal(/* @__PURE__ */ jsx("div", {
		className: "animate-fadeIn fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-md",
		style: { backgroundColor: "var(--admin-modal-overlay)" },
		children: /* @__PURE__ */ jsxs("div", {
			className: "relative max-h-[90vh] w-full max-w-2xl space-y-5 overflow-y-auto rounded-2xl border p-6 shadow-2xl transition-colors duration-200",
			style: {
				backgroundColor: "var(--admin-modal-bg)",
				borderColor: "var(--admin-border)"
			},
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-start justify-between border-b pb-4",
					style: { borderColor: "var(--admin-border)" },
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ jsx("div", {
							className: "flex h-10 w-10 items-center justify-center rounded-xl border text-base font-bold uppercase shadow-sm",
							style: {
								backgroundColor: "var(--admin-button-secondary-bg)",
								borderColor: "var(--admin-border)",
								color: "var(--admin-accent)"
							},
							children: enquiry.name.charAt(0)
						}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
							className: "font-heading text-lg font-bold",
							style: { color: "var(--admin-text-primary)" },
							children: enquiry.name
						}), /* @__PURE__ */ jsxs("div", {
							className: "mt-0.5 flex items-center gap-2",
							children: [getStatusBadge(enquiry.status), /* @__PURE__ */ jsxs("span", {
								className: "font-mono text-xs",
								style: { color: "var(--admin-text-muted)" },
								children: [
									"ID #",
									enquiry.id,
									" •",
									" ",
									new Date(enquiry.created_at).toLocaleString()
								]
							})]
						})] })]
					}), /* @__PURE__ */ jsx("button", {
						type: "button",
						onClick: onClose,
						className: "cursor-pointer rounded-lg p-1.5 transition-colors",
						style: {
							backgroundColor: "var(--admin-button-secondary-bg)",
							color: "var(--admin-text-secondary)"
						},
						children: /* @__PURE__ */ jsx(X, { className: "h-5 w-5" })
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "grid grid-cols-1 gap-3 rounded-xl border p-3.5 sm:grid-cols-3",
					style: {
						backgroundColor: "var(--admin-card-subtle)",
						borderColor: "var(--admin-border-subtle)"
					},
					children: [
						/* @__PURE__ */ jsxs("a", {
							href: `mailto:${enquiry.email}`,
							className: "flex items-center gap-2 truncate text-xs transition-opacity hover:opacity-80",
							style: { color: "var(--admin-text-secondary)" },
							children: [/* @__PURE__ */ jsx(Mail, { className: "h-4 w-4 shrink-0 text-neutral-400" }), /* @__PURE__ */ jsx("span", {
								className: "truncate",
								children: enquiry.email
							})]
						}),
						/* @__PURE__ */ jsxs("a", {
							href: `tel:${enquiry.phone}`,
							className: "flex items-center gap-2 truncate text-xs transition-opacity hover:opacity-80",
							style: { color: "var(--admin-text-secondary)" },
							children: [/* @__PURE__ */ jsx(Phone, { className: "h-4 w-4 shrink-0 text-neutral-400" }), /* @__PURE__ */ jsx("span", {
								className: "truncate",
								children: enquiry.phone
							})]
						}),
						/* @__PURE__ */ jsxs("a", {
							href: `https://wa.me/${enquiry.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Hi ${enquiry.name}, thank you for contacting Zytrixon Tech.`)}`,
							target: "_blank",
							rel: "noreferrer",
							className: "flex items-center gap-1.5 text-xs font-semibold text-emerald-500 hover:opacity-80",
							children: [/* @__PURE__ */ jsx(ExternalLink, { className: "h-4 w-4 shrink-0" }), /* @__PURE__ */ jsx("span", { children: "Open WhatsApp Chat" })]
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "grid grid-cols-2 gap-4 font-mono text-xs",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "rounded-xl border p-3",
						style: {
							backgroundColor: "var(--admin-card-subtle)",
							borderColor: "var(--admin-border-subtle)"
						},
						children: [/* @__PURE__ */ jsx("span", {
							className: "mb-1 block uppercase",
							style: { color: "var(--admin-text-muted)" },
							children: "SERVICE REQUESTED"
						}), /* @__PURE__ */ jsx("span", {
							className: "font-sans text-sm font-semibold",
							style: { color: "var(--admin-text-primary)" },
							children: enquiry.service || "General Software Consultation"
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "rounded-xl border p-3",
						style: {
							backgroundColor: "var(--admin-card-subtle)",
							borderColor: "var(--admin-border-subtle)"
						},
						children: [/* @__PURE__ */ jsx("span", {
							className: "mb-1 block uppercase",
							style: { color: "var(--admin-text-muted)" },
							children: "BUDGET ESTIMATE"
						}), /* @__PURE__ */ jsx("span", {
							className: "font-sans text-sm font-semibold text-emerald-500",
							children: enquiry.budget || "Not specified"
						})]
					})]
				}),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
					className: "mb-2 block font-mono text-xs font-semibold uppercase",
					style: { color: "var(--admin-text-secondary)" },
					children: "Client Message"
				}), /* @__PURE__ */ jsx("div", {
					className: "rounded-xl border p-4 text-xs leading-relaxed whitespace-pre-wrap",
					style: {
						backgroundColor: "var(--admin-card-subtle)",
						borderColor: "var(--admin-border-subtle)",
						color: "var(--admin-text-primary)"
					},
					children: enquiry.message || "No project description supplied by client."
				})] }),
				/* @__PURE__ */ jsxs("form", {
					onSubmit: onSave,
					className: "space-y-4 border-t pt-2",
					style: { borderColor: "var(--admin-border)" },
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
							children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
								className: "mb-1.5 block text-xs font-semibold",
								style: { color: "var(--admin-text-secondary)" },
								children: "Update Lead Status"
							}), /* @__PURE__ */ jsxs("select", {
								value: editStatus,
								onChange: (e) => onStatusChange(e.target.value),
								className: "w-full cursor-pointer rounded-xl border px-3 py-2.5 text-xs transition-colors focus:outline-none",
								style: {
									backgroundColor: "var(--admin-input-bg)",
									borderColor: "var(--admin-input-border)",
									color: "var(--admin-text-primary)"
								},
								children: [
									/* @__PURE__ */ jsx("option", {
										value: "new",
										children: "New (Uncontacted)"
									}),
									/* @__PURE__ */ jsx("option", {
										value: "contacted",
										children: "Contacted"
									}),
									/* @__PURE__ */ jsx("option", {
										value: "in_progress",
										children: "In Progress / Scoping"
									}),
									/* @__PURE__ */ jsx("option", {
										value: "resolved",
										children: "Resolved / Converted"
									}),
									/* @__PURE__ */ jsx("option", {
										value: "spam",
										children: "Spam / Discarded"
									})
								]
							})] }), /* @__PURE__ */ jsxs("div", {
								className: "space-y-1 font-mono text-xs sm:pt-4",
								style: { color: "var(--admin-text-muted)" },
								children: [/* @__PURE__ */ jsxs("div", { children: ["IP: ", enquiry.ip_address || "Unknown"] }), /* @__PURE__ */ jsxs("div", {
									className: "truncate text-[10px]",
									children: ["Agent: ", enquiry.user_agent || "Standard Web"]
								})]
							})]
						}),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
							className: "mb-1.5 block text-xs font-semibold",
							style: { color: "var(--admin-text-secondary)" },
							children: "Internal Notes & Follow-up Log"
						}), /* @__PURE__ */ jsx("textarea", {
							rows: 3,
							value: editNotes,
							onChange: (e) => onNotesChange(e.target.value),
							placeholder: "Add internal notes about calls, client preferences, or follow-up schedule...",
							className: "w-full rounded-xl border p-3 text-xs transition-colors focus:outline-none",
							style: {
								backgroundColor: "var(--admin-input-bg)",
								borderColor: "var(--admin-input-border)",
								color: "var(--admin-text-primary)"
							}
						})] }),
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-end gap-3 border-t pt-3",
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
								children: "Close"
							}), /* @__PURE__ */ jsx("button", {
								type: "submit",
								disabled: isSaving,
								className: "cursor-pointer rounded-xl px-5 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:opacity-90 active:scale-95 disabled:opacity-50",
								style: { backgroundColor: "var(--admin-accent)" },
								children: isSaving ? "Saving..." : "Save Notes & Status"
							})]
						})
					]
				})
			]
		})
	}), document.body);
}
//#endregion
//#region resources/js/components/admin/contacts/ContactCreateModal.tsx
function ContactCreateModal({ isOpen, formData, onChange, onSubmit, onClose }) {
	if (!isOpen) return null;
	if (typeof document === "undefined") return null;
	return createPortal(/* @__PURE__ */ jsx("div", {
		className: "animate-fadeIn fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-md",
		style: { backgroundColor: "var(--admin-modal-overlay)" },
		children: /* @__PURE__ */ jsxs("div", {
			className: "relative max-h-[90vh] w-full max-w-lg space-y-4 overflow-y-auto rounded-2xl border p-6 shadow-2xl transition-colors duration-200",
			style: {
				backgroundColor: "var(--admin-modal-bg)",
				borderColor: "var(--admin-border)"
			},
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-center justify-between border-b pb-3",
				style: { borderColor: "var(--admin-border)" },
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2.5",
					children: [/* @__PURE__ */ jsx("div", {
						className: "flex h-9 w-9 items-center justify-center rounded-xl border text-xs font-bold",
						style: {
							backgroundColor: "var(--admin-button-secondary-bg)",
							borderColor: "var(--admin-border)",
							color: "var(--admin-accent)"
						},
						children: /* @__PURE__ */ jsx(Plus, { className: "h-5 w-5" })
					}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
						className: "font-heading text-base font-bold",
						style: { color: "var(--admin-text-primary)" },
						children: "Record Manual Inquiry"
					}), /* @__PURE__ */ jsx("p", {
						className: "text-xs",
						style: { color: "var(--admin-text-muted)" },
						children: "Enter offline or direct call inquiries into the system"
					})] })]
				}), /* @__PURE__ */ jsx("button", {
					type: "button",
					onClick: onClose,
					className: "cursor-pointer rounded-lg p-1.5 transition-colors",
					style: {
						backgroundColor: "var(--admin-button-secondary-bg)",
						color: "var(--admin-text-secondary)"
					},
					children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
				})]
			}), /* @__PURE__ */ jsxs("form", {
				onSubmit,
				className: "space-y-3.5",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "grid grid-cols-1 gap-3 sm:grid-cols-2",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
							className: "mb-1 block text-xs font-semibold",
							style: { color: "var(--admin-text-secondary)" },
							children: "Client Name *"
						}), /* @__PURE__ */ jsx("input", {
							type: "text",
							required: true,
							value: formData.name,
							onChange: (e) => onChange("name", e.target.value),
							placeholder: "e.g. Rajesh Kumar",
							className: "w-full rounded-xl border px-3 py-2 text-xs transition-colors focus:outline-none",
							style: {
								backgroundColor: "var(--admin-input-bg)",
								borderColor: "var(--admin-input-border)",
								color: "var(--admin-text-primary)"
							}
						})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
							className: "mb-1 block text-xs font-semibold",
							style: { color: "var(--admin-text-secondary)" },
							children: "Email Address *"
						}), /* @__PURE__ */ jsx("input", {
							type: "email",
							required: true,
							value: formData.email,
							onChange: (e) => onChange("email", e.target.value),
							placeholder: "rajesh@example.com",
							className: "w-full rounded-xl border px-3 py-2 text-xs transition-colors focus:outline-none",
							style: {
								backgroundColor: "var(--admin-input-bg)",
								borderColor: "var(--admin-input-border)",
								color: "var(--admin-text-primary)"
							}
						})] })]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "grid grid-cols-1 gap-3 sm:grid-cols-2",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
							className: "mb-1 block text-xs font-semibold",
							style: { color: "var(--admin-text-secondary)" },
							children: "Phone Number *"
						}), /* @__PURE__ */ jsx("input", {
							type: "text",
							required: true,
							value: formData.phone,
							onChange: (e) => onChange("phone", e.target.value),
							placeholder: "+91 98765 43210",
							className: "w-full rounded-xl border px-3 py-2 text-xs transition-colors focus:outline-none",
							style: {
								backgroundColor: "var(--admin-input-bg)",
								borderColor: "var(--admin-input-border)",
								color: "var(--admin-text-primary)"
							}
						})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
							className: "mb-1 block text-xs font-semibold",
							style: { color: "var(--admin-text-secondary)" },
							children: "Service Required"
						}), /* @__PURE__ */ jsx("input", {
							type: "text",
							value: formData.service,
							onChange: (e) => onChange("service", e.target.value),
							placeholder: "Web Development, SaaS, App...",
							className: "w-full rounded-xl border px-3 py-2 text-xs transition-colors focus:outline-none",
							style: {
								backgroundColor: "var(--admin-input-bg)",
								borderColor: "var(--admin-input-border)",
								color: "var(--admin-text-primary)"
							}
						})] })]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "grid grid-cols-1 gap-3 sm:grid-cols-2",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
							className: "mb-1 block text-xs font-semibold",
							style: { color: "var(--admin-text-secondary)" },
							children: "Estimated Budget"
						}), /* @__PURE__ */ jsx("input", {
							type: "text",
							value: formData.budget,
							onChange: (e) => onChange("budget", e.target.value),
							placeholder: "e.g. ₹1,00,000 - ₹2,50,000",
							className: "w-full rounded-xl border px-3 py-2 text-xs transition-colors focus:outline-none",
							style: {
								backgroundColor: "var(--admin-input-bg)",
								borderColor: "var(--admin-input-border)",
								color: "var(--admin-text-primary)"
							}
						})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
							className: "mb-1 block text-xs font-semibold",
							style: { color: "var(--admin-text-secondary)" },
							children: "Lead Status"
						}), /* @__PURE__ */ jsxs("select", {
							value: formData.status,
							onChange: (e) => onChange("status", e.target.value),
							className: "w-full cursor-pointer rounded-xl border px-3 py-2 text-xs transition-colors focus:outline-none",
							style: {
								backgroundColor: "var(--admin-input-bg)",
								borderColor: "var(--admin-input-border)",
								color: "var(--admin-text-primary)"
							},
							children: [
								/* @__PURE__ */ jsx("option", {
									value: "new",
									children: "New (Uncontacted)"
								}),
								/* @__PURE__ */ jsx("option", {
									value: "contacted",
									children: "Contacted"
								}),
								/* @__PURE__ */ jsx("option", {
									value: "in_progress",
									children: "In Progress"
								}),
								/* @__PURE__ */ jsx("option", {
									value: "resolved",
									children: "Resolved"
								})
							]
						})] })]
					}),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
						className: "mb-1 block text-xs font-semibold",
						style: { color: "var(--admin-text-secondary)" },
						children: "Project Description / Message"
					}), /* @__PURE__ */ jsx("textarea", {
						rows: 3,
						value: formData.message,
						onChange: (e) => onChange("message", e.target.value),
						placeholder: "Client project requirements and details...",
						className: "w-full rounded-xl border p-2.5 text-xs transition-colors focus:outline-none",
						style: {
							backgroundColor: "var(--admin-input-bg)",
							borderColor: "var(--admin-input-border)",
							color: "var(--admin-text-primary)"
						}
					})] }),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
						className: "mb-1 block text-xs font-semibold",
						style: { color: "var(--admin-text-secondary)" },
						children: "Internal Notes (Optional)"
					}), /* @__PURE__ */ jsx("textarea", {
						rows: 2,
						value: formData.admin_notes,
						onChange: (e) => onChange("admin_notes", e.target.value),
						placeholder: "Initial notes on lead source, priority...",
						className: "w-full rounded-xl border p-2.5 text-xs transition-colors focus:outline-none",
						style: {
							backgroundColor: "var(--admin-input-bg)",
							borderColor: "var(--admin-input-border)",
							color: "var(--admin-text-primary)"
						}
					})] }),
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
						}), /* @__PURE__ */ jsx("button", {
							type: "submit",
							className: "cursor-pointer rounded-xl px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:opacity-90 active:scale-95",
							style: { backgroundColor: "var(--admin-accent)" },
							children: "Save Inquiry"
						})]
					})
				]
			})]
		})
	}), document.body);
}
//#endregion
//#region resources/js/components/admin/contacts/ContactDeleteModal.tsx
function ContactDeleteModal({ isOpen, isBulk, count = 1, singleName, onConfirm, onClose }) {
	if (!isOpen) return null;
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
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ jsx("div", {
					className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-red-500/20 bg-red-500/10 text-red-500",
					children: /* @__PURE__ */ jsx(AlertTriangle, { className: "h-5 w-5" })
				}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
					className: "font-heading text-base font-bold",
					style: { color: "var(--admin-text-primary)" },
					children: isBulk ? `Delete ${count} Selected Leads?` : `Delete Lead: ${singleName || "This item"}?`
				}), /* @__PURE__ */ jsx("p", {
					className: "text-xs",
					style: { color: "var(--admin-text-muted)" },
					children: "This action is permanent and will remove the selected inquiry data from the database."
				})] })]
			}), /* @__PURE__ */ jsxs("div", {
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
					children: [/* @__PURE__ */ jsx(Trash2, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ jsx("span", { children: "Delete Definitely" })]
				})]
			})]
		})
	}), document.body);
}
//#endregion
//#region resources/js/pages/Admin/Contacts.tsx
function Contacts({ enquiries, kpis, filters, availableServices = [] }) {
	const [search, setSearch] = useState(filters.search || "");
	const [selectedStatus, setSelectedStatus] = useState(filters.status || "all");
	const [selectedService, setSelectedService] = useState(filters.service || "all");
	const [selectedIds, setSelectedIds] = useState([]);
	const [viewEnquiry, setViewEnquiry] = useState(null);
	const [editNotes, setEditNotes] = useState("");
	const [editStatus, setEditStatus] = useState("new");
	const [isSavingDetails, setIsSavingDetails] = useState(false);
	const [isCreateOpen, setIsCreateOpen] = useState(false);
	const [createForm, setCreateForm] = useState({
		name: "",
		email: "",
		phone: "",
		service: "",
		budget: "",
		message: "",
		status: "new",
		admin_notes: ""
	});
	const [deleteModal, setDeleteModal] = useState({
		open: false,
		isBulk: false
	});
	const handleFilterSubmit = (e) => {
		if (e) e.preventDefault();
		router.get("/z-admin/contacts", {
			search: search || void 0,
			status: selectedStatus !== "all" ? selectedStatus : void 0,
			service: selectedService !== "all" ? selectedService : void 0,
			per_page: filters.per_page || 10,
			page: 1
		}, {
			preserveState: true,
			preserveScroll: true
		});
	};
	const handleClearFilters = () => {
		setSearch("");
		setSelectedStatus("all");
		setSelectedService("all");
		router.get("/z-admin/contacts", { per_page: filters.per_page || 10 });
	};
	const handlePerPageChange = (newPerPage) => {
		router.get("/z-admin/contacts", {
			search: search || void 0,
			status: selectedStatus !== "all" ? selectedStatus : void 0,
			service: selectedService !== "all" ? selectedService : void 0,
			per_page: newPerPage,
			page: 1
		}, {
			preserveState: true,
			preserveScroll: true
		});
	};
	const handleQuickStatusChange = (enquiryId, newStatus) => {
		router.put(`/z-admin/contacts/${enquiryId}`, { status: newStatus }, {
			preserveScroll: true,
			onSuccess: () => {
				if (viewEnquiry && viewEnquiry.id === enquiryId) setViewEnquiry((prev) => prev ? {
					...prev,
					status: newStatus
				} : null);
			}
		});
	};
	const allPageIds = enquiries.data.map((e) => e.id);
	const isAllSelected = allPageIds.length > 0 && allPageIds.every((id) => selectedIds.includes(id));
	const handleToggleSelectAll = () => {
		if (isAllSelected) setSelectedIds((prev) => prev.filter((id) => !allPageIds.includes(id)));
		else setSelectedIds((prev) => Array.from(new Set([...prev, ...allPageIds])));
	};
	const handleToggleSelectOne = (id) => {
		setSelectedIds((prev) => prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]);
	};
	const handleOpenDetail = (item) => {
		setViewEnquiry(item);
		setEditNotes(item.admin_notes || "");
		setEditStatus(item.status);
	};
	const handleSaveDetail = (e) => {
		e.preventDefault();
		if (!viewEnquiry) return;
		setIsSavingDetails(true);
		router.put(`/z-admin/contacts/${viewEnquiry.id}`, {
			status: editStatus,
			admin_notes: editNotes
		}, {
			preserveScroll: true,
			onSuccess: () => {
				setIsSavingDetails(false);
				setViewEnquiry((prev) => prev ? {
					...prev,
					status: editStatus,
					admin_notes: editNotes
				} : null);
			},
			onError: () => setIsSavingDetails(false)
		});
	};
	const handleCreateSubmit = (e) => {
		e.preventDefault();
		router.post("/z-admin/contacts", createForm, {
			preserveScroll: true,
			onSuccess: () => {
				setIsCreateOpen(false);
				setCreateForm({
					name: "",
					email: "",
					phone: "",
					service: "",
					budget: "",
					message: "",
					status: "new",
					admin_notes: ""
				});
			}
		});
	};
	const confirmSingleDelete = (id, name) => {
		setDeleteModal({
			open: true,
			isBulk: false,
			singleId: id,
			singleName: name
		});
	};
	const confirmBulkDelete = () => {
		if (selectedIds.length === 0) return;
		setDeleteModal({
			open: true,
			isBulk: true
		});
	};
	const executeDelete = () => {
		if (deleteModal.isBulk) router.post("/z-admin/contacts/bulk-delete", { ids: selectedIds }, {
			preserveScroll: true,
			onSuccess: () => {
				setSelectedIds([]);
				setDeleteModal({
					open: false,
					isBulk: false
				});
			}
		});
		else if (deleteModal.singleId) router.delete(`/z-admin/contacts/${deleteModal.singleId}`, {
			preserveScroll: true,
			onSuccess: () => {
				setSelectedIds((prev) => prev.filter((id) => id !== deleteModal.singleId));
				setDeleteModal({
					open: false,
					isBulk: false
				});
				if (viewEnquiry && viewEnquiry.id === deleteModal.singleId) setViewEnquiry(null);
			}
		});
	};
	return /* @__PURE__ */ jsxs(AdminLayout, {
		title: "Client Enquiries & Leads",
		children: [
			/* @__PURE__ */ jsx(Head, { title: "Client Enquiries — Admin Console | Zytrixon Tech" }),
			/* @__PURE__ */ jsxs("div", {
				className: "space-y-6",
				children: [
					/* @__PURE__ */ jsx(ContactKpiCards, {
						kpis,
						onSelectStatus: (status) => {
							setSelectedStatus(status);
							router.get("/z-admin/contacts", {
								status: status !== "all" ? status : void 0,
								service: selectedService !== "all" ? selectedService : void 0,
								per_page: filters.per_page || 10,
								page: 1
							}, { preserveState: true });
						}
					}),
					/* @__PURE__ */ jsx(ContactFilterBar, {
						search,
						onSearchChange: setSearch,
						selectedStatus,
						onStatusChange: setSelectedStatus,
						selectedService,
						onServiceChange: setSelectedService,
						availableServices,
						kpis,
						onSubmit: handleFilterSubmit,
						onClear: handleClearFilters,
						hasActiveFilters: Boolean(filters.search || filters.status !== "all" || filters.service !== "all")
					}),
					/* @__PURE__ */ jsx(ContactBulkBar, {
						selectedCount: selectedIds.length,
						onDeselectAll: () => setSelectedIds([]),
						onConfirmBulkDelete: confirmBulkDelete
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "relative z-10 rounded-2xl border shadow-xl backdrop-blur-sm transition-colors duration-200",
						style: {
							backgroundColor: "var(--admin-card-bg)",
							borderColor: "var(--admin-border)"
						},
						children: [/* @__PURE__ */ jsx(ContactTable, {
							enquiries: enquiries.data,
							selectedIds,
							isAllSelected,
							onToggleSelectAll: handleToggleSelectAll,
							onToggleSelectOne: handleToggleSelectOne,
							onOpenDetail: handleOpenDetail,
							onQuickStatusChange: handleQuickStatusChange,
							onDeleteSingle: confirmSingleDelete,
							onClearFilters: handleClearFilters,
							hasActiveFilters: Boolean(filters.search || filters.status !== "all" || filters.service !== "all")
						}), /* @__PURE__ */ jsx(ContactPagination, {
							enquiries,
							filters,
							onPerPageChange: handlePerPageChange
						})]
					})
				]
			}),
			/* @__PURE__ */ jsx(ContactDetailModal, {
				enquiry: viewEnquiry,
				editStatus,
				onStatusChange: setEditStatus,
				editNotes,
				onNotesChange: setEditNotes,
				isSaving: isSavingDetails,
				onSave: handleSaveDetail,
				onClose: () => setViewEnquiry(null)
			}),
			/* @__PURE__ */ jsx(ContactCreateModal, {
				isOpen: isCreateOpen,
				formData: createForm,
				onChange: (field, val) => setCreateForm((prev) => ({
					...prev,
					[field]: val
				})),
				onSubmit: handleCreateSubmit,
				onClose: () => setIsCreateOpen(false)
			}),
			/* @__PURE__ */ jsx(ContactDeleteModal, {
				isOpen: deleteModal.open,
				isBulk: deleteModal.isBulk,
				count: selectedIds.length,
				singleName: deleteModal.singleName,
				onConfirm: executeDelete,
				onClose: () => setDeleteModal({
					open: false,
					isBulk: false
				})
			})
		]
	});
}
//#endregion
export { Contacts as default };

//# sourceMappingURL=Contacts-aPLR6KPx.js.map