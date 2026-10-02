import { t as AdminLayout } from "./AdminLayout-TYYnUASU.js";
import { t as AdminStatCard } from "./AdminStatCard-TlKRlqbk.js";
import { Head, Link, usePage } from "@inertiajs/react";
import "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, ArrowUpRight, Briefcase, CheckCircle2, Clock3, Database, FolderKanban, Mail, MapPin, ShieldCheck, Terminal, Users } from "lucide-react";
//#region resources/js/pages/Admin/Dashboard.tsx
function Dashboard({ stats, recentUsers, recentEnquiries = [] }) {
	const { auth } = usePage().props;
	const user = auth?.user;
	const getStatusBadge = (status) => {
		switch (status) {
			case "new": return /* @__PURE__ */ jsxs("span", {
				className: "inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2 py-0.5 font-mono text-[10px] font-semibold text-emerald-500",
				children: [/* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" }), "NEW"]
			});
			case "contacted": return /* @__PURE__ */ jsxs("span", {
				className: "inline-flex items-center gap-1 rounded-full border border-blue-500/30 bg-blue-500/15 px-2 py-0.5 font-mono text-[10px] font-semibold text-blue-500",
				children: [/* @__PURE__ */ jsx(Clock3, { className: "h-2.5 w-2.5" }), "CONTACTED"]
			});
			case "in_progress": return /* @__PURE__ */ jsx("span", {
				className: "inline-flex items-center gap-1 rounded-full border border-amber-500/30 bg-amber-500/15 px-2 py-0.5 font-mono text-[10px] font-semibold text-amber-500",
				children: "IN PROGRESS"
			});
			case "resolved": return /* @__PURE__ */ jsxs("span", {
				className: "inline-flex items-center gap-1 rounded-full border border-purple-500/30 bg-purple-500/15 px-2 py-0.5 font-mono text-[10px] font-semibold text-purple-500",
				children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "h-2.5 w-2.5" }), "RESOLVED"]
			});
			default: return /* @__PURE__ */ jsx("span", {
				className: "inline-flex items-center gap-1 rounded-full border px-2 py-0.5 font-mono text-[10px] font-semibold uppercase",
				style: {
					borderColor: "var(--admin-border)",
					backgroundColor: "var(--admin-button-secondary-bg)",
					color: "var(--admin-text-secondary)"
				},
				children: status
			});
		}
	};
	return /* @__PURE__ */ jsxs(AdminLayout, {
		title: "System Administration Center",
		children: [/* @__PURE__ */ jsx(Head, { title: "Admin Dashboard | Zytrixon Tech" }), /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl space-y-6",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "relative overflow-hidden rounded-2xl border p-6 backdrop-blur-xl transition-colors duration-200 sm:p-8",
					style: {
						backgroundColor: "var(--admin-card-bg)",
						borderColor: "var(--admin-border)"
					},
					children: [/* @__PURE__ */ jsx("div", {
						className: "pointer-events-none absolute top-0 right-0 -mt-20 -mr-20 h-96 w-96 rounded-full opacity-20 blur-3xl",
						style: { backgroundColor: "var(--admin-accent)" }
					}), /* @__PURE__ */ jsxs("div", {
						className: "relative z-10 flex flex-col justify-between gap-4 md:flex-row md:items-center",
						children: [/* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsxs("div", {
								className: "mb-2 flex items-center gap-2",
								children: [/* @__PURE__ */ jsxs("span", {
									className: "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[11px] font-semibold",
									style: {
										borderColor: "rgba(16, 185, 129, 0.3)",
										backgroundColor: "rgba(16, 185, 129, 0.1)",
										color: "var(--admin-accent)"
									},
									children: [/* @__PURE__ */ jsx(ShieldCheck, { className: "h-3.5 w-3.5" }), "Authenticated as Administrator"]
								}), /* @__PURE__ */ jsxs("span", {
									className: "font-mono text-xs",
									style: { color: "var(--admin-text-muted)" },
									children: ["Role: ", user?.role || "admin"]
								})]
							}),
							/* @__PURE__ */ jsxs("h2", {
								className: "font-heading text-2xl font-bold tracking-tight sm:text-3xl",
								style: { color: "var(--admin-text-primary)" },
								children: ["Welcome back, ", user?.name || "Admin"]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-1 max-w-2xl text-sm",
								style: { color: "var(--admin-text-muted)" },
								children: "Centralized administration console for Zytrixon Tech. Monitor incoming leads, manage client enquiries, catalog services, and system infrastructure."
							})
						] }), /* @__PURE__ */ jsxs("div", {
							className: "flex shrink-0 flex-wrap items-center gap-2.5",
							children: [/* @__PURE__ */ jsxs(Link, {
								href: "/z-admin/contacts",
								className: "inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition-all hover:opacity-90 active:scale-95",
								style: { backgroundColor: "var(--admin-accent)" },
								children: [
									/* @__PURE__ */ jsx(Mail, { className: "h-4 w-4" }),
									/* @__PURE__ */ jsx("span", { children: "Manage Enquiries" }),
									stats?.newEnquiriesCount > 0 && /* @__PURE__ */ jsxs("span", {
										className: "rounded-full bg-white/20 px-1.5 py-0.5 font-mono text-[10px] font-bold text-white",
										children: [stats.newEnquiriesCount, " New"]
									})
								]
							}), /* @__PURE__ */ jsxs("a", {
								href: "/",
								target: "_blank",
								rel: "noreferrer",
								className: "inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-xs font-semibold transition-all hover:opacity-80 active:scale-95",
								style: {
									backgroundColor: "var(--admin-button-secondary-bg)",
									borderColor: "var(--admin-border)",
									color: "var(--admin-text-primary)"
								},
								children: [/* @__PURE__ */ jsx("span", { children: "Preview Live Site" }), /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-4 w-4" })]
							})]
						})]
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-5",
					children: [
						/* @__PURE__ */ jsx(AdminStatCard, {
							title: "Client Enquiries",
							value: stats?.enquiriesCount ?? 0,
							icon: Mail,
							badgeVariant: stats?.newEnquiriesCount > 0 ? "emerald" : "blue"
						}),
						/* @__PURE__ */ jsx(AdminStatCard, {
							title: "Services Catalog",
							value: stats?.servicesCount ?? 0,
							icon: Briefcase,
							badgeVariant: "emerald"
						}),
						/* @__PURE__ */ jsx(AdminStatCard, {
							title: "Global Locations",
							value: stats?.locationsCount ?? 0,
							icon: MapPin,
							badgeVariant: "rose"
						}),
						/* @__PURE__ */ jsx(AdminStatCard, {
							title: "Case Studies",
							value: stats?.caseStudiesCount ?? 0,
							icon: FolderKanban,
							badgeVariant: "purple"
						}),
						/* @__PURE__ */ jsx(AdminStatCard, {
							title: "Registered Users",
							value: stats?.totalUsers ?? 0,
							icon: Users,
							badgeVariant: "amber"
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "rounded-2xl border p-6 backdrop-blur-sm transition-colors duration-200",
					style: {
						backgroundColor: "var(--admin-card-bg)",
						borderColor: "var(--admin-border)"
					},
					children: [/* @__PURE__ */ jsxs("div", {
						className: "mb-4 flex flex-col justify-between gap-4 border-b pb-4 sm:flex-row sm:items-center",
						style: { borderColor: "var(--admin-border)" },
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ jsx("h3", {
								className: "font-heading text-base font-semibold",
								style: { color: "var(--admin-text-primary)" },
								children: "Recent Client Enquiries & Leads"
							}), stats?.newEnquiriesCount > 0 && /* @__PURE__ */ jsxs("span", {
								className: "animate-pulse rounded-full border px-2 py-0.5 font-mono text-[10px] font-bold",
								style: {
									borderColor: "rgba(16, 185, 129, 0.3)",
									backgroundColor: "rgba(16, 185, 129, 0.1)",
									color: "var(--admin-accent)"
								},
								children: [stats.newEnquiriesCount, " Action Required"]
							})]
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-0.5 text-xs",
							style: { color: "var(--admin-text-muted)" },
							children: "Incoming customer project inquiries from website contact form"
						})] }), /* @__PURE__ */ jsxs(Link, {
							href: "/z-admin/contacts",
							className: "inline-flex items-center gap-1.5 font-mono text-xs font-semibold transition-opacity hover:opacity-80",
							style: { color: "var(--admin-accent)" },
							children: [/* @__PURE__ */ jsx("span", { children: "Open Full Enquiries Control Panel" }), /* @__PURE__ */ jsx(ArrowRight, { className: "h-3.5 w-3.5" })]
						})]
					}), recentEnquiries && recentEnquiries.length > 0 ? /* @__PURE__ */ jsx("div", {
						className: "overflow-x-auto",
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
										className: "px-3 py-3 font-semibold",
										children: "Client Name"
									}),
									/* @__PURE__ */ jsx("th", {
										className: "px-3 py-3 font-semibold",
										children: "Contact Info"
									}),
									/* @__PURE__ */ jsx("th", {
										className: "px-3 py-3 font-semibold",
										children: "Service & Budget"
									}),
									/* @__PURE__ */ jsx("th", {
										className: "px-3 py-3 font-semibold",
										children: "Status"
									}),
									/* @__PURE__ */ jsx("th", {
										className: "px-3 py-3 text-right font-semibold",
										children: "Received"
									}),
									/* @__PURE__ */ jsx("th", {
										className: "px-3 py-3 text-right font-semibold",
										children: "Action"
									})
								]
							}) }), /* @__PURE__ */ jsx("tbody", {
								className: "divide-y",
								style: { borderColor: "var(--admin-table-border)" },
								children: recentEnquiries.map((item) => /* @__PURE__ */ jsxs("tr", {
									className: "transition-colors",
									style: { borderBottom: "1px solid var(--admin-table-border)" },
									children: [
										/* @__PURE__ */ jsx("td", {
											className: "px-3 py-3 font-medium",
											children: /* @__PURE__ */ jsxs("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ jsx("div", {
													className: "flex h-7 w-7 items-center justify-center rounded-lg border text-xs font-bold uppercase",
													style: {
														backgroundColor: "var(--admin-button-secondary-bg)",
														borderColor: "var(--admin-border)",
														color: "var(--admin-accent)"
													},
													children: item.name.charAt(0)
												}), /* @__PURE__ */ jsx("span", {
													className: "font-semibold",
													style: { color: "var(--admin-text-primary)" },
													children: item.name
												})]
											})
										}),
										/* @__PURE__ */ jsxs("td", {
											className: "space-y-0.5 px-3 py-3 font-mono text-[11px]",
											style: { color: "var(--admin-text-secondary)" },
											children: [/* @__PURE__ */ jsx("div", { children: item.email }), /* @__PURE__ */ jsx("div", {
												style: { color: "var(--admin-text-muted)" },
												children: item.phone
											})]
										}),
										/* @__PURE__ */ jsxs("td", {
											className: "px-3 py-3",
											children: [/* @__PURE__ */ jsx("div", {
												className: "font-medium",
												style: { color: "var(--admin-text-primary)" },
												children: item.service || "General Inquiry"
											}), /* @__PURE__ */ jsx("div", {
												className: "text-[11px]",
												style: { color: "var(--admin-text-muted)" },
												children: item.budget || "Budget: Not specified"
											})]
										}),
										/* @__PURE__ */ jsx("td", {
											className: "px-3 py-3",
											children: getStatusBadge(item.status)
										}),
										/* @__PURE__ */ jsx("td", {
											className: "px-3 py-3 text-right font-mono",
											style: { color: "var(--admin-text-muted)" },
											children: item.created_at ? new Date(item.created_at).toLocaleDateString() : "Recent"
										}),
										/* @__PURE__ */ jsx("td", {
											className: "px-3 py-3 text-right",
											children: /* @__PURE__ */ jsxs(Link, {
												href: `/z-admin/contacts?search=${encodeURIComponent(item.name)}`,
												className: "inline-flex items-center gap-1 rounded-lg border px-2.5 py-1 text-[11px] font-medium transition-all hover:opacity-80",
												style: {
													backgroundColor: "var(--admin-button-secondary-bg)",
													borderColor: "var(--admin-border)",
													color: "var(--admin-text-primary)"
												},
												children: [/* @__PURE__ */ jsx("span", { children: "View" }), /* @__PURE__ */ jsx(ArrowRight, { className: "h-3 w-3" })]
											})
										})
									]
								}, item.id))
							})]
						})
					}) : /* @__PURE__ */ jsxs("div", {
						className: "rounded-xl border px-4 py-10 text-center",
						style: {
							backgroundColor: "var(--admin-card-subtle)",
							borderColor: "var(--admin-border-subtle)"
						},
						children: [
							/* @__PURE__ */ jsx(Mail, {
								className: "mx-auto mb-2 h-8 w-8",
								style: { color: "var(--admin-text-dim)" }
							}),
							/* @__PURE__ */ jsx("h4", {
								className: "text-sm font-semibold",
								style: { color: "var(--admin-text-primary)" },
								children: "No enquiries received yet"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mx-auto mt-1 max-w-sm text-xs",
								style: { color: "var(--admin-text-muted)" },
								children: "Inquiries submitted through the website's contact form will appear here in real-time."
							})
						]
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "grid grid-cols-1 gap-6 lg:grid-cols-3",
					children: [/* @__PURE__ */ jsxs("div", {
						id: "users",
						className: "rounded-2xl border p-6 backdrop-blur-sm transition-colors duration-200 lg:col-span-2",
						style: {
							backgroundColor: "var(--admin-card-bg)",
							borderColor: "var(--admin-border)"
						},
						children: [/* @__PURE__ */ jsxs("div", {
							className: "mb-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-center",
							children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
								className: "font-heading text-base font-semibold",
								style: { color: "var(--admin-text-primary)" },
								children: "User Directory & Roles"
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-0.5 text-xs",
								style: { color: "var(--admin-text-muted)" },
								children: "Recent accounts with role-based isolation"
							})] }), /* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ jsxs("span", {
									className: "font-mono text-xs",
									style: { color: "var(--admin-text-muted)" },
									children: [recentUsers?.length ?? 0, " Accounts Total"]
								}), /* @__PURE__ */ jsxs(Link, {
									href: "/z-admin/users",
									className: "inline-flex items-center gap-1 font-mono text-xs font-semibold transition-opacity hover:opacity-80",
									style: { color: "var(--admin-accent)" },
									children: [/* @__PURE__ */ jsx("span", { children: "Manage Users" }), /* @__PURE__ */ jsx(ArrowRight, { className: "h-3.5 w-3.5" })]
								})]
							})]
						}), /* @__PURE__ */ jsx("div", {
							className: "overflow-x-auto",
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
											className: "px-3 py-3 font-semibold",
											children: "User"
										}),
										/* @__PURE__ */ jsx("th", {
											className: "px-3 py-3 font-semibold",
											children: "Email"
										}),
										/* @__PURE__ */ jsx("th", {
											className: "px-3 py-3 font-semibold",
											children: "Role"
										}),
										/* @__PURE__ */ jsx("th", {
											className: "px-3 py-3 text-right font-semibold",
											children: "Created"
										})
									]
								}) }), /* @__PURE__ */ jsx("tbody", {
									className: "divide-y",
									style: { borderColor: "var(--admin-table-border)" },
									children: recentUsers?.map((u) => {
										const isAdmin = u.role === "admin";
										return /* @__PURE__ */ jsxs("tr", {
											className: "transition-colors",
											style: { borderBottom: "1px solid var(--admin-table-border)" },
											children: [
												/* @__PURE__ */ jsx("td", {
													className: "px-3 py-3 font-medium",
													children: /* @__PURE__ */ jsxs("div", {
														className: "flex items-center gap-2",
														children: [/* @__PURE__ */ jsx("div", {
															className: "flex h-6 w-6 items-center justify-center rounded-md text-[11px] font-bold",
															style: {
																backgroundColor: isAdmin ? "rgba(16, 185, 129, 0.15)" : "rgba(59, 130, 246, 0.15)",
																color: isAdmin ? "var(--admin-accent)" : "#3b82f6"
															},
															children: u.name.charAt(0).toUpperCase()
														}), /* @__PURE__ */ jsx("span", {
															style: { color: "var(--admin-text-primary)" },
															children: u.name
														})]
													})
												}),
												/* @__PURE__ */ jsx("td", {
													className: "px-3 py-3 font-mono",
													style: { color: "var(--admin-text-secondary)" },
													children: u.email
												}),
												/* @__PURE__ */ jsx("td", {
													className: "px-3 py-3",
													children: /* @__PURE__ */ jsxs("span", {
														className: "inline-flex items-center gap-1 rounded-full border px-2 py-0.5 font-mono text-[10px] font-semibold",
														style: {
															borderColor: isAdmin ? "rgba(16, 185, 129, 0.3)" : "rgba(59, 130, 246, 0.3)",
															backgroundColor: isAdmin ? "rgba(16, 185, 129, 0.1)" : "rgba(59, 130, 246, 0.1)",
															color: isAdmin ? "var(--admin-accent)" : "#3b82f6"
														},
														children: [/* @__PURE__ */ jsx("span", {
															className: "h-1.5 w-1.5 rounded-full",
															style: { backgroundColor: isAdmin ? "var(--admin-accent)" : "#3b82f6" }
														}), u.role.toUpperCase()]
													})
												}),
												/* @__PURE__ */ jsx("td", {
													className: "px-3 py-3 text-right font-mono",
													style: { color: "var(--admin-text-muted)" },
													children: u.created_at ? new Date(u.created_at).toLocaleDateString() : "Active"
												})
											]
										}, u.id);
									})
								})]
							})
						})]
					}), /* @__PURE__ */ jsxs("div", {
						id: "system",
						className: "space-y-4 rounded-2xl border p-6 backdrop-blur-sm transition-colors duration-200",
						style: {
							backgroundColor: "var(--admin-card-bg)",
							borderColor: "var(--admin-border)"
						},
						children: [
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("h3", {
								className: "flex items-center gap-2 font-heading text-base font-semibold",
								style: { color: "var(--admin-text-primary)" },
								children: [/* @__PURE__ */ jsx(Database, {
									className: "h-4 w-4",
									style: { color: "var(--admin-accent)" }
								}), "Database & System"]
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-0.5 text-xs",
								style: { color: "var(--admin-text-muted)" },
								children: "Live operational database parameters"
							})] }),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2.5 font-mono text-xs",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center justify-between rounded-lg border p-2.5",
										style: {
											backgroundColor: "var(--admin-card-subtle)",
											borderColor: "var(--admin-border-subtle)"
										},
										children: [/* @__PURE__ */ jsx("span", {
											style: { color: "var(--admin-text-muted)" },
											children: "DB Connection"
										}), /* @__PURE__ */ jsx("span", {
											className: "font-semibold",
											style: { color: "var(--admin-accent)" },
											children: stats?.dbDriver || "mysql"
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center justify-between rounded-lg border p-2.5",
										style: {
											backgroundColor: "var(--admin-card-subtle)",
											borderColor: "var(--admin-border-subtle)"
										},
										children: [/* @__PURE__ */ jsx("span", {
											style: { color: "var(--admin-text-muted)" },
											children: "Database Name"
										}), /* @__PURE__ */ jsx("span", {
											style: { color: "var(--admin-text-primary)" },
											children: stats?.dbName || "zytrixon"
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center justify-between rounded-lg border p-2.5",
										style: {
											backgroundColor: "var(--admin-card-subtle)",
											borderColor: "var(--admin-border-subtle)"
										},
										children: [/* @__PURE__ */ jsx("span", {
											style: { color: "var(--admin-text-muted)" },
											children: "PHP Runtime"
										}), /* @__PURE__ */ jsxs("span", {
											style: { color: "var(--admin-text-secondary)" },
											children: ["v", stats?.phpVersion || "8.2+"]
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center justify-between rounded-lg border p-2.5",
										style: {
											backgroundColor: "var(--admin-card-subtle)",
											borderColor: "var(--admin-border-subtle)"
										},
										children: [/* @__PURE__ */ jsx("span", {
											style: { color: "var(--admin-text-muted)" },
											children: "Laravel Framework"
										}), /* @__PURE__ */ jsxs("span", {
											style: { color: "var(--admin-text-secondary)" },
											children: ["v", stats?.laravelVersion || "12.x"]
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center justify-between rounded-lg border p-2.5",
										style: {
											backgroundColor: "var(--admin-card-subtle)",
											borderColor: "var(--admin-border-subtle)"
										},
										children: [/* @__PURE__ */ jsx("span", {
											style: { color: "var(--admin-text-muted)" },
											children: "Public Signup"
										}), /* @__PURE__ */ jsx("span", {
											className: "font-semibold text-amber-500",
											children: "Disabled (IAM Only)"
										})]
									})
								]
							}),
							/* @__PURE__ */ jsx("div", {
								className: "pt-2",
								children: /* @__PURE__ */ jsxs("div", {
									className: "flex items-start gap-2.5 rounded-xl border p-3 text-xs",
									style: {
										backgroundColor: "var(--admin-card-subtle)",
										borderColor: "var(--admin-border-subtle)",
										color: "var(--admin-text-muted)"
									},
									children: [/* @__PURE__ */ jsx(Terminal, {
										className: "mt-0.5 h-4 w-4 shrink-0",
										style: { color: "var(--admin-text-secondary)" }
									}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
										className: "block font-semibold",
										style: { color: "var(--admin-text-primary)" },
										children: "Zero-Trust Isolation"
									}), /* @__PURE__ */ jsx("span", { children: "Non-admin accounts attempting to access /z-admin routes are automatically rerouted to customer portal." })] })]
								})
							})
						]
					})]
				})
			]
		})]
	});
}
Dashboard.layout = (page) => page;
//#endregion
export { Dashboard as default };

//# sourceMappingURL=Dashboard-BHTJZc-O.js.map