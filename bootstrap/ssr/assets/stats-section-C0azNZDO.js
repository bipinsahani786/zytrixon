import { useEffect, useRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//#region resources/js/components/landing/stats-section.tsx
gsap.registerPlugin(ScrollTrigger);
var STATS = [
	{
		value: 50,
		suffix: "+",
		label: "Projects Done"
	},
	{
		value: 98,
		suffix: "%",
		label: "Success Rate"
	},
	{
		value: 20,
		suffix: "+",
		label: "Expert Engineers"
	},
	{
		value: 5,
		suffix: "+",
		label: "Countries Served"
	}
];
function StatsSection() {
	const sectionRef = useRef(null);
	const numbersRef = useRef([]);
	useEffect(() => {
		if (!sectionRef.current) return;
		const ctx = gsap.context(() => {
			STATS.forEach((stat, i) => {
				const el = numbersRef.current[i];
				if (!el) return;
				const obj = { val: 0 };
				ScrollTrigger.create({
					trigger: sectionRef.current,
					start: "top 80%",
					once: true,
					onEnter: () => {
						gsap.to(obj, {
							val: stat.value,
							duration: 2,
							ease: "power2.out",
							onUpdate: () => {
								el.textContent = Math.round(obj.val).toString();
							}
						});
					}
				});
			});
			gsap.fromTo(sectionRef.current, {
				opacity: 0,
				y: 60
			}, {
				opacity: 1,
				y: 0,
				duration: .8,
				ease: "power3.out",
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top 85%",
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
		children: /* @__PURE__ */ jsx("div", {
			style: {
				display: "grid",
				gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
				gap: "48px",
				maxWidth: "1000px",
				margin: "0 auto",
				textAlign: "center"
			},
			children: STATS.map((stat, i) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
				className: "stat-number",
				children: [/* @__PURE__ */ jsx("span", {
					ref: (el) => {
						numbersRef.current[i] = el;
					},
					children: "0"
				}), /* @__PURE__ */ jsx("span", {
					className: "stat-suffix",
					children: stat.suffix
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "stat-label",
				children: stat.label
			})] }, i))
		})
	});
}
//#endregion
export { StatsSection as default };

//# sourceMappingURL=stats-section-C0azNZDO.js.map