import { a as useTheme, i as ThemeProvider, n as Footer, r as Navbar, t as CustomCursor } from "./custom-cursor-B2HeUCYC.js";
import { t as TopBar } from "./top-bar-C3HAjSYy.js";
import { t as FooterCTA } from "./footer-cta-CxW1r1Xr.js";
import { n as formatBlogDate, t as BlogCard } from "./BlogCard-BdfljuSP.js";
import { Head, Link } from "@inertiajs/react";
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowLeft, ArrowRight, Calendar, Check, Clock, Copy, Eye, Sparkles, Tag } from "lucide-react";
//#region resources/js/components/landing/blog/BlogShareBar.tsx
function BlogShareBar({ title, isLight }) {
	const [copied, setCopied] = useState(false);
	const shareUrl = typeof window !== "undefined" ? window.location.href : "";
	const handleCopyLink = () => {
		if (navigator.clipboard) {
			navigator.clipboard.writeText(shareUrl);
			setCopied(true);
			setTimeout(() => setCopied(false), 2500);
		}
	};
	return /* @__PURE__ */ jsxs("div", {
		style: {
			display: "flex",
			alignItems: "center",
			gap: 8
		},
		children: [
			/* @__PURE__ */ jsxs("button", {
				type: "button",
				onClick: handleCopyLink,
				title: "Copy article link",
				style: {
					display: "inline-flex",
					alignItems: "center",
					gap: 6,
					padding: "8px 14px",
					borderRadius: 8,
					background: isLight ? "#F1F5F9" : "rgba(255, 255, 255, 0.06)",
					border: isLight ? "1px solid #CBD5E1" : "1px solid rgba(255, 255, 255, 0.1)",
					color: copied ? "#10B981" : isLight ? "#334155" : "#E4E4E7",
					fontSize: 13,
					fontWeight: 600,
					cursor: "pointer",
					transition: "all 0.2s ease"
				},
				children: [copied ? /* @__PURE__ */ jsx(Check, { size: 15 }) : /* @__PURE__ */ jsx(Copy, { size: 15 }), copied ? "Link Copied!" : "Copy Link"]
			}),
			/* @__PURE__ */ jsx("a", {
				href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`,
				target: "_blank",
				rel: "noopener noreferrer",
				title: "Share on X",
				style: {
					display: "inline-flex",
					alignItems: "center",
					justifyContent: "center",
					width: 36,
					height: 36,
					borderRadius: 8,
					background: isLight ? "#F1F5F9" : "rgba(255, 255, 255, 0.06)",
					border: isLight ? "1px solid #CBD5E1" : "1px solid rgba(255, 255, 255, 0.1)",
					color: isLight ? "#334155" : "#E4E4E7",
					textDecoration: "none"
				},
				children: /* @__PURE__ */ jsx("svg", {
					width: "15",
					height: "15",
					viewBox: "0 0 24 24",
					fill: "currentColor",
					children: /* @__PURE__ */ jsx("path", { d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" })
				})
			}),
			/* @__PURE__ */ jsx("a", {
				href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
				target: "_blank",
				rel: "noopener noreferrer",
				title: "Share on LinkedIn",
				style: {
					display: "inline-flex",
					alignItems: "center",
					justifyContent: "center",
					width: 36,
					height: 36,
					borderRadius: 8,
					background: isLight ? "#F1F5F9" : "rgba(255, 255, 255, 0.06)",
					border: isLight ? "1px solid #CBD5E1" : "1px solid rgba(255, 255, 255, 0.1)",
					color: isLight ? "#334155" : "#E4E4E7",
					textDecoration: "none"
				},
				children: /* @__PURE__ */ jsx("svg", {
					width: "15",
					height: "15",
					viewBox: "0 0 24 24",
					fill: "currentColor",
					children: /* @__PURE__ */ jsx("path", { d: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0-.01-3.28 1.64 1.64 0 0 0 .01 3.28M7.86 18.5V9.93H5.06V18.5h2.8z" })
				})
			}),
			/* @__PURE__ */ jsx("a", {
				href: `https://api.whatsapp.com/send?text=${encodeURIComponent(title + " " + shareUrl)}`,
				target: "_blank",
				rel: "noopener noreferrer",
				title: "Share on WhatsApp",
				style: {
					display: "inline-flex",
					alignItems: "center",
					justifyContent: "center",
					width: 36,
					height: 36,
					borderRadius: 8,
					background: isLight ? "#F1F5F9" : "rgba(255, 255, 255, 0.06)",
					border: isLight ? "1px solid #CBD5E1" : "1px solid rgba(255, 255, 255, 0.1)",
					color: isLight ? "#334155" : "#E4E4E7",
					textDecoration: "none"
				},
				children: /* @__PURE__ */ jsx("svg", {
					width: "16",
					height: "16",
					viewBox: "0 0 24 24",
					fill: "currentColor",
					children: /* @__PURE__ */ jsx("path", { d: "M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.4-1.76-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.12-.22-.19-.47-.32" })
				})
			})
		]
	});
}
//#endregion
//#region resources/js/components/landing/blog/BlogAuthorBox.tsx
function BlogAuthorBox({ authorName, isLight }) {
	return /* @__PURE__ */ jsxs("div", {
		style: {
			marginTop: 48,
			padding: "36px",
			borderRadius: 20,
			background: isLight ? "#FFFFFF" : "#0F0F14",
			border: isLight ? "1px solid #E2E8F0" : "1px solid rgba(255, 255, 255, 0.08)",
			boxShadow: isLight ? "0 10px 30px rgba(0, 0, 0, 0.04)" : "0 12px 36px rgba(0, 0, 0, 0.4)",
			display: "flex",
			gap: 24,
			alignItems: "center",
			flexWrap: "wrap"
		},
		children: [/* @__PURE__ */ jsx("div", {
			style: {
				width: 72,
				height: 72,
				borderRadius: "50%",
				background: isLight ? "linear-gradient(135deg, #4F46E5, #06B6D4)" : "linear-gradient(135deg, #3B82F6, #10B981)",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				color: "#FFFFFF",
				fontSize: 24,
				fontWeight: 800,
				flexShrink: 0
			},
			children: (authorName || "Z")[0].toUpperCase()
		}), /* @__PURE__ */ jsxs("div", {
			style: {
				flex: 1,
				minWidth: 260
			},
			children: [/* @__PURE__ */ jsxs("div", {
				style: {
					fontSize: 18,
					fontWeight: 800,
					color: isLight ? "#0F172A" : "#FFFFFF",
					marginBottom: 6
				},
				children: ["Written by ", authorName]
			}), /* @__PURE__ */ jsx("p", {
				style: {
					fontSize: 14,
					lineHeight: 1.6,
					color: isLight ? "#475569" : "#A1A1AA",
					margin: 0
				},
				children: "Software architect and engineering researcher at Zytrixon Tech, passionate about modern distributed web systems, AI agent integrations, and scalable product architecture."
			})]
		})]
	});
}
//#endregion
//#region resources/js/components/landing/blog/BlogProseStyles.tsx
function BlogProseStyles({ isLight }) {
	return /* @__PURE__ */ jsx("style", { children: `
            .zytrixon-article-content {
                font-size: 17px;
                line-height: 1.85;
                color: ${isLight ? "#334155" : "#D4D4D8"};
            }

            .zytrixon-article-content h1,
            .zytrixon-article-content h2,
            .zytrixon-article-content h3,
            .zytrixon-article-content h4 {
                font-family: var(--font-heading);
                color: ${isLight ? "#0F172A" : "#FFFFFF"};
                font-weight: 800;
                letter-spacing: -0.02em;
                margin-top: 2.2em;
                margin-bottom: 0.8em;
                line-height: 1.3;
            }

            .zytrixon-article-content h2 {
                font-size: 28px;
                border-bottom: 1px solid ${isLight ? "#E2E8F0" : "rgba(255, 255, 255, 0.08)"};
                padding-bottom: 12px;
            }

            .zytrixon-article-content h3 {
                font-size: 22px;
            }

            .zytrixon-article-content p {
                margin-bottom: 1.6em;
            }

            .zytrixon-article-content strong,
            .zytrixon-article-content b {
                color: ${isLight ? "#0F172A" : "#FFFFFF"};
                font-weight: 700;
            }

            .zytrixon-article-content a {
                color: ${isLight ? "#4F46E5" : "#60A5FA"};
                text-decoration: underline;
                text-underline-offset: 4px;
                font-weight: 600;
                transition: opacity 0.2s;
            }

            .zytrixon-article-content a:hover {
                opacity: 0.8;
            }

            .zytrixon-article-content blockquote {
                border-left: 4px solid ${isLight ? "#4F46E5" : "#60A5FA"};
                background: ${isLight ? "#EEF2FF" : "rgba(59, 130, 246, 0.06)"};
                margin: 2em 0;
                padding: 18px 24px;
                border-radius: 0 12px 12px 0;
                font-style: italic;
                color: ${isLight ? "#1E1B4B" : "#E0E7FF"};
            }

            .zytrixon-article-content ul,
            .zytrixon-article-content ol {
                margin: 1.5em 0;
                padding-left: 28px;
            }

            .zytrixon-article-content li {
                margin-bottom: 0.8em;
            }

            .zytrixon-article-content code {
                font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
                font-size: 0.9em;
                padding: 3px 6px;
                border-radius: 6px;
                background: ${isLight ? "#F1F5F9" : "rgba(255, 255, 255, 0.08)"};
                color: ${isLight ? "#D946EF" : "#F472B6"};
                border: 1px solid ${isLight ? "#E2E8F0" : "rgba(255, 255, 255, 0.1)"};
            }

            .zytrixon-article-content pre {
                background: ${isLight ? "#0F172A" : "#0B0B0F"};
                color: #F8FAFC;
                padding: 20px 24px;
                border-radius: 14px;
                overflow-x: auto;
                margin: 2em 0;
                font-size: 14px;
                line-height: 1.6;
                border: 1px solid ${isLight ? "#1E293B" : "rgba(255, 255, 255, 0.12)"};
            }

            .zytrixon-article-content pre code {
                background: transparent;
                color: inherit;
                padding: 0;
                border: none;
                font-size: inherit;
            }

            .zytrixon-article-content img {
                max-width: 100%;
                height: auto;
                border-radius: 14px;
                margin: 2.2em 0;
                border: 1px solid ${isLight ? "#E2E8F0" : "rgba(255, 255, 255, 0.1)"};
                box-shadow: ${isLight ? "0 10px 25px rgba(0,0,0,0.06)" : "0 12px 30px rgba(0,0,0,0.5)"};
            }

            .zytrixon-article-content hr {
                border: none;
                border-top: 1px solid ${isLight ? "#E2E8F0" : "rgba(255, 255, 255, 0.1)"};
                margin: 3em 0;
            }
        ` });
}
//#endregion
//#region resources/js/pages/BlogDetails.tsx
function BlogDetailsContent({ blog, relatedBlogs = [] }) {
	const { theme } = useTheme();
	const isLight = theme === "light";
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
			/* @__PURE__ */ jsxs("main", {
				style: { paddingTop: 100 },
				children: [
					/* @__PURE__ */ jsx("div", {
						style: {
							maxWidth: 960,
							margin: "0 auto",
							padding: "24px 24px 0"
						},
						children: /* @__PURE__ */ jsxs("div", {
							style: {
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								flexWrap: "wrap",
								gap: 16,
								marginBottom: 28
							},
							children: [/* @__PURE__ */ jsxs(Link, {
								href: "/blog",
								style: {
									display: "inline-flex",
									alignItems: "center",
									gap: 8,
									color: isLight ? "#475569" : "#A1A1AA",
									textDecoration: "none",
									fontSize: 14,
									fontWeight: 600,
									padding: "8px 14px",
									borderRadius: 8,
									background: isLight ? "#F1F5F9" : "rgba(255, 255, 255, 0.05)",
									border: isLight ? "1px solid #E2E8F0" : "1px solid rgba(255, 255, 255, 0.08)",
									transition: "all 0.2s ease"
								},
								children: [/* @__PURE__ */ jsx(ArrowLeft, { size: 16 }), "Back to Articles"]
							}), /* @__PURE__ */ jsxs("div", {
								style: {
									display: "flex",
									alignItems: "center",
									gap: 8,
									fontSize: 13,
									color: isLight ? "#64748B" : "#71717A"
								},
								children: [
									/* @__PURE__ */ jsx(Link, {
										href: "/",
										style: {
											color: "inherit",
											textDecoration: "none"
										},
										children: "Home"
									}),
									/* @__PURE__ */ jsx("span", { children: "/" }),
									/* @__PURE__ */ jsx(Link, {
										href: "/blog",
										style: {
											color: "inherit",
											textDecoration: "none"
										},
										children: "Blog"
									}),
									/* @__PURE__ */ jsx("span", { children: "/" }),
									/* @__PURE__ */ jsx("span", {
										style: {
											color: isLight ? "#4F46E5" : "#60A5FA",
											fontWeight: 600
										},
										children: blog.category
									})
								]
							})]
						})
					}),
					/* @__PURE__ */ jsxs("header", {
						style: {
							padding: "16px 24px 32px",
							maxWidth: 960,
							margin: "0 auto"
						},
						children: [
							/* @__PURE__ */ jsxs("div", {
								style: {
									display: "flex",
									alignItems: "center",
									gap: 12,
									flexWrap: "wrap",
									marginBottom: 20
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
										children: blog.category
									}),
									/* @__PURE__ */ jsxs("span", {
										style: {
											display: "inline-flex",
											alignItems: "center",
											gap: 6,
											fontSize: 14,
											color: isLight ? "#64748B" : "#A1A1AA"
										},
										children: [/* @__PURE__ */ jsx(Calendar, { size: 14 }), formatBlogDate(blog.published_at || blog.created_at)]
									}),
									blog.read_time && /* @__PURE__ */ jsxs("span", {
										style: {
											display: "inline-flex",
											alignItems: "center",
											gap: 6,
											fontSize: 14,
											color: isLight ? "#64748B" : "#A1A1AA"
										},
										children: [/* @__PURE__ */ jsx(Clock, { size: 14 }), blog.read_time]
									}),
									blog.views_count > 0 && /* @__PURE__ */ jsxs("span", {
										style: {
											display: "inline-flex",
											alignItems: "center",
											gap: 6,
											fontSize: 14,
											color: isLight ? "#64748B" : "#A1A1AA"
										},
										children: [
											/* @__PURE__ */ jsx(Eye, { size: 14 }),
											blog.views_count.toLocaleString(),
											" views"
										]
									})
								]
							}),
							/* @__PURE__ */ jsx("h1", {
								style: {
									fontSize: "clamp(32px, 5vw, 54px)",
									fontFamily: "var(--font-heading)",
									fontWeight: 800,
									color: isLight ? "#0F172A" : "#FFFFFF",
									lineHeight: 1.2,
									letterSpacing: "-0.02em",
									marginBottom: 24
								},
								children: blog.title
							}),
							blog.excerpt && /* @__PURE__ */ jsx("p", {
								style: {
									fontSize: "clamp(16px, 2vw, 20px)",
									lineHeight: 1.6,
									color: isLight ? "#475569" : "#A1A1AA",
									marginBottom: 32
								},
								children: blog.excerpt
							}),
							/* @__PURE__ */ jsxs("div", {
								style: {
									display: "flex",
									alignItems: "center",
									justifyContent: "space-between",
									flexWrap: "wrap",
									gap: 20,
									paddingTop: 20,
									paddingBottom: 24,
									borderTop: isLight ? "1px solid #E2E8F0" : "1px solid rgba(255, 255, 255, 0.08)",
									borderBottom: isLight ? "1px solid #E2E8F0" : "1px solid rgba(255, 255, 255, 0.08)"
								},
								children: [/* @__PURE__ */ jsxs("div", {
									style: {
										display: "flex",
										alignItems: "center",
										gap: 14
									},
									children: [/* @__PURE__ */ jsx("div", {
										style: {
											width: 44,
											height: 44,
											borderRadius: "50%",
											background: isLight ? "linear-gradient(135deg, #4F46E5, #06B6D4)" : "linear-gradient(135deg, #3B82F6, #10B981)",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											color: "#FFFFFF",
											fontSize: 16,
											fontWeight: 700
										},
										children: (blog.author_name || "Z")[0].toUpperCase()
									}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
										style: {
											color: isLight ? "#0F172A" : "#FFFFFF",
											fontWeight: 700,
											fontSize: 15
										},
										children: blog.author_name
									}), /* @__PURE__ */ jsx("div", {
										style: {
											color: isLight ? "#64748B" : "#71717A",
											fontSize: 13
										},
										children: "Engineering & Architecture Team"
									})] })]
								}), /* @__PURE__ */ jsx(BlogShareBar, {
									title: blog.title,
									isLight
								})]
							})
						]
					}),
					blog.featured_image ? /* @__PURE__ */ jsx("div", {
						style: {
							maxWidth: 1040,
							margin: "0 auto 48px",
							padding: "0 24px"
						},
						children: /* @__PURE__ */ jsx("div", {
							style: {
								width: "100%",
								maxHeight: 520,
								borderRadius: 20,
								overflow: "hidden",
								border: isLight ? "1px solid #E2E8F0" : "1px solid rgba(255, 255, 255, 0.08)",
								boxShadow: isLight ? "0 16px 40px -16px rgba(0, 0, 0, 0.08)" : "0 20px 48px -16px rgba(0, 0, 0, 0.6)"
							},
							children: /* @__PURE__ */ jsx("img", {
								src: blog.featured_image,
								alt: blog.title,
								style: {
									width: "100%",
									height: "auto",
									maxHeight: 520,
									objectFit: "cover",
									display: "block"
								}
							})
						})
					}) : /* @__PURE__ */ jsx("div", {
						style: {
							maxWidth: 1040,
							margin: "0 auto 48px",
							padding: "0 24px"
						},
						children: /* @__PURE__ */ jsx("div", {
							style: {
								height: 240,
								borderRadius: 20,
								background: isLight ? "linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%)" : "linear-gradient(135deg, #18181b 0%, #09090b 100%)",
								border: isLight ? "1px solid #E2E8F0" : "1px solid rgba(255, 255, 255, 0.08)",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								color: isLight ? "#4F46E5" : "#60A5FA"
							},
							children: /* @__PURE__ */ jsx(Sparkles, {
								size: 40,
								style: { opacity: .6 }
							})
						})
					}),
					/* @__PURE__ */ jsxs("article", {
						style: {
							maxWidth: 820,
							margin: "0 auto",
							padding: "0 24px 80px"
						},
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "zytrixon-article-content",
								dangerouslySetInnerHTML: { __html: blog.content }
							}),
							/* @__PURE__ */ jsxs("div", {
								style: {
									marginTop: 64,
									paddingTop: 32,
									borderTop: isLight ? "1px solid #E2E8F0" : "1px solid rgba(255, 255, 255, 0.08)",
									display: "flex",
									alignItems: "center",
									justifyContent: "space-between",
									flexWrap: "wrap",
									gap: 16
								},
								children: [/* @__PURE__ */ jsxs("div", {
									style: {
										display: "flex",
										alignItems: "center",
										gap: 8,
										flexWrap: "wrap"
									},
									children: [
										/* @__PURE__ */ jsx(Tag, {
											size: 16,
											color: isLight ? "#64748B" : "#71717A"
										}),
										/* @__PURE__ */ jsxs("span", {
											style: {
												fontSize: 13,
												padding: "5px 12px",
												borderRadius: 6,
												background: isLight ? "#F1F5F9" : "rgba(255, 255, 255, 0.05)",
												color: isLight ? "#475569" : "#A1A1AA",
												border: isLight ? "1px solid #E2E8F0" : "1px solid rgba(255, 255, 255, 0.08)"
											},
											children: ["#", blog.category.toLowerCase().replace(/\s+/g, "-")]
										}),
										/* @__PURE__ */ jsx("span", {
											style: {
												fontSize: 13,
												padding: "5px 12px",
												borderRadius: 6,
												background: isLight ? "#F1F5F9" : "rgba(255, 255, 255, 0.05)",
												color: isLight ? "#475569" : "#A1A1AA",
												border: isLight ? "1px solid #E2E8F0" : "1px solid rgba(255, 255, 255, 0.08)"
											},
											children: "#engineering"
										}),
										/* @__PURE__ */ jsx("span", {
											style: {
												fontSize: 13,
												padding: "5px 12px",
												borderRadius: 6,
												background: isLight ? "#F1F5F9" : "rgba(255, 255, 255, 0.05)",
												color: isLight ? "#475569" : "#A1A1AA",
												border: isLight ? "1px solid #E2E8F0" : "1px solid rgba(255, 255, 255, 0.08)"
											},
											children: "#zytrixon"
										})
									]
								}), /* @__PURE__ */ jsx(BlogShareBar, {
									title: blog.title,
									isLight
								})]
							}),
							/* @__PURE__ */ jsx(BlogAuthorBox, {
								authorName: blog.author_name,
								isLight
							})
						]
					}),
					relatedBlogs.length > 0 && /* @__PURE__ */ jsx("section", {
						style: {
							padding: "80px 24px",
							background: isLight ? "#FFFFFF" : "#0B0B0F",
							borderTop: isLight ? "1px solid #E2E8F0" : "1px solid rgba(255, 255, 255, 0.06)"
						},
						children: /* @__PURE__ */ jsxs("div", {
							style: {
								maxWidth: 1240,
								margin: "0 auto"
							},
							children: [/* @__PURE__ */ jsxs("div", {
								style: {
									display: "flex",
									alignItems: "center",
									justifyContent: "space-between",
									marginBottom: 40,
									flexWrap: "wrap",
									gap: 16
								},
								children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("h2", {
									style: {
										fontSize: "clamp(24px, 3.5vw, 36px)",
										fontFamily: "var(--font-heading)",
										fontWeight: 800,
										color: isLight ? "#0F172A" : "#FFFFFF",
										letterSpacing: "-0.02em",
										marginBottom: 6
									},
									children: ["Related Articles in ", blog.category]
								}), /* @__PURE__ */ jsx("p", {
									style: {
										fontSize: 14,
										color: isLight ? "#64748B" : "#A1A1AA",
										margin: 0
									},
									children: "Continue exploring technical insights from our engineering knowledge base."
								})] }), /* @__PURE__ */ jsxs(Link, {
									href: "/blog",
									style: {
										display: "inline-flex",
										alignItems: "center",
										gap: 6,
										color: isLight ? "#4F46E5" : "#60A5FA",
										fontSize: 14,
										fontWeight: 700,
										textDecoration: "none"
									},
									children: ["View All Articles", /* @__PURE__ */ jsx(ArrowRight, { size: 15 })]
								})]
							}), /* @__PURE__ */ jsx("div", {
								style: {
									display: "grid",
									gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
									gap: 32
								},
								children: relatedBlogs.map((rel) => /* @__PURE__ */ jsx(BlogCard, {
									post: rel,
									isLight
								}, rel.id))
							})]
						})
					}),
					/* @__PURE__ */ jsx(FooterCTA, {})
				]
			}),
			/* @__PURE__ */ jsx(Footer, {}),
			/* @__PURE__ */ jsx(BlogProseStyles, { isLight })
		]
	});
}
function BlogDetails(props) {
	return /* @__PURE__ */ jsxs(ThemeProvider, { children: [/* @__PURE__ */ jsxs(Head, { children: [/* @__PURE__ */ jsx("title", { children: props.seo?.title || `${props.blog.title} | Zytrixon Tech Blog` }), /* @__PURE__ */ jsx("meta", {
		name: "description",
		content: props.seo?.description || props.blog.excerpt || "Read this in-depth engineering article on the Zytrixon Tech Blog."
	})] }), /* @__PURE__ */ jsx(BlogDetailsContent, { ...props })] });
}
BlogDetails.layout = null;
//#endregion
export { BlogDetails as default };

//# sourceMappingURL=BlogDetails-CcXea5SY.js.map