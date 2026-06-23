import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useTheme } from './theme-provider';
import Logo from '@/components/ui/logo';

const NAV_LINKS = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Team', href: '#team' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const navRef = useRef<HTMLElement>(null);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setScrolled(window.scrollY > 60);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        gsap.fromTo(
            navRef.current,
            { y: -80, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 1.3 }
        );

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock background scroll when mobile menu is open
    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileOpen]);

    return (
        <>
            <nav
                ref={navRef}
                className={`navbar ${scrolled ? 'scrolled' : ''} ${mobileOpen ? 'menu-open' : ''}`}
                style={{ opacity: 0 }}
            >
                {/* Logo */}
                <a href="/" className="navbar-logo" aria-label="Zytrixon Home" style={{ display: 'flex', alignItems: 'center' }}>
                    <Logo style={{ height: '56px', width: 'auto', color: 'var(--zy-white)' }} />
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

                {/* Right side: theme toggle + CTA */}
                <div className="header-actions" style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    {/* Dark/Light Toggle */}
                    <button
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                        className="theme-toggle-btn"
                        style={{
                            background: 'none',
                            border: '1px solid var(--zy-gray-border)',
                            width: 38,
                            height: 38,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--zy-white)',
                            cursor: 'pointer',
                            transition: 'all 0.3s var(--zy-ease)',
                        }}
                    >
                        {!mounted || theme === 'dark' ? (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="5" />
                                <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
                                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                                <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
                                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                            </svg>
                        ) : (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                            </svg>
                        )}
                    </button>

                    {/* Call Button */}
                    <a
                        href="tel:+917049711475"
                        aria-label="Call us"
                        className="call-btn"
                        style={{
                            width: 38,
                            height: 38,
                            border: '1px solid var(--zy-gray-border)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--zy-white)',
                            textDecoration: 'none',
                            transition: 'all 0.3s var(--zy-ease)',
                        }}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                        </svg>
                    </a>

                    {/* Desktop CTA */}
                    <a href="#contact" className="magnetic-btn" style={{ padding: '10px 24px', fontSize: 12 }}>
                        Get a Quote
                        <svg className="btn-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>

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
            <div className={`mobile-nav-panel ${mobileOpen ? 'open' : ''}`} data-lenis-prevent="true">
                <div className="mobile-links-container">
                    {NAV_LINKS.map((link, idx) => (
                        <a 
                            key={link.href} 
                            href={link.href} 
                            className="mobile-nav-link"
                            onClick={() => setMobileOpen(false)}
                        >
                            <span className="link-num">0{idx + 1}.</span>
                            {link.label}
                        </a>
                    ))}
                </div>

                <div className="mobile-nav-footer">
                    <button
                        onClick={() => { toggleTheme(); }}
                        style={{
                            background: 'none',
                            border: '1px solid var(--zy-gray-border)',
                            padding: '10px 24px',
                            borderRadius: '30px',
                            color: 'var(--zy-white)',
                            fontFamily: 'var(--font-heading)',
                            fontSize: 12,
                            fontWeight: 600,
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 8,
                            transition: 'all 0.3s var(--zy-ease)',
                        }}
                    >
                        {!mounted || theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
                    </button>

                    <a
                        href="#contact"
                        className="magnetic-btn"
                        style={{ borderRadius: '30px', padding: '14px 40px', fontSize: 13 }}
                        onClick={() => setMobileOpen(false)}
                    >
                        Get a Quote
                    </a>

                    <div className="mobile-footer-contacts">
                        <a href="mailto:zytrixon@gmail.com">zytrixon@gmail.com</a>
                        <a href="tel:+917049711475">+91 70497 11475</a>
                    </div>
                </div>
            </div>
        </>
    );
}
