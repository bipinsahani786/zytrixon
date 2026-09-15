import { Link } from '@inertiajs/react';
import React from 'react';
import GradientCard from '@/components/ui/GradientCard';

export default function CaseStudiesList({ service, caseStudies = [] }: any) {
    if (!caseStudies || caseStudies.length === 0) {
        return null;
    }

    return (
        <section
            className="zy-section"
            style={{
                background: 'var(--zy-black)',
                borderTop: '1px solid rgba(255,255,255,0.05)',
            }}
        >
            <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: 60 }}>
                    <span className="zy-section-label">PROVEN RESULTS</span>
                    <h2 className="zy-section-title">
                        Case Studies & Success Stories
                    </h2>
                </div>
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns:
                            'repeat(auto-fit, minmax(350px, 1fr))',
                        gap: 32,
                    }}
                >
                    {caseStudies.map((study: any) => (
                        <Link
                            href={`/case-studies/${study.slug}`}
                            key={study.id}
                            style={{ display: 'block', textDecoration: 'none' }}
                        >
                            <GradientCard
                                style={{ textAlign: 'left', height: '100%' }}
                            >
                                <div
                                    style={{
                                        height: 220,
                                        background: 'var(--zy-gray-dark)',
                                        overflow: 'hidden',
                                    }}
                                >
                                    {study.image && (
                                        <img
                                            src={study.image}
                                            alt={study.title}
                                            loading="lazy"
                                            decoding="async"
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                opacity: 0.8,
                                            }}
                                        />
                                    )}
                                </div>
                                <div
                                    style={{
                                        padding: 32,
                                        flex: 1,
                                        display: 'flex',
                                        flexDirection: 'column',
                                    }}
                                >
                                    <div
                                        style={{
                                            color: 'var(--zy-blue)',
                                            fontSize: 13,
                                            fontWeight: 700,
                                            marginBottom: 12,
                                            letterSpacing: '0.05em',
                                            textTransform: 'uppercase',
                                        }}
                                    >
                                        {study.industry}
                                    </div>
                                    <h3
                                        style={{
                                            fontSize: 22,
                                            fontWeight: 700,
                                            color: 'var(--zy-white)',
                                            marginBottom: 16,
                                            fontFamily: 'var(--font-heading)',
                                            lineHeight: 1.3,
                                        }}
                                    >
                                        {study.title}
                                    </h3>
                                    <p
                                        style={{
                                            color: 'var(--zy-gray-text)',
                                            lineHeight: 1.6,
                                            marginBottom: 24,
                                            fontSize: 14,
                                        }}
                                    >
                                        {study.challenge.substring(0, 100)}...
                                    </p>

                                    <div
                                        style={{
                                            marginTop: 'auto',
                                            paddingTop: 20,
                                            borderTop:
                                                '1px solid rgba(255,255,255,0.05)',
                                            display: 'flex',
                                            gap: 16,
                                        }}
                                    >
                                        {(() => {
                                            let resultsArray = [];

                                            try {
                                                resultsArray =
                                                    typeof study.results ===
                                                    'string'
                                                        ? JSON.parse(
                                                              study.results,
                                                          )
                                                        : study.results || [];
                                            } catch (e) {
                                                resultsArray = [];
                                            }

                                            return resultsArray
                                                .slice(0, 2)
                                                .map(
                                                    (
                                                        res: string,
                                                        i: number,
                                                    ) => (
                                                        <div key={i}>
                                                            <div
                                                                style={{
                                                                    fontSize: 16,
                                                                    color: 'var(--zy-white)',
                                                                    fontWeight: 700,
                                                                }}
                                                            >
                                                                {
                                                                    res.split(
                                                                        ' ',
                                                                    )[0]
                                                                }
                                                            </div>
                                                            <div
                                                                style={{
                                                                    fontSize: 11,
                                                                    color: 'var(--zy-gray-text)',
                                                                    textTransform:
                                                                        'uppercase',
                                                                }}
                                                            >
                                                                {res
                                                                    .split(' ')
                                                                    .slice(1)
                                                                    .join(' ')}
                                                            </div>
                                                        </div>
                                                    ),
                                                );
                                        })()}
                                    </div>
                                </div>
                            </GradientCard>
                        </Link>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: 40 }}>
                    <Link
                        href="/case-studies"
                        className="zy-btn-outline"
                        style={{
                            color: 'var(--zy-white)',
                            borderColor: 'rgba(255,255,255,0.2)',
                        }}
                    >
                        View All Case Studies
                    </Link>
                </div>
            </div>
        </section>
    );
}
