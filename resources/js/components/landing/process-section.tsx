import React, { useEffect, useState } from 'react';
import GradientCard from '@/components/ui/GradientCard';

const STEPS = [
    {
        number: '01',
        title: 'Discovery',
        description:
            'We dive deep into your business, industry, and goals. Through workshops and research, we map the landscape and uncover opportunities others miss.',
        color: '#3b82f6', // zy-blue
    },
    {
        number: '02',
        title: 'Design',
        description:
            'Wireframes evolve into high-fidelity prototypes. Every pixel is intentional — balancing aesthetics with usability to create interfaces that convert.',
        color: '#a855f7', // zy-purple
    },
    {
        number: '03',
        title: 'Architecture',
        description:
            'Before writing a line of code, we design scalable system architectures, design robust database schemas, and select the perfect tech stack.',
        color: '#ec4899', // zy-pink
    },
    {
        number: '04',
        title: 'Develop',
        description:
            'Clean, modular code built for scale. Agile sprints with transparent progress updates. We ship fast without cutting corners.',
        color: '#10b981', // emerald
    },
    {
        number: '05',
        title: 'QA & Testing',
        description:
            'Rigorous automated and manual testing. We hunt for bugs, optimize performance bottlenecks, and ensure military-grade security before launch.',
        color: '#f59e0b', // amber
    },
    {
        number: '06',
        title: 'Deploy',
        description:
            'Smooth deployment to production. Post-launch monitoring and iterative improvements ensure your software delivers lasting success.',
        color: '#6366f1', // indigo
    },
];

export default function ProcessSection() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 900);
        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Group by 3 for desktop snake layout
    const rows = [];

    for (let i = 0; i < STEPS.length; i += 3) {
        rows.push(STEPS.slice(i, i + 3));
    }

    return (
        <section
            className="zy-section"
            style={{ background: 'var(--zy-black)', position: 'relative' }}
        >
            <div
                className="zy-section-header"
                style={{ textAlign: 'center', marginBottom: 80 }}
            >
                <span className="zy-section-label">Our Process</span>
                <h2 className="zy-section-title">How We Work</h2>
            </div>

            <div
                style={{
                    maxWidth: 1200,
                    margin: '0 auto',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: isMobile ? 48 : 120,
                    padding: '0 20px',
                }}
            >
                {isMobile
                    ? // Mobile: standard vertical stack
                      STEPS.map((step, i) => (
                          <div key={i} style={{ position: 'relative' }}>
                              <GradientCard
                                  themeColor={step.color}
                                  style={{ height: '100%' }}
                              >
                                  <div
                                      style={{
                                          padding: 40,
                                          position: 'relative',
                                          overflow: 'hidden',
                                          height: '100%',
                                      }}
                                  >
                                      {/* Watermark Number */}
                                      <div
                                          style={{
                                              position: 'absolute',
                                              top: -10,
                                              right: -10,
                                              fontSize: 120,
                                              fontWeight: 900,
                                              lineHeight: 0.8,
                                              color: step.color,
                                              opacity: 0.05,
                                              userSelect: 'none',
                                          }}
                                      >
                                          {step.number}
                                      </div>
                                      <div
                                          style={{
                                              width: 48,
                                              height: 48,
                                              borderRadius: 12,
                                              background: `${step.color}20`,
                                              color: step.color,
                                              display: 'flex',
                                              alignItems: 'center',
                                              justifyContent: 'center',
                                              fontSize: 20,
                                              fontWeight: 800,
                                              marginBottom: 24,
                                              border: `1px solid ${step.color}40`,
                                          }}
                                      >
                                          {step.number}
                                      </div>
                                      <h3
                                          style={{
                                              fontFamily: 'var(--font-heading)',
                                              fontSize: 24,
                                              fontWeight: 700,
                                              color: 'var(--zy-white)',
                                              marginBottom: 16,
                                              position: 'relative',
                                              zIndex: 1,
                                          }}
                                      >
                                          {step.title}
                                      </h3>
                                      <p
                                          style={{
                                              fontSize: 15,
                                              lineHeight: 1.7,
                                              color: 'var(--zy-gray-text)',
                                          }}
                                      >
                                          {step.description}
                                      </p>
                                  </div>
                              </GradientCard>
                              {/* Down arrow for mobile */}
                              {i < STEPS.length - 1 && (
                                  <div
                                      style={{
                                          position: 'absolute',
                                          bottom: -36,
                                          left: '50%',
                                          transform: 'translateX(-50%)',
                                          color: step.color,
                                          opacity: 0.6,
                                          zIndex: 10,
                                      }}
                                  >
                                      <svg
                                          width="24"
                                          height="32"
                                          viewBox="0 0 24 32"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth="2"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeDasharray="4 4"
                                      >
                                          <line
                                              x1="12"
                                              y1="2"
                                              x2="12"
                                              y2="28"
                                          ></line>
                                          <polyline points="19 21 12 28 5 21"></polyline>
                                      </svg>
                                  </div>
                              )}
                          </div>
                      ))
                    : // Desktop: Snake Layout
                      rows.map((row, rowIndex) => (
                          <div
                              key={rowIndex}
                              style={{
                                  position: 'relative',
                                  display: 'flex',
                                  flexDirection: 'column',
                              }}
                          >
                              <div
                                  style={{
                                      display: 'flex',
                                      flexDirection:
                                          rowIndex % 2 === 0
                                              ? 'row'
                                              : 'row-reverse',
                                      gap: 100,
                                      position: 'relative',
                                  }}
                              >
                                  {row.map((step, colIndex) => (
                                      <div
                                          key={step.number}
                                          style={{
                                              flex: 1,
                                              position: 'relative',
                                          }}
                                      >
                                          <GradientCard
                                              themeColor={step.color}
                                              style={{ height: '100%' }}
                                          >
                                              <div
                                                  style={{
                                                      padding: 48,
                                                      height: '100%',
                                                      position: 'relative',
                                                      zIndex: 2,
                                                      overflow: 'hidden',
                                                  }}
                                              >
                                                  {/* Watermark Number */}
                                                  <div
                                                      style={{
                                                          position: 'absolute',
                                                          top: -10,
                                                          right: -10,
                                                          fontSize: 140,
                                                          fontWeight: 900,
                                                          lineHeight: 0.8,
                                                          color: step.color,
                                                          opacity: 0.05,
                                                          userSelect: 'none',
                                                      }}
                                                  >
                                                      {step.number}
                                                  </div>

                                                  <div
                                                      style={{
                                                          width: 48,
                                                          height: 48,
                                                          borderRadius: 12,
                                                          background: `${step.color}20`,
                                                          color: step.color,
                                                          display: 'flex',
                                                          alignItems: 'center',
                                                          justifyContent:
                                                              'center',
                                                          fontSize: 20,
                                                          fontWeight: 800,
                                                          marginBottom: 24,
                                                          border: `1px solid ${step.color}40`,
                                                          position: 'relative',
                                                          zIndex: 2,
                                                      }}
                                                  >
                                                      {step.number}
                                                  </div>
                                                  <h3
                                                      style={{
                                                          fontFamily:
                                                              'var(--font-heading)',
                                                          fontSize: 24,
                                                          fontWeight: 700,
                                                          color: 'var(--zy-white)',
                                                          marginBottom: 16,
                                                          position: 'relative',
                                                          zIndex: 1,
                                                      }}
                                                  >
                                                      {step.title}
                                                  </h3>
                                                  <p
                                                      style={{
                                                          fontSize: 15,
                                                          lineHeight: 1.7,
                                                          color: 'var(--zy-gray-text)',
                                                          position: 'relative',
                                                          zIndex: 1,
                                                      }}
                                                  >
                                                      {step.description}
                                                  </p>
                                              </div>
                                          </GradientCard>

                                          {/* Horizontal Arrow between cards in the same row */}
                                          {colIndex < row.length - 1 && (
                                              <div
                                                  style={{
                                                      position: 'absolute',
                                                      top: '50%',
                                                      [rowIndex % 2 === 0
                                                          ? 'right'
                                                          : 'left']: -80,
                                                      transform: `translateY(-50%) ${rowIndex % 2 !== 0 ? 'scaleX(-1)' : ''}`,
                                                      zIndex: 1,
                                                      width: 60,
                                                      overflow: 'hidden',
                                                  }}
                                              >
                                                  <svg
                                                      width="60"
                                                      height="24"
                                                      viewBox="0 0 60 24"
                                                      fill="none"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                  >
                                                      <path
                                                          d="M0 12h54M46 4l8 8-8 8"
                                                          stroke={step.color}
                                                          strokeWidth="2"
                                                          strokeDasharray="6 6"
                                                          strokeLinecap="round"
                                                          strokeLinejoin="round"
                                                          style={{
                                                              opacity: 0.7,
                                                          }}
                                                      />
                                                  </svg>
                                              </div>
                                          )}
                                      </div>
                                  ))}
                              </div>

                              {/* Down arrow connecting rows */}
                              {rowIndex < rows.length - 1 && (
                                  <div
                                      style={{
                                          position: 'absolute',
                                          bottom: -100,
                                          [rowIndex % 2 === 0
                                              ? 'right'
                                              : 'left']: '16%',
                                          zIndex: 1,
                                      }}
                                  >
                                      <svg
                                          width="24"
                                          height="80"
                                          viewBox="0 0 24 80"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                      >
                                          <path
                                              d="M12 0v76M4 68l8 8 8-8"
                                              stroke={row[row.length - 1].color}
                                              strokeWidth="2"
                                              strokeDasharray="6 6"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              style={{ opacity: 0.7 }}
                                          />
                                      </svg>
                                  </div>
                              )}
                          </div>
                      ))}
            </div>
        </section>
    );
}
