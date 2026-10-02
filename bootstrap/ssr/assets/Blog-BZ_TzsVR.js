import { a as useTheme, i as ThemeProvider, n as Footer, r as Navbar, t as CustomCursor } from "./custom-cursor-B2HeUCYC.js";
import { t as TopBar } from "./top-bar-C3HAjSYy.js";
import { t as InnerPageHero } from "./inner-page-hero-DKrAKqeo.js";
import { t as ContactSection } from "./contact-section-BAW46C7Q.js";
import { t as FooterCTA } from "./footer-cta-CxW1r1Xr.js";
import { n as formatBlogDate, t as BlogCard } from "./BlogCard-BdfljuSP.js";
import { Head, Link, router } from "@inertiajs/react";
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, Calendar, Clock, Search, Sparkles, X } from "lucide-react";
//#region resources/js/components/landing/blog/BlogFeaturedHero.tsx
function BlogFeaturedHero({ post, isLight }) {
	return /* @__PURE__ */ jsx("section", {
		style: {
			padding: "16px 24px 48px",
			maxWidth: 1240,
			margin: "0 auto"
		},
		children: /* @__PURE__ */ jsx(Link, {
			href: `/blog/${post.slug}`,
			style: {
				textDecoration: "none",
				color: "inherit",
				display: "block"
			},
			children: /* @__PURE__ */ jsxs("div", {
				style: {
					display: "grid",
					gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
					background: isLight ? "#FFFFFF" : "#0F0F14",
					borderRadius: 24,
					overflow: "hidden",
					border: isLight ? "1px solid #E2E8F0" : "1px solid rgba(255, 255, 255, 0.08)",
					boxShadow: isLight ? "0 12px 36px -12px rgba(0, 0, 0, 0.07)" : "0 16px 40px -12px rgba(0, 0, 0, 0.6)",
					transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease"
				},
				onMouseEnter: (e) => {
					e.currentTarget.style.transform = "translateY(-4px)";
					e.currentTarget.style.borderColor = isLight ? "#CBD5E1" : "rgba(255, 255, 255, 0.22)";
				},
				onMouseLeave: (e) => {
					e.currentTarget.style.transform = "translateY(0)";
					e.currentTarget.style.borderColor = isLight ? "#E2E8F0" : "rgba(255, 255, 255, 0.08)";
				},
				children: [/* @__PURE__ */ jsxs("div", {
					style: {
						minHeight: 340,
						position: "relative",
						background: post.featured_image ? `url(${post.featured_image}) center / cover no-repeat` : isLight ? "linear-gradient(135deg, #1E1B4B 0%, #312E81 50%, #4338CA 100%)" : "linear-gradient(135deg, #09090b 0%, #18181b 50%, #27272a 100%)",
						overflow: "hidden"
					},
					children: [/* @__PURE__ */ jsx("div", { style: {
						position: "absolute",
						inset: 0,
						background: "linear-gradient(to top, rgba(0, 0, 0, 0.5) 0%, transparent 60%)"
					} }), /* @__PURE__ */ jsxs("div", {
						style: {
							position: "absolute",
							top: 24,
							left: 24,
							display: "inline-flex",
							alignItems: "center",
							gap: 6,
							padding: "6px 14px",
							borderRadius: 9999,
							background: "rgba(0, 0, 0, 0.65)",
							backdropFilter: "blur(12px)",
							color: "#60A5FA",
							fontSize: 12,
							fontWeight: 700,
							textTransform: "uppercase",
							letterSpacing: "0.08em",
							border: "1px solid rgba(255, 255, 255, 0.1)"
						},
						children: [/* @__PURE__ */ jsx(Sparkles, { size: 13 }), "Featured Spotlight"]
					})]
				}), /* @__PURE__ */ jsxs("div", {
					style: {
						padding: "44px 40px",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center"
					},
					children: [
						/* @__PURE__ */ jsxs("div", {
							style: {
								display: "flex",
								alignItems: "center",
								gap: 12,
								marginBottom: 16,
								flexWrap: "wrap"
							},
							children: [
								/* @__PURE__ */ jsx("span", {
									style: {
										fontSize: 12,
										fontWeight: 700,
										textTransform: "uppercase",
										letterSpacing: "0.06em",
										padding: "4px 12px",
										borderRadius: 6,
										background: isLight ? "#EEF2FF" : "rgba(59, 130, 246, 0.12)",
										color: isLight ? "#4F46E5" : "#60A5FA",
										border: isLight ? "1px solid rgba(79, 70, 229, 0.15)" : "1px solid rgba(59, 130, 246, 0.25)"
									},
									children: post.category
								}),
								/* @__PURE__ */ jsxs("span", {
									style: {
										display: "inline-flex",
										alignItems: "center",
										gap: 5,
										color: isLight ? "#64748B" : "#71717A",
										fontSize: 13
									},
									children: [/* @__PURE__ */ jsx(Calendar, { size: 13 }), formatBlogDate(post.published_at || post.created_at)]
								}),
								post.read_time && /* @__PURE__ */ jsxs("span", {
									style: {
										display: "inline-flex",
										alignItems: "center",
										gap: 5,
										color: isLight ? "#64748B" : "#71717A",
										fontSize: 13
									},
									children: [/* @__PURE__ */ jsx(Clock, { size: 13 }), post.read_time]
								})
							]
						}),
						/* @__PURE__ */ jsx("h2", {
							style: {
								fontSize: "clamp(24px, 3.2vw, 36px)",
								fontFamily: "var(--font-heading)",
								fontWeight: 800,
								color: isLight ? "#0F172A" : "#FFFFFF",
								lineHeight: 1.25,
								marginBottom: 16,
								letterSpacing: "-0.02em"
							},
							children: post.title
						}),
						/* @__PURE__ */ jsx("p", {
							style: {
								fontSize: 15,
								lineHeight: 1.65,
								color: isLight ? "#475569" : "#A1A1AA",
								marginBottom: 28,
								display: "-webkit-box",
								WebkitLineClamp: 3,
								WebkitBoxOrient: "vertical",
								overflow: "hidden"
							},
							children: post.excerpt || post.content.replace(/<[^>]*>/g, "").slice(0, 180) + "..."
						}),
						/* @__PURE__ */ jsxs("div", {
							style: {
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								marginTop: "auto"
							},
							children: [/* @__PURE__ */ jsxs("div", {
								style: {
									display: "flex",
									alignItems: "center",
									gap: 10
								},
								children: [/* @__PURE__ */ jsx("div", {
									style: {
										width: 32,
										height: 32,
										borderRadius: "50%",
										background: isLight ? "linear-gradient(135deg, #4F46E5, #06B6D4)" : "linear-gradient(135deg, #3B82F6, #10B981)",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										color: "#FFFFFF",
										fontSize: 12,
										fontWeight: 700
									},
									children: (post.author_name || "Z")[0].toUpperCase()
								}), /* @__PURE__ */ jsx("span", {
									style: {
										fontSize: 13,
										fontWeight: 600,
										color: isLight ? "#334155" : "#D4D4D8"
									},
									children: post.author_name
								})]
							}), /* @__PURE__ */ jsxs("div", {
								style: {
									display: "inline-flex",
									alignItems: "center",
									gap: 6,
									fontSize: 14,
									fontWeight: 700,
									color: isLight ? "#4F46E5" : "#60A5FA"
								},
								children: ["Read Article", /* @__PURE__ */ jsx(ArrowRight, { size: 16 })]
							})]
						})
					]
				})]
			})
		})
	});
}
//#endregion
//#region resources/js/components/landing/blog/BlogFilterBar.tsx
function BlogFilterBar({ searchQuery, onSearchChange, onSearchSubmit, categories, selectedCategory, onCategoryChange, isLight }) {
	return /* @__PURE__ */ jsx("section", {
		style: {
			padding: "16px 24px 32px",
			maxWidth: 1240,
			margin: "0 auto"
		},
		children: /* @__PURE__ */ jsxs("div", {
			style: {
				display: "flex",
				flexDirection: "column",
				gap: 20,
				alignItems: "center"
			},
			children: [/* @__PURE__ */ jsxs("form", {
				onSubmit: onSearchSubmit,
				style: {
					width: "100%",
					maxWidth: 540,
					position: "relative",
					display: "flex",
					alignItems: "center"
				},
				children: [
					/* @__PURE__ */ jsx(Search, {
						size: 18,
						style: {
							position: "absolute",
							left: 18,
							color: isLight ? "#64748B" : "#71717A",
							pointerEvents: "none"
						}
					}),
					/* @__PURE__ */ jsx("input", {
						type: "text",
						value: searchQuery,
						onChange: (e) => onSearchChange(e.target.value),
						placeholder: "Search articles, architectures, tutorials...",
						style: {
							width: "100%",
							padding: "13px 44px 13px 48px",
							borderRadius: 9999,
							fontSize: 14,
							background: isLight ? "#FFFFFF" : "#121217",
							color: isLight ? "#0F172A" : "#FFFFFF",
							border: isLight ? "1px solid #E2E8F0" : "1px solid rgba(255, 255, 255, 0.12)",
							boxShadow: isLight ? "0 4px 14px rgba(0, 0, 0, 0.04)" : "0 4px 20px rgba(0, 0, 0, 0.4)",
							outline: "none",
							transition: "border-color 0.2s ease, box-shadow 0.2s ease"
						},
						onFocus: (e) => {
							e.currentTarget.style.borderColor = isLight ? "#6366F1" : "rgba(255, 255, 255, 0.35)";
						},
						onBlur: (e) => {
							e.currentTarget.style.borderColor = isLight ? "#E2E8F0" : "rgba(255, 255, 255, 0.12)";
						}
					}),
					searchQuery && /* @__PURE__ */ jsx("button", {
						type: "button",
						onClick: () => onSearchChange(""),
						style: {
							position: "absolute",
							right: 16,
							background: "transparent",
							border: "none",
							color: isLight ? "#94A3B8" : "#71717A",
							cursor: "pointer",
							padding: 4,
							display: "flex",
							alignItems: "center"
						},
						children: /* @__PURE__ */ jsx(X, { size: 16 })
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				style: {
					display: "flex",
					gap: 10,
					flexWrap: "wrap",
					justifyContent: "center",
					alignItems: "center"
				},
				children: [/* @__PURE__ */ jsx("button", {
					onClick: () => onCategoryChange("all"),
					style: {
						padding: "8px 18px",
						borderRadius: 9999,
						fontSize: 13,
						fontWeight: 600,
						cursor: "pointer",
						transition: "all 0.2s ease",
						background: selectedCategory === "all" || !selectedCategory ? isLight ? "#0F172A" : "#FFFFFF" : isLight ? "#F1F5F9" : "rgba(255, 255, 255, 0.05)",
						color: selectedCategory === "all" || !selectedCategory ? isLight ? "#FFFFFF" : "#000000" : isLight ? "#475569" : "#A1A1AA",
						border: selectedCategory === "all" || !selectedCategory ? "none" : isLight ? "1px solid #E2E8F0" : "1px solid rgba(255, 255, 255, 0.08)"
					},
					children: "All Articles"
				}), (categories || []).map((cat) => {
					const isActive = selectedCategory === cat;
					return /* @__PURE__ */ jsx("button", {
						onClick: () => onCategoryChange(cat),
						style: {
							padding: "8px 18px",
							borderRadius: 9999,
							fontSize: 13,
							fontWeight: 600,
							cursor: "pointer",
							transition: "all 0.2s ease",
							background: isActive ? isLight ? "#0F172A" : "#FFFFFF" : isLight ? "#F1F5F9" : "rgba(255, 255, 255, 0.05)",
							color: isActive ? isLight ? "#FFFFFF" : "#000000" : isLight ? "#475569" : "#A1A1AA",
							border: isActive ? "none" : isLight ? "1px solid #E2E8F0" : "1px solid rgba(255, 255, 255, 0.08)"
						},
						children: cat
					}, cat);
				})]
			})]
		})
	});
}
//#endregion
//#region resources/js/components/landing/blog/BlogNewsletter.tsx
function BlogNewsletter({ isLight }) {
	const [newsletterEmail, setNewsletterEmail] = useState("");
	const [newsletterDone, setNewsletterDone] = useState(false);
	const handleNewsletterSubmit = (e) => {
		e.preventDefault();
		if (newsletterEmail) {
			setNewsletterDone(true);
			setNewsletterEmail("");
		}
	};
	return /* @__PURE__ */ jsx("section", {
		style: {
			padding: "80px 24px",
			background: isLight ? "#FFFFFF" : "#0B0B0F",
			borderTop: isLight ? "1px solid #E2E8F0" : "1px solid rgba(255, 255, 255, 0.06)",
			borderBottom: isLight ? "1px solid #E2E8F0" : "1px solid rgba(255, 255, 255, 0.06)",
			textAlign: "center"
		},
		children: /* @__PURE__ */ jsxs("div", {
			style: {
				maxWidth: 640,
				margin: "0 auto"
			},
			children: [
				/* @__PURE__ */ jsxs("div", {
					style: {
						display: "inline-flex",
						alignItems: "center",
						gap: 6,
						padding: "6px 14px",
						borderRadius: 9999,
						background: isLight ? "#EEF2FF" : "rgba(59, 130, 246, 0.1)",
						color: isLight ? "#4F46E5" : "#60A5FA",
						fontSize: 12,
						fontWeight: 700,
						textTransform: "uppercase",
						letterSpacing: "0.08em",
						marginBottom: 20
					},
					children: [/* @__PURE__ */ jsx(Sparkles, { size: 13 }), "Weekly Tech Dispatch"]
				}),
				/* @__PURE__ */ jsx("h2", {
					style: {
						fontSize: "clamp(28px, 4vw, 40px)",
						fontFamily: "var(--font-heading)",
						fontWeight: 800,
						color: isLight ? "#0F172A" : "#FFFFFF",
						marginBottom: 16,
						letterSpacing: "-0.02em",
						lineHeight: 1.2
					},
					children: "Stay Ahead of Technical Innovations"
				}),
				/* @__PURE__ */ jsx("p", {
					style: {
						color: isLight ? "#475569" : "#A1A1AA",
						marginBottom: 32,
						fontSize: 15,
						lineHeight: 1.6
					},
					children: "Curated blueprints on AI models, scalable micro-architectures, fullstack engineering, and cloud security delivered straight to your inbox. No fluff, no spam."
				}),
				newsletterDone ? /* @__PURE__ */ jsx("div", {
					style: {
						padding: "16px 24px",
						borderRadius: 12,
						background: isLight ? "#ECFDF5" : "rgba(16, 185, 129, 0.12)",
						border: isLight ? "1px solid #A7F3D0" : "1px solid rgba(16, 185, 129, 0.3)",
						color: isLight ? "#065F46" : "#34D399",
						fontSize: 14,
						fontWeight: 600,
						maxWidth: 480,
						margin: "0 auto"
					},
					children: "🎉 You're subscribed! Keep an eye on your inbox for our next dispatch."
				}) : /* @__PURE__ */ jsxs("form", {
					onSubmit: handleNewsletterSubmit,
					style: {
						display: "flex",
						gap: 10,
						maxWidth: 480,
						margin: "0 auto",
						flexWrap: "wrap"
					},
					children: [/* @__PURE__ */ jsx("input", {
						type: "email",
						value: newsletterEmail,
						onChange: (e) => setNewsletterEmail(e.target.value),
						placeholder: "Enter your professional email",
						required: true,
						style: {
							flex: "1 1 260px",
							padding: "14px 20px",
							borderRadius: 9999,
							border: isLight ? "1px solid #CBD5E1" : "1px solid rgba(255, 255, 255, 0.15)",
							background: isLight ? "#F8FAFC" : "#141419",
							color: isLight ? "#0F172A" : "#FFFFFF",
							fontSize: 14,
							outline: "none"
						}
					}), /* @__PURE__ */ jsx("button", {
						type: "submit",
						style: {
							padding: "14px 28px",
							borderRadius: 9999,
							background: isLight ? "#0F172A" : "#FFFFFF",
							color: isLight ? "#FFFFFF" : "#000000",
							fontSize: 14,
							fontWeight: 700,
							border: "none",
							cursor: "pointer",
							transition: "all 0.2s ease"
						},
						children: "Subscribe Free"
					})]
				})
			]
		})
	});
}
//#endregion
//#region resources/js/pages/Blog.tsx
function BlogContent({ blogs, featured, selectedCategory = "all", categories }) {
	const { theme } = useTheme();
	const isLight = theme === "light";
	const [searchQuery, setSearchQuery] = useState("");
	const displayFeatured = featured || (blogs?.data?.length > 0 ? blogs.data[0] : null);
	const gridPosts = blogs?.data || [];
	const handleCategoryChange = (cat) => {
		router.visit(cat === "all" ? "/blog" : `/blog?category=${encodeURIComponent(cat)}`, {
			preserveState: true,
			preserveScroll: true
		});
	};
	const handleSearchSubmit = (e) => {
		e.preventDefault();
		const trimmed = searchQuery.trim();
		const params = new URLSearchParams();
		if (selectedCategory && selectedCategory !== "all") params.set("category", selectedCategory);
		if (trimmed) params.set("search", trimmed);
		router.visit(`/blog?${params.toString()}`, {
			preserveState: true,
			preserveScroll: true
		});
	};
	return /* @__PURE__ */ jsxs("div", {
		style: {
			background: isLight ? "#FAFAFA" : "var(--zy-black)",
			color: isLight ? "#0F172A" : "#FFFFFF",
			minHeight: "100vh",
			transition: "background-color 0.3s ease, color 0.3s ease"
		},
		children: [
			/* @__PURE__ */ jsx(CustomCursor, {}),
			/* @__PURE__ */ jsx(TopBar, {}),
			/* @__PURE__ */ jsx(Navbar, {}),
			/* @__PURE__ */ jsxs("main", { children: [
				/* @__PURE__ */ jsx(InnerPageHero, {
					title: "Engineering & Product Insights",
					subtitle: "Deep dives into AI systems, enterprise cloud architecture, design systems, and digital engineering transformation."
				}),
				/* @__PURE__ */ jsx(BlogFilterBar, {
					searchQuery,
					onSearchChange: setSearchQuery,
					onSearchSubmit: handleSearchSubmit,
					categories,
					selectedCategory,
					onCategoryChange: handleCategoryChange,
					isLight
				}),
				displayFeatured && /* @__PURE__ */ jsx(BlogFeaturedHero, {
					post: displayFeatured,
					isLight
				}),
				/* @__PURE__ */ jsxs("section", {
					style: {
						padding: "24px 24px 80px",
						maxWidth: 1240,
						margin: "0 auto"
					},
					children: [gridPosts.length === 0 ? /* @__PURE__ */ jsxs("div", {
						style: {
							textAlign: "center",
							padding: "80px 24px",
							background: isLight ? "#FFFFFF" : "#0F0F14",
							borderRadius: 20,
							border: isLight ? "1px solid #E2E8F0" : "1px solid rgba(255, 255, 255, 0.08)",
							maxWidth: 580,
							margin: "0 auto"
						},
						children: [
							/* @__PURE__ */ jsx("div", {
								style: {
									width: 64,
									height: 64,
									borderRadius: "50%",
									background: isLight ? "#F1F5F9" : "rgba(255, 255, 255, 0.06)",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									margin: "0 auto 20px",
									color: isLight ? "#64748B" : "#71717A"
								},
								children: /* @__PURE__ */ jsx(Search, { size: 28 })
							}),
							/* @__PURE__ */ jsx("h3", {
								style: {
									fontSize: 22,
									fontWeight: 700,
									color: isLight ? "#0F172A" : "#FFFFFF",
									marginBottom: 10
								},
								children: "No articles found"
							}),
							/* @__PURE__ */ jsx("p", {
								style: {
									fontSize: 14,
									color: isLight ? "#64748B" : "#A1A1AA",
									marginBottom: 24,
									lineHeight: 1.6
								},
								children: "We couldn't find any articles matching your search criteria or category filter."
							}),
							/* @__PURE__ */ jsx("button", {
								onClick: () => router.visit("/blog"),
								style: {
									padding: "10px 24px",
									borderRadius: 9999,
									background: isLight ? "#0F172A" : "#FFFFFF",
									color: isLight ? "#FFFFFF" : "#000000",
									fontSize: 13,
									fontWeight: 600,
									border: "none",
									cursor: "pointer"
								},
								children: "Reset All Filters"
							})
						]
					}) : /* @__PURE__ */ jsx("div", {
						style: {
							display: "grid",
							gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
							gap: 32
						},
						children: gridPosts.map((post) => /* @__PURE__ */ jsx(BlogCard, {
							post,
							isLight
						}, post.id))
					}), blogs?.links && blogs.links.length > 3 && /* @__PURE__ */ jsx("div", {
						style: {
							marginTop: 60,
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							gap: 8,
							flexWrap: "wrap"
						},
						children: blogs.links.map((link, idx) => {
							if (!link.url && !link.active) return /* @__PURE__ */ jsx("span", {
								style: {
									padding: "8px 14px",
									borderRadius: 8,
									fontSize: 13,
									color: isLight ? "#94A3B8" : "#52525B",
									cursor: "not-allowed"
								},
								dangerouslySetInnerHTML: { __html: link.label }
							}, idx);
							return /* @__PURE__ */ jsx(Link, {
								href: link.url || "#",
								preserveScroll: true,
								preserveState: true,
								style: {
									padding: "8px 16px",
									borderRadius: 8,
									fontSize: 13,
									fontWeight: 600,
									textDecoration: "none",
									transition: "all 0.2s ease",
									background: link.active ? isLight ? "#0F172A" : "#FFFFFF" : isLight ? "#FFFFFF" : "#18181B",
									color: link.active ? isLight ? "#FFFFFF" : "#000000" : isLight ? "#334155" : "#E4E4E7",
									border: link.active ? "none" : isLight ? "1px solid #E2E8F0" : "1px solid rgba(255, 255, 255, 0.1)",
									boxShadow: link.active ? isLight ? "0 2px 8px rgba(0, 0, 0, 0.15)" : "0 2px 10px rgba(0, 0, 0, 0.5)" : "none"
								},
								dangerouslySetInnerHTML: { __html: link.label }
							}, idx);
						})
					})]
				}),
				/* @__PURE__ */ jsx(BlogNewsletter, { isLight }),
				/* @__PURE__ */ jsx(FooterCTA, {}),
				/* @__PURE__ */ jsx(ContactSection, {})
			] }),
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
}
function Blog(props) {
	return /* @__PURE__ */ jsxs(ThemeProvider, { children: [/* @__PURE__ */ jsxs(Head, { children: [/* @__PURE__ */ jsx("title", { children: props.seo?.title || "Engineering Insights & Tech Blog | Zytrixon Tech" }), /* @__PURE__ */ jsx("meta", {
		name: "description",
		content: props.seo?.description || "Read the latest insights, architecture deep-dives, and tutorials from the engineering team at Zytrixon Tech."
	})] }), /* @__PURE__ */ jsx(BlogContent, { ...props })] });
}
Blog.layout = null;
//#endregion
export { Blog as default };

//# sourceMappingURL=Blog-BZ_TzsVR.js.map