import { t as AdminLayout } from "./AdminLayout-TYYnUASU.js";
import { Head, router } from "@inertiajs/react";
import { useCallback, useEffect, useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
import { AlertCircle, AlertTriangle, CheckCheck, CheckCircle2, ChevronDown, ChevronLeft, ChevronRight, ChevronUp, ExternalLink, Eye, FileText, Globe, Loader2, MapPin, Pencil, Plus, Save, Search, Sparkles, Trash2, TrendingUp, Wand2, X, XCircle, Zap } from "lucide-react";
import { createPortal } from "react-dom";
//#region resources/js/components/admin/seo-pages/SeoPageStatsCards.tsx
var cards = [
	{
		key: "total",
		label: "Total Pages",
		icon: Globe,
		color: "#6366f1",
		bg: "rgba(99,102,241,0.12)"
	},
	{
		key: "published",
		label: "Published",
		icon: Eye,
		color: "#10b981",
		bg: "rgba(16,185,129,0.12)"
	},
	{
		key: "draft",
		label: "Drafts",
		icon: FileText,
		color: "#f59e0b",
		bg: "rgba(245,158,11,0.12)"
	},
	{
		key: "avg_score",
		label: "Avg SEO Score",
		icon: TrendingUp,
		color: "#8b5cf6",
		bg: "rgba(139,92,246,0.12)",
		suffix: "/100"
	}
];
function SeoPageStatsCards({ kpis }) {
	return /* @__PURE__ */ jsx("div", {
		className: "grid grid-cols-2 gap-3 lg:grid-cols-4",
		children: cards.map(({ key, label, icon: Icon, color, bg, suffix }) => /* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-3 rounded-xl border p-4 transition-transform duration-200 hover:-translate-y-0.5",
			style: {
				backgroundColor: "var(--admin-card-bg)",
				borderColor: "var(--admin-border)"
			},
			children: [/* @__PURE__ */ jsx("div", {
				className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg",
				style: { background: bg },
				children: /* @__PURE__ */ jsx(Icon, {
					size: 18,
					style: { color }
				})
			}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
				className: "text-xs font-medium",
				style: { color: "var(--admin-text-muted)" },
				children: label
			}), /* @__PURE__ */ jsxs("p", {
				className: "text-xl font-bold tabular-nums",
				style: { color: "var(--admin-text-primary)" },
				children: [kpis[key], suffix && /* @__PURE__ */ jsx("span", {
					className: "ml-0.5 text-xs font-normal",
					style: { color: "var(--admin-text-muted)" },
					children: suffix
				})]
			})] })]
		}, key))
	});
}
//#endregion
//#region resources/js/components/admin/seo-pages/types.ts
var TEMPLATE_META = {
	grid: {
		label: "Grid",
		color: "#3b82f6",
		accent: "#1d4ed8",
		desc: "Card grid layout, clean & structured"
	},
	timeline: {
		label: "Timeline",
		color: "#10b981",
		accent: "#059669",
		desc: "Vertical timeline, story-driven flow"
	},
	card: {
		label: "Card",
		color: "#8b5cf6",
		accent: "#7c3aed",
		desc: "Glassmorphism cards, modern feel"
	},
	split: {
		label: "Split",
		color: "#f59e0b",
		accent: "#d97706",
		desc: "50/50 split sections, bold contrasts"
	}
};
var EMPTY_SEO_FORM = {
	service_id: null,
	location_id: null,
	template: "grid",
	status: "published",
	h1: "",
	meta_title: "",
	meta_description: "",
	hero_description: "",
	focus_keyword: "",
	sections: [],
	seo_score: 0
};
//#endregion
//#region resources/js/components/admin/seo-pages/SeoPageFilterBar.tsx
var SELECT_STYLE = {
	backgroundColor: "var(--admin-input-bg)",
	borderColor: "var(--admin-border)",
	color: "var(--admin-text-primary)"
};
function SeoPageFilterBar({ services, search, filters, onSearchChange, onServiceChange, onStatusChange, onTemplateChange, onSubmit }) {
	return /* @__PURE__ */ jsxs("form", {
		onSubmit,
		className: "flex flex-wrap gap-2",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "relative min-w-[200px] flex-1",
				children: [/* @__PURE__ */ jsx(Search, {
					size: 14,
					className: "absolute top-1/2 left-3 -translate-y-1/2",
					style: { color: "var(--admin-text-muted)" }
				}), /* @__PURE__ */ jsx("input", {
					type: "text",
					value: search,
					onChange: (e) => onSearchChange(e.target.value),
					placeholder: "Search by location, service or H1...",
					className: "h-9 w-full rounded-lg border pl-9 pr-3 text-sm outline-none focus:ring-1",
					style: {
						...SELECT_STYLE,
						"--tw-ring-color": "var(--admin-accent)"
					},
					onKeyDown: (e) => e.key === "Enter" && onSubmit()
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "relative",
				children: [/* @__PURE__ */ jsxs("select", {
					value: filters.service,
					onChange: (e) => onServiceChange(e.target.value),
					className: "h-9 appearance-none rounded-lg border pr-8 pl-3 text-sm outline-none",
					style: SELECT_STYLE,
					children: [/* @__PURE__ */ jsx("option", {
						value: "all",
						children: "All Services"
					}), services.map((s) => /* @__PURE__ */ jsx("option", {
						value: String(s.id),
						children: s.title
					}, s.id))]
				}), /* @__PURE__ */ jsx(ChevronDown, {
					size: 12,
					className: "pointer-events-none absolute top-1/2 right-2.5 -translate-y-1/2",
					style: { color: "var(--admin-text-muted)" }
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "relative",
				children: [/* @__PURE__ */ jsxs("select", {
					value: filters.status,
					onChange: (e) => onStatusChange(e.target.value),
					className: "h-9 appearance-none rounded-lg border pr-8 pl-3 text-sm outline-none",
					style: SELECT_STYLE,
					children: [
						/* @__PURE__ */ jsx("option", {
							value: "all",
							children: "All Status"
						}),
						/* @__PURE__ */ jsx("option", {
							value: "published",
							children: "Published"
						}),
						/* @__PURE__ */ jsx("option", {
							value: "draft",
							children: "Draft"
						})
					]
				}), /* @__PURE__ */ jsx(ChevronDown, {
					size: 12,
					className: "pointer-events-none absolute top-1/2 right-2.5 -translate-y-1/2",
					style: { color: "var(--admin-text-muted)" }
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "relative",
				children: [/* @__PURE__ */ jsxs("select", {
					value: filters.template,
					onChange: (e) => onTemplateChange(e.target.value),
					className: "h-9 appearance-none rounded-lg border pr-8 pl-3 text-sm outline-none",
					style: SELECT_STYLE,
					children: [/* @__PURE__ */ jsx("option", {
						value: "all",
						children: "All Templates"
					}), Object.keys(TEMPLATE_META).map((t) => /* @__PURE__ */ jsx("option", {
						value: t,
						children: TEMPLATE_META[t].label
					}, t))]
				}), /* @__PURE__ */ jsx(ChevronDown, {
					size: 12,
					className: "pointer-events-none absolute top-1/2 right-2.5 -translate-y-1/2",
					style: { color: "var(--admin-text-muted)" }
				})]
			}),
			/* @__PURE__ */ jsx("button", {
				type: "submit",
				className: "h-9 rounded-lg px-4 text-sm font-medium transition-opacity hover:opacity-90",
				style: {
					backgroundColor: "var(--admin-accent)",
					color: "#fff"
				},
				children: "Filter"
			})
		]
	});
}
//#endregion
//#region resources/js/components/admin/seo-pages/SeoPageTable.tsx
function ScoreBadge({ score }) {
	const color = score >= 80 ? "#10b981" : score >= 50 ? "#f59e0b" : "#ef4444";
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-center gap-1.5",
		children: [/* @__PURE__ */ jsx("div", {
			className: "relative h-6 w-6",
			children: /* @__PURE__ */ jsxs("svg", {
				className: "-rotate-90",
				viewBox: "0 0 24 24",
				fill: "none",
				children: [/* @__PURE__ */ jsx("circle", {
					cx: "12",
					cy: "12",
					r: "10",
					stroke: "rgba(255,255,255,0.08)",
					strokeWidth: "3"
				}), /* @__PURE__ */ jsx("circle", {
					cx: "12",
					cy: "12",
					r: "10",
					stroke: color,
					strokeWidth: "3",
					strokeDasharray: `${score / 100 * 62.83} 62.83`,
					strokeLinecap: "round"
				})]
			})
		}), /* @__PURE__ */ jsx("span", {
			className: "text-xs font-semibold tabular-nums",
			style: { color },
			children: score
		})]
	});
}
function SeoPageTable({ pages, selectedIds, onSelectAll, onToggleSelect, onEdit, onDelete }) {
	const allSelected = pages.data.length > 0 && pages.data.every((p) => selectedIds.includes(p.id));
	return /* @__PURE__ */ jsxs("div", {
		className: "overflow-hidden rounded-xl border",
		style: { borderColor: "var(--admin-border)" },
		children: [/* @__PURE__ */ jsx("div", {
			className: "overflow-x-auto",
			children: /* @__PURE__ */ jsxs("table", {
				className: "w-full text-sm",
				children: [/* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", {
					className: "border-b text-left text-xs uppercase tracking-wider",
					style: {
						backgroundColor: "var(--admin-card-subtle)",
						borderColor: "var(--admin-border)",
						color: "var(--admin-text-muted)"
					},
					children: [
						/* @__PURE__ */ jsx("th", {
							className: "w-10 px-4 py-3",
							children: /* @__PURE__ */ jsx("input", {
								type: "checkbox",
								checked: allSelected,
								onChange: () => allSelected ? onSelectAll([]) : onSelectAll(pages.data.map((p) => p.id)),
								className: "rounded"
							})
						}),
						/* @__PURE__ */ jsx("th", {
							className: "px-4 py-3",
							children: "Location & Service"
						}),
						/* @__PURE__ */ jsx("th", {
							className: "px-4 py-3",
							children: "H1 / Meta Title"
						}),
						/* @__PURE__ */ jsx("th", {
							className: "px-4 py-3",
							children: "Template"
						}),
						/* @__PURE__ */ jsx("th", {
							className: "px-4 py-3",
							children: "Status"
						}),
						/* @__PURE__ */ jsx("th", {
							className: "px-4 py-3",
							children: "SEO Score"
						}),
						/* @__PURE__ */ jsx("th", {
							className: "px-4 py-3",
							children: "Last Updated"
						}),
						/* @__PURE__ */ jsx("th", {
							className: "px-4 py-3 text-right",
							children: "Actions"
						})
					]
				}) }), /* @__PURE__ */ jsx("tbody", { children: pages.data.length === 0 ? /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", {
					colSpan: 8,
					className: "px-6 py-12 text-center",
					style: { color: "var(--admin-text-muted)" },
					children: "No SEO pages found. Create your first location page!"
				}) }) : pages.data.map((page) => {
					const tmpl = TEMPLATE_META[page.template];
					const isSelected = selectedIds.includes(page.id);
					const liveUrl = `/services/${page.service?.slug}/in/${page.location?.slug}`;
					return /* @__PURE__ */ jsxs("tr", {
						className: "border-b transition-colors duration-150",
						style: {
							backgroundColor: isSelected ? "rgba(99,102,241,0.06)" : "var(--admin-card-bg)",
							borderColor: "var(--admin-border)"
						},
						onMouseEnter: (e) => {
							if (!isSelected) e.currentTarget.style.backgroundColor = "var(--admin-card-hover, rgba(255,255,255,0.03))";
						},
						onMouseLeave: (e) => {
							if (!isSelected) e.currentTarget.style.backgroundColor = "var(--admin-card-bg)";
						},
						children: [
							/* @__PURE__ */ jsx("td", {
								className: "px-4 py-3",
								children: /* @__PURE__ */ jsx("input", {
									type: "checkbox",
									checked: isSelected,
									onChange: () => onToggleSelect(page.id),
									className: "rounded"
								})
							}),
							/* @__PURE__ */ jsxs("td", {
								className: "px-4 py-3",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "font-medium",
									style: { color: "var(--admin-text-primary)" },
									children: ["📍 ", page.location?.name]
								}), /* @__PURE__ */ jsx("div", {
									className: "mt-0.5 text-xs",
									style: { color: "var(--admin-text-muted)" },
									children: page.service?.title
								})]
							}),
							/* @__PURE__ */ jsxs("td", {
								className: "max-w-[220px] px-4 py-3",
								children: [/* @__PURE__ */ jsx("div", {
									className: "truncate text-xs font-medium",
									style: { color: "var(--admin-text-primary)" },
									title: page.h1 ?? "",
									children: page.h1 || /* @__PURE__ */ jsx("span", {
										style: { color: "var(--admin-text-muted)" },
										children: "No H1"
									})
								}), /* @__PURE__ */ jsx("div", {
									className: "mt-0.5 truncate text-xs",
									style: { color: "var(--admin-text-muted)" },
									title: page.meta_title ?? "",
									children: page.meta_title || "—"
								})]
							}),
							/* @__PURE__ */ jsx("td", {
								className: "px-4 py-3",
								children: /* @__PURE__ */ jsx("span", {
									className: "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
									style: {
										backgroundColor: tmpl.color + "22",
										color: tmpl.color
									},
									children: tmpl.label
								})
							}),
							/* @__PURE__ */ jsx("td", {
								className: "px-4 py-3",
								children: page.status === "published" ? /* @__PURE__ */ jsxs("span", {
									className: "inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-xs font-medium text-emerald-400",
									children: [/* @__PURE__ */ jsx(CheckCheck, { size: 10 }), " Live"]
								}) : /* @__PURE__ */ jsxs("span", {
									className: "inline-flex items-center gap-1 rounded-full bg-amber-500/15 px-2.5 py-0.5 text-xs font-medium text-amber-400",
									children: [/* @__PURE__ */ jsx(FileText, { size: 10 }), " Draft"]
								})
							}),
							/* @__PURE__ */ jsx("td", {
								className: "px-4 py-3",
								children: /* @__PURE__ */ jsx(ScoreBadge, { score: page.seo_score })
							}),
							/* @__PURE__ */ jsx("td", {
								className: "px-4 py-3 text-xs",
								style: { color: "var(--admin-text-muted)" },
								children: new Date(page.updated_at).toLocaleDateString("en-IN", {
									day: "2-digit",
									month: "short",
									year: "numeric"
								})
							}),
							/* @__PURE__ */ jsx("td", {
								className: "px-4 py-3",
								children: /* @__PURE__ */ jsxs("div", {
									className: "flex items-center justify-end gap-1",
									children: [
										/* @__PURE__ */ jsx("a", {
											href: liveUrl,
											target: "_blank",
											rel: "noopener noreferrer",
											className: "flex h-7 w-7 items-center justify-center rounded-lg border transition-colors hover:bg-indigo-500/10 hover:border-indigo-500/40",
											style: { borderColor: "var(--admin-border)" },
											title: `View live page: ${liveUrl}`,
											children: /* @__PURE__ */ jsx(ExternalLink, {
												size: 13,
												className: "text-indigo-400"
											})
										}),
										/* @__PURE__ */ jsx("button", {
											onClick: () => onEdit(page),
											className: "flex h-7 w-7 items-center justify-center rounded-lg border transition-colors hover:bg-white/5",
											style: { borderColor: "var(--admin-border)" },
											title: "Edit",
											children: /* @__PURE__ */ jsx(Pencil, {
												size: 13,
												style: { color: "var(--admin-accent)" }
											})
										}),
										/* @__PURE__ */ jsx("button", {
											onClick: () => onDelete(page),
											className: "flex h-7 w-7 items-center justify-center rounded-lg border transition-colors hover:bg-red-500/10",
											style: { borderColor: "var(--admin-border)" },
											title: "Delete",
											children: /* @__PURE__ */ jsx(Trash2, {
												size: 13,
												className: "text-red-400"
											})
										})
									]
								})
							})
						]
					}, page.id);
				}) })]
			})
		}), pages.last_page > 1 && /* @__PURE__ */ jsxs("div", {
			className: "flex items-center justify-between border-t px-4 py-3",
			style: {
				borderColor: "var(--admin-border)",
				backgroundColor: "var(--admin-card-subtle)"
			},
			children: [/* @__PURE__ */ jsxs("span", {
				className: "text-xs",
				style: { color: "var(--admin-text-muted)" },
				children: [
					"Showing ",
					pages.from,
					"–",
					pages.to,
					" of ",
					pages.total,
					" pages"
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "flex items-center gap-1",
				children: pages.links.map((link, i) => {
					if (link.label.includes("Previous")) return /* @__PURE__ */ jsx("button", {
						disabled: !link.url,
						onClick: () => link.url && router.get(link.url),
						className: "flex h-7 w-7 items-center justify-center rounded-lg border text-xs disabled:opacity-40",
						style: {
							borderColor: "var(--admin-border)",
							color: "var(--admin-text-muted)"
						},
						children: /* @__PURE__ */ jsx(ChevronLeft, { size: 13 })
					}, i);
					if (link.label.includes("Next")) return /* @__PURE__ */ jsx("button", {
						disabled: !link.url,
						onClick: () => link.url && router.get(link.url),
						className: "flex h-7 w-7 items-center justify-center rounded-lg border text-xs disabled:opacity-40",
						style: {
							borderColor: "var(--admin-border)",
							color: "var(--admin-text-muted)"
						},
						children: /* @__PURE__ */ jsx(ChevronRight, { size: 13 })
					}, i);
					return /* @__PURE__ */ jsx("button", {
						onClick: () => link.url && router.get(link.url),
						className: "flex h-7 min-w-[28px] items-center justify-center rounded-lg border px-1 text-xs transition-colors",
						style: {
							borderColor: link.active ? "var(--admin-accent)" : "var(--admin-border)",
							backgroundColor: link.active ? "var(--admin-accent)" : "transparent",
							color: link.active ? "#fff" : "var(--admin-text-muted)"
						},
						children: link.label
					}, i);
				})
			})]
		})]
	});
}
//#endregion
//#region resources/js/lib/api-fetch.ts
/**
* Lightweight fetch wrapper for admin API calls.
* Automatically attaches CSRF token and JSON headers.
*/
function getCsrfToken() {
	const meta = document.querySelector("meta[name=\"csrf-token\"]");
	if (meta) return meta.content;
	const match = document.cookie.match(/XSRF-TOKEN=([^;]+)/);
	if (match) return decodeURIComponent(match[1]);
	return "";
}
async function apiFetch(url, options = {}) {
	const { method = "POST", body, timeoutMs = 18e4 } = options;
	const controller = new AbortController();
	const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
	const headers = {
		"Content-Type": "application/json",
		Accept: "application/json",
		"X-CSRF-TOKEN": getCsrfToken(),
		"X-Requested-With": "XMLHttpRequest"
	};
	try {
		const res = await fetch(url, {
			method,
			headers,
			credentials: "same-origin",
			body: body ? JSON.stringify(body) : void 0,
			signal: controller.signal
		});
		clearTimeout(timeoutId);
		if (!res.ok) {
			const errData = await res.json().catch(() => ({}));
			return {
				success: false,
				error: errData?.message ?? `HTTP ${res.status}`,
				...errData
			};
		}
		return res.json();
	} catch (e) {
		clearTimeout(timeoutId);
		if (e.name === "AbortError") return {
			success: false,
			error: "Request timed out. Gemini API took too long to respond."
		};
		throw e;
	}
}
//#endregion
//#region resources/js/components/admin/seo-pages/SeoScorePanel.tsx
function calcScore(form, locationName) {
	const titleLen = form.meta_title.length;
	const descLen = form.meta_description.length;
	const h1HasLocation = locationName ? form.h1.toLowerCase().includes(locationName.toLowerCase()) : false;
	const descHasLocation = locationName ? form.meta_description.toLowerCase().includes(locationName.toLowerCase()) : false;
	const heroWords = form.hero_description.split(/\s+/).filter(Boolean).length;
	return [
		{
			label: "H1 Tag present",
			points: 15,
			earned: form.h1.trim() ? 15 : 0,
			tip: "Write a compelling H1 that includes your focus keyword"
		},
		{
			label: `Meta title length (${titleLen} chars)`,
			points: 15,
			earned: titleLen >= 50 && titleLen <= 60 ? 15 : titleLen >= 40 && titleLen <= 70 ? 8 : 0,
			tip: "Ideal meta title: 50–60 characters"
		},
		{
			label: `Meta description length (${descLen} chars)`,
			points: 20,
			earned: descLen >= 140 && descLen <= 160 ? 20 : descLen >= 120 && descLen <= 180 ? 10 : 0,
			tip: "Ideal meta description: 140–160 characters"
		},
		{
			label: "Location in H1",
			points: 15,
			earned: h1HasLocation ? 15 : 0,
			tip: `Include "${locationName || "location name"}" naturally in your H1`
		},
		{
			label: "Location in meta description",
			points: 10,
			earned: descHasLocation ? 10 : 0,
			tip: "Mention the location in your meta description"
		},
		{
			label: `Hero description (${heroWords} words)`,
			points: 10,
			earned: heroWords > 50 ? 10 : heroWords > 20 ? 5 : 0,
			tip: "Write at least 50 words for the hero description"
		},
		{
			label: "Content sections added",
			points: 15,
			earned: form.sections.length >= 2 ? 15 : form.sections.length === 1 ? 7 : 0,
			tip: "Add at least 2 content sections (Why Us, FAQ, Process, etc.)"
		}
	];
}
function getScoreColor(score) {
	if (score >= 80) return "#10b981";
	if (score >= 50) return "#f59e0b";
	return "#ef4444";
}
function getScoreLabel(score) {
	if (score >= 80) return "Excellent";
	if (score >= 60) return "Good";
	if (score >= 40) return "Needs Work";
	return "Poor";
}
function SeoScorePanel({ form, locationName = "" }) {
	const items = calcScore(form, locationName);
	const total = items.reduce((s, i) => s + i.earned, 0);
	const max = items.reduce((s, i) => s + i.points, 0);
	const color = getScoreColor(total);
	const circumference = 2 * Math.PI * 28;
	return /* @__PURE__ */ jsxs("div", {
		className: "sticky top-4 rounded-xl border p-4",
		style: {
			borderColor: "var(--admin-border)",
			backgroundColor: "var(--admin-card-bg)"
		},
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-4 mb-4",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "relative h-20 w-20 shrink-0",
				children: [/* @__PURE__ */ jsxs("svg", {
					className: "-rotate-90",
					viewBox: "0 0 64 64",
					fill: "none",
					children: [/* @__PURE__ */ jsx("circle", {
						cx: "32",
						cy: "32",
						r: "28",
						stroke: "rgba(255,255,255,0.06)",
						strokeWidth: "5"
					}), /* @__PURE__ */ jsx("circle", {
						cx: "32",
						cy: "32",
						r: "28",
						stroke: color,
						strokeWidth: "5",
						strokeDasharray: `${total / max * circumference} ${circumference}`,
						strokeLinecap: "round",
						style: { transition: "stroke-dasharray 0.5s ease" }
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "absolute inset-0 flex flex-col items-center justify-center",
					children: [/* @__PURE__ */ jsx("span", {
						className: "text-xl font-bold tabular-nums",
						style: { color },
						children: total
					}), /* @__PURE__ */ jsxs("span", {
						className: "text-xs",
						style: { color: "var(--admin-text-muted)" },
						children: ["/", max]
					})]
				})]
			}), /* @__PURE__ */ jsxs("div", { children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-1.5",
					children: [/* @__PURE__ */ jsx(TrendingUp, {
						size: 13,
						style: { color }
					}), /* @__PURE__ */ jsx("span", {
						className: "text-sm font-semibold",
						style: { color: "var(--admin-text-primary)" },
						children: "SEO Score"
					})]
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-0.5 text-base font-bold",
					style: { color },
					children: getScoreLabel(total)
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-xs",
					style: { color: "var(--admin-text-muted)" },
					children: "Updates live as you type"
				})
			] })]
		}), /* @__PURE__ */ jsx("div", {
			className: "space-y-2",
			children: items.map((item, i) => {
				const pct = item.points > 0 ? item.earned / item.points : 0;
				const itemColor = pct === 1 ? "#10b981" : pct > 0 ? "#f59e0b" : "#ef4444";
				return /* @__PURE__ */ jsxs("div", {
					className: "group relative",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-2",
						children: [
							pct === 1 ? /* @__PURE__ */ jsx(CheckCircle2, {
								size: 12,
								className: "shrink-0 text-emerald-400"
							}) : pct > 0 ? /* @__PURE__ */ jsx(AlertCircle, {
								size: 12,
								className: "shrink-0 text-amber-400"
							}) : /* @__PURE__ */ jsx(XCircle, {
								size: 12,
								className: "shrink-0 text-red-400/60"
							}),
							/* @__PURE__ */ jsx("span", {
								className: "flex-1 text-xs truncate",
								style: {
									color: "var(--admin-text-primary)",
									opacity: pct === 0 ? .55 : 1
								},
								children: item.label
							}),
							/* @__PURE__ */ jsxs("span", {
								className: "text-xs font-medium tabular-nums",
								style: { color: itemColor },
								children: [
									item.earned,
									"/",
									item.points
								]
							})
						]
					}), pct < 1 && /* @__PURE__ */ jsxs("div", {
						className: "pointer-events-none absolute left-0 -top-8 z-10 hidden w-48 rounded-md border px-2 py-1.5 text-xs shadow-lg group-hover:block",
						style: {
							backgroundColor: "var(--admin-card-subtle)",
							borderColor: "var(--admin-border)",
							color: "var(--admin-text-primary)"
						},
						children: ["💡 ", item.tip]
					})]
				}, i);
			})
		})]
	});
}
//#endregion
//#region resources/js/components/admin/seo-pages/SeoPageModal.tsx
var INPUT_STYLE = {
	backgroundColor: "var(--admin-input-bg)",
	borderColor: "var(--admin-border)",
	color: "var(--admin-text-primary)"
};
var LABEL_STYLE = { color: "var(--admin-text-muted)" };
function TabBtn({ active, children, onClick }) {
	return /* @__PURE__ */ jsx("button", {
		type: "button",
		onClick,
		className: "px-4 py-2 text-sm font-medium transition-colors border-b-2",
		style: {
			borderColor: active ? "var(--admin-accent)" : "transparent",
			color: active ? "var(--admin-accent)" : "var(--admin-text-muted)"
		},
		children
	});
}
function SectionEditor({ sections, onChange }) {
	const [openIdx, setOpenIdx] = useState(0);
	const addSection = () => {
		const newSection = {
			type: "custom",
			heading: "New Section",
			content: ""
		};
		const updated = [...sections, newSection];
		onChange(updated);
		setOpenIdx(updated.length - 1);
	};
	const removeSection = (idx) => {
		onChange(sections.filter((_, i) => i !== idx));
		setOpenIdx(null);
	};
	const updateSection = (idx, field, value) => {
		onChange(sections.map((s, i) => i === idx ? {
			...s,
			[field]: value
		} : s));
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-2",
		children: [sections.map((section, idx) => /* @__PURE__ */ jsxs("div", {
			className: "rounded-lg border overflow-hidden",
			style: { borderColor: "var(--admin-border)" },
			children: [/* @__PURE__ */ jsxs("button", {
				type: "button",
				onClick: () => setOpenIdx(openIdx === idx ? null : idx),
				className: "flex w-full items-center justify-between px-4 py-2.5 text-left transition-colors hover:bg-white/3",
				style: { backgroundColor: "var(--admin-card-subtle)" },
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ jsx("span", {
						className: "inline-block rounded px-1.5 py-0.5 text-[10px] font-medium uppercase",
						style: {
							backgroundColor: "rgba(99,102,241,0.15)",
							color: "#818cf8"
						},
						children: section.type
					}), /* @__PURE__ */ jsx("span", {
						className: "text-sm font-medium",
						style: { color: "var(--admin-text-primary)" },
						children: section.heading || "Untitled"
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-1.5",
					children: [/* @__PURE__ */ jsx("button", {
						type: "button",
						onClick: (e) => {
							e.stopPropagation();
							removeSection(idx);
						},
						className: "rounded p-1 hover:bg-red-500/15",
						children: /* @__PURE__ */ jsx(Trash2, {
							size: 12,
							className: "text-red-400"
						})
					}), openIdx === idx ? /* @__PURE__ */ jsx(ChevronUp, {
						size: 14,
						style: { color: "var(--admin-text-muted)" }
					}) : /* @__PURE__ */ jsx(ChevronDown, {
						size: 14,
						style: { color: "var(--admin-text-muted)" }
					})]
				})]
			}), openIdx === idx && /* @__PURE__ */ jsxs("div", {
				className: "p-4 space-y-3",
				style: { backgroundColor: "var(--admin-card-bg)" },
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "grid grid-cols-2 gap-3",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
							className: "mb-1 block text-xs",
							style: LABEL_STYLE,
							children: "Type"
						}), /* @__PURE__ */ jsxs("select", {
							value: section.type,
							onChange: (e) => updateSection(idx, "type", e.target.value),
							className: "w-full rounded-lg border px-3 py-1.5 text-sm outline-none",
							style: INPUT_STYLE,
							children: [
								/* @__PURE__ */ jsx("option", {
									value: "why_us",
									children: "Why Us"
								}),
								/* @__PURE__ */ jsx("option", {
									value: "local_context",
									children: "Local Context"
								}),
								/* @__PURE__ */ jsx("option", {
									value: "process",
									children: "Process Steps"
								}),
								/* @__PURE__ */ jsx("option", {
									value: "faq",
									children: "FAQ"
								}),
								/* @__PURE__ */ jsx("option", {
									value: "custom",
									children: "Custom"
								})
							]
						})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
							className: "mb-1 block text-xs",
							style: LABEL_STYLE,
							children: "Heading"
						}), /* @__PURE__ */ jsx("input", {
							type: "text",
							value: section.heading,
							onChange: (e) => updateSection(idx, "heading", e.target.value),
							className: "w-full rounded-lg border px-3 py-1.5 text-sm outline-none",
							style: INPUT_STYLE,
							placeholder: "Section heading..."
						})] })]
					}),
					(section.type === "local_context" || section.type === "custom") && /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
						className: "mb-1 block text-xs",
						style: LABEL_STYLE,
						children: "Content"
					}), /* @__PURE__ */ jsx("textarea", {
						value: section.content ?? "",
						onChange: (e) => updateSection(idx, "content", e.target.value),
						rows: 4,
						className: "w-full rounded-lg border px-3 py-2 text-sm outline-none resize-none",
						style: INPUT_STYLE,
						placeholder: "Section content..."
					})] }),
					section.type === "why_us" && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
						className: "mb-1 block text-xs",
						style: LABEL_STYLE,
						children: "Intro paragraph"
					}), /* @__PURE__ */ jsx("textarea", {
						value: section.content ?? "",
						onChange: (e) => updateSection(idx, "content", e.target.value),
						rows: 3,
						className: "w-full rounded-lg border px-3 py-2 text-sm outline-none resize-none",
						style: INPUT_STYLE
					})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
						className: "mb-1 block text-xs",
						style: LABEL_STYLE,
						children: "Bullet points (one per line)"
					}), /* @__PURE__ */ jsx("textarea", {
						value: (section.points ?? []).join("\n"),
						onChange: (e) => updateSection(idx, "points", e.target.value.split("\n")),
						rows: 4,
						className: "w-full rounded-lg border px-3 py-2 text-sm outline-none resize-none font-mono",
						style: INPUT_STYLE,
						placeholder: "Point 1\nPoint 2\nPoint 3"
					})] })] }),
					section.type === "process" && /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
						className: "mb-1 block text-xs",
						style: LABEL_STYLE,
						children: "Steps (JSON array or enter as Title: Description, one per line)"
					}), /* @__PURE__ */ jsx("textarea", {
						value: (section.steps ?? []).map((s) => `${s.title}: ${s.desc}`).join("\n"),
						onChange: (e) => {
							updateSection(idx, "steps", e.target.value.split("\n").map((line) => {
								const [title, ...rest] = line.split(":");
								return {
									title: title?.trim() ?? "",
									desc: rest.join(":").trim()
								};
							}).filter((s) => s.title));
						},
						rows: 4,
						className: "w-full rounded-lg border px-3 py-2 text-sm outline-none resize-none font-mono",
						style: INPUT_STYLE,
						placeholder: "Discovery: We analyze your requirements\nDesign: We create wireframes\nDevelopment: We build your solution"
					})] }),
					section.type === "faq" && /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
						className: "mb-1 block text-xs",
						style: LABEL_STYLE,
						children: "FAQ items (format: Q? :: Answer)"
					}), /* @__PURE__ */ jsx("textarea", {
						value: (section.items ?? []).map((item) => `${item.q} :: ${item.a}`).join("\n"),
						onChange: (e) => {
							updateSection(idx, "items", e.target.value.split("\n").map((line) => {
								const [q, ...rest] = line.split(" :: ");
								return {
									q: q?.trim() ?? "",
									a: rest.join(" :: ").trim()
								};
							}).filter((item) => item.q));
						},
						rows: 5,
						className: "w-full rounded-lg border px-3 py-2 text-sm outline-none resize-none font-mono",
						style: INPUT_STYLE,
						placeholder: "What is your cost? :: Starting from ₹50,000\nHow long does it take? :: 4-8 weeks"
					})] })
				]
			})]
		}, idx)), /* @__PURE__ */ jsxs("button", {
			type: "button",
			onClick: addSection,
			className: "flex w-full items-center justify-center gap-2 rounded-lg border border-dashed py-2.5 text-sm transition-colors hover:bg-white/3",
			style: {
				borderColor: "var(--admin-border)",
				color: "var(--admin-text-muted)"
			},
			children: [/* @__PURE__ */ jsx(Plus, { size: 14 }), "Add Section"]
		})]
	});
}
function SeoPageModal({ isOpen, mode, formData, services, locations, editingPage, onChange, onSubmit, onClose }) {
	const [tab, setTab] = useState("basic");
	const [aiLoading, setAiLoading] = useState(false);
	const [humanizeLoading, setHumanizeLoading] = useState(false);
	const [aiError, setAiError] = useState(null);
	const [aiSuccessMsg, setAiSuccessMsg] = useState(null);
	const [highlightMissing, setHighlightMissing] = useState(false);
	const selectedLocation = locations.find((l) => l.id === formData.location_id);
	const selectedService = services.find((s) => s.id === formData.service_id);
	useEffect(() => {
		if (selectedService && selectedLocation && !formData.focus_keyword) onChange("focus_keyword", `${selectedService.title} in ${selectedLocation.name}`);
	}, [formData.service_id, formData.location_id]);
	const calcLiveScore = useCallback(() => {
		let score = 0;
		const h1 = formData.h1;
		const titleLen = formData.meta_title.length;
		const descLen = formData.meta_description.length;
		const locName = selectedLocation?.name ?? "";
		if (h1.trim()) score += 15;
		if (titleLen >= 50 && titleLen <= 60) score += 15;
		else if (titleLen >= 40 && titleLen <= 70) score += 8;
		if (descLen >= 140 && descLen <= 160) score += 20;
		else if (descLen >= 120 && descLen <= 180) score += 10;
		if (locName && h1.toLowerCase().includes(locName.toLowerCase())) score += 15;
		if (locName && formData.meta_description.toLowerCase().includes(locName.toLowerCase())) score += 10;
		if (formData.hero_description.split(/\s+/).filter(Boolean).length > 50) score += 10;
		if (formData.sections.length >= 2) score += 15;
		else if (formData.sections.length === 1) score += 7;
		return Math.min(100, score);
	}, [formData, selectedLocation]);
	useEffect(() => {
		onChange("seo_score", calcLiveScore());
	}, [
		formData.h1,
		formData.meta_title,
		formData.meta_description,
		formData.hero_description,
		formData.sections,
		formData.location_id
	]);
	if (!isOpen || typeof document === "undefined") return null;
	const handleAiGenerate = async () => {
		if (!formData.service_id || !formData.location_id) {
			setHighlightMissing(true);
			setAiError("⚠️ Please select both a Service and a Location below before generating content.");
			setTab("basic");
			setTimeout(() => setHighlightMissing(false), 4e3);
			return;
		}
		setAiLoading(true);
		setAiError(null);
		setAiSuccessMsg(null);
		try {
			const res = await apiFetch("/z-admin/seo-pages/ai-generate", { body: {
				service_id: formData.service_id,
				location_id: formData.location_id,
				template: formData.template,
				focus_keyword: formData.focus_keyword
			} });
			if (res.success) {
				const d = res.data;
				if (d?.h1) onChange("h1", d.h1);
				if (d?.meta_title) onChange("meta_title", d.meta_title);
				if (d?.meta_description) onChange("meta_description", d.meta_description);
				if (d?.hero_description) onChange("hero_description", d.hero_description);
				if (d?.sections) onChange("sections", d.sections);
				setAiSuccessMsg(`✨ Content successfully generated for ${selectedLocation?.name ?? "selected location"}! Review the sections below.`);
				setTab("content");
			} else setAiError(res.error || res.message || "Generation failed. Please try again.");
		} catch (e) {
			setAiError(e?.message ?? "AI service connection error. Please try again.");
		} finally {
			setAiLoading(false);
		}
	};
	const handleHumanize = async () => {
		if (!formData.h1 && !formData.hero_description) {
			setAiError("⚠️ Please generate or write content first before humanizing.");
			return;
		}
		setHumanizeLoading(true);
		setAiError(null);
		setAiSuccessMsg(null);
		try {
			const res = await apiFetch("/z-admin/seo-pages/humanize", { body: { content: {
				h1: formData.h1,
				meta_title: formData.meta_title,
				meta_description: formData.meta_description,
				hero_description: formData.hero_description,
				sections: formData.sections
			} } });
			if (res.success) {
				const d = res.data;
				if (d?.h1) onChange("h1", d.h1);
				if (d?.meta_title) onChange("meta_title", d.meta_title);
				if (d?.meta_description) onChange("meta_description", d.meta_description);
				if (d?.hero_description) onChange("hero_description", d.hero_description);
				if (d?.sections) onChange("sections", d.sections);
				setAiSuccessMsg("🪄 Content successfully humanized! Bypassed AI patterns (applied high burstiness, natural sentence rhythm & scrubbed robotic buzzwords).");
			} else setAiError(res.error || res.message || "Humanization failed");
		} catch (e) {
			setAiError(e?.message ?? "Humanization connection error");
		} finally {
			setHumanizeLoading(false);
		}
	};
	return createPortal(/* @__PURE__ */ jsx("div", {
		className: "fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-md",
		style: { backgroundColor: "rgba(0,0,0,0.88)" },
		onClick: (e) => e.target === e.currentTarget && onClose(),
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex max-h-[94vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border shadow-2xl",
			style: {
				backgroundColor: "var(--admin-modal-bg, #0e0e15)",
				borderColor: "var(--admin-border)"
			},
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex shrink-0 items-center justify-between border-b px-6 py-4",
					style: {
						borderColor: "var(--admin-border)",
						backgroundColor: "var(--admin-card-subtle)"
					},
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ jsx("div", {
							className: "flex h-8 w-8 items-center justify-center rounded-lg",
							style: {
								backgroundColor: "rgba(99,102,241,0.15)",
								color: "#818cf8"
							},
							children: mode === "create" ? /* @__PURE__ */ jsx(Plus, { size: 16 }) : /* @__PURE__ */ jsx(Pencil, { size: 16 })
						}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
							className: "text-sm font-semibold",
							style: { color: "var(--admin-text-primary)" },
							children: mode === "create" ? "Create SEO Location Page" : "Edit SEO Location Page"
						}), editingPage && /* @__PURE__ */ jsxs("p", {
							className: "text-xs",
							style: { color: "var(--admin-text-muted)" },
							children: [
								editingPage.service?.title,
								" × ",
								editingPage.location?.name
							]
						})] })]
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-2",
						children: [
							selectedService && selectedLocation && /* @__PURE__ */ jsxs("a", {
								href: `/services/${selectedService.slug}/${selectedLocation.slug}`,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium text-slate-200 transition-colors hover:bg-white/10",
								style: { borderColor: "var(--admin-border)" },
								title: "Open this location page in a new tab",
								children: [/* @__PURE__ */ jsx(ExternalLink, {
									size: 13,
									className: "text-indigo-400"
								}), /* @__PURE__ */ jsx("span", { children: "Preview Page" })]
							}),
							/* @__PURE__ */ jsxs("button", {
								type: "button",
								onClick: handleAiGenerate,
								disabled: aiLoading,
								className: "flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs font-semibold shadow-sm transition-all hover:brightness-110 active:scale-95 disabled:opacity-50",
								style: {
									backgroundColor: "rgba(99,102,241,0.18)",
									color: "#a5b4fc",
									border: "1px solid rgba(99,102,241,0.35)"
								},
								title: "Auto-generate complete SEO page using Gemini AI",
								children: [aiLoading ? /* @__PURE__ */ jsx(Loader2, {
									size: 13,
									className: "animate-spin text-indigo-400"
								}) : /* @__PURE__ */ jsx(Sparkles, {
									size: 13,
									className: "text-indigo-400"
								}), aiLoading ? "Generating..." : "AI Generate"]
							}),
							/* @__PURE__ */ jsxs("button", {
								type: "button",
								onClick: handleHumanize,
								disabled: humanizeLoading,
								className: "flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs font-semibold shadow-sm transition-all hover:brightness-110 active:scale-95 disabled:opacity-50",
								style: {
									backgroundColor: "rgba(16,185,129,0.15)",
									color: "#6ee7b7",
									border: "1px solid rgba(16,185,129,0.3)"
								},
								title: "Bypass AI detectors (ZeroGPT, Copyleaks) by rewriting into authentic human copy",
								children: [humanizeLoading ? /* @__PURE__ */ jsx(Loader2, {
									size: 13,
									className: "animate-spin text-emerald-400"
								}) : /* @__PURE__ */ jsx(Wand2, {
									size: 13,
									className: "text-emerald-400"
								}), humanizeLoading ? "Humanizing..." : "Humanize (Anti-AI)"]
							}),
							/* @__PURE__ */ jsx("button", {
								onClick: onClose,
								className: "rounded-lg p-1.5 transition-colors hover:bg-white/5",
								children: /* @__PURE__ */ jsx(X, {
									size: 16,
									style: { color: "var(--admin-text-muted)" }
								})
							})
						]
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "flex shrink-0 border-b",
					style: {
						borderColor: "var(--admin-border)",
						backgroundColor: "var(--admin-card-subtle)"
					},
					children: [
						"basic",
						"content",
						"seo"
					].map((t) => /* @__PURE__ */ jsx(TabBtn, {
						active: tab === t,
						onClick: () => setTab(t),
						children: t === "basic" ? "📋 Basic Info" : t === "content" ? "✍️ Content Sections" : "🎯 SEO & Meta"
					}, t))
				}),
				/* @__PURE__ */ jsxs("form", {
					id: "seo-page-modal-form",
					onSubmit,
					className: "flex min-h-0 flex-1",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex-1 overflow-y-auto p-6",
						children: [
							aiLoading && /* @__PURE__ */ jsxs("div", {
								className: "mb-5 overflow-hidden rounded-xl border border-indigo-500/30 bg-gradient-to-r from-indigo-950/40 via-purple-950/30 to-indigo-950/40 p-4 shadow-lg backdrop-blur-sm animate-pulse",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ jsx("div", {
										className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-400",
										children: /* @__PURE__ */ jsx(Loader2, {
											size: 20,
											className: "animate-spin text-indigo-400"
										})
									}), /* @__PURE__ */ jsxs("div", {
										className: "flex-1",
										children: [/* @__PURE__ */ jsxs("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ jsx("h4", {
												className: "text-sm font-semibold text-indigo-200",
												children: "🤖 Gemini AI is writing location-specific content..."
											}), /* @__PURE__ */ jsx("span", {
												className: "text-[11px] font-medium text-indigo-300",
												children: "Connecting models..."
											})]
										}), /* @__PURE__ */ jsxs("p", {
											className: "mt-0.5 text-xs text-indigo-300/80",
											children: [
												"Drafting localized H1, meta tags, local business context, why us, and FAQs for ",
												/* @__PURE__ */ jsx("strong", { children: selectedLocation?.name ?? "location" }),
												"."
											]
										})]
									})]
								}), /* @__PURE__ */ jsx("div", {
									className: "mt-3 h-1.5 w-full overflow-hidden rounded-full bg-indigo-950/60",
									children: /* @__PURE__ */ jsx("div", { className: "h-full w-3/4 rounded-full bg-gradient-to-r from-indigo-500 via-purple-400 to-indigo-400 animate-[pulse_1s_infinite]" })
								})]
							}),
							humanizeLoading && /* @__PURE__ */ jsx("div", {
								className: "mb-5 overflow-hidden rounded-xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/40 via-teal-950/30 to-emerald-950/40 p-4 shadow-lg backdrop-blur-sm animate-pulse",
								children: /* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ jsx("div", {
										className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400",
										children: /* @__PURE__ */ jsx(Loader2, {
											size: 20,
											className: "animate-spin text-emerald-400"
										})
									}), /* @__PURE__ */ jsxs("div", {
										className: "flex-1",
										children: [/* @__PURE__ */ jsx("h4", {
											className: "text-sm font-semibold text-emerald-200",
											children: "🪄 Humanizing content..."
										}), /* @__PURE__ */ jsx("p", {
											className: "mt-0.5 text-xs text-emerald-300/80",
											children: "Eliminating robotic AI clichés and rewriting with warm, conversational Indian tone."
										})]
									})]
								})
							}),
							aiSuccessMsg && /* @__PURE__ */ jsxs("div", {
								className: "mb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3.5 text-xs text-emerald-300 shadow-sm",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2.5",
									children: [/* @__PURE__ */ jsx(Sparkles, {
										size: 16,
										className: "text-emerald-400 shrink-0"
									}), /* @__PURE__ */ jsx("span", { children: aiSuccessMsg })]
								}), /* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2 shrink-0",
									children: [/* @__PURE__ */ jsx("button", {
										type: "button",
										onClick: (e) => {
											onChange("status", "published");
											setTimeout(() => {
												const formEl = document.getElementById("seo-page-modal-form");
												if (formEl) formEl.requestSubmit();
												else onSubmit(e);
											}, 50);
										},
										className: "rounded-lg bg-emerald-500 px-3 py-1 text-xs font-semibold text-black transition-all hover:bg-emerald-400 shadow-sm",
										children: "Save & Publish Now"
									}), /* @__PURE__ */ jsx("button", {
										type: "button",
										onClick: () => setAiSuccessMsg(null),
										className: "rounded p-1 text-emerald-400 hover:bg-emerald-500/20",
										children: /* @__PURE__ */ jsx(X, { size: 13 })
									})]
								})]
							}),
							aiError && /* @__PURE__ */ jsxs("div", {
								className: "mb-5 flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 p-3.5 text-xs text-red-400",
								children: [
									/* @__PURE__ */ jsx(AlertTriangle, {
										size: 15,
										className: "shrink-0"
									}),
									/* @__PURE__ */ jsx("span", {
										className: "flex-1",
										children: aiError
									}),
									/* @__PURE__ */ jsx("button", {
										type: "button",
										onClick: () => setAiError(null),
										className: "ml-auto rounded p-1 hover:bg-red-500/20",
										children: /* @__PURE__ */ jsx(X, { size: 13 })
									})
								]
							}),
							tab === "basic" && /* @__PURE__ */ jsxs("div", {
								className: "space-y-4",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "grid grid-cols-2 gap-4",
										children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
											className: "mb-1.5 block text-xs font-medium",
											style: LABEL_STYLE,
											children: "Service *"
										}), /* @__PURE__ */ jsxs("select", {
											value: formData.service_id ?? "",
											onChange: (e) => onChange("service_id", Number(e.target.value) || null),
											disabled: mode === "edit",
											className: `w-full rounded-lg border px-3 py-2.5 text-sm outline-none transition-all disabled:opacity-60 ${highlightMissing && !formData.service_id ? "ring-2 ring-amber-500 border-amber-500" : ""}`,
											style: INPUT_STYLE,
											required: true,
											children: [/* @__PURE__ */ jsx("option", {
												value: "",
												children: "Select service..."
											}), services.map((s) => /* @__PURE__ */ jsx("option", {
												value: s.id,
												children: s.title
											}, s.id))]
										})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
											className: "mb-1.5 block text-xs font-medium",
											style: LABEL_STYLE,
											children: "Location *"
										}), /* @__PURE__ */ jsxs("select", {
											value: formData.location_id ?? "",
											onChange: (e) => onChange("location_id", Number(e.target.value) || null),
											disabled: mode === "edit",
											className: `w-full rounded-lg border px-3 py-2.5 text-sm outline-none transition-all disabled:opacity-60 ${highlightMissing && !formData.location_id ? "ring-2 ring-amber-500 border-amber-500" : ""}`,
											style: INPUT_STYLE,
											required: true,
											children: [/* @__PURE__ */ jsx("option", {
												value: "",
												children: "Select location..."
											}), locations.map((l) => /* @__PURE__ */ jsxs("option", {
												value: l.id,
												children: [
													l.name,
													" ",
													l.state ? `(${l.state})` : ""
												]
											}, l.id))]
										})] })]
									}),
									/* @__PURE__ */ jsx("div", {
										className: "rounded-xl border p-4 transition-all",
										style: {
											borderColor: formData.service_id && formData.location_id ? "rgba(99,102,241,0.35)" : "var(--admin-border)",
											background: formData.service_id && formData.location_id ? "linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(139,92,246,0.05) 100%)" : "var(--admin-card-subtle)"
										},
										children: /* @__PURE__ */ jsxs("div", {
											className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3",
											children: [/* @__PURE__ */ jsxs("div", {
												className: "flex items-start gap-3",
												children: [/* @__PURE__ */ jsx("div", {
													className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl",
													style: {
														backgroundColor: "rgba(99,102,241,0.18)",
														color: "#818cf8"
													},
													children: /* @__PURE__ */ jsx(Sparkles, { size: 18 })
												}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
													className: "text-xs font-bold",
													style: { color: "var(--admin-text-primary)" },
													children: "✨ Gemini AI Auto-Writer"
												}), /* @__PURE__ */ jsx("p", {
													className: "text-[11px] mt-0.5 leading-relaxed",
													style: { color: "var(--admin-text-muted)" },
													children: formData.service_id && formData.location_id ? /* @__PURE__ */ jsxs(Fragment$1, { children: [
														"Ready to write tailored SEO content for ",
														/* @__PURE__ */ jsx("strong", { children: selectedService?.title }),
														" in ",
														/* @__PURE__ */ jsx("strong", { children: selectedLocation?.name }),
														"."
													] }) : /* @__PURE__ */ jsxs(Fragment$1, { children: [
														"Select a ",
														/* @__PURE__ */ jsx("strong", { children: "Service" }),
														" and ",
														/* @__PURE__ */ jsx("strong", { children: "Location" }),
														" above, then click generate to auto-fill the whole page."
													] })
												})] })]
											}), /* @__PURE__ */ jsx("div", {
												className: "flex items-center gap-2 shrink-0",
												children: /* @__PURE__ */ jsxs("button", {
													type: "button",
													onClick: handleAiGenerate,
													disabled: aiLoading,
													className: "flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs font-semibold shadow-md transition-all hover:brightness-110 active:scale-95 disabled:opacity-50",
													style: {
														background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
														color: "#ffffff"
													},
													children: [aiLoading ? /* @__PURE__ */ jsx(Loader2, {
														size: 13,
														className: "animate-spin text-white"
													}) : /* @__PURE__ */ jsx(Sparkles, {
														size: 13,
														className: "text-white"
													}), aiLoading ? "Writing with AI..." : "⚡ Generate with Gemini AI"]
												})
											})]
										})
									}),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
										className: "mb-1.5 block text-xs font-medium",
										style: LABEL_STYLE,
										children: "Page Template"
									}), /* @__PURE__ */ jsx("div", {
										className: "grid grid-cols-2 gap-2 sm:grid-cols-4",
										children: Object.keys(TEMPLATE_META).map((t) => {
											const meta = TEMPLATE_META[t];
											const active = formData.template === t;
											return /* @__PURE__ */ jsxs("button", {
												type: "button",
												onClick: () => onChange("template", t),
												className: "flex flex-col items-center gap-1.5 rounded-xl border p-3 text-center transition-all duration-200",
												style: {
													borderColor: active ? meta.color : "var(--admin-border)",
													backgroundColor: active ? meta.color + "18" : "transparent",
													transform: active ? "scale(1.02)" : "scale(1)"
												},
												children: [
													/* @__PURE__ */ jsx("div", {
														className: "h-4 w-4 rounded-full",
														style: { backgroundColor: meta.color }
													}),
													/* @__PURE__ */ jsx("span", {
														className: "text-xs font-semibold",
														style: { color: active ? meta.color : "var(--admin-text-primary)" },
														children: meta.label
													}),
													/* @__PURE__ */ jsx("span", {
														className: "text-[10px] leading-tight",
														style: { color: "var(--admin-text-muted)" },
														children: meta.desc
													})
												]
											}, t);
										})
									})] }),
									/* @__PURE__ */ jsxs("div", {
										className: "grid grid-cols-2 gap-4",
										children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
											className: "mb-1.5 block text-xs font-medium",
											style: LABEL_STYLE,
											children: "Focus Keyword"
										}), /* @__PURE__ */ jsx("input", {
											type: "text",
											value: formData.focus_keyword,
											onChange: (e) => onChange("focus_keyword", e.target.value),
											className: "w-full rounded-lg border px-3 py-2.5 text-sm outline-none",
											style: INPUT_STYLE,
											placeholder: `e.g. ${selectedService?.title || "Service"} in ${selectedLocation?.name || "Location"}`
										})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
											className: "mb-1.5 block text-xs font-medium",
											style: LABEL_STYLE,
											children: "Status"
										}), /* @__PURE__ */ jsx("div", {
											className: "flex gap-2",
											children: ["draft", "published"].map((s) => /* @__PURE__ */ jsx("button", {
												type: "button",
												onClick: () => onChange("status", s),
												className: "flex-1 rounded-lg border py-2.5 text-sm font-medium capitalize transition-all",
												style: {
													borderColor: formData.status === s ? s === "published" ? "#10b981" : "#f59e0b" : "var(--admin-border)",
													backgroundColor: formData.status === s ? s === "published" ? "rgba(16,185,129,0.12)" : "rgba(245,158,11,0.12)" : "transparent",
													color: formData.status === s ? s === "published" ? "#10b981" : "#f59e0b" : "var(--admin-text-muted)"
												},
												children: s === "published" ? "🚀 Publish" : "📝 Draft"
											}, s))
										})] })]
									}),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
										className: "mb-1.5 block text-xs font-medium",
										style: LABEL_STYLE,
										children: "H1 Heading *"
									}), /* @__PURE__ */ jsx("input", {
										type: "text",
										value: formData.h1,
										onChange: (e) => onChange("h1", e.target.value),
										className: "w-full rounded-lg border px-3 py-2.5 text-sm outline-none",
										style: INPUT_STYLE,
										placeholder: "Best Web Development Company in Patna, Bihar"
									})] }),
									/* @__PURE__ */ jsxs("div", { children: [
										/* @__PURE__ */ jsx("label", {
											className: "mb-1.5 block text-xs font-medium",
											style: LABEL_STYLE,
											children: "Hero Description"
										}),
										/* @__PURE__ */ jsx("textarea", {
											value: formData.hero_description,
											onChange: (e) => onChange("hero_description", e.target.value),
											rows: 3,
											className: "w-full rounded-lg border px-3 py-2.5 text-sm outline-none resize-none",
											style: INPUT_STYLE,
											placeholder: "Write a compelling 2-3 sentence intro that connects the service to local businesses..."
										}),
										/* @__PURE__ */ jsxs("p", {
											className: "mt-1 text-xs",
											style: { color: "var(--admin-text-muted)" },
											children: [formData.hero_description.split(/\s+/).filter(Boolean).length, " words"]
										})
									] })
								]
							}),
							tab === "content" && /* @__PURE__ */ jsxs("div", {
								className: "space-y-4",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2 rounded-xl border p-3.5",
										style: {
											borderColor: "var(--admin-border)",
											backgroundColor: "var(--admin-card-subtle)"
										},
										children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("h3", {
											className: "text-xs font-semibold",
											style: { color: "var(--admin-text-primary)" },
											children: [
												"Page Content Sections (",
												formData.sections.length,
												")"
											]
										}), /* @__PURE__ */ jsx("p", {
											className: "text-[11px] mt-0.5",
											style: { color: "var(--admin-text-muted)" },
											children: "Drag, edit, or customize headings, paragraphs, bullet points, process steps, and FAQs."
										})] }), /* @__PURE__ */ jsxs("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ jsxs("button", {
												type: "button",
												onClick: handleAiGenerate,
												disabled: aiLoading,
												className: "flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-all hover:brightness-110 disabled:opacity-50",
												style: {
													backgroundColor: "rgba(99,102,241,0.18)",
													color: "#818cf8",
													border: "1px solid rgba(99,102,241,0.3)"
												},
												children: [aiLoading ? /* @__PURE__ */ jsx(Loader2, {
													size: 12,
													className: "animate-spin"
												}) : /* @__PURE__ */ jsx(Sparkles, { size: 12 }), aiLoading ? "Writing..." : "Re-generate with AI"]
											}), /* @__PURE__ */ jsxs("button", {
												type: "button",
												onClick: handleHumanize,
												disabled: humanizeLoading || formData.sections.length === 0,
												className: "flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-all hover:brightness-110 disabled:opacity-50",
												style: {
													backgroundColor: "rgba(16,185,129,0.15)",
													color: "#10b981",
													border: "1px solid rgba(16,185,129,0.3)"
												},
												title: "Rewrite all sections to bypass AI detectors",
												children: [humanizeLoading ? /* @__PURE__ */ jsx(Loader2, {
													size: 12,
													className: "animate-spin"
												}) : /* @__PURE__ */ jsx(Wand2, { size: 12 }), humanizeLoading ? "Humanizing..." : "Humanize (Anti-AI)"]
											})]
										})]
									}),
									formData.sections.length === 0 && /* @__PURE__ */ jsxs("div", {
										className: "flex flex-col items-center justify-center rounded-xl border border-dashed p-8 text-center",
										style: { borderColor: "var(--admin-border)" },
										children: [
											/* @__PURE__ */ jsx("div", {
												className: "flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400 mb-3",
												children: /* @__PURE__ */ jsx(Sparkles, { size: 24 })
											}),
											/* @__PURE__ */ jsx("h4", {
												className: "text-sm font-semibold",
												style: { color: "var(--admin-text-primary)" },
												children: "No Content Sections Yet"
											}),
											/* @__PURE__ */ jsxs("p", {
												className: "mt-1 max-w-md text-xs leading-relaxed",
												style: { color: "var(--admin-text-muted)" },
												children: [
													"Let Gemini AI write comprehensive, local-market sections for ",
													selectedLocation?.name || "this location",
													" automatically, or add custom sections manually."
												]
											}),
											/* @__PURE__ */ jsxs("button", {
												type: "button",
												onClick: handleAiGenerate,
												disabled: aiLoading,
												className: "mt-4 flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-semibold shadow-md transition-all hover:brightness-110 disabled:opacity-50",
												style: {
													background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
													color: "#fff"
												},
												children: [aiLoading ? /* @__PURE__ */ jsx(Loader2, {
													size: 14,
													className: "animate-spin"
												}) : /* @__PURE__ */ jsx(Sparkles, { size: 14 }), aiLoading ? "Generating content..." : "⚡ Generate Sections with Gemini AI"]
											})
										]
									}),
									/* @__PURE__ */ jsx(SectionEditor, {
										sections: formData.sections,
										onChange: (s) => onChange("sections", s)
									})
								]
							}),
							tab === "seo" && /* @__PURE__ */ jsxs("div", {
								className: "space-y-4",
								children: [
									/* @__PURE__ */ jsxs("div", { children: [
										/* @__PURE__ */ jsxs("div", {
											className: "mb-1.5 flex items-center justify-between",
											children: [/* @__PURE__ */ jsx("label", {
												className: "text-xs font-medium",
												style: LABEL_STYLE,
												children: "Meta Title"
											}), /* @__PURE__ */ jsxs("span", {
												className: "text-xs tabular-nums",
												style: { color: formData.meta_title.length >= 50 && formData.meta_title.length <= 60 ? "#10b981" : "var(--admin-text-muted)" },
												children: [formData.meta_title.length, "/60"]
											})]
										}),
										/* @__PURE__ */ jsx("input", {
											type: "text",
											value: formData.meta_title,
											onChange: (e) => onChange("meta_title", e.target.value),
											className: "w-full rounded-lg border px-3 py-2.5 text-sm outline-none",
											style: INPUT_STYLE,
											placeholder: "Best Web Development in Patna | Zytrixon Tech",
											maxLength: 80
										}),
										/* @__PURE__ */ jsx("div", {
											className: "mt-1.5 h-1 overflow-hidden rounded-full bg-white/5",
											children: /* @__PURE__ */ jsx("div", {
												className: "h-full rounded-full transition-all",
												style: {
													width: `${Math.min(100, formData.meta_title.length / 60 * 100)}%`,
													backgroundColor: formData.meta_title.length >= 50 && formData.meta_title.length <= 60 ? "#10b981" : formData.meta_title.length > 60 ? "#ef4444" : "#f59e0b"
												}
											})
										})
									] }),
									/* @__PURE__ */ jsxs("div", { children: [
										/* @__PURE__ */ jsxs("div", {
											className: "mb-1.5 flex items-center justify-between",
											children: [/* @__PURE__ */ jsx("label", {
												className: "text-xs font-medium",
												style: LABEL_STYLE,
												children: "Meta Description"
											}), /* @__PURE__ */ jsxs("span", {
												className: "text-xs tabular-nums",
												style: { color: formData.meta_description.length >= 140 && formData.meta_description.length <= 160 ? "#10b981" : "var(--admin-text-muted)" },
												children: [formData.meta_description.length, "/160"]
											})]
										}),
										/* @__PURE__ */ jsx("textarea", {
											value: formData.meta_description,
											onChange: (e) => onChange("meta_description", e.target.value),
											rows: 3,
											className: "w-full rounded-lg border px-3 py-2.5 text-sm outline-none resize-none",
											style: INPUT_STYLE,
											placeholder: "Zytrixon Tech offers premium web development services in Patna, Bihar. Custom websites, apps & digital solutions for local businesses...",
											maxLength: 200
										}),
										/* @__PURE__ */ jsx("div", {
											className: "mt-1.5 h-1 overflow-hidden rounded-full bg-white/5",
											children: /* @__PURE__ */ jsx("div", {
												className: "h-full rounded-full transition-all",
												style: {
													width: `${Math.min(100, formData.meta_description.length / 160 * 100)}%`,
													backgroundColor: formData.meta_description.length >= 140 && formData.meta_description.length <= 160 ? "#10b981" : formData.meta_description.length > 160 ? "#ef4444" : "#f59e0b"
												}
											})
										})
									] }),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
										className: "mb-2 block text-xs font-medium",
										style: LABEL_STYLE,
										children: "SERP Preview"
									}), /* @__PURE__ */ jsxs("div", {
										className: "rounded-xl border p-4",
										style: {
											borderColor: "var(--admin-border)",
											backgroundColor: "var(--admin-card-bg)"
										},
										children: [
											/* @__PURE__ */ jsxs("div", {
												className: "text-xs text-emerald-500",
												children: [
													"zytrixontech.com › services › ",
													selectedService?.slug ?? "service",
													" › ",
													selectedLocation?.slug ?? "location"
												]
											}),
											/* @__PURE__ */ jsx("div", {
												className: "mt-0.5 text-base font-medium text-blue-400 underline",
												children: formData.meta_title || "Your meta title will appear here"
											}),
											/* @__PURE__ */ jsx("div", {
												className: "mt-1 text-xs leading-relaxed",
												style: { color: "var(--admin-text-muted)" },
												children: formData.meta_description || "Your meta description will appear here. It should summarize the page in 140-160 characters."
											})
										]
									})] })
								]
							})
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "w-64 shrink-0 overflow-y-auto border-l p-4",
						style: {
							borderColor: "var(--admin-border)",
							backgroundColor: "var(--admin-card-subtle)"
						},
						children: /* @__PURE__ */ jsx(SeoScorePanel, {
							form: formData,
							locationName: selectedLocation?.name
						})
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex shrink-0 items-center justify-between border-t px-6 py-4",
					style: {
						borderColor: "var(--admin-border)",
						backgroundColor: "var(--admin-card-subtle)"
					},
					children: [/* @__PURE__ */ jsxs("div", {
						className: "text-xs",
						style: { color: "var(--admin-text-muted)" },
						children: ["SEO Score: ", /* @__PURE__ */ jsxs("strong", {
							style: { color: formData.seo_score >= 80 ? "#10b981" : formData.seo_score >= 50 ? "#f59e0b" : "#ef4444" },
							children: [formData.seo_score, "/100"]
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ jsx("button", {
								type: "button",
								onClick: onClose,
								className: "rounded-lg border px-4 py-2 text-sm transition-colors hover:bg-white/5",
								style: {
									borderColor: "var(--admin-border)",
									color: "var(--admin-text-primary)"
								},
								children: "Cancel"
							}),
							/* @__PURE__ */ jsxs("button", {
								type: "button",
								onClick: (e) => {
									onChange("status", "published");
									setTimeout(() => {
										const formEl = document.getElementById("seo-page-modal-form");
										if (formEl) formEl.requestSubmit();
										else onSubmit(e);
									}, 50);
								},
								className: "flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-semibold transition-all hover:brightness-110 active:scale-95 shadow-sm",
								style: {
									backgroundColor: "rgba(16,185,129,0.2)",
									color: "#34d399",
									border: "1px solid rgba(16,185,129,0.35)"
								},
								children: [/* @__PURE__ */ jsx(Sparkles, {
									size: 14,
									className: "text-emerald-400"
								}), /* @__PURE__ */ jsx("span", { children: "Save & Publish" })]
							}),
							/* @__PURE__ */ jsxs("button", {
								type: "submit",
								form: "seo-page-modal-form",
								className: "flex items-center gap-2 rounded-lg px-5 py-2 text-sm font-medium transition-all hover:opacity-90 shadow-sm",
								style: {
									backgroundColor: "var(--admin-accent)",
									color: "#fff"
								},
								children: [/* @__PURE__ */ jsx(Save, { size: 14 }), mode === "create" ? "Create Page" : "Save Changes"]
							})
						]
					})]
				})
			]
		})
	}), document.body);
}
//#endregion
//#region resources/js/components/admin/seo-pages/BulkGenerateModal.tsx
function BulkGenerateModal({ isOpen, services, locations, onClose, onSuccess }) {
	const [serviceId, setServiceId] = useState(null);
	const [selectedLocIds, setSelectedLocIds] = useState([]);
	const [template, setTemplate] = useState("grid");
	const [loading, setLoading] = useState(false);
	const [statusMsg, setStatusMsg] = useState("");
	const [result, setResult] = useState(null);
	if (!isOpen || typeof document === "undefined") return null;
	const toggleLoc = (id) => {
		setSelectedLocIds((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);
	};
	const selectAll = () => setSelectedLocIds(locations.map((l) => l.id));
	const clearAll = () => setSelectedLocIds([]);
	const [validationError, setValidationError] = useState(null);
	const handleGenerate = async () => {
		setValidationError(null);
		if (!serviceId) {
			setValidationError("⚠️ Please select a Service from the dropdown above.");
			return;
		}
		if (selectedLocIds.length === 0) {
			setValidationError("⚠️ Please select at least one Location below.");
			return;
		}
		setLoading(true);
		setResult(null);
		setStatusMsg(`🤖 Generating ${selectedLocIds.length} SEO location page(s) via Gemini AI... Each page takes ~5–8 seconds.`);
		try {
			const res = await apiFetch("/z-admin/seo-pages/bulk-generate", { body: {
				service_id: serviceId,
				location_ids: selectedLocIds,
				template
			} });
			setStatusMsg("");
			const created = res.created ?? 0;
			setResult({
				created,
				errors: res.errors ?? []
			});
			if (created > 0) setTimeout(() => {
				onSuccess();
				onClose();
			}, 2500);
		} catch (e) {
			setStatusMsg("");
			setResult({
				created: 0,
				errors: [e?.message ?? "Network error — please check connection"]
			});
		} finally {
			setLoading(false);
		}
	};
	return createPortal(/* @__PURE__ */ jsx("div", {
		className: "fixed inset-0 z-[110] flex items-center justify-center p-4 backdrop-blur-md",
		style: { backgroundColor: "rgba(0,0,0,0.85)" },
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border shadow-2xl",
			style: {
				backgroundColor: "var(--admin-modal-bg, #0e0e15)",
				borderColor: "var(--admin-border)"
			},
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-between border-b px-6 py-4",
					style: {
						borderColor: "var(--admin-border)",
						backgroundColor: "var(--admin-card-subtle)"
					},
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-2.5",
						children: [/* @__PURE__ */ jsx("div", {
							className: "flex h-8 w-8 items-center justify-center rounded-lg",
							style: {
								backgroundColor: "rgba(99,102,241,0.15)",
								color: "#818cf8"
							},
							children: /* @__PURE__ */ jsx(Zap, { size: 16 })
						}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
							className: "text-sm font-semibold",
							style: { color: "var(--admin-text-primary)" },
							children: "Bulk AI Generate"
						}), /* @__PURE__ */ jsx("p", {
							className: "text-xs",
							style: { color: "var(--admin-text-muted)" },
							children: "Generate multiple location pages with one click"
						})] })]
					}), /* @__PURE__ */ jsx("button", {
						onClick: onClose,
						className: "rounded-lg p-1.5 transition-colors hover:bg-white/5",
						children: /* @__PURE__ */ jsx(X, {
							size: 16,
							style: { color: "var(--admin-text-muted)" }
						})
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex-1 overflow-y-auto p-6 space-y-5",
					children: [
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
							className: "mb-1.5 block text-xs font-medium",
							style: { color: "var(--admin-text-muted)" },
							children: "Service *"
						}), /* @__PURE__ */ jsxs("select", {
							value: serviceId ?? "",
							onChange: (e) => setServiceId(Number(e.target.value) || null),
							className: "w-full rounded-lg border px-3 py-2.5 text-sm outline-none",
							style: {
								backgroundColor: "var(--admin-input-bg)",
								borderColor: "var(--admin-border)",
								color: "var(--admin-text-primary)"
							},
							children: [/* @__PURE__ */ jsx("option", {
								value: "",
								children: "Select a service..."
							}), services.map((s) => /* @__PURE__ */ jsx("option", {
								value: s.id,
								children: s.title
							}, s.id))]
						})] }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
							className: "mb-1.5 block text-xs font-medium",
							style: { color: "var(--admin-text-muted)" },
							children: "Template Layout"
						}), /* @__PURE__ */ jsx("div", {
							className: "grid grid-cols-2 gap-2",
							children: Object.keys(TEMPLATE_META).map((t) => {
								const meta = TEMPLATE_META[t];
								return /* @__PURE__ */ jsxs("button", {
									type: "button",
									onClick: () => setTemplate(t),
									className: "flex items-start gap-2 rounded-lg border p-3 text-left transition-all",
									style: {
										borderColor: template === t ? meta.color : "var(--admin-border)",
										backgroundColor: template === t ? meta.color + "15" : "transparent"
									},
									children: [/* @__PURE__ */ jsx("div", {
										className: "mt-0.5 h-3 w-3 shrink-0 rounded-full",
										style: { backgroundColor: meta.color }
									}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
										className: "text-xs font-semibold",
										style: { color: "var(--admin-text-primary)" },
										children: meta.label
									}), /* @__PURE__ */ jsx("div", {
										className: "text-xs",
										style: { color: "var(--admin-text-muted)" },
										children: meta.desc
									})] })]
								}, t);
							})
						})] }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
							className: "mb-1.5 flex items-center justify-between",
							children: [/* @__PURE__ */ jsxs("label", {
								className: "text-xs font-medium",
								style: { color: "var(--admin-text-muted)" },
								children: [
									"Locations * (",
									selectedLocIds.length,
									" selected)"
								]
							}), /* @__PURE__ */ jsxs("div", {
								className: "flex gap-2",
								children: [
									/* @__PURE__ */ jsx("button", {
										type: "button",
										onClick: selectAll,
										className: "text-xs",
										style: { color: "var(--admin-accent)" },
										children: "Select All"
									}),
									/* @__PURE__ */ jsx("span", {
										style: { color: "var(--admin-text-muted)" },
										children: "·"
									}),
									/* @__PURE__ */ jsx("button", {
										type: "button",
										onClick: clearAll,
										className: "text-xs",
										style: { color: "var(--admin-text-muted)" },
										children: "Clear"
									})
								]
							})]
						}), /* @__PURE__ */ jsx("div", {
							className: "max-h-48 overflow-y-auto rounded-lg border p-2",
							style: {
								borderColor: "var(--admin-border)",
								backgroundColor: "var(--admin-input-bg)"
							},
							children: /* @__PURE__ */ jsx("div", {
								className: "grid grid-cols-2 gap-1",
								children: locations.map((loc) => {
									const selected = selectedLocIds.includes(loc.id);
									return /* @__PURE__ */ jsxs("button", {
										type: "button",
										onClick: () => toggleLoc(loc.id),
										className: "flex items-center gap-2 rounded-md px-2 py-1.5 text-left text-xs transition-colors",
										style: {
											backgroundColor: selected ? "rgba(99,102,241,0.15)" : "transparent",
											color: selected ? "#818cf8" : "var(--admin-text-primary)"
										},
										children: [
											/* @__PURE__ */ jsx("div", {
												className: "h-3 w-3 shrink-0 rounded-sm border flex items-center justify-center",
												style: {
													borderColor: selected ? "#818cf8" : "var(--admin-border)",
													backgroundColor: selected ? "#818cf8" : "transparent"
												},
												children: selected && /* @__PURE__ */ jsx(CheckCheck, {
													size: 8,
													className: "text-white"
												})
											}),
											/* @__PURE__ */ jsx("span", {
												className: "truncate",
												children: loc.name
											}),
											loc.state && /* @__PURE__ */ jsxs("span", {
												className: "shrink-0 opacity-50",
												children: [
													"(",
													loc.state?.slice(0, 3),
													")"
												]
											})
										]
									}, loc.id);
								})
							})
						})] }),
						validationError && /* @__PURE__ */ jsxs("div", {
							className: "rounded-xl border p-3.5 flex items-center gap-2.5 text-xs font-medium text-amber-300",
							style: {
								borderColor: "rgba(245,158,11,0.3)",
								backgroundColor: "rgba(245,158,11,0.1)"
							},
							children: [
								/* @__PURE__ */ jsx(AlertTriangle, {
									size: 15,
									className: "shrink-0 text-amber-400"
								}),
								/* @__PURE__ */ jsx("span", { children: validationError }),
								/* @__PURE__ */ jsx("button", {
									type: "button",
									onClick: () => setValidationError(null),
									className: "ml-auto rounded p-1 hover:bg-amber-500/20",
									children: /* @__PURE__ */ jsx(X, { size: 13 })
								})
							]
						}),
						loading && statusMsg && /* @__PURE__ */ jsxs("div", {
							className: "rounded-xl border p-4 flex items-start gap-3 animate-pulse",
							style: {
								borderColor: "rgba(99,102,241,0.35)",
								backgroundColor: "rgba(99,102,241,0.1)"
							},
							children: [/* @__PURE__ */ jsx(Loader2, {
								size: 18,
								className: "animate-spin mt-0.5 shrink-0 text-indigo-400"
							}), /* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsx("p", {
									className: "text-sm font-semibold text-indigo-200",
									children: "🤖 Gemini AI is writing pages..."
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-xs mt-1 text-indigo-300/80",
									children: statusMsg
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-[11px] mt-1.5 text-indigo-300/60",
									children: "☕ Creating location-specific H1, metadata, Why Us, and FAQs for each city. Please do not close this window."
								})
							] })]
						}),
						result && /* @__PURE__ */ jsxs("div", {
							className: "rounded-xl border p-4",
							style: {
								borderColor: result.created > 0 ? "rgba(16,185,129,0.3)" : "rgba(239,68,68,0.3)",
								backgroundColor: result.created > 0 ? "rgba(16,185,129,0.1)" : "rgba(239,68,68,0.1)"
							},
							children: [/* @__PURE__ */ jsx("div", {
								className: "flex items-center gap-2 text-sm font-semibold",
								children: result.created > 0 ? /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(CheckCheck, {
									size: 16,
									className: "text-emerald-400"
								}), /* @__PURE__ */ jsxs("span", {
									className: "text-emerald-400",
									children: [result.created, " SEO location pages generated successfully!"]
								})] }) : /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(AlertTriangle, {
									size: 16,
									className: "text-red-400"
								}), /* @__PURE__ */ jsx("span", {
									className: "text-red-400",
									children: "Bulk generation encountered issues"
								})] })
							}), result.errors.length > 0 && /* @__PURE__ */ jsx("ul", {
								className: "mt-2 space-y-1 text-xs text-red-300/90 pl-2",
								children: result.errors.map((e, i) => /* @__PURE__ */ jsxs("li", { children: ["• ", e] }, i))
							})]
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-between border-t px-6 py-4",
					style: {
						borderColor: "var(--admin-border)",
						backgroundColor: "var(--admin-card-subtle)"
					},
					children: [/* @__PURE__ */ jsx("div", {
						className: "text-xs",
						style: { color: "var(--admin-text-muted)" },
						children: "⚠️ Max 20 locations per batch to preserve API limits"
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ jsx("button", {
							type: "button",
							onClick: onClose,
							className: "rounded-lg border px-4 py-2 text-sm transition-colors hover:bg-white/5",
							style: {
								borderColor: "var(--admin-border)",
								color: "var(--admin-text-primary)"
							},
							children: "Cancel"
						}), /* @__PURE__ */ jsx("button", {
							type: "button",
							onClick: handleGenerate,
							disabled: loading,
							className: "flex items-center gap-2 rounded-lg px-5 py-2 text-sm font-medium transition-all hover:brightness-110 active:scale-95 disabled:opacity-50",
							style: {
								background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
								color: "#fff"
							},
							children: loading ? /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(Loader2, {
								size: 14,
								className: "animate-spin"
							}), "Generating... please wait"] }) : /* @__PURE__ */ jsxs(Fragment$1, { children: [
								/* @__PURE__ */ jsx(Zap, { size: 14 }),
								"Generate ",
								selectedLocIds.length > 0 ? `${selectedLocIds.length} Pages` : "Pages"
							] })
						})]
					})]
				})
			]
		})
	}), document.body);
}
//#endregion
//#region resources/js/pages/Admin/SeoPages.tsx
function SeoPages({ pages, kpis, filters, services, locations }) {
	const [search, setSearch] = useState(filters.search || "");
	const [selectedIds, setSelectedIds] = useState([]);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalMode, setModalMode] = useState("create");
	const [editingPage, setEditingPage] = useState(null);
	const [form, setForm] = useState(EMPTY_SEO_FORM);
	const [isBulkOpen, setIsBulkOpen] = useState(false);
	const [deleteTarget, setDeleteTarget] = useState(null);
	const [bulkDelLoading, setBulkDelLoading] = useState(false);
	const handleFilterSubmit = (e) => {
		e?.preventDefault();
		router.get("/z-admin/seo-pages", {
			search: search || void 0,
			service: filters.service !== "all" ? filters.service : void 0,
			status: filters.status !== "all" ? filters.status : void 0,
			template: filters.template !== "all" ? filters.template : void 0
		}, {
			preserveState: true,
			replace: true
		});
	};
	const handleSelectAll = (ids) => setSelectedIds(ids);
	const handleToggleSelect = (id) => {
		setSelectedIds((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);
	};
	const openCreate = () => {
		setForm(EMPTY_SEO_FORM);
		setEditingPage(null);
		setModalMode("create");
		setIsModalOpen(true);
	};
	const openEdit = (page) => {
		setForm({
			service_id: page.service_id,
			location_id: page.location_id,
			template: page.template,
			status: page.status,
			h1: page.h1 ?? "",
			meta_title: page.meta_title ?? "",
			meta_description: page.meta_description ?? "",
			hero_description: page.hero_description ?? "",
			focus_keyword: page.focus_keyword ?? "",
			sections: page.sections ?? [],
			seo_score: page.seo_score
		});
		setEditingPage(page);
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
		if (!form.service_id || !form.location_id) {
			alert("⚠️ Please select both a Service and a Location before saving.");
			return;
		}
		if (modalMode === "create") router.post("/z-admin/seo-pages", form, {
			onSuccess: () => {
				setIsModalOpen(false);
			},
			onError: (errs) => {
				alert("Save failed: " + Object.values(errs).join(", "));
			}
		});
		else if (editingPage) router.put(`/z-admin/seo-pages/${editingPage.id}`, form, {
			onSuccess: () => {
				setIsModalOpen(false);
			},
			onError: (errs) => {
				alert("Update failed: " + Object.values(errs).join(", "));
			}
		});
	};
	const handleDelete = (page) => setDeleteTarget(page);
	const confirmDelete = () => {
		if (!deleteTarget) return;
		router.delete(`/z-admin/seo-pages/${deleteTarget.id}`, { onFinish: () => setDeleteTarget(null) });
	};
	const handleBulkDelete = () => {
		if (selectedIds.length === 0) return;
		setBulkDelLoading(true);
		router.post("/z-admin/seo-pages/bulk-delete", { ids: selectedIds }, {
			onSuccess: () => {
				setSelectedIds([]);
				setBulkDelLoading(false);
			},
			onError: () => setBulkDelLoading(false)
		});
	};
	return /* @__PURE__ */ jsxs(AdminLayout, {
		title: "SEO Location Pages",
		children: [
			/* @__PURE__ */ jsx(Head, { title: "SEO Location Pages | Admin" }),
			/* @__PURE__ */ jsxs("div", {
				className: "space-y-5 p-6",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ jsx("div", {
								className: "flex h-9 w-9 items-center justify-center rounded-xl",
								style: {
									backgroundColor: "rgba(99,102,241,0.15)",
									color: "#818cf8"
								},
								children: /* @__PURE__ */ jsx(MapPin, { size: 18 })
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h1", {
								className: "text-lg font-bold",
								style: { color: "var(--admin-text-primary)" },
								children: "SEO Location Pages"
							}), /* @__PURE__ */ jsxs("p", {
								className: "text-xs",
								style: { color: "var(--admin-text-muted)" },
								children: [
									"AI-powered programmatic SEO · ",
									kpis.total,
									" pages · ",
									kpis.published,
									" live"
								]
							})] })]
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex gap-2",
							children: [
								selectedIds.length > 0 && /* @__PURE__ */ jsxs("button", {
									onClick: handleBulkDelete,
									disabled: bulkDelLoading,
									className: "flex items-center gap-1.5 rounded-lg border px-3 py-2 text-xs font-medium transition-colors hover:bg-red-500/10 disabled:opacity-40",
									style: {
										borderColor: "rgba(239,68,68,0.3)",
										color: "#f87171"
									},
									children: [
										/* @__PURE__ */ jsx(Trash2, { size: 12 }),
										"Delete ",
										selectedIds.length
									]
								}),
								/* @__PURE__ */ jsxs("button", {
									onClick: () => setIsBulkOpen(true),
									className: "flex items-center gap-1.5 rounded-lg border px-3 py-2 text-xs font-medium transition-colors hover:bg-white/5",
									style: {
										borderColor: "var(--admin-border)",
										color: "#818cf8"
									},
									children: [/* @__PURE__ */ jsx(Zap, { size: 12 }), "Bulk AI Generate"]
								}),
								/* @__PURE__ */ jsxs("button", {
									onClick: openCreate,
									className: "flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs font-medium transition-opacity hover:opacity-90",
									style: {
										backgroundColor: "var(--admin-accent)",
										color: "#fff"
									},
									children: [/* @__PURE__ */ jsx(Plus, { size: 14 }), "New Page"]
								})
							]
						})]
					}),
					/* @__PURE__ */ jsx(SeoPageStatsCards, { kpis }),
					/* @__PURE__ */ jsx(SeoPageFilterBar, {
						filters,
						services,
						search,
						onSearchChange: setSearch,
						onServiceChange: (v) => router.get("/z-admin/seo-pages", {
							...filters,
							service: v
						}, { replace: true }),
						onStatusChange: (v) => router.get("/z-admin/seo-pages", {
							...filters,
							status: v
						}, { replace: true }),
						onTemplateChange: (v) => router.get("/z-admin/seo-pages", {
							...filters,
							template: v
						}, { replace: true }),
						onSubmit: handleFilterSubmit
					}),
					/* @__PURE__ */ jsx(SeoPageTable, {
						pages,
						selectedIds,
						onSelectAll: handleSelectAll,
						onToggleSelect: handleToggleSelect,
						onEdit: openEdit,
						onDelete: handleDelete
					})
				]
			}),
			/* @__PURE__ */ jsx(SeoPageModal, {
				isOpen: isModalOpen,
				mode: modalMode,
				formData: form,
				services,
				locations,
				editingPage,
				onChange: handleFormChange,
				onSubmit: handleSubmit,
				onClose: () => setIsModalOpen(false)
			}),
			/* @__PURE__ */ jsx(BulkGenerateModal, {
				isOpen: isBulkOpen,
				services,
				locations,
				onClose: () => setIsBulkOpen(false),
				onSuccess: () => router.reload()
			}),
			deleteTarget && /* @__PURE__ */ jsx("div", {
				className: "fixed inset-0 z-[200] flex items-center justify-center p-4 backdrop-blur-sm",
				style: { backgroundColor: "rgba(0,0,0,0.75)" },
				children: /* @__PURE__ */ jsxs("div", {
					className: "w-full max-w-sm rounded-2xl border p-6 shadow-2xl",
					style: {
						backgroundColor: "var(--admin-modal-bg)",
						borderColor: "var(--admin-border)"
					},
					children: [
						/* @__PURE__ */ jsx("h3", {
							className: "text-base font-semibold",
							style: { color: "var(--admin-text-primary)" },
							children: "Delete SEO Page?"
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "mt-1.5 text-sm",
							style: { color: "var(--admin-text-muted)" },
							children: [
								"This will permanently delete the ",
								/* @__PURE__ */ jsx("strong", { children: deleteTarget.service?.title }),
								" page for ",
								/* @__PURE__ */ jsx("strong", { children: deleteTarget.location?.name }),
								". This cannot be undone."
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-5 flex gap-2",
							children: [/* @__PURE__ */ jsx("button", {
								onClick: () => setDeleteTarget(null),
								className: "flex-1 rounded-lg border py-2 text-sm transition-colors hover:bg-white/5",
								style: {
									borderColor: "var(--admin-border)",
									color: "var(--admin-text-primary)"
								},
								children: "Cancel"
							}), /* @__PURE__ */ jsx("button", {
								onClick: confirmDelete,
								className: "flex-1 rounded-lg bg-red-500 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90",
								children: "Delete"
							})]
						})
					]
				})
			})
		]
	});
}
//#endregion
export { SeoPages as default };

//# sourceMappingURL=SeoPages-is9QBclY.js.map