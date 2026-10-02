import { a as useTheme, i as ThemeProvider, n as Footer, r as Navbar, t as CustomCursor } from "./custom-cursor-B2HeUCYC.js";
import { t as SeoHead } from "./SeoHead-Fv09oBYU.js";
import { t as ContactSection } from "./contact-section-BAW46C7Q.js";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, Building2, Check, CheckCircle2, ChevronDown, ChevronUp, HelpCircle, MapPin, MessageCircle, Phone, ShieldCheck, Star, TrendingUp, Trophy, Users, Zap } from "lucide-react";
//#region resources/js/pages/ServiceSeoPage.tsx
var TECH_STACK = [
	{
		name: "React",
		category: "Frontend",
		color: "#61dafb"
	},
	{
		name: "Next.js",
		category: "Fullstack",
		color: "#3b82f6"
	},
	{
		name: "TypeScript",
		category: "Language",
		color: "#3178c6"
	},
	{
		name: "Laravel",
		category: "Backend",
		color: "#ff2d20"
	},
	{
		name: "Node.js",
		category: "Backend",
		color: "#68a063"
	},
	{
		name: "Tailwind CSS",
		category: "Styling",
		color: "#38bdf8"
	},
	{
		name: "Flutter",
		category: "Mobile",
		color: "#02569b"
	},
	{
		name: "PostgreSQL",
		category: "Database",
		color: "#336791"
	},
	{
		name: "AWS Cloud",
		category: "DevOps",
		color: "#ff9900"
	},
	{
		name: "Docker",
		category: "Container",
		color: "#2496ed"
	}
];
function ServiceSeoPage(props) {
	return /* @__PURE__ */ jsx(ThemeProvider, { children: /* @__PURE__ */ jsx(ServiceSeoPageContent, { ...props }) });
}
function ServiceSeoPageContent({ service, location, seo, hero_description, sections = [], template = "grid", caseStudies = [] }) {
	const { theme } = useTheme();
	const isLight = theme === "light";
	const locName = location?.name || "Patna";
	const locState = location?.state || "Bihar";
	const serviceTitle = service?.title || "Web & Software Development";
	const whyUs = sections.find((s) => s.type === "why_us");
	const localContext = sections.find((s) => s.type === "local_context");
	const processSection = sections.find((s) => s.type === "process");
	const faqSection = sections.find((s) => s.type === "faq");
	const customSections = sections.filter((s) => ![
		"why_us",
		"local_context",
		"process",
		"faq"
	].includes(s.type));
	const defaultWhyPoints = [
		`Local ${locName} & Bihar Engineering Team — Speak directly with developers, not call centers.`,
		"High-Performance Architecture — Fast loading on local 4G/5G mobile connections.",
		"Custom Code & Clean Standards — Zero bloated templates or sluggish pre-made themes.",
		"Transparent Fixed Pricing — Clear milestone deliverables with no surprise bills."
	];
	const whyPoints = whyUs?.points && whyUs.points.length > 0 ? whyUs.points : defaultWhyPoints;
	const defaultSteps = [
		{
			title: "1. Discovery & Local Audit",
			desc: `We analyze your ${locName} competitors, target customers, and business workflows.`
		},
		{
			title: "2. Prototyping & Modern UI",
			desc: "Crafting responsive, intuitive screens that reflect your brand identity."
		},
		{
			title: "3. Agile Engineering & QA",
			desc: "Lightweight code, mobile speed optimization, and search engine readiness."
		},
		{
			title: "4. Launch & Ongoing Support",
			desc: "Deployment with local Google indexing, analytics setup, and continuous support."
		}
	];
	const processSteps = processSection?.steps && processSection.steps.length > 0 ? processSection.steps : defaultSteps;
	const defaultFaqs = [
		{
			q: `What is the cost of ${serviceTitle} in ${locName}?`,
			a: `Our pricing is customized to your project scope. For local businesses in ${locName}, we offer transparent, fixed-price milestone billing with zero hidden costs.`
		},
		{
			q: `How long does it take to deliver a project?`,
			a: `Most standard projects are completed within 2 to 6 weeks, with regular milestone previews so you can test progress in real-time.`
		},
		{
			q: `Can we meet in-person or get direct support in ${locName}?`,
			a: `Yes! Our core team is based right here in Bihar. We are readily available for in-person meetings in ${locName} as well as instant phone and WhatsApp consultations.`
		},
		{
			q: `Do you provide post-launch maintenance and SEO?`,
			a: `Absolutely. Every project includes post-launch testing, local Google search indexing, and ongoing maintenance SLA options to keep your platform fast and secure.`
		}
	];
	const faqs = faqSection?.items && faqSection.items.length > 0 ? faqSection.items : defaultFaqs;
	const [openFaq, setOpenFaq] = useState(0);
	const whatsappUrl = `https://wa.me/917049711475?text=${encodeURIComponent(`Hi Zytrixon team! I am interested in ${serviceTitle} services in ${locName}. Can we discuss details?`)}`;
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [
		/* @__PURE__ */ jsx(SeoHead, {
			seo,
			service,
			location
		}),
		/* @__PURE__ */ jsx(CustomCursor, {}),
		/* @__PURE__ */ jsx(Navbar, {}),
		/* @__PURE__ */ jsxs("div", {
			className: `min-h-screen transition-colors duration-300 ${isLight ? "bg-[#ffffff] text-[#0f172a] selection:bg-slate-900 selection:text-white" : "bg-[#060608] text-[#e2e8f0] selection:bg-white selection:text-black"}`,
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "pointer-events-none fixed inset-0 z-0 overflow-hidden",
					children: [
						/* @__PURE__ */ jsx("div", { className: `absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full blur-[140px] transition-opacity duration-300 ${isLight ? "bg-gradient-to-b from-slate-200/60 to-transparent" : "bg-gradient-to-b from-white/[0.03] to-transparent"}` }),
						/* @__PURE__ */ jsx("div", { className: `absolute top-[40%] right-[-10%] h-[400px] w-[500px] rounded-full blur-[120px] ${isLight ? "bg-slate-200/40" : "bg-white/[0.02]"}` }),
						/* @__PURE__ */ jsx("div", { className: `absolute bottom-[20%] left-[-10%] h-[400px] w-[500px] rounded-full blur-[120px] ${isLight ? "bg-slate-100/50" : "bg-white/[0.01]"}` })
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "relative z-10",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: `border-b backdrop-blur-md transition-colors ${isLight ? "border-slate-200/80 bg-slate-50/80 text-slate-500" : "border-white/[0.06] bg-black/40 text-white/50"}`,
							children: /* @__PURE__ */ jsxs("div", {
								className: "mx-auto flex max-w-7xl items-center gap-2 px-6 py-3 text-xs",
								children: [
									/* @__PURE__ */ jsx(Link, {
										href: "/",
										className: `transition-colors ${isLight ? "hover:text-slate-900" : "hover:text-white"}`,
										children: "Home"
									}),
									/* @__PURE__ */ jsx("span", { children: "/" }),
									/* @__PURE__ */ jsx(Link, {
										href: "/services",
										className: `transition-colors ${isLight ? "hover:text-slate-900" : "hover:text-white"}`,
										children: "Services"
									}),
									/* @__PURE__ */ jsx("span", { children: "/" }),
									/* @__PURE__ */ jsx("span", {
										className: isLight ? "text-slate-800 font-medium" : "text-white/80",
										children: serviceTitle
									}),
									location && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx("span", { children: "/" }), /* @__PURE__ */ jsx("span", {
										className: `font-semibold ${isLight ? "text-slate-900" : "text-white"}`,
										children: locName
									})] })
								]
							})
						}),
						/* @__PURE__ */ jsx("section", {
							className: "relative overflow-hidden pt-12 pb-20 md:pt-16 md:pb-28",
							children: /* @__PURE__ */ jsxs("div", {
								className: "mx-auto max-w-5xl px-6 text-center",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: `inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold backdrop-blur-md transition-colors mb-6 ${isLight ? "border-slate-300 bg-white/95 text-slate-800 shadow-sm" : "border-white/15 bg-white/[0.05] text-slate-200"}`,
										children: [
											/* @__PURE__ */ jsxs("span", {
												className: "relative flex h-2 w-2",
												children: [/* @__PURE__ */ jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" }), /* @__PURE__ */ jsx("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-emerald-500" })]
											}),
											/* @__PURE__ */ jsx(MapPin, {
												size: 13,
												className: "text-emerald-500"
											}),
											/* @__PURE__ */ jsxs("span", { children: [
												"Serving Businesses in ",
												locName,
												", ",
												locState
											] })
										]
									}),
									/* @__PURE__ */ jsx("h1", {
										className: `text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-['Space_Grotesk'] leading-[1.12] transition-colors ${isLight ? "text-slate-900" : "text-white"}`,
										children: seo.h1 || `${serviceTitle} in ${locName}`
									}),
									/* @__PURE__ */ jsx("p", {
										className: `mx-auto mt-6 max-w-3xl text-base leading-relaxed md:text-lg transition-colors ${isLight ? "text-slate-600" : "text-slate-300"}`,
										children: hero_description || /* @__PURE__ */ jsxs(Fragment$1, { children: [
											"Tired of slow websites and agencies that disappear after delivery? At ",
											/* @__PURE__ */ jsx("strong", { children: "Zytrixon Tech" }),
											", we engineer blazing-fast, mobile-optimized digital platforms specifically built for how businesses and customers browse across ",
											/* @__PURE__ */ jsx("strong", { children: locName }),
											"."
										] })
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "mt-9 flex flex-wrap items-center justify-center gap-3.5",
										children: [
											/* @__PURE__ */ jsxs("a", {
												href: "#contact",
												className: `group flex items-center gap-2.5 rounded-xl px-7 py-3.5 text-sm font-semibold transition-all active:scale-95 ${isLight ? "bg-[#0a0a0a] text-white hover:bg-black/85 shadow-lg shadow-black/10" : "bg-white text-black hover:bg-slate-200 shadow-xl shadow-white/10"}`,
												children: [/* @__PURE__ */ jsx("span", { children: "Get Free Architecture Proposal" }), /* @__PURE__ */ jsx(ArrowRight, {
													size: 16,
													className: "transition-transform group-hover:translate-x-1"
												})]
											}),
											/* @__PURE__ */ jsxs("a", {
												href: whatsappUrl,
												target: "_blank",
												rel: "noopener noreferrer",
												className: `flex items-center gap-2 rounded-xl border px-6 py-3.5 text-sm font-semibold transition-all active:scale-95 ${isLight ? "border-emerald-600/30 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 shadow-sm" : "border-emerald-500/30 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20"}`,
												children: [/* @__PURE__ */ jsx(MessageCircle, {
													size: 16,
													className: isLight ? "text-emerald-600" : "text-emerald-400"
												}), /* @__PURE__ */ jsx("span", { children: "Chat on WhatsApp" })]
											}),
											/* @__PURE__ */ jsxs("a", {
												href: "tel:+917049711475",
												className: `flex items-center gap-2 rounded-xl border px-5 py-3.5 text-sm font-medium transition-all ${isLight ? "border-slate-300 bg-white text-slate-700 hover:bg-slate-50 shadow-sm" : "border-white/10 bg-white/[0.03] text-slate-300 hover:bg-white/[0.08]"}`,
												children: [/* @__PURE__ */ jsx(Phone, {
													size: 15,
													className: isLight ? "text-slate-600" : "text-slate-400"
												}), /* @__PURE__ */ jsx("span", { children: "Call: +91 70497 11475" })]
											})
										]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: `mt-14 grid grid-cols-2 gap-4 border-t pt-8 sm:grid-cols-4 transition-colors ${isLight ? "border-slate-200" : "border-white/[0.08]"}`,
										children: [
											/* @__PURE__ */ jsxs("div", {
												className: "text-center",
												children: [/* @__PURE__ */ jsxs("div", {
													className: "flex items-center justify-center gap-1 text-amber-500 text-sm font-bold",
													children: [/* @__PURE__ */ jsx(Star, {
														size: 15,
														className: "fill-amber-500"
													}), /* @__PURE__ */ jsx("span", { children: "4.9 / 5.0" })]
												}), /* @__PURE__ */ jsx("p", {
													className: `mt-1 text-xs ${isLight ? "text-slate-500" : "text-slate-400"}`,
													children: "Google & Clutch Reviews"
												})]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "text-center",
												children: [/* @__PURE__ */ jsx("div", {
													className: `text-base font-bold ${isLight ? "text-slate-900" : "text-white"}`,
													children: "100+ Delivered"
												}), /* @__PURE__ */ jsx("p", {
													className: `mt-1 text-xs ${isLight ? "text-slate-500" : "text-slate-400"}`,
													children: "Web, Apps & Systems"
												})]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "text-center",
												children: [/* @__PURE__ */ jsx("div", {
													className: `text-base font-bold ${isLight ? "text-slate-900" : "text-white"}`,
													children: "Bihar On-Ground"
												}), /* @__PURE__ */ jsx("p", {
													className: `mt-1 text-xs ${isLight ? "text-slate-500" : "text-slate-400"}`,
													children: "Direct In-Person Support"
												})]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "text-center",
												children: [/* @__PURE__ */ jsx("div", {
													className: `text-base font-bold ${isLight ? "text-slate-900" : "text-white"}`,
													children: "99.9% Uptime"
												}), /* @__PURE__ */ jsx("p", {
													className: `mt-1 text-xs ${isLight ? "text-slate-500" : "text-slate-400"}`,
													children: "Cloud Architecture SLA"
												})]
											})
										]
									})
								]
							})
						}),
						/* @__PURE__ */ jsx("section", {
							className: `py-12 border-t transition-colors ${isLight ? "border-slate-200/80 bg-slate-50/60" : "border-white/[0.06] bg-black/30"}`,
							children: /* @__PURE__ */ jsxs("div", {
								className: "mx-auto max-w-7xl px-6",
								children: [
									template === "grid" && /* @__PURE__ */ jsxs("div", {
										className: "space-y-6",
										children: [/* @__PURE__ */ jsxs("div", {
											className: "text-center max-w-2xl mx-auto mb-10",
											children: [/* @__PURE__ */ jsxs("span", {
												className: `text-xs uppercase tracking-widest font-bold ${isLight ? "text-slate-600" : "text-slate-400"}`,
												children: ["Engineered for ", locName]
											}), /* @__PURE__ */ jsxs("h2", {
												className: `mt-2 text-2xl md:text-3xl font-bold font-['Space_Grotesk'] ${isLight ? "text-slate-900" : "text-white"}`,
												children: [
													"Comprehensive ",
													serviceTitle,
													" Architecture"
												]
											})]
										}), /* @__PURE__ */ jsxs("div", {
											className: "grid grid-cols-1 md:grid-cols-3 gap-5",
											children: [/* @__PURE__ */ jsxs("div", {
												className: `md:col-span-2 rounded-2xl border p-7 backdrop-blur-sm transition-all ${isLight ? "border-slate-200 bg-white shadow-sm hover:border-slate-400 hover:shadow-md" : "border-white/[0.08] bg-white/[0.02] hover:border-white/20"}`,
												children: [
													/* @__PURE__ */ jsxs("div", {
														className: "flex items-center gap-3 mb-4",
														children: [/* @__PURE__ */ jsx("div", {
															className: `flex h-10 w-10 items-center justify-center rounded-xl ${isLight ? "bg-slate-100 text-slate-900" : "bg-white/10 text-white"}`,
															children: /* @__PURE__ */ jsx(Trophy, { size: 20 })
														}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
															className: `text-lg font-bold ${isLight ? "text-slate-900" : "text-white"}`,
															children: whyUs?.heading || `Why ${locName} Businesses Choose Zytrixon Tech`
														}), /* @__PURE__ */ jsx("p", {
															className: `text-xs ${isLight ? "text-slate-500" : "text-slate-400"}`,
															children: "Local accountability meets international engineering standards"
														})] })]
													}),
													/* @__PURE__ */ jsx("p", {
														className: `text-sm leading-relaxed mb-6 ${isLight ? "text-slate-600" : "text-slate-300"}`,
														children: whyUs?.content || `We work directly with founders, directors, and managers in ${locName}. No outsourced middle-men, no broken promises.`
													}),
													/* @__PURE__ */ jsx("div", {
														className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
														children: whyPoints.map((pt, idx) => /* @__PURE__ */ jsxs("div", {
															className: `flex items-start gap-2.5 rounded-xl border p-3 text-xs ${isLight ? "border-slate-200 bg-slate-50/80 text-slate-700" : "border-white/[0.05] bg-white/[0.02] text-slate-300"}`,
															children: [/* @__PURE__ */ jsx(CheckCircle2, {
																size: 16,
																className: "text-emerald-500 shrink-0 mt-0.5"
															}), /* @__PURE__ */ jsx("span", { children: pt })]
														}, idx))
													})
												]
											}), /* @__PURE__ */ jsxs("div", {
												className: `rounded-2xl border p-7 backdrop-blur-sm transition-all ${isLight ? "border-slate-200 bg-white shadow-sm hover:border-slate-400 hover:shadow-md" : "border-white/[0.08] bg-white/[0.02] hover:border-white/20"}`,
												children: [
													/* @__PURE__ */ jsx("div", {
														className: `flex h-10 w-10 items-center justify-center rounded-xl mb-4 ${isLight ? "bg-slate-100 text-slate-900" : "bg-white/10 text-white"}`,
														children: /* @__PURE__ */ jsx(TrendingUp, { size: 20 })
													}),
													/* @__PURE__ */ jsxs("h3", {
														className: `text-lg font-bold mb-2 ${isLight ? "text-slate-900" : "text-white"}`,
														children: [
															"The ",
															locName,
															" Opportunity"
														]
													}),
													/* @__PURE__ */ jsx("p", {
														className: `text-xs leading-relaxed line-clamp-6 ${isLight ? "text-slate-600" : "text-slate-300"}`,
														children: localContext?.content || `Customers across ${locName} check online reviews and mobile pages before making buying decisions. If your platform isn't fast and credible, you lose market share to competitors.`
													}),
													/* @__PURE__ */ jsxs("a", {
														href: "#contact",
														className: `mt-6 inline-flex items-center gap-1.5 text-xs font-semibold hover:underline ${isLight ? "text-slate-900 hover:text-black" : "text-white hover:text-slate-200"}`,
														children: [/* @__PURE__ */ jsx("span", { children: "Audit your local standing" }), /* @__PURE__ */ jsx(ArrowRight, { size: 13 })]
													})
												]
											})]
										})]
									}),
									template === "timeline" && /* @__PURE__ */ jsxs("div", {
										className: "space-y-8",
										children: [/* @__PURE__ */ jsxs("div", {
											className: "text-center max-w-2xl mx-auto mb-10",
											children: [/* @__PURE__ */ jsx("span", {
												className: `text-xs uppercase tracking-widest font-bold ${isLight ? "text-slate-600" : "text-slate-400"}`,
												children: "Milestone Execution"
											}), /* @__PURE__ */ jsxs("h2", {
												className: `mt-2 text-2xl md:text-3xl font-bold font-['Space_Grotesk'] ${isLight ? "text-slate-900" : "text-white"}`,
												children: [
													"Our 4-Step Roadmap for ",
													locName,
													" Clients"
												]
											})]
										}), /* @__PURE__ */ jsx("div", {
											className: "relative mx-auto max-w-4xl",
											children: /* @__PURE__ */ jsx("div", {
												className: "grid grid-cols-1 md:grid-cols-4 gap-4",
												children: processSteps.map((step, idx) => /* @__PURE__ */ jsxs("div", {
													className: `relative rounded-2xl border p-6 backdrop-blur-sm transition-all hover:-translate-y-1 ${isLight ? "border-slate-200 bg-white shadow-sm hover:border-slate-400 hover:shadow-md" : "border-white/[0.08] bg-white/[0.03] hover:border-white/30"}`,
													children: [
														/* @__PURE__ */ jsxs("div", {
															className: `flex h-9 w-9 items-center justify-center rounded-xl font-bold text-sm mb-4 ${isLight ? "bg-slate-900 text-white" : "bg-white text-black"}`,
															children: ["0", idx + 1]
														}),
														/* @__PURE__ */ jsx("h4", {
															className: `text-sm font-bold mb-1.5 ${isLight ? "text-slate-900" : "text-white"}`,
															children: step.title
														}),
														/* @__PURE__ */ jsx("p", {
															className: `text-xs leading-relaxed ${isLight ? "text-slate-600" : "text-slate-400"}`,
															children: step.desc
														})
													]
												}, idx))
											})
										})]
									}),
									template === "card" && /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
										className: "text-center max-w-2xl mx-auto mb-10",
										children: [/* @__PURE__ */ jsx("span", {
											className: `text-xs uppercase tracking-widest font-bold ${isLight ? "text-slate-600" : "text-slate-400"}`,
											children: "High-Impact Standards"
										}), /* @__PURE__ */ jsxs("h2", {
											className: `mt-2 text-2xl md:text-3xl font-bold font-['Space_Grotesk'] ${isLight ? "text-slate-900" : "text-white"}`,
											children: ["Why Our Solutions Excel in ", locName]
										})]
									}), /* @__PURE__ */ jsx("div", {
										className: "grid grid-cols-1 md:grid-cols-3 gap-6",
										children: whyPoints.slice(0, 3).map((pt, idx) => {
											const icons = [
												Zap,
												ShieldCheck,
												MapPin
											];
											const IconComp = icons[idx % icons.length];
											return /* @__PURE__ */ jsxs("div", {
												className: `rounded-2xl border p-6 shadow-xl backdrop-blur-sm transition-all hover:-translate-y-1 ${isLight ? "border-slate-200 bg-white shadow-slate-200/50 hover:border-slate-400" : "border-white/10 bg-white/[0.02] hover:border-white/20"}`,
												children: [
													/* @__PURE__ */ jsx("div", {
														className: `flex h-11 w-11 items-center justify-center rounded-xl mb-4 ${isLight ? "bg-slate-100 text-slate-900" : "bg-white/10 text-white"}`,
														children: /* @__PURE__ */ jsx(IconComp, { size: 22 })
													}),
													/* @__PURE__ */ jsxs("h3", {
														className: `text-base font-bold mb-2 ${isLight ? "text-slate-900" : "text-white"}`,
														children: ["Advantage 0", idx + 1]
													}),
													/* @__PURE__ */ jsx("p", {
														className: `text-xs leading-relaxed font-medium ${isLight ? "text-slate-600" : "text-slate-300"}`,
														children: pt
													})
												]
											}, idx);
										})
									})] }),
									template === "split" && /* @__PURE__ */ jsxs("div", {
										className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",
										children: [/* @__PURE__ */ jsxs("div", {
											className: `lg:col-span-5 lg:sticky lg:top-24 rounded-2xl border p-7 backdrop-blur-md transition-colors ${isLight ? "border-slate-200 bg-white shadow-md" : "border-white/[0.08] bg-white/[0.03]"}`,
											children: [
												/* @__PURE__ */ jsx("span", {
													className: `text-xs font-semibold uppercase tracking-wider ${isLight ? "text-slate-600" : "text-slate-400"}`,
													children: "Executive Overview"
												}),
												/* @__PURE__ */ jsxs("h3", {
													className: `mt-2 text-2xl font-bold font-['Space_Grotesk'] ${isLight ? "text-slate-900" : "text-white"}`,
													children: [
														serviceTitle,
														" for ",
														locName
													]
												}),
												/* @__PURE__ */ jsx("p", {
													className: `mt-3 text-xs leading-relaxed ${isLight ? "text-slate-600" : "text-slate-300"}`,
													children: hero_description || service.description
												}),
												/* @__PURE__ */ jsxs("div", {
													className: `mt-6 space-y-3 border-t pt-6 ${isLight ? "border-slate-200" : "border-white/[0.08]"}`,
													children: [
														/* @__PURE__ */ jsxs("div", {
															className: "flex items-center justify-between text-xs",
															children: [/* @__PURE__ */ jsx("span", {
																className: isLight ? "text-slate-500" : "text-slate-400",
																children: "Location Served"
															}), /* @__PURE__ */ jsxs("span", {
																className: `font-semibold ${isLight ? "text-slate-900" : "text-white"}`,
																children: [
																	locName,
																	", ",
																	locState
																]
															})]
														}),
														/* @__PURE__ */ jsxs("div", {
															className: "flex items-center justify-between text-xs",
															children: [/* @__PURE__ */ jsx("span", {
																className: isLight ? "text-slate-500" : "text-slate-400",
																children: "Standard Delivery"
															}), /* @__PURE__ */ jsx("span", {
																className: `font-semibold ${isLight ? "text-slate-900" : "text-white"}`,
																children: "2 - 6 Weeks"
															})]
														}),
														/* @__PURE__ */ jsxs("div", {
															className: "flex items-center justify-between text-xs",
															children: [/* @__PURE__ */ jsx("span", {
																className: isLight ? "text-slate-500" : "text-slate-400",
																children: "Support Mode"
															}), /* @__PURE__ */ jsx("span", {
																className: "font-semibold text-emerald-600 dark:text-emerald-400",
																children: "On-Ground / Remote 24/7"
															})]
														})
													]
												}),
												/* @__PURE__ */ jsxs("a", {
													href: "#contact",
													className: `mt-6 flex w-full items-center justify-center gap-2 rounded-xl py-3 text-xs font-semibold transition-all active:scale-95 ${isLight ? "bg-[#0a0a0a] text-white hover:bg-black/85 shadow-md" : "bg-white text-black hover:bg-slate-200 shadow-md"}`,
													children: [/* @__PURE__ */ jsx("span", { children: "Request Consultation" }), /* @__PURE__ */ jsx(ArrowRight, { size: 14 })]
												})
											]
										}), /* @__PURE__ */ jsxs("div", {
											className: "lg:col-span-7 space-y-6",
											children: [/* @__PURE__ */ jsxs("div", {
												className: `rounded-2xl border p-7 ${isLight ? "border-slate-200 bg-white shadow-sm" : "border-white/[0.08] bg-white/[0.02]"}`,
												children: [
													/* @__PURE__ */ jsx("h4", {
														className: `text-base font-bold mb-3 ${isLight ? "text-slate-900" : "text-white"}`,
														children: whyUs?.heading || `Why Choose Us in ${locName}`
													}),
													/* @__PURE__ */ jsx("p", {
														className: `text-xs leading-relaxed mb-4 ${isLight ? "text-slate-600" : "text-slate-300"}`,
														children: whyUs?.content
													}),
													/* @__PURE__ */ jsx("ul", {
														className: "space-y-2",
														children: whyPoints.map((pt, i) => /* @__PURE__ */ jsxs("li", {
															className: `flex items-start gap-2 text-xs ${isLight ? "text-slate-700" : "text-slate-300"}`,
															children: [/* @__PURE__ */ jsx(Check, {
																size: 14,
																className: "text-emerald-500 shrink-0 mt-0.5"
															}), /* @__PURE__ */ jsx("span", { children: pt })]
														}, i))
													})
												]
											}), /* @__PURE__ */ jsxs("div", {
												className: `rounded-2xl border p-7 ${isLight ? "border-slate-200 bg-white shadow-sm" : "border-white/[0.08] bg-white/[0.02]"}`,
												children: [/* @__PURE__ */ jsx("h4", {
													className: `text-base font-bold mb-3 ${isLight ? "text-slate-900" : "text-white"}`,
													children: "The Local Landscape"
												}), /* @__PURE__ */ jsx("p", {
													className: `text-xs leading-relaxed whitespace-pre-line ${isLight ? "text-slate-600" : "text-slate-300"}`,
													children: localContext?.content || `Growing businesses in ${locName} need reliable digital infrastructure. We turn your ideas into high-converting products.`
												})]
											})]
										})]
									})
								]
							})
						}),
						/* @__PURE__ */ jsx("section", {
							className: `py-20 border-t ${isLight ? "border-slate-200" : "border-white/[0.06]"}`,
							children: /* @__PURE__ */ jsxs("div", {
								className: "mx-auto max-w-7xl px-6",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "text-center max-w-2xl mx-auto mb-14",
									children: [
										/* @__PURE__ */ jsx("span", {
											className: `text-xs uppercase tracking-widest font-bold ${isLight ? "text-slate-600" : "text-slate-400"}`,
											children: "Local Advantage"
										}),
										/* @__PURE__ */ jsx("h2", {
											className: `mt-2 text-3xl font-extrabold font-['Space_Grotesk'] ${isLight ? "text-slate-900" : "text-white"}`,
											children: whyUs?.heading || `Why ${locName} Businesses Choose Zytrixon Tech`
										}),
										/* @__PURE__ */ jsx("p", {
											className: `mt-3 text-sm ${isLight ? "text-slate-600" : "text-slate-400"}`,
											children: whyUs?.content || `We provide high-touch engineering and reliable support built specifically for Bihar enterprises.`
										})
									]
								}), /* @__PURE__ */ jsx("div", {
									className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5",
									children: whyPoints.map((point, idx) => {
										const icons = [
											ShieldCheck,
											Zap,
											Users,
											Trophy
										];
										const IconComp = icons[idx % icons.length];
										return /* @__PURE__ */ jsxs("div", {
											className: `group rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 ${isLight ? "border-slate-200 bg-white shadow-sm hover:border-slate-400 hover:shadow-md" : "border-white/[0.08] bg-white/[0.02] hover:border-white/30 hover:bg-white/[0.04]"}`,
											children: [/* @__PURE__ */ jsx("div", {
												className: `flex h-11 w-11 items-center justify-center rounded-xl mb-4 transition-colors ${isLight ? "bg-slate-100 text-slate-900 group-hover:bg-slate-900 group-hover:text-white" : "bg-white/10 text-white group-hover:bg-white group-hover:text-black"}`,
												children: /* @__PURE__ */ jsx(IconComp, { size: 20 })
											}), /* @__PURE__ */ jsx("p", {
												className: `text-sm font-medium leading-snug ${isLight ? "text-slate-800" : "text-slate-200"}`,
												children: point
											})]
										}, idx);
									})
								})]
							})
						}),
						localContext?.content && /* @__PURE__ */ jsx("section", {
							className: `py-16 border-t ${isLight ? "border-slate-200 bg-gradient-to-b from-slate-50/50 to-white" : "border-white/[0.06] bg-gradient-to-b from-transparent via-white/[0.01] to-transparent"}`,
							children: /* @__PURE__ */ jsx("div", {
								className: "mx-auto max-w-5xl px-6",
								children: /* @__PURE__ */ jsxs("div", {
									className: `rounded-3xl border p-8 md:p-12 shadow-2xl backdrop-blur-md transition-colors ${isLight ? "border-slate-200 bg-white shadow-slate-200/50" : "border-white/[0.1] bg-gradient-to-br from-white/[0.04] to-white/[0.01]"}`,
									children: [/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-3 mb-4",
										children: [/* @__PURE__ */ jsx("div", {
											className: `flex h-9 w-9 items-center justify-center rounded-xl ${isLight ? "bg-emerald-100 text-emerald-700" : "bg-emerald-500/20 text-emerald-400"}`,
											children: /* @__PURE__ */ jsx(Building2, { size: 18 })
										}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
											className: "text-[11px] font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400",
											children: "Local Business Insight"
										}), /* @__PURE__ */ jsx("h3", {
											className: `text-xl md:text-2xl font-bold font-['Space_Grotesk'] ${isLight ? "text-slate-900" : "text-white"}`,
											children: localContext.heading || `Digital Growth in ${locName}`
										})] })]
									}), /* @__PURE__ */ jsx("div", {
										className: `mt-4 text-sm md:text-base leading-relaxed whitespace-pre-line space-y-4 ${isLight ? "text-slate-700" : "text-slate-300"}`,
										children: localContext.content
									})]
								})
							})
						}),
						/* @__PURE__ */ jsx("section", {
							className: `py-20 border-t ${isLight ? "border-slate-200" : "border-white/[0.06]"}`,
							children: /* @__PURE__ */ jsxs("div", {
								className: "mx-auto max-w-7xl px-6",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "text-center max-w-2xl mx-auto mb-14",
									children: [
										/* @__PURE__ */ jsx("span", {
											className: `text-xs uppercase tracking-widest font-bold ${isLight ? "text-slate-600" : "text-slate-400"}`,
											children: "Agile Methodology"
										}),
										/* @__PURE__ */ jsx("h2", {
											className: `mt-2 text-3xl font-extrabold font-['Space_Grotesk'] ${isLight ? "text-slate-900" : "text-white"}`,
											children: processSection?.heading || `Our Proven Process for ${locName} Clients`
										}),
										/* @__PURE__ */ jsx("p", {
											className: `mt-3 text-sm ${isLight ? "text-slate-600" : "text-slate-400"}`,
											children: "From kickoff to deployment, every phase is transparent and milestone-tracked."
										})
									]
								}), /* @__PURE__ */ jsx("div", {
									className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5",
									children: processSteps.map((step, idx) => /* @__PURE__ */ jsxs("div", {
										className: `relative rounded-2xl border p-6 backdrop-blur-sm transition-all ${isLight ? "border-slate-200 bg-white shadow-sm hover:border-slate-400 hover:shadow-md" : "border-white/[0.08] bg-white/[0.02] hover:border-white/30"}`,
										children: [
											/* @__PURE__ */ jsxs("div", {
												className: "flex items-center justify-between mb-4",
												children: [/* @__PURE__ */ jsxs("span", {
													className: `flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold font-mono ${isLight ? "bg-slate-900 text-white" : "bg-white text-black"}`,
													children: ["0", idx + 1]
												}), /* @__PURE__ */ jsxs("span", {
													className: `text-[11px] font-semibold uppercase tracking-wider ${isLight ? "text-slate-400" : "text-slate-500"}`,
													children: ["Phase ", idx + 1]
												})]
											}),
											/* @__PURE__ */ jsx("h4", {
												className: `text-base font-bold mb-2 ${isLight ? "text-slate-900" : "text-white"}`,
												children: step.title
											}),
											/* @__PURE__ */ jsx("p", {
												className: `text-xs leading-relaxed ${isLight ? "text-slate-600" : "text-slate-400"}`,
												children: step.desc
											})
										]
									}, idx))
								})]
							})
						}),
						/* @__PURE__ */ jsx("section", {
							className: `py-16 border-t transition-colors ${isLight ? "border-slate-200/80 bg-slate-50/60" : "border-white/[0.06] bg-black/40"}`,
							children: /* @__PURE__ */ jsxs("div", {
								className: "mx-auto max-w-7xl px-6 text-center",
								children: [
									/* @__PURE__ */ jsx("span", {
										className: `text-xs uppercase tracking-widest font-bold ${isLight ? "text-slate-600" : "text-slate-400"}`,
										children: "Enterprise Engineering Stack"
									}),
									/* @__PURE__ */ jsx("h2", {
										className: `mt-2 text-2xl md:text-3xl font-bold font-['Space_Grotesk'] ${isLight ? "text-slate-900" : "text-white"}`,
										children: "Modern Frameworks We Build With"
									}),
									/* @__PURE__ */ jsx("p", {
										className: `mt-2 text-xs max-w-xl mx-auto ${isLight ? "text-slate-600" : "text-slate-400"}`,
										children: "Clean architectures built with battle-tested technologies for maximum speed and security."
									}),
									/* @__PURE__ */ jsx("div", {
										className: "mt-8 flex flex-wrap justify-center gap-3",
										children: TECH_STACK.map((tech) => /* @__PURE__ */ jsxs("div", {
											className: `flex items-center gap-2 rounded-xl border px-4 py-2 text-xs font-medium transition-all ${isLight ? "border-slate-200 bg-white text-slate-800 shadow-sm hover:border-slate-400" : "border-white/[0.08] bg-white/[0.03] text-slate-200 hover:border-white/30 hover:bg-white/[0.06]"}`,
											children: [
												/* @__PURE__ */ jsx("span", {
													className: "h-2 w-2 rounded-full",
													style: { backgroundColor: tech.color }
												}),
												/* @__PURE__ */ jsx("span", { children: tech.name }),
												/* @__PURE__ */ jsxs("span", {
													className: `text-[10px] ${isLight ? "text-slate-400" : "text-slate-500"}`,
													children: ["· ", tech.category]
												})
											]
										}, tech.name))
									})
								]
							})
						}),
						/* @__PURE__ */ jsx("section", {
							className: `py-20 border-t ${isLight ? "border-slate-200" : "border-white/[0.06]"}`,
							children: /* @__PURE__ */ jsxs("div", {
								className: "mx-auto max-w-4xl px-6",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "text-center mb-12",
									children: [
										/* @__PURE__ */ jsx("span", {
											className: `text-xs uppercase tracking-widest font-bold ${isLight ? "text-slate-600" : "text-slate-400"}`,
											children: "Got Questions?"
										}),
										/* @__PURE__ */ jsx("h2", {
											className: `mt-2 text-3xl font-extrabold font-['Space_Grotesk'] ${isLight ? "text-slate-900" : "text-white"}`,
											children: faqSection?.heading || `Frequently Asked Questions — ${serviceTitle} in ${locName}`
										}),
										/* @__PURE__ */ jsx("p", {
											className: `mt-3 text-sm ${isLight ? "text-slate-600" : "text-slate-400"}`,
											children: "Clear answers about pricing, timeline, and how we work with local clients."
										})
									]
								}), /* @__PURE__ */ jsx("div", {
									className: "space-y-3",
									children: faqs.map((faq, idx) => {
										const isOpen = openFaq === idx;
										return /* @__PURE__ */ jsxs("div", {
											className: `rounded-2xl border overflow-hidden transition-colors ${isLight ? "border-slate-200 bg-white shadow-sm hover:border-slate-300" : "border-white/[0.08] bg-white/[0.02] hover:border-white/[0.15]"}`,
											children: [/* @__PURE__ */ jsxs("button", {
												type: "button",
												onClick: () => setOpenFaq(isOpen ? null : idx),
												className: `flex w-full items-center justify-between p-5 text-left text-sm font-semibold transition-colors ${isLight ? "text-slate-900" : "text-white"}`,
												children: [/* @__PURE__ */ jsxs("span", {
													className: "flex items-center gap-2.5",
													children: [/* @__PURE__ */ jsx(HelpCircle, {
														size: 16,
														className: isLight ? "text-slate-700" : "text-slate-300"
													}), /* @__PURE__ */ jsx("span", { children: faq.q })]
												}), isOpen ? /* @__PURE__ */ jsx(ChevronUp, {
													size: 16,
													className: isLight ? "text-slate-500" : "text-slate-400"
												}) : /* @__PURE__ */ jsx(ChevronDown, {
													size: 16,
													className: isLight ? "text-slate-500" : "text-slate-400"
												})]
											}), isOpen && /* @__PURE__ */ jsx("div", {
												className: `border-t p-5 pt-3 text-xs leading-relaxed ${isLight ? "border-slate-100 bg-slate-50/70 text-slate-600" : "border-white/[0.05] bg-white/[0.01] text-slate-300"}`,
												children: faq.a
											})]
										}, idx);
									})
								})]
							})
						}),
						customSections.length > 0 && /* @__PURE__ */ jsx("div", {
							className: "space-y-12",
							children: customSections.map((sec, idx) => /* @__PURE__ */ jsx("section", {
								className: `py-16 border-t ${isLight ? "border-slate-200" : "border-white/[0.06]"}`,
								children: /* @__PURE__ */ jsx("div", {
									className: "mx-auto max-w-5xl px-6",
									children: /* @__PURE__ */ jsxs("div", {
										className: `rounded-3xl border p-8 md:p-12 shadow-xl backdrop-blur-md ${isLight ? "border-slate-200 bg-white" : "border-white/[0.08] bg-white/[0.02]"}`,
										children: [
											/* @__PURE__ */ jsx("h3", {
												className: `text-2xl font-bold font-['Space_Grotesk'] mb-4 ${isLight ? "text-slate-900" : "text-white"}`,
												children: sec.heading
											}),
											sec.content && /* @__PURE__ */ jsx("div", {
												className: `text-sm md:text-base leading-relaxed whitespace-pre-line space-y-4 ${isLight ? "text-slate-700" : "text-slate-300"}`,
												children: sec.content
											}),
											sec.points && sec.points.length > 0 && /* @__PURE__ */ jsx("div", {
												className: "mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3",
												children: sec.points.map((pt, pIdx) => /* @__PURE__ */ jsxs("div", {
													className: `flex items-start gap-2.5 rounded-xl border p-3 text-xs ${isLight ? "border-slate-200 bg-slate-50 text-slate-700" : "border-white/[0.05] bg-white/[0.02] text-slate-300"}`,
													children: [/* @__PURE__ */ jsx(CheckCircle2, {
														size: 16,
														className: "text-emerald-500 shrink-0 mt-0.5"
													}), /* @__PURE__ */ jsx("span", { children: pt })]
												}, pIdx))
											})
										]
									})
								})
							}, idx))
						}),
						/* @__PURE__ */ jsx("section", {
							className: `py-20 border-t transition-colors ${isLight ? "border-slate-200 bg-gradient-to-b from-transparent via-slate-50 to-white" : "border-white/[0.06] bg-gradient-to-b from-transparent via-white/[0.02] to-black"}`,
							children: /* @__PURE__ */ jsx("div", {
								className: "mx-auto max-w-4xl px-6 text-center",
								children: /* @__PURE__ */ jsxs("div", {
									className: `rounded-3xl border p-10 md:p-14 shadow-2xl backdrop-blur-md transition-colors ${isLight ? "border-slate-300 bg-gradient-to-b from-slate-50 to-white shadow-slate-200/70" : "border-white/10 bg-gradient-to-b from-white/[0.05] via-white/[0.02] to-transparent"}`,
									children: [
										/* @__PURE__ */ jsx("span", {
											className: `inline-block rounded-full px-3.5 py-1 text-xs font-semibold mb-4 border ${isLight ? "border-slate-300 bg-white text-slate-800 shadow-sm" : "border-white/15 bg-white/10 text-white"}`,
											children: "Let's Get Started"
										}),
										/* @__PURE__ */ jsxs("h2", {
											className: `text-3xl md:text-4xl font-extrabold font-['Space_Grotesk'] ${isLight ? "text-slate-900" : "text-white"}`,
											children: [
												"Ready to Build Your Project in ",
												locName,
												"?"
											]
										}),
										/* @__PURE__ */ jsx("p", {
											className: `mx-auto mt-4 max-w-2xl text-sm md:text-base ${isLight ? "text-slate-600" : "text-slate-300"}`,
											children: "Schedule a direct consultation with our engineering team. We'll analyze your requirements, review competitor gaps, and deliver a detailed scope of work."
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "mt-8 flex flex-wrap items-center justify-center gap-4",
											children: [/* @__PURE__ */ jsx("a", {
												href: "#contact",
												className: `rounded-xl px-8 py-3.5 text-sm font-semibold transition-all active:scale-95 ${isLight ? "bg-[#0a0a0a] text-white hover:bg-black/85 shadow-lg shadow-black/10" : "bg-white text-black hover:bg-slate-200 shadow-xl shadow-white/10"}`,
												children: "Request Free Quote"
											}), /* @__PURE__ */ jsxs("a", {
												href: whatsappUrl,
												target: "_blank",
												rel: "noopener noreferrer",
												className: `flex items-center gap-2 rounded-xl border px-6 py-3.5 text-sm font-semibold transition-all active:scale-95 ${isLight ? "border-emerald-600/30 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 shadow-sm" : "border-emerald-500/30 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20"}`,
												children: [/* @__PURE__ */ jsx(MessageCircle, {
													size: 16,
													className: isLight ? "text-emerald-600" : "text-emerald-400"
												}), /* @__PURE__ */ jsx("span", { children: "Instant WhatsApp Chat" })]
											})]
										})
									]
								})
							})
						}),
						/* @__PURE__ */ jsx("div", {
							id: "contact",
							children: /* @__PURE__ */ jsx(ContactSection, {})
						})
					]
				}),
				/* @__PURE__ */ jsx(Footer, {})
			]
		})
	] });
}
//#endregion
export { ServiceSeoPage as default };

//# sourceMappingURL=ServiceSeoPage-COXAW3gv.js.map