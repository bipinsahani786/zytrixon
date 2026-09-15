import { Head } from '@inertiajs/react';
import ContactSection from '@/components/landing/contact-section';
import CustomCursor from '@/components/landing/custom-cursor';
import Footer from '@/components/landing/footer';
import FooterCTA from '@/components/landing/footer-cta';
import InnerPageHero from '@/components/landing/inner-page-hero';
import Navbar from '@/components/landing/navbar';
import { ThemeProvider } from '@/components/landing/theme-provider';
import TopBar from '@/components/landing/top-bar';

// Sections

export default function Blog() {
    return (
        <ThemeProvider>
            <Head>
                <title>Engineering Insights | Blog - Zytrixon Tech</title>
                <meta
                    name="description"
                    content="Read the latest insights, tutorials, and case studies from the engineering team at Zytrixon Tech."
                />
            </Head>

            <CustomCursor />
            <TopBar />
            <Navbar />

            <main
                style={{
                    minHeight: '100vh',
                    background: 'var(--zy-black)',
                    overflowX: 'hidden',
                }}
            >
                {/* 1. Hero Section */}
                <InnerPageHero
                    title="Engineering Insights"
                    subtitle="Deep dives into AI, cloud architecture, modern design, and enterprise digital transformation."
                />

                {/* 2. Featured Post */}
                <section
                    style={{
                        padding: '60px 24px',
                        maxWidth: 1200,
                        margin: '0 auto',
                    }}
                >
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns:
                                'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: 40,
                            background: 'var(--zy-gray-card)',
                            borderRadius: 24,
                            overflow: 'hidden',
                            border: '1px solid rgba(255,255,255,0.05)',
                        }}
                    >
                        <div
                            style={{
                                height: 400,
                                background:
                                    'linear-gradient(135deg, #1a1a1a 0%, #000000 100%)',
                                position: 'relative',
                            }}
                        >
                            {/* Placeholder Image / Graphic */}
                            <div
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    backgroundImage:
                                        'radial-gradient(circle at 20% 30%, rgba(0, 112, 243, 0.2) 0%, transparent 50%)',
                                }}
                            />
                            <div
                                style={{
                                    position: 'absolute',
                                    bottom: 24,
                                    left: 24,
                                    background: 'rgba(0,0,0,0.5)',
                                    padding: '8px 16px',
                                    borderRadius: 20,
                                    backdropFilter: 'blur(10px)',
                                    color: 'var(--zy-blue)',
                                    fontSize: 13,
                                    fontWeight: 700,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                }}
                            >
                                Featured Article
                            </div>
                        </div>
                        <div
                            style={{
                                padding: '40px 40px 40px 0',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                            }}
                        >
                            <div
                                style={{
                                    color: 'var(--zy-gray-text)',
                                    fontSize: 14,
                                    marginBottom: 16,
                                }}
                            >
                                May 24, 2026 • 8 min read
                            </div>
                            <h2
                                style={{
                                    fontSize: 'clamp(28px, 4vw, 40px)',
                                    fontFamily: 'var(--font-heading)',
                                    fontWeight: 800,
                                    color: 'var(--zy-white)',
                                    marginBottom: 24,
                                    lineHeight: 1.2,
                                }}
                            >
                                The Future of Enterprise Architecture:
                                Serverless Meets Edge Computing
                            </h2>
                            <p
                                style={{
                                    fontSize: 16,
                                    color: 'var(--zy-gray-light)',
                                    marginBottom: 32,
                                    lineHeight: 1.6,
                                }}
                            >
                                Discover how modern enterprises are leveraging
                                edge computing and serverless architectures to
                                reduce latency, cut costs, and scale globally
                                without breaking a sweat.
                            </p>
                            <div>
                                <a
                                    href="#"
                                    aria-label="Read Full Article: The Future of Enterprise Architecture"
                                    style={{
                                        color: 'var(--zy-white)',
                                        textDecoration: 'none',
                                        fontWeight: 600,
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: 8,
                                        borderBottom:
                                            '1px solid var(--zy-white)',
                                        paddingBottom: 4,
                                    }}
                                >
                                    Read Full Article
                                    <svg
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                    >
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Category Filter */}
                <section
                    style={{
                        padding: '20px 24px 60px',
                        maxWidth: 1200,
                        margin: '0 auto',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            gap: 12,
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                        }}
                    >
                        {[
                            'All Articles',
                            'Engineering',
                            'AI & Automation',
                            'Design UI/UX',
                            'Business Strategy',
                            'Case Studies',
                        ].map((cat, i) => (
                            <button
                                key={cat}
                                style={{
                                    padding: '12px 24px',
                                    borderRadius: 30,
                                    background:
                                        i === 0
                                            ? 'var(--zy-white)'
                                            : 'transparent',
                                    color:
                                        i === 0
                                            ? '#000'
                                            : 'var(--zy-gray-text)',
                                    border:
                                        i === 0
                                            ? 'none'
                                            : '1px solid var(--zy-gray-border)',
                                    fontSize: 14,
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    transition: 'all 0.3s',
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </section>

                {/* 4. Blog Grid */}
                <section
                    style={{
                        padding: '0 24px 100px',
                        maxWidth: 1200,
                        margin: '0 auto',
                    }}
                >
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns:
                                'repeat(auto-fill, minmax(320px, 1fr))',
                            gap: 32,
                        }}
                    >
                        {[
                            {
                                title: 'Mastering GSAP for Modern React Applications',
                                category: 'Engineering',
                                date: 'May 18, 2026',
                            },
                            {
                                title: 'How to Implement Zero-Trust Security in SaaS',
                                category: 'Cybersecurity',
                                date: 'May 12, 2026',
                            },
                            {
                                title: 'Designing for the Dark Mode: Best Practices',
                                category: 'Design UI/UX',
                                date: 'May 05, 2026',
                            },
                            {
                                title: 'Why Next.js 15 is a Game Changer for SEO',
                                category: 'Engineering',
                                date: 'Apr 28, 2026',
                            },
                            {
                                title: 'Automating Customer Support with Custom LLMs',
                                category: 'AI & Automation',
                                date: 'Apr 21, 2026',
                            },
                            {
                                title: 'Migrating from Monolith to Microservices',
                                category: 'Engineering',
                                date: 'Apr 15, 2026',
                            },
                        ].map((post, index) => (
                            <div
                                key={index}
                                style={{
                                    background: 'var(--zy-gray-card)',
                                    borderRadius: 16,
                                    overflow: 'hidden',
                                    border: '1px solid rgba(255,255,255,0.03)',
                                    transition: 'transform 0.3s',
                                    cursor: 'pointer',
                                }}
                                onMouseEnter={(e) =>
                                    (e.currentTarget.style.transform =
                                        'translateY(-8px)')
                                }
                                onMouseLeave={(e) =>
                                    (e.currentTarget.style.transform =
                                        'translateY(0)')
                                }
                            >
                                <div
                                    style={{ height: 220, background: '#111' }}
                                ></div>
                                <div style={{ padding: 32 }}>
                                    <div
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            marginBottom: 16,
                                        }}
                                    >
                                        <span
                                            style={{
                                                color: 'var(--zy-blue)',
                                                fontSize: 12,
                                                fontWeight: 700,
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.1em',
                                            }}
                                        >
                                            {post.category}
                                        </span>
                                        <span
                                            style={{
                                                color: 'var(--zy-gray-text)',
                                                fontSize: 13,
                                            }}
                                        >
                                            {post.date}
                                        </span>
                                    </div>
                                    <h3
                                        style={{
                                            fontSize: 22,
                                            fontFamily: 'var(--font-heading)',
                                            fontWeight: 700,
                                            color: 'var(--zy-white)',
                                            marginBottom: 20,
                                            lineHeight: 1.4,
                                        }}
                                    >
                                        {post.title}
                                    </h3>
                                    <a
                                        href="#"
                                        aria-label={`Read article: ${post.title}`}
                                        style={{
                                            color: 'var(--zy-gray-light)',
                                            textDecoration: 'none',
                                            fontSize: 14,
                                            fontWeight: 600,
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: 8,
                                        }}
                                    >
                                        Read Article →
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 5. Newsletter Section */}
                <section
                    style={{
                        padding: '80px 24px',
                        background: 'var(--zy-gray-card)',
                        textAlign: 'center',
                        borderTop: '1px solid var(--zy-gray-border)',
                    }}
                >
                    <div style={{ maxWidth: 600, margin: '0 auto' }}>
                        <h2
                            style={{
                                fontSize: 32,
                                fontFamily: 'var(--font-heading)',
                                fontWeight: 800,
                                color: 'var(--zy-white)',
                                marginBottom: 16,
                            }}
                        >
                            Stay Ahead of the Curve
                        </h2>
                        <p
                            style={{
                                color: 'var(--zy-gray-text)',
                                marginBottom: 32,
                                fontSize: 16,
                            }}
                        >
                            Get the latest engineering insights and tech news
                            delivered straight to your inbox once a month. No
                            spam, ever.
                        </p>
                        <form
                            style={{
                                display: 'flex',
                                gap: 12,
                                maxWidth: 480,
                                margin: '0 auto',
                            }}
                        >
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                style={{
                                    flex: 1,
                                    padding: '16px 24px',
                                    borderRadius: 30,
                                    border: '1px solid var(--zy-gray-border)',
                                    background: '#111',
                                    color: 'var(--zy-white)',
                                    outline: 'none',
                                }}
                                required
                            />
                            <button
                                type="submit"
                                className="magnetic-btn"
                                style={{ padding: '16px 32px', border: 'none' }}
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </section>

                {/* 6. Footer CTA */}
                <FooterCTA />

                {/* 7. Contact Section */}
                <ContactSection />
            </main>

            <Footer />
        </ThemeProvider>
    );
}
