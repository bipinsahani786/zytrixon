import { o as useTheme } from "./custom-cursor-BiK9FZ3v.js";
import { t as GradientCard } from "./GradientCard-CpqnXl0Y.js";
import { useEffect, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/lib/service-data.ts
function getServiceConfig(slug) {
	switch (slug) {
		case "ai-automation": return {
			themeColor: "#10b981",
			hero: {
				modelColor: "#10b981",
				badge: "Next-Gen AI"
			},
			valueProps: [
				{
					title: "Automated Workflows",
					desc: "Eliminate 90% of manual data entry with autonomous agents.",
					icon: "robot"
				},
				{
					title: "Predictive Analytics",
					desc: "Forecast trends with 99% accuracy using custom ML models.",
					icon: "brain"
				},
				{
					title: "24/7 Availability",
					desc: "LLM-powered chatbots that resolve customer queries instantly.",
					icon: "clock"
				},
				{
					title: "Cognitive Search",
					desc: "Find internal documents instantly using vector-based semantic search.",
					icon: "search"
				},
				{
					title: "Dynamic Pricing",
					desc: "Adjust pricing automatically based on real-time supply and demand.",
					icon: "dollar-sign"
				},
				{
					title: "Fraud Detection",
					desc: "Identify anomalies in milliseconds to protect your business assets.",
					icon: "shield"
				}
			],
			stats: [
				{
					value: "400%",
					label: "Efficiency Increase"
				},
				{
					value: "24/7",
					label: "Autonomous Operation"
				},
				{
					value: "99%",
					label: "Error Reduction"
				}
			],
			architecture: {
				title: "Neural Network Flow",
				steps: [
					"Data Ingestion",
					"Vector Embeddings",
					"LLM Processing",
					"Action Execution"
				]
			},
			methodology: {
				title: "Model Training Lifecycle",
				desc: "We follow a rigorous machine learning pipeline to ensure hallucination-free outputs.",
				steps: [
					{
						title: "Data Cleaning",
						desc: "Sanitizing and formatting raw datasets for optimal ingestion."
					},
					{
						title: "Embedding Gen",
						desc: "Creating high-dimensional vector representations of data."
					},
					{
						title: "Prompt Tuning",
						desc: "Iteratively refining prompts to reduce hallucinations."
					},
					{
						title: "RLHF Feedback",
						desc: "Human-in-the-loop reinforcement learning to align AI behavior."
					}
				]
			},
			qa: {
				title: "Model Validation",
				items: [
					"Bias Testing",
					"Edge Case Simulation",
					"Hallucination Checks",
					"Performance Benchmarking"
				]
			},
			security: { badges: [
				"SOC 2 Type II",
				"GDPR",
				"ISO 27001",
				"Private VPCs"
			] },
			integrations: [
				{
					name: "OpenAI",
					type: "LLM"
				},
				{
					name: "Pinecone",
					type: "Vector DB"
				},
				{
					name: "LangChain",
					type: "Framework"
				},
				{
					name: "HuggingFace",
					type: "Models"
				}
			],
			process: [
				{
					title: "Data Audit",
					desc: "Evaluating your existing data structures."
				},
				{
					title: "Model Selection",
					desc: "Choosing the right LLM or neural network."
				},
				{
					title: "Training & Fine-tuning",
					desc: "Adapting the model to your specific domain."
				},
				{
					title: "Deployment",
					desc: "Releasing the AI agents into production."
				},
				{
					title: "Monitoring",
					desc: "Continuous learning and RLHF."
				}
			],
			support: [
				{
					title: "Model Retraining",
					desc: "Periodic updates to keep the AI accurate.",
					icon: "activity"
				},
				{
					title: "Token Optimization",
					desc: "Reducing API costs through efficient prompting.",
					icon: "dollar-sign"
				},
				{
					title: "Agent Scaling",
					desc: "Adding new capabilities as your business grows.",
					icon: "maximize"
				}
			]
		};
		case "app-development": return {
			themeColor: "#8b5cf6",
			hero: {
				modelColor: "#8b5cf6",
				badge: "Mobile First"
			},
			valueProps: [
				{
					title: "Native Performance",
					desc: "Fluid 60fps animations and lightning-fast load times.",
					icon: "smartphone"
				},
				{
					title: "Cross-Platform",
					desc: "One codebase for iOS, Android, and Web using React Native.",
					icon: "layers"
				},
				{
					title: "Offline First",
					desc: "Seamless experience even with zero network connectivity.",
					icon: "wifi-off"
				},
				{
					title: "Biometric Security",
					desc: "FaceID and fingerprint integration out of the box.",
					icon: "fingerprint"
				},
				{
					title: "Push Notifications",
					desc: "Engage users instantly with targeted local and push alerts.",
					icon: "bell"
				},
				{
					title: "Deep Linking",
					desc: "Seamlessly transition users from web to native app flows.",
					icon: "link"
				}
			],
			stats: [
				{
					value: "4.9",
					label: "Average App Store Rating"
				},
				{
					value: "10M+",
					label: "Active Installs"
				},
				{
					value: "60fps",
					label: "Native Performance"
				}
			],
			architecture: {
				title: "Mobile Architecture",
				steps: [
					"React Native UI",
					"Redux State",
					"GraphQL Layer",
					"Native Modules"
				]
			},
			methodology: {
				title: "Agile Mobile Delivery",
				desc: "Iterative sprints focusing on user feedback and rapid prototyping.",
				steps: [
					{
						title: "Sprint Planning",
						desc: "Aligning app features with core business objectives."
					},
					{
						title: "Daily Standups",
						desc: "Syncing cross-functional teams to eliminate blockers."
					},
					{
						title: "Continuous Builds",
						desc: "Automated CI/CD pipelines deploying directly to TestFlight."
					},
					{
						title: "Sprint Retrospective",
						desc: "Analyzing user telemetry to improve the next iteration."
					}
				]
			},
			qa: {
				title: "Device Matrix Testing",
				items: [
					"Cross-Device Testing",
					"Battery Drain Analysis",
					"Network Throttling",
					"Accessibility Audits"
				]
			},
			security: { badges: [
				"App Store Compliant",
				"Biometric Auth",
				"Data Encryption",
				"OWASP Mobile"
			] },
			integrations: [
				{
					name: "Apple Pay",
					type: "Payments"
				},
				{
					name: "Firebase",
					type: "Backend"
				},
				{
					name: "Sentry",
					type: "Monitoring"
				},
				{
					name: "Twilio",
					type: "Communication"
				}
			],
			process: [
				{
					title: "UX Research",
					desc: "Mapping user journeys and wireframing."
				},
				{
					title: "Prototyping",
					desc: "Interactive designs using Figma."
				},
				{
					title: "Development",
					desc: "Building native and cross-platform code."
				},
				{
					title: "Beta Testing",
					desc: "TestFlight and Play Console rollouts."
				},
				{
					title: "Store Launch",
					desc: "ASO and publishing."
				}
			],
			support: [
				{
					title: "OS Updates",
					desc: "Ensuring compatibility with new iOS/Android versions.",
					icon: "smartphone"
				},
				{
					title: "Crash Analytics",
					desc: "24/7 monitoring of app stability.",
					icon: "activity"
				},
				{
					title: "Feature Rollouts",
					desc: "Over-the-air updates for immediate bug fixes.",
					icon: "shield"
				}
			]
		};
		case "digital-marketing":
		case "seo-digital-marketing": return {
			themeColor: "#f59e0b",
			hero: {
				modelColor: "#f59e0b",
				badge: "Data-Driven Growth"
			},
			valueProps: [
				{
					title: "Hyper-Targeting",
					desc: "Reach your exact ideal customer profile with precision.",
					icon: "target"
				},
				{
					title: "Conversion Optimization",
					desc: "Turn visitors into paying customers seamlessly.",
					icon: "trending-up"
				},
				{
					title: "ROI Tracking",
					desc: "Transparent reporting down to the exact dollar.",
					icon: "pie-chart"
				},
				{
					title: "Omnichannel Approach",
					desc: "Engage leads across email, social, and search networks.",
					icon: "globe"
				},
				{
					title: "A/B Testing",
					desc: "Continuous testing of creatives and copy to maximize CTR.",
					icon: "split"
				},
				{
					title: "Retargeting Loops",
					desc: "Recapture lost leads with highly targeted follow-up campaigns.",
					icon: "repeat"
				}
			],
			stats: [
				{
					value: "300%",
					label: "Average ROI"
				},
				{
					value: "50M+",
					label: "Impressions Generated"
				},
				{
					value: "#1",
					label: "Page Rankings"
				}
			],
			architecture: {
				title: "Marketing Funnel",
				steps: [
					"Awareness",
					"Lead Capture",
					"Nurturing Sequence",
					"Conversion"
				]
			},
			methodology: {
				title: "Growth Hacking",
				desc: "Rapid experimentation across marketing channels to identify the most efficient ways to grow a business.",
				steps: [
					{
						title: "Hypothesis Gen",
						desc: "Brainstorming creative angles and audience segments."
					},
					{
						title: "Micro-Testing",
						desc: "Running low-budget A/B tests to validate hypotheses."
					},
					{
						title: "Data Analysis",
						desc: "Reviewing CTR, CPC, and ROAS metrics to find winners."
					},
					{
						title: "Aggressive Scaling",
						desc: "Injecting budget into proven, high-converting campaigns."
					}
				]
			},
			qa: {
				title: "Campaign Validation",
				items: [
					"Tracking Pixel Verification",
					"A/B Test Statistical Significance",
					"Cross-browser Rendering Checks",
					"Manual Lead QA"
				]
			},
			security: { badges: [
				"GDPR Compliant",
				"CCPA Compliant",
				"CAN-SPAM",
				"Cookie Consent"
			] },
			integrations: [
				{
					name: "HubSpot",
					type: "CRM"
				},
				{
					name: "Google Ads",
					type: "PPC"
				},
				{
					name: "Meta",
					type: "Social"
				},
				{
					name: "Analytics",
					type: "Tracking"
				}
			],
			process: [
				{
					title: "Market Audit",
					desc: "Analyzing competitors and keyword gaps."
				},
				{
					title: "Strategy Setup",
					desc: "Defining channels and ad spend budgets."
				},
				{
					title: "Asset Creation",
					desc: "Designing ad creatives and writing copy."
				},
				{
					title: "Campaign Launch",
					desc: "Going live across targeted platforms."
				},
				{
					title: "Optimization",
					desc: "Scaling winners and pausing losers."
				}
			],
			support: [
				{
					title: "Campaign Optimization",
					desc: "Daily bid adjustments and keyword pruning to maximize ROI.",
					icon: "trending-up"
				},
				{
					title: "Creative Refresh",
					desc: "Designing new ad variants to prevent audience ad-fatigue.",
					icon: "edit"
				},
				{
					title: "Monthly Strategy",
					desc: "Deep-dive calls to review analytics and plan the next quarter.",
					icon: "users"
				}
			]
		};
		case "iot-solutions": return {
			themeColor: "#06b6d4",
			hero: {
				modelColor: "#06b6d4",
				badge: "Connected Devices"
			},
			valueProps: [
				{
					title: "Real-Time Telemetry",
					desc: "Sub-millisecond data streaming from edge to cloud.",
					icon: "activity"
				},
				{
					title: "Edge Computing",
					desc: "Process data locally to save bandwidth and reduce latency.",
					icon: "cpu"
				},
				{
					title: "Over-The-Air (OTA)",
					desc: "Seamlessly update millions of firmware devices instantly.",
					icon: "wifi"
				},
				{
					title: "Energy Efficient",
					desc: "Optimized protocols (MQTT, CoAP) to maximize battery life.",
					icon: "battery"
				},
				{
					title: "Mesh Networking",
					desc: "Self-healing device networks that adapt to node failures.",
					icon: "share-2"
				},
				{
					title: "Hardware Agnostic",
					desc: "Compatible with ESP32, Raspberry Pi, ARM, and custom PCBs.",
					icon: "hard-drive"
				}
			],
			stats: [
				{
					value: "1M+",
					label: "Devices Managed"
				},
				{
					value: "<10ms",
					label: "Telemetry Latency"
				},
				{
					value: "99.99%",
					label: "Uptime Reliability"
				}
			],
			architecture: {
				title: "IoT Topology",
				steps: [
					"Edge Sensors",
					"IoT Gateway",
					"Cloud Message Broker",
					"Data Lake"
				]
			},
			methodology: {
				title: "Hardware-Software Co-design",
				desc: "Parallel development of firmware and cloud infrastructure for perfect harmony.",
				steps: [
					{
						title: "Breadboarding",
						desc: "Initial proof-of-concept using off-the-shelf development kits."
					},
					{
						title: "Firmware Stubbing",
						desc: "Writing mock data generators for the cloud team to use."
					},
					{
						title: "Custom PCB Routing",
						desc: "Designing the final integrated circuit board footprint."
					},
					{
						title: "Integration Sprints",
						desc: "Fusing the final hardware with the production cloud endpoints."
					}
				]
			},
			qa: {
				title: "Hardware Validation",
				items: [
					"Stress Testing",
					"Thermal Profiling",
					"Connectivity Drops",
					"Power Consumption"
				]
			},
			security: { badges: [
				"End-to-End Encryption",
				"X.509 Certificates",
				"Secure Boot",
				"MQTT-TLS"
			] },
			integrations: [
				{
					name: "AWS IoT",
					type: "Broker"
				},
				{
					name: "Azure IoT",
					type: "Cloud"
				},
				{
					name: "ThingsBoard",
					type: "Dashboard"
				},
				{
					name: "LoRaWAN",
					type: "Network"
				}
			],
			process: [
				{
					title: "Hardware Scoping",
					desc: "Selecting sensors and microcontrollers."
				},
				{
					title: "Firmware Dev",
					desc: "Writing embedded C/C++ or Rust."
				},
				{
					title: "Cloud Setup",
					desc: "Configuring MQTT brokers and data pipelines."
				},
				{
					title: "Field Testing",
					desc: "Deploying beta devices in real environments."
				},
				{
					title: "Mass Production",
					desc: "Scaling deployment and OTA systems."
				}
			],
			support: [
				{
					title: "Firmware Patches",
					desc: "Security updates deployed OTA.",
					icon: "shield"
				},
				{
					title: "Fleet Monitoring",
					desc: "Tracking battery health and connectivity.",
					icon: "battery"
				},
				{
					title: "Predictive Maintenance",
					desc: "AI alerts before hardware fails.",
					icon: "brain"
				}
			]
		};
		case "custom-software": return {
			themeColor: "#ec4899",
			hero: {
				modelColor: "#ec4899",
				badge: "Enterprise Grade"
			},
			valueProps: [
				{
					title: "Bespoke Architecture",
					desc: "Built from the ground up for your exact workflows.",
					icon: "box"
				},
				{
					title: "Legacy Integration",
					desc: "Seamlessly connect with your old AS400 or SAP systems.",
					icon: "link"
				},
				{
					title: "Infinite Scalability",
					desc: "Microservices designed to handle billions of rows.",
					icon: "maximize"
				},
				{
					title: "Role-Based Access",
					desc: "Granular permissions and audit logs for maximum security.",
					icon: "users"
				},
				{
					title: "Automated CI/CD",
					desc: "Ship new features faster without breaking production.",
					icon: "git-commit"
				},
				{
					title: "Data Migration",
					desc: "Zero data-loss migrations from unstructured legacy databases.",
					icon: "database"
				}
			],
			stats: [
				{
					value: "500M+",
					label: "Rows Processed Daily"
				},
				{
					value: "0",
					label: "Vendor Lock-in"
				},
				{
					value: "100%",
					label: "IP Ownership"
				}
			],
			architecture: {
				title: "Enterprise Architecture",
				steps: [
					"Load Balancer",
					"API Gateway",
					"Microservices Cluster",
					"Distributed DB"
				]
			},
			methodology: {
				title: "Domain-Driven Design",
				desc: "We model the software precisely after your real-world business domains.",
				steps: [
					{
						title: "Event Storming",
						desc: "Mapping out every business event and state transition."
					},
					{
						title: "Context Mapping",
						desc: "Defining bounded contexts to separate microservices cleanly."
					},
					{
						title: "Ubiquitous Language",
						desc: "Ensuring developers and stakeholders use the exact same terminology."
					},
					{
						title: "TDD Approach",
						desc: "Test-driven development guaranteeing flawless domain logic."
					}
				]
			},
			qa: {
				title: "Enterprise QA",
				items: [
					"Unit Testing: 98% Coverage",
					"Integration & Contract Testing",
					"Chaos Engineering",
					"UAT with Stakeholders"
				]
			},
			security: { badges: [
				"SOC 2 Type II",
				"HIPAA",
				"PCI-DSS",
				"ISO 27001"
			] },
			integrations: [
				{
					name: "SAP",
					type: "ERP"
				},
				{
					name: "Salesforce",
					type: "CRM"
				},
				{
					name: "Oracle",
					type: "Database"
				},
				{
					name: "Okta",
					type: "SSO"
				}
			],
			process: [
				{
					title: "Discovery",
					desc: "Deep dive into your business operations."
				},
				{
					title: "Architecture Planning",
					desc: "Designing the distributed system."
				},
				{
					title: "Sprints",
					desc: "Iterative bi-weekly deliveries."
				},
				{
					title: "UAT",
					desc: "User acceptance testing with stakeholders."
				},
				{
					title: "Phased Rollout",
					desc: "Gradual migration to the new system."
				}
			],
			support: [
				{
					title: "Dedicated DevOps",
					desc: "24/7 on-call engineers.",
					icon: "server"
				},
				{
					title: "SLA Guarantees",
					desc: "Financially backed uptime.",
					icon: "shield"
				},
				{
					title: "Feature Expansion",
					desc: "Continuous development of new modules.",
					icon: "maximize"
				}
			]
		};
		default: return {
			themeColor: "#6366f1",
			hero: {
				modelColor: "#6366f1",
				badge: "Scalable Platforms"
			},
			valueProps: [
				{
					title: "Lightning Fast",
					desc: "Sub-second load times utilizing Edge caching and SSR.",
					icon: "zap"
				},
				{
					title: "SEO Optimized",
					desc: "Perfect Lighthouse scores to dominate Google rankings.",
					icon: "search"
				},
				{
					title: "Responsive Design",
					desc: "Pixel-perfect UI that works flawlessly on every device.",
					icon: "monitor"
				},
				{
					title: "Headless CMS",
					desc: "Easily manage content via Sanity, Strapi, or Contentful.",
					icon: "edit"
				},
				{
					title: "Accessibility (a11y)",
					desc: "WCAG 2.1 AA compliant, ensuring access for all users.",
					icon: "eye"
				},
				{
					title: "Serverless APIs",
					desc: "Auto-scaling endpoints that cost $0 when not in use.",
					icon: "server"
				}
			],
			stats: [
				{
					value: "100",
					label: "Lighthouse Score"
				},
				{
					value: "99.9%",
					label: "Uptime SLA"
				},
				{
					value: "<1s",
					label: "Load Time"
				}
			],
			architecture: {
				title: "Modern Web Stack",
				steps: [
					"Next.js Client",
					"CDN Edge Network",
					"Serverless API",
					"PostgreSQL DB"
				]
			},
			methodology: {
				title: "Agile Web Development",
				desc: "Iterative sprints, CI/CD pipelines, and rigorous code reviews.",
				steps: [
					{
						title: "Sprint Planning",
						desc: "Aligning web features with the upcoming two-week goals."
					},
					{
						title: "Component Driven",
						desc: "Building isolated, reusable React components in Storybook."
					},
					{
						title: "Peer Code Reviews",
						desc: "Mandatory reviews by senior engineers before any merge."
					},
					{
						title: "Automated Deploy",
						desc: "Zero-downtime deployments via Vercel Edge networks."
					}
				]
			},
			qa: {
				title: "Web QA Standards",
				items: [
					"Cross-Browser Testing",
					"Responsive Audits",
					"Core Web Vitals",
					"Cypress E2E"
				]
			},
			security: { badges: [
				"SSL/TLS 1.3",
				"WAF Protection",
				"CORS Configured",
				"DDoS Mitigation"
			] },
			integrations: [
				{
					name: "Stripe",
					type: "Payments"
				},
				{
					name: "Vercel",
					type: "Hosting"
				},
				{
					name: "AWS",
					type: "Infrastructure"
				},
				{
					name: "SendGrid",
					type: "Email"
				}
			],
			process: [
				{
					title: "Wireframing",
					desc: "Creating the structural blueprint."
				},
				{
					title: "UI/UX Design",
					desc: "High-fidelity mockups in Figma."
				},
				{
					title: "Frontend Dev",
					desc: "Building responsive React components."
				},
				{
					title: "Backend Dev",
					desc: "Creating scalable APIs."
				},
				{
					title: "Deployment",
					desc: "Going live on Vercel/AWS."
				}
			],
			support: [
				{
					title: "Uptime Monitoring",
					desc: "Automated pings every 60 seconds.",
					icon: "activity"
				},
				{
					title: "Dependency Updates",
					desc: "Keeping NPM packages secure.",
					icon: "shield"
				},
				{
					title: "Performance Tuning",
					desc: "Continuous optimization.",
					icon: "zap"
				}
			]
		};
	}
}
//#endregion
//#region resources/js/components/sections/DevelopmentMethodology.tsx
function DevelopmentMethodology({ service }) {
	const { theme } = useTheme();
	const isLight = theme === "light";
	const config = getServiceConfig(service?.slug);
	const themeColor = config.themeColor;
	const methodology = config.methodology;
	const steps = methodology.steps;
	return /* @__PURE__ */ jsxs("section", {
		className: "zy-section",
		style: { background: isLight ? "#f9fafb" : "var(--zy-black)" },
		children: [/* @__PURE__ */ jsxs("div", {
			style: {
				maxWidth: 1200,
				margin: "0 auto",
				textAlign: "center"
			},
			children: [
				/* @__PURE__ */ jsx("span", {
					className: "zy-section-label",
					style: {
						color: themeColor,
						opacity: 1
					},
					children: methodology.title
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "zy-section-title",
					style: { color: isLight ? "#000" : "var(--zy-white)" },
					children: "Development Methodology"
				}),
				/* @__PURE__ */ jsx("p", {
					style: {
						color: isLight ? "#555" : "var(--zy-gray-text)",
						marginBottom: 60,
						fontSize: 18,
						maxWidth: 600,
						margin: "0 auto 60px"
					},
					children: methodology.desc
				}),
				/* @__PURE__ */ jsx("div", {
					style: {
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
						gap: 24
					},
					children: steps.map((step, i) => /* @__PURE__ */ jsx("div", {
						className: "methodology-card",
						style: { transition: "transform 0.3s" },
						children: /* @__PURE__ */ jsx(GradientCard, {
							themeColor,
							style: {
								height: "100%",
								background: isLight ? "#fff" : "var(--zy-gray-card)",
								boxShadow: isLight ? "0 10px 30px rgba(0,0,0,0.03)" : "none"
							},
							children: /* @__PURE__ */ jsxs("div", {
								style: {
									padding: "40px 32px",
									height: "100%",
									display: "flex",
									flexDirection: "column"
								},
								children: [/* @__PURE__ */ jsxs("div", {
									style: {
										fontSize: 64,
										fontWeight: 900,
										color: isLight ? themeColor : themeColor,
										opacity: isLight ? .1 : .2,
										marginBottom: -30,
										textAlign: "left",
										fontFamily: "var(--font-heading)"
									},
									children: ["0", i + 1]
								}), /* @__PURE__ */ jsxs("div", {
									style: {
										position: "relative",
										zIndex: 1,
										marginTop: "auto",
										textAlign: "left"
									},
									children: [/* @__PURE__ */ jsx("h3", {
										style: {
											fontSize: 20,
											color: isLight ? "#000" : "var(--zy-white)",
											fontWeight: 800,
											fontFamily: "var(--font-heading)",
											marginBottom: 12
										},
										children: step.title
									}), /* @__PURE__ */ jsx("p", {
										style: {
											color: isLight ? "#666" : "var(--zy-gray-text)",
											fontSize: 15,
											lineHeight: 1.6,
											fontWeight: 500
										},
										children: step.desc
									})]
								})]
							})
						})
					}, i))
				})
			]
		}), /* @__PURE__ */ jsx("style", { children: `
                .methodology-card:hover {
                    transform: translateY(-8px);
                }
            ` })]
	});
}
//#endregion
//#region resources/js/components/sections/ProcessTimeline.tsx
function ProcessTimeline({ service }) {
	const { theme } = useTheme();
	const isLight = theme === "light";
	const config = getServiceConfig(service?.slug);
	const themeColor = config.themeColor;
	const processSteps = config.process;
	return /* @__PURE__ */ jsx("section", {
		className: "zy-section",
		style: { background: isLight ? "#FFFFFF" : "var(--zy-black)" },
		children: /* @__PURE__ */ jsxs("div", {
			style: {
				maxWidth: 1e3,
				margin: "0 auto"
			},
			children: [/* @__PURE__ */ jsxs("div", {
				style: {
					textAlign: "center",
					marginBottom: 60
				},
				children: [/* @__PURE__ */ jsxs("h2", {
					className: "zy-section-title",
					children: ["How We Deliver ", service?.title || "Excellence"]
				}), /* @__PURE__ */ jsx("p", {
					style: {
						color: isLight ? "#666" : "var(--zy-gray-text)",
						marginTop: 16
					},
					children: "A transparent, agile process guaranteed to yield results."
				})]
			}), /* @__PURE__ */ jsxs("div", {
				style: { position: "relative" },
				children: [/* @__PURE__ */ jsx("div", { style: {
					position: "absolute",
					top: 0,
					bottom: 0,
					left: 32,
					width: 2,
					background: isLight ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.05)"
				} }), processSteps.map((item, i) => /* @__PURE__ */ jsxs("div", {
					style: {
						display: "flex",
						gap: 32,
						marginBottom: 40,
						position: "relative"
					},
					children: [/* @__PURE__ */ jsx("div", {
						style: {
							width: 64,
							height: 64,
							borderRadius: "50%",
							background: themeColor,
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							color: "#ffffff",
							fontSize: 24,
							fontWeight: 800,
							zIndex: 1,
							flexShrink: 0,
							boxShadow: isLight ? `0 10px 25px color-mix(in srgb, ${themeColor} 40%, transparent)` : `0 0 25px color-mix(in srgb, ${themeColor} 30%, transparent)`
						},
						children: `0${i + 1}`
					}), /* @__PURE__ */ jsxs("div", {
						style: { paddingTop: 12 },
						children: [/* @__PURE__ */ jsx("h3", {
							style: {
								color: isLight ? "#000" : "var(--zy-white)",
								fontSize: 24,
								fontWeight: 700,
								marginBottom: 8,
								fontFamily: "var(--font-heading)"
							},
							children: item.title
						}), /* @__PURE__ */ jsx("p", {
							style: {
								color: isLight ? "#555" : "var(--zy-gray-text)",
								fontSize: 16,
								lineHeight: 1.6
							},
							children: item.desc
						})]
					})]
				}, i))]
			})]
		})
	});
}
//#endregion
//#region resources/js/components/sections/QAAndTesting.tsx
function QAAndTesting({ service }) {
	const { theme } = useTheme();
	const isLight = theme === "light";
	const [progress, setProgress] = useState(0);
	useEffect(() => {
		const interval = setInterval(() => {
			setProgress((prev) => prev >= 100 ? 0 : prev + 1);
		}, 50);
		return () => clearInterval(interval);
	}, []);
	const config = getServiceConfig(service?.slug);
	const themeColor = config.themeColor;
	const qa = config.qa;
	const tests = qa.items.map((item, idx) => ({
		name: item,
		time: idx === 3 ? "Passed" : `${(Math.random() * 5 + 1).toFixed(1)}s`
	}));
	return /* @__PURE__ */ jsx("section", {
		className: "zy-section",
		style: {
			background: isLight ? "#FFFFFF" : "var(--zy-black)",
			overflow: "hidden"
		},
		children: /* @__PURE__ */ jsxs("div", {
			style: {
				maxWidth: 1200,
				margin: "0 auto",
				display: "flex",
				gap: 80,
				alignItems: "center",
				flexWrap: "wrap-reverse"
			},
			children: [/* @__PURE__ */ jsxs("div", {
				style: {
					flex: "1 1 450px",
					position: "relative"
				},
				children: [/* @__PURE__ */ jsx(GradientCard, {
					themeColor,
					children: /* @__PURE__ */ jsxs("div", {
						style: {
							background: isLight ? "#f7f7f7" : "#0C0C0C",
							borderRadius: 16,
							overflow: "hidden",
							boxShadow: isLight ? "0 20px 40px rgba(0,0,0,0.05)" : "0 20px 40px rgba(0,0,0,0.3)",
							border: `1px solid ${isLight ? "#e0e0e0" : "rgba(255,255,255,0.05)"}`
						},
						children: [/* @__PURE__ */ jsxs("div", {
							style: {
								padding: "16px 20px",
								borderBottom: `1px solid ${isLight ? "#e0e0e0" : "rgba(255,255,255,0.05)"}`,
								display: "flex",
								alignItems: "center",
								gap: 8,
								background: isLight ? "#f0f0f0" : "#111111"
							},
							children: [
								/* @__PURE__ */ jsx("div", { style: {
									width: 12,
									height: 12,
									borderRadius: "50%",
									background: "#ef4444"
								} }),
								/* @__PURE__ */ jsx("div", { style: {
									width: 12,
									height: 12,
									borderRadius: "50%",
									background: "#eab308"
								} }),
								/* @__PURE__ */ jsx("div", { style: {
									width: 12,
									height: 12,
									borderRadius: "50%",
									background: "#22c55e"
								} }),
								/* @__PURE__ */ jsx("span", {
									style: {
										marginLeft: 16,
										fontSize: 13,
										color: isLight ? "#666" : "#888",
										fontFamily: "monospace"
									},
									children: "bash — pipeline/run-tests.sh"
								})
							]
						}), /* @__PURE__ */ jsxs("div", {
							style: {
								padding: 32,
								display: "flex",
								flexDirection: "column",
								gap: 20
							},
							children: [tests.map((test, i) => {
								const isPassed = progress > i * 25;
								return /* @__PURE__ */ jsxs("div", {
									style: {
										display: "flex",
										alignItems: "center",
										justifyContent: "space-between",
										padding: 16,
										borderRadius: 8,
										background: isLight ? "#ffffff" : "rgba(255,255,255,0.02)",
										border: `1px solid ${isLight ? "#e0e0e0" : "transparent"}`,
										transition: "all 0.3s ease",
										boxShadow: isLight ? "0 2px 10px rgba(0,0,0,0.02)" : "none"
									},
									children: [/* @__PURE__ */ jsxs("div", {
										style: {
											display: "flex",
											alignItems: "center",
											gap: 16
										},
										children: [/* @__PURE__ */ jsx("div", {
											style: {
												width: 28,
												height: 28,
												borderRadius: "50%",
												background: isPassed ? `color-mix(in srgb, ${themeColor} 20%, transparent)` : "transparent",
												border: `1px solid ${isPassed ? themeColor : isLight ? "#ccc" : "#444"}`,
												color: themeColor,
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												transition: "all 0.3s ease"
											},
											children: isPassed ? /* @__PURE__ */ jsx("svg", {
												width: "14",
												height: "14",
												viewBox: "0 0 24 24",
												fill: "none",
												stroke: "currentColor",
												strokeWidth: "3",
												strokeLinecap: "round",
												strokeLinejoin: "round",
												children: /* @__PURE__ */ jsx("polyline", { points: "20 6 9 17 4 12" })
											}) : /* @__PURE__ */ jsx("div", { style: {
												width: 6,
												height: 6,
												borderRadius: "50%",
												background: isLight ? "#ccc" : "#444"
											} })
										}), /* @__PURE__ */ jsx("span", {
											style: {
												color: isLight ? "#000" : "var(--zy-white)",
												fontWeight: 600,
												fontSize: 15,
												fontFamily: "var(--font-sans)",
												opacity: isPassed ? 1 : .5
											},
											children: test.name
										})]
									}), /* @__PURE__ */ jsx("span", {
										style: {
											color: isPassed ? themeColor : isLight ? "#999" : "#555",
											fontSize: 13,
											fontFamily: "monospace",
											fontWeight: 600
										},
										children: isPassed ? test.time : "Waiting..."
									})]
								}, i);
							}), /* @__PURE__ */ jsxs("div", {
								style: { marginTop: 12 },
								children: [/* @__PURE__ */ jsxs("div", {
									style: {
										display: "flex",
										justifyContent: "space-between",
										marginBottom: 8,
										fontSize: 13,
										color: isLight ? "#666" : "#888",
										fontFamily: "monospace"
									},
									children: [/* @__PURE__ */ jsx("span", { children: "Test Suite Progress" }), /* @__PURE__ */ jsxs("span", { children: [Math.min(100, Math.floor(progress / 100 * 100)), "%"] })]
								}), /* @__PURE__ */ jsx("div", {
									style: {
										height: 6,
										background: isLight ? "#e0e0e0" : "#222",
										borderRadius: 3,
										overflow: "hidden"
									},
									children: /* @__PURE__ */ jsx("div", { style: {
										height: "100%",
										width: `${progress}%`,
										background: themeColor,
										borderRadius: 3,
										boxShadow: `0 0 10px ${themeColor}80`
									} })
								})]
							})]
						})]
					})
				}), /* @__PURE__ */ jsx("div", { style: {
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					width: "120%",
					height: "120%",
					background: `radial-gradient(circle, color-mix(in srgb, ${themeColor} 10%, transparent) 0%, transparent 70%)`,
					filter: "blur(40px)",
					zIndex: -1,
					pointerEvents: "none"
				} })]
			}), /* @__PURE__ */ jsxs("div", {
				style: { flex: "1 1 400px" },
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "zy-section-label",
						style: {
							color: themeColor,
							opacity: 1
						},
						children: qa.title
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "zy-section-title",
						style: {
							fontSize: "clamp(36px, 5vw, 48px)",
							color: isLight ? "#000" : "var(--zy-white)"
						},
						children: "Rigorous QA & Testing"
					}),
					/* @__PURE__ */ jsx("p", {
						style: {
							color: isLight ? "#555" : "var(--zy-gray-text)",
							lineHeight: 1.8,
							fontSize: 18,
							marginTop: 24
						},
						children: "A single bug in production can cost millions. Our QA engineers work in parallel with developers to ensure that every release is bulletproof. Automated CI/CD pipelines run thousands of tests before any code hits the live server."
					})
				]
			})]
		})
	});
}
//#endregion
//#region resources/js/components/sections/SecurityStandards.tsx
function SecurityStandards({ service }) {
	const { theme } = useTheme();
	const isLight = theme === "light";
	const config = getServiceConfig(service?.slug);
	const themeColor = config.themeColor;
	const badges = config.security.badges;
	return /* @__PURE__ */ jsx("section", {
		className: "zy-section",
		style: {
			background: isLight ? "#fdfdfd" : "var(--zy-black)",
			position: "relative",
			overflow: "hidden"
		},
		children: /* @__PURE__ */ jsxs("div", {
			style: {
				maxWidth: 1200,
				margin: "0 auto",
				display: "flex",
				gap: 60,
				alignItems: "center",
				flexWrap: "wrap"
			},
			children: [/* @__PURE__ */ jsxs("div", {
				style: { flex: "1 1 400px" },
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "zy-section-label",
						style: {
							color: themeColor,
							opacity: 1
						},
						children: "Enterprise Security"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "zy-section-title",
						style: { color: isLight ? "#000" : "var(--zy-white)" },
						children: "Military-Grade Protection"
					}),
					/* @__PURE__ */ jsxs("p", {
						style: {
							color: isLight ? "#555" : "var(--zy-gray-text)",
							lineHeight: 1.8,
							fontSize: 18,
							marginBottom: 32,
							marginTop: 16
						},
						children: [
							"Security isn't a feature; it's the foundation. Every",
							" ",
							service?.title || "solution",
							" we deploy adheres to strict international compliance standards, ensuring your data is impenetrable."
						]
					}),
					/* @__PURE__ */ jsx("ul", {
						style: {
							listStyle: "none",
							padding: 0
						},
						children: badges.map((item, i) => /* @__PURE__ */ jsxs("li", {
							style: {
								display: "flex",
								alignItems: "center",
								gap: 16,
								marginBottom: 20,
								color: isLight ? "#000" : "var(--zy-white)",
								fontWeight: 700,
								fontSize: 16,
								padding: "16px 20px",
								background: isLight ? "#fff" : "rgba(255,255,255,0.02)",
								borderRadius: 12,
								border: `1px solid ${isLight ? "#eee" : "rgba(255,255,255,0.05)"}`,
								boxShadow: isLight ? "0 4px 15px rgba(0,0,0,0.03)" : "none"
							},
							children: [/* @__PURE__ */ jsx("div", {
								style: {
									width: 32,
									height: 32,
									borderRadius: "50%",
									background: `color-mix(in srgb, ${themeColor} 20%, transparent)`,
									display: "flex",
									alignItems: "center",
									justifyContent: "center"
								},
								children: /* @__PURE__ */ jsx("svg", {
									width: "18",
									height: "18",
									viewBox: "0 0 24 24",
									fill: "none",
									stroke: themeColor,
									strokeWidth: "3",
									strokeLinecap: "round",
									strokeLinejoin: "round",
									children: /* @__PURE__ */ jsx("polyline", { points: "20 6 9 17 4 12" })
								})
							}), item]
						}, i))
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				style: {
					flex: "1 1 400px",
					minHeight: 450,
					position: "relative"
				},
				children: [/* @__PURE__ */ jsx(GradientCard, {
					themeColor,
					children: /* @__PURE__ */ jsxs("div", {
						style: {
							height: "100%",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							position: "relative",
							overflow: "hidden",
							padding: 40,
							background: isLight ? "#f7f7f7" : "transparent",
							borderRadius: 12
						},
						children: [
							/* @__PURE__ */ jsx("div", { style: {
								position: "absolute",
								width: 250,
								height: 250,
								borderRadius: "50%",
								border: `1px dashed ${isLight ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.1)"}`,
								animation: "spin 20s linear infinite"
							} }),
							/* @__PURE__ */ jsx("div", { style: {
								position: "absolute",
								width: 350,
								height: 350,
								borderRadius: "50%",
								border: `1px dashed ${isLight ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.05)"}`,
								animation: "spin 25s linear infinite reverse"
							} }),
							/* @__PURE__ */ jsx("div", { style: {
								position: "absolute",
								width: 120,
								height: 120,
								background: themeColor,
								filter: "blur(70px)",
								opacity: isLight ? .2 : .35
							} }),
							/* @__PURE__ */ jsx("div", {
								style: {
									width: 140,
									height: 140,
									margin: "0 auto",
									background: isLight ? "#fff" : "rgba(255,255,255,0.03)",
									border: `1px solid ${isLight ? "#ddd" : "rgba(255,255,255,0.1)"}`,
									borderRadius: "50%",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									position: "relative",
									zIndex: 2,
									backdropFilter: "blur(10px)",
									boxShadow: isLight ? `0 10px 40px color-mix(in srgb, ${themeColor} 15%, transparent)` : "0 10px 40px rgba(0,0,0,0.5)"
								},
								children: /* @__PURE__ */ jsxs("svg", {
									width: "60",
									height: "60",
									viewBox: "0 0 24 24",
									fill: "none",
									stroke: themeColor,
									strokeWidth: "1.5",
									strokeLinecap: "round",
									strokeLinejoin: "round",
									children: [
										/* @__PURE__ */ jsx("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }),
										/* @__PURE__ */ jsx("path", { d: "M12 8v4" }),
										/* @__PURE__ */ jsx("path", { d: "M12 16h.01" })
									]
								})
							}),
							/* @__PURE__ */ jsxs("div", {
								style: {
									position: "absolute",
									top: 60,
									right: 40,
									padding: "10px 20px",
									background: isLight ? "#fff" : "rgba(255,255,255,0.05)",
									borderRadius: 24,
									border: `1px solid ${isLight ? "#eee" : "rgba(255,255,255,0.1)"}`,
									fontSize: 13,
									fontWeight: 700,
									color: "#22c55e",
									backdropFilter: "blur(5px)",
									display: "flex",
									alignItems: "center",
									gap: 8,
									boxShadow: isLight ? "0 4px 15px rgba(0,0,0,0.05)" : "0 4px 15px rgba(0,0,0,0.3)"
								},
								children: [
									/* @__PURE__ */ jsx("div", { style: {
										width: 8,
										height: 8,
										borderRadius: "50%",
										background: "#22c55e",
										animation: "pulse 2s infinite",
										boxShadow: "0 0 10px #22c55e"
									} }),
									" ",
									"SECURE"
								]
							}),
							/* @__PURE__ */ jsx("div", {
								style: {
									position: "absolute",
									bottom: 60,
									left: 40,
									padding: "10px 20px",
									background: isLight ? "#fff" : "rgba(255,255,255,0.05)",
									borderRadius: 24,
									border: `1px solid ${isLight ? "#eee" : "rgba(255,255,255,0.1)"}`,
									fontSize: 13,
									fontWeight: 700,
									color: themeColor,
									backdropFilter: "blur(5px)",
									boxShadow: isLight ? "0 4px 15px rgba(0,0,0,0.05)" : "0 4px 15px rgba(0,0,0,0.3)"
								},
								children: badges[0]
							})
						]
					})
				}), /* @__PURE__ */ jsx("style", { children: `
                        @keyframes spin { 100% { transform: rotate(360deg); } }
                        @keyframes pulse { 0%, 100% { opacity: 0.5; transform: scale(1); } 50% { opacity: 1; transform: scale(1.2); } }
                    ` })]
			})]
		})
	});
}
//#endregion
export { getServiceConfig as a, DevelopmentMethodology as i, QAAndTesting as n, ProcessTimeline as r, SecurityStandards as t };

//# sourceMappingURL=SecurityStandards-DZGlbg-P.js.map