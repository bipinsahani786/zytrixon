import React, { useEffect, useState } from 'react';
import { ProjectItem } from '@/lib/projects-data';
import { useTheme } from '@/components/landing/theme-provider';

interface ProjectSubNavProps {
    project: ProjectItem;
}

export default function ProjectSubNav({ project }: ProjectSubNavProps) {
    const { theme } = useTheme();
    const isLight = theme === 'light';

    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('overview');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            const sections = ['overview', 'transformation', 'theatre', 'gallery', 'architecture'];
            for (const sectionId of sections) {
                const el = document.getElementById(sectionId);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 200 && rect.bottom >= 200) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!scrolled) return null;

    const navItems = [
        { id: 'overview', label: '01 Overview' },
        { id: 'transformation', label: '02 Transformation' },
        { id: 'theatre', label: '03 Demo Theatre' },
        { id: 'gallery', label: '04 Screenshots' },
        { id: 'architecture', label: '05 Architecture' },
    ];

    return (
        <nav
            aria-label="Case Study Navigation"
            style={{
                position: 'fixed',
                bottom: '28px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 9999,
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 14px',
                background: isLight ? 'rgba(255, 255, 255, 0.92)' : 'rgba(10, 10, 12, 0.88)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderRadius: '40px',
                border: isLight ? '1px solid rgba(0, 0, 0, 0.1)' : '1px solid rgba(255, 255, 255, 0.12)',
                boxShadow: isLight
                    ? '0 15px 40px rgba(0,0,0,0.12), 0 0 20px rgba(0,0,0,0.06)'
                    : '0 20px 50px rgba(0,0,0,0.8), 0 0 30px rgba(0,0,0,0.6)',
                maxWidth: '94vw',
                overflowX: 'auto',
                whiteSpace: 'nowrap',
                transition: 'background 0.3s ease, border-color 0.3s ease',
            }}
        >
            {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        style={{
                            padding: '8px 16px',
                            borderRadius: '30px',
                            fontSize: '12px',
                            fontWeight: 600,
                            letterSpacing: '0.04em',
                            textDecoration: 'none',
                            color: isActive
                                ? '#000000'
                                : isLight
                                  ? '#555555'
                                  : '#888888',
                            background: isActive ? project.accentColor : 'transparent',
                            transition: 'all 0.25s ease',
                        }}
                    >
                        {item.label}
                    </a>
                );
            })}

            <div
                style={{
                    width: '1px',
                    height: '18px',
                    background: isLight ? 'rgba(0,0,0,0.12)' : 'rgba(255,255,255,0.15)',
                    margin: '0 4px',
                }}
            />

            <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 18px',
                    borderRadius: '30px',
                    fontSize: '12px',
                    fontWeight: 700,
                    textDecoration: 'none',
                    color: isLight ? '#000000' : '#ffffff',
                    background: isLight ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.08)',
                    border: isLight ? '1px solid rgba(0,0,0,0.1)' : '1px solid rgba(255,255,255,0.15)',
                    transition: 'all 0.2s ease',
                }}
            >
                <span>Live Demo</span>
                <span style={{ color: project.accentColor }}>↗</span>
            </a>
        </nav>
    );
}
