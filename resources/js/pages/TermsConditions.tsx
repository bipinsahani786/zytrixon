import { Head } from '@inertiajs/react';
import { ThemeProvider } from '@/components/landing/theme-provider';
import CustomCursor from '@/components/landing/custom-cursor';
import TopBar from '@/components/landing/top-bar';
import Navbar from '@/components/landing/navbar';
import Footer from '@/components/landing/footer';

export default function TermsConditions() {
    return (
        <ThemeProvider>
            <Head>
                <title>Terms & Conditions | Zytrixon Tech</title>
                <meta name="description" content="Terms and Conditions of using Zytrixon Tech services." />
            </Head>

            <CustomCursor />
            <TopBar />
            <Navbar />

            <main style={{ padding: '160px var(--zy-section-pad-x) 80px', background: 'var(--zy-black)' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--zy-gray-text)', lineHeight: 1.8 }}>
                    <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(32px, 5vw, 48px)', color: 'var(--zy-white)', marginBottom: '16px' }}>
                        Terms & Conditions
                    </h1>
                    <p style={{ marginBottom: '48px' }}>Last Updated: {new Date().toLocaleDateString()}</p>
                    
                    <h2 style={{ color: 'var(--zy-white)', fontSize: '24px', marginTop: '40px', marginBottom: '16px' }}>1. Acceptance of Terms</h2>
                    <p style={{ marginBottom: '24px' }}>
                        By accessing and using the website and services of Zytrixon Tech, you accept and agree to be bound by the terms 
                        and provision of this agreement. In addition, when using these particular services, you shall be subject 
                        to any posted guidelines or rules applicable to such services.
                    </p>

                    <h2 style={{ color: 'var(--zy-white)', fontSize: '24px', marginTop: '40px', marginBottom: '16px' }}>2. Provision of Services</h2>
                    <p style={{ marginBottom: '24px' }}>
                        Zytrixon Tech provides software development, IT consulting, and digital marketing services. 
                        We reserve the right to modify, suspend, or discontinue any service with or without notice at any time.
                    </p>

                    <h2 style={{ color: 'var(--zy-white)', fontSize: '24px', marginTop: '40px', marginBottom: '16px' }}>3. Intellectual Property Rights</h2>
                    <p style={{ marginBottom: '24px' }}>
                        Unless otherwise stated, Zytrixon Tech and/or its licensors own the intellectual property rights for all 
                        material on this website. All intellectual property rights are reserved. You may access this from Zytrixon Tech 
                        for your own personal use subjected to restrictions set in these terms and conditions.
                    </p>

                    <h2 style={{ color: 'var(--zy-white)', fontSize: '24px', marginTop: '40px', marginBottom: '16px' }}>4. Limitation of Liability</h2>
                    <p style={{ marginBottom: '24px' }}>
                        In no event shall Zytrixon Tech, nor any of its officers, directors and employees, be held liable for anything 
                        arising out of or in any way connected with your use of this website or our services, whether such liability is under contract. 
                        Zytrixon Tech, including its officers, directors and employees shall not be held liable for any indirect, 
                        consequential or special liability arising out of or in any way related to your use of this website.
                    </p>

                    <h2 style={{ color: 'var(--zy-white)', fontSize: '24px', marginTop: '40px', marginBottom: '16px' }}>5. Governing Law</h2>
                    <p style={{ marginBottom: '24px' }}>
                        These Terms will be governed by and interpreted in accordance with the laws of India, and you submit 
                        to the non-exclusive jurisdiction of the state and federal courts located in India for the resolution of any disputes.
                    </p>
                </div>
            </main>

            <Footer />
        </ThemeProvider>
    );
}
