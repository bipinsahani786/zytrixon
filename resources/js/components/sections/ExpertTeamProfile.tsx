import React from 'react';

export default function ExpertTeamProfile({ service }: any) {
    const isApp = service?.slug === 'app-development';
    const isSEO =
        service?.slug === 'digital-marketing' ||
        service?.slug === 'seo-digital-marketing';

    const teamRoles = isApp
        ? [
              {
                  role: 'Mobile Architect',
                  desc: 'Expert in React Native & Swift',
              },
              {
                  role: 'UI/UX Designer',
                  desc: 'Crafting pixel-perfect app interfaces',
              },
              {
                  role: 'Backend Engineer',
                  desc: 'Building scalable Node.js APIs',
              },
              { role: 'QA Tester', desc: 'Ensuring zero-bug app releases' },
          ]
        : isSEO
          ? [
                {
                    role: 'SEO Strategist',
                    desc: 'Data-driven growth & ranking expert',
                },
                { role: 'Content Head', desc: 'Crafting high-converting copy' },
                { role: 'Technical SEO', desc: 'Optimizing core web vitals' },
                {
                    role: 'Link Builder',
                    desc: 'Building high-authority backlinks',
                },
            ]
          : [
                {
                    role: 'Lead Architect',
                    desc: 'Designing scalable cloud architecture',
                },
                { role: 'Full Stack Dev', desc: 'Mastering React & Laravel' },
                {
                    role: 'DevOps Engineer',
                    desc: 'CI/CD & Server optimization',
                },
                { role: 'Project Manager', desc: 'Ensuring on-time delivery' },
            ];

    const themeColor = isApp ? '#22c55e' : isSEO ? '#eab308' : '#6366f1';

    return (
        <section
            className="zy-section"
            style={{
                background: 'var(--zy-black)',
                borderTop: '1px solid rgba(255,255,255,0.02)',
            }}
        >
            <div
                style={{
                    maxWidth: 1200,
                    margin: '0 auto',
                    textAlign: 'center',
                }}
            >
                <span
                    className="zy-section-label"
                    style={{ color: themeColor, background: `${themeColor}1a` }}
                >
                    YOUR DEDICATED SQUAD
                </span>
                <h2 className="zy-section-title">
                    The Brains Behind Your {service?.title || 'Project'}
                </h2>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns:
                            'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: 24,
                        marginTop: 60,
                    }}
                >
                    {teamRoles.map((member, i) => (
                        <div
                            key={i}
                            style={{
                                background: 'var(--zy-gray-card)',
                                padding: '32px 24px',
                                borderRadius: 16,
                                border: '1px solid rgba(255,255,255,0.03)',
                                position: 'relative',
                                overflow: 'hidden',
                                transition: 'transform 0.3s ease',
                                cursor: 'pointer',
                            }}
                            onMouseEnter={(e) =>
                                (e.currentTarget.style.transform =
                                    'translateY(-5px)')
                            }
                            onMouseLeave={(e) =>
                                (e.currentTarget.style.transform =
                                    'translateY(0px)')
                            }
                        >
                            {/* Accent Glow */}
                            <div
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: 100,
                                    height: 4,
                                    background: themeColor,
                                    borderRadius: '0 0 10px 10px',
                                    opacity: 0.8,
                                }}
                            />

                            <div
                                style={{
                                    width: 72,
                                    height: 72,
                                    borderRadius: '50%',
                                    background: 'rgba(255,255,255,0.03)',
                                    margin: '0 auto 20px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: `1px solid ${themeColor}33`,
                                }}
                            >
                                <svg
                                    width="28"
                                    height="28"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke={themeColor}
                                    strokeWidth="1.5"
                                >
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                            <h3
                                style={{
                                    fontSize: 18,
                                    color: 'var(--zy-white)',
                                    fontWeight: 700,
                                    fontFamily: 'var(--font-heading)',
                                }}
                            >
                                {member.role}
                            </h3>
                            <p
                                style={{
                                    color: 'var(--zy-gray-text)',
                                    fontSize: 13,
                                    lineHeight: 1.5,
                                    marginTop: 12,
                                }}
                            >
                                {member.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
