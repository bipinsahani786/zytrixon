import { Head } from '@inertiajs/react';

export default function SeoHead({ seo, service, location }: any) {
    const currentUrl =
        typeof window !== 'undefined'
            ? window.location.href
            : 'https://zytrixontech.com';

    // Default SEO Fallbacks
    const title =
        seo?.title ||
        'Zytrixon Tech | Best Software Company in Patna, Bihar & Global IT Solutions';
    const description =
        seo?.description ||
        'Zytrixon Tech is a top-rated software company in Patna, Bihar delivering enterprise Web Development, Mobile Apps, AI, and IoT solutions globally.';
    const locName = location?.name || 'Patna';
    const locState = location?.state || 'Bihar';

    // Geo-friendly schema for local business targeting
    const schemaOrgJSONLD = [
        {
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Zytrixon Tech',
            image: 'https://zytrixontech.com/favicon.svg',
            url: 'https://zytrixontech.com',
            description: description,
            address: {
                '@type': 'PostalAddress',
                streetAddress: 'Patna',
                addressLocality: 'Patna',
                addressRegion: locState,
                postalCode: '800001',
                addressCountry: 'IN',
            },
            areaServed: [
                { '@type': 'City', name: locName },
                { '@type': 'Country', name: 'India' },
                { '@type': 'Continent', name: 'Worldwide' },
            ],
            priceRange: '$$',
            telephone: '+91-7049711475',
            offers: service
                ? {
                      '@type': 'Offer',
                      name: service.title,
                      description: service.description,
                  }
                : undefined,
        },
    ];

    if (service) {
        schemaOrgJSONLD.push({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
                {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Home',
                    item: 'https://zytrixontech.com',
                },
                {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'Services',
                    item: 'https://zytrixontech.com/services',
                },
                {
                    '@type': 'ListItem',
                    position: 3,
                    name: service.title,
                    item: `https://zytrixontech.com/services/${service.slug}`,
                },
            ],
        } as any);
    }

    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta
                name="keywords"
                content={`Software Company ${locName}, Web Development ${locName}, App Development, IoT, Zytrixon, Best IT Company ${locState}, India IT Agency`}
            />
            <link rel="canonical" href={currentUrl} />

            {/* OpenGraph Tags */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:type" content="website" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />

            {/* JSON-LD for AI Agents and Google SEO */}
            <script type="application/ld+json">
                {JSON.stringify(schemaOrgJSONLD)}
            </script>
        </Head>
    );
}
