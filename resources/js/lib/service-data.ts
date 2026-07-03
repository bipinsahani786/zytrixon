import React from 'react';

export function getServiceConfig(slug: string) {
    switch (slug) {
        case 'ai-automation':
            return {
                themeColor: '#10b981', // Emerald Green
                hero: {
                    modelColor: '#10b981',
                    badge: 'Next-Gen AI'
                },
                valueProps: [
                    { title: 'Automated Workflows', desc: 'Eliminate 90% of manual data entry with autonomous agents.', icon: 'robot' },
                    { title: 'Predictive Analytics', desc: 'Forecast trends with 99% accuracy using custom ML models.', icon: 'brain' },
                    { title: '24/7 Availability', desc: 'LLM-powered chatbots that resolve customer queries instantly.', icon: 'clock' },
                    { title: 'Cognitive Search', desc: 'Find internal documents instantly using vector-based semantic search.', icon: 'search' },
                    { title: 'Dynamic Pricing', desc: 'Adjust pricing automatically based on real-time supply and demand.', icon: 'dollar-sign' },
                    { title: 'Fraud Detection', desc: 'Identify anomalies in milliseconds to protect your business assets.', icon: 'shield' }
                ],
                stats: [
                    { value: '400%', label: 'Efficiency Increase' },
                    { value: '24/7', label: 'Autonomous Operation' },
                    { value: '99%', label: 'Error Reduction' }
                ],
                architecture: {
                    title: 'Neural Network Flow',
                    steps: ['Data Ingestion', 'Vector Embeddings', 'LLM Processing', 'Action Execution']
                },
                methodology: {
                    title: 'Model Training Lifecycle',
                    desc: 'We follow a rigorous machine learning pipeline to ensure hallucination-free outputs.',
                    steps: [
                        { title: 'Data Cleaning', desc: 'Sanitizing and formatting raw datasets for optimal ingestion.' },
                        { title: 'Embedding Gen', desc: 'Creating high-dimensional vector representations of data.' },
                        { title: 'Prompt Tuning', desc: 'Iteratively refining prompts to reduce hallucinations.' },
                        { title: 'RLHF Feedback', desc: 'Human-in-the-loop reinforcement learning to align AI behavior.' }
                    ]
                },
                qa: {
                    title: 'Model Validation',
                    items: ['Bias Testing', 'Edge Case Simulation', 'Hallucination Checks', 'Performance Benchmarking']
                },
                security: {
                    badges: ['SOC 2 Type II', 'GDPR', 'ISO 27001', 'Private VPCs']
                },
                integrations: [
                    { name: 'OpenAI', type: 'LLM' },
                    { name: 'Pinecone', type: 'Vector DB' },
                    { name: 'LangChain', type: 'Framework' },
                    { name: 'HuggingFace', type: 'Models' }
                ],
                process: [
                    { title: 'Data Audit', desc: 'Evaluating your existing data structures.' },
                    { title: 'Model Selection', desc: 'Choosing the right LLM or neural network.' },
                    { title: 'Training & Fine-tuning', desc: 'Adapting the model to your specific domain.' },
                    { title: 'Deployment', desc: 'Releasing the AI agents into production.' },
                    { title: 'Monitoring', desc: 'Continuous learning and RLHF.' }
                ],
                support: [
                    { title: 'Model Retraining', desc: 'Periodic updates to keep the AI accurate.', icon: 'activity' },
                    { title: 'Token Optimization', desc: 'Reducing API costs through efficient prompting.', icon: 'dollar-sign' },
                    { title: 'Agent Scaling', desc: 'Adding new capabilities as your business grows.', icon: 'maximize' }
                ]
            };
        case 'app-development':
            return {
                themeColor: '#8b5cf6', // Purple
                hero: {
                    modelColor: '#8b5cf6',
                    badge: 'Mobile First'
                },
                valueProps: [
                    { title: 'Native Performance', desc: 'Fluid 60fps animations and lightning-fast load times.', icon: 'smartphone' },
                    { title: 'Cross-Platform', desc: 'One codebase for iOS, Android, and Web using React Native.', icon: 'layers' },
                    { title: 'Offline First', desc: 'Seamless experience even with zero network connectivity.', icon: 'wifi-off' },
                    { title: 'Biometric Security', desc: 'FaceID and fingerprint integration out of the box.', icon: 'fingerprint' },
                    { title: 'Push Notifications', desc: 'Engage users instantly with targeted local and push alerts.', icon: 'bell' },
                    { title: 'Deep Linking', desc: 'Seamlessly transition users from web to native app flows.', icon: 'link' }
                ],
                stats: [
                    { value: '4.9', label: 'Average App Store Rating' },
                    { value: '10M+', label: 'Active Installs' },
                    { value: '60fps', label: 'Native Performance' }
                ],
                architecture: {
                    title: 'Mobile Architecture',
                    steps: ['React Native UI', 'Redux State', 'GraphQL Layer', 'Native Modules']
                },
                methodology: {
                    title: 'Agile Mobile Delivery',
                    desc: 'Iterative sprints focusing on user feedback and rapid prototyping.',
                    steps: [
                        { title: 'Sprint Planning', desc: 'Aligning app features with core business objectives.' },
                        { title: 'Daily Standups', desc: 'Syncing cross-functional teams to eliminate blockers.' },
                        { title: 'Continuous Builds', desc: 'Automated CI/CD pipelines deploying directly to TestFlight.' },
                        { title: 'Sprint Retrospective', desc: 'Analyzing user telemetry to improve the next iteration.' }
                    ]
                },
                qa: {
                    title: 'Device Matrix Testing',
                    items: ['Cross-Device Testing', 'Battery Drain Analysis', 'Network Throttling', 'Accessibility Audits']
                },
                security: {
                    badges: ['App Store Compliant', 'Biometric Auth', 'Data Encryption', 'OWASP Mobile']
                },
                integrations: [
                    { name: 'Apple Pay', type: 'Payments' },
                    { name: 'Firebase', type: 'Backend' },
                    { name: 'Sentry', type: 'Monitoring' },
                    { name: 'Twilio', type: 'Communication' }
                ],
                process: [
                    { title: 'UX Research', desc: 'Mapping user journeys and wireframing.' },
                    { title: 'Prototyping', desc: 'Interactive designs using Figma.' },
                    { title: 'Development', desc: 'Building native and cross-platform code.' },
                    { title: 'Beta Testing', desc: 'TestFlight and Play Console rollouts.' },
                    { title: 'Store Launch', desc: 'ASO and publishing.' }
                ],
                support: [
                    { title: 'OS Updates', desc: 'Ensuring compatibility with new iOS/Android versions.', icon: 'smartphone' },
                    { title: 'Crash Analytics', desc: '24/7 monitoring of app stability.', icon: 'activity' },
                    { title: 'Feature Rollouts', desc: 'Over-the-air updates for immediate bug fixes.', icon: 'shield' }
                ]
            };
        case 'digital-marketing':
        case 'seo-digital-marketing':
            return {
                themeColor: '#f59e0b', // Amber/Orange
                hero: {
                    modelColor: '#f59e0b',
                    badge: 'Data-Driven Growth'
                },
                valueProps: [
                    { title: 'Hyper-Targeting', desc: 'Reach your exact ideal customer profile with precision.', icon: 'target' },
                    { title: 'Conversion Optimization', desc: 'Turn visitors into paying customers seamlessly.', icon: 'trending-up' },
                    { title: 'ROI Tracking', desc: 'Transparent reporting down to the exact dollar.', icon: 'pie-chart' },
                    { title: 'Omnichannel Approach', desc: 'Engage leads across email, social, and search networks.', icon: 'globe' },
                    { title: 'A/B Testing', desc: 'Continuous testing of creatives and copy to maximize CTR.', icon: 'split' },
                    { title: 'Retargeting Loops', desc: 'Recapture lost leads with highly targeted follow-up campaigns.', icon: 'repeat' }
                ],
                stats: [
                    { value: '300%', label: 'Average ROI' },
                    { value: '50M+', label: 'Impressions Generated' },
                    { value: '#1', label: 'Page Rankings' }
                ],
                architecture: {
                    title: 'Marketing Funnel',
                    steps: ['Awareness', 'Lead Capture', 'Nurturing Sequence', 'Conversion']
                },
                methodology: {
                    title: 'Growth Hacking',
                    desc: 'Rapid experimentation across marketing channels to identify the most efficient ways to grow a business.',
                    steps: [
                        { title: 'Hypothesis Gen', desc: 'Brainstorming creative angles and audience segments.' },
                        { title: 'Micro-Testing', desc: 'Running low-budget A/B tests to validate hypotheses.' },
                        { title: 'Data Analysis', desc: 'Reviewing CTR, CPC, and ROAS metrics to find winners.' },
                        { title: 'Aggressive Scaling', desc: 'Injecting budget into proven, high-converting campaigns.' }
                    ]
                },
                qa: {
                    title: 'Campaign Validation',
                    items: [
                        'Tracking Pixel Verification',
                        'A/B Test Statistical Significance',
                        'Cross-browser Rendering Checks',
                        'Manual Lead QA'
                    ]
                },
                security: {
                    badges: ['GDPR Compliant', 'CCPA Compliant', 'CAN-SPAM', 'Cookie Consent']
                },
                integrations: [
                    { name: 'HubSpot', type: 'CRM' },
                    { name: 'Google Ads', type: 'PPC' },
                    { name: 'Meta', type: 'Social' },
                    { name: 'Analytics', type: 'Tracking' }
                ],
                process: [
                    { title: 'Market Audit', desc: 'Analyzing competitors and keyword gaps.' },
                    { title: 'Strategy Setup', desc: 'Defining channels and ad spend budgets.' },
                    { title: 'Asset Creation', desc: 'Designing ad creatives and writing copy.' },
                    { title: 'Campaign Launch', desc: 'Going live across targeted platforms.' },
                    { title: 'Optimization', desc: 'Scaling winners and pausing losers.' }
                ],
                support: [
                    { title: 'Campaign Optimization', desc: 'Daily bid adjustments and keyword pruning to maximize ROI.', icon: 'trending-up' },
                    { title: 'Creative Refresh', desc: 'Designing new ad variants to prevent audience ad-fatigue.', icon: 'edit' },
                    { title: 'Monthly Strategy', desc: 'Deep-dive calls to review analytics and plan the next quarter.', icon: 'users' }
                ]
            };
        case 'iot-solutions':
            return {
                themeColor: '#06b6d4', // Cyan
                hero: {
                    modelColor: '#06b6d4',
                    badge: 'Connected Devices'
                },
                valueProps: [
                    { title: 'Real-Time Telemetry', desc: 'Sub-millisecond data streaming from edge to cloud.', icon: 'activity' },
                    { title: 'Edge Computing', desc: 'Process data locally to save bandwidth and reduce latency.', icon: 'cpu' },
                    { title: 'Over-The-Air (OTA)', desc: 'Seamlessly update millions of firmware devices instantly.', icon: 'wifi' },
                    { title: 'Energy Efficient', desc: 'Optimized protocols (MQTT, CoAP) to maximize battery life.', icon: 'battery' },
                    { title: 'Mesh Networking', desc: 'Self-healing device networks that adapt to node failures.', icon: 'share-2' },
                    { title: 'Hardware Agnostic', desc: 'Compatible with ESP32, Raspberry Pi, ARM, and custom PCBs.', icon: 'hard-drive' }
                ],
                stats: [
                    { value: '1M+', label: 'Devices Managed' },
                    { value: '<10ms', label: 'Telemetry Latency' },
                    { value: '99.99%', label: 'Uptime Reliability' }
                ],
                architecture: {
                    title: 'IoT Topology',
                    steps: ['Edge Sensors', 'IoT Gateway', 'Cloud Message Broker', 'Data Lake']
                },
                methodology: {
                    title: 'Hardware-Software Co-design',
                    desc: 'Parallel development of firmware and cloud infrastructure for perfect harmony.',
                    steps: [
                        { title: 'Breadboarding', desc: 'Initial proof-of-concept using off-the-shelf development kits.' },
                        { title: 'Firmware Stubbing', desc: 'Writing mock data generators for the cloud team to use.' },
                        { title: 'Custom PCB Routing', desc: 'Designing the final integrated circuit board footprint.' },
                        { title: 'Integration Sprints', desc: 'Fusing the final hardware with the production cloud endpoints.' }
                    ]
                },
                qa: {
                    title: 'Hardware Validation',
                    items: ['Stress Testing', 'Thermal Profiling', 'Connectivity Drops', 'Power Consumption']
                },
                security: {
                    badges: ['End-to-End Encryption', 'X.509 Certificates', 'Secure Boot', 'MQTT-TLS']
                },
                integrations: [
                    { name: 'AWS IoT', type: 'Broker' },
                    { name: 'Azure IoT', type: 'Cloud' },
                    { name: 'ThingsBoard', type: 'Dashboard' },
                    { name: 'LoRaWAN', type: 'Network' }
                ],
                process: [
                    { title: 'Hardware Scoping', desc: 'Selecting sensors and microcontrollers.' },
                    { title: 'Firmware Dev', desc: 'Writing embedded C/C++ or Rust.' },
                    { title: 'Cloud Setup', desc: 'Configuring MQTT brokers and data pipelines.' },
                    { title: 'Field Testing', desc: 'Deploying beta devices in real environments.' },
                    { title: 'Mass Production', desc: 'Scaling deployment and OTA systems.' }
                ],
                support: [
                    { title: 'Firmware Patches', desc: 'Security updates deployed OTA.', icon: 'shield' },
                    { title: 'Fleet Monitoring', desc: 'Tracking battery health and connectivity.', icon: 'battery' },
                    { title: 'Predictive Maintenance', desc: 'AI alerts before hardware fails.', icon: 'brain' }
                ]
            };
        case 'custom-software':
            return {
                themeColor: '#ec4899', // Pink
                hero: {
                    modelColor: '#ec4899',
                    badge: 'Enterprise Grade'
                },
                valueProps: [
                    { title: 'Bespoke Architecture', desc: 'Built from the ground up for your exact workflows.', icon: 'box' },
                    { title: 'Legacy Integration', desc: 'Seamlessly connect with your old AS400 or SAP systems.', icon: 'link' },
                    { title: 'Infinite Scalability', desc: 'Microservices designed to handle billions of rows.', icon: 'maximize' },
                    { title: 'Role-Based Access', desc: 'Granular permissions and audit logs for maximum security.', icon: 'users' },
                    { title: 'Automated CI/CD', desc: 'Ship new features faster without breaking production.', icon: 'git-commit' },
                    { title: 'Data Migration', desc: 'Zero data-loss migrations from unstructured legacy databases.', icon: 'database' }
                ],
                stats: [
                    { value: '500M+', label: 'Rows Processed Daily' },
                    { value: '0', label: 'Vendor Lock-in' },
                    { value: '100%', label: 'IP Ownership' }
                ],
                architecture: {
                    title: 'Enterprise Architecture',
                    steps: ['Load Balancer', 'API Gateway', 'Microservices Cluster', 'Distributed DB']
                },
                methodology: {
                    title: 'Domain-Driven Design',
                    desc: 'We model the software precisely after your real-world business domains.',
                    steps: [
                        { title: 'Event Storming', desc: 'Mapping out every business event and state transition.' },
                        { title: 'Context Mapping', desc: 'Defining bounded contexts to separate microservices cleanly.' },
                        { title: 'Ubiquitous Language', desc: 'Ensuring developers and stakeholders use the exact same terminology.' },
                        { title: 'TDD Approach', desc: 'Test-driven development guaranteeing flawless domain logic.' }
                    ]
                },
                qa: {
                    title: 'Enterprise QA',
                    items: [
                        'Unit Testing: 98% Coverage',
                        'Integration & Contract Testing',
                        'Chaos Engineering',
                        'UAT with Stakeholders'
                    ]
                },
                security: {
                    badges: ['SOC 2 Type II', 'HIPAA', 'PCI-DSS', 'ISO 27001']
                },
                integrations: [
                    { name: 'SAP', type: 'ERP' },
                    { name: 'Salesforce', type: 'CRM' },
                    { name: 'Oracle', type: 'Database' },
                    { name: 'Okta', type: 'SSO' }
                ],
                process: [
                    { title: 'Discovery', desc: 'Deep dive into your business operations.' },
                    { title: 'Architecture Planning', desc: 'Designing the distributed system.' },
                    { title: 'Sprints', desc: 'Iterative bi-weekly deliveries.' },
                    { title: 'UAT', desc: 'User acceptance testing with stakeholders.' },
                    { title: 'Phased Rollout', desc: 'Gradual migration to the new system.' }
                ],
                support: [
                    { title: 'Dedicated DevOps', desc: '24/7 on-call engineers.', icon: 'server' },
                    { title: 'SLA Guarantees', desc: 'Financially backed uptime.', icon: 'shield' },
                    { title: 'Feature Expansion', desc: 'Continuous development of new modules.', icon: 'maximize' }
                ]
            };
        case 'web-development':
        default:
            return {
                themeColor: '#6366f1', // Indigo
                hero: {
                    modelColor: '#6366f1',
                    badge: 'Scalable Platforms'
                },
                valueProps: [
                    { title: 'Lightning Fast', desc: 'Sub-second load times utilizing Edge caching and SSR.', icon: 'zap' },
                    { title: 'SEO Optimized', desc: 'Perfect Lighthouse scores to dominate Google rankings.', icon: 'search' },
                    { title: 'Responsive Design', desc: 'Pixel-perfect UI that works flawlessly on every device.', icon: 'monitor' },
                    { title: 'Headless CMS', desc: 'Easily manage content via Sanity, Strapi, or Contentful.', icon: 'edit' },
                    { title: 'Accessibility (a11y)', desc: 'WCAG 2.1 AA compliant, ensuring access for all users.', icon: 'eye' },
                    { title: 'Serverless APIs', desc: 'Auto-scaling endpoints that cost $0 when not in use.', icon: 'server' }
                ],
                stats: [
                    { value: '100', label: 'Lighthouse Score' },
                    { value: '99.9%', label: 'Uptime SLA' },
                    { value: '<1s', label: 'Load Time' }
                ],
                architecture: {
                    title: 'Modern Web Stack',
                    steps: ['Next.js Client', 'CDN Edge Network', 'Serverless API', 'PostgreSQL DB']
                },
                methodology: {
                    title: 'Agile Web Development',
                    desc: 'Iterative sprints, CI/CD pipelines, and rigorous code reviews.',
                    steps: [
                        { title: 'Sprint Planning', desc: 'Aligning web features with the upcoming two-week goals.' },
                        { title: 'Component Driven', desc: 'Building isolated, reusable React components in Storybook.' },
                        { title: 'Peer Code Reviews', desc: 'Mandatory reviews by senior engineers before any merge.' },
                        { title: 'Automated Deploy', desc: 'Zero-downtime deployments via Vercel Edge networks.' }
                    ]
                },
                qa: {
                    title: 'Web QA Standards',
                    items: ['Cross-Browser Testing', 'Responsive Audits', 'Core Web Vitals', 'Cypress E2E']
                },
                security: {
                    badges: ['SSL/TLS 1.3', 'WAF Protection', 'CORS Configured', 'DDoS Mitigation']
                },
                integrations: [
                    { name: 'Stripe', type: 'Payments' },
                    { name: 'Vercel', type: 'Hosting' },
                    { name: 'AWS', type: 'Infrastructure' },
                    { name: 'SendGrid', type: 'Email' }
                ],
                process: [
                    { title: 'Wireframing', desc: 'Creating the structural blueprint.' },
                    { title: 'UI/UX Design', desc: 'High-fidelity mockups in Figma.' },
                    { title: 'Frontend Dev', desc: 'Building responsive React components.' },
                    { title: 'Backend Dev', desc: 'Creating scalable APIs.' },
                    { title: 'Deployment', desc: 'Going live on Vercel/AWS.' }
                ],
                support: [
                    { title: 'Uptime Monitoring', desc: 'Automated pings every 60 seconds.', icon: 'activity' },
                    { title: 'Dependency Updates', desc: 'Keeping NPM packages secure.', icon: 'shield' },
                    { title: 'Performance Tuning', desc: 'Continuous optimization.', icon: 'zap' }
                ]
            };
    }
}
