import { useEffect, useRef, useState } from "react";
import { jsx } from "react/jsx-runtime";
//#region resources/js/components/landing/lazy-section.tsx
function LazySection({ children, minHeight = "50vh", threshold = 0, rootMargin = "800px 0px" }) {
	const [isVisible, setIsVisible] = useState(typeof window === "undefined");
	const sectionRef = useRef(null);
	useEffect(() => {
		if (isVisible) return;
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setIsVisible(true);
				if (sectionRef.current) observer.unobserve(sectionRef.current);
			}
		}, {
			root: null,
			rootMargin,
			threshold
		});
		if (sectionRef.current) observer.observe(sectionRef.current);
		return () => {
			if (sectionRef.current) observer.unobserve(sectionRef.current);
		};
	}, [
		isVisible,
		rootMargin,
		threshold
	]);
	return /* @__PURE__ */ jsx("div", {
		ref: sectionRef,
		style: {
			minHeight: isVisible ? "auto" : minHeight,
			width: "100%"
		},
		children: isVisible && children
	});
}
//#endregion
export { LazySection as t };

//# sourceMappingURL=lazy-section-Bm1gTwLP.js.map