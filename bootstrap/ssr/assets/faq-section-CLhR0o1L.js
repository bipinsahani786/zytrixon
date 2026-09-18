import { useEffect, useRef, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//#region resources/js/components/landing/faq-section.tsx
gsap.registerPlugin(ScrollTrigger);
var FAQS = [
	{
		q: "Do you work with international clients?",
		a: "Yes! While we are headquartered in Samastipur, Bihar, 60% of our clients are from USA, UK, and UAE. We operate across time zones with seamless communication via Slack, Jira, and regular video calls."
	},
	{
		q: "What technologies do you use?",
		a: "We use a modern, battle-tested stack: React, Next.js, Laravel, Node.js, React Native, Flutter, Python, AWS, Docker, and more. We choose the best tool for each project — no one-size-fits-all approach."
	},
	{
		q: "How much does a project cost?",
		a: "Every project is unique. A simple website starts from ₹50,000, while complex web/mobile apps range from ₹2L–₹20L+ depending on scope. Contact us for a free, detailed quote tailored to your needs."
	},
	{
		q: "What is your typical project timeline?",
		a: "A standard website takes 2-4 weeks. Mobile apps take 6-12 weeks. Complex platforms with IoT or AI take 3-6 months. We provide detailed timelines in our proposals with milestone-based delivery."
	},
	{
		q: "Do you offer post-launch support?",
		a: "Absolutely. Every project includes 30 days of free bug-fix support. We also offer monthly maintenance plans (₹5K–₹25K/month) that include monitoring, updates, backups, and feature additions."
	},
	{
		q: "Can you handle both design and development?",
		a: "Yes. We have a full in-house team covering UI/UX design, frontend, backend, DevOps, QA, and project management. You get a complete end-to-end solution — no third-party dependency."
	}
];
function FAQSection() {
	const sectionRef = useRef(null);
	const [openIndex, setOpenIndex] = useState(0);
	useEffect(() => {
		if (!sectionRef.current) return;
		const ctx = gsap.context(() => {
			gsap.fromTo(sectionRef.current, {
				opacity: 0,
				y: 40
			}, {
				opacity: 1,
				y: 0,
				duration: .8,
				ease: "power3.out",
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top 80%",
					once: true
				}
			});
		}, sectionRef);
		return () => ctx.revert();
	}, []);
	return /* @__PURE__ */ jsx("section", {
		ref: sectionRef,
		className: "zy-section",
		style: { background: "var(--zy-black)" },
		children: /* @__PURE__ */ jsxs("div", {
			style: {
				maxWidth: 800,
				margin: "0 auto"
			},
			children: [/* @__PURE__ */ jsxs("div", {
				className: "zy-section-header",
				style: { textAlign: "center" },
				children: [/* @__PURE__ */ jsx("span", {
					className: "zy-section-label",
					children: "FAQ"
				}), /* @__PURE__ */ jsx("h2", {
					className: "zy-section-title",
					children: "Frequently Asked Questions"
				})]
			}), /* @__PURE__ */ jsx("div", {
				style: {
					display: "flex",
					flexDirection: "column",
					gap: 8
				},
				children: FAQS.map((faq, i) => /* @__PURE__ */ jsxs("div", {
					className: "zy-card",
					style: {
						padding: 2,
						transition: "all 0.3s var(--zy-ease)",
						overflow: "hidden",
						background: "transparent"
					},
					children: [/* @__PURE__ */ jsxs("button", {
						onClick: () => setOpenIndex(openIndex === i ? null : i),
						style: {
							width: "100%",
							padding: "20px 24px",
							background: "transparent",
							border: "none",
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							gap: 16,
							textAlign: "left",
							fontFamily: "var(--font-heading)",
							fontSize: 15,
							fontWeight: 600,
							color: "var(--zy-white)",
							transition: "color 0.3s"
						},
						children: [faq.q, /* @__PURE__ */ jsx("svg", {
							width: "18",
							height: "18",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: "2",
							style: {
								transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)",
								transition: "transform 0.3s var(--zy-ease)",
								flexShrink: 0
							},
							children: /* @__PURE__ */ jsx("path", { d: "M6 9l6 6 6-6" })
						})]
					}), /* @__PURE__ */ jsx("div", {
						style: {
							maxHeight: openIndex === i ? 200 : 0,
							opacity: openIndex === i ? 1 : 0,
							padding: openIndex === i ? "0 24px 20px" : "0 24px",
							transition: "all 0.3s var(--zy-ease)",
							overflow: "hidden"
						},
						children: /* @__PURE__ */ jsx("p", {
							style: {
								fontSize: 14,
								color: "var(--zy-gray-text)",
								lineHeight: 1.7
							},
							children: faq.a
						})
					})]
				}, i))
			})]
		})
	});
}
//#endregion
export { FAQSection as t };

//# sourceMappingURL=faq-section-CLhR0o1L.js.map