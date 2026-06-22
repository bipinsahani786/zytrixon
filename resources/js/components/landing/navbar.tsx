import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const NAV_LINKS = [
    { label: 'Services', href: '/services' },
    { label: 'Work', href: '/work' },
    { label: 'About', href: '/about' },
    { label: 'Process', href: '/process' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const navRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 60);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        // Entrance animation
        gsap.fromTo(
            navRef.current,
            { y: -80, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 1.3 }
        );

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <nav
                ref={navRef}
                className={`navbar ${scrolled ? 'scrolled' : ''}`}
                style={{ opacity: 0 }}
            >
                {/* Logo */}
                <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div
                        style={{
                            width: 36,
                            height: 36,
                            border: '2px solid #00F5D4',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontFamily: 'var(--font-heading)',
                            fontWeight: 700,
                            fontSize: 18,
                            color: '#00F5D4',
                        }}
                    >
                        Z
                    </div>
                    <span
                        style={{
                            fontFamily: 'var(--font-heading)',
                            fontWeight: 700,
                            fontSize: 18,
                            color: '#FFFFFF',
                            letterSpacing: '-0.02em',
                        }}
                    >
                        ZYTRIXON
                    </span>
                </a>

                {/* Desktop Links */}
                <ul className="navbar-links">
                    {NAV_LINKS.map((link) => (
                        <li key={link.href}>
                            <a href={link.href} className="navbar-link">
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Desktop CTA */}
                <a href="/contact" className="magnetic-btn" style={{ padding: '10px 24px', fontSize: 12 }}>
                    Start a Project
                    <svg className="btn-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </a>

                {/* Mobile Toggle */}
                <button
                    className={`mobile-nav-toggle ${mobileOpen ? 'open' : ''}`}
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle navigation"
                >
                    <span />
                    <span />
                    <span />
                </button>
            </nav>

            {/* Mobile Panel */}
            <div className={`mobile-nav-panel ${mobileOpen ? 'open' : ''}`}>
                {NAV_LINKS.map((link) => (
                    <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>
                        {link.label}
                    </a>
                ))}
                <a
                    href="/contact"
                    className="magnetic-btn"
                    style={{ marginTop: 24 }}
                    onClick={() => setMobileOpen(false)}
                >
                    Start a Project
                </a>
            </div>
        </>
    );
}
