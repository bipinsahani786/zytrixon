import PublicLayout from '@/components/layouts/PublicLayout';

export default function TermsConditions() {
    return (
        <PublicLayout
            seo={{
                title: 'Terms & Conditions | Zytrixon Tech',
                description:
                    'Terms and Conditions of using Zytrixon Tech services.',
            }}
            hideFooterCTA={true}
        >
            <div className="mx-auto max-w-3xl px-6 py-24 leading-relaxed text-muted-foreground sm:px-10 sm:py-32">
                <h1 className="mb-4 font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                    Terms & Conditions
                </h1>
                <p className="mb-12 text-sm font-semibold text-primary">
                    Last Updated: {new Date().toLocaleDateString()}
                </p>

                <div className="space-y-10 text-sm leading-relaxed sm:text-base">
                    <section>
                        <h2 className="mb-4 font-heading text-xl font-bold text-foreground sm:text-2xl">
                            1. Agreement to Terms
                        </h2>
                        <p>
                            By accessing or using the website and software
                            development services provided by Zytrixon Tech
                            ("we", "our", or "us"), you agree to be bound by
                            these Terms and Conditions. If you do not agree to
                            all of these terms, please do not use our services.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-4 font-heading text-xl font-bold text-foreground sm:text-2xl">
                            2. Intellectual Property & Ownership
                        </h2>
                        <p className="mb-3">
                            Unless otherwise specified in a custom Master
                            Services Agreement (MSA) or Statement of Work (SOW):
                        </p>
                        <ul className="list-disc space-y-2 pl-6">
                            <li>
                                <strong>Client Deliverables:</strong> Upon full
                                project payment, custom client code, brand
                                assets, and proprietary application data
                                transfer fully to the client.
                            </li>
                            <li>
                                <strong>Zytrixon Core IP:</strong> Pre-existing
                                frameworks, proprietary utility libraries, and
                                generalized software modules remain the
                                intellectual property of Zytrixon Tech.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="mb-4 font-heading text-xl font-bold text-foreground sm:text-2xl">
                            3. Professional Services & Warranties
                        </h2>
                        <p>
                            We provide web development, mobile app engineering,
                            AI automation, and IoT solutions with rigorous
                            engineering standards. All project phases undergo
                            thorough QA, testing, and security verification
                            before production handover.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-4 font-heading text-xl font-bold text-foreground sm:text-2xl">
                            4. Limitation of Liability
                        </h2>
                        <p>
                            To the maximum extent permitted by applicable law,
                            Zytrixon Tech shall not be liable for any indirect,
                            incidental, or consequential damages resulting from
                            third-party hosting failures, upstream API outages,
                            or unauthorized client access.
                        </p>
                    </section>

                    <section className="rounded-2xl border border-border bg-card p-6 sm:p-8">
                        <h2 className="mb-3 font-heading text-xl font-bold text-foreground sm:text-2xl">
                            5. Questions & Legal Inquiries
                        </h2>
                        <p className="mb-4">
                            For any inquiries regarding our contractual terms or
                            legal documentation, please contact our legal team:
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
