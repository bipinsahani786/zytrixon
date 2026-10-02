import { a as useTheme } from "./custom-cursor-B2HeUCYC.js";
import { useEffect, useRef, useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//#region resources/js/components/landing/contact-section.tsx
gsap.registerPlugin(ScrollTrigger);
var SERVICE_OPTIONS = [
	"Web Development",
	"App Development",
	"IoT Solutions",
	"Digital Marketing",
	"UI/UX Design",
	"Cloud & DevOps",
	"Other"
];
var BUDGET_OPTIONS = [
	"Under ₹50,000",
	"₹50,000 - ₹1,00,000",
	"₹1,00,000 - ₹5,00,000",
	"₹5,00,000+",
	"Not Sure"
];
function FieldWrapper({ children, isLight, hasError = false }) {
	return /* @__PURE__ */ jsx("div", {
		className: "zy-card",
		style: {
			padding: "2px",
			borderRadius: "8px",
			border: hasError ? "1px solid #ef4444" : void 0,
			boxShadow: hasError ? "0 0 0 1px rgba(239, 68, 68, 0.4)" : void 0
		},
		children: /* @__PURE__ */ jsx("div", {
			style: {
				background: isLight ? "#ffffff" : "#111111",
				borderRadius: "6px"
			},
			children
		})
	});
}
function ContactSection() {
	const sectionRef = useRef(null);
	const { theme } = useTheme();
	const isLight = theme === "light";
	const [formData, setFormData] = useState({
		name: "",
		phone: "",
		email: "",
		service: "",
		budget: "",
		message: ""
	});
	const [agreed, setAgreed] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [errorMessage, setErrorMessage] = useState(null);
	const [fieldErrors, setFieldErrors] = useState({});
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
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!agreed || isSubmitting) return;
		setIsSubmitting(true);
		setErrorMessage(null);
		setFieldErrors({});
		try {
			const csrfToken = document.querySelector("meta[name=\"csrf-token\"]")?.getAttribute("content") || "";
			const response = await fetch("/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
					"X-CSRF-TOKEN": csrfToken,
					"X-Requested-With": "XMLHttpRequest"
				},
				body: JSON.stringify(formData)
			});
			let data = null;
			try {
				data = await response.json();
			} catch {}
			if (!response.ok) {
				if (response.status === 422 && data?.errors) {
					const errors = {};
					Object.keys(data.errors).forEach((key) => {
						errors[key] = data.errors[key][0];
					});
					setFieldErrors(errors);
					setErrorMessage(data.message || "Please verify the required fields and try again.");
				} else if (response.status === 419) setErrorMessage("Your session has timed out. Please refresh the page and try again.");
				else setErrorMessage(data?.message || "Could not submit inquiry. Please try again.");
				setIsSubmitting(false);
				return;
			}
			setSubmitted(true);
			setFormData({
				name: "",
				phone: "",
				email: "",
				service: "",
				budget: "",
				message: ""
			});
			setAgreed(false);
		} catch (err) {
			setErrorMessage("Unable to process inquiry. Please check your details and try again.");
		} finally {
			setIsSubmitting(false);
		}
	};
	const inputStyle = {
		width: "100%",
		background: "transparent",
		border: "none",
		padding: "12px 16px",
		color: isLight ? "#0f172a" : "var(--zy-white, #ffffff)",
		fontSize: 14,
		fontFamily: "var(--font-sans)",
		outline: "none",
		boxSizing: "border-box"
	};
	return /* @__PURE__ */ jsxs("section", {
		ref: sectionRef,
		id: "contact",
		className: "zy-section",
		style: { background: "var(--zy-black)" },
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "zy-section-header",
				style: { textAlign: "center" },
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "zy-section-label",
						children: "Let's Talk"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "zy-section-title",
						children: "Get a Free Quote"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "zy-section-subtitle",
						style: { margin: "20px auto 0" },
						children: "Tell us about your project. We reply within 2 hours."
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "contact-grid",
				style: {
					maxWidth: 1100,
					margin: "0 auto",
					display: "grid",
					gridTemplateColumns: "1fr 1.2fr",
					gap: 48,
					alignItems: "start"
				},
				children: [/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsxs("div", {
						style: {
							display: "flex",
							flexDirection: "column",
							gap: 16,
							marginBottom: 32
						},
						children: [
							/* @__PURE__ */ jsxs("a", {
								href: "tel:+917049711475",
								className: "zy-card",
								style: {
									display: "flex",
									alignItems: "center",
									gap: 16,
									padding: "16px 20px",
									textDecoration: "none",
									color: "var(--zy-white)"
								},
								children: [/* @__PURE__ */ jsx("div", {
									style: {
										width: 44,
										height: 44,
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										background: isLight ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.05)",
										flexShrink: 0,
										borderRadius: "8px"
									},
									children: /* @__PURE__ */ jsx("svg", {
										width: "20",
										height: "20",
										viewBox: "0 0 24 24",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "1.5",
										children: /* @__PURE__ */ jsx("path", { d: "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" })
									})
								}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
									style: {
										fontSize: 10,
										color: "var(--zy-gray-text)",
										textTransform: "uppercase",
										letterSpacing: "0.1em",
										marginBottom: 2
									},
									children: "Phone"
								}), /* @__PURE__ */ jsx("div", {
									style: {
										fontFamily: "var(--font-heading)",
										fontWeight: 600
									},
									children: "+91 70497 11475"
								})] })]
							}),
							/* @__PURE__ */ jsxs("a", {
								href: "mailto:zytrixon@gmail.com",
								className: "zy-card",
								style: {
									display: "flex",
									alignItems: "center",
									gap: 16,
									padding: "16px 20px",
									textDecoration: "none",
									color: "var(--zy-white)"
								},
								children: [/* @__PURE__ */ jsx("div", {
									style: {
										width: 44,
										height: 44,
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										background: isLight ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.05)",
										flexShrink: 0,
										borderRadius: "8px"
									},
									children: /* @__PURE__ */ jsxs("svg", {
										width: "20",
										height: "20",
										viewBox: "0 0 24 24",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "1.5",
										children: [/* @__PURE__ */ jsx("rect", {
											x: "2",
											y: "4",
											width: "20",
											height: "16",
											rx: "2"
										}), /* @__PURE__ */ jsx("path", { d: "M22 7l-10 7L2 7" })]
									})
								}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
									style: {
										fontSize: 10,
										color: "var(--zy-gray-text)",
										textTransform: "uppercase",
										letterSpacing: "0.1em",
										marginBottom: 2
									},
									children: "Email"
								}), /* @__PURE__ */ jsx("div", {
									style: {
										fontFamily: "var(--font-heading)",
										fontWeight: 600
									},
									children: "zytrixon@gmail.com"
								})] })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "zy-card",
								style: {
									display: "flex",
									alignItems: "center",
									gap: 16,
									padding: "16px 20px"
								},
								children: [/* @__PURE__ */ jsx("div", {
									style: {
										width: 44,
										height: 44,
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										background: isLight ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.05)",
										flexShrink: 0,
										borderRadius: "8px"
									},
									children: /* @__PURE__ */ jsxs("svg", {
										width: "20",
										height: "20",
										viewBox: "0 0 24 24",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "1.5",
										children: [/* @__PURE__ */ jsx("path", { d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" }), /* @__PURE__ */ jsx("circle", {
											cx: "12",
											cy: "10",
											r: "3"
										})]
									})
								}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
									style: {
										fontSize: 10,
										color: "var(--zy-gray-text)",
										textTransform: "uppercase",
										letterSpacing: "0.1em",
										marginBottom: 2
									},
									children: "Office"
								}), /* @__PURE__ */ jsx("div", {
									style: {
										fontFamily: "var(--font-heading)",
										fontWeight: 600
									},
									children: "Patna, Bihar - 800001"
								})] })]
							})
						]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "zy-card",
						style: {
							height: 220,
							filter: "grayscale(100%)",
							transition: "filter 0.5s ease",
							padding: 0
						},
						onMouseEnter: (e) => {
							e.currentTarget.style.filter = "grayscale(0%)";
						},
						onMouseLeave: (e) => {
							e.currentTarget.style.filter = "grayscale(100%)";
						},
						children: /* @__PURE__ */ jsx("iframe", {
							src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115132.8610723485!2d85.0730022!3d25.6081756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58dce680e00f%3A0x6b41cb91eb44d8b9!2sPatna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1",
							width: "100%",
							height: "220",
							style: { border: 0 },
							allowFullScreen: true,
							loading: "lazy",
							referrerPolicy: "no-referrer-when-downgrade",
							title: "Zytrixon Office Location"
						})
					}),
					/* @__PURE__ */ jsxs("div", {
						style: {
							marginTop: 16,
							display: "flex",
							alignItems: "center",
							gap: 8,
							fontSize: 12,
							color: "var(--zy-gray-text)"
						},
						children: [/* @__PURE__ */ jsxs("svg", {
							width: "14",
							height: "14",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "#4ecdc4",
							strokeWidth: "2",
							children: [/* @__PURE__ */ jsx("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }), /* @__PURE__ */ jsx("path", { d: "M9 12l2 2 4-4" })]
						}), "We reply within 2 hours · 100% confidential"]
					})
				] }), /* @__PURE__ */ jsx("div", {
					className: "zy-card",
					style: { padding: 32 },
					children: submitted ? /* @__PURE__ */ jsxs("div", {
						style: {
							textAlign: "center",
							padding: "40px 16px",
							animation: "fadeInUp 0.4s ease"
						},
						children: [
							/* @__PURE__ */ jsx("div", {
								style: {
									width: 64,
									height: 64,
									margin: "0 auto 20px",
									borderRadius: "50%",
									background: "rgba(16, 185, 129, 0.15)",
									border: "1px solid rgba(16, 185, 129, 0.3)",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									fontSize: 28
								},
								children: "✓"
							}),
							/* @__PURE__ */ jsx("h3", {
								style: {
									fontFamily: "var(--font-heading)",
									fontSize: 22,
									fontWeight: 700,
									color: "var(--zy-white)",
									marginBottom: 8
								},
								children: "Enquiry Received!"
							}),
							/* @__PURE__ */ jsx("p", {
								style: {
									color: "var(--zy-gray-text)",
									fontSize: 14,
									maxWidth: 420,
									margin: "0 auto 24px",
									lineHeight: 1.6
								},
								children: "Your project details have been logged in our secure system. Our team will review them and reach out within 2 hours."
							}),
							/* @__PURE__ */ jsxs("div", {
								style: {
									display: "flex",
									flexDirection: "column",
									gap: 12,
									maxWidth: 360,
									margin: "0 auto"
								},
								children: [/* @__PURE__ */ jsx("a", {
									href: "https://wa.me/917049711475?text=Hi%20Zytrixon%20Tech!%20I%20just%20submitted%20a%20project%20inquiry%20on%20your%20website%20and%20would%20love%20to%20connect.",
									target: "_blank",
									rel: "noreferrer",
									className: "magnetic-btn",
									style: {
										width: "100%",
										padding: "12px 20px",
										fontSize: 13,
										justifyContent: "center",
										textDecoration: "none",
										background: "#25D366",
										color: "#ffffff",
										border: "none"
									},
									children: "💬 Want Instant Reply? Chat on WhatsApp"
								}), /* @__PURE__ */ jsx("button", {
									type: "button",
									onClick: () => setSubmitted(false),
									style: {
										background: "transparent",
										border: "1px solid var(--zy-gray-border, rgba(255,255,255,0.15))",
										color: "var(--zy-white)",
										padding: "10px 16px",
										borderRadius: "8px",
										fontSize: 13,
										cursor: "pointer"
									},
									children: "Submit Another Enquiry"
								})]
							})
						]
					}) : /* @__PURE__ */ jsxs("form", {
						onSubmit: handleSubmit,
						children: [
							errorMessage && /* @__PURE__ */ jsx("div", {
								style: {
									padding: "12px 16px",
									marginBottom: 16,
									borderRadius: "8px",
									background: "rgba(239, 68, 68, 0.1)",
									border: "1px solid rgba(239, 68, 68, 0.25)",
									color: "#f87171",
									fontSize: 13
								},
								children: errorMessage
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "contact-form-row",
								style: {
									display: "grid",
									gridTemplateColumns: "1fr 1fr",
									gap: 16,
									marginBottom: 16
								},
								children: [/* @__PURE__ */ jsxs("div", { children: [
									/* @__PURE__ */ jsx("label", {
										style: {
											display: "block",
											fontSize: 11,
											color: "var(--zy-gray-text)",
											marginBottom: 6,
											textTransform: "uppercase",
											letterSpacing: "0.05em"
										},
										children: "Full Name *"
									}),
									/* @__PURE__ */ jsx(FieldWrapper, {
										isLight,
										hasError: Boolean(fieldErrors.name),
										children: /* @__PURE__ */ jsx("input", {
											type: "text",
											required: true,
											value: formData.name,
											onChange: (e) => setFormData((p) => ({
												...p,
												name: e.target.value
											})),
											placeholder: "Your Name",
											style: inputStyle
										})
									}),
									fieldErrors.name && /* @__PURE__ */ jsx("span", {
										style: {
											display: "block",
											color: "#ef4444",
											fontSize: 11,
											marginTop: 4
										},
										children: fieldErrors.name
									})
								] }), /* @__PURE__ */ jsxs("div", { children: [
									/* @__PURE__ */ jsx("label", {
										style: {
											display: "block",
											fontSize: 11,
											color: "var(--zy-gray-text)",
											marginBottom: 6,
											textTransform: "uppercase",
											letterSpacing: "0.05em"
										},
										children: "Phone *"
									}),
									/* @__PURE__ */ jsx(FieldWrapper, {
										isLight,
										hasError: Boolean(fieldErrors.phone),
										children: /* @__PURE__ */ jsx("input", {
											type: "tel",
											required: true,
											value: formData.phone,
											onChange: (e) => setFormData((p) => ({
												...p,
												phone: e.target.value
											})),
											placeholder: "+91 XXXXX XXXXX",
											style: inputStyle
										})
									}),
									fieldErrors.phone && /* @__PURE__ */ jsx("span", {
										style: {
											display: "block",
											color: "#ef4444",
											fontSize: 11,
											marginTop: 4
										},
										children: fieldErrors.phone
									})
								] })]
							}),
							/* @__PURE__ */ jsxs("div", {
								style: { marginBottom: 16 },
								children: [
									/* @__PURE__ */ jsx("label", {
										style: {
											display: "block",
											fontSize: 11,
											color: "var(--zy-gray-text)",
											marginBottom: 6,
											textTransform: "uppercase",
											letterSpacing: "0.05em"
										},
										children: "Email *"
									}),
									/* @__PURE__ */ jsx(FieldWrapper, {
										isLight,
										hasError: Boolean(fieldErrors.email),
										children: /* @__PURE__ */ jsx("input", {
											type: "email",
											required: true,
											value: formData.email,
											onChange: (e) => setFormData((p) => ({
												...p,
												email: e.target.value
											})),
											placeholder: "you@company.com",
											style: inputStyle
										})
									}),
									fieldErrors.email && /* @__PURE__ */ jsx("span", {
										style: {
											display: "block",
											color: "#ef4444",
											fontSize: 11,
											marginTop: 4
										},
										children: fieldErrors.email
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "contact-form-row",
								style: {
									display: "grid",
									gridTemplateColumns: "1fr 1fr",
									gap: 16,
									marginBottom: 16
								},
								children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
									style: {
										display: "block",
										fontSize: 11,
										color: "var(--zy-gray-text)",
										marginBottom: 6,
										textTransform: "uppercase",
										letterSpacing: "0.05em"
									},
									children: "Service Needed"
								}), /* @__PURE__ */ jsx(FieldWrapper, {
									isLight,
									children: /* @__PURE__ */ jsxs("select", {
										value: formData.service,
										onChange: (e) => setFormData((p) => ({
											...p,
											service: e.target.value
										})),
										style: {
											...inputStyle,
											appearance: "none",
											cursor: "pointer",
											color: !formData.service ? isLight ? "#94a3b8" : "#64748b" : isLight ? "#0f172a" : "var(--zy-white, #ffffff)"
										},
										children: [/* @__PURE__ */ jsx("option", {
											value: "",
											style: {
												color: "#64748b",
												background: isLight ? "#ffffff" : "#111111"
											},
											children: "Select Service"
										}), SERVICE_OPTIONS.map((s) => /* @__PURE__ */ jsx("option", {
											value: s,
											style: {
												color: isLight ? "#0f172a" : "#ffffff",
												background: isLight ? "#ffffff" : "#111111"
											},
											children: s
										}, s))]
									})
								})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
									style: {
										display: "block",
										fontSize: 11,
										color: "var(--zy-gray-text)",
										marginBottom: 6,
										textTransform: "uppercase",
										letterSpacing: "0.05em"
									},
									children: "Budget Range"
								}), /* @__PURE__ */ jsx(FieldWrapper, {
									isLight,
									children: /* @__PURE__ */ jsxs("select", {
										value: formData.budget,
										onChange: (e) => setFormData((p) => ({
											...p,
											budget: e.target.value
										})),
										style: {
											...inputStyle,
											appearance: "none",
											cursor: "pointer",
											color: !formData.budget ? isLight ? "#94a3b8" : "#64748b" : isLight ? "#0f172a" : "var(--zy-white, #ffffff)"
										},
										children: [/* @__PURE__ */ jsx("option", {
											value: "",
											style: {
												color: "#64748b",
												background: isLight ? "#ffffff" : "#111111"
											},
											children: "Select Budget"
										}), BUDGET_OPTIONS.map((b) => /* @__PURE__ */ jsx("option", {
											value: b,
											style: {
												color: isLight ? "#0f172a" : "#ffffff",
												background: isLight ? "#ffffff" : "#111111"
											},
											children: b
										}, b))]
									})
								})] })]
							}),
							/* @__PURE__ */ jsxs("div", {
								style: { marginBottom: 24 },
								children: [/* @__PURE__ */ jsx("label", {
									style: {
										display: "block",
										fontSize: 11,
										color: "var(--zy-gray-text)",
										marginBottom: 6,
										textTransform: "uppercase",
										letterSpacing: "0.05em"
									},
									children: "Project Details"
								}), /* @__PURE__ */ jsx(FieldWrapper, {
									isLight,
									children: /* @__PURE__ */ jsx("textarea", {
										value: formData.message,
										onChange: (e) => setFormData((p) => ({
											...p,
											message: e.target.value
										})),
										placeholder: "Tell us about your project requirements...",
										rows: 4,
										style: {
											...inputStyle,
											resize: "vertical",
											minHeight: 80
										}
									})
								})]
							}),
							/* @__PURE__ */ jsx("div", {
								style: { marginBottom: 24 },
								children: /* @__PURE__ */ jsxs("label", {
									htmlFor: "contact-consent",
									style: {
										display: "flex",
										alignItems: "flex-start",
										gap: 12,
										cursor: "pointer",
										fontSize: 13,
										lineHeight: 1.5,
										color: isLight ? "#555555" : "var(--zy-gray-text)",
										userSelect: "none"
									},
									children: [/* @__PURE__ */ jsx("input", {
										id: "contact-consent",
										type: "checkbox",
										required: true,
										checked: agreed,
										onChange: (e) => setAgreed(e.target.checked),
										style: {
											width: 18,
											height: 18,
											minWidth: 18,
											minHeight: 18,
											marginTop: 2,
											accentColor: isLight ? "#000000" : "#ffffff",
											cursor: "pointer"
										}
									}), /* @__PURE__ */ jsxs("span", { children: [
										"I agree to the",
										" ",
										/* @__PURE__ */ jsx("a", {
											href: "/terms-and-conditions",
											target: "_blank",
											rel: "noopener noreferrer",
											onClick: (e) => e.stopPropagation(),
											style: {
												color: isLight ? "#000000" : "var(--zy-white)",
												textDecoration: "underline",
												textUnderlineOffset: "3px",
												fontWeight: 600
											},
											children: "Terms & Conditions"
										}),
										" ",
										"and",
										" ",
										/* @__PURE__ */ jsx("a", {
											href: "/privacy-policy",
											target: "_blank",
											rel: "noopener noreferrer",
											onClick: (e) => e.stopPropagation(),
											style: {
												color: isLight ? "#000000" : "var(--zy-white)",
												textDecoration: "underline",
												textUnderlineOffset: "3px",
												fontWeight: 600
											},
											children: "Privacy Policy"
										}),
										", and consent to being contacted regarding my inquiry.",
										" ",
										/* @__PURE__ */ jsx("span", {
											style: { color: "#ef4444" },
											children: "*"
										})
									] })]
								})
							}),
							/* @__PURE__ */ jsx("button", {
								type: "submit",
								disabled: isSubmitting,
								className: "magnetic-btn",
								style: {
									width: "100%",
									padding: "16px",
									fontSize: 14,
									justifyContent: "center",
									opacity: isSubmitting ? .7 : 1,
									cursor: isSubmitting ? "not-allowed" : "pointer"
								},
								children: isSubmitting ? /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsxs("svg", {
									className: "animate-spin",
									width: "16",
									height: "16",
									viewBox: "0 0 24 24",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: "2.5",
									style: {
										animation: "spin 1s linear infinite",
										marginRight: 8
									},
									children: [/* @__PURE__ */ jsx("circle", {
										cx: "12",
										cy: "12",
										r: "10",
										stroke: "currentColor",
										strokeWidth: "4",
										className: "opacity-25"
									}), /* @__PURE__ */ jsx("path", {
										fill: "currentColor",
										d: "M4 12a8 8 0 018-8v8H4z",
										className: "opacity-75"
									})]
								}), "Submitting Enquiry..."] }) : /* @__PURE__ */ jsxs(Fragment$1, { children: ["Send Message", /* @__PURE__ */ jsx("svg", {
									className: "btn-arrow",
									width: "16",
									height: "16",
									viewBox: "0 0 24 24",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: "2.5",
									children: /* @__PURE__ */ jsx("path", { d: "M5 12h14M12 5l7 7-7 7" })
								})] })
							})
						]
					})
				})]
			}),
			/* @__PURE__ */ jsx("style", { children: `
                @media (max-width: 768px) {
                    .contact-grid {
                        grid-template-columns: 1fr !important;
                    }
                    .contact-form-row {
                        grid-template-columns: 1fr !important;
                    }
                }
            ` })
		]
	});
}
//#endregion
export { ContactSection as t };

//# sourceMappingURL=contact-section-BAW46C7Q.js.map