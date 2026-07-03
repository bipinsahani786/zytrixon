import { Link } from "@inertiajs/react";
import { useCallback, useEffect, useRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//#region resources/js/components/landing/footer-cta.tsx
gsap.registerPlugin(ScrollTrigger);
function FooterCTA() {
	const sectionRef = useRef(null);
	const headlineRef = useRef(null);
	const btnRef = useRef(null);
	const handleMouseMove = useCallback((e) => {
		if (!btnRef.current) return;
		const rect = btnRef.current.getBoundingClientRect();
		const centerX = rect.left + rect.width / 2;
		const centerY = rect.top + rect.height / 2;
		const distX = e.clientX - centerX;
		const distY = e.clientY - centerY;
		gsap.to(btnRef.current, {
			x: distX * .25,
			y: distY * .25,
			duration: .3,
			ease: "power2.out"
		});
	}, []);
	const handleMouseLeave = useCallback(() => {
		if (!btnRef.current) return;
		gsap.to(btnRef.current, {
			x: 0,
			y: 0,
			duration: .5,
			ease: "elastic.out(1, 0.4)"
		});
	}, []);
	useEffect(() => {
		if (!sectionRef.current) return;
		const ctx = gsap.context(() => {
			gsap.fromTo(headlineRef.current, {
				opacity: 0,
				y: 60
			}, {
				opacity: 1,
				y: 0,
				duration: .9,
				ease: "power3.out",
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top 75%",
					once: true
				}
			});
		}, sectionRef);
		return () => ctx.revert();
	}, []);
	return /* @__PURE__ */ jsxs("section", {
		ref: sectionRef,
		style: {
			background: "var(--zy-black)",
			padding: "160px var(--zy-section-pad-x)",
			textAlign: "center",
			borderTop: "1px solid var(--zy-gray-border)"
		},
		children: [
			/* @__PURE__ */ jsxs("h2", {
				ref: headlineRef,
				style: {
					fontFamily: "var(--font-heading)",
					fontSize: "clamp(36px, 6vw, 72px)",
					fontWeight: 700,
					lineHeight: 1.1,
					color: "var(--zy-white)",
					maxWidth: "800px",
					margin: "0 auto",
					letterSpacing: "-0.03em"
				},
				children: [
					"Let's Build Something",
					" ",
					/* @__PURE__ */ jsx("span", {
						style: { color: "var(--zy-white)" },
						children: "Extraordinary"
					})
				]
			}),
			/* @__PURE__ */ jsx("p", {
				style: {
					fontSize: "18px",
					color: "var(--zy-gray-text)",
					maxWidth: "500px",
					margin: "28px auto 0",
					lineHeight: 1.6
				},
				children: "Ready to transform your idea into reality? Let's start the conversation."
			}),
			/* @__PURE__ */ jsx("div", {
				style: { marginTop: "48px" },
				onMouseMove: handleMouseMove,
				onMouseLeave: handleMouseLeave,
				children: /* @__PURE__ */ jsxs(Link, {
					ref: btnRef,
					href: "/contact",
					className: "magnetic-btn",
					style: {
						padding: "20px 56px",
						fontSize: "15px"
					},
					children: ["Start a Project", /* @__PURE__ */ jsx("svg", {
						className: "btn-arrow",
						width: "18",
						height: "18",
						viewBox: "0 0 24 24",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "2.5",
						children: /* @__PURE__ */ jsx("path", { d: "M5 12h14M12 5l7 7-7 7" })
					})]
				})
			})
		]
	});
}
//#endregion
export { FooterCTA as default };

//# sourceMappingURL=footer-cta-DYRRvpzz.js.map