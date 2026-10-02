import { a as useTheme, i as ThemeProvider, n as Footer, r as Navbar, t as CustomCursor } from "./custom-cursor-B2HeUCYC.js";
import { t as TopBar } from "./top-bar-C3HAjSYy.js";
import { t as LazySection } from "./lazy-section-Bm1gTwLP.js";
import { t as SeoHead } from "./SeoHead-Fv09oBYU.js";
import { t as FooterCTA } from "./footer-cta-CxW1r1Xr.js";
import { a as ProjectSubNav, i as ProjectImpactBanner, n as ProjectCinemaTheatre, o as ProjectHeroEditorial, r as ProjectFeatures, t as ProjectBlueprintFlow } from "./ProjectBlueprintFlow-BjHAWkNC.js";
import { useEffect, useRef, useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/lib/products-detail-data.ts
var PRODUCTS_DATA = [
	{
		id: "mobile-crm",
		slug: "mobile-crm",
		title: "Mobile CRM — Complete Operating System for Mobile & Electronics Retailers",
		shortTitle: "Mobile CRM",
		category: "Proprietary IP • Next-Gen Retail ERP & POS",
		tagline: "From IMEI-level serial tracking and one-tap GST billing to supplier credit ledgers and automated staff payroll — run your entire single or multi-outlet retail business effortlessly.",
		client: "Zytrixon Proprietary Suite",
		industry: "Mobile & Electronics Retailers, Single & Multi-Outlet Stores",
		year: "2026",
		duration: "Enterprise Ready",
		architecture: "Multi-Tenant Laravel 12 API, React 19 & Row-Level Isolated Ledger Architecture",
		accentColor: "#0EA5E9",
		secondaryColor: "#38BDF8",
		heroImage: "/assets/products/mobile-crm/Screenshot 2026-09-26 162520.png",
		mobileImage: "/assets/products/mobile-crm/Screenshot 2026-09-26 181933.png",
		liveUrl: "https://wa.me/917049711475?text=Hi%20Zytrixon%2C%20I%20would%20like%20to%20schedule%20an%20enterprise%20demo%20for%20Mobile%20CRM.",
		videoUrl: "",
		videoPoster: "/assets/products/mobile-crm/Screenshot 2026-09-26 162520.png",
		summary: "Mobile CRM is an end-to-end retail operating system engineered specifically for mobile phone and electronics retailers. Built with React 19, TypeScript, and a robust Laravel 12 REST API, it unifies dual-track inventory (unique IMEI tracking for smartphones & batch quantities for accessories), 3-second counter POS billing with dynamic on-receipt UPI QR, distributor udhar ledgers, customer EMI finance tracking, and automated staff attendance & sales commission payroll.",
		challenge: "Mobile and electronics retailers deal with unique operational bottlenecks: tracking high-value phones by individual IMEI vs bulk accessories, managing supplier credit (udhar) with delayed balance reconciliations, tracking customer EMI installments across third-party financiers, and calculating staff sales commissions manually.",
		challengePoints: [
			"IMEI vs Bulk Tracking Chaos: Losing track of unique smartphone serial numbers and warranty replacements while mixing them up with bulk accessories.",
			"Unreconciled Supplier Udhar: Distributor and supplier balances drifting apart due to paper ledger entries and missing invoice references.",
			"Consumer EMI & Loan Disputes: Difficulty tracking customer installment schedules, down payments, and overdue payouts from third-party financiers (Bajaj, Home Credit, TVS).",
			"Manual Staff Payroll & Commissions: Complex spreadsheet calculations for shop floor sales incentives and attendance deductions leading to payroll errors."
		],
		solution: "Zytrixon architected Mobile CRM as a unified operating system featuring dual-track inventory, 3-second counter POS checkout with dynamic UPI QR, live supplier credit ledgers, an integrated EMI finance engine, and automated staff commission payroll.",
		solutionPoints: [
			"Dual-Track Inventory (IMEI & Quantity): Serialized smartphone tracking by unique IMEI paired with batch and quantity tracking for accessories and spare parts.",
			"3-Second POS & GST Invoicing: Rapid barcode/IMEI scan counter checkout supporting Cash, Dynamic UPI QR, Cards, and Split Payments.",
			"Supplier & Udhar Ledger: Real-time running debit/credit ledgers for every distributor with one-tap payment entries and balance recalculations.",
			"EMI & Consumer Finance Engine: Integrated financier tracking (Bajaj Finserv, Home Credit, TVS Credit) with automated tenure schedules and overdue recovery alerts.",
			"Automated Staff Payroll & Incentives: Daily attendance tracking, per-sale incentive calculation, and one-click salary slip generation.",
			"Quotations, Pre-Bookings & Repair Jobs: Collect token advances for upcoming flagship launches and manage device repair status workflows."
		],
		metrics: [
			{
				value: "Sub-150ms",
				label: "API Response Latency",
				desc: "Ultra-fast API queries via optimized database indexes for smooth rush-hour checkouts."
			},
			{
				value: "100%",
				label: "IMEI Traceability",
				desc: "Dual-entry inventory movements ledger preventing internal shop shrinkage."
			},
			{
				value: "Multi-Tenant",
				label: "Global Data Isolation",
				desc: "Row-level tenant isolation with global scoping ensuring bank-grade business security."
			},
			{
				value: "3-Second",
				label: "Counter Checkout",
				desc: "Instant barcode/IMEI scan, split payments, and dynamic UPI QR on thermal receipts."
			}
		],
		features: [
			{
				title: "Dual-Track Inventory (IMEI & Quantity)",
				desc: "Track high-value smartphones by unique IMEI & Serial Number while managing accessories, cables, and parts by Batch & Quantity with live stock movement logs.",
				icon: "📱"
			},
			{
				title: "High-Speed POS & GST Invoicing",
				desc: "3-second counter checkout with barcode/IMEI scanning, split payments, dynamic UPI QR on receipts, and instant thermal (58mm/80mm) or A4 PDF invoices.",
				icon: "⚡"
			},
			{
				title: "Supplier & Udhar (Credit) Ledger",
				desc: "Real-time running debit/credit statements for every distributor, purchase bill attachment logs, and one-tap partial or full payment reconciliations.",
				icon: "📒"
			},
			{
				title: "EMI & Consumer Finance Engine",
				desc: "Track in-store and third-party finance (Bajaj Finserv, Home Credit, TVS Credit) with automated tenure schedules, down payments, and overdue recovery.",
				icon: "💳"
			},
			{
				title: "Staff Attendance & Automated Payroll",
				desc: "Track daily attendance, calculate per-sale commissions on top of base salary automatically, and generate one-click detailed salary vouchers.",
				icon: "👥"
			},
			{
				title: "Quotations, Pre-Bookings & Repair Jobs",
				desc: "Convert price inquiries into sales with instant quotes, collect token advances for upcoming flagship launches, and track device repair jobs.",
				icon: "🛠️"
			}
		],
		techStack: [
			{
				name: "React 19 & TypeScript",
				category: "Client Core & Vite Bundling"
			},
			{
				name: "Laravel 12 API",
				category: "Backend RESTful Architecture"
			},
			{
				name: "MySQL / PostgreSQL",
				category: "Multi-Tenant ACID Relational DB"
			},
			{
				name: "Prisma ORM",
				category: "Type-Safe Data Modeling & Schema"
			},
			{
				name: "TanStack Query v5",
				category: "Server Cache & Optimistic UI"
			},
			{
				name: "Tailwind CSS v4",
				category: "Design System & Responsive POS UI"
			},
			{
				name: "Docker",
				category: "Containerization & Microservices Deployment"
			}
		],
		screenshots: [
			{
				title: "Mobile CRM Retail Operations Dashboard",
				category: "Command Center",
				image: "/assets/products/mobile-crm/Screenshot 2026-09-26 162520.png",
				description: "Comprehensive store management overview featuring business overview, sales velocity, revenue, profit & loss statements, and multi-counter audit tracking."
			},
			{
				title: "High-Speed Cloud POS & Direct Counter Billing",
				category: "POS Terminal",
				image: "/assets/products/mobile-crm/Screenshot 2026-09-26 234003.png",
				description: "Rapid retail checkout interface with live barcode scanning, direct catalog lookup, instant cart calculations, and sub-second payment finalization."
			},
			{
				title: "Live Invoices Registry & Sales Revenue Ledger",
				category: "Invoicing & Audit",
				image: "/assets/products/mobile-crm/Screenshot 2026-09-26 234043.png",
				description: "Audit sales registry tracking invoice status, payment modes (UPI, Cash), item profit margins, guarantor downpayments, and instant WhatsApp bill sharing."
			},
			{
				title: "Device Advance Bookings & Pre-Orders",
				category: "Pre-Orders & Booking",
				image: "/assets/products/mobile-crm/Screenshot 2026-09-26 234105.png",
				description: "Customer advance booking tracking with target fulfillment dates, downpayment receipts, and one-click conversion to finalized GST tax invoices."
			},
			{
				title: "Staff Management, Permissions & Payroll Matrix",
				category: "Staff & HR Operations",
				image: "/assets/products/mobile-crm/Screenshot 2026-09-26 234121.png",
				description: "Multi-tier staff administration configuring monthly compensation, commission structures, role permissions, and active operational status."
			},
			{
				title: "Staff Attendance & Geofenced Self Check-In",
				category: "Attendance & Operations",
				image: "/assets/products/mobile-crm/Screenshot 2026-09-26 234146.png",
				description: "Monthly staff attendance grid with location geofence boundary validation, shift presence records, pending approval queues, and manual status overrides."
			}
		],
		architectureFlow: [
			{
				step: "01",
				title: "Edge Terminal Input",
				tech: "React POS Web App & Scanner",
				detail: "Rapid item scan and customer lookup on web, desktop, and mobile devices."
			},
			{
				step: "02",
				title: "Ledger Engine Verification",
				tech: "Prisma ORM & PostgreSQL Core",
				detail: "Validates credit limits, tax items, and ACID double-entry ledger records."
			},
			{
				step: "03",
				title: "Payment Settlement",
				tech: "Multi-Tender Cash & UPI Engine",
				detail: "Reconciles payment tender with sub-second receipt generation."
			},
			{
				step: "04",
				title: "Encrypted Cloud Sync",
				tech: "Docker Containerized Cloud Sync",
				detail: "Containerized deployment ensuring high-availability sync and encrypted backups."
			}
		]
	},
	{
		id: "grocery-mart",
		slug: "grocery-mart",
		title: "Grocery Mart — Multi-Platform Quick-Commerce & Supermarket OS",
		shortTitle: "Grocery Mart",
		category: "Proprietary IP • Multi-Platform Quick-Commerce OS",
		tagline: "Customer Mobile App (10-15 Min Delivery), Dark-Store Picker & Rider App, Super Admin Master Catalog & Store Manager Margin Engine.",
		client: "Zytrixon Proprietary Suite",
		industry: "Quick-Commerce, Dark Stores, Supermarkets & Omnichannel FMCG",
		year: "2026",
		duration: "Enterprise Ready",
		architecture: "Node.js + Prisma + PostgreSQL + Redis with Multi-Platform Expo & React 19 Clients",
		accentColor: "#207393",
		secondaryColor: "#38BDF8",
		heroImage: "/assets/products/grocery-mart/Screenshot 2026-09-26 182031.png",
		mobileImage: "/assets/products/grocery-mart/image.png",
		secondMobileImage: "/assets/products/grocery-mart/WhatsApp Image 2026-09-27 at 1.42.06 AM.jpeg",
		liveUrl: "https://wa.me/917049711475?text=Hi%20Zytrixon%2C%20I%20would%20like%20to%20schedule%20an%20enterprise%20demo%20for%20Grocery%20Mart.",
		videoUrl: "",
		videoPoster: "",
		summary: "Grocery Mart is an enterprise multi-platform quick-commerce and retail grocery ecosystem designed for sub-15 minute hyperlocal delivery, dark-store warehouse picking, and supermarket store management. Architected across a high-conversion React Native Customer App (Expo SDK 57), an ultra-fast Dark-Store Picker & Delivery Partner App with camera barcode scanning and FEFO validation, and a React 19 Web Management Suite with Super Admin Master Catalog and Store Manager Inventory & Margin Engine backed by Node.js, Prisma, PostgreSQL, and Redis.",
		challenge: "Quick-commerce and modern supermarket operations struggle with multi-channel friction: picking errors in dark stores without rack routing, expired batch dispatches, blind spot profit margins between cost price (CP) and selling price (SP), cart abandonment during checkout rushes, and manual barcode label printing.",
		challengePoints: [
			"Dark-Store Picking Inaccuracies: Pickers searching through hundreds of bins manually without digital aisle/rack/shelf coordinates, leading to delayed 10-minute dispatch SLAs.",
			"FEFO Expiry & Batch Losses: Dispatching newer stock while older perishable batches expire on dark-store shelves due to missing First-Expiry-First-Out batch enforcement.",
			"Gross Margin & Pricing Blindspots: Store managers struggling to compute real-time gross margins across thousands of SKUs with volatile supplier cost prices and GST rates.",
			"Cart Drop-off & Variant Confusion: Customers abandoning carts due to unclear pack sizes (500ml vs 1L), missing nutritional info, or lack of hyperlocal delivery ETAs."
		],
		solution: "Zytrixon architected an end-to-end unified quick-commerce operating system comprising a high-conversion Customer Mobile App, a high-speed Dark-Store Picker App with continuous camera scanning, and a React 19 Web Management Suite featuring Master Catalog taxation, dynamic margin calculations, and thermal barcode label printing.",
		solutionPoints: [
			"Customer Mobile App (10-15 Min Hyperlocal Delivery): Multi-angle image carousels, dietary badges (🟢 Veg/🔴 Non-Veg), transparent unit economics, instant pack variant selector, and dynamic quantity stepper.",
			"Delivery Partner & Dark-Store Picker App: Digital warehouse rack/bin routing (Aisle, Rack, Shelf), camera barcode & SKU verification, chilled storage alerts, and FEFO expiry checks.",
			"Super Admin Master Catalog: Centralized HSN tax codes (GST 5% CGST/SGST split), category taxonomy, image uploads, and omnichannel switches (App, POS, 10-min delivery).",
			"Store Pricing & Gross Margin Calculator: Real-time gross margin indicator ((SP - CP) / SP * 100), store-level price overrides, and 7-day sales velocity replenishment forecasting.",
			"Multi-Batch & Inventory Tracking: Live available vs reserved stock, low-stock threshold alerts, and batch table linking expiry dates with supplier purchase orders.",
			"Thermal Barcode Label Printing: Built-in JsBarcode engine supporting standard 50x25mm and 38x25mm thermal sticker printing for pre-packed produce and staples."
		],
		metrics: [
			{
				value: "10-15 Min",
				label: "Hyperlocal Delivery",
				desc: "Real-time dark-store routing and instant dispatch SLA."
			},
			{
				value: "99.9%",
				label: "Picking Accuracy",
				desc: "Camera barcode verification preventing wrong SKU packaging."
			},
			{
				value: "100% FEFO",
				label: "Batch Compliance",
				desc: "Mandatory older batch validation eliminating dark-store spillage."
			},
			{
				value: "Real-Time",
				label: "Gross Margin Telemetry",
				desc: "Automatic profit margin calculations across all omnichannel channels."
			}
		],
		features: [
			{
				title: "🛒 Customer Mobile App (/app)",
				desc: "React Native (v0.86) & Expo SDK 57 with high-conversion PDP, dietary indicators, live 10-15 min ETA pill, pack variants, and sticky cart stepper.",
				icon: "🛒"
			},
			{
				title: "🛵 Delivery Partner & Picker App (/partner-app)",
				desc: "Warehouse Aisle/Rack/Shelf routing, continuous camera barcode scanning, FEFO expiry checklist, and temperature handling alerts.",
				icon: "🛵"
			},
			{
				title: "🖥️ Super Admin Master Catalog",
				desc: "Centralized taxonomy, HSN codes, GST 5% automatic tax splitting, image management, and omnichannel visibility toggles.",
				icon: "🖥️"
			},
			{
				title: "📈 Store Margin & Batch Calculator",
				desc: "Cost price (CP), selling price (SP), gross margin percentage calculator, store overrides, and replenishment runway forecasting.",
				icon: "📊"
			},
			{
				title: "🖨️ Thermal Barcode Label Printing",
				desc: "Integrated JsBarcode engine generating thermal barcode labels (50x25mm / 38x25mm) for pre-packed staples and fresh produce.",
				icon: "🖨️"
			},
			{
				title: "🗄️ Node.js + Prisma + PostgreSQL + Redis",
				desc: "Sub-millisecond REST APIs (/api/v1/catalog & /api/v1/store/inventory) with Redis cache and ACID relational integrity.",
				icon: "⚡"
			}
		],
		techStack: [
			{
				name: "React Native (v0.86) & Expo SDK 57",
				category: "Customer & Picker Mobile Apps"
			},
			{
				name: "React 19 & Vite 8",
				category: "Web Management Suite"
			},
			{
				name: "Tailwind CSS v4 & twrnc",
				category: "Omnichannel Design System"
			},
			{
				name: "Node.js & Express REST Core",
				category: "Backend Microservices"
			},
			{
				name: "PostgreSQL & Prisma ORM",
				category: "ACID Relational Core"
			},
			{
				name: "Redis Cache",
				category: "Sub-Millisecond Barcode Lookups"
			},
			{
				name: "TanStack React Query v5 & Zustand",
				category: "Server Sync & Client State"
			},
			{
				name: "Recharts & JsBarcode",
				category: "Velocity Analytics & Thermal Labels"
			},
			{
				name: "Docker & Socket.IO",
				category: "Containerization & Live Pick Events"
			}
		],
		screenshots: [
			{
				title: "Grocery Mart Customer Mobile App",
				category: "Customer App",
				image: "/assets/products/grocery-mart/image.png",
				description: "High-conversion customer ordering mobile app interface featuring fresh grocery catalog, sub-15 minute hyperlocal delivery, and seamless checkout."
			},
			{
				title: "Grocery Mart Delivery Partner & Rider App",
				category: "Partner App",
				image: "/assets/products/grocery-mart/WhatsApp Image 2026-09-27 at 1.42.06 AM.jpeg",
				description: "Dedicated delivery partner and rider portal for order pickup, dark-store bin navigation, and fast doorstep delivery routing."
			},
			{
				title: "Operational Terminal & Command Center Dashboard",
				category: "Store Command",
				image: "/assets/products/grocery-mart/Screenshot 2026-09-26 182031.png",
				description: "Live operational terminal for Sahil Grocery Shop (Sector 62, Noida) showing POS billing, live orders queue, TV kiosk screen, revenue tracking (₹5,98,900), and 99.8% SLA dispatch metrics."
			},
			{
				title: "Real-Time Store Analytics & Staff KPI Matrix",
				category: "Analytics & KPIs",
				image: "/assets/products/grocery-mart/Screenshot 2026-09-26 182946.png",
				description: "Store analytics intelligence showcasing average cart size (₹482), gross margin telemetry (18.4%), staff handling speeds, and associate performance radar."
			}
		],
		architectureFlow: [
			{
				step: "01",
				title: "Catalog & Store Sync",
				tech: "Node.js + Prisma ORM",
				detail: "Centralized master catalog with HSN codes, GST rates, and multi-store inventory mapping."
			},
			{
				step: "02",
				title: "In-Memory Cache & Stock Lock",
				tech: "Redis Distributed Cache",
				detail: "Sub-millisecond inventory reservation when customer adds items to cart."
			},
			{
				step: "03",
				title: "Dark-Store Bin Navigation",
				tech: "Picker App + Socket.IO",
				detail: "Real-time order routing with Aisle/Rack/Shelf coordinates and camera barcode verification."
			},
			{
				step: "04",
				title: "Hyperlocal Rider Dispatch",
				tech: "Delivery App + GPS Telemetry",
				detail: "Continuous FEFO batch validation and automated 10-15 minute doorstep delivery."
			}
		]
	},
	{
		id: "grain-saas",
		slug: "grain-saas",
		title: "Grain SaaS — Premium Grain Trading, Lot-wise Inventory & Mandi Management Platform",
		shortTitle: "Grain SaaS",
		category: "Proprietary IP • Agricultural Commodity & Mandi Trading OS",
		tagline: "The future of grain trading. Manage lot-wise inventory, automate broker commissions, and handle integrated party ledgers built specifically for agricultural merchants.",
		client: "Zytrixon Proprietary Suite",
		industry: "Agricultural Wholesale, Mandi Merchants & Grain Trading",
		year: "2025 - 2026",
		duration: "Enterprise Ready",
		architecture: "Multi-Tenant Grain Ledger & Distributed Lot Inventory Architecture",
		accentColor: "#D4A373",
		secondaryColor: "#2A9D8F",
		heroImage: "/assets/products/grain-saas/grain-saas-hero-pc.png",
		mobileImage: "/assets/products/grain-saas/grain-saas-hero-mobile.png",
		liveUrl: "https://grain.zytrixon.com/",
		videoUrl: "",
		videoPoster: "/assets/products/grain-saas/grain-saas-hero-pc.png",
		summary: "Grain SaaS is an enterprise agricultural commodity and Mandi trading platform engineered for grain merchants, commission agents (Kachha & Pucca Arhtiya), and warehouse operators. Built to replace fragmented paper bahi-khata and complex spreadsheets, Grain SaaS unifies lot-wise stock control, automated broker commission calculations, live double-entry party ledgers, and multi-godown transfers into a high-speed cloud workspace.",
		challenge: "Agricultural wholesale trading involves complex calculations: fluctuating quintal-to-ton conversion rates, stock spillage and moisture shrinkage, multi-tier broker commission rules, and dispute-prone paper ledgers between farmers, buyers, and commission agents across Mandis.",
		challengePoints: [
			"Lot-Level Shrinkage & Loss: Inability to track individual purchase lots leading to untracked warehouse shrinkage, spillage, and stock degradation.",
			"Manual Broker Commission Errors: Complex commission calculations (Fixed, Percentage, and Per Quintal) creating payout disputes and delayed settlements.",
			"Double-Entry Ledger Mismatches: Manual bahi-khata entries leading to reconciliation discrepancies between buyer credit accounts and seller advances.",
			"Multi-Godown Tracking Chaos: Stock distributed across multiple cold storages and warehouses with zero real-time visibility into lot locations."
		],
		solution: "Zytrixon architected an end-to-end grain trading operating system featuring automated purchase lot generation, dynamic broker commission engines, real-time double-entry party accounting, and one-click GST invoice printing.",
		solutionPoints: [
			"Lot-Wise Inventory Control: Track exact quintals, bags, and moisture grade per purchase lot with automated stock deduction during sales.",
			"Automated Broker Commission Engine: Configure rules per broker (Fixed, %, or Per Quintal) with dedicated commission ledgers and one-click payouts.",
			"Integrated Party Ledgers: Every purchase, sale, receipt, and payment automatically updates ledger balances with instant PDF/Excel exports.",
			"Multi-Godown & Storage Management: Real-time stock visibility across distributed warehouses and cold storages with instant inter-godown transfers.",
			"Multi-Unit Trade Engine: Native trade conversion across Quintals, Tons, and custom Bag Weights (50kg, 100kg)."
		],
		metrics: [
			{
				value: "500+",
				label: "Mandi Traders",
				desc: "Trusted by agricultural merchants, commission agents, and wholesale grain traders."
			},
			{
				value: "₹5B+",
				label: "Volume Managed",
				desc: "Handling massive commodity trade volumes with zero ledger mismatch."
			},
			{
				value: "50k+",
				label: "Invoices Generated",
				desc: "Instant GST-compliant tax invoices and customized Mandi bills of supply."
			},
			{
				value: "100%",
				label: "Lot Visibility",
				desc: "Real-time lot-level tracking across all godowns, eliminating inventory shrinkage."
			}
		],
		features: [
			{
				title: "Lot-Wise Inventory Control",
				desc: "Track individual purchase lots with exact bags and quintal weight. Deduct stock from specific lots during sales to prevent shrinkage.",
				icon: "🌾"
			},
			{
				title: "Automated Broker Commissions",
				desc: "Support for Fixed, Percentage, and Per Quintal commission rules with dedicated broker ledgers and instant payout tracking.",
				icon: "🤝"
			},
			{
				title: "Live Party Ledgers",
				desc: "Automatic double-entry bookkeeping for purchases, sales, receipts, and payments with opening/closing balances and PDF statements.",
				icon: "📒"
			},
			{
				title: "Multi-Godown Management",
				desc: "Track stock across multiple warehouses or cold storages with seamless stock transfers and location-wise inventory reports.",
				icon: "🏢"
			},
			{
				title: "Professional GST Invoicing",
				desc: "Generate compliant tax invoices and bills of supply instantly with customizable letterhead graphics for pre-printed stationery.",
				icon: "🧾"
			},
			{
				title: "Multi-Unit Trade Conversion",
				desc: "Purchase in Tons, sell in Quintals. Native unit conversions with custom bag weight definitions (50kg, 100kg) globally.",
				icon: "⚖️"
			}
		],
		techStack: [
			{
				name: "Laravel 11 Core",
				category: "Backend Engine & Multi-Tenancy"
			},
			{
				name: "MySQL Enterprise",
				category: "ACID Relational Ledger Database"
			},
			{
				name: "Bootstrap & Duralux Admin",
				category: "Enterprise Dashboard UI"
			},
			{
				name: "Redis Cache",
				category: "Sub-Millisecond Ledger Queries"
			},
			{
				name: "AES-256 Encryption",
				category: "Financial Security & Data Shield"
			}
		],
		screenshots: [{
			title: "Grain SaaS Trading Command Center & Live Analytics",
			category: "Trading Dashboard",
			image: "/assets/products/grain-saas/grain-saas-dashboard.png",
			description: "Unified merchant workspace monitoring live purchases, sales dispatch logs, current stock units, total payables (₹101,300), sales vs purchases velocity graph, and grain-wise inventory distribution."
		}, {
			title: "Grain SaaS Official Web Platform & Merchant Portal",
			category: "Platform Architecture",
			image: "/assets/products/grain-saas/grain-saas-hero-pc.png",
			description: "Cloud-based grain trading operating system engineered for commission agents, Mandi merchants, and agricultural wholesale enterprises."
		}],
		demoCredentials: {
			email: "trader@grainsaas.com",
			pass: "Grain#Trader2026",
			role: "Mandi Merchant / Commission Agent"
		},
		architectureFlow: [
			{
				step: "01",
				title: "Arrival & Lot Creation",
				tech: "Procurement Engine",
				detail: "Log incoming grain arrivals, deduct shortage/wastage, and generate purchase lots."
			},
			{
				step: "02",
				title: "Godown Stock Allocation",
				tech: "Multi-Warehouse Mesh",
				detail: "Assign lot to specific godown and track bag count and quintal weight in real-time."
			},
			{
				step: "03",
				title: "Sales Dispatch & Broker Rules",
				tech: "Commission Automation",
				detail: "Sell from designated lots while system automatically calculates broker commissions."
			},
			{
				step: "04",
				title: "Ledger Reconciliation & Invoicing",
				tech: "Double-Entry Core",
				detail: "Instant ledger balance update, payment receipt generation, and GST tax invoice print."
			}
		]
	},
	{
		id: "review-booster",
		slug: "review-booster",
		title: "ReviewBooster — Turn Walk-in Customers into 5-Star Google Reviews with Smart AI & QR",
		shortTitle: "ReviewBooster",
		category: "Proprietary IP • AI Reputation Engine & Smart QR Hardware",
		tagline: "Turn walk-in customers into genuine 5-star Google reviews in 15 seconds. Physical QR counter standees + smart context-aware AI review assistant. 100% Google policy compliant.",
		client: "Zytrixon Proprietary Suite",
		industry: "Restaurants, Clinics, Salons, Retail & Multi-Location Franchises",
		year: "2026",
		duration: "Enterprise Ready",
		architecture: "Context-Aware Natural Language Review Engine, Multi-Tenant Laravel 12 & Physical NFC/QR Touchpoints",
		accentColor: "#059669",
		secondaryColor: "#10B981",
		heroImage: "/assets/products/review-booster/review-booster-hero.png",
		mobileImage: "/assets/products/review-booster/review-booster-mobile.png",
		liveUrl: "https://aireview.zytrixon.com/",
		videoUrl: "",
		videoPoster: "/assets/products/review-booster/review-booster-hero.png",
		summary: "ReviewBooster is an omnichannel reputation growth platform engineered to turn physical walk-in customers into genuine 5-star Google Maps reviews in under 15 seconds. By pairing acrylic QR/NFC counter standees with an intelligent, context-aware AI review assistant, customers select their experience tags without facing blank text box paralysis. The platform features an automated Reputation Protection Shield that routes ratings under 4 stars to private management channels, native Hinglish and English dialect generation, and a multi-tenant franchise dashboard with real-time scan-to-review analytics.",
		challenge: "Over 93% of satisfied walk-in customers intend to leave a positive review, but abandon the process due to keyboard typing friction, awkward staff requests, and blank text box paralysis. Meanwhile, disgruntled customers go out of their way to post negative reviews on Google Maps, skewing public merchant ratings.",
		challengePoints: [
			"Blank Text Box Paralysis: Customers want to help, but do not know what to write on a phone keyboard while rushing out of a store.",
			"Friction of App Downloads: Requiring logins, downloads, or SMS links causes massive drop-offs once customers leave premises.",
			"Spam Filter & Bot Penalties: Using bot services or canned repetitive templates violates Google Business Profile policies and risks listing suspensions.",
			"Unfiltered Public Negative Outbursts: Dissatisfied customers post 1-star reviews directly to Google before managers have any opportunity to resolve the issue internally."
		],
		solution: "ReviewBooster creates an instant, zero-friction review funnel directly at checkout counters through physical QR/NFC touchpoints, browser-native AI draft assistance in Hinglish & English, and a private feedback filter.",
		solutionPoints: [
			"Physical QR & NFC Counter Standees: Premium acrylic table tents and POS counter plaques placed at the peak customer satisfaction moment.",
			"Zero-App Browser Flow: Native mobile browser experience opens in under 0.8 seconds on any iOS or Android camera scan without downloads or account creation.",
			"Context-Aware Smart AI Assistant: Customers tap 2–3 experience tags, and the AI crafts a unique, natural 2-sentence review in conversational Hinglish or English.",
			"Reputation Protection Shield: Dissatisfied ratings (1–3 stars) are privately routed to the manager WhatsApp or email for internal resolution, keeping public Google ratings protected.",
			"100% Google Safe Architecture: Every submission is customer-initiated, edited, and posted directly from their personal device and Google account.",
			"Multi-Tenant Franchise & Agency Control: Centralized administration for single outlets or 500+ franchise locations with per-location review tags and reseller capabilities."
		],
		metrics: [
			{
				label: "Review Volume Increase",
				value: "5.4×",
				desc: "Average increase in monthly customer Google reviews within 60 days of counter standee deployment."
			},
			{
				label: "Average Merchant Rating",
				value: "4.86★",
				desc: "Maintained across 1,200+ active retail, dining, healthcare, and salon merchants."
			},
			{
				label: "Scan-to-Post Speed",
				value: "14 Sec",
				desc: "Ultra-fast customer flow from camera scan to Google Maps submission."
			},
			{
				label: "Google Policy Compliance",
				value: "100%",
				desc: "Strict white-hat architecture with customer-driven posting and zero bot injections."
			}
		],
		features: [
			{
				title: "Zero Customer Friction (4-Step Flow)",
				desc: "Scan counter QR -> Tap stars & experience tags -> AI crafts personalized draft -> 1-tap copy and deep link to Google Maps.",
				icon: "⚡"
			},
			{
				title: "Context-Aware Smart AI Review Engine",
				desc: "Generates natural, human-sounding reviews with dynamic variations in English and conversational Hinglish tailored for Indian local businesses.",
				icon: "🤖"
			},
			{
				title: "Private Feedback Reputation Shield",
				desc: "Ratings of 1 to 3 stars route gracefully to internal management feedback forms, giving you time to resolve issues before they reach Google.",
				icon: "🛡️"
			},
			{
				title: "Physical QR & NFC Counter Standees",
				desc: "A6 clear acrylic table tents, NFC + QR counter plaques, and 10-table restaurant bundles engineered for high-footfall durability.",
				icon: "🪧"
			},
			{
				title: "Multi-Tenant Franchise & Agency Suite",
				desc: "Manage 1 outlet or 500+ franchise branches with custom tags, outlet-level analytics, and white-label reseller controls.",
				icon: "🏢"
			},
			{
				title: "Real-Time CTR & Scan Analytics",
				desc: "Track QR scan conversion rates, staff performance, customer sentiment trends, and monthly review velocity from a centralized dashboard.",
				icon: "📊"
			}
		],
		techStack: [
			{
				name: "Laravel 12 API",
				category: "Multi-Tenant Core & Backend Services"
			},
			{
				name: "Natural Language Processing Engine",
				category: "Proprietary Context-Aware AI Generation"
			},
			{
				name: "Alpine.js & Livewire",
				category: "High-Speed Client Reactive Interface"
			},
			{
				name: "NFC (NTAG213/215) & Dynamic QR",
				category: "Physical Counter Standee Hardware"
			},
			{
				name: "Google Places API",
				category: "Verified Listing Deep-Linking"
			},
			{
				name: "Tailwind CSS v4",
				category: "Emerald Design System & Mobile Tokens"
			},
			{
				name: "MySQL Multi-Tenant DB",
				category: "Row-Level Scoped Data Storage"
			}
		],
		screenshots: [
			{
				title: "ReviewBooster Hero & Live AI Review Preview",
				category: "Dashboard",
				image: "/assets/products/review-booster/review-booster-hero.png",
				description: "Interactive AI review assistant showcase with 15-second customer scan-to-post flow and live Hinglish generation."
			},
			{
				title: "Native Mobile Scan Experience & Tap Tags",
				category: "Mobile App",
				image: "/assets/products/review-booster/review-booster-mobile.png",
				description: "Zero-app browser flow for customers featuring star rating selection, tag chips, and 1-tap clipboard copying."
			},
			{
				title: "System Architecture & Core Capabilities",
				category: "Workflow",
				image: "/assets/products/review-booster/review-booster-features.png",
				description: "Comprehensive breakdown of context-aware AI engine, anti-spam protections, and multi-tenant capabilities."
			},
			{
				title: "Zero-Friction 4-Step Customer Journey",
				category: "Workflow",
				image: "/assets/products/review-booster/review-booster-workflow.png",
				description: "Visual blueprint showing camera scan, tag selection, AI generation, and instant Google Maps submission."
			},
			{
				title: "Subscription Plans & Acrylic Hardware Packages",
				category: "Analytics",
				image: "/assets/products/review-booster/review-booster-pricing.png",
				description: "Transparent pricing tiers for single outlets, growing multi-location chains, and digital marketing agencies."
			}
		],
		testimonial: {
			quote: "We jumped from 82 to 460 reviews in 60 days. Now #1 for biryani near me in Indiranagar. The Hinglish text is unbelievably natural!",
			author: "Sameer Khan",
			role: "Founder & Head Chef · The Biryani Court (Bangalore)"
		},
		architectureFlow: [
			{
				step: "01",
				title: "Counter Touchpoint Scan",
				tech: "NFC / Dynamic QR Code",
				detail: "Customer scans acrylic standee or taps NFC plaque at checkout, loading the lightweight mobile page in <0.8s without app download."
			},
			{
				step: "02",
				title: "Sentiment & Tag Capture",
				tech: "Interactive Micro-UI",
				detail: "Customer taps 5 stars and 2–3 specific service tags (e.g., Great Food, Quick Billing, Polite Staff)."
			},
			{
				step: "03",
				title: "Contextual AI Generation",
				tech: "Proprietary NLP Engine",
				detail: "System weaves selected tags into an authentic, human-sounding 2-sentence review in conversational English or Hinglish."
			},
			{
				step: "04",
				title: "1-Tap Google Maps Submission",
				tech: "Universal Deep-Linking",
				detail: "Draft copies to clipboard and automatically opens the merchant Google Maps review dialog for instant submission."
			}
		]
	}
];
function getProductBySlug(slug) {
	return PRODUCTS_DATA.find((p) => p.slug === slug || p.id === slug || slug === "ai-review" && (p.slug === "review-booster" || p.id === "review-booster"));
}
//#endregion
//#region resources/js/components/product-details/ProductWorkEasySection.tsx
function ProductWorkEasySection({ project }) {
	const accentColor = project.accentColor || "#0EA5E9";
	const secondaryColor = project.secondaryColor || "#38BDF8";
	const productName = project.shortTitle || project.title;
	const splitPoint = (pt) => {
		const colonIndex = pt.indexOf(":");
		if (colonIndex !== -1) return {
			title: pt.slice(0, colonIndex).trim(),
			desc: pt.slice(colonIndex + 1).trim()
		};
		return {
			title: "",
			desc: pt
		};
	};
	return /* @__PURE__ */ jsxs("section", {
		id: "work-easy",
		style: {
			padding: "96px var(--zy-section-pad-x, 24px)",
			background: "var(--zy-bg)",
			borderBottom: "1px solid var(--zy-border-subtle)",
			transition: "background 0.3s ease, border-color 0.3s ease",
			position: "relative",
			overflow: "hidden"
		},
		children: [/* @__PURE__ */ jsx("div", { style: {
			position: "absolute",
			top: "10%",
			left: "50%",
			transform: "translateX(-50%)",
			width: "600px",
			height: "350px",
			background: `radial-gradient(ellipse at center, ${accentColor}15 0%, transparent 70%)`,
			filter: "blur(60px)",
			pointerEvents: "none",
			zIndex: 0
		} }), /* @__PURE__ */ jsxs("div", {
			style: {
				maxWidth: "1240px",
				margin: "0 auto",
				position: "relative",
				zIndex: 1
			},
			children: [
				/* @__PURE__ */ jsxs("div", {
					style: {
						textAlign: "center",
						marginBottom: "56px"
					},
					children: [
						/* @__PURE__ */ jsxs("div", {
							style: {
								display: "inline-flex",
								alignItems: "center",
								gap: "8px",
								fontSize: "11px",
								fontWeight: 800,
								letterSpacing: "0.15em",
								textTransform: "uppercase",
								color: accentColor,
								background: "var(--zy-surface-2)",
								padding: "6px 18px",
								borderRadius: "30px",
								border: `1px solid ${accentColor}33`,
								boxShadow: `0 0 20px ${accentColor}15`,
								marginBottom: "18px"
							},
							children: [/* @__PURE__ */ jsx("span", { children: "⚡" }), /* @__PURE__ */ jsx("span", { children: "Operational Simplicity • Built For Speed" })]
						}),
						/* @__PURE__ */ jsxs("h2", {
							style: {
								fontFamily: "var(--font-heading, Space Grotesk, sans-serif)",
								fontSize: "clamp(30px, 4.2vw, 46px)",
								fontWeight: 800,
								color: "var(--zy-text-primary)",
								lineHeight: 1.15,
								letterSpacing: "-0.02em",
								maxWidth: "850px",
								margin: "0 auto"
							},
							children: [
								"How",
								" ",
								/* @__PURE__ */ jsx("span", {
									style: { color: accentColor },
									children: productName
								}),
								" ",
								"Makes Your Work Easy"
							]
						}),
						/* @__PURE__ */ jsx("p", {
							style: {
								color: "var(--zy-text-secondary)",
								fontSize: "clamp(15px, 1.8vw, 17px)",
								maxWidth: "720px",
								margin: "16px auto 0",
								lineHeight: 1.65
							},
							children: "Eliminate manual registers, confusing spreadsheets, and daily reconciliation friction. Experience a unified system where every operational task is fast, automated, and effortless."
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					style: {
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
						gap: "32px",
						alignItems: "stretch"
					},
					children: [/* @__PURE__ */ jsxs("div", {
						style: {
							background: "var(--zy-surface-1)",
							border: "1px solid var(--zy-border-subtle)",
							borderRadius: "24px",
							padding: "40px 32px",
							display: "flex",
							flexDirection: "column",
							boxShadow: "0 8px 32px rgba(0, 0, 0, 0.04)",
							transition: "border-color 0.3s ease, transform 0.3s ease",
							position: "relative"
						},
						children: [
							/* @__PURE__ */ jsxs("div", {
								style: {
									display: "inline-flex",
									alignItems: "center",
									gap: "8px",
									fontSize: "11px",
									fontWeight: 800,
									textTransform: "uppercase",
									letterSpacing: "0.1em",
									color: "#EF4444",
									background: "rgba(239, 68, 68, 0.08)",
									border: "1px solid rgba(239, 68, 68, 0.2)",
									padding: "5px 14px",
									borderRadius: "12px",
									width: "fit-content",
									marginBottom: "18px"
								},
								children: [/* @__PURE__ */ jsx("span", { children: "⚠️" }), /* @__PURE__ */ jsx("span", { children: "Everyday Bottlenecks" })]
							}),
							/* @__PURE__ */ jsx("h3", {
								style: {
									fontSize: "22px",
									fontWeight: 700,
									color: "var(--zy-text-primary)",
									marginBottom: "12px"
								},
								children: "The Friction You Eliminate"
							}),
							/* @__PURE__ */ jsx("p", {
								style: {
									fontSize: "14.5px",
									color: "var(--zy-text-secondary)",
									lineHeight: 1.7,
									marginBottom: "28px"
								},
								children: project.challenge
							}),
							/* @__PURE__ */ jsx("div", {
								style: {
									display: "flex",
									flexDirection: "column",
									gap: "16px",
									marginTop: "auto"
								},
								children: project.challengePoints.map((pt, i) => {
									const { title, desc } = splitPoint(pt);
									return /* @__PURE__ */ jsxs("div", {
										style: {
											display: "flex",
											alignItems: "flex-start",
											gap: "14px",
											background: "var(--zy-surface-2)",
											border: "1px solid var(--zy-border-subtle)",
											borderRadius: "16px",
											padding: "16px",
											transition: "border-color 0.2s ease, transform 0.2s ease"
										},
										children: [/* @__PURE__ */ jsx("span", {
											style: {
												color: "#EF4444",
												background: "rgba(239, 68, 68, 0.1)",
												border: "1px solid rgba(239, 68, 68, 0.25)",
												width: "26px",
												height: "26px",
												borderRadius: "50%",
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												fontSize: "12px",
												fontWeight: 800,
												flexShrink: 0,
												marginTop: "1px"
											},
											children: "✕"
										}), /* @__PURE__ */ jsxs("div", {
											style: {
												fontSize: "14px",
												lineHeight: 1.6
											},
											children: [title ? /* @__PURE__ */ jsxs("strong", {
												style: {
													color: "var(--zy-text-primary)",
													fontWeight: 700,
													display: "inline",
													marginRight: "6px"
												},
												children: [title, ":"]
											}) : null, /* @__PURE__ */ jsx("span", {
												style: { color: "var(--zy-text-secondary)" },
												children: desc
											})]
										})]
									}, i);
								})
							})
						]
					}), /* @__PURE__ */ jsxs("div", {
						style: {
							background: "var(--zy-surface-1)",
							border: `1.5px solid ${accentColor}55`,
							borderRadius: "24px",
							padding: "40px 32px",
							display: "flex",
							flexDirection: "column",
							boxShadow: `0 12px 40px ${accentColor}18`,
							position: "relative",
							overflow: "hidden"
						},
						children: [
							/* @__PURE__ */ jsx("div", { style: {
								position: "absolute",
								top: 0,
								left: 0,
								right: 0,
								height: "4px",
								background: `linear-gradient(90deg, ${accentColor}, ${secondaryColor})`
							} }),
							/* @__PURE__ */ jsxs("div", {
								style: {
									display: "inline-flex",
									alignItems: "center",
									gap: "8px",
									fontSize: "11px",
									fontWeight: 800,
									textTransform: "uppercase",
									letterSpacing: "0.1em",
									color: accentColor,
									background: `${accentColor}15`,
									border: `1px solid ${accentColor}33`,
									padding: "5px 14px",
									borderRadius: "12px",
									width: "fit-content",
									marginBottom: "18px"
								},
								children: [/* @__PURE__ */ jsx("span", { children: "✨" }), /* @__PURE__ */ jsx("span", { children: "Automated Simplicity" })]
							}),
							/* @__PURE__ */ jsxs("h3", {
								style: {
									fontSize: "22px",
									fontWeight: 700,
									color: "var(--zy-text-primary)",
									marginBottom: "12px"
								},
								children: [
									"How ",
									productName,
									" Makes Daily Work Easy"
								]
							}),
							/* @__PURE__ */ jsx("p", {
								style: {
									fontSize: "14.5px",
									color: "var(--zy-text-secondary)",
									lineHeight: 1.7,
									marginBottom: "28px"
								},
								children: project.solution
							}),
							/* @__PURE__ */ jsx("div", {
								style: {
									display: "flex",
									flexDirection: "column",
									gap: "16px",
									marginTop: "auto"
								},
								children: project.solutionPoints.map((pt, i) => {
									const { title, desc } = splitPoint(pt);
									return /* @__PURE__ */ jsxs("div", {
										style: {
											display: "flex",
											alignItems: "flex-start",
											gap: "14px",
											background: "var(--zy-surface-2)",
											border: `1px solid ${accentColor}25`,
											borderRadius: "16px",
											padding: "16px",
											boxShadow: "0 2px 8px rgba(0, 0, 0, 0.02)",
											transition: "border-color 0.2s ease, transform 0.2s ease"
										},
										children: [/* @__PURE__ */ jsx("span", {
											style: {
												color: "#10B981",
												background: "rgba(16, 185, 129, 0.12)",
												border: "1px solid rgba(16, 185, 129, 0.3)",
												width: "26px",
												height: "26px",
												borderRadius: "50%",
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												fontSize: "13px",
												fontWeight: 800,
												flexShrink: 0,
												marginTop: "1px"
											},
											children: "✓"
										}), /* @__PURE__ */ jsxs("div", {
											style: {
												fontSize: "14px",
												lineHeight: 1.6
											},
											children: [title ? /* @__PURE__ */ jsxs("strong", {
												style: {
													color: "var(--zy-text-primary)",
													fontWeight: 700,
													display: "inline",
													marginRight: "6px"
												},
												children: [title, ":"]
											}) : null, /* @__PURE__ */ jsx("span", {
												style: { color: "var(--zy-text-secondary)" },
												children: desc
											})]
										})]
									}, i);
								})
							})
						]
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					style: {
						marginTop: "48px",
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
						gap: "20px"
					},
					children: [
						{
							icon: "⚡",
							title: "3-Second Counter Operations",
							desc: "Instant barcode/IMEI lookup and one-tap checkout with dynamic UPI QR."
						},
						{
							icon: "📒",
							title: "Zero Balance Disputes",
							desc: "Running double-entry ledgers for suppliers and customer credit with zero drift."
						},
						{
							icon: "⏱️",
							title: "3+ Hours Saved Everyday",
							desc: "Automate daily register reconciliation, stock audits, and staff payroll."
						},
						{
							icon: "☁️",
							title: "Real-Time Cloud Telemetry",
							desc: "Access sales, profit metrics, and counter audits securely from anywhere."
						}
					].map((item, idx) => /* @__PURE__ */ jsxs("div", {
						style: {
							background: "var(--zy-surface-1)",
							border: "1px solid var(--zy-border-subtle)",
							borderRadius: "18px",
							padding: "20px 22px",
							display: "flex",
							alignItems: "flex-start",
							gap: "14px",
							transition: "all 0.25s ease"
						},
						children: [/* @__PURE__ */ jsx("span", {
							style: {
								fontSize: "22px",
								background: "var(--zy-surface-2)",
								borderRadius: "12px",
								width: "42px",
								height: "42px",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								flexShrink: 0
							},
							children: item.icon
						}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
							style: {
								fontSize: "15px",
								fontWeight: 700,
								color: "var(--zy-text-primary)",
								marginBottom: "4px"
							},
							children: item.title
						}), /* @__PURE__ */ jsx("p", {
							style: {
								fontSize: "13px",
								color: "var(--zy-text-secondary)",
								lineHeight: 1.5,
								margin: 0
							},
							children: item.desc
						})] })]
					}, idx))
				})
			]
		})]
	});
}
//#endregion
//#region resources/js/components/product-details/ProductScreenshots.tsx
function ProductScreenshots({ product }) {
	const { theme } = useTheme();
	const isLight = theme === "light";
	const sliderRef = useRef(null);
	const [activeIndex, setActiveIndex] = useState(0);
	const screenshots = product.screenshots || [];
	const handleScroll = () => {
		if (!sliderRef.current) return;
		const scrollLeft = sliderRef.current.scrollLeft;
		const width = sliderRef.current.clientWidth;
		const newIndex = Math.round(scrollLeft / width);
		if (newIndex !== activeIndex && newIndex >= 0 && newIndex < screenshots.length) setActiveIndex(newIndex);
	};
	const scrollToIndex = (index) => {
		if (!sliderRef.current) return;
		const width = sliderRef.current.clientWidth;
		sliderRef.current.scrollTo({
			left: index * width,
			behavior: "smooth"
		});
		setActiveIndex(index);
	};
	const scrollPrev = () => {
		scrollToIndex(Math.max(0, activeIndex - 1));
	};
	const scrollNext = () => {
		scrollToIndex(Math.min(screenshots.length - 1, activeIndex + 1));
	};
	if (screenshots.length === 0) return null;
	const hasMultiple = screenshots.length > 1;
	return /* @__PURE__ */ jsxs("section", {
		id: "gallery",
		style: {
			paddingTop: "80px",
			paddingBottom: "85px",
			paddingLeft: "var(--zy-section-pad-x, 24px)",
			paddingRight: "var(--zy-section-pad-x, 24px)",
			background: "var(--zy-bg)",
			borderBottom: "1px solid var(--zy-border-subtle)",
			position: "relative",
			overflow: "hidden",
			transition: "background 0.3s ease, border-color 0.3s ease"
		},
		children: [/* @__PURE__ */ jsxs("div", {
			style: {
				maxWidth: "1280px",
				margin: "0 auto",
				position: "relative"
			},
			children: [
				/* @__PURE__ */ jsxs("div", {
					style: {
						display: "flex",
						alignItems: "flex-end",
						justifyContent: "space-between",
						flexWrap: "wrap",
						gap: "20px",
						marginBottom: "36px"
					},
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("span", {
						className: "zy-section-label",
						style: {
							display: "inline-flex",
							alignItems: "center",
							gap: "6px",
							fontSize: "11px",
							fontWeight: 800,
							letterSpacing: "0.12em",
							textTransform: "uppercase",
							color: "var(--zy-text-secondary)",
							background: "var(--zy-surface-2)",
							border: "1px solid var(--zy-border-subtle)",
							padding: "4px 12px",
							borderRadius: "20px",
							marginBottom: "12px"
						},
						children: [/* @__PURE__ */ jsx("span", { style: {
							width: "6px",
							height: "6px",
							borderRadius: "50%",
							background: product.accentColor
						} }), "Product Interfaces"]
					}), /* @__PURE__ */ jsx("h2", {
						style: {
							fontFamily: "var(--font-heading, Space Grotesk, sans-serif)",
							fontSize: "clamp(26px, 3.5vw, 42px)",
							fontWeight: 800,
							color: "var(--zy-text-primary)",
							letterSpacing: "-0.02em",
							margin: 0
						},
						children: "Screenshots & Workflows"
					})] }), hasMultiple && /* @__PURE__ */ jsxs("div", {
						style: {
							display: "flex",
							alignItems: "center",
							gap: "10px"
						},
						children: [/* @__PURE__ */ jsx("button", {
							type: "button",
							onClick: scrollPrev,
							disabled: activeIndex === 0,
							"aria-label": "Previous screenshot",
							style: {
								width: "42px",
								height: "42px",
								borderRadius: "50%",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								background: "var(--zy-surface-2)",
								border: "1px solid var(--zy-border-subtle)",
								color: activeIndex === 0 ? "var(--zy-text-muted)" : "var(--zy-text-primary)",
								cursor: activeIndex === 0 ? "not-allowed" : "pointer",
								transition: "all 0.25s ease",
								opacity: activeIndex === 0 ? .45 : 1
							},
							children: /* @__PURE__ */ jsx("svg", {
								width: "18",
								height: "18",
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: "2.5",
								children: /* @__PURE__ */ jsx("polyline", { points: "15 18 9 12 15 6" })
							})
						}), /* @__PURE__ */ jsx("button", {
							type: "button",
							onClick: scrollNext,
							disabled: activeIndex === screenshots.length - 1,
							"aria-label": "Next screenshot",
							style: {
								width: "42px",
								height: "42px",
								borderRadius: "50%",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								background: "var(--zy-surface-2)",
								border: "1px solid var(--zy-border-subtle)",
								color: activeIndex === screenshots.length - 1 ? "var(--zy-text-muted)" : "var(--zy-text-primary)",
								cursor: activeIndex === screenshots.length - 1 ? "not-allowed" : "pointer",
								transition: "all 0.25s ease",
								opacity: activeIndex === screenshots.length - 1 ? .45 : 1
							},
							children: /* @__PURE__ */ jsx("svg", {
								width: "18",
								height: "18",
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: "2.5",
								children: /* @__PURE__ */ jsx("polyline", { points: "9 18 15 12 9 6" })
							})
						})]
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					ref: sliderRef,
					onScroll: handleScroll,
					className: "product-screenshots-slider",
					style: {
						display: "flex",
						gap: "24px",
						overflowX: "auto",
						scrollSnapType: "x mandatory",
						scrollBehavior: "smooth",
						WebkitOverflowScrolling: "touch",
						scrollbarWidth: "none",
						msOverflowStyle: "none",
						paddingBottom: "8px"
					},
					children: screenshots.map((ss, idx) => /* @__PURE__ */ jsxs("div", {
						style: {
							flex: "0 0 100%",
							minWidth: "100%",
							scrollSnapAlign: "start",
							borderRadius: "20px",
							background: isLight ? "#ffffff" : "var(--zy-card-bg)",
							border: "1px solid var(--zy-border-subtle)",
							padding: "16px",
							overflow: "hidden",
							boxShadow: isLight ? "0 15px 40px -10px rgba(0,0,0,0.06)" : "0 20px 50px -10px rgba(0,0,0,0.5)"
						},
						children: [
							/* @__PURE__ */ jsxs("div", {
								style: {
									display: "flex",
									alignItems: "center",
									justifyContent: "space-between",
									padding: "8px 14px",
									background: isLight ? "#f1f5f9" : "var(--zy-surface-2)",
									borderRadius: "10px 10px 0 0",
									borderBottom: "1px solid var(--zy-border-subtle)",
									marginBottom: "10px"
								},
								children: [
									/* @__PURE__ */ jsxs("div", {
										style: {
											display: "flex",
											gap: "6px"
										},
										children: [
											/* @__PURE__ */ jsx("span", { style: {
												width: "9px",
												height: "9px",
												borderRadius: "50%",
												background: "#EF4444"
											} }),
											/* @__PURE__ */ jsx("span", { style: {
												width: "9px",
												height: "9px",
												borderRadius: "50%",
												background: "#F59E0B"
											} }),
											/* @__PURE__ */ jsx("span", { style: {
												width: "9px",
												height: "9px",
												borderRadius: "50%",
												background: "#10B981"
											} })
										]
									}),
									/* @__PURE__ */ jsx("span", {
										style: {
											fontSize: "11px",
											fontWeight: 600,
											color: "var(--zy-text-secondary)",
											letterSpacing: "0.02em"
										},
										children: ss.title
									}),
									/* @__PURE__ */ jsx("span", {
										style: {
											fontSize: "10px",
											fontWeight: 700,
											color: product.accentColor,
											textTransform: "uppercase"
										},
										children: product.shortTitle
									})
								]
							}),
							/* @__PURE__ */ jsx("div", {
								style: {
									position: "relative",
									width: "100%",
									aspectRatio: "2.14 / 1",
									borderRadius: "10px",
									overflow: "hidden",
									background: isLight ? "#f8fafc" : "var(--zy-surface-1)",
									border: "1px solid var(--zy-border-subtle)",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									padding: ss.category?.toLowerCase().includes("app") || ss.image.includes("image.png") || ss.image.includes("WhatsApp Image") ? "14px" : "0"
								},
								children: ss.category?.toLowerCase().includes("app") || ss.image.includes("image.png") || ss.image.includes("WhatsApp Image") ? /* @__PURE__ */ jsx("div", {
									style: {
										height: "100%",
										maxHeight: "480px",
										borderRadius: "24px",
										overflow: "hidden",
										border: "5px solid var(--zy-surface-2)",
										boxShadow: "0 16px 40px rgba(0,0,0,0.3)",
										background: "#000000",
										display: "inline-flex",
										alignItems: "center",
										justifyContent: "center"
									},
									children: /* @__PURE__ */ jsx("img", {
										src: ss.image,
										alt: ss.title,
										style: {
											height: "100%",
											width: "auto",
											maxHeight: "460px",
											objectFit: "contain",
											display: "block"
										}
									})
								}) : /* @__PURE__ */ jsx("img", {
									src: ss.image,
									alt: ss.title,
									style: {
										width: "100%",
										height: "100%",
										objectFit: "contain",
										objectPosition: "center",
										display: "block"
									}
								})
							}),
							ss.description && /* @__PURE__ */ jsx("div", {
								style: {
									paddingTop: "14px",
									paddingLeft: "4px",
									paddingRight: "4px"
								},
								children: /* @__PURE__ */ jsx("p", {
									style: {
										fontSize: "13px",
										color: "var(--zy-text-secondary)",
										lineHeight: 1.55,
										margin: 0
									},
									children: ss.description
								})
							})
						]
					}, ss.title + idx))
				}),
				hasMultiple && /* @__PURE__ */ jsx("div", {
					style: {
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						gap: "8px",
						marginTop: "28px"
					},
					children: screenshots.map((_, dotIdx) => {
						const isActive = dotIdx === activeIndex;
						return /* @__PURE__ */ jsx("button", {
							type: "button",
							onClick: () => scrollToIndex(dotIdx),
							"aria-label": `Go to screenshot ${dotIdx + 1}`,
							style: {
								width: isActive ? "24px" : "8px",
								height: "8px",
								borderRadius: "8px",
								background: isActive ? product.accentColor : "var(--zy-border-subtle)",
								border: "none",
								padding: 0,
								cursor: "pointer",
								transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
								boxShadow: isActive ? `0 0 10px ${product.accentColor}` : "none"
							}
						}, `dot-${dotIdx}`);
					})
				})
			]
		}), /* @__PURE__ */ jsx("style", { children: `
                .product-screenshots-slider::-webkit-scrollbar {
                    display: none;
                }
            ` })]
	});
}
//#endregion
//#region resources/js/components/product-details/grocery-mart/data.ts
var platformsData = {
	web: {
		id: "web",
		icon: "🖥️",
		name: "Web Management Panel",
		shortLabel: "Web Panel",
		tagline: "Super Admin, Store Operations, Counter POS & Inventory",
		color: "#38BDF8",
		accentGlow: "rgba(56, 189, 248, 0.2)",
		images: [{
			title: "Store Command Center & POS Billing Terminal",
			subtitle: "Operational Terminal, Live Queue & TV Kiosk Display",
			image: "/assets/products/grocery-mart/Screenshot 2026-09-26 182031.png",
			desc: "Centralized store operations terminal for Sahil Grocery Shop (Sector 62, Noida). Unifies counter POS billing, active orders queue, TV kiosk screen mode, daily revenue metrics (₹5,98,900), and 99.8% SLA dispatch monitoring.",
			badges: [
				"Command Center",
				"POS Billing",
				"Orders Queue",
				"TV Kiosk",
				"99.8% SLA"
			],
			specs: [
				{
					label: "Store Location",
					value: "Sahil Grocery Shop (Sector 62, Noida)"
				},
				{
					label: "Daily Revenue",
					value: "₹5,98,900.00"
				},
				{
					label: "Orders Queue",
					value: "Active Live Dispatch & Counter Queue"
				},
				{
					label: "Display Modes",
					value: "POS Terminal • TV Kiosk Mode • Rider Counter"
				},
				{
					label: "SLA Adherence",
					value: "99.8% Sub-15 Min Dispatch SLA"
				}
			]
		}, {
			title: "Real-Time Store Analytics & Staff KPI Matrix",
			subtitle: "Margin Velocity, Staff Handling Speeds & Associate Radar",
			image: "/assets/products/grocery-mart/Screenshot 2026-09-26 182946.png",
			desc: "Granular retail telemetry tracking average cart size (₹482), gross margins (18.4%), staff item handling speeds, replenishment alerts, and associate performance radar.",
			badges: [
				"Analytics Engine",
				"Gross Margin (18.4%)",
				"Cart Size (₹482)",
				"Staff Radar",
				"Velocity KPI"
			],
			specs: [
				{
					label: "Average Cart Size",
					value: "₹482.00 per Customer Order"
				},
				{
					label: "Gross Margin",
					value: "18.4% Real-Time Margin"
				},
				{
					label: "Staff Handling Speed",
					value: "Sub-90s Item Pick & Pack Velocity"
				},
				{
					label: "Associate Radar",
					value: "Accuracy, Speed, Punctuality & Attendance"
				},
				{
					label: "Replenishment",
					value: "Automated Dark-Store Stock Depletion Signals"
				}
			]
		}],
		videos: [
			{
				id: "command-ops",
				title: "Store Operations & Command Center Walkthrough",
				duration: "01:56",
				badge: "🖥️ Command Center & Queue",
				src: "/assets/products/grocery-mart/WhatsApp Video 2026-09-25 at 6.05.05 PM.mp4",
				poster: "/assets/products/grocery-mart/Screenshot 2026-09-26 182031.png",
				desc: "Comprehensive walkthrough of the operational terminal, active orders queue, TV kiosk screen mode, and live store dispatch SLA."
			},
			{
				id: "pos-checkout",
				title: "High-Speed POS Counter Checkout Flow",
				duration: "00:26",
				badge: "⚡ POS Counter & Rapid Billing",
				src: "/assets/products/grocery-mart/WhatsApp Video 2026-09-25 at 6.05.13 PM.mp4",
				poster: "/assets/products/grocery-mart/Screenshot 2026-09-26 182031.png",
				desc: "Real-time billing counter flow demonstrating barcode SKU scanning, instant item tally, and receipt generation."
			},
			{
				id: "analytics-kpi",
				title: "Store Analytics & Staff Efficiency Radar",
				duration: "01:10",
				badge: "📊 Telemetry & Staff KPIs",
				src: "/assets/products/grocery-mart/WhatsApp Video 2026-09-25 at 6.05.14 PM.mp4",
				poster: "/assets/products/grocery-mart/Screenshot 2026-09-26 182946.png",
				desc: "Detailed live store analytics walkthrough showcasing average cart metrics, gross margin tracking, and staff associate efficiency radar."
			}
		]
	},
	customer: {
		id: "customer",
		icon: "🛒",
		name: "Customer Mobile App",
		shortLabel: "User App",
		tagline: "High-Conversion Hyperlocal 10-15 Min Delivery PDP & Checkout",
		color: "#10B981",
		accentGlow: "rgba(16, 185, 129, 0.2)",
		images: [{
			title: "Customer Mobile App Storefront & Product PDP",
			subtitle: "React Native (v0.86) & Expo SDK 57 Storefront",
			image: "/assets/products/grocery-mart/image.png",
			desc: "Engineered for maximum retail conversion with instant pack-size variant switching, live delivery ETA calculation (sub-15 mins), transparent per-unit pricing, and one-tap dynamic cart quantity stepper.",
			badges: [
				"React Native",
				"Expo SDK 57",
				"10-15 Min ETA",
				"Dynamic Stepper",
				"Vegetarian Filter"
			],
			specs: [
				{
					label: "Technology",
					value: "React Native • Expo SDK 57 • Reanimated"
				},
				{
					label: "Delivery ETA",
					value: "10-15 Mins Hyperlocal Dispatch"
				},
				{
					label: "Pack Selection",
					value: "Instant Variant Switcher (500ml / 1L / Combos)"
				},
				{
					label: "Cart UX",
					value: "Sticky Bottom Stepper with Instant Haptics"
				},
				{
					label: "Dietary Markers",
					value: "100% Vegetarian & Nutrition Badges"
				}
			]
		}],
		videos: [{
			id: "customer-app-walkthrough",
			title: "Customer Mobile App Walkthrough & Hyperlocal Experience",
			duration: "01:28",
			badge: "🛒 Customer App Live Demo",
			src: "/assets/products/grocery-mart/WhatsApp Video 2026-09-25 at 6.05.15 PM.mp4",
			poster: "/assets/products/grocery-mart/image.png",
			desc: "Full walkthrough of the customer mobile storefront, sub-15 minute grocery ordering, variant selection, and seamless checkout experience."
		}]
	},
	delivery: {
		id: "delivery",
		icon: "🛵",
		name: "Delivery & Picker App",
		shortLabel: "Delivery App",
		tagline: "Dark-Store Warehouse Bin Navigation & Continuous Barcode Scanning",
		color: "#F59E0B",
		accentGlow: "rgba(245, 158, 11, 0.2)",
		images: [{
			title: "Delivery Partner & Dark-Store Picker App",
			subtitle: "Aisle/Rack Bin Navigation & Camera Barcode Scanner",
			image: "/assets/products/grocery-mart/WhatsApp Image 2026-09-27 at 1.42.06 AM.jpeg",
			desc: "High-contrast UI engineered for warehouse pickers and delivery riders. Guides associates to exact Aisle, Rack, and Shelf coordinates, enforces FEFO expiry validation, and prevents packing errors via continuous camera barcode scanning.",
			badges: [
				"Warehouse Bin Nav",
				"FEFO Expiry Check",
				"Continuous Barcode",
				"Cold Room Alerts",
				"Rider Routing"
			],
			specs: [
				{
					label: "Warehouse Nav",
					value: "Aisle 04 • Rack R-B02 • Shelf 2 Coordinates"
				},
				{
					label: "Barcode Engine",
					value: "Camera Continuous Scanner & SKU Validation"
				},
				{
					label: "Batch Compliance",
					value: "100% Mandatory FEFO Expiry Inspection"
				},
				{
					label: "Handling Flags",
					value: "Chilled Storage (<4°C) & Fragile Pouch Alerts"
				},
				{
					label: "Courier Portal",
					value: "One-Tap Rider Pickup & GPS Route Optimization"
				}
			]
		}],
		videos: []
	}
};
//#endregion
//#region resources/js/components/product-details/grocery-mart/PlatformTabsNav.tsx
function PlatformTabsNav({ activePlatform, onSelectPlatform }) {
	return /* @__PURE__ */ jsx("div", {
		style: {
			display: "grid",
			gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
			gap: "14px",
			maxWidth: "960px",
			margin: "0 auto 36px"
		},
		children: [
			"web",
			"customer",
			"delivery"
		].map((tabKey) => {
			const tab = platformsData[tabKey];
			const isActive = activePlatform === tabKey;
			return /* @__PURE__ */ jsxs("button", {
				type: "button",
				onClick: () => onSelectPlatform(tabKey),
				style: {
					display: "flex",
					alignItems: "center",
					gap: "14px",
					padding: "16px 20px",
					borderRadius: "18px",
					background: isActive ? `linear-gradient(135deg, ${tab.color}22, var(--zy-surface-2))` : "var(--zy-surface-1)",
					border: isActive ? `2px solid ${tab.color}` : "1px solid var(--zy-border-subtle)",
					color: isActive ? "var(--zy-text-primary)" : "var(--zy-text-secondary)",
					cursor: "pointer",
					transition: "all 0.25s ease",
					boxShadow: isActive ? `0 8px 30px ${tab.accentGlow}` : "none",
					textAlign: "left"
				},
				children: [/* @__PURE__ */ jsx("span", {
					style: {
						fontSize: "26px",
						width: "46px",
						height: "46px",
						borderRadius: "12px",
						background: isActive ? `${tab.color}25` : "var(--zy-surface-2)",
						display: "flex",
						alignItems: "center",
						justifySelf: "center",
						justifyContent: "center",
						flexShrink: 0,
						border: `1px solid ${isActive ? tab.color : "transparent"}`
					},
					children: tab.icon
				}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
					style: {
						fontSize: "15px",
						fontWeight: 800,
						color: "var(--zy-text-primary)"
					},
					children: tab.name
				}), /* @__PURE__ */ jsx("div", {
					style: {
						fontSize: "11.5px",
						color: isActive ? tab.color : "var(--zy-text-muted)",
						fontWeight: 600,
						marginTop: "3px"
					},
					children: tab.videos.length > 0 ? `${tab.images.length} Screens • ${tab.videos.length} Videos` : `${tab.images.length} Screen • UI Specification`
				})] })]
			}, tabKey);
		})
	});
}
//#endregion
//#region resources/js/components/product-details/grocery-mart/PlatformBrowserMockup.tsx
function PlatformBrowserMockup({ image, color, totalImages, onPrevImage, onNextImage }) {
	return /* @__PURE__ */ jsxs("div", {
		style: {
			borderRadius: "18px",
			overflow: "hidden",
			border: "1px solid var(--zy-border-subtle)",
			background: "var(--zy-surface-2)",
			boxShadow: "0 20px 50px rgba(0,0,0,0.18)",
			position: "relative"
		},
		children: [/* @__PURE__ */ jsxs("div", {
			style: {
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				padding: "10px 18px",
				background: "var(--zy-surface-2)",
				borderBottom: "1px solid var(--zy-border-subtle)"
			},
			children: [
				/* @__PURE__ */ jsxs("div", {
					style: {
						display: "flex",
						gap: "6px"
					},
					children: [
						/* @__PURE__ */ jsx("span", { style: {
							width: "10px",
							height: "10px",
							borderRadius: "50%",
							background: "#EF4444"
						} }),
						/* @__PURE__ */ jsx("span", { style: {
							width: "10px",
							height: "10px",
							borderRadius: "50%",
							background: "#F59E0B"
						} }),
						/* @__PURE__ */ jsx("span", { style: {
							width: "10px",
							height: "10px",
							borderRadius: "50%",
							background: "#10B981"
						} })
					]
				}),
				/* @__PURE__ */ jsx("div", {
					style: {
						fontSize: "11px",
						color: "var(--zy-text-secondary)",
						background: "var(--zy-bg)",
						padding: "4px 18px",
						borderRadius: "8px",
						border: "1px solid var(--zy-border-subtle)",
						maxWidth: "400px",
						width: "100%",
						textAlign: "center",
						whiteSpace: "nowrap",
						overflow: "hidden",
						textOverflow: "ellipsis"
					},
					children: "🔒 https://admin.grocerymart.zytrixon.com/terminal/sahil-grocery-noida-sec62"
				}),
				/* @__PURE__ */ jsx("div", {
					style: {
						fontSize: "10.5px",
						color,
						fontWeight: 700
					},
					children: "REACT 19 + VITE"
				})
			]
		}), /* @__PURE__ */ jsxs("div", {
			style: {
				background: "#000000",
				position: "relative"
			},
			children: [/* @__PURE__ */ jsx("img", {
				src: image.image,
				alt: image.title,
				style: {
					width: "100%",
					height: "auto",
					maxHeight: "640px",
					objectFit: "contain",
					display: "block"
				}
			}, image.image), totalImages > 1 && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx("button", {
				type: "button",
				onClick: onPrevImage,
				"aria-label": "Previous Screenshot",
				style: {
					position: "absolute",
					left: "16px",
					top: "50%",
					transform: "translateY(-50%)",
					width: "44px",
					height: "44px",
					borderRadius: "50%",
					background: "rgba(15, 23, 42, 0.8)",
					backdropFilter: "blur(8px)",
					border: "1px solid rgba(255,255,255,0.2)",
					color: "#fff",
					fontSize: "22px",
					cursor: "pointer",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
					zIndex: 4
				},
				children: "‹"
			}), /* @__PURE__ */ jsx("button", {
				type: "button",
				onClick: onNextImage,
				"aria-label": "Next Screenshot",
				style: {
					position: "absolute",
					right: "16px",
					top: "50%",
					transform: "translateY(-50%)",
					width: "44px",
					height: "44px",
					borderRadius: "50%",
					background: "rgba(15, 23, 42, 0.8)",
					backdropFilter: "blur(8px)",
					border: "1px solid rgba(255,255,255,0.2)",
					color: "#fff",
					fontSize: "22px",
					cursor: "pointer",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
					zIndex: 4
				},
				children: "›"
			})] })]
		})]
	});
}
//#endregion
//#region resources/js/components/product-details/grocery-mart/PlatformPhoneMockup.tsx
function PlatformPhoneMockup({ image, color, accentGlow, activePlatform }) {
	const isCustomer = activePlatform === "customer";
	return /* @__PURE__ */ jsxs("div", {
		style: {
			display: "grid",
			gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
			gap: "32px",
			alignItems: "center"
		},
		children: [/* @__PURE__ */ jsx("div", {
			style: { textAlign: "center" },
			children: /* @__PURE__ */ jsxs("div", {
				style: {
					maxWidth: "320px",
					margin: "0 auto",
					borderRadius: "36px",
					overflow: "hidden",
					border: "8px solid var(--zy-surface-2)",
					boxShadow: `0 24px 70px ${accentGlow}`,
					background: "#000000",
					position: "relative"
				},
				children: [/* @__PURE__ */ jsx("div", { style: {
					width: "90px",
					height: "16px",
					background: "var(--zy-surface-2)",
					borderRadius: "0 0 12px 12px",
					margin: "0 auto",
					position: "relative",
					zIndex: 10
				} }), /* @__PURE__ */ jsx("img", {
					src: image.image,
					alt: image.title,
					style: {
						width: "100%",
						height: "auto",
						maxHeight: "560px",
						objectFit: "contain",
						display: "block"
					}
				}, image.image)]
			})
		}), /* @__PURE__ */ jsxs("div", {
			style: {
				background: "var(--zy-surface-2)",
				border: "1px solid var(--zy-border-subtle)",
				borderRadius: "20px",
				padding: "24px"
			},
			children: [
				/* @__PURE__ */ jsx("span", {
					style: {
						fontSize: "11px",
						fontWeight: 800,
						textTransform: "uppercase",
						letterSpacing: "0.1em",
						color
					},
					children: isCustomer ? "🛒 Customer Shopping Engine" : "🛵 Dark-Store Dispatch"
				}),
				/* @__PURE__ */ jsx("h4", {
					style: {
						fontSize: "19px",
						fontWeight: 800,
						color: "var(--zy-text-primary)",
						marginTop: "4px",
						marginBottom: "12px"
					},
					children: image.title
				}),
				/* @__PURE__ */ jsx("p", {
					style: {
						fontSize: "14px",
						color: "var(--zy-text-secondary)",
						lineHeight: 1.6,
						marginBottom: "20px"
					},
					children: image.desc
				}),
				image.specs && /* @__PURE__ */ jsx("div", {
					style: {
						display: "flex",
						flexDirection: "column",
						gap: "8px"
					},
					children: image.specs.map((item, idx) => /* @__PURE__ */ jsxs("div", {
						style: {
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							padding: "10px 14px",
							borderRadius: "10px",
							background: "var(--zy-surface-1)",
							border: "1px solid var(--zy-border-subtle)",
							fontSize: "12.5px"
						},
						children: [/* @__PURE__ */ jsx("span", {
							style: {
								color: "var(--zy-text-muted)",
								fontWeight: 600
							},
							children: item.label
						}), /* @__PURE__ */ jsx("span", {
							style: {
								color: "var(--zy-text-primary)",
								fontWeight: 700
							},
							children: item.value
						})]
					}, idx))
				})
			]
		})]
	});
}
//#endregion
//#region resources/js/components/product-details/grocery-mart/PlatformVideoShowcase.tsx
function PlatformVideoShowcase({ videos, color, currentVideoIndex, onSelectVideo, onPrevVideo, onNextVideo, onBackToScreenshots }) {
	const videoRef = useRef(null);
	const totalVideos = videos.length;
	const currentVideo = videos[currentVideoIndex] || videos[0];
	return /* @__PURE__ */ jsxs("div", { children: [
		/* @__PURE__ */ jsxs("div", {
			style: {
				display: "flex",
				flexWrap: "wrap",
				alignItems: "center",
				justifyContent: "space-between",
				gap: "14px",
				marginBottom: "20px"
			},
			children: [/* @__PURE__ */ jsx("div", {
				style: {
					display: "flex",
					flexWrap: "wrap",
					gap: "8px"
				},
				children: videos.map((vid, idx) => {
					const isSelected = currentVideoIndex === idx;
					return /* @__PURE__ */ jsxs("button", {
						type: "button",
						onClick: () => onSelectVideo(idx),
						style: {
							padding: "8px 14px",
							borderRadius: "10px",
							fontSize: "12px",
							fontWeight: 700,
							background: isSelected ? `linear-gradient(135deg, ${color}33, ${color}15)` : "var(--zy-surface-2)",
							border: isSelected ? `1.5px solid ${color}` : "1px solid var(--zy-border-subtle)",
							color: isSelected ? "var(--zy-text-primary)" : "var(--zy-text-secondary)",
							cursor: "pointer",
							display: "inline-flex",
							alignItems: "center",
							gap: "6px",
							transition: "all 0.2s ease"
						},
						children: [/* @__PURE__ */ jsx("span", { children: vid.badge }), /* @__PURE__ */ jsx("span", {
							style: {
								fontSize: "10px",
								padding: "2px 6px",
								borderRadius: "6px",
								background: "rgba(0,0,0,0.3)",
								color
							},
							children: vid.duration
						})]
					}, vid.id);
				})
			}), /* @__PURE__ */ jsxs("div", {
				style: {
					display: "flex",
					alignItems: "center",
					gap: "8px"
				},
				children: [totalVideos > 1 && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx("button", {
					type: "button",
					onClick: onPrevVideo,
					"aria-label": "Previous Video",
					style: {
						width: "40px",
						height: "40px",
						borderRadius: "10px",
						border: "1px solid var(--zy-border-subtle)",
						background: "var(--zy-surface-2)",
						color: "var(--zy-text-primary)",
						cursor: "pointer",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						fontSize: "18px",
						fontWeight: 800
					},
					children: "‹"
				}), /* @__PURE__ */ jsx("button", {
					type: "button",
					onClick: onNextVideo,
					"aria-label": "Next Video",
					style: {
						width: "40px",
						height: "40px",
						borderRadius: "10px",
						border: "1px solid var(--zy-border-subtle)",
						background: "var(--zy-surface-2)",
						color: "var(--zy-text-primary)",
						cursor: "pointer",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						fontSize: "18px",
						fontWeight: 800
					},
					children: "›"
				})] }), /* @__PURE__ */ jsxs("button", {
					type: "button",
					onClick: onBackToScreenshots,
					style: {
						display: "inline-flex",
						alignItems: "center",
						gap: "6px",
						padding: "8px 14px",
						borderRadius: "10px",
						background: "var(--zy-surface-2)",
						border: "1px solid var(--zy-border-subtle)",
						color: "var(--zy-text-secondary)",
						fontSize: "12px",
						fontWeight: 700,
						cursor: "pointer"
					},
					children: [/* @__PURE__ */ jsx("span", { children: "📸" }), /* @__PURE__ */ jsx("span", { children: "Back to Screenshots" })]
				})]
			})]
		}),
		/* @__PURE__ */ jsxs("div", {
			style: {
				borderRadius: "18px",
				overflow: "hidden",
				border: "1px solid var(--zy-border-subtle)",
				background: "#000000",
				boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
				position: "relative"
			},
			children: [/* @__PURE__ */ jsx("video", {
				ref: videoRef,
				src: currentVideo.src,
				poster: currentVideo.poster,
				controls: true,
				playsInline: true,
				title: currentVideo.title,
				style: {
					width: "100%",
					maxHeight: "560px",
					objectFit: "contain",
					display: "block",
					margin: "0 auto"
				}
			}, currentVideo.src), totalVideos > 1 && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx("button", {
				type: "button",
				onClick: onPrevVideo,
				"aria-label": "Previous Video",
				style: {
					position: "absolute",
					left: "16px",
					top: "50%",
					transform: "translateY(-50%)",
					width: "44px",
					height: "44px",
					borderRadius: "50%",
					background: "rgba(15, 23, 42, 0.8)",
					backdropFilter: "blur(8px)",
					border: "1px solid rgba(255,255,255,0.2)",
					color: "#fff",
					fontSize: "22px",
					cursor: "pointer",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
					zIndex: 5
				},
				children: "‹"
			}), /* @__PURE__ */ jsx("button", {
				type: "button",
				onClick: onNextVideo,
				"aria-label": "Next Video",
				style: {
					position: "absolute",
					right: "16px",
					top: "50%",
					transform: "translateY(-50%)",
					width: "44px",
					height: "44px",
					borderRadius: "50%",
					background: "rgba(15, 23, 42, 0.8)",
					backdropFilter: "blur(8px)",
					border: "1px solid rgba(255,255,255,0.2)",
					color: "#fff",
					fontSize: "22px",
					cursor: "pointer",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
					zIndex: 5
				},
				children: "›"
			})] })]
		}),
		/* @__PURE__ */ jsxs("div", {
			style: {
				display: "flex",
				flexWrap: "wrap",
				alignItems: "center",
				justifyContent: "space-between",
				gap: "12px",
				marginTop: "16px",
				padding: "12px 18px",
				borderRadius: "14px",
				background: "var(--zy-surface-2)",
				border: "1px solid var(--zy-border-subtle)"
			},
			children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
				style: {
					fontSize: "16px",
					fontWeight: 800,
					color: "var(--zy-text-primary)",
					margin: 0
				},
				children: currentVideo.title
			}), /* @__PURE__ */ jsx("p", {
				style: {
					fontSize: "13px",
					color: "var(--zy-text-secondary)",
					margin: "4px 0 0"
				},
				children: currentVideo.desc
			})] }), /* @__PURE__ */ jsxs("span", {
				style: {
					fontSize: "11px",
					color,
					fontWeight: 700,
					padding: "4px 10px",
					borderRadius: "8px",
					background: "var(--zy-surface-1)",
					border: "1px solid var(--zy-border-subtle)",
					whiteSpace: "nowrap"
				},
				children: ["HD Recording • ", currentVideo.duration]
			})]
		})
	] });
}
//#endregion
//#region resources/js/components/product-details/GroceryMartPlatformsSection.tsx
function GroceryMartPlatformsSection({ project }) {
	const [activePlatform, setActivePlatform] = useState("web");
	const [viewMode, setViewMode] = useState("images");
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
	const platform = platformsData[activePlatform];
	const handlePlatformChange = (tab) => {
		setActivePlatform(tab);
		setCurrentImageIndex(0);
		setCurrentVideoIndex(0);
		if (platformsData[tab].videos.length === 0) setViewMode("images");
	};
	const totalImages = platform.images.length;
	const handlePrevImage = () => {
		setCurrentImageIndex((prev) => prev > 0 ? prev - 1 : totalImages - 1);
	};
	const handleNextImage = () => {
		setCurrentImageIndex((prev) => prev < totalImages - 1 ? prev + 1 : 0);
	};
	const totalVideos = platform.videos.length;
	const handlePrevVideo = () => {
		setCurrentVideoIndex((prev) => prev > 0 ? prev - 1 : totalVideos - 1);
	};
	const handleNextVideo = () => {
		setCurrentVideoIndex((prev) => prev < totalVideos - 1 ? prev + 1 : 0);
	};
	const currentImage = platform.images[currentImageIndex] || platform.images[0];
	useEffect(() => {
		if (currentImageIndex >= totalImages) setCurrentImageIndex(0);
		if (currentVideoIndex >= totalVideos) setCurrentVideoIndex(0);
	}, [
		activePlatform,
		totalImages,
		totalVideos
	]);
	return /* @__PURE__ */ jsxs("section", {
		id: "platforms",
		style: {
			paddingTop: "88px",
			paddingBottom: "96px",
			paddingLeft: "var(--zy-section-pad-x, 24px)",
			paddingRight: "var(--zy-section-pad-x, 24px)",
			background: "var(--zy-bg)",
			borderBottom: "1px solid var(--zy-border-subtle)",
			position: "relative",
			overflow: "hidden",
			transition: "background 0.3s ease, border-color 0.3s ease"
		},
		children: [/* @__PURE__ */ jsx("div", { style: {
			position: "absolute",
			top: "12%",
			left: "50%",
			transform: "translateX(-50%)",
			width: "900px",
			height: "500px",
			background: `radial-gradient(ellipse at center, ${platform.accentGlow} 0%, transparent 70%)`,
			filter: "blur(80px)",
			pointerEvents: "none",
			zIndex: 0,
			transition: "background 0.4s ease"
		} }), /* @__PURE__ */ jsxs("div", {
			style: {
				maxWidth: "1280px",
				margin: "0 auto",
				position: "relative",
				zIndex: 1
			},
			children: [
				/* @__PURE__ */ jsxs("div", {
					style: {
						textAlign: "center",
						marginBottom: "44px"
					},
					children: [
						/* @__PURE__ */ jsx("div", {
							style: {
								display: "inline-flex",
								alignItems: "center",
								gap: "8px",
								fontSize: "11px",
								fontWeight: 800,
								letterSpacing: "0.15em",
								textTransform: "uppercase",
								color: platform.color,
								background: "var(--zy-surface-2)",
								padding: "6px 18px",
								borderRadius: "30px",
								border: `1px solid ${platform.color}44`,
								boxShadow: `0 0 20px ${platform.accentGlow}`,
								marginBottom: "16px",
								transition: "all 0.3s ease"
							},
							children: /* @__PURE__ */ jsx("span", { children: "🛒 Multi-Platform Ecosystem" })
						}),
						/* @__PURE__ */ jsxs("h2", {
							style: {
								fontFamily: "var(--font-heading, Space Grotesk, sans-serif)",
								fontSize: "clamp(28px, 4vw, 44px)",
								fontWeight: 800,
								color: "var(--zy-text-primary)",
								lineHeight: 1.15,
								letterSpacing: "-0.02em",
								maxWidth: "920px",
								margin: "0 auto"
							},
							children: [
								"3 Dedicated Interfaces for",
								" ",
								/* @__PURE__ */ jsx("span", {
									style: {
										color: platform.color,
										transition: "color 0.3s ease"
									},
									children: "Web Panel, User App & Delivery App"
								})
							]
						}),
						/* @__PURE__ */ jsx("p", {
							style: {
								color: "var(--zy-text-secondary)",
								fontSize: "clamp(15px, 1.8vw, 17px)",
								maxWidth: "780px",
								margin: "14px auto 0",
								lineHeight: 1.65
							},
							children: "Explore each platform independently: view high-definition interface screenshots or switch to live operational video recordings with interactive slider controls."
						})
					]
				}),
				/* @__PURE__ */ jsx(PlatformTabsNav, {
					activePlatform,
					onSelectPlatform: handlePlatformChange
				}),
				/* @__PURE__ */ jsxs("div", {
					style: {
						background: "var(--zy-surface-1)",
						border: "1px solid var(--zy-border-subtle)",
						borderRadius: "28px",
						padding: "clamp(20px, 3.5vw, 36px)",
						boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
						position: "relative"
					},
					children: [
						/* @__PURE__ */ jsxs("div", {
							style: {
								display: "flex",
								flexWrap: "wrap",
								alignItems: "center",
								justifyContent: "space-between",
								gap: "16px",
								paddingBottom: "24px",
								borderBottom: "1px solid var(--zy-border-subtle)",
								marginBottom: "28px"
							},
							children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
								style: {
									display: "flex",
									alignItems: "center",
									gap: "10px"
								},
								children: [
									/* @__PURE__ */ jsx("span", {
										style: { fontSize: "20px" },
										children: platform.icon
									}),
									/* @__PURE__ */ jsx("h3", {
										style: {
											fontSize: "clamp(20px, 2.5vw, 26px)",
											fontWeight: 800,
											color: "var(--zy-text-primary)",
											margin: 0
										},
										children: platform.name
									}),
									/* @__PURE__ */ jsx("span", {
										style: {
											fontSize: "11px",
											fontWeight: 800,
											padding: "4px 10px",
											borderRadius: "8px",
											background: `${platform.color}18`,
											color: platform.color,
											border: `1px solid ${platform.color}35`
										},
										children: viewMode === "images" ? "📸 UI Screenshots" : "🎬 Live Walkthrough"
									})
								]
							}), /* @__PURE__ */ jsx("p", {
								style: {
									fontSize: "13.5px",
									color: "var(--zy-text-secondary)",
									margin: "6px 0 0"
								},
								children: platform.tagline
							})] }), totalVideos > 0 && /* @__PURE__ */ jsxs("div", {
								style: {
									display: "inline-flex",
									alignItems: "center",
									background: "var(--zy-surface-2)",
									border: "1px solid var(--zy-border-subtle)",
									borderRadius: "14px",
									padding: "4px",
									gap: "4px"
								},
								children: [/* @__PURE__ */ jsxs("button", {
									type: "button",
									onClick: () => setViewMode("images"),
									style: {
										display: "inline-flex",
										alignItems: "center",
										gap: "6px",
										padding: "8px 16px",
										borderRadius: "10px",
										fontSize: "13px",
										fontWeight: 700,
										background: viewMode === "images" ? platform.color : "transparent",
										color: viewMode === "images" ? "#ffffff" : "var(--zy-text-secondary)",
										border: "none",
										cursor: "pointer",
										transition: "all 0.2s ease",
										boxShadow: viewMode === "images" ? `0 4px 14px ${platform.color}40` : "none"
									},
									children: [/* @__PURE__ */ jsx("span", { children: "📸" }), /* @__PURE__ */ jsxs("span", { children: [
										"Screenshots (",
										totalImages,
										")"
									] })]
								}), /* @__PURE__ */ jsxs("button", {
									type: "button",
									onClick: () => setViewMode("videos"),
									style: {
										display: "inline-flex",
										alignItems: "center",
										gap: "6px",
										padding: "8px 16px",
										borderRadius: "10px",
										fontSize: "13px",
										fontWeight: 700,
										background: viewMode === "videos" ? platform.color : "transparent",
										color: viewMode === "videos" ? "#ffffff" : "var(--zy-text-secondary)",
										border: "none",
										cursor: "pointer",
										transition: "all 0.2s ease",
										boxShadow: viewMode === "videos" ? `0 4px 14px ${platform.color}40` : "none"
									},
									children: [/* @__PURE__ */ jsx("span", { children: "🎬" }), /* @__PURE__ */ jsxs("span", { children: [
										"Videos (",
										totalVideos,
										")"
									] })]
								})]
							})]
						}),
						viewMode === "images" && /* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsxs("div", {
								style: {
									display: "flex",
									flexWrap: "wrap",
									alignItems: "center",
									justifyContent: "space-between",
									gap: "14px",
									marginBottom: "20px"
								},
								children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
									style: {
										fontSize: "11px",
										fontWeight: 800,
										textTransform: "uppercase",
										letterSpacing: "0.1em",
										color: platform.color
									},
									children: currentImage.subtitle
								}), /* @__PURE__ */ jsx("h4", {
									style: {
										fontSize: "20px",
										fontWeight: 800,
										color: "var(--zy-text-primary)",
										margin: "4px 0 0"
									},
									children: currentImage.title
								})] }), /* @__PURE__ */ jsxs("div", {
									style: {
										display: "flex",
										alignItems: "center",
										gap: "10px"
									},
									children: [
										totalImages > 1 && /* @__PURE__ */ jsxs("div", {
											style: {
												fontSize: "12px",
												fontWeight: 700,
												color: "var(--zy-text-muted)",
												marginRight: "6px"
											},
											children: [
												"Screen ",
												currentImageIndex + 1,
												" of",
												" ",
												totalImages
											]
										}),
										totalImages > 1 && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx("button", {
											type: "button",
											onClick: handlePrevImage,
											"aria-label": "Previous Screenshot",
											style: {
												width: "42px",
												height: "42px",
												borderRadius: "12px",
												border: "1px solid var(--zy-border-subtle)",
												background: "var(--zy-surface-2)",
												color: "var(--zy-text-primary)",
												cursor: "pointer",
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												fontSize: "18px",
												fontWeight: 800,
												transition: "all 0.2s ease"
											},
											children: "‹"
										}), /* @__PURE__ */ jsx("button", {
											type: "button",
											onClick: handleNextImage,
											"aria-label": "Next Screenshot",
											style: {
												width: "42px",
												height: "42px",
												borderRadius: "12px",
												border: "1px solid var(--zy-border-subtle)",
												background: "var(--zy-surface-2)",
												color: "var(--zy-text-primary)",
												cursor: "pointer",
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												fontSize: "18px",
												fontWeight: 800,
												transition: "all 0.2s ease"
											},
											children: "›"
										})] }),
										totalVideos > 0 && /* @__PURE__ */ jsxs("button", {
											type: "button",
											onClick: () => setViewMode("videos"),
											style: {
												display: "inline-flex",
												alignItems: "center",
												gap: "6px",
												padding: "9px 14px",
												borderRadius: "12px",
												background: `${platform.color}15`,
												border: `1px solid ${platform.color}40`,
												color: platform.color,
												fontSize: "12px",
												fontWeight: 700,
												cursor: "pointer",
												transition: "all 0.2s ease"
											},
											children: [/* @__PURE__ */ jsx("span", { children: "▶" }), /* @__PURE__ */ jsx("span", { children: "Watch Video Walkthrough" })]
										})
									]
								})]
							}),
							activePlatform === "web" ? /* @__PURE__ */ jsx(PlatformBrowserMockup, {
								image: currentImage,
								color: platform.color,
								totalImages,
								onPrevImage: handlePrevImage,
								onNextImage: handleNextImage
							}) : /* @__PURE__ */ jsx(PlatformPhoneMockup, {
								image: currentImage,
								color: platform.color,
								accentGlow: platform.accentGlow,
								activePlatform
							}),
							/* @__PURE__ */ jsxs("div", {
								style: {
									display: "flex",
									flexWrap: "wrap",
									alignItems: "center",
									justifyContent: "space-between",
									gap: "16px",
									marginTop: "22px",
									padding: "16px 20px",
									borderRadius: "16px",
									background: "var(--zy-surface-2)",
									border: "1px solid var(--zy-border-subtle)"
								},
								children: [/* @__PURE__ */ jsx("div", {
									style: {
										display: "flex",
										flexWrap: "wrap",
										gap: "8px"
									},
									children: currentImage.badges.map((b, i) => /* @__PURE__ */ jsx("span", {
										style: {
											fontSize: "11px",
											fontWeight: 700,
											padding: "4px 10px",
											borderRadius: "8px",
											background: "var(--zy-surface-1)",
											border: "1px solid var(--zy-border-subtle)",
											color: "var(--zy-text-secondary)"
										},
										children: b
									}, i))
								}), totalImages > 1 && /* @__PURE__ */ jsx("div", {
									style: {
										display: "flex",
										alignItems: "center",
										gap: "8px"
									},
									children: platform.images.map((_, i) => /* @__PURE__ */ jsx("button", {
										type: "button",
										onClick: () => setCurrentImageIndex(i),
										style: {
											width: currentImageIndex === i ? "24px" : "8px",
											height: "8px",
											borderRadius: "4px",
											background: currentImageIndex === i ? platform.color : "var(--zy-border-subtle)",
											border: "none",
											padding: 0,
											cursor: "pointer",
											transition: "all 0.25s ease"
										},
										"aria-label": `Go to slide ${i + 1}`
									}, i))
								})]
							})
						] }),
						viewMode === "videos" && /* @__PURE__ */ jsx(PlatformVideoShowcase, {
							videos: platform.videos,
							color: platform.color,
							currentVideoIndex,
							onSelectVideo: (idx) => setCurrentVideoIndex(idx),
							onPrevVideo: handlePrevVideo,
							onNextVideo: handleNextVideo,
							onBackToScreenshots: () => setViewMode("images")
						})
					]
				})
			]
		})]
	});
}
//#endregion
//#region resources/js/pages/ProductDetails.tsx
function ProductDetailsInner({ product }) {
	const hasVideo = Boolean(product.videoUrl && product.videoUrl.trim() !== "");
	const hasScreenshots = Boolean(product.screenshots && product.screenshots.length > 0);
	const hasFeatures = Boolean(product.features && product.features.length > 0);
	const hasWorkEasy = Boolean(product.solutionPoints && product.solutionPoints.length > 0);
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [
		/* @__PURE__ */ jsx(CustomCursor, {}),
		/* @__PURE__ */ jsx(TopBar, {}),
		/* @__PURE__ */ jsx(Navbar, {}),
		/* @__PURE__ */ jsx(ProjectSubNav, {
			project: product,
			hideStory: true,
			workEasyMode: true
		}),
		/* @__PURE__ */ jsxs("main", {
			style: {
				background: "var(--zy-bg)",
				color: "var(--zy-text-primary)",
				transition: "background 0.3s ease, color 0.3s ease"
			},
			children: [
				/* @__PURE__ */ jsx(ProjectHeroEditorial, { project: product }),
				/* @__PURE__ */ jsx(LazySection, {
					minHeight: "400px",
					children: /* @__PURE__ */ jsx(ProjectImpactBanner, { project: product })
				}),
				hasFeatures && /* @__PURE__ */ jsx(LazySection, {
					minHeight: "400px",
					children: /* @__PURE__ */ jsx(ProjectFeatures, { project: product })
				}),
				hasWorkEasy && /* @__PURE__ */ jsx(LazySection, {
					minHeight: "450px",
					children: /* @__PURE__ */ jsx(ProductWorkEasySection, { project: product })
				}),
				hasVideo && product.id !== "grocery-mart" && /* @__PURE__ */ jsx(LazySection, {
					minHeight: "550px",
					children: /* @__PURE__ */ jsx(ProjectCinemaTheatre, { project: product })
				}),
				hasScreenshots && /* @__PURE__ */ jsx(Fragment$1, { children: product.id === "grocery-mart" ? /* @__PURE__ */ jsx(LazySection, {
					minHeight: "600px",
					children: /* @__PURE__ */ jsx(GroceryMartPlatformsSection, { project: product })
				}) : /* @__PURE__ */ jsx(LazySection, {
					minHeight: "500px",
					children: /* @__PURE__ */ jsx(ProductScreenshots, { product })
				}) }),
				/* @__PURE__ */ jsx(LazySection, {
					minHeight: "400px",
					children: /* @__PURE__ */ jsx(ProjectBlueprintFlow, { project: product })
				}),
				/* @__PURE__ */ jsx(LazySection, {
					minHeight: "250px",
					children: /* @__PURE__ */ jsx(FooterCTA, {})
				})
			]
		}),
		/* @__PURE__ */ jsx(Footer, {})
	] });
}
function ProductDetails({ slug, product: initialProduct }) {
	const product = initialProduct || (slug ? getProductBySlug(slug) : void 0) || PRODUCTS_DATA[0];
	return /* @__PURE__ */ jsxs(ThemeProvider, { children: [/* @__PURE__ */ jsx(SeoHead, { seo: {
		title: `${product.title} | Zytrixon Tech Products`,
		description: product.summary,
		image: product.heroImage
	} }), /* @__PURE__ */ jsx(ProductDetailsInner, { product })] });
}
ProductDetails.layout = null;
//#endregion
export { ProductDetails as default };

//# sourceMappingURL=ProductDetails-Bc08t-Zi.js.map