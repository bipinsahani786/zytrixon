import { Head, Link } from '@inertiajs/react';
import { ThemeProvider } from '@/components/landing/theme-provider';
import CustomCursor from '@/components/landing/custom-cursor';
import TopBar from '@/components/landing/top-bar';
import Navbar from '@/components/landing/navbar';
import Footer from '@/components/landing/footer';
import FooterCTA from '@/components/landing/footer-cta';

export default function BlogDetails() {
    return (
        <ThemeProvider>
            <Head>
                <title>The Future of Enterprise Architecture - Zytrixon Blog</title>
                <meta 
                    name="description" 
                    content="Discover how modern enterprises are leveraging edge computing and serverless architectures to reduce latency and cut costs." 
                />
            </Head>

            <CustomCursor />
            <TopBar />
            <Navbar />

            <main style={{ minHeight: '100vh', background: 'var(--zy-black)', overflowX: 'hidden', paddingTop: 120 }}>
                
                {/* 1. Article Hero */}
                <header style={{ padding: '40px 24px', maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}>
                    <div style={{ display: 'inline-block', padding: '6px 16px', background: 'rgba(0, 112, 243, 0.1)', color: 'var(--zy-blue)', borderRadius: 20, fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 24 }}>
                        Engineering
                    </div>
                    <h1 style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontFamily: 'var(--font-heading)', fontWeight: 800, color: 'var(--zy-white)', lineHeight: 1.2, marginBottom: 32 }}>
                        The Future of Enterprise Architecture: Serverless Meets Edge Computing
                    </h1>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, color: 'var(--zy-gray-text)', fontSize: 15 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                            <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'linear-gradient(135deg, var(--zy-blue), #66aaff)' }}></div>
                            <div style={{ textAlign: 'left' }}>
                                <div style={{ color: 'var(--zy-white)', fontWeight: 600 }}>Rahul Singh</div>
                                <div style={{ fontSize: 13 }}>Lead Architect</div>
                            </div>
                        </div>
                        <div style={{ width: 1, height: 24, background: 'var(--zy-gray-border)' }}></div>
                        <div>May 24, 2026</div>
                        <div style={{ width: 1, height: 24, background: 'var(--zy-gray-border)' }}></div>
                        <div>8 min read</div>
                    </div>
                </header>

                {/* 2. Cover Image */}
                <div style={{ maxWidth: 1200, margin: '40px auto', padding: '0 24px' }}>
                    <div style={{ height: '50vh', minHeight: 400, borderRadius: 24, background: 'linear-gradient(135deg, #111, #222)', border: '1px solid var(--zy-gray-border)', position: 'relative', overflow: 'hidden' }}>
                         <div style={{
                            position: 'absolute', inset: 0,
                            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(0, 112, 243, 0.15) 0%, transparent 70%)'
                        }} />
                    </div>
                </div>

                {/* 3. Article Content */}
                <article style={{ maxWidth: 800, margin: '0 auto', padding: '40px 24px', color: 'var(--zy-gray-light)', fontSize: 18, lineHeight: 1.8 }}>
                    <p style={{ fontSize: 22, color: 'var(--zy-white)', lineHeight: 1.6, marginBottom: 40 }}>
                        In the fast-paced world of digital transformation, enterprises are constantly seeking architectures that offer scale, speed, and cost-efficiency. Today, two paradigms are leading the charge: Serverless and Edge Computing.
                    </p>

                    <h2 style={{ fontSize: 32, fontFamily: 'var(--font-heading)', color: 'var(--zy-white)', fontWeight: 700, marginTop: 48, marginBottom: 24 }}>
                        The Shift Away from Monoliths
                    </h2>
                    <p style={{ marginBottom: 24 }}>
                        For decades, monolithic architectures were the standard. While they are easy to develop initially, they become incredibly difficult to maintain and scale. Moving to microservices solved the scaling issue but introduced immense infrastructure complexity.
                    </p>
                    <p style={{ marginBottom: 24 }}>
                        This is where serverless comes in. By abstracting away the server management, developers can focus purely on business logic. However, traditional serverless architectures still suffer from regional latency constraints.
                    </p>

                    <blockquote style={{ borderLeft: '4px solid var(--zy-blue)', paddingLeft: 24, margin: '40px 0', fontStyle: 'italic', fontSize: 24, color: 'var(--zy-white)' }}>
                        "Bringing compute closer to the user is no longer a luxury; it's a fundamental requirement for modern enterprise applications."
                    </blockquote>

                    <h2 style={{ fontSize: 32, fontFamily: 'var(--font-heading)', color: 'var(--zy-white)', fontWeight: 700, marginTop: 48, marginBottom: 24 }}>
                        Enter Edge Computing
                    </h2>
                    <p style={{ marginBottom: 24 }}>
                        Edge computing pushes the execution of code to nodes that are geographically closer to the end user. When combined with serverless paradigms, we get **Serverless Edge**.
                    </p>
                    
                    <ul style={{ marginBottom: 40, paddingLeft: 24, display: 'flex', flexDirection: 'column', gap: 16 }}>
                        <li><strong>Ultra-Low Latency:</strong> Code executes milliseconds away from the user.</li>
                        <li><strong>Reduced Bandwidth Costs:</strong> Data is processed at the edge, reducing backhaul.</li>
                        <li><strong>Enhanced Security:</strong> Distributed nodes minimize the impact of localized DDoS attacks.</li>
                    </ul>

                    <h2 style={{ fontSize: 32, fontFamily: 'var(--font-heading)', color: 'var(--zy-white)', fontWeight: 700, marginTop: 48, marginBottom: 24 }}>
                        Zytrixon's Approach
                    </h2>
                    <p style={{ marginBottom: 24 }}>
                        At Zytrixon, we leverage tools like Cloudflare Workers and Vercel Edge Functions to build highly resilient, globally distributed systems for our enterprise clients. This architecture has enabled our clients to handle millions of requests per second without breaking a sweat.
                    </p>

                    <div style={{ marginTop: 80, paddingTop: 40, borderTop: '1px solid var(--zy-gray-border)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
                            <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'linear-gradient(135deg, var(--zy-blue), #66aaff)' }}></div>
                            <div>
                                <h3 style={{ color: 'var(--zy-white)', fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Rahul Singh</h3>
                                <p style={{ fontSize: 15 }}>Lead Architect with 10+ years of experience in distributed systems, cloud infrastructure, and AI engineering.</p>
                            </div>
                        </div>
                    </div>
                </article>

                {/* 4. Related Posts */}
                <section style={{ padding: '80px 24px', background: 'var(--zy-gray-dark)' }}>
                    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                        <h2 style={{ fontSize: 32, fontFamily: 'var(--font-heading)', fontWeight: 800, color: 'var(--zy-white)', marginBottom: 40 }}>
                            Keep Reading
                        </h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 32 }}>
                            {[
                                { title: 'Mastering GSAP for Modern React Applications', category: 'Engineering', date: 'May 18, 2026' },
                                { title: 'How to Implement Zero-Trust Security in SaaS', category: 'Cybersecurity', date: 'May 12, 2026' },
                                { title: 'Why Next.js 15 is a Game Changer for SEO', category: 'Engineering', date: 'Apr 28, 2026' }
                            ].map((post, index) => (
                                <Link href="/blog/mastering-gsap" aria-label={`Read article: ${post.title}`} key={index} style={{
                                    background: 'var(--zy-gray-card)',
                                    borderRadius: 16,
                                    overflow: 'hidden',
                                    border: '1px solid rgba(255,255,255,0.03)',
                                    transition: 'transform 0.3s',
                                    cursor: 'pointer',
                                    textDecoration: 'none',
                                    display: 'block'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                                >
                                    <div style={{ height: 220, background: '#111' }}></div>
                                    <div style={{ padding: 32 }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                                            <span style={{ color: 'var(--zy-blue)', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{post.category}</span>
                                            <span style={{ color: 'var(--zy-gray-text)', fontSize: 13 }}>{post.date}</span>
                                        </div>
                                        <h3 style={{ fontSize: 22, fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--zy-white)', marginBottom: 20, lineHeight: 1.4 }}>
                                            {post.title}
                                        </h3>
                                        <div style={{ color: 'var(--zy-gray-light)', fontSize: 14, fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                                            Read Article →
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                <FooterCTA />
                
            </main>

            <Footer />
        </ThemeProvider>
    );
}
