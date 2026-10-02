import { Link } from "@inertiajs/react";
import "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, Clock, Eye } from "lucide-react";
//#region resources/js/components/landing/blog/BlogCard.tsx
function formatBlogDate(dateString) {
	if (!dateString) return "Recent";
	try {
		return new Date(dateString).toLocaleDateString("en-US", {
			month: "short",
			day: "numeric",
			year: "numeric"
		});
	} catch {
		return "Recent";
	}
}
function BlogCard({ post, isLight }) {
	return /* @__PURE__ */ jsx(Link, {
		href: `/blog/${post.slug}`,
		style: {
			textDecoration: "none",
			color: "inherit",
			display: "flex"
		},
		children: /* @__PURE__ */ jsxs("div", {
			style: {
				background: isLight ? "#FFFFFF" : "#0F0F14",
				borderRadius: 20,
				overflow: "hidden",
				border: isLight ? "1px solid #E2E8F0" : "1px solid rgba(255, 255, 255, 0.08)",
				boxShadow: isLight ? "0 6px 20px rgba(0, 0, 0, 0.04)" : "0 8px 28px rgba(0, 0, 0, 0.4)",
				transition: "transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",
				display: "flex",
				flexDirection: "column",
				width: "100%"
			},
			onMouseEnter: (e) => {
				e.currentTarget.style.transform = "translateY(-6px)";
				e.currentTarget.style.borderColor = isLight ? "#CBD5E1" : "rgba(255, 255, 255, 0.22)";
			},
			onMouseLeave: (e) => {
				e.currentTarget.style.transform = "translateY(0)";
				e.currentTarget.style.borderColor = isLight ? "#E2E8F0" : "rgba(255, 255, 255, 0.08)";
			},
			children: [/* @__PURE__ */ jsxs("div", {
				style: {
					height: 200,
					position: "relative",
					background: post.featured_image ? `url(${post.featured_image}) center / cover no-repeat` : isLight ? "linear-gradient(135deg, #312E81 0%, #1E1B4B 100%)" : "linear-gradient(135deg, #18181b 0%, #09090b 100%)",
					overflow: "hidden"
				},
				children: [/* @__PURE__ */ jsx("div", {
					style: {
						position: "absolute",
						top: 14,
						left: 14,
						padding: "4px 10px",
						borderRadius: 6,
						background: "rgba(0, 0, 0, 0.6)",
						backdropFilter: "blur(8px)",
						color: "#FFFFFF",
						fontSize: 11,
						fontWeight: 700,
						textTransform: "uppercase",
						letterSpacing: "0.06em",
						border: "1px solid rgba(255, 255, 255, 0.1)"
					},
					children: post.category
				}), post.read_time && /* @__PURE__ */ jsxs("div", {
					style: {
						position: "absolute",
						bottom: 12,
						right: 14,
						padding: "3px 8px",
						borderRadius: 4,
						background: "rgba(0, 0, 0, 0.65)",
						backdropFilter: "blur(6px)",
						color: "#E2E8F0",
						fontSize: 11,
						fontWeight: 500,
						display: "inline-flex",
						alignItems: "center",
						gap: 4
					},
					children: [/* @__PURE__ */ jsx(Clock, { size: 11 }), post.read_time]
				})]
			}), /* @__PURE__ */ jsxs("div", {
				style: {
					padding: "24px",
					display: "flex",
					flexDirection: "column",
					flex: 1
				},
				children: [
					/* @__PURE__ */ jsxs("div", {
						style: {
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							color: isLight ? "#64748B" : "#71717A",
							fontSize: 12,
							marginBottom: 12
						},
						children: [/* @__PURE__ */ jsx("span", { children: formatBlogDate(post.published_at || post.created_at) }), post.views_count > 0 && /* @__PURE__ */ jsxs("span", {
							style: {
								display: "inline-flex",
								alignItems: "center",
								gap: 4
							},
							children: [/* @__PURE__ */ jsx(Eye, { size: 12 }), post.views_count.toLocaleString()]
						})]
					}),
					/* @__PURE__ */ jsx("h3", {
						style: {
							fontSize: 18,
							fontWeight: 700,
							color: isLight ? "#0F172A" : "#FFFFFF",
							lineHeight: 1.4,
							marginBottom: 12,
							fontFamily: "var(--font-heading)",
							letterSpacing: "-0.01em",
							display: "-webkit-box",
							WebkitLineClamp: 2,
							WebkitBoxOrient: "vertical",
							overflow: "hidden"
						},
						children: post.title
					}),
					/* @__PURE__ */ jsx("p", {
						style: {
							fontSize: 13,
							color: isLight ? "#475569" : "#A1A1AA",
							lineHeight: 1.6,
							marginBottom: 20,
							display: "-webkit-box",
							WebkitLineClamp: 3,
							WebkitBoxOrient: "vertical",
							overflow: "hidden",
							flex: 1
						},
						children: post.excerpt || post.content.replace(/<[^>]*>/g, "").slice(0, 140) + "..."
					}),
					/* @__PURE__ */ jsxs("div", {
						style: {
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							paddingTop: 16,
							borderTop: isLight ? "1px solid #F1F5F9" : "1px solid rgba(255, 255, 255, 0.06)",
							marginTop: "auto"
						},
						children: [/* @__PURE__ */ jsxs("div", {
							style: {
								display: "flex",
								alignItems: "center",
								gap: 8
							},
							children: [/* @__PURE__ */ jsx("div", {
								style: {
									width: 24,
									height: 24,
									borderRadius: "50%",
									background: isLight ? "linear-gradient(135deg, #6366F1, #3B82F6)" : "linear-gradient(135deg, #3B82F6, #10B981)",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									color: "#FFFFFF",
									fontSize: 10,
									fontWeight: 700
								},
								children: (post.author_name || "Z")[0].toUpperCase()
							}), /* @__PURE__ */ jsx("span", {
								style: {
									fontSize: 12,
									color: isLight ? "#475569" : "#D4D4D8",
									fontWeight: 500
								},
								children: post.author_name
							})]
						}), /* @__PURE__ */ jsxs("span", {
							style: {
								fontSize: 12,
								fontWeight: 700,
								color: isLight ? "#4F46E5" : "#60A5FA",
								display: "inline-flex",
								alignItems: "center",
								gap: 4
							},
							children: ["Read", /* @__PURE__ */ jsx(ArrowRight, { size: 13 })]
						})]
					})
				]
			})]
		})
	});
}
//#endregion
export { formatBlogDate as n, BlogCard as t };

//# sourceMappingURL=BlogCard-BdfljuSP.js.map