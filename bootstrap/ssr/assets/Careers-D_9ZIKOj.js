import { i as ThemeProvider, n as CustomCursor, t as Navbar } from "./navbar-AKB7jtts.js";
import ContactSection from "./contact-section-DD0mNLV6.js";
import CoreValuesSection from "./core-values-section-D3Bl0-UD.js";
import FAQSection from "./faq-section-CSJej8DS.js";
import FooterCTA from "./footer-cta-DYRRvpzz.js";
import Footer from "./footer--t5m_Nat.js";
import GlobalFootprint from "./global-footprint-py2us0Vh.js";
import TeamSection from "./team-section-CXps6hzn.js";
import TestimonialsSection from "./testimonials-section-CV82NHtu.js";
import { t as SeoHead } from "./SeoHead-Bv-bTrU-.js";
import { t as TopBar } from "./top-bar-BFyXzAS2.js";
import { t as InnerPageHero } from "./inner-page-hero-D6N22xfM.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/pages/Careers.tsx
function Careers() {
	return /* @__PURE__ */ jsxs(ThemeProvider, { children: [
		/* @__PURE__ */ jsx(SeoHead, { seo: {
			title: "Careers | Zytrixon Tech",
			description: "Join our team at Zytrixon Tech and build the future of software development in Patna."
		} }),
		/* @__PURE__ */ jsx(CustomCursor, {}),
		/* @__PURE__ */ jsx(TopBar, {}),
		/* @__PURE__ */ jsx(Navbar, {}),
		/* @__PURE__ */ jsxs("main", {
			style: {
				minHeight: "100vh",
				background: "var(--zy-black)",
				overflowX: "hidden"
			},
			children: [
				/* @__PURE__ */ jsx(InnerPageHero, {
					title: "Build the Future With Us",
					subtitle: "We are looking for passionate, driven individuals who want to solve complex problems and build scalable enterprise solutions."
				}),
				/* @__PURE__ */ jsxs("section", {
					style: {
						padding: "80px 24px",
						maxWidth: 1200,
						margin: "0 auto"
					},
					children: [/* @__PURE__ */ jsxs("div", {
						style: {
							textAlign: "center",
							marginBottom: 60
						},
						children: [/* @__PURE__ */ jsx("h2", {
							style: {
								fontSize: "clamp(32px, 5vw, 48px)",
								fontFamily: "var(--font-heading)",
								fontWeight: 800,
								color: "var(--zy-white)",
								marginBottom: 24
							},
							children: "Open Positions"
						}), /* @__PURE__ */ jsx("p", {
							style: {
								color: "var(--zy-gray-text)",
								fontSize: 18,
								maxWidth: 600,
								margin: "0 auto"
							},
							children: "Explore our current openings and find where you fit in."
						})]
					}), /* @__PURE__ */ jsx("div", {
						style: {
							display: "flex",
							flexDirection: "column",
							gap: 24
						},
						children: [
							{
								id: 1,
								title: "Senior React Engineer",
								department: "Engineering",
								location: "Patna, IN (Hybrid)",
								type: "Full-time"
							},
							{
								id: 2,
								title: "Backend Lead (Laravel)",
								department: "Engineering",
								location: "Remote",
								type: "Full-time"
							},
							{
								id: 3,
								title: "UI/UX Designer",
								department: "Design",
								location: "Patna, IN (On-site)",
								type: "Full-time"
							},
							{
								id: 4,
								title: "AI & Automation Specialist",
								department: "Data & AI",
								location: "Remote",
								type: "Contract"
							}
						].map((job) => /* @__PURE__ */ jsxs("div", {
							style: {
								background: "var(--zy-gray-card)",
								border: "1px solid var(--zy-gray-border)",
								borderRadius: 16,
								padding: "32px 40px",
								display: "flex",
								flexWrap: "wrap",
								alignItems: "center",
								justifyContent: "space-between",
								gap: 24,
								transition: "all 0.3s var(--zy-ease)",
								cursor: "pointer"
							},
							onMouseEnter: (e) => {
								e.currentTarget.style.borderColor = "var(--zy-blue)";
								e.currentTarget.style.transform = "translateX(10px)";
							},
							onMouseLeave: (e) => {
								e.currentTarget.style.borderColor = "var(--zy-gray-border)";
								e.currentTarget.style.transform = "translateX(0)";
							},
							children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
								style: {
									fontSize: 24,
									fontWeight: 700,
									color: "var(--zy-white)",
									marginBottom: 12
								},
								children: job.title
							}), /* @__PURE__ */ jsxs("div", {
								style: {
									display: "flex",
									gap: 16,
									flexWrap: "wrap",
									color: "var(--zy-gray-text)",
									fontSize: 14
								},
								children: [
									/* @__PURE__ */ jsxs("span", {
										style: {
											display: "flex",
											alignItems: "center",
											gap: 6
										},
										children: [/* @__PURE__ */ jsx("svg", {
											width: "16",
											height: "16",
											viewBox: "0 0 24 24",
											fill: "none",
											stroke: "currentColor",
											strokeWidth: "2",
											children: /* @__PURE__ */ jsx("path", { d: "M22 12h-4l-3 9L9 3l-3 9H2" })
										}), job.department]
									}),
									/* @__PURE__ */ jsxs("span", {
										style: {
											display: "flex",
											alignItems: "center",
											gap: 6
										},
										children: [/* @__PURE__ */ jsxs("svg", {
											width: "16",
											height: "16",
											viewBox: "0 0 24 24",
											fill: "none",
											stroke: "currentColor",
											strokeWidth: "2",
											children: [/* @__PURE__ */ jsx("path", { d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" }), /* @__PURE__ */ jsx("circle", {
												cx: "12",
												cy: "10",
												r: "3"
											})]
										}), job.location]
									}),
									/* @__PURE__ */ jsxs("span", {
										style: {
											display: "flex",
											alignItems: "center",
											gap: 6
										},
										children: [/* @__PURE__ */ jsxs("svg", {
											width: "16",
											height: "16",
											viewBox: "0 0 24 24",
											fill: "none",
											stroke: "currentColor",
											strokeWidth: "2",
											children: [/* @__PURE__ */ jsx("circle", {
												cx: "12",
												cy: "12",
												r: "10"
											}), /* @__PURE__ */ jsx("polyline", { points: "12 6 12 12 16 14" })]
										}), job.type]
									})
								]
							})] }), /* @__PURE__ */ jsx("a", {
								href: "mailto:zytrixon@gmail.com",
								className: "magnetic-btn",
								style: {
									padding: "12px 32px",
									fontSize: 14
								},
								children: "Apply Now"
							})]
						}, job.id))
					})]
				}),
				/* @__PURE__ */ jsx(CoreValuesSection, {}),
				/* @__PURE__ */ jsx(GlobalFootprint, {}),
				/* @__PURE__ */ jsx(TeamSection, {}),
				/* @__PURE__ */ jsx(TestimonialsSection, {}),
				/* @__PURE__ */ jsx(FAQSection, {}),
				/* @__PURE__ */ jsx(FooterCTA, {}),
				/* @__PURE__ */ jsx(ContactSection, {})
			]
		}),
		/* @__PURE__ */ jsx(Footer, {})
	] });
}
//#endregion
export { Careers as default };

//# sourceMappingURL=Careers-D_9ZIKOj.js.map