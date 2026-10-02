import { t as AdminLayout } from "./AdminLayout-TYYnUASU.js";
import { t as AdminStatCard } from "./AdminStatCard-TlKRlqbk.js";
import { t as AdminDropdown } from "./AdminDropdown-D_rYU8MI.js";
import { Head, router } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { AlertTriangle, Bold, BookOpen, CheckCircle2, Clock, Code2, Columns2, ExternalLink, Eye, Filter, Globe, Heading2, ImagePlus, Italic, Layers, Link2, List, ListOrdered, PenLine, Pencil, Plus, Quote, RotateCcw, Search, Sparkles, Star, Tag, Trash2, X } from "lucide-react";
import { createPortal } from "react-dom";
//#region resources/js/components/admin/blogs/BlogStatsCards.tsx
function BlogStatsCards({ kpis, onSelectStatus }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4",
		children: [
			/* @__PURE__ */ jsx("div", {
				onClick: () => onSelectStatus?.("all"),
				className: "h-full cursor-pointer transition-transform active:scale-[0.98]",
				children: /* @__PURE__ */ jsx(AdminStatCard, {
					title: "Total Articles",
					value: kpis.total,
					icon: BookOpen,
					badgeVariant: "emerald"
				})
			}),
			/* @__PURE__ */ jsx("div", {
				onClick: () => onSelectStatus?.("published"),
				className: "h-full cursor-pointer transition-transform active:scale-[0.98]",
				children: /* @__PURE__ */ jsx(AdminStatCard, {
					title: "Published Posts",
					value: kpis.published,
					icon: CheckCircle2,
					badgeVariant: "blue"
				})
			}),
			/* @__PURE__ */ jsx("div", {
				onClick: () => onSelectStatus?.("draft"),
				className: "h-full cursor-pointer transition-transform active:scale-[0.98]",
				children: /* @__PURE__ */ jsx(AdminStatCard, {
					title: "Draft Articles",
					value: kpis.draft,
					icon: Clock,
					badgeVariant: "amber"
				})
			}),
			/* @__PURE__ */ jsx("div", {
				onClick: () => onSelectStatus?.("featured"),
				className: "h-full cursor-pointer transition-transform active:scale-[0.98]",
				children: /* @__PURE__ */ jsx(AdminStatCard, {
					title: "Featured Pinned",
					value: kpis.featured,
					icon: Sparkles,
					badgeVariant: "purple"
				})
			})
		]
	});
}
//#endregion
//#region resources/js/components/admin/blogs/BlogFilterBar.tsx
function BlogFilterBar({ search, onSearchChange, selectedStatus, onStatusChange, selectedCategory, onCategoryChange, availableCategories, kpis, onSubmit, onClear, onOpenCreate, hasActiveFilters }) {
	const statusOptions = [
		{
			value: "all",
			label: "All Statuses",
			badge: `${kpis.total}`
		},
		{
			value: "published",
			label: "Published",
			badge: `${kpis.published}`
		},
		{
			value: "draft",
			label: "Drafts",
			badge: `${kpis.draft}`
		}
	];
	const categoryOptions = [{
		value: "all",
		label: "All Categories",
		icon: Layers
	}, ...availableCategories.map((cat) => ({
		value: cat,
		label: cat,
		icon: Tag
	}))];
	return /* @__PURE__ */ jsxs("div", {
		className: "relative z-30 rounded-2xl border p-4 backdrop-blur-sm transition-colors duration-200",
		style: {
			backgroundColor: "var(--admin-card-bg)",
			borderColor: "var(--admin-border)"
		},
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mb-3 flex flex-wrap items-center justify-between gap-3",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-2 font-mono text-xs font-semibold",
				style: { color: "var(--admin-text-primary)" },
				children: [/* @__PURE__ */ jsx(Filter, {
					className: "h-3.5 w-3.5",
					style: { color: "var(--admin-accent)" }
				}), /* @__PURE__ */ jsx("span", { children: "Filter & Search Blog Articles" })]
			}), /* @__PURE__ */ jsxs("button", {
				type: "button",
				onClick: onOpenCreate,
				className: "inline-flex cursor-pointer items-center gap-1.5 rounded-xl px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm transition-all hover:opacity-90 active:scale-95",
				style: { backgroundColor: "var(--admin-accent)" },
				children: [/* @__PURE__ */ jsx(Plus, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ jsx("span", { children: "Write New Article" })]
			})]
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
						placeholder: "Search by title, excerpt, category, author...",
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
						placeholder: "Filter Status"
					})
				}),
				/* @__PURE__ */ jsx("div", {
					className: "sm:col-span-3",
					children: /* @__PURE__ */ jsx(AdminDropdown, {
						value: selectedCategory,
						onChange: onCategoryChange,
						options: categoryOptions,
						placeholder: "Filter Category"
					})
				}),
				/* @__PURE__ */ jsx("div", {
					className: "flex items-center gap-2 sm:col-span-1",
					children: hasActiveFilters && /* @__PURE__ */ jsx("button", {
						type: "button",
						onClick: onClear,
						title: "Reset All Filters",
						className: "flex h-9 w-9 items-center justify-center rounded-xl border transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800",
						style: {
							borderColor: "var(--admin-border)",
							color: "var(--admin-text-muted)"
						},
						children: /* @__PURE__ */ jsx(RotateCcw, { className: "h-3.5 w-3.5" })
					})
				})
			]
		})]
	});
}
//#endregion
//#region resources/js/components/admin/blogs/BlogTable.tsx
function BlogTable({ blogs, selectedIds, isAllSelected, onToggleSelectAll, onToggleSelectOne, onEdit, onDeleteSingle, onToggleFeatured, onClearFilters, hasActiveFilters }) {
	const getCategoryBadgeClass = (category) => {
		switch (category) {
			case "Engineering": return "bg-blue-500/10 text-blue-500 border-blue-500/20";
			case "AI & Automation": return "bg-purple-500/10 text-purple-400 border-purple-500/20";
			case "Design UI/UX": return "bg-pink-500/10 text-pink-400 border-pink-500/20";
			case "Cloud & DevOps": return "bg-cyan-500/10 text-cyan-400 border-cyan-500/20";
			case "Business Strategy": return "bg-emerald-500/10 text-emerald-500 border-emerald-500/20";
			default: return "bg-neutral-500/10 text-neutral-400 border-neutral-500/20";
		}
	};
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
						className: "w-10 px-4 py-3",
						children: /* @__PURE__ */ jsx("input", {
							type: "checkbox",
							checked: isAllSelected,
							onChange: onToggleSelectAll,
							className: "h-4 w-4 rounded border-neutral-300 text-blue-600 focus:ring-blue-500 dark:border-neutral-700"
						})
					}),
					/* @__PURE__ */ jsx("th", {
						className: "px-4 py-3 font-medium",
						children: "Article & Snippet"
					}),
					/* @__PURE__ */ jsx("th", {
						className: "px-3 py-3 font-medium",
						children: "Category"
					}),
					/* @__PURE__ */ jsx("th", {
						className: "px-3 py-3 font-medium",
						children: "Status"
					}),
					/* @__PURE__ */ jsx("th", {
						className: "px-3 py-3 font-medium",
						children: "Author & Date"
					}),
					/* @__PURE__ */ jsx("th", {
						className: "px-3 py-3 font-medium",
						children: "Engagement"
					}),
					/* @__PURE__ */ jsx("th", {
						className: "px-3 py-3 text-center font-medium",
						children: "Featured"
					}),
					/* @__PURE__ */ jsx("th", {
						className: "px-4 py-3 text-right font-medium",
						children: "Actions"
					})
				]
			}) }), /* @__PURE__ */ jsx("tbody", {
				className: "divide-y",
				style: { borderColor: "var(--admin-table-border)" },
				children: blogs.length === 0 ? /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", {
					colSpan: 8,
					className: "py-16 text-center",
					children: /* @__PURE__ */ jsxs("div", {
						className: "flex flex-col items-center justify-center gap-3",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "flex h-12 w-12 items-center justify-center rounded-2xl border",
								style: {
									backgroundColor: "var(--admin-button-secondary-bg)",
									borderColor: "var(--admin-border)",
									color: "var(--admin-text-dim)"
								},
								children: /* @__PURE__ */ jsx(BookOpen, { className: "h-6 w-6" })
							}),
							/* @__PURE__ */ jsx("div", {
								className: "font-heading text-sm font-semibold",
								style: { color: "var(--admin-text-primary)" },
								children: "No Blog Articles Found"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "max-w-sm text-xs",
								style: { color: "var(--admin-text-muted)" },
								children: hasActiveFilters ? "No articles match your active filter criteria. Try adjusting or clearing filters." : "No blog articles exist in the database yet. Write your first article to publish."
							}),
							hasActiveFilters && /* @__PURE__ */ jsx("button", {
								type: "button",
								onClick: onClearFilters,
								className: "mt-2 rounded-xl border px-3 py-1.5 text-xs font-medium transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800",
								style: {
									borderColor: "var(--admin-border)",
									color: "var(--admin-text-secondary)"
								},
								children: "Clear All Filters"
							})
						]
					})
				}) }) : blogs.map((blog) => {
					const isSelected = selectedIds.includes(blog.id);
					return /* @__PURE__ */ jsxs("tr", {
						className: `transition-colors duration-150 ${isSelected ? "bg-blue-500/5 dark:bg-blue-500/10" : "hover:bg-neutral-500/5"}`,
						children: [
							/* @__PURE__ */ jsx("td", {
								className: "px-4 py-3.5",
								children: /* @__PURE__ */ jsx("input", {
									type: "checkbox",
									checked: isSelected,
									onChange: () => onToggleSelectOne(blog.id),
									className: "h-4 w-4 rounded border-neutral-300 text-blue-600 focus:ring-blue-500 dark:border-neutral-700"
								})
							}),
							/* @__PURE__ */ jsx("td", {
								className: "max-w-md px-4 py-3.5",
								children: /* @__PURE__ */ jsxs("div", {
									className: "flex items-start gap-3",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "relative h-14 w-20 shrink-0 overflow-hidden rounded-xl border",
										style: {
											borderColor: "var(--admin-border)",
											backgroundColor: "var(--admin-button-secondary-bg)"
										},
										children: [blog.featured_image ? /* @__PURE__ */ jsx("img", {
											src: blog.featured_image,
											alt: blog.title,
											className: "h-full w-full object-cover transition-transform duration-300 hover:scale-110"
										}) : /* @__PURE__ */ jsx("div", {
											className: "flex h-full w-full items-center justify-center text-neutral-400",
											children: /* @__PURE__ */ jsx(BookOpen, { className: "h-5 w-5 opacity-40" })
										}), blog.is_featured && /* @__PURE__ */ jsx("div", {
											className: "absolute top-1 right-1 rounded-full bg-purple-500 p-0.5 text-white shadow-sm",
											title: "Featured Article",
											children: /* @__PURE__ */ jsx(Sparkles, { className: "h-2.5 w-2.5" })
										})]
									}), /* @__PURE__ */ jsxs("div", {
										className: "min-w-0 flex-1",
										children: [
											/* @__PURE__ */ jsx("div", {
												className: "line-clamp-1 font-heading text-xs font-bold transition-colors hover:text-blue-500",
												style: { color: "var(--admin-text-primary)" },
												children: blog.title
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "mt-0.5 line-clamp-1 font-mono text-[10px]",
												style: { color: "var(--admin-text-dim)" },
												children: ["/", blog.slug]
											}),
											blog.excerpt && /* @__PURE__ */ jsx("p", {
												className: "mt-1 line-clamp-1 text-[11px]",
												style: { color: "var(--admin-text-muted)" },
												children: blog.excerpt
											})
										]
									})]
								})
							}),
							/* @__PURE__ */ jsx("td", {
								className: "px-3 py-3.5 whitespace-nowrap",
								children: /* @__PURE__ */ jsx("span", {
									className: `inline-block rounded-full border px-2.5 py-0.5 font-mono text-[10px] font-semibold ${getCategoryBadgeClass(blog.category)}`,
									children: blog.category
								})
							}),
							/* @__PURE__ */ jsx("td", {
								className: "px-3 py-3.5 whitespace-nowrap",
								children: blog.status === "published" ? /* @__PURE__ */ jsxs("span", {
									className: "inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-emerald-500",
									children: [/* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" }), "Published"]
								}) : /* @__PURE__ */ jsxs("span", {
									className: "inline-flex items-center gap-1.5 rounded-full border border-amber-500/20 bg-amber-500/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-amber-500",
									children: [/* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-amber-500" }), "Draft"]
								})
							}),
							/* @__PURE__ */ jsxs("td", {
								className: "px-3 py-3.5 whitespace-nowrap",
								children: [/* @__PURE__ */ jsx("div", {
									className: "font-medium",
									style: { color: "var(--admin-text-primary)" },
									children: blog.author_name
								}), /* @__PURE__ */ jsx("div", {
									className: "mt-0.5 font-mono text-[10px]",
									style: { color: "var(--admin-text-muted)" },
									children: blog.published_at ? new Date(blog.published_at).toLocaleDateString("en-US", {
										month: "short",
										day: "numeric",
										year: "numeric"
									}) : new Date(blog.created_at).toLocaleDateString("en-US", {
										month: "short",
										day: "numeric",
										year: "numeric"
									})
								})]
							}),
							/* @__PURE__ */ jsxs("td", {
								className: "px-3 py-3.5 font-mono text-[11px] whitespace-nowrap",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-1 text-neutral-400",
									children: [/* @__PURE__ */ jsx(Eye, { className: "h-3 w-3" }), /* @__PURE__ */ jsxs("span", { children: [
										blog.views_count.toLocaleString(),
										" ",
										"views"
									] })]
								}), blog.read_time && /* @__PURE__ */ jsxs("div", {
									className: "mt-0.5 flex items-center gap-1 text-[10px] text-neutral-400 opacity-75",
									children: [/* @__PURE__ */ jsx(Clock, { className: "h-2.5 w-2.5" }), /* @__PURE__ */ jsx("span", { children: blog.read_time })]
								})]
							}),
							/* @__PURE__ */ jsx("td", {
								className: "px-3 py-3.5 text-center",
								children: /* @__PURE__ */ jsx("button", {
									type: "button",
									onClick: () => onToggleFeatured(blog),
									title: blog.is_featured ? "Unpin from Featured" : "Pin to Featured",
									className: `inline-flex h-8 w-8 items-center justify-center rounded-xl border transition-all ${blog.is_featured ? "border-purple-500/30 bg-purple-500/20 text-purple-400 shadow-sm" : "border-transparent text-neutral-400 hover:border-neutral-700 hover:bg-neutral-800"}`,
									children: /* @__PURE__ */ jsx(Star, { className: `h-4 w-4 ${blog.is_featured ? "fill-purple-400" : ""}` })
								})
							}),
							/* @__PURE__ */ jsx("td", {
								className: "px-4 py-3.5 text-right whitespace-nowrap",
								children: /* @__PURE__ */ jsxs("div", {
									className: "flex items-center justify-end gap-1",
									children: [
										/* @__PURE__ */ jsx("a", {
											href: `/blog/${blog.slug}`,
											target: "_blank",
											rel: "noreferrer",
											title: "View Live Article",
											className: "flex h-8 w-8 items-center justify-center rounded-xl border transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800",
											style: {
												borderColor: "var(--admin-border)",
												color: "var(--admin-text-secondary)"
											},
											children: /* @__PURE__ */ jsx(ExternalLink, { className: "h-3.5 w-3.5" })
										}),
										/* @__PURE__ */ jsx("button", {
											type: "button",
											onClick: () => onEdit(blog),
											title: "Edit Article",
											className: "flex h-8 w-8 items-center justify-center rounded-xl border transition-colors hover:bg-blue-500/10 hover:text-blue-500",
											style: {
												borderColor: "var(--admin-border)",
												color: "var(--admin-text-secondary)"
											},
											children: /* @__PURE__ */ jsx(Pencil, { className: "h-3.5 w-3.5" })
										}),
										/* @__PURE__ */ jsx("button", {
											type: "button",
											onClick: () => onDeleteSingle(blog),
											title: "Delete Article",
											className: "flex h-8 w-8 items-center justify-center rounded-xl border transition-colors hover:bg-red-500/10 hover:text-red-500",
											style: {
												borderColor: "var(--admin-border)",
												color: "var(--admin-text-secondary)"
											},
											children: /* @__PURE__ */ jsx(Trash2, { className: "h-3.5 w-3.5" })
										})
									]
								})
							})
						]
					}, blog.id);
				})
			})]
		})
	});
}
//#endregion
//#region resources/js/components/admin/blogs/BlogPagination.tsx
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
function BlogPagination({ blogs, filters, onPerPageChange }) {
	const handlePerPageChange = (val) => {
		const num = Number(val);
		if (onPerPageChange) {
			onPerPageChange(num);
			return;
		}
		router.get("/z-admin/blogs", {
			search: filters?.search || void 0,
			status: filters?.status && filters.status !== "all" ? filters.status : void 0,
			category: filters?.category && filters.category !== "all" ? filters.category : void 0,
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
						value: String(blogs.per_page || 10),
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
						children: blogs.from || 0
					}),
					" ",
					"to",
					" ",
					/* @__PURE__ */ jsx("span", {
						className: "font-semibold",
						style: { color: "var(--admin-text-primary)" },
						children: blogs.to || 0
					}),
					" ",
					"of",
					" ",
					/* @__PURE__ */ jsx("span", {
						className: "font-semibold",
						style: { color: "var(--admin-text-primary)" },
						children: blogs.total
					}),
					" ",
					"articles"
				] })
			]
		}), blogs.last_page > 1 && /* @__PURE__ */ jsx("div", {
			className: "flex flex-wrap items-center gap-1",
			children: blogs.links.map((link, idx) => /* @__PURE__ */ jsx("button", {
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
//#region resources/js/components/admin/blogs/BlogRichEditor.tsx
var TOOLBAR_BUTTONS = [
	{
		icon: Bold,
		label: "Bold",
		action: "bold",
		syntax: "**$SEL**"
	},
	{
		icon: Italic,
		label: "Italic",
		action: "italic",
		syntax: "*$SEL*"
	},
	{
		icon: Heading2,
		label: "Heading 2",
		action: "h2",
		syntax: "<h2>$SEL</h2>"
	},
	{
		icon: List,
		label: "Bullet List",
		action: "ul",
		syntax: "<ul>\n    <li>$SEL</li>\n</ul>"
	},
	{
		icon: ListOrdered,
		label: "Ordered List",
		action: "ol",
		syntax: "<ol>\n    <li>$SEL</li>\n</ol>"
	},
	{
		icon: Link2,
		label: "Link",
		action: "link",
		syntax: "<a href=\"URL\">$SEL</a>"
	},
	{
		icon: Code2,
		label: "Code Block",
		action: "code",
		syntax: "<pre><code>$SEL</code></pre>"
	},
	{
		icon: Quote,
		label: "Blockquote",
		action: "blockquote",
		syntax: "<blockquote>$SEL</blockquote>"
	}
];
function BlogRichEditor({ value, onChange, editorView, onViewChange }) {
	const textareaRef = useRef(null);
	const handleToolbarAction = (syntax) => {
		const textarea = textareaRef.current;
		if (!textarea) return;
		const start = textarea.selectionStart;
		const end = textarea.selectionEnd;
		const selectedText = value.substring(start, end) || "text";
		const replacement = syntax.replace("$SEL", selectedText);
		onChange(value.substring(0, start) + replacement + value.substring(end));
		setTimeout(() => {
			textarea.focus();
			const newCursorPos = start + replacement.length;
			textarea.setSelectionRange(newCursorPos, newCursorPos);
		}, 10);
	};
	return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
		className: "flex flex-wrap items-center justify-between gap-2 rounded-t-xl border border-b-0 px-3 py-2",
		style: {
			backgroundColor: "var(--admin-card-subtle, #14141d)",
			borderColor: "var(--admin-border, rgba(255, 255, 255, 0.08))"
		},
		children: [/* @__PURE__ */ jsx("div", {
			className: "flex flex-wrap items-center gap-1",
			children: TOOLBAR_BUTTONS.map((btn) => {
				const Icon = btn.icon;
				return /* @__PURE__ */ jsx("button", {
					type: "button",
					title: btn.label,
					onClick: () => handleToolbarAction(btn.syntax),
					className: "rounded-lg p-1.5 transition-colors",
					style: { color: "var(--admin-text-secondary, #a1a1aa)" },
					onMouseEnter: (e) => {
						e.currentTarget.style.backgroundColor = "var(--admin-button-secondary-bg, rgba(255, 255, 255, 0.08))";
						e.currentTarget.style.color = "var(--admin-text-primary, #ffffff)";
					},
					onMouseLeave: (e) => {
						e.currentTarget.style.backgroundColor = "transparent";
						e.currentTarget.style.color = "var(--admin-text-secondary, #a1a1aa)";
					},
					children: /* @__PURE__ */ jsx(Icon, { size: 14 })
				}, btn.action);
			})
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex items-center rounded-lg border p-0.5",
			style: {
				backgroundColor: "var(--admin-button-secondary-bg, rgba(255, 255, 255, 0.06))",
				borderColor: "var(--admin-border, rgba(255, 255, 255, 0.08))"
			},
			children: [
				/* @__PURE__ */ jsxs("button", {
					type: "button",
					onClick: () => onViewChange("edit"),
					className: "flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-medium transition-colors",
					style: {
						backgroundColor: editorView === "edit" ? "var(--admin-modal-bg, #0e0e15)" : "transparent",
						color: editorView === "edit" ? "var(--admin-text-primary, #ffffff)" : "var(--admin-text-muted, #71717a)"
					},
					children: [/* @__PURE__ */ jsx(PenLine, { size: 12 }), "Edit"]
				}),
				/* @__PURE__ */ jsxs("button", {
					type: "button",
					onClick: () => onViewChange("split"),
					className: "flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-medium transition-colors",
					style: {
						backgroundColor: editorView === "split" ? "var(--admin-modal-bg, #0e0e15)" : "transparent",
						color: editorView === "split" ? "var(--admin-text-primary, #ffffff)" : "var(--admin-text-muted, #71717a)"
					},
					children: [/* @__PURE__ */ jsx(Columns2, { size: 12 }), "Split"]
				}),
				/* @__PURE__ */ jsxs("button", {
					type: "button",
					onClick: () => onViewChange("preview"),
					className: "flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-medium transition-colors",
					style: {
						backgroundColor: editorView === "preview" ? "var(--admin-modal-bg, #0e0e15)" : "transparent",
						color: editorView === "preview" ? "var(--admin-text-primary, #ffffff)" : "var(--admin-text-muted, #71717a)"
					},
					children: [/* @__PURE__ */ jsx(Eye, { size: 12 }), "Preview"]
				})
			]
		})]
	}), /* @__PURE__ */ jsxs("div", {
		className: `grid ${editorView === "split" ? "grid-cols-2 divide-x" : "grid-cols-1"} overflow-hidden rounded-b-xl border`,
		style: {
			borderColor: "var(--admin-border, rgba(255, 255, 255, 0.08))",
			minHeight: 280
		},
		children: [(editorView === "edit" || editorView === "split") && /* @__PURE__ */ jsx("textarea", {
			ref: textareaRef,
			value,
			onChange: (e) => onChange(e.target.value),
			required: true,
			placeholder: "Write article content in HTML (use <h2>, <p>, <ul>, <code>, <blockquote>, etc.)...",
			rows: 12,
			className: "w-full resize-y p-4 font-mono text-xs leading-relaxed transition-colors outline-none",
			style: {
				backgroundColor: "var(--admin-input-bg, #14141d)",
				color: "var(--admin-text-primary, #ffffff)"
			}
		}), (editorView === "preview" || editorView === "split") && /* @__PURE__ */ jsx("div", {
			className: "prose prose-invert prose-sm max-h-[380px] overflow-y-auto p-5",
			style: {
				backgroundColor: "var(--admin-card-subtle, #14141d)",
				color: "var(--admin-text-primary, #ffffff)"
			},
			children: value ? /* @__PURE__ */ jsx("div", {
				dangerouslySetInnerHTML: { __html: value },
				className: "blog-admin-preview space-y-3 text-xs leading-relaxed"
			}) : /* @__PURE__ */ jsx("p", {
				className: "text-xs italic",
				style: { color: "var(--admin-text-muted, #71717a)" },
				children: "Live HTML preview will appear here as you type..."
			})
		})]
	})] });
}
//#endregion
//#region resources/js/components/admin/blogs/BlogMediaSection.tsx
function BlogMediaSection({ imageUrl, onUrlChange, onFileSelect, previewUrl, onPreviewChange }) {
	const fileInputRef = useRef(null);
	const handleFileChange = (e) => {
		const file = e.target.files?.[0];
		if (file) {
			onFileSelect(file);
			onPreviewChange(URL.createObjectURL(file));
		}
	};
	const handleRemoveImage = () => {
		onFileSelect(null);
		onUrlChange("");
		onPreviewChange("");
		if (fileInputRef.current) fileInputRef.current.value = "";
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-3",
		children: [
			/* @__PURE__ */ jsx("label", {
				className: "block text-xs font-semibold tracking-wider uppercase",
				style: { color: "var(--admin-text-secondary, #a1a1aa)" },
				children: "Cover / Featured Image"
			}),
			/* @__PURE__ */ jsx("input", {
				ref: fileInputRef,
				type: "file",
				accept: "image/*",
				onChange: handleFileChange,
				className: "hidden"
			}),
			previewUrl ? /* @__PURE__ */ jsxs("div", {
				className: "group relative overflow-hidden rounded-xl border",
				style: {
					borderColor: "var(--admin-border, rgba(255, 255, 255, 0.12))",
					maxHeight: 180
				},
				children: [/* @__PURE__ */ jsx("img", {
					src: previewUrl,
					alt: "Featured Preview",
					className: "h-44 w-full object-cover"
				}), /* @__PURE__ */ jsxs("div", {
					className: "absolute inset-0 flex items-center justify-center gap-3 bg-black/60 opacity-0 transition-opacity group-hover:opacity-100",
					children: [/* @__PURE__ */ jsx("button", {
						type: "button",
						onClick: () => fileInputRef.current?.click(),
						className: "rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-black shadow transition-colors hover:bg-slate-100",
						children: "Change Image"
					}), /* @__PURE__ */ jsx("button", {
						type: "button",
						onClick: handleRemoveImage,
						className: "rounded-lg bg-red-600/90 p-2 text-white shadow transition-colors hover:bg-red-600",
						title: "Remove image",
						children: /* @__PURE__ */ jsx(Trash2, { size: 14 })
					})]
				})]
			}) : /* @__PURE__ */ jsxs("div", {
				onClick: () => fileInputRef.current?.click(),
				className: "cursor-pointer rounded-xl border-2 border-dashed p-6 text-center transition-colors",
				style: {
					borderColor: "var(--admin-border, rgba(255, 255, 255, 0.12))",
					backgroundColor: "var(--admin-card-subtle, #14141d)"
				},
				onMouseEnter: (e) => {
					e.currentTarget.style.borderColor = "var(--admin-accent, #10b981)";
				},
				onMouseLeave: (e) => {
					e.currentTarget.style.borderColor = "var(--admin-border, rgba(255, 255, 255, 0.12))";
				},
				children: [
					/* @__PURE__ */ jsx(ImagePlus, {
						size: 28,
						className: "mx-auto mb-2 opacity-60",
						style: { color: "var(--admin-text-muted, #71717a)" }
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-xs font-semibold",
						style: { color: "var(--admin-text-primary, #ffffff)" },
						children: "Click to upload featured cover image"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-0.5 text-[11px]",
						style: { color: "var(--admin-text-muted, #71717a)" },
						children: "PNG, JPG, WEBP up to 5MB (16:9 aspect recommended)"
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ jsx("span", {
					className: "text-[11px] whitespace-nowrap",
					style: { color: "var(--admin-text-muted, #71717a)" },
					children: "Or paste direct image URL:"
				}), /* @__PURE__ */ jsx("input", {
					type: "url",
					value: imageUrl,
					onChange: (e) => {
						onUrlChange(e.target.value);
						if (e.target.value) onPreviewChange(e.target.value);
					},
					placeholder: "https://images.unsplash.com/...",
					className: "flex-1 rounded-lg border px-3 py-1.5 text-xs transition-colors outline-none",
					style: {
						backgroundColor: "var(--admin-input-bg, #14141d)",
						borderColor: "var(--admin-input-border, rgba(255, 255, 255, 0.12))",
						color: "var(--admin-text-primary, #ffffff)"
					}
				})]
			})
		]
	});
}
//#endregion
//#region resources/js/components/admin/blogs/BlogSeoSection.tsx
function BlogSeoSection({ metaTitle, onMetaTitleChange, metaDescription, onMetaDescriptionChange, slug, onSlugChange, title }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-3 rounded-xl border p-4",
		style: {
			backgroundColor: "var(--admin-card-subtle, #14141d)",
			borderColor: "var(--admin-border, rgba(255, 255, 255, 0.08))"
		},
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ jsx(Globe, {
					size: 15,
					style: { color: "var(--admin-accent, #10b981)" }
				}), /* @__PURE__ */ jsx("h4", {
					className: "text-xs font-semibold tracking-wider uppercase",
					style: { color: "var(--admin-text-secondary, #a1a1aa)" },
					children: "Search Engine Optimization (SEO) & URL"
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-1 gap-3 md:grid-cols-2",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
					className: "mb-1 block text-xs font-medium",
					style: { color: "var(--admin-text-secondary, #a1a1aa)" },
					children: "Custom URL Slug (auto-generated if empty)"
				}), /* @__PURE__ */ jsx("input", {
					type: "text",
					value: slug,
					onChange: (e) => onSlugChange(e.target.value),
					placeholder: "e.g. mastering-edge-computing",
					className: "w-full rounded-lg border px-3 py-1.5 font-mono text-xs transition-colors outline-none",
					style: {
						backgroundColor: "var(--admin-input-bg, #0e0e15)",
						borderColor: "var(--admin-input-border, rgba(255, 255, 255, 0.12))",
						color: "var(--admin-text-primary, #ffffff)"
					}
				})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
					className: "mb-1 block text-xs font-medium",
					style: { color: "var(--admin-text-secondary, #a1a1aa)" },
					children: "Meta Title (max 60 chars)"
				}), /* @__PURE__ */ jsx("input", {
					type: "text",
					value: metaTitle,
					onChange: (e) => onMetaTitleChange(e.target.value),
					placeholder: title || "SEO Title",
					maxLength: 70,
					className: "w-full rounded-lg border px-3 py-1.5 text-xs transition-colors outline-none",
					style: {
						backgroundColor: "var(--admin-input-bg, #0e0e15)",
						borderColor: "var(--admin-input-border, rgba(255, 255, 255, 0.12))",
						color: "var(--admin-text-primary, #ffffff)"
					}
				})] })]
			}),
			/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
				className: "mb-1 block text-xs font-medium",
				style: { color: "var(--admin-text-secondary, #a1a1aa)" },
				children: "Meta Description (max 160 chars)"
			}), /* @__PURE__ */ jsx("textarea", {
				value: metaDescription,
				onChange: (e) => onMetaDescriptionChange(e.target.value),
				placeholder: "Brief description that search engine crawlers will display in search results...",
				rows: 2,
				maxLength: 165,
				className: "w-full resize-none rounded-lg border px-3 py-1.5 text-xs transition-colors outline-none",
				style: {
					backgroundColor: "var(--admin-input-bg, #0e0e15)",
					borderColor: "var(--admin-input-border, rgba(255, 255, 255, 0.12))",
					color: "var(--admin-text-primary, #ffffff)"
				}
			})] }),
			/* @__PURE__ */ jsxs("div", {
				className: "rounded-lg border p-3 text-left",
				style: {
					backgroundColor: "var(--admin-modal-bg, #0e0e15)",
					borderColor: "var(--admin-border, rgba(255, 255, 255, 0.08))"
				},
				children: [
					/* @__PURE__ */ jsxs("p", {
						className: "truncate font-mono text-[10px] text-emerald-500",
						children: ["https://zytrixon.com/blog/", slug || "article-slug"]
					}),
					/* @__PURE__ */ jsxs("p", {
						className: "mt-0.5 cursor-pointer truncate text-xs font-semibold text-blue-400 hover:underline",
						children: [metaTitle || title || "Article Title", " | Zytrixon Tech Blog"]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-0.5 line-clamp-2 text-[11px]",
						style: { color: "var(--admin-text-muted, #71717a)" },
						children: metaDescription || "Read this in-depth engineering article and technical blueprint on Zytrixon Tech."
					})
				]
			})
		]
	});
}
//#endregion
//#region resources/js/components/admin/blogs/BlogModal.tsx
function BlogModal({ isOpen, mode, formData, categories, onChange, onSubmit, onClose }) {
	const [editorView, setEditorView] = useState("edit");
	const [imagePreview, setImagePreview] = useState("");
	useEffect(() => {
		if (formData.featured_image && !imagePreview) setImagePreview(formData.featured_image);
		if (!isOpen) setImagePreview("");
	}, [isOpen, formData.featured_image]);
	if (!isOpen) return null;
	if (typeof document === "undefined") return null;
	return createPortal(/* @__PURE__ */ jsx("div", {
		className: "fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-md",
		style: { backgroundColor: "var(--admin-modal-overlay, rgba(0, 0, 0, 0.85))" },
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex max-h-[92vh] w-full max-w-4xl animate-in flex-col overflow-hidden rounded-2xl border shadow-2xl duration-200 zoom-in-95 fade-in",
			style: {
				backgroundColor: "var(--admin-modal-bg, #0e0e15)",
				borderColor: "var(--admin-border, rgba(255, 255, 255, 0.12))"
			},
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex flex-shrink-0 items-center justify-between border-b px-6 py-4",
				style: {
					borderColor: "var(--admin-border, rgba(255, 255, 255, 0.08))",
					backgroundColor: "var(--admin-card-subtle, #14141d)"
				},
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2.5",
					children: [/* @__PURE__ */ jsx("div", {
						className: "rounded-xl p-2",
						style: {
							backgroundColor: "var(--admin-button-secondary-bg, rgba(255, 255, 255, 0.06))",
							color: "var(--admin-accent, #10b981)"
						},
						children: mode === "create" ? /* @__PURE__ */ jsx(Plus, { size: 18 }) : /* @__PURE__ */ jsx(Pencil, { size: 18 })
					}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
						className: "font-heading text-base font-semibold",
						style: { color: "var(--admin-text-primary, #ffffff)" },
						children: mode === "create" ? "Create New Article" : "Edit Article"
					}), /* @__PURE__ */ jsx("p", {
						className: "text-xs",
						style: { color: "var(--admin-text-muted, #71717a)" },
						children: mode === "create" ? "Compose and publish a technical post to the public blog." : `Updating article: "${formData.title || "Untitled"}"`
					})] })]
				}), /* @__PURE__ */ jsx("button", {
					type: "button",
					onClick: onClose,
					className: "rounded-lg p-1.5 transition-colors",
					style: { color: "var(--admin-text-muted, #71717a)" },
					onMouseEnter: (e) => {
						e.currentTarget.style.backgroundColor = "var(--admin-button-secondary-bg, rgba(255, 255, 255, 0.08))";
						e.currentTarget.style.color = "var(--admin-text-primary, #ffffff)";
					},
					onMouseLeave: (e) => {
						e.currentTarget.style.backgroundColor = "transparent";
						e.currentTarget.style.color = "var(--admin-text-muted, #71717a)";
					},
					children: /* @__PURE__ */ jsx(X, { size: 18 })
				})]
			}), /* @__PURE__ */ jsxs("form", {
				onSubmit,
				className: "flex-1 space-y-5 overflow-y-auto p-6",
				style: { backgroundColor: "var(--admin-modal-bg, #0e0e15)" },
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "grid grid-cols-1 gap-4 md:grid-cols-3",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "md:col-span-2",
							children: [/* @__PURE__ */ jsxs("label", {
								className: "mb-1 block text-xs font-semibold tracking-wider uppercase",
								style: { color: "var(--admin-text-secondary, #a1a1aa)" },
								children: [
									"Article Title",
									" ",
									/* @__PURE__ */ jsx("span", {
										className: "text-red-500",
										children: "*"
									})
								]
							}), /* @__PURE__ */ jsx("input", {
								type: "text",
								value: formData.title,
								onChange: (e) => onChange("title", e.target.value),
								required: true,
								placeholder: "e.g. Architecting High-Throughput Microservices on AWS",
								className: "w-full rounded-lg border px-3.5 py-2 text-sm font-medium transition-colors outline-none",
								style: {
									backgroundColor: "var(--admin-input-bg, #14141d)",
									borderColor: "var(--admin-input-border, rgba(255, 255, 255, 0.12))",
									color: "var(--admin-text-primary, #ffffff)"
								}
							})]
						}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("label", {
							className: "mb-1 block text-xs font-semibold tracking-wider uppercase",
							style: { color: "var(--admin-text-secondary, #a1a1aa)" },
							children: ["Category ", /* @__PURE__ */ jsx("span", {
								className: "text-red-500",
								children: "*"
							})]
						}), /* @__PURE__ */ jsx("select", {
							value: formData.category,
							onChange: (e) => onChange("category", e.target.value),
							className: "w-full rounded-lg border px-3.5 py-2 text-sm transition-colors outline-none",
							style: {
								backgroundColor: "var(--admin-input-bg, #14141d)",
								borderColor: "var(--admin-input-border, rgba(255, 255, 255, 0.12))",
								color: "var(--admin-text-primary, #ffffff)"
							},
							children: categories.map((cat) => /* @__PURE__ */ jsx("option", {
								value: cat,
								children: cat
							}, cat))
						})] })]
					}),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
						className: "mb-1 block text-xs font-semibold tracking-wider uppercase",
						style: { color: "var(--admin-text-secondary, #a1a1aa)" },
						children: "Short Summary / Excerpt"
					}), /* @__PURE__ */ jsx("textarea", {
						value: formData.excerpt,
						onChange: (e) => onChange("excerpt", e.target.value),
						rows: 2,
						placeholder: "A concise synopsis to display in article cards, RSS feeds, and social share cards...",
						className: "w-full resize-none rounded-lg border px-3.5 py-2 text-xs transition-colors outline-none",
						style: {
							backgroundColor: "var(--admin-input-bg, #14141d)",
							borderColor: "var(--admin-input-border, rgba(255, 255, 255, 0.12))",
							color: "var(--admin-text-primary, #ffffff)"
						}
					})] }),
					/* @__PURE__ */ jsx(BlogRichEditor, {
						value: formData.content,
						onChange: (val) => onChange("content", val),
						editorView,
						onViewChange: setEditorView
					}),
					/* @__PURE__ */ jsx(BlogMediaSection, {
						imageUrl: formData.featured_image,
						onUrlChange: (url) => onChange("featured_image", url),
						onFileSelect: (file) => onChange("image_file", file),
						previewUrl: imagePreview,
						onPreviewChange: setImagePreview
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "grid grid-cols-1 gap-4 rounded-xl border p-4 sm:grid-cols-3",
						style: {
							backgroundColor: "var(--admin-card-subtle, #14141d)",
							borderColor: "var(--admin-border, rgba(255, 255, 255, 0.08))"
						},
						children: [
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
								className: "mb-1 block text-xs font-medium",
								style: { color: "var(--admin-text-secondary, #a1a1aa)" },
								children: "Author Name"
							}), /* @__PURE__ */ jsx("input", {
								type: "text",
								value: formData.author_name,
								onChange: (e) => onChange("author_name", e.target.value),
								placeholder: "Zytrixon Team",
								className: "w-full rounded-lg border px-3 py-1.5 text-xs transition-colors outline-none",
								style: {
									backgroundColor: "var(--admin-input-bg, #14141d)",
									borderColor: "var(--admin-input-border, rgba(255, 255, 255, 0.12))",
									color: "var(--admin-text-primary, #ffffff)"
								}
							})] }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
								className: "mb-1 block text-xs font-medium",
								style: { color: "var(--admin-text-secondary, #a1a1aa)" },
								children: "Publication Status"
							}), /* @__PURE__ */ jsxs("select", {
								value: formData.status,
								onChange: (e) => onChange("status", e.target.value),
								className: "w-full rounded-lg border px-3 py-1.5 text-xs transition-colors outline-none",
								style: {
									backgroundColor: "var(--admin-input-bg, #14141d)",
									borderColor: "var(--admin-input-border, rgba(255, 255, 255, 0.12))",
									color: "var(--admin-text-primary, #ffffff)"
								},
								children: [/* @__PURE__ */ jsx("option", {
									value: "published",
									children: "Published (Live immediately)"
								}), /* @__PURE__ */ jsx("option", {
									value: "draft",
									children: "Draft (Saved privately)"
								})]
							})] }),
							/* @__PURE__ */ jsx("div", {
								className: "flex items-center pt-5",
								children: /* @__PURE__ */ jsxs("label", {
									className: "flex cursor-pointer items-center gap-2 select-none",
									children: [/* @__PURE__ */ jsx("input", {
										type: "checkbox",
										checked: formData.is_featured,
										onChange: (e) => onChange("is_featured", e.target.checked),
										className: "h-4 w-4 cursor-pointer rounded border"
									}), /* @__PURE__ */ jsx("span", {
										className: "text-xs font-medium",
										style: { color: "var(--admin-text-primary, #ffffff)" },
										children: "Highlight as Featured Article"
									})]
								})
							})
						]
					}),
					/* @__PURE__ */ jsx(BlogSeoSection, {
						metaTitle: formData.meta_title,
						onMetaTitleChange: (val) => onChange("meta_title", val),
						metaDescription: formData.meta_description,
						onMetaDescriptionChange: (val) => onChange("meta_description", val),
						slug: formData.slug,
						onSlugChange: (val) => onChange("slug", val),
						title: formData.title
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex flex-shrink-0 items-center justify-end gap-3 border-t pt-4",
						style: {
							borderColor: "var(--admin-border, rgba(255, 255, 255, 0.08))",
							backgroundColor: "var(--admin-modal-bg, #0e0e15)"
						},
						children: [/* @__PURE__ */ jsx("button", {
							type: "button",
							onClick: onClose,
							className: "rounded-lg border px-4 py-2 text-xs font-medium transition-colors",
							style: {
								borderColor: "var(--admin-border, rgba(255, 255, 255, 0.12))",
								color: "var(--admin-text-secondary, #a1a1aa)",
								backgroundColor: "var(--admin-card-subtle, #14141d)"
							},
							children: "Cancel"
						}), /* @__PURE__ */ jsx("button", {
							type: "submit",
							className: "rounded-lg px-5 py-2 text-xs font-semibold text-white shadow-sm transition-opacity",
							style: { backgroundColor: "var(--admin-accent, #10b981)" },
							onMouseEnter: (e) => e.currentTarget.style.opacity = "0.9",
							onMouseLeave: (e) => e.currentTarget.style.opacity = "1",
							children: mode === "create" ? "Publish Article" : "Save Changes"
						})]
					})
				]
			})]
		})
	}), document.body);
}
//#endregion
//#region resources/js/components/admin/blogs/BlogDeleteModal.tsx
function BlogDeleteModal({ isOpen, isBulk, count = 1, singleTitle, onConfirm, onClose }) {
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
			children: [
				/* @__PURE__ */ jsx("button", {
					type: "button",
					onClick: onClose,
					className: "absolute top-4 right-4 cursor-pointer rounded-lg p-1 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800",
					style: { color: "var(--admin-text-secondary)" },
					children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ jsx("div", {
						className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-red-500/20 bg-red-500/10 text-red-500",
						children: /* @__PURE__ */ jsx(AlertTriangle, { className: "h-5 w-5" })
					}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
						className: "font-heading text-base font-bold",
						style: { color: "var(--admin-text-primary)" },
						children: isBulk ? `Delete ${count} Blog Articles?` : `Delete: "${singleTitle || "this article"}"?`
					}), /* @__PURE__ */ jsxs("p", {
						className: "mt-0.5 text-xs",
						style: { color: "var(--admin-text-muted)" },
						children: [
							"This action is permanent and cannot be undone. The",
							isBulk ? ` ${count} articles` : " article",
							" and any uploaded images will be removed from the database."
						]
					})] })]
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
						children: [/* @__PURE__ */ jsx(Trash2, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ jsx("span", { children: "Yes, Delete Permanently" })]
					})]
				})
			]
		})
	}), document.body);
}
//#endregion
//#region resources/js/pages/Admin/Blogs.tsx
var EMPTY_FORM = {
	title: "",
	slug: "",
	category: "Engineering",
	excerpt: "",
	content: "",
	author_name: "",
	read_time: "",
	status: "published",
	is_featured: false,
	featured_image: "",
	image_file: null,
	meta_title: "",
	meta_description: ""
};
function Blogs({ blogs, kpis, filters, categories }) {
	const [search, setSearch] = useState(filters.search || "");
	const [selectedStatus, setSelectedStatus] = useState(filters.status || "all");
	const [selectedCategory, setSelectedCategory] = useState(filters.category || "all");
	const [selectedIds, setSelectedIds] = useState([]);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalMode, setModalMode] = useState("create");
	const [editingBlog, setEditingBlog] = useState(null);
	const [form, setForm] = useState(EMPTY_FORM);
	const [deleteModal, setDeleteModal] = useState({
		open: false,
		isBulk: false
	});
	const handleFilterSubmit = (e) => {
		if (e) e.preventDefault();
		router.get("/z-admin/blogs", {
			search: search || void 0,
			status: selectedStatus !== "all" ? selectedStatus : void 0,
			category: selectedCategory !== "all" ? selectedCategory : void 0,
			per_page: filters.per_page || 10,
			page: 1
		}, { preserveState: true });
	};
	const handleClearFilters = () => {
		setSearch("");
		setSelectedStatus("all");
		setSelectedCategory("all");
		router.get("/z-admin/blogs", { per_page: filters.per_page || 10 }, { preserveState: true });
	};
	const handleSelectStatus = (status) => {
		const next = status === "featured" ? "all" : status;
		setSelectedStatus(next);
		router.get("/z-admin/blogs", {
			status: next !== "all" ? next : void 0,
			per_page: filters.per_page || 10,
			page: 1
		}, { preserveState: true });
	};
	const handlePerPageChange = (perPage) => {
		router.get("/z-admin/blogs", {
			search: filters.search || void 0,
			status: filters.status !== "all" ? filters.status : void 0,
			category: filters.category !== "all" ? filters.category : void 0,
			per_page: perPage,
			page: 1
		}, {
			preserveState: true,
			preserveScroll: true
		});
	};
	const handleToggleSelectAll = () => {
		if (selectedIds.length === blogs.data.length) setSelectedIds([]);
		else setSelectedIds(blogs.data.map((b) => b.id));
	};
	const handleToggleSelectOne = (id) => {
		setSelectedIds((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);
	};
	const handleOpenCreate = () => {
		setEditingBlog(null);
		setForm({
			...EMPTY_FORM,
			category: categories[0] || "Engineering"
		});
		setModalMode("create");
		setIsModalOpen(true);
	};
	const handleEdit = (blog) => {
		setEditingBlog(blog);
		setForm({
			title: blog.title,
			slug: blog.slug,
			category: blog.category,
			excerpt: blog.excerpt || "",
			content: blog.content,
			author_name: blog.author_name,
			read_time: blog.read_time || "",
			status: blog.status,
			is_featured: blog.is_featured,
			featured_image: blog.featured_image || "",
			image_file: null,
			meta_title: blog.meta_title || "",
			meta_description: blog.meta_description || ""
		});
		setModalMode("edit");
		setIsModalOpen(true);
	};
	const handleFormChange = (field, value) => {
		setForm((prev) => ({
			...prev,
			[field]: value
		}));
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData();
		[
			"title",
			"slug",
			"category",
			"excerpt",
			"content",
			"author_name",
			"read_time",
			"status",
			"featured_image",
			"meta_title",
			"meta_description"
		].forEach((key) => {
			if (form[key] !== null && form[key] !== void 0) formData.append(key, String(form[key]));
		});
		formData.append("is_featured", form.is_featured ? "1" : "0");
		if (form.image_file) formData.append("image_file", form.image_file);
		if (modalMode === "create") router.post("/z-admin/blogs", formData, {
			forceFormData: true,
			onSuccess: () => {
				setIsModalOpen(false);
				setForm(EMPTY_FORM);
			}
		});
		else if (editingBlog) {
			formData.append("_method", "PUT");
			router.post(`/z-admin/blogs/${editingBlog.id}`, formData, {
				forceFormData: true,
				onSuccess: () => {
					setIsModalOpen(false);
					setEditingBlog(null);
				}
			});
		}
	};
	const handleDeleteSingle = (blog) => {
		setDeleteModal({
			open: true,
			isBulk: false,
			singleId: blog.id,
			singleTitle: blog.title
		});
	};
	const handleBulkDelete = () => {
		setDeleteModal({
			open: true,
			isBulk: true
		});
	};
	const handleConfirmDelete = () => {
		if (deleteModal.isBulk) router.post("/z-admin/blogs/bulk-delete", { ids: selectedIds }, { onSuccess: () => {
			setSelectedIds([]);
			setDeleteModal({
				open: false,
				isBulk: false
			});
		} });
		else if (deleteModal.singleId) router.delete(`/z-admin/blogs/${deleteModal.singleId}`, { onSuccess: () => setDeleteModal({
			open: false,
			isBulk: false
		}) });
	};
	const handleToggleFeatured = (blog) => {
		router.post(`/z-admin/blogs/${blog.id}/toggle-featured`, {}, { preserveScroll: true });
	};
	const hasActiveFilters = Boolean(filters.search || filters.status !== "all" || filters.category !== "all");
	return /* @__PURE__ */ jsxs(AdminLayout, { children: [
		/* @__PURE__ */ jsx(Head, { title: "Blog Articles — Admin Panel" }),
		/* @__PURE__ */ jsxs("div", {
			className: "space-y-5",
			children: [
				/* @__PURE__ */ jsx(BlogStatsCards, {
					kpis,
					onSelectStatus: handleSelectStatus
				}),
				/* @__PURE__ */ jsx(BlogFilterBar, {
					search,
					onSearchChange: setSearch,
					selectedStatus,
					onStatusChange: (val) => {
						setSelectedStatus(val);
						handleFilterSubmit();
					},
					selectedCategory,
					onCategoryChange: (val) => {
						setSelectedCategory(val);
						handleFilterSubmit();
					},
					availableCategories: categories,
					kpis,
					onSubmit: handleFilterSubmit,
					onClear: handleClearFilters,
					onOpenCreate: handleOpenCreate,
					hasActiveFilters
				}),
				selectedIds.length > 0 && /* @__PURE__ */ jsxs("div", {
					className: "animate-fadeIn sticky top-4 z-30 flex flex-wrap items-center justify-between gap-3 rounded-2xl border p-3.5 shadow-2xl backdrop-blur-xl",
					style: {
						backgroundColor: "var(--admin-card-bg)",
						borderColor: "#ef4444"
					},
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ jsx("div", {
							className: "flex h-7 w-7 items-center justify-center rounded-lg border border-red-500/30 bg-red-500/20 text-xs font-bold text-red-500",
							children: selectedIds.length
						}), /* @__PURE__ */ jsxs("span", {
							className: "text-xs font-semibold",
							style: { color: "var(--admin-text-primary)" },
							children: [
								selectedIds.length,
								" ",
								selectedIds.length === 1 ? "article" : "articles",
								" ",
								"selected"
							]
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ jsx("button", {
							type: "button",
							onClick: () => setSelectedIds([]),
							className: "cursor-pointer rounded-xl border px-3 py-1.5 text-xs font-medium transition-colors",
							style: {
								backgroundColor: "var(--admin-button-secondary-bg)",
								borderColor: "var(--admin-border)",
								color: "var(--admin-text-secondary)"
							},
							children: "Deselect All"
						}), /* @__PURE__ */ jsxs("button", {
							type: "button",
							onClick: handleBulkDelete,
							className: "inline-flex cursor-pointer items-center gap-1.5 rounded-xl bg-red-600 px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm transition-all hover:bg-red-500 active:scale-95",
							children: [
								"Delete Selected (",
								selectedIds.length,
								")"
							]
						})]
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "relative z-10 overflow-hidden rounded-2xl border shadow-sm transition-colors duration-200",
					style: {
						backgroundColor: "var(--admin-card-bg)",
						borderColor: "var(--admin-border)"
					},
					children: [/* @__PURE__ */ jsx(BlogTable, {
						blogs: blogs.data,
						selectedIds,
						isAllSelected: blogs.data.length > 0 && selectedIds.length === blogs.data.length,
						onToggleSelectAll: handleToggleSelectAll,
						onToggleSelectOne: handleToggleSelectOne,
						onEdit: handleEdit,
						onDeleteSingle: handleDeleteSingle,
						onToggleFeatured: handleToggleFeatured,
						onClearFilters: handleClearFilters,
						hasActiveFilters
					}), /* @__PURE__ */ jsx(BlogPagination, {
						blogs,
						filters,
						onPerPageChange: handlePerPageChange
					})]
				})
			]
		}),
		/* @__PURE__ */ jsx(BlogModal, {
			isOpen: isModalOpen,
			mode: modalMode,
			formData: form,
			categories,
			onChange: handleFormChange,
			onSubmit: handleSubmit,
			onClose: () => {
				setIsModalOpen(false);
				setEditingBlog(null);
			}
		}),
		/* @__PURE__ */ jsx(BlogDeleteModal, {
			isOpen: deleteModal.open,
			isBulk: deleteModal.isBulk,
			count: selectedIds.length,
			singleTitle: deleteModal.singleTitle,
			onConfirm: handleConfirmDelete,
			onClose: () => setDeleteModal({
				open: false,
				isBulk: false
			})
		})
	] });
}
//#endregion
export { Blogs as default };

//# sourceMappingURL=Blogs-CcCz0bvG.js.map