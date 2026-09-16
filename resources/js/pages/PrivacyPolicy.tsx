import PublicLayout from '@/components/layouts/PublicLayout';

export default function PrivacyPolicy() {
    return (
        <PublicLayout
            seo={{
                title: 'Privacy Policy | Zytrixon Tech',
                description:
                    'Privacy Policy and data protection guidelines for Zytrixon Tech.',
            }}
            hideFooterCTA={true}
        >
            <div className="mx-auto max-w-3xl px-6 py-24 leading-relaxed text-muted-foreground sm:px-10 sm:py-32">
                <h1 className="mb-4 font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                    Privacy Policy
                </h1>
                <p className="mb-12 text-sm font-semibold text-primary">
                    Last Updated: {new Date().toLocaleDateString()}
                </p>

                <div className="space-y-10 text-sm leading-relaxed sm:text-base">
                    <section>
                        <h2 className="mb-4 font-heading text-xl font-bold text-foreground sm:text-2xl">
                            1. Introduction
                        </h2>
                        <p>
                            At Zytrixon Tech ("we", "our", or "us"), we respect
                            your privacy and are committed to protecting your
                            personal data. This privacy policy explains how we
                            collect, use, disclose, and safeguard your
                            information when you visit our website or use our
                            software engineering, web development, mobile app,
                            and IoT services.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-4 font-heading text-xl font-bold text-foreground sm:text-2xl">
                            2. Information We Collect
                        </h2>
                        <p className="mb-3">
                            We may collect several types of information from and
                            about users of our services, including:
                        </p>
                        <ul className="list-disc space-y-2 pl-6">
                            <li>
                                <strong>Contact Information:</strong> Name,
                                email address, phone number, and physical
                                billing or mailing address.
                            </li>
                            <li>
                                <strong>Project Information:</strong>{' '}
                                Specifications, requirements, wireframes, and
                                digital assets shared for quotation and
                                development.
                            </li>
                            <li>
                                <strong>Technical Data:</strong> IP address,
                                browser type, operating system, and interaction
                                logs collected automatically via secure
                                telemetry.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="mb-4 font-heading text-xl font-bold text-foreground sm:text-2xl">
                            3. How We Use Your Information
                        </h2>
                        <p className="mb-3">
                            We use collected data strictly for legitimate
                            business purposes:
                        </p>
                        <ul className="list-disc space-y-2 pl-6">
                            <li>
                                To fulfill software development contracts and
                                provide ongoing technical support.
                            </li>
                            <li>
                                To respond to service inquiries, provide
                                accurate proposals, and schedule architecture
                                discovery calls.
                            </li>
                            <li>
                                To analyze website performance and ensure
                                optimal security and uptime standards.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="mb-4 font-heading text-xl font-bold text-foreground sm:text-2xl">
                            4. Data Security & Confidentiality
                        </h2>
                        <p>
                            We implement industry-standard cryptographic
                            encryption, secure SSL/TLS channels, and enterprise
                            access restrictions. We never sell, rent, or trade
                            your personal or project data to third-party
                            advertisers.
                        </p>
                    </section>

                    <section className="rounded-2xl border border-border bg-card p-6 sm:p-8">
                        <h2 className="mb-3 font-heading text-xl font-bold text-foreground sm:text-2xl">
                            5. Contact Us
                        </h2>
                        <p className="mb-4">
                            If you have questions regarding this privacy policy
                            or our data governance practices, please reach out
                            directly:
                        </p>
                        <div className="space-y-1.5 text-sm">
                            <p>
                                <strong>Email:</strong> zytrixon@gmail.com
                            </p>
                            <p>
                                <strong>Phone:</strong> +91 70497 11475
                            </p>
                            <p>
                                <strong>Address:</strong> Samastipur, Bihar -
                                848101, India
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </PublicLayout>
    );
}
