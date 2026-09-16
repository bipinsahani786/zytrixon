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
            <div className="max-w-3xl mx-auto px-6 sm:px-10 py-24 sm:py-32 leading-relaxed text-muted-foreground">
                <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
                    Terms & Conditions
                </h1>
                <p className="text-sm text-primary font-semibold mb-12">
                    Last Updated: {new Date().toLocaleDateString()}
                </p>

                <div className="space-y-10 text-sm sm:text-base leading-relaxed">
                    <section>
                        <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-4">
                            1. Agreement to Terms
                        </h2>
                        <p>
                            By accessing or using the website and software development services provided by Zytrixon Tech ("we", "our", or "us"), you agree to be bound by these Terms and Conditions. If you do not agree to all of these terms, please do not use our services.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-4">
                            2. Intellectual Property & Ownership
                        </h2>
                        <p className="mb-3">
                            Unless otherwise specified in a custom Master Services Agreement (MSA) or Statement of Work (SOW):
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong>Client Deliverables:</strong> Upon full project payment, custom client code, brand assets, and proprietary application data transfer fully to the client.
                            </li>
                            <li>
                                <strong>Zytrixon Core IP:</strong> Pre-existing frameworks, proprietary utility libraries, and generalized software modules remain the intellectual property of Zytrixon Tech.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-4">
                            3. Professional Services & Warranties
                        </h2>
                        <p>
                            We provide web development, mobile app engineering, AI automation, and IoT solutions with rigorous engineering standards. All project phases undergo thorough QA, testing, and security verification before production handover.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-4">
                            4. Limitation of Liability
                        </h2>
                        <p>
                            To the maximum extent permitted by applicable law, Zytrixon Tech shall not be liable for any indirect, incidental, or consequential damages resulting from third-party hosting failures, upstream API outages, or unauthorized client access.
                        </p>
                    </section>

                    <section className="bg-card border border-border rounded-2xl p-6 sm:p-8">
                        <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-3">
                            5. Questions & Legal Inquiries
                        </h2>
                        <p className="mb-4">
                            For any inquiries regarding our contractual terms or legal documentation, please contact our legal team:
                        </p>
                        <div className="space-y-1.5 text-sm">
                            <p><strong>Email:</strong> zytrixon@gmail.com</p>
                            <p><strong>Phone:</strong> +91 70497 11475</p>
                            <p><strong>Address:</strong> Samastipur, Bihar - 848101, India</p>
                        </div>
                    </section>
                </div>
            </div>
        </PublicLayout>
    );
}
