import React from 'react';
import { useTheme } from '@/components/landing/theme-provider';
import GradientCard from '@/components/ui/GradientCard';

export default function LearningExperience({ service }: any) {
    const { theme } = useTheme();
    const isLight = theme === 'light';

    return (
        <section
            className="zy-section"
            style={{ background: 'var(--zy-black)' }}
        >
            <div style={{ maxWidth: 1000, margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: 60 }}>
                    <span className="zy-section-label">Learning Center</span>
                    <h2 className="zy-section-title">
                        Understanding {service?.title || 'Our Technology'}
                    </h2>
                    <p
                        style={{
                            color: 'var(--zy-gray-text)',
                            marginTop: 16,
                            fontSize: 18,
                        }}
                    >
                        We believe an informed client is our best partner. Here
                        is a brief look under the hood.
                    </p>
                </div>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns:
                            'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: 32,
                    }}
                >
                    {/* Concept 1 */}
                    <GradientCard
                        themeColor="var(--zy-blue)"
                        style={{ height: '100%' }}
                    >
                        <div
                            style={{
                                padding: 32,
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <h3
                                style={{
                                    color: 'var(--zy-white)',
                                    fontSize: 20,
                                    fontWeight: 700,
                                    marginBottom: 12,
                                    fontFamily: 'var(--font-heading)',
                                }}
                            >
                                Architecture First
                            </h3>
                            <p
                                style={{
                                    color: 'var(--zy-gray-text)',
                                    lineHeight: 1.6,
                                }}
                            >
                                Before writing a single line of code, we design
                                the system architecture. This ensures that when
                                your user base scales from 1,000 to 1,000,000,
                                the system doesn't crash. We use microservices
                                and serverless infrastructure to achieve this.
                            </p>
                        </div>
                    </GradientCard>

                    {/* Concept 2 */}
                    <GradientCard
                        themeColor="#22c55e"
                        style={{ height: '100%' }}
                    >
                        <div
                            style={{
                                padding: 32,
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <h3
                                style={{
                                    color: 'var(--zy-white)',
                                    fontSize: 20,
                                    fontWeight: 700,
                                    marginBottom: 12,
                                    fontFamily: 'var(--font-heading)',
                                }}
                            >
                                Data Security
                            </h3>
                            <p
                                style={{
                                    color: 'var(--zy-gray-text)',
                                    lineHeight: 1.6,
                                }}
                            >
                                In today's landscape, security cannot be an
                                afterthought. We implement End-to-End Encryption
                                (E2EE), strict role-based access controls
                                (RBAC), and adhere to global compliance
                                standards like GDPR and HIPAA.
                            </p>
                        </div>
                    </GradientCard>

                    {/* Concept 3 */}
                    <GradientCard
                        themeColor="#eab308"
                        style={{ height: '100%' }}
                    >
                        <div
                            style={{
                                padding: 32,
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <h3
                                style={{
                                    color: 'var(--zy-white)',
                                    fontSize: 20,
                                    fontWeight: 700,
                                    marginBottom: 12,
                                    fontFamily: 'var(--font-heading)',
                                }}
                            >
                                Agile Iteration
                            </h3>
                            <p
                                style={{
                                    color: 'var(--zy-gray-text)',
                                    lineHeight: 1.6,
                                }}
                            >
                                We build products iteratively. Instead of
                                waiting 6 months to see a result, we deliver
                                working features every 2 weeks. This allows you
                                to test the market early, gather feedback, and
                                pivot if necessary without wasting budget.
                            </p>
                        </div>
                    </GradientCard>
                </div>
            </div>
        </section>
    );
}
