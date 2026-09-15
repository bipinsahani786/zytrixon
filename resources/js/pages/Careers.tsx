import ContactSection from '@/components/landing/contact-section';
import CoreValuesSection from '@/components/landing/core-values-section';
import CustomCursor from '@/components/landing/custom-cursor';
import FAQSection from '@/components/landing/faq-section';
import Footer from '@/components/landing/footer';
import FooterCTA from '@/components/landing/footer-cta';
import GlobalFootprint from '@/components/landing/global-footprint';
import InnerPageHero from '@/components/landing/inner-page-hero';
import Navbar from '@/components/landing/navbar';
import { ThemeProvider } from '@/components/landing/theme-provider';
import SeoHead from '@/components/seo/SeoHead';
import TopBar from '@/components/landing/top-bar';

// Sections
import TeamSection from '@/components/landing/team-section';
import TestimonialsSection from '@/components/landing/testimonials-section';

export default function Careers() {
    const jobs = [
        {
            id: 1,
            title: 'Senior React Engineer',
            department: 'Engineering',
            location: 'Samastipur, IN (Hybrid)',
            type: 'Full-time',
        },
        {
            id: 2,
            title: 'Backend Lead (Laravel)',
            department: 'Engineering',
            location: 'Remote',
            type: 'Full-time',
        },
        {
            id: 3,
            title: 'UI/UX Designer',
            department: 'Design',
            location: 'Samastipur, IN (On-site)',
            type: 'Full-time',
        },
        {
            id: 4,
            title: 'AI & Automation Specialist',
            department: 'Data & AI',
            location: 'Remote',
            type: 'Contract',
        },
    ];

    return (
        <ThemeProvider>
            <SeoHead
                seo={{
                    title: 'Careers | Zytrixon Tech',
                    description:
                        'Join our team at Zytrixon Tech and build the future of software development in Samastipur, Bihar.',
                }}
            />

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
                <InnerPageHero
                    title="Build the Future With Us"
                    subtitle="We are looking for passionate, driven individuals who want to solve complex problems and build scalable enterprise solutions."
                />

                {/* Job Openings Section */}
                <section
                    style={{
                        padding: '80px 24px',
                        maxWidth: 1200,
                        margin: '0 auto',
                    }}
                >
                    <div style={{ textAlign: 'center', marginBottom: 60 }}>
                        <h2
                            style={{
                                fontSize: 'clamp(32px, 5vw, 48px)',
                                fontFamily: 'var(--font-heading)',
                                fontWeight: 800,
                                color: 'var(--zy-white)',
                                marginBottom: 24,
                            }}
                        >
                            Open Positions
                        </h2>
                        <p
                            style={{
                                color: 'var(--zy-gray-text)',
                                fontSize: 18,
                                maxWidth: 600,
                                margin: '0 auto',
                            }}
                        >
                            Explore our current openings and find where you fit
                            in.
                        </p>
                    </div>

                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 24,
                        }}
                    >
                        {jobs.map((job) => (
                            <div
                                key={job.id}
                                style={{
                                    background: 'var(--zy-gray-card)',
                                    border: '1px solid var(--zy-gray-border)',
                                    borderRadius: 16,
                                    padding: '32px 40px',
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    gap: 24,
                                    transition: 'all 0.3s var(--zy-ease)',
                                    cursor: 'pointer',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor =
                                        'var(--zy-blue)';
                                    e.currentTarget.style.transform =
                                        'translateX(10px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor =
                                        'var(--zy-gray-border)';
                                    e.currentTarget.style.transform =
                                        'translateX(0)';
                                }}
                            >
                                <div>
                                    <h3
                                        style={{
                                            fontSize: 24,
                                            fontWeight: 700,
                                            color: 'var(--zy-white)',
                                            marginBottom: 12,
                                        }}
                                    >
                                        {job.title}
                                    </h3>
                                    <div
                                        style={{
                                            display: 'flex',
                                            gap: 16,
                                            flexWrap: 'wrap',
                                            color: 'var(--zy-gray-text)',
                                            fontSize: 14,
                                        }}
                                    >
                                        <span
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 6,
                                            }}
                                        >
                                            <svg
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                            </svg>
                                            {job.department}
                                        </span>
                                        <span
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 6,
                                            }}
                                        >
                                            <svg
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                                <circle
                                                    cx="12"
                                                    cy="10"
                                                    r="3"
                                                ></circle>
                                            </svg>
                                            {job.location}
                                        </span>
                                        <span
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 6,
                                            }}
                                        >
                                            <svg
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <circle
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                ></circle>
                                                <polyline points="12 6 12 12 16 14"></polyline>
                                            </svg>
                                            {job.type}
                                        </span>
                                    </div>
                                </div>
                                <a
                                    href="mailto:zytrixon@gmail.com"
                                    className="magnetic-btn"
                                    style={{
                                        padding: '12px 32px',
                                        fontSize: 14,
                                    }}
                                >
                                    Apply Now
                                </a>
                            </div>
                        ))}
                    </div>
                </section>

                <CoreValuesSection />

                <GlobalFootprint />

                <TeamSection />

                <TestimonialsSection />

                <FAQSection />

                <FooterCTA />

                <ContactSection />
            </main>

            <Footer />
        </ThemeProvider>
    );
}
