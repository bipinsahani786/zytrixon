import { Head } from '@inertiajs/react';

export default function SeoHead({ seo, service, location }: any) {
    const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://zytrixontech.com';

    // Geo-friendly schema for local business targeting
    const schemaOrgJSONLD = [
        {
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            'name': 'Zytrixon Tech',
            'image': 'https://zytrixontech.com/assets/logo.png',
            'url': 'https://zytrixontech.com',
            'description': seo.description,
            'address': {
                '@type': 'PostalAddress',
                'addressLocality': location ? location.name : 'Global',
                'addressRegion': location ? location.state : '',
                'addressCountry': 'IN'
            },
            'areaServed': location ? {
                '@type': 'Place',
                'name': location.name
            } : 'Worldwide',
            'offers': {
                '@type': 'Offer',
                'name': service.title,
                'description': service.description
            }
        },
        {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            'itemListElement': [
                {
                    '@type': 'ListItem',
                    'position': 1,
                    'name': 'Home',
                    'item': 'https://zytrixontech.com'
                },
                {
                    '@type': 'ListItem',
                    'position': 2,
                    'name': 'Services',
                    'item': 'https://zytrixontech.com/services'
                },
                {
                    '@type': 'ListItem',
                    'position': 3,
                    'name': service.title,
                    'item': `https://zytrixontech.com/services/${service.slug}`
                }
            ]
        }
    ];

    return (
        <Head>
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />
            <link rel="canonical" href={currentUrl} />
            
            {/* OpenGraph Tags */}
            <meta property="og:title" content={seo.title} />
            <meta property="og:description" content={seo.description} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:type" content="website" />
            
            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:description" content={seo.description} />
            
            {/* JSON-LD for AI Agents and Google SEO */}
            <script type="application/ld+json">
                {JSON.stringify(schemaOrgJSONLD)}
            </script>
        </Head>
    );
}
