import { Head, Link } from '@inertiajs/react';
import { ThemeProvider } from '@/components/landing/theme-provider';
import CustomCursor from '@/components/landing/custom-cursor';
import TopBar from '@/components/landing/top-bar';
import Navbar from '@/components/landing/navbar';
import Footer from '@/components/landing/footer';

export default function Error({ status }: { status: number }) {
    const title = {
        503: 'Service Unavailable',
        500: 'Server Error',
        404: 'Page Not Found',
        403: 'Forbidden',
    }[status] || 'Error';

    const description = {
        503: 'Sorry, we are doing some maintenance. Please check back soon.',
        500: 'Whoops, something went wrong on our servers.',
        404: 'Sorry, the page you are looking for could not be found.',
        403: 'Sorry, you are forbidden from accessing this page.',
    }[status] || 'An unexpected error occurred.';

    return (
        <ThemeProvider>
            <Head>
                <title>{title} | Zytrixon Tech</title>
                <meta name="description" content={description} />
            </Head>

            <CustomCursor />
            <TopBar />
            <Navbar />

            <main style={{ minHeight: '80vh', padding: '160px var(--zy-section-pad-x) 80px', background: 'var(--zy-black)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
                    <div style={{ 
                        fontSize: 'clamp(80px, 15vw, 120px)', 
                        fontWeight: 900, 
                        fontFamily: 'var(--font-heading)',
                        color: 'var(--zy-white)',
                        lineHeight: 1,
                        opacity: 0.1,
                        marginBottom: '-40px',
                        letterSpacing: '-0.05em'
                    }}>
                        {status}
                    </div>
                    <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(32px, 5vw, 48px)', color: 'var(--zy-white)', marginBottom: '16px', position: 'relative' }}>
                        {title}
                    </h1>
                    <p style={{ color: 'var(--zy-gray-text)', fontSize: '18px', marginBottom: '40px', lineHeight: 1.6 }}>
                        {description}
                    </p>
                    <Link href="/" className="zy-btn-primary" style={{ display: 'inline-flex', padding: '16px 32px', fontSize: '14px', fontWeight: 600, color: '#000', backgroundColor: '#FFF', textDecoration: 'none', borderRadius: '4px' }}>
                        Return Home
                    </Link>
                </div>
            </main>

            <Footer />
        </ThemeProvider>
    );
}
