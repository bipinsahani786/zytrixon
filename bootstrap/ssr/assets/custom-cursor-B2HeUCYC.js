import { t as Logo } from "./logo-BcYw_ZRA.js";
import { Link, usePage } from "@inertiajs/react";
import { Suspense, createContext, lazy, useContext, useEffect, useRef, useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
import gsap from "gsap";
//#region resources/js/components/landing/global-watermark.tsx
function GlobalWatermark() {
	const { theme } = useTheme();
	const isLight = theme === "light";
	return /* @__PURE__ */ jsxs("div", {
		"aria-hidden": "true",
		style: {
			position: "fixed",
			inset: 0,
			pointerEvents: "none",
			zIndex: 0,
			overflow: "hidden",
			display: "flex",
			alignItems: "center",
			justifyContent: "center"
		},
		children: [/* @__PURE__ */ jsx("div", {
			style: {
				position: "absolute",
				left: "-10%",
				top: "50%",
				transform: "translateY(-50%) rotate(-90deg)",
				fontFamily: "var(--font-heading)",
				fontSize: "clamp(80px, 15vw, 200px)",
				fontWeight: 900,
				color: isLight ? "rgba(0,0,0,0.015)" : "rgba(255,255,255,0.015)",
				lineHeight: 1,
				userSelect: "none",
				letterSpacing: "0.2em"
			},
			children: "ZYTRIXON"
		}), /* @__PURE__ */ jsxs("div", {
			style: {
				position: "absolute",
				top: "5%",
				left: "-5%",
				width: "110%",
				fontFamily: "var(--font-heading)",
				fontSize: "clamp(40px, 8vw, 120px)",
				fontWeight: 900,
				color: isLight ? "rgba(0,0,0,0.015)" : "rgba(255,255,255,0.015)",
				lineHeight: 1,
				userSelect: "none",
				pointerEvents: "none",
				letterSpacing: "0.2em",
				whiteSpace: "nowrap",
				display: "flex",
				justifyContent: "space-between",
				transform: "rotate(-2deg)"
			},
			children: [
				/* @__PURE__ */ jsx("span", { children: "ZYTRIXON" }),
				/* @__PURE__ */ jsx("span", { children: "ZYTRIXON" }),
				/* @__PURE__ */ jsx("span", { children: "ZYTRIXON" }),
				/* @__PURE__ */ jsx("span", { children: "ZYTRIXON" }),
				/* @__PURE__ */ jsx("span", { children: "ZYTRIXON" })
			]
		})]
	});
}
//#endregion
//#region resources/js/components/landing/theme-provider.tsx
var LazyFloatingButtons = lazy(() => import("./whatsapp-float-DrYWXU_u.js"));
var ThemeContext = createContext({
	theme: "dark",
	toggleTheme: () => {}
});
function useTheme() {
	return useContext(ThemeContext);
}
function ThemeProvider({ children }) {
	const [theme, setTheme] = useState(() => {
		if (typeof window !== "undefined") return localStorage.getItem("zy-theme") || "dark";
		return "dark";
	});
	useEffect(() => {
		document.body.classList.toggle("light", theme === "light");
		localStorage.setItem("zy-theme", theme);
	}, [theme]);
	const toggleTheme = () => setTheme((t) => t === "dark" ? "light" : "dark");
	return /* @__PURE__ */ jsxs(ThemeContext.Provider, {
		value: {
			theme,
			toggleTheme
		},
		children: [
			/* @__PURE__ */ jsx(GlobalWatermark, {}),
			/* @__PURE__ */ jsx(Suspense, {
				fallback: null,
				children: /* @__PURE__ */ jsx(LazyFloatingButtons, {})
			}),
			children
		]
	});
}
//#endregion
//#region resources/js/components/landing/navbar.tsx
var NAV_LINKS = [
	{
		label: "HOME",
		href: "/"
	},
	{
		label: "SERVICES",
		href: "/services"
	},
	{
		label: "WORK",
		href: "/portfolio"
	},
	{
		label: "ABOUT",
		href: "/about"
	},
	{
		label: "TEAM",
		href: "/team"
	},
	{
		label: "BLOG",
		href: "/blog"
	},
	{
		label: "CONTACT",
		href: "/contact"
	}
];
function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);
	const [mounted, setMounted] = useState(false);
	const navRef = useRef(null);
	const { theme, toggleTheme } = useTheme();
	const { url } = usePage();
	const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
	useEffect(() => {
		setMounted(true);
		const handleScroll = () => {
			setScrolled(window.scrollY > 60);
		};
		window.addEventListener("scroll", handleScroll, { passive: true });
		gsap.fromTo(navRef.current, {
			y: -80,
			opacity: 0
		}, {
			y: 0,
			opacity: 1,
			duration: .8,
			ease: "power3.out"
		});
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	useEffect(() => {
		if (mobileOpen) document.body.style.overflow = "hidden";
		else document.body.style.overflow = "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [mobileOpen]);
	useEffect(() => {
		const handleClickOutside = (e) => {
			if (servicesDropdownOpen && navRef.current && !navRef.current.contains(e.target)) setServicesDropdownOpen(false);
		};
		document.addEventListener("touchstart", handleClickOutside);
		return () => document.removeEventListener("touchstart", handleClickOutside);
	}, [servicesDropdownOpen]);
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsxs("nav", {
		ref: navRef,
		className: `navbar ${scrolled ? "scrolled" : ""} ${mobileOpen ? "menu-open" : ""}`,
		style: { opacity: 0 },
		children: [
			/* @__PURE__ */ jsx(Link, {
				href: "/",
				className: "navbar-logo",
				"aria-label": "Zytrixon Home",
				style: {
					display: "flex",
					alignItems: "center"
				},
				children: /* @__PURE__ */ jsx(Logo, { className: "h-[56px] w-auto text-[var(--zy-white)]" })
			}),
			/* @__PURE__ */ jsx("ul", {
				className: "navbar-links",
				children: NAV_LINKS.map((link) => {
					if (link.label === "SERVICES") {
						const isServicesActive = url.startsWith("/services");
						return /* @__PURE__ */ jsxs("li", {
							className: "nav-dropdown-wrapper",
							style: { position: "relative" },
							onMouseEnter: () => setServicesDropdownOpen(true),
							onMouseLeave: () => setServicesDropdownOpen(false),
							children: [
								/* @__PURE__ */ jsxs(Link, {
									href: link.href,
									className: `navbar-link ${isServicesActive ? "active" : ""}`,
									style: {
										display: "inline-flex",
										alignItems: "center",
										gap: 4,
										color: isServicesActive ? "var(--zy-blue)" : void 0
									},
									onClick: (e) => {
										if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) {
											if (!servicesDropdownOpen) {
												e.preventDefault();
												setServicesDropdownOpen(true);
											}
										}
									},
									children: [link.label, /* @__PURE__ */ jsx("svg", {
										width: "12",
										height: "12",
										viewBox: "0 0 24 24",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "2",
										strokeLinecap: "round",
										strokeLinejoin: "round",
										style: {
											transform: servicesDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
											transition: "transform 0.3s"
										},
										children: /* @__PURE__ */ jsx("polyline", { points: "6 9 12 15 18 9" })
									})]
								}),
								/* @__PURE__ */ jsx("div", {
									className: "nav-dropdown-content",
									style: {
										position: "absolute",
										top: "100%",
										left: "50%",
										transform: "translateX(-50%)",
										width: 260,
										background: "var(--zy-gray-card)",
										borderRadius: 12,
										border: "1px solid var(--zy-gray-border)",
										padding: 16,
										display: "flex",
										flexDirection: "column",
										gap: 8,
										marginTop: servicesDropdownOpen ? 8 : 16,
										opacity: servicesDropdownOpen ? 1 : 0,
										visibility: servicesDropdownOpen ? "visible" : "hidden",
										transition: "all 0.3s ease",
										boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
										zIndex: 100
									},
									children: [
										{
											title: "Web Development",
											slug: "web-development"
										},
										{
											title: "App Development",
											slug: "app-development"
										},
										{
											title: "IoT Solutions",
											slug: "iot-solutions"
										},
										{
											title: "AI & Automation",
											slug: "ai-automation"
										},
										{
											title: "Custom Software",
											slug: "custom-software"
										},
										{
											title: "Digital Marketing",
											slug: "seo-digital-marketing"
										}
									].map((svc) => /* @__PURE__ */ jsx(Link, {
										href: `/services/${svc.slug}`,
										style: {
											padding: "12px 16px",
											borderRadius: 8,
											color: "var(--zy-white)",
											textDecoration: "none",
											fontSize: 14,
											fontWeight: 600,
											transition: "all 0.2s",
											background: "transparent"
										},
										onMouseEnter: (e) => {
											e.currentTarget.style.background = "var(--zy-gray-dark)";
											e.currentTarget.style.color = "var(--zy-blue)";
										},
										onMouseLeave: (e) => {
											e.currentTarget.style.background = "transparent";
											e.currentTarget.style.color = "var(--zy-white)";
										},
										onClick: () => setServicesDropdownOpen(false),
										children: svc.title
									}, svc.slug))
								}),
								/* @__PURE__ */ jsx("style", { children: `
                                        @media (hover: hover) and (pointer: fine) {
                                            .nav-dropdown-wrapper:hover .nav-dropdown-content {
                                                opacity: 1 !important;
                                                visibility: visible !important;
                                                margin-top: 8px !important;
                                            }
                                            .nav-dropdown-wrapper:hover svg {
                                                transform: rotate(180deg) !important;
                                            }
                                        }
                                    ` })
							]
						}, link.href);
					}
					const isActive = url === link.href || link.href !== "/" && url.startsWith(link.href);
					return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
						href: link.href,
						className: `navbar-link ${isActive ? "active" : ""}`,
						style: isActive ? { color: "var(--zy-blue)" } : {},
						children: link.label
					}) }, link.href);
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "header-actions",
				style: {
					display: "flex",
					alignItems: "center",
					gap: 16
				},
				children: [
					/* @__PURE__ */ jsx("button", {
						onClick: toggleTheme,
						"aria-label": "Toggle theme",
						className: "theme-toggle-btn",
						style: {
							background: "none",
							border: "1px solid var(--zy-gray-border)",
							width: 38,
							height: 38,
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							color: "var(--zy-white)",
							cursor: "pointer",
							transition: "all 0.3s var(--zy-ease)"
						},
						children: !mounted || theme === "dark" ? /* @__PURE__ */ jsxs("svg", {
							width: "16",
							height: "16",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: "2",
							children: [
								/* @__PURE__ */ jsx("circle", {
									cx: "12",
									cy: "12",
									r: "5"
								}),
								/* @__PURE__ */ jsx("line", {
									x1: "12",
									y1: "1",
									x2: "12",
									y2: "3"
								}),
								/* @__PURE__ */ jsx("line", {
									x1: "12",
									y1: "21",
									x2: "12",
									y2: "23"
								}),
								/* @__PURE__ */ jsx("line", {
									x1: "4.22",
									y1: "4.22",
									x2: "5.64",
									y2: "5.64"
								}),
								/* @__PURE__ */ jsx("line", {
									x1: "18.36",
									y1: "18.36",
									x2: "19.78",
									y2: "19.78"
								}),
								/* @__PURE__ */ jsx("line", {
									x1: "1",
									y1: "12",
									x2: "3",
									y2: "12"
								}),
								/* @__PURE__ */ jsx("line", {
									x1: "21",
									y1: "12",
									x2: "23",
									y2: "12"
								}),
								/* @__PURE__ */ jsx("line", {
									x1: "4.22",
									y1: "19.78",
									x2: "5.64",
									y2: "18.36"
								}),
								/* @__PURE__ */ jsx("line", {
									x1: "18.36",
									y1: "5.64",
									x2: "19.78",
									y2: "4.22"
								})
							]
						}) : /* @__PURE__ */ jsx("svg", {
							width: "16",
							height: "16",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: "2",
							children: /* @__PURE__ */ jsx("path", { d: "M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" })
						})
					}),
					/* @__PURE__ */ jsx("a", {
						href: "tel:+917049711475",
						"aria-label": "Call us",
						className: "call-btn",
						style: {
							width: 38,
							height: 38,
							border: "1px solid var(--zy-gray-border)",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							color: "var(--zy-white)",
							textDecoration: "none",
							transition: "all 0.3s var(--zy-ease)"
						},
						children: /* @__PURE__ */ jsx("svg", {
							width: "16",
							height: "16",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: "2",
							children: /* @__PURE__ */ jsx("path", { d: "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" })
						})
					}),
					/* @__PURE__ */ jsxs(Link, {
						href: "/contact",
						className: "magnetic-btn",
						style: {
							padding: "10px 24px",
							fontSize: 12
						},
						children: ["Get a Quote", /* @__PURE__ */ jsx("svg", {
							className: "btn-arrow",
							width: "14",
							height: "14",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: "2.5",
							children: /* @__PURE__ */ jsx("path", { d: "M5 12h14M12 5l7 7-7 7" })
						})]
					})
				]
			}),
			/* @__PURE__ */ jsxs("button", {
				className: `mobile-nav-toggle ${mobileOpen ? "open" : ""}`,
				onClick: () => setMobileOpen(!mobileOpen),
				"aria-label": "Toggle navigation",
				children: [
					/* @__PURE__ */ jsx("span", {}),
					/* @__PURE__ */ jsx("span", {}),
					/* @__PURE__ */ jsx("span", {})
				]
			})
		]
	}), /* @__PURE__ */ jsxs("div", {
		className: `mobile-nav-panel ${mobileOpen ? "open" : ""}`,
		"data-lenis-prevent": "true",
		children: [/* @__PURE__ */ jsx("div", {
			className: "mobile-links-container",
			children: NAV_LINKS.map((link, idx) => {
				const isActive = url === link.href || link.href !== "/" && url.startsWith(link.href);
				return /* @__PURE__ */ jsxs(Link, {
					href: link.href,
					className: `mobile-nav-link ${isActive ? "active" : ""}`,
					style: isActive ? { color: "var(--zy-blue)" } : {},
					onClick: () => setMobileOpen(false),
					children: [/* @__PURE__ */ jsxs("span", {
						className: "link-num",
						children: [
							"0",
							idx + 1,
							"."
						]
					}), link.label]
				}, link.href);
			})
		}), /* @__PURE__ */ jsxs("div", {
			className: "mobile-nav-footer",
			children: [
				/* @__PURE__ */ jsx("button", {
					onClick: () => {
						toggleTheme();
					},
					style: {
						background: "none",
						border: "1px solid var(--zy-gray-border)",
						padding: "10px 24px",
						borderRadius: "30px",
						color: "var(--zy-white)",
						fontFamily: "var(--font-heading)",
						fontSize: 12,
						fontWeight: 600,
						letterSpacing: "0.1em",
						textTransform: "uppercase",
						cursor: "pointer",
						display: "flex",
						alignItems: "center",
						gap: 8,
						transition: "all 0.3s var(--zy-ease)"
					},
					children: !mounted || theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"
				}),
				/* @__PURE__ */ jsx(Link, {
					href: "/contact",
					className: "magnetic-btn",
					style: {
						borderRadius: "30px",
						padding: "14px 40px",
						fontSize: 13
					},
					onClick: () => setMobileOpen(false),
					children: "Get a Quote"
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mobile-footer-contacts",
					children: [/* @__PURE__ */ jsx("a", {
						href: "mailto:zytrixon@gmail.com",
						children: "zytrixon@gmail.com"
					}), /* @__PURE__ */ jsx("a", {
						href: "tel:+917049711475",
						children: "+91 70497 11475"
					})]
				})
			]
		})]
	})] });
}
//#endregion
//#region resources/js/components/landing/footer.tsx
var FOOTER_LINKS = {
	services: [
		{
			label: "Web Development",
			href: "/services/web-development"
		},
		{
			label: "App Development",
			href: "/services/app-development"
		},
		{
			label: "IoT Solutions",
			href: "/services/iot-solutions"
		},
		{
			label: "AI & Automation",
			href: "/services/ai-automation"
		},
		{
			label: "Custom Software",
			href: "/services/custom-software"
		},
		{
			label: "Digital Marketing",
			href: "/services/seo-digital-marketing"
		}
	],
	locations: [
		{
			label: "Web Development in Patna",
			href: "/services/web-development/in/patna"
		},
		{
			label: "App Development in Patna",
			href: "/services/app-development/in/patna"
		},
		{
			label: "AI & Automation in Patna",
			href: "/services/ai-automation/in/patna"
		},
		{
			label: "Digital Marketing in Patna",
			href: "/services/seo-digital-marketing/in/patna"
		},
		{
			label: "Custom Software in Bihar",
			href: "/services/custom-software/in/bihar"
		}
	],
	company: [
		{
			label: "About Us",
			href: "/about"
		},
		{
			label: "Our Process",
			href: "/process"
		},
		{
			label: "Portfolio",
			href: "/work"
		},
		{
			label: "Blog",
			href: "/blog"
		},
		{
			label: "Careers",
			href: "/careers"
		}
	],
	legal: [
		{
			label: "Privacy Policy",
			href: "/privacy-policy"
		},
		{
			label: "Terms of Service",
			href: "/terms-and-conditions"
		},
		{
			label: "Sitemap",
			href: "/sitemap.xml"
		}
	]
};
var SOCIALS = [
	{
		label: "Facebook",
		href: "https://www.facebook.com/share/1Jdf9MjT4H/",
		icon: /* @__PURE__ */ jsx("svg", {
			width: "18",
			height: "18",
			viewBox: "0 0 24 24",
			fill: "currentColor",
			children: /* @__PURE__ */ jsx("path", { d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" })
		})
	},
	{
		label: "Instagram",
		href: "https://www.instagram.com/zytrixontech_com?stkn=OHdydzVtN3VwYmJj",
		icon: /* @__PURE__ */ jsx("svg", {
			width: "18",
			height: "18",
			viewBox: "0 0 24 24",
			fill: "currentColor",
			children: /* @__PURE__ */ jsx("path", { d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" })
		})
	},
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/company/zytrixon/",
		icon: /* @__PURE__ */ jsx("svg", {
			width: "18",
			height: "18",
			viewBox: "0 0 24 24",
			fill: "currentColor",
			children: /* @__PURE__ */ jsx("path", { d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" })
		})
	}
];
function Footer() {
	return /* @__PURE__ */ jsxs("footer", {
		className: "site-footer",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "footer-grid",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "footer-col",
					children: [
						/* @__PURE__ */ jsx(Link, {
							href: "/",
							"aria-label": "Zytrixon Home",
							className: "mb-6 flex items-center",
							children: /* @__PURE__ */ jsx(Logo, { className: "h-[64px] w-auto text-[var(--zy-white)]" })
						}),
						/* @__PURE__ */ jsx("p", {
							style: {
								fontSize: "14px",
								color: "var(--zy-gray-text)",
								lineHeight: 1.7,
								maxWidth: "320px",
								marginBottom: "24px"
							},
							children: "Building robust software solutions for tomorrow's challenges. Enterprise-grade Web, Mobile, and IoT solutions from Patna, India."
						}),
						/* @__PURE__ */ jsx("div", {
							style: {
								display: "flex",
								gap: "12px"
							},
							children: SOCIALS.map((social) => /* @__PURE__ */ jsx("a", {
								href: social.href,
								"aria-label": social.label,
								target: social.href.startsWith("http") ? "_blank" : void 0,
								rel: social.href.startsWith("http") ? "noopener noreferrer" : void 0,
								className: "footer-social-btn",
								children: social.icon
							}, social.label))
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "footer-col",
					children: [/* @__PURE__ */ jsx("div", {
						className: "footer-heading",
						style: {
							fontWeight: 600,
							fontSize: 14,
							marginBottom: 16,
							color: "var(--zy-white)"
						},
						children: "Services"
					}), FOOTER_LINKS.services.map((link) => /* @__PURE__ */ jsx(Link, {
						href: link.href,
						className: "footer-link",
						children: link.label
					}, link.href))]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "footer-col",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "footer-heading",
							style: {
								fontWeight: 600,
								fontSize: 14,
								marginBottom: 16,
								color: "var(--zy-white)"
							},
							children: "Services in Patna"
						}),
						FOOTER_LINKS.locations.map((link) => /* @__PURE__ */ jsx(Link, {
							href: link.href,
							className: "footer-link",
							children: link.label
						}, link.href)),
						/* @__PURE__ */ jsx(Link, {
							href: "/locations",
							className: "footer-link footer-link-highlight",
							style: { marginTop: "4px" },
							children: "View All Locations →"
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "footer-col",
					children: [/* @__PURE__ */ jsx("div", {
						className: "footer-heading",
						style: {
							fontWeight: 600,
							fontSize: 14,
							marginBottom: 16,
							color: "var(--zy-white)"
						},
						children: "Company"
					}), FOOTER_LINKS.company.map((link) => /* @__PURE__ */ jsx(Link, {
						href: link.href,
						className: "footer-link",
						children: link.label
					}, link.href))]
				}),
				/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx("div", {
						className: "footer-heading",
						style: {
							fontWeight: 600,
							fontSize: 14,
							marginBottom: 16,
							color: "var(--zy-white)"
						},
						children: "Get in Touch"
					}),
					/* @__PURE__ */ jsx("a", {
						href: "mailto:zytrixon@gmail.com",
						className: "footer-link",
						children: "zytrixon@gmail.com"
					}),
					/* @__PURE__ */ jsxs("div", {
						style: {
							display: "flex",
							alignItems: "center",
							gap: "6px",
							flexWrap: "wrap",
							marginBottom: "12px"
						},
						children: [
							/* @__PURE__ */ jsx("a", {
								href: "tel:+917049711475",
								className: "footer-link",
								style: { marginBottom: 0 },
								children: "+91 70497 11475"
							}),
							/* @__PURE__ */ jsx("span", {
								style: {
									color: "var(--zy-gray-text)",
									fontSize: "13px"
								},
								children: "/"
							}),
							/* @__PURE__ */ jsx("a", {
								href: "tel:+919031985702",
								className: "footer-link",
								style: { marginBottom: 0 },
								children: "+91 90319 85702"
							})
						]
					}),
					/* @__PURE__ */ jsxs("p", {
						style: {
							fontSize: "14px",
							color: "var(--zy-gray-text)",
							lineHeight: 1.7,
							marginTop: "12px"
						},
						children: [
							"Patna, Bihar",
							/* @__PURE__ */ jsx("br", {}),
							"India 800001"
						]
					})
				] })
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "footer-bottom",
			children: [/* @__PURE__ */ jsxs("span", { children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" Zytrixon Tech. All rights reserved."
			] }), /* @__PURE__ */ jsx("div", {
				style: {
					display: "flex",
					gap: "24px",
					flexWrap: "wrap"
				},
				children: FOOTER_LINKS.legal.map((link) => link.href.endsWith(".xml") ? /* @__PURE__ */ jsx("a", {
					href: link.href,
					className: "footer-bottom-link",
					target: "_blank",
					rel: "noopener noreferrer",
					children: link.label
				}, link.href) : /* @__PURE__ */ jsx(Link, {
					href: link.href,
					className: "footer-bottom-link",
					children: link.label
				}, link.href))
			})]
		})]
	});
}
//#endregion
//#region resources/js/components/landing/custom-cursor.tsx
function CustomCursor() {
	return null;
}
//#endregion
export { useTheme as a, ThemeProvider as i, Footer as n, Navbar as r, CustomCursor as t };

//# sourceMappingURL=custom-cursor-B2HeUCYC.js.map