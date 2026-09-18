import React from 'react';
import { ProjectItem } from '@/lib/projects-data';

interface ProjectSpecsBarProps {
    project: ProjectItem;
}

export default function ProjectSpecsBar({ project }: ProjectSpecsBarProps) {
    return (
        <section
            style={{
                padding: '28px var(--zy-section-pad-x, 24px)',
                background: '#09090b',
                borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
            }}
        >
            <div
                style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                    gap: '24px',
                }}
            >
                <div>
                    <div style={{ fontSize: '11px', textTransform: 'uppercase', color: '#888888', letterSpacing: '0.12em', fontWeight: 700 }}>Client Organization</div>
                    <div style={{ fontSize: '16px', fontWeight: 700, color: '#ffffff', marginTop: '6px' }}>{project.client}</div>
                </div>
                <div>
                    <div style={{ fontSize: '11px', textTransform: 'uppercase', color: '#888888', letterSpacing: '0.12em', fontWeight: 700 }}>Industry Vertical</div>
                    <div style={{ fontSize: '16px', fontWeight: 700, color: '#ffffff', marginTop: '6px' }}>{project.industry}</div>
                </div>
                <div>
                    <div style={{ fontSize: '11px', textTransform: 'uppercase', color: '#888888', letterSpacing: '0.12em', fontWeight: 700 }}>Timeline & Delivery</div>
                    <div style={{ fontSize: '16px', fontWeight: 700, color: '#ffffff', marginTop: '6px' }}>{project.duration} ({project.year})</div>
                </div>
                <div>
                    <div style={{ fontSize: '11px', textTransform: 'uppercase', color: '#888888', letterSpacing: '0.12em', fontWeight: 700 }}>Delivered Services</div>
                    <div style={{ fontSize: '16px', fontWeight: 700, color: project.accentColor, marginTop: '6px' }}>Full-Stack & Cloud System</div>
                </div>
            </div>
        </section>
    );
}
