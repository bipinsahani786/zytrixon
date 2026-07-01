import SeoHead from '@/components/seo/SeoHead';
import { ThemeProvider } from '@/components/landing/theme-provider';
import CustomCursor from '@/components/landing/custom-cursor';
import TopBar from '@/components/landing/top-bar';
import Navbar from '@/components/landing/navbar';
import InnerPageHero from '@/components/landing/inner-page-hero';
import Footer from '@/components/landing/footer';

// Sections
import TeamSection from '@/components/landing/team-section';
import CoreValuesSection from '@/components/landing/core-values-section';
import GlobalFootprint from '@/components/landing/global-footprint';
import TestimonialsSection from '@/components/landing/testimonials-section';
import FooterCTA from '@/components/landing/footer-cta';
import ContactSection from '@/components/landing/contact-section';

export default function Team() {
    return (
        <ThemeProvider>
            <SeoHead seo={{ 
                title: 'Our Team | Zytrixon Tech', 
                description: 'Meet the brilliant minds behind Zytrixon Tech – developers, designers, and strategists.'
            }} />

            <CustomCursor />
            <TopBar />
            <Navbar />

            <main style={{ minHeight: '100vh', background: 'var(--zy-black)', overflowX: 'hidden' }}>
                
                {/* 1. Hero Section */}
                <InnerPageHero 
                    title="The Minds Behind The Magic"
                    subtitle="We are a collective of engineers, designers, and strategists united by a single mission: delivering digital dominance."
                />

                {/* 2. Team Grid */}
                <div style={{ paddingTop: '60px' }}>
                    <TeamSection />
                </div>

                {/* 3. Core Values */}
                <div style={{ marginTop: '-40px' }}>
                    <CoreValuesSection />
                </div>

                {/* 4. Global Footprint (Our Locations) */}
                <GlobalFootprint />

                {/* 5. Custom Hiring Section */}
                <section style={{ padding: '100px 24px', background: 'var(--zy-black)', textAlign: 'center' }}>
                    <div style={{ maxWidth: 800, margin: '0 auto', background: 'var(--zy-gray-card)', borderRadius: 24, padding: '60px 40px', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontFamily: 'var(--font-heading)', fontWeight: 800, color: 'var(--zy-white)', marginBottom: 24 }}>
                            Join Our Mission
                        </h2>
                        <p style={{ fontSize: 18, color: 'var(--zy-gray-text)', marginBottom: 40, lineHeight: 1.6 }}>
                            We are always looking for exceptional talent. If you are passionate about building world-class software, we want to hear from you.
                        </p>
                        <a href="mailto:zytrixon@gmail.com" className="magnetic-btn" style={{ padding: '18px 40px', fontSize: 16 }}>
                            View Open Positions
                            <svg className="btn-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </section>

                {/* 6. Testimonials */}
                <TestimonialsSection />

                {/* 7. Footer CTA */}
                <FooterCTA />

                {/* 8. Contact Section */}
                <ContactSection />
                
            </main>

            <Footer />
        </ThemeProvider>
    );
}
