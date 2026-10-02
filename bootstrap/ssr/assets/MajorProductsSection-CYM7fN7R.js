import { a as useTheme } from "./custom-cursor-B2HeUCYC.js";
import { Link } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//#region resources/js/components/major-products/ProductCard.tsx
function ProductCard({ id, title, description, badge, image, accentColor, liveUrl, inquiryMessage = "Hi Zytrixon, I would like to know more about this product.", platformBadges }) {
	const { theme } = useTheme();
	const isLight = theme === "light";
	const [imageError, setImageError] = useState(false);
	const waLink = `https://wa.me/917049711475?text=${encodeURIComponent(inquiryMessage)}`;
	const demoHref = liveUrl || waLink;
	return /* @__PURE__ */ jsxs("div", {
		className: "product-card",
		style: {
			position: "relative",
			display: "flex",
			flexDirection: "column",
			borderRadius: "16px",
			background: "var(--zy-card-bg)",
			border: "1px solid var(--zy-border-subtle)",
			padding: "12px 12px 14px",
			overflow: "hidden",
			transition: "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.35s ease, box-shadow 0.35s ease",
			backdropFilter: "blur(12px)"
		},
		children: [/* @__PURE__ */ jsxs(Link, {
			href: `/products/${id}`,
			className: "product-thumb-wrapper",
			style: {
				position: "relative",
				width: "100%",
				aspectRatio: "2.14 / 1",
				borderRadius: "10px",
				overflow: "hidden",
				background: isLight ? "#f8fafc" : "var(--zy-surface-1)",
				border: "1px solid var(--zy-border-subtle)",
				marginBottom: "10px",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				textDecoration: "none"
			},
			children: [platformBadges && platformBadges.length > 0 && /* @__PURE__ */ jsxs("div", {
				style: {
					position: "absolute",
					top: "8px",
					left: "8px",
					background: "rgba(15, 23, 42, 0.88)",
					backdropFilter: "blur(8px)",
					border: `1px solid ${accentColor}88`,
					color: "#38BDF8",
					fontSize: "9.5px",
					fontWeight: 800,
					padding: "3px 8px",
					borderRadius: "6px",
					display: "flex",
					alignItems: "center",
					gap: "5px",
					zIndex: 2,
					letterSpacing: "0.04em",
					boxShadow: "0 4px 12px rgba(0,0,0,0.35)"
				},
				children: [
					/* @__PURE__ */ jsx("span", { children: "📱 2 Apps" }),
					/* @__PURE__ */ jsx("span", {
						style: { opacity: .5 },
						children: "+"
					}),
					/* @__PURE__ */ jsx("span", { children: "🖥️ Web" })
				]
			}), !imageError && image ? /* @__PURE__ */ jsx("img", {
				src: image,
				alt: title,
				onError: () => setImageError(true),
				className: "product-card-img",
				style: {
					width: "100%",
					height: "100%",
					objectFit: "contain",
					objectPosition: "center",
					display: "block",
					transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), filter 0.35s ease"
				}
			}) : /* @__PURE__ */ jsxs("div", {
				style: {
					width: "100%",
					height: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					background: isLight ? "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)" : "linear-gradient(135deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.06) 100%)",
					color: "var(--zy-text-secondary)",
					gap: "8px",
					padding: "12px"
				},
				children: [/* @__PURE__ */ jsx("span", {
					style: { fontSize: "18px" },
					children: "📷"
				}), /* @__PURE__ */ jsx("span", {
					style: {
						fontSize: "11px",
						fontWeight: 600,
						letterSpacing: "0.04em",
						textTransform: "uppercase",
						color: "var(--zy-text-secondary)"
					},
					children: "Product Image Area"
				})]
			})]
		}), /* @__PURE__ */ jsxs("div", {
			style: {
				display: "flex",
				flexDirection: "column",
				flexGrow: 1
			},
			children: [
				/* @__PURE__ */ jsxs("div", {
					style: {
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						gap: "8px",
						marginBottom: "6px"
					},
					children: [/* @__PURE__ */ jsx(Link, {
						href: `/products/${id}`,
						style: {
							fontFamily: "var(--font-heading)",
							fontSize: "17px",
							fontWeight: 800,
							color: "var(--zy-text-primary)",
							lineHeight: 1.2,
							letterSpacing: "-0.01em",
							margin: 0,
							textDecoration: "none"
						},
						children: title
					}), /* @__PURE__ */ jsxs("span", {
						style: {
							display: "inline-flex",
							alignItems: "center",
							gap: "5px",
							padding: "2px 8px",
							borderRadius: "12px",
							fontSize: "10px",
							fontWeight: 700,
							letterSpacing: "0.04em",
							textTransform: "uppercase",
							background: isLight ? "rgba(0,0,0,0.04)" : "var(--zy-surface-2)",
							border: "1px solid var(--zy-border-subtle)",
							color: "var(--zy-text-primary)",
							whiteSpace: "nowrap"
						},
						children: [/* @__PURE__ */ jsx("span", { style: {
							width: "5px",
							height: "5px",
							borderRadius: "50%",
							background: accentColor,
							boxShadow: `0 0 6px ${accentColor}`
						} }), badge]
					})]
				}),
				/* @__PURE__ */ jsx("p", {
					style: {
						fontSize: "12.5px",
						color: "var(--zy-text-secondary)",
						lineHeight: 1.45,
						display: "-webkit-box",
						WebkitLineClamp: 2,
						WebkitBoxOrient: "vertical",
						overflow: "hidden",
						marginBottom: "8px"
					},
					children: description
				}),
				platformBadges && platformBadges.length > 0 && /* @__PURE__ */ jsx("div", {
					style: {
						display: "flex",
						flexWrap: "wrap",
						gap: "4px",
						marginBottom: "10px"
					},
					children: platformBadges.map((pb, i) => /* @__PURE__ */ jsx("span", {
						style: {
							fontSize: "9.5px",
							fontWeight: 700,
							padding: "2px 7px",
							borderRadius: "5px",
							background: isLight ? "rgba(0,0,0,0.04)" : "var(--zy-surface-2)",
							border: "1px solid var(--zy-border-subtle)",
							color: "var(--zy-text-primary)",
							letterSpacing: "0.02em"
						},
						children: pb
					}, i))
				}),
				/* @__PURE__ */ jsxs("div", {
					style: {
						marginTop: "auto",
						paddingTop: "8px",
						borderTop: "1px solid var(--zy-border-subtle)",
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						gap: "8px"
					},
					children: [/* @__PURE__ */ jsxs(Link, {
						href: `/products/${id}`,
						className: "product-demo-btn",
						style: {
							display: "inline-flex",
							alignItems: "center",
							gap: "5px",
							padding: "6px 14px",
							borderRadius: "20px",
							background: "var(--zy-surface-2)",
							border: "1px solid var(--zy-border-subtle)",
							color: "var(--zy-text-primary)",
							fontSize: "11.5px",
							fontWeight: 600,
							textDecoration: "none",
							transition: "all 0.25s ease"
						},
						children: [/* @__PURE__ */ jsx("span", { children: "View Details" }), /* @__PURE__ */ jsxs("svg", {
							width: "11",
							height: "11",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: "2.5",
							strokeLinecap: "round",
							strokeLinejoin: "round",
							children: [/* @__PURE__ */ jsx("line", {
								x1: "5",
								y1: "12",
								x2: "19",
								y2: "12"
							}), /* @__PURE__ */ jsx("polyline", { points: "12 5 19 12 12 19" })]
						})]
					}), /* @__PURE__ */ jsx("a", {
						href: demoHref,
						target: "_blank",
						rel: "noopener noreferrer",
						style: {
							fontSize: "11.5px",
							fontWeight: 600,
							color: "var(--zy-text-secondary)",
							textDecoration: "none",
							transition: "color 0.2s ease"
						},
						children: "Live Demo ↗"
					})]
				})
			]
		})]
	});
}
//#endregion
//#region resources/js/components/major-products/MajorProductsSection.tsx
gsap.registerPlugin(ScrollTrigger);
function MajorProductsSection({ hideHeader = false, title = "Our Major Products", subtitle = "Production-ready proprietary platforms engineered from the ground up for high-scale enterprise operations.", limit, showViewAll, viewAllHref = "/portfolio#major-products", viewAllText = "View All Products" }) {
	const sectionRef = useRef(null);
	const gridRef = useRef(null);
	const products = [
		{
			id: "mobile-crm",
			title: "Mobile CRM",
			description: "Dual-track IMEI & accessory inventory, 3-second POS with dynamic UPI QR, supplier udhar ledgers, and automated staff payroll.",
			badge: "Next-Gen Retail ERP & POS",
			image: "/assets/products/mobile-crm/Screenshot 2026-09-26 162520.png",
			accentColor: "#0EA5E9",
			inquiryMessage: "Hi Zytrixon, I would like to schedule a demo for the Mobile CRM product."
		},
		{
			id: "grocery-mart",
			title: "Grocery Mart",
			description: "Multi-Platform Quick-Commerce: Customer App (10-min delivery), Dark-Store Picker App & Web Management Suite (Master Catalog & Store Margins).",
			badge: "📱 2 Apps + 🖥️ Web",
			image: "/assets/products/grocery-mart/Screenshot 2026-09-26 182031.png",
			accentColor: "#207393",
			inquiryMessage: "Hi Zytrixon, I would like to schedule a demo for the Grocery Mart platform.",
			platformBadges: [
				"🛒 Customer App",
				"🛵 Picker App",
				"🖥️ Web Panel"
			]
		},
		{
			id: "grain-saas",
			title: "Grain SaaS",
			description: "Lot-wise inventory control, automated broker commissions, and live double-entry party ledgers built for agricultural wholesale merchants.",
			badge: "Grain Trading & Mandi OS",
			image: "/assets/products/grain-saas/grain-saas-dashboard.png",
			accentColor: "#D4A373",
			inquiryMessage: "Hi Zytrixon, I would like to schedule a demo for the Grain SaaS platform."
		},
		{
			id: "review-booster",
			title: "ReviewBooster",
			description: "Physical QR & NFC counter standees + context-aware Smart AI review assistant. Collect genuine 5-star Google reviews in 15 seconds.",
			badge: "Smart AI & QR Review OS",
			image: "/assets/products/review-booster/review-booster-hero.png",
			accentColor: "#059669",
			liveUrl: "https://aireview.zytrixon.com/",
			inquiryMessage: "Hi ReviewBooster, I want to know more about the QR Review System and Acrylic Standees.",
			platformBadges: [
				"⭐ Smart AI Engine",
				"🪧 Acrylic Standees",
				"🛡️ Private Shield"
			]
		}
	];
	const visibleProducts = typeof limit === "number" ? products.slice(0, limit) : products;
	useEffect(() => {
		if (!sectionRef.current || !gridRef.current) return;
		const cards = gridRef.current.querySelectorAll(".product-card");
		const ctx = gsap.context(() => {
			gsap.fromTo(cards, {
				opacity: 0,
				y: 35
			}, {
				opacity: 1,
				y: 0,
				duration: .65,
				stagger: .15,
				ease: "power3.out",
				scrollTrigger: {
					trigger: gridRef.current,
					start: "top 88%",
					once: true
				}
			});
		}, sectionRef);
		return () => ctx.revert();
	}, [visibleProducts.length]);
	return /* @__PURE__ */ jsxs("section", {
		ref: sectionRef,
		id: "major-products",
		className: "zy-section major-products-section",
		style: {
			position: "relative",
			background: "var(--zy-bg)",
			padding: "80px 0",
			overflow: "hidden"
		},
		children: [
			!hideHeader && /* @__PURE__ */ jsxs("div", {
				className: "zy-section-header",
				style: {
					textAlign: "center",
					maxWidth: "800px",
					margin: "0 auto 48px",
					padding: "0 20px"
				},
				children: [/* @__PURE__ */ jsx("h2", {
					className: "zy-section-title",
					style: {
						fontFamily: "var(--font-heading)",
						fontSize: "clamp(28px, 4vw, 44px)",
						fontWeight: 800,
						lineHeight: 1.15,
						letterSpacing: "-0.02em",
						color: "var(--zy-text-primary)",
						marginBottom: "14px"
					},
					children: title
				}), /* @__PURE__ */ jsx("p", {
					className: "zy-section-subtitle",
					style: {
						fontSize: "clamp(13.5px, 1.6vw, 15px)",
						color: "var(--zy-text-secondary)",
						lineHeight: 1.5,
						margin: "0 auto"
					},
					children: subtitle
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				ref: gridRef,
				className: "major-products-grid",
				style: {
					maxWidth: "1280px",
					margin: "0 auto",
					padding: "0 20px",
					alignItems: "stretch"
				},
				children: visibleProducts.map((p) => /* @__PURE__ */ jsx(ProductCard, { ...p }, p.id))
			}),
			(showViewAll ?? Boolean(limit && products.length > limit)) && /* @__PURE__ */ jsx("div", {
				style: {
					textAlign: "center",
					marginTop: "54px"
				},
				children: /* @__PURE__ */ jsxs(Link, {
					href: viewAllHref,
					className: "magnetic-btn",
					style: {
						display: "inline-flex",
						alignItems: "center",
						gap: "12px",
						padding: "16px 36px",
						fontSize: "13.5px",
						fontWeight: 700,
						letterSpacing: "0.06em",
						textTransform: "uppercase"
					},
					children: [/* @__PURE__ */ jsx("span", { children: viewAllText }), /* @__PURE__ */ jsx("svg", {
						className: "btn-arrow",
						width: "16",
						height: "16",
						viewBox: "0 0 24 24",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "2.5",
						strokeLinecap: "round",
						strokeLinejoin: "round",
						children: /* @__PURE__ */ jsx("path", { d: "M5 12h14M12 5l7 7-7 7" })
					})]
				})
			}),
			/* @__PURE__ */ jsx("style", { children: `
                .major-products-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 24px;
                }

                @media (max-width: 1024px) {
                    .major-products-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                        gap: 22px !important;
                    }
                }

                @media (max-width: 680px) {
                    .major-products-grid {
                        grid-template-columns: 1fr !important;
                        gap: 20px !important;
                    }
                }

                .product-card {
                    will-change: transform, box-shadow;
                }

                .product-card:hover {
                    transform: translateY(-6px);
                    border-color: var(--zy-border-hover) !important;
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.28) !important;
                }

                .product-card:hover .product-card-img {
                    transform: scale(1.04);
                }

                .product-demo-btn:hover {
                    background: var(--zy-text-primary) !important;
                    color: var(--zy-bg) !important;
                    border-color: var(--zy-text-primary) !important;
                }
            ` })
		]
	});
}
//#endregion
export { MajorProductsSection as t };

//# sourceMappingURL=MajorProductsSection-CYM7fN7R.js.map