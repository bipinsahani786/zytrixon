import { t as InnerPageHero } from "./inner-page-hero-Dba8nTQT.js";
import { t as PublicLayout } from "./PublicLayout-Cx-2KrXT.js";
import { t as BlogCard } from "./BlogCard-Dv5YwZ98.js";
import { t as FilterTabs } from "./FilterTabs-BUfl8z54.js";
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { CheckCircle2, Send } from "lucide-react";
//#region resources/js/components/common/NewsletterBox.tsx
/**
* NewsletterBox: Reusable email subscription form for updates & insights.
*/
function NewsletterBox({ title = "Stay Ahead of the Curve", subtitle = "Get high-impact engineering insights, case studies, and architecture tips delivered monthly.", buttonText = "Subscribe", className = "" }) {
	const [email, setEmail] = useState("");
	const [subscribed, setSubscribed] = useState(false);
	const handleSubmit = (e) => {
		e.preventDefault();
		if (email) {
			setSubscribed(true);
			setEmail("");
		}
	};
	return /* @__PURE__ */ jsx("div", {
		className: `bg-card text-card-foreground border border-border rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto shadow-lg relative overflow-hidden ${className}`,
		children: /* @__PURE__ */ jsxs("div", {
			className: "relative z-10",
			children: [
				/* @__PURE__ */ jsx("span", {
					className: "inline-block font-heading text-xs font-bold uppercase tracking-widest text-primary mb-3 px-3 py-1 rounded-full bg-primary/10 border border-primary/20",
					children: "INSIGHTS & NEWSLETTER"
				}),
				/* @__PURE__ */ jsx("h3", {
					className: "font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground mb-3 tracking-tight",
					children: title
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-muted-foreground text-sm sm:text-base max-w-lg mx-auto mb-8 leading-relaxed",
					children: subtitle
				}),
				subscribed ? /* @__PURE__ */ jsxs("div", {
					className: "inline-flex items-center gap-2 text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-6 py-3 rounded-full text-sm font-semibold",
					children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4" }), /* @__PURE__ */ jsx("span", { children: "Thank you! You're now on our insider list." })]
				}) : /* @__PURE__ */ jsxs("form", {
					onSubmit: handleSubmit,
					className: "flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto",
					children: [/* @__PURE__ */ jsx("input", {
						type: "email",
						value: email,
						onChange: (e) => setEmail(e.target.value),
						placeholder: "Enter your work email",
						required: true,
						className: "w-full px-5 py-3.5 rounded-full bg-background border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200"
					}), /* @__PURE__ */ jsxs("button", {
						type: "submit",
						className: "w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-heading font-bold text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_20px_var(--accent-cyan-glow)] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer shrink-0",
						children: [/* @__PURE__ */ jsx("span", { children: buttonText }), /* @__PURE__ */ jsx(Send, { className: "w-3.5 h-3.5" })]
					})]
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-muted-foreground text-xs mt-4",
					children: "Zero spam. Unsubscribe anytime with one click."
				})
			]
		})
	});
}
//#endregion
//#region resources/js/pages/Blog.tsx
var FEATURED_POST = {
	slug: "the-future-of-enterprise-architecture",
	title: "The Future of Enterprise Architecture: Serverless Meets Edge Computing",
	category: "Engineering",
	date: "May 24, 2026",
	readTime: "8 min read",
	excerpt: "Discover how modern enterprises are leveraging edge computing and serverless architectures to reduce latency, cut cloud costs, and scale globally without DevOps friction.",
	image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
};
var CATEGORIES = [
	"All Articles",
	"Engineering",
	"AI & Automation",
	"Design UI/UX",
	"Cybersecurity"
];
var BLOG_POSTS = [
	{
		slug: "mastering-gsap-for-modern-react-applications",
		title: "Mastering GSAP for Modern React Applications",
		category: "Engineering",
		date: "May 18, 2026",
		readTime: "6 min read",
		excerpt: "A comprehensive guide to buttery-smooth scrolling, timelines, and micro-interactions in modern React apps.",
		image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80"
	},
	{
		slug: "how-to-implement-zero-trust-security-in-saas",
		title: "How to Implement Zero-Trust Security in SaaS",
		category: "Cybersecurity",
		date: "May 12, 2026",
		readTime: "10 min read",
		excerpt: "Why perimeter security is dead and how modern cloud architectures enforce cryptographic least-privilege access.",
		image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
	},
	{
		slug: "designing-for-the-dark-mode-best-practices",
		title: "Designing for Dark Mode: Contrast, Gradients & Visual Hierarchy",
		category: "Design UI/UX",
		date: "May 05, 2026",
		readTime: "5 min read",
		excerpt: "Best practices for rich, high-contrast dark mode interfaces that avoid pure black and reduce eye fatigue.",
		image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80"
	},
	{
		slug: "why-next-js-15-is-a-game-changer-for-seo",
		title: "Why Server-Side Rendering & Inertia are Crucial for Technical SEO",
		category: "Engineering",
		date: "Apr 28, 2026",
		readTime: "7 min read",
		excerpt: "How full HTML pre-rendering ensures instantaneous crawler indexing and superior Core Web Vitals rankings.",
		image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
	},
	{
		slug: "automating-customer-support-with-custom-llms",
		title: "Automating Customer Support with Autonomous LLM Agents",
		category: "AI & Automation",
		date: "Apr 21, 2026",
		readTime: "9 min read",
		excerpt: "Deploying RAG pipelines and autonomous tool-using agents for 99% first-contact resolution in enterprise SaaS.",
		image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
	},
	{
		slug: "migrating-from-monolith-to-microservices",
		title: "Migrating from Monolith to Event-Driven Microservices",
		category: "Engineering",
		date: "Apr 15, 2026",
		readTime: "11 min read",
		excerpt: "Step-by-step architectural blueprint to break down monolithic bottlenecks without downtime or data corruption.",
		image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
	}
];
function Blog() {
	const [activeCategory, setActiveCategory] = useState("All Articles");
	const filteredPosts = activeCategory === "All Articles" ? BLOG_POSTS : BLOG_POSTS.filter((p) => p.category === activeCategory);
	return /* @__PURE__ */ jsxs(PublicLayout, {
		seo: {
			title: "Engineering Insights & Tech Blog | Zytrixon Tech",
			description: "Explore deep dives into AI, cloud architecture, modern design, and enterprise digital transformation from Zytrixon Tech."
		},
		showContactSection: true,
		children: [
			/* @__PURE__ */ jsx(InnerPageHero, {
				title: "Engineering Insights",
				subtitle: "Deep dives into AI, cloud architecture, modern design, and enterprise digital transformation."
			}),
			/* @__PURE__ */ jsx("section", {
				className: "max-w-7xl mx-auto px-6 sm:px-10 py-12",
				children: /* @__PURE__ */ jsx(BlogCard, {
					post: FEATURED_POST,
					featured: true
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "max-w-7xl mx-auto px-6 sm:px-10 py-4",
				children: /* @__PURE__ */ jsx(FilterTabs, {
					tabs: CATEGORIES,
					activeTab: activeCategory,
					onTabChange: setActiveCategory
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "max-w-7xl mx-auto px-6 sm:px-10 py-12 pb-24",
				children: /* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
					children: filteredPosts.map((post) => /* @__PURE__ */ jsx(BlogCard, { post }, post.slug))
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "border-t border-border/50 py-16 sm:py-24 px-6 sm:px-10 bg-card/20",
				children: /* @__PURE__ */ jsx(NewsletterBox, {})
			})
		]
	});
}
//#endregion
export { Blog as default };

//# sourceMappingURL=Blog-CFbWMAAg.js.map