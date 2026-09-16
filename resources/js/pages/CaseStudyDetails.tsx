import { Head, Link } from '@inertiajs/react';
import React from 'react';
import ContactSection from '@/components/landing/contact-section';
import CustomCursor from '@/components/landing/custom-cursor';
import Footer from '@/components/landing/footer';
import FooterCTA from '@/components/landing/footer-cta';
import Navbar from '@/components/landing/navbar';
import { ThemeProvider } from '@/components/landing/theme-provider';
import TopBar from '@/components/landing/top-bar';
import SeoHead from '@/components/seo/SeoHead';
import GradientCard from '@/components/ui/GradientCard';

interface CaseStudyData {
    id: number;
    title: string;
    slug: string;
    client_name: string;
    industry: string;
    challenge: string;
    solution: string;
    results: string[] | string | null;
    image: string | null;
    service_id?: number;
    service?: {
        id: number;
        title: string;
        slug: string;
    };
}

interface CaseStudyDetailsProps {
    caseStudy: CaseStudyData;
    relatedCaseStudies?: CaseStudyData[];
    seo?: {
        title?: string;
        description?: string;
    };
}

export default function CaseStudyDetails({
    caseStudy,
    relatedCaseStudies = [],
    seo,
}: CaseStudyDetailsProps) {
    const parseResults = (results: string[] | string | null): string[] => {
        if (!results) {
return [];
}
        if (Array.isArray(results)) {
return results;
}
        try {
            return JSON.parse(results);
        } catch {
            return [];
        }
    };

    const resultsList = parseResults(caseStudy.results);

    const pageSeo = {
        title: seo?.title || `${caseStudy.title} | Case Study - Zytrixon Tech`,
        description:
            seo?.description ||
            `Read how Zytrixon Tech helped ${caseStudy.client_name} achieve results in ${caseStudy.industry}.`,
    };

    // Rich Schema.org TechArticle & BreadcrumbList
    const schemaData = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'BreadcrumbList',
                itemListElement: [
                    {
                        '@type': 'ListItem',
                        position: 1,
                        name: 'Home',
                        item: 'https://zytrixon.com',
                    },
                    {
                        '@type': 'ListItem',
                        position: 2,
                        name: 'Case Studies',
                        item: 'https://zytrixon.com/case-studies',
                    },
                    {
                        '@type': 'ListItem',
                        position: 3,
                        name: caseStudy.title,
                        item: `https://zytrixon.com/case-studies/${caseStudy.slug}`,
                    },
                ],
            },
            {
                '@type': 'TechArticle',
                headline: caseStudy.title,
                image: caseStudy.image ? [caseStudy.image] : [],
                about: caseStudy.industry,
                author: {
                    '@type': 'Organization',
                    name: 'Zytrixon Tech',
                    url: 'https://zytrixon.com',
                },
                publisher: {
                    '@type': 'Organization',
                    name: 'Zytrixon Tech',
                    url: 'https://zytrixon.com',
                },
                description: pageSeo.description,
            },
        ],
    };

    return (
        <ThemeProvider>
            <SeoHead seo={pageSeo} />
            <Head>
                <script type="application/ld+json">
                    {JSON.stringify(schemaData)}
                </script>
            </Head>

            <CustomCursor />
            <TopBar />
            <Navbar />

            <main
                style={{
                    minHeight: '100vh',
                    background: 'var(--zy-black)',
                    overflowX: 'hidden',
                    paddingTop: '120px',
                }}
            >
                {/* 1. Breadcrumbs & Header */}
                <header
                    style={{
                        maxWidth: 1100,
                        margin: '0 auto',
                        padding: '20px 24px 40px',
                    }}
                >
                    {/* Breadcrumbs */}
                    <nav
                        aria-label="Breadcrumb"
                        style={{
                            display: 'flex',
                            gap: 8,
                            alignItems: 'center',
                            fontSize: 13,
                            color: 'var(--zy-gray-text)',
                            marginBottom: 32,
                            flexWrap: 'wrap',
                        }}
                    >
                        <Link
                            href="/"
                            style={{
                                color: 'var(--zy-gray-text)',
                                textDecoration: 'none',
                            }}
                        >
                            Home
                        </Link>
                        <span>/</span>
                        <Link
                            href="/case-studies"
                            style={{
                                color: 'var(--zy-gray-text)',
                                textDecoration: 'none',
                            }}
                        >
                            Case Studies
                        </Link>
                        <span>/</span>
                        <span
                            style={{
                                color: 'var(--zy-blue)',
                                fontWeight: 600,
                            }}
                        >
                            {caseStudy.industry}
                        </span>
                    </nav>

                    {/* Badge */}
                    <div
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 8,
                            padding: '6px 16px',
                            background: 'rgba(0, 112, 243, 0.1)',
                            border: '1px solid rgba(0, 112, 243, 0.25)',
                            borderRadius: 30,
                            color: 'var(--zy-blue)',
                            fontSize: 13,
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            marginBottom: 20,
                        }}
                    >
                        <span>{caseStudy.industry}</span>
                        <span>•</span>
                        <span>{caseStudy.client_name}</span>
                    </div>

                    {/* Main H1 Title */}
                    <h1
                        style={{
                            fontSize: 'clamp(32px, 5vw, 56px)',
                            fontWeight: 800,
                            fontFamily: 'var(--font-heading)',
                            color: 'var(--zy-white)',
                            lineHeight: 1.15,
                            marginBottom: 28,
                        }}
                    >
                        {caseStudy.title}
                    </h1>

                    {/* Meta Bar */}
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns:
                                'repeat(auto-fit, minmax(180px, 1fr))',
                            gap: 16,
                            padding: '24px',
                            background: 'var(--zy-gray-card)',
                            border: '1px solid rgba(255,255,255,0.06)',
                            borderRadius: 14,
                        }}
                    >
                        <div>
                            <div
                                style={{
                                    fontSize: 12,
                                    color: 'var(--zy-gray-text)',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em',
                                    marginBottom: 4,
                                }}
                            >
                                Client
                            </div>
                            <div
                                style={{
                                    fontSize: 16,
                                    fontWeight: 700,
                                    color: 'var(--zy-white)',
                                }}
                            >
                                {caseStudy.client_name}
                            </div>
                        </div>
                        <div>
                            <div
                                style={{
                                    fontSize: 12,
                                    color: 'var(--zy-gray-text)',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em',
                                    marginBottom: 4,
                                }}
                            >
                                Industry
                            </div>
                            <div
                                style={{
                                    fontSize: 16,
                                    fontWeight: 700,
                                    color: 'var(--zy-white)',
                                }}
                            >
                                {caseStudy.industry}
                            </div>
                        </div>
                        {caseStudy.service && (
                            <div>
                                <div
                                    style={{
                                        fontSize: 12,
                                        color: 'var(--zy-gray-text)',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em',
                                        marginBottom: 4,
                                    }}
                                >
                                    Service
                                </div>
                                <Link
                                    href={`/services/${caseStudy.service.slug}`}
                                    style={{
                                        fontSize: 16,
                                        fontWeight: 700,
                                        color: 'var(--zy-blue)',
                                        textDecoration: 'none',
                                    }}
                                >
                                    {caseStudy.service.title} →
                                </Link>
                            </div>
                        )}
                        <div>
                            <div
                                style={{
                                    fontSize: 12,
                                    color: 'var(--zy-gray-text)',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em',
                                    marginBottom: 4,
                                }}
                            >
                                Delivery Hub
                            </div>
                            <div
                                style={{
                                    fontSize: 16,
                                    fontWeight: 700,
                                    color: 'var(--zy-white)',
                                }}
                            >
                                Samastipur, Bihar
                            </div>
                        </div>
                    </div>
                </header>

                {/* 2. Hero Image Banner */}
                {caseStudy.image && (
                    <div
                        style={{
                            maxWidth: 1100,
                            margin: '0 auto 60px',
                            padding: '0 24px',
                        }}
                    >
                        <div
                            style={{
                                borderRadius: 20,
                                overflow: 'hidden',
                                border: '1px solid rgba(255,255,255,0.08)',
                                maxHeight: 520,
                                boxShadow:
                                    '0 30px 60px -12px rgba(0, 112, 243, 0.15)',
                            }}
                        >
                            <img
                                src={caseStudy.image}
                                alt={caseStudy.title}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    maxHeight: 520,
                                    objectFit: 'cover',
                                    display: 'block',
                                }}
                            />
                        </div>
                    </div>
                )}

                {/* 3. Results Metrics Banner */}
                {resultsList.length > 0 && (
                    <section
                        style={{
                            maxWidth: 1100,
                            margin: '0 auto 60px',
                            padding: '0 24px',
                        }}
                    >
                        <div
                            style={{
                                background:
                                    'linear-gradient(135deg, rgba(0, 112, 243, 0.08) 0%, rgba(0, 0, 0, 0.4) 100%)',
                                border: '1px solid rgba(0, 112, 243, 0.3)',
                                borderRadius: 16,
                                padding: '40px 32px',
                                textAlign: 'center',
                            }}
                        >
                            <span className="zy-section-label">
                                MEASURABLE IMPACT
                            </span>
                            <h2
                                style={{
                                    fontSize: 'clamp(24px, 3.5vw, 36px)',
                                    fontWeight: 800,
                                    color: 'var(--zy-white)',
                                    marginBottom: 32,
                                    fontFamily: 'var(--font-heading)',
                                }}
                            >
                                Quantifiable Business Outcomes
                            </h2>
                            <div
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: `repeat(auto-fit, minmax(200px, 1fr))`,
                                    gap: 24,
                                }}
                            >
                                {resultsList.map((res, i) => {
                                    const parts = res.split(' ');
                                    const primary = parts[0];
                                    const secondary = parts.slice(1).join(' ');
                                    return (
                                        <div
                                            key={i}
                                            style={{
                                                background: 'rgba(0,0,0,0.4)',
                                                border: '1px solid rgba(255,255,255,0.06)',
                                                borderRadius: 12,
                                                padding: '24px 16px',
                                            }}
                                        >
                                            <div
                                                style={{
                                                    fontSize:
                                                        'clamp(32px, 5vw, 42px)',
                                                    fontWeight: 900,
                                                    fontFamily:
                                                        'var(--font-heading)',
                                                    color: 'var(--zy-blue)',
                                                    marginBottom: 8,
                                                }}
                                            >
                                                {primary}
                                            </div>
                                            <div
                                                style={{
                                                    fontSize: 14,
                                                    color: 'var(--zy-gray-text)',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.05em',
                                                    fontWeight: 600,
                                                }}
                                            >
                                                {secondary || 'Outcome'}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </section>
                )}

                {/* 4. Deep Dive: Challenge & Solution */}
                <section
                    style={{
                        maxWidth: 1100,
                        margin: '0 auto 80px',
                        padding: '0 24px',
                    }}
                >
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns:
                                'repeat(auto-fit, minmax(320px, 1fr))',
                            gap: 32,
                        }}
                    >
                        {/* Challenge */}
                        <GradientCard
                            style={{ textAlign: 'left', padding: 36 }}
                        >
                            <div
                                style={{
                                    display: 'inline-block',
                                    padding: '6px 14px',
                                    background: 'rgba(239, 68, 68, 0.1)',
                                    border: '1px solid rgba(239, 68, 68, 0.3)',
                                    borderRadius: 8,
                                    color: '#ef4444',
                                    fontSize: 12,
                                    fontWeight: 700,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em',
                                    marginBottom: 16,
                                }}
                            >
                                The Problem
                            </div>
                            <h2
                                style={{
                                    fontSize: 26,
                                    fontWeight: 800,
                                    color: 'var(--zy-white)',
                                    fontFamily: 'var(--font-heading)',
                                    marginBottom: 20,
                                }}
                            >
                                The Challenge
                            </h2>
                            <p
                                style={{
                                    color: 'var(--zy-gray-text)',
                                    fontSize: 16,
                                    lineHeight: 1.8,
                                    whiteSpace: 'pre-line',
                                }}
                            >
                                {caseStudy.challenge}
                            </p>
                        </GradientCard>

                        {/* Solution */}
                        <GradientCard
                            style={{ textAlign: 'left', padding: 36 }}
                        >
                            <div
                                style={{
                                    display: 'inline-block',
                                    padding: '6px 14px',
                                    background: 'rgba(34, 197, 94, 0.1)',
                                    border: '1px solid rgba(34, 197, 94, 0.3)',
                                    borderRadius: 8,
                                    color: '#22c55e',
                                    fontSize: 12,
                                    fontWeight: 700,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em',
                                    marginBottom: 16,
                                }}
                            >
                                The Architecture
                            </div>
                            <h2
                                style={{
                                    fontSize: 26,
                                    fontWeight: 800,
                                    color: 'var(--zy-white)',
                                    fontFamily: 'var(--font-heading)',
                                    marginBottom: 20,
                                }}
                            >
                                The Zytrixon Solution
                            </h2>
                            <p
                                style={{
                                    color: 'var(--zy-gray-text)',
                                    fontSize: 16,
                                    lineHeight: 1.8,
                                    whiteSpace: 'pre-line',
                                }}
                            >
                                {caseStudy.solution}
                            </p>
                        </GradientCard>
                    </div>
                </section>

                {/* 5. Client Testimonial Endorsement */}
                <section
                    style={{
                        maxWidth: 900,
                        margin: '0 auto 80px',
                        padding: '0 24px',
                    }}
                >
                    <div
                        style={{
                            background: 'var(--zy-gray-card)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            borderRadius: 16,
                            padding: '40px 36px',
                            textAlign: 'center',
                            position: 'relative',
                        }}
                    >
                        <div
                            style={{
                                fontSize: 48,
                                color: 'var(--zy-blue)',
                                lineHeight: 1,
                                marginBottom: 12,
                                opacity: 0.6,
                            }}
                        >
                            “
                        </div>
                        <p
                            style={{
                                fontSize: 18,
                                fontStyle: 'italic',
                                color: 'var(--zy-white)',
                                lineHeight: 1.7,
                                marginBottom: 24,
                            }}
                        >
                            Working with Zytrixon Tech was a game-changer. They
                            didn't just write code — they re-architected our
                            entire system to scale without friction. Highly
                            recommended.
                        </p>
                        <div
                            style={{
                                fontWeight: 700,
                                color: 'var(--zy-white)',
                                fontSize: 16,
                            }}
                        >
                            Lead Stakeholder
                        </div>
                        <div
                            style={{
                                color: 'var(--zy-gray-text)',
                                fontSize: 14,
                                marginTop: 4,
                            }}
                        >
                            {caseStudy.client_name} ({caseStudy.industry})
                        </div>
                    </div>
                </section>

                {/* 6. Related Case Studies */}
                {relatedCaseStudies.length > 0 && (
                    <section
                        style={{
                            maxWidth: 1200,
                            margin: '0 auto 100px',
                            padding: '0 24px',
                        }}
                    >
                        <div
                            style={{
                                textAlign: 'center',
                                marginBottom: 48,
                            }}
                        >
                            <span className="zy-section-label">MORE WORK</span>
                            <h2 className="zy-section-title">
                                Related Success Stories
                            </h2>
                        </div>
                        <div
                            style={{
                                display: 'grid',
                                gridTemplateColumns:
                                    'repeat(auto-fit, minmax(320px, 1fr))',
                                gap: 28,
                            }}
                        >
                            {relatedCaseStudies.map((rel) => (
                                <Link
                                    key={rel.id}
                                    href={`/case-studies/${rel.slug}`}
                                    style={{
                                        textDecoration: 'none',
                                        display: 'block',
                                    }}
                                >
                                    <GradientCard
                                        style={{
                                            textAlign: 'left',
                                            height: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                        }}
                                    >
                                        <div
                                            style={{
                                                fontSize: 12,
                                                color: 'var(--zy-blue)',
                                                fontWeight: 700,
                                                textTransform: 'uppercase',
                                                marginBottom: 8,
                                            }}
                                        >
                                            {rel.industry}
                                        </div>
                                        <h3
                                            style={{
                                                fontSize: 18,
                                                fontWeight: 700,
                                                color: 'var(--zy-white)',
                                                marginBottom: 12,
                                                lineHeight: 1.3,
                                            }}
                                        >
                                            {rel.title}
                                        </h3>
                                        <p
                                            style={{
                                                color: 'var(--zy-gray-text)',
                                                fontSize: 14,
                                                lineHeight: 1.6,
                                                marginTop: 'auto',
                                            }}
                                        >
                                            Read Case Study →
                                        </p>
                                    </GradientCard>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}

                <FooterCTA />
                <ContactSection />
            </main>

            <Footer />
        </ThemeProvider>
    );
}
