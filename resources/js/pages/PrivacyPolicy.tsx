import { Head } from '@inertiajs/react';
import CustomCursor from '@/components/landing/custom-cursor';
import Footer from '@/components/landing/footer';
import Navbar from '@/components/landing/navbar';
import { ThemeProvider } from '@/components/landing/theme-provider';
import TopBar from '@/components/landing/top-bar';

export default function PrivacyPolicy() {
    return (
        <ThemeProvider>
            <Head>
                <title>Privacy Policy | Zytrixon Tech</title>
                <meta
                    name="description"
                    content="Privacy Policy and data protection guidelines for Zytrixon Tech."
                />
            </Head>

            <CustomCursor />
            <TopBar />
            <Navbar />

            <main
                style={{
                    padding: '160px var(--zy-section-pad-x) 80px',
                    background: 'var(--zy-black)',
                }}
            >
                <div
                    style={{
                        maxWidth: '800px',
                        margin: '0 auto',
                        color: 'var(--zy-gray-text)',
                        lineHeight: 1.8,
                    }}
                >
                    <h1
                        style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: 'clamp(32px, 5vw, 48px)',
                            color: 'var(--zy-white)',
                            marginBottom: '16px',
                        }}
                    >
                        Privacy Policy
                    </h1>
                    <p style={{ marginBottom: '48px' }}>
                        Last Updated: {new Date().toLocaleDateString()}
                    </p>

                    <h2
                        style={{
                            color: 'var(--zy-white)',
                            fontSize: '24px',
                            marginTop: '40px',
                            marginBottom: '16px',
                        }}
                    >
                        1. Introduction
                    </h2>
                    <p style={{ marginBottom: '24px' }}>
                        At Zytrixon Tech, we respect your privacy and are
                        committed to protecting your personal data. This privacy
                        policy will inform you as to how we look after your
                        personal data when you visit our website and tell you
                        about your privacy rights.
                    </p>

                    <h2
                        style={{
                            color: 'var(--zy-white)',
                            fontSize: '24px',
                            marginTop: '40px',
                            marginBottom: '16px',
                        }}
                    >
                        2. Data We Collect
                    </h2>
                    <p style={{ marginBottom: '24px' }}>
                        We may collect, use, store and transfer different kinds
                        of personal data about you which we have grouped
                        together as follows:
                    </p>
                    <ul style={{ paddingLeft: '24px', marginBottom: '24px' }}>
                        <li>
                            <strong>Identity Data:</strong> includes first name,
                            last name, username or similar identifier.
                        </li>
                        <li>
                            <strong>Contact Data:</strong> includes email
                            address and telephone numbers.
                        </li>
                        <li>
                            <strong>Technical Data:</strong> includes internet
                            protocol (IP) address, your login data, browser type
                            and version.
                        </li>
                        <li>
                            <strong>Usage Data:</strong> includes information
                            about how you use our website, products and
                            services.
                        </li>
                    </ul>

                    <h2
                        style={{
                            color: 'var(--zy-white)',
                            fontSize: '24px',
                            marginTop: '40px',
                            marginBottom: '16px',
                        }}
                    >
                        3. How We Use Your Data
                    </h2>
                    <p style={{ marginBottom: '24px' }}>
                        We will only use your personal data when the law allows
                        us to. Most commonly, we will use your personal data in
                        the following circumstances:
                    </p>
                    <ul style={{ paddingLeft: '24px', marginBottom: '24px' }}>
                        <li>
                            Where we need to perform the contract we are about
                            to enter into or have entered into with you.
                        </li>
                        <li>
                            Where it is necessary for our legitimate interests
                            (or those of a third party) and your interests and
                            fundamental rights do not override those interests.
                        </li>
                        <li>
                            Where we need to comply with a legal obligation.
                        </li>
                    </ul>

                    <h2
                        style={{
                            color: 'var(--zy-white)',
                            fontSize: '24px',
                            marginTop: '40px',
                            marginBottom: '16px',
                        }}
                    >
                        4. Data Security
                    </h2>
                    <p style={{ marginBottom: '24px' }}>
                        We have put in place appropriate security measures to
                        prevent your personal data from being accidentally lost,
                        used or accessed in an unauthorized way, altered or
                        disclosed.
                    </p>

                    <h2
                        style={{
                            color: 'var(--zy-white)',
                            fontSize: '24px',
                            marginTop: '40px',
                            marginBottom: '16px',
                        }}
                    >
                        5. Contact Us
                    </h2>
                    <p style={{ marginBottom: '24px' }}>
                        If you have any questions about this privacy policy or
                        our privacy practices, please contact us at:
                        <br />
                        <br />
                        <strong>Email:</strong> zytrixon@gmail.com
                        <br />
                        <strong>Phone:</strong> +91 70497 11475
                        <br />
                        <strong>Address:</strong> Patna, Bihar - 800001
                    </p>
                </div>
            </main>

            <Footer />
        </ThemeProvider>
    );
}
