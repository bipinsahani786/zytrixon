import { Head } from "@inertiajs/react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/components/seo/SeoHead.tsx
function SeoHead({ seo, service, location }) {
	const currentUrl = typeof window !== "undefined" ? window.location.href : "https://zytrixontech.com";
	const title = seo?.title || "Zytrixon Tech | Best Software Company in Patna, Bihar & Global IT Solutions";
	const description = seo?.description || "Zytrixon Tech is a top-rated software company in Patna, Bihar delivering enterprise Web Development, Mobile Apps, AI, and IoT solutions globally.";
	const locName = location?.name || "Patna";
	const locState = location?.state || "Bihar";
	const schemaOrgJSONLD = [{
		"@context": "https://schema.org",
		"@type": "LocalBusiness",
		name: "Zytrixon Tech",
		image: "https://zytrixontech.com/favicon.svg",
		url: "https://zytrixontech.com",
		description,
		address: {
			"@type": "PostalAddress",
			streetAddress: "Patna",
			addressLocality: "Patna",
			addressRegion: locState,
			postalCode: "800001",
			addressCountry: "IN"
		},
		areaServed: [
			{
				"@type": "City",
				name: locName
			},
			{
				"@type": "Country",
				name: "India"
			},
			{
				"@type": "Continent",
				name: "Worldwide"
			}
		],
		priceRange: "$$",
		telephone: "+91-7049711475",
		offers: service ? {
			"@type": "Offer",
			name: service.title,
			description: service.description
		} : void 0
	}];
	if (service) schemaOrgJSONLD.push({
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: [
			{
				"@type": "ListItem",
				position: 1,
				name: "Home",
				item: "https://zytrixontech.com"
			},
			{
				"@type": "ListItem",
				position: 2,
				name: "Services",
				item: "https://zytrixontech.com/services"
			},
			{
				"@type": "ListItem",
				position: 3,
				name: service.title,
				item: `https://zytrixontech.com/services/${service.slug}`
			}
		]
	});
	return /* @__PURE__ */ jsxs(Head, { children: [
		/* @__PURE__ */ jsx("title", { children: title }),
		/* @__PURE__ */ jsx("meta", {
			name: "description",
			content: description
		}),
		/* @__PURE__ */ jsx("meta", {
			name: "keywords",
			content: `Software Company ${locName}, Web Development ${locName}, App Development, IoT, Zytrixon, Best IT Company ${locState}, India IT Agency`
		}),
		/* @__PURE__ */ jsx("link", {
			rel: "canonical",
			href: currentUrl
		}),
		/* @__PURE__ */ jsx("meta", {
			property: "og:title",
			content: title
		}),
		/* @__PURE__ */ jsx("meta", {
			property: "og:description",
			content: description
		}),
		/* @__PURE__ */ jsx("meta", {
			property: "og:url",
			content: currentUrl
		}),
		/* @__PURE__ */ jsx("meta", {
			property: "og:type",
			content: "website"
		}),
		/* @__PURE__ */ jsx("meta", {
			name: "twitter:card",
			content: "summary_large_image"
		}),
		/* @__PURE__ */ jsx("meta", {
			name: "twitter:title",
			content: title
		}),
		/* @__PURE__ */ jsx("meta", {
			name: "twitter:description",
			content: description
		}),
		/* @__PURE__ */ jsx("script", {
			type: "application/ld+json",
			children: JSON.stringify(schemaOrgJSONLD)
		})
	] });
}
//#endregion
export { SeoHead as t };

//# sourceMappingURL=SeoHead-ypAe3bNq.js.map