import { Link } from '@inertiajs/react';
import PublicLayout from '@/components/layouts/PublicLayout';

export default function Error({ status }: { status: number }) {
    const title =
        {
            503: 'Service Unavailable',
            500: 'Server Error',
            404: 'Page Not Found',
            403: 'Forbidden',
        }[status] || 'Error';

    const description =
        {
            503: 'Sorry, we are doing some maintenance. Please check back soon.',
            500: 'Whoops, something went wrong on our servers.',
            404: 'Sorry, the page you are looking for could not be found.',
            403: 'Sorry, you are forbidden from accessing this page.',
        }[status] || 'An unexpected error occurred.';

    return (
        <PublicLayout
            seo={{
                title: `${title} | Zytrixon Tech`,
                description,
            }}
            hideFooterCTA={true}
        >
            <div className="flex min-h-[75vh] items-center justify-center px-6 py-24 text-center">
                <div className="mx-auto max-w-md">
                    <div className="-mb-8 font-heading text-8xl leading-none font-black text-foreground/10 select-none sm:-mb-10 sm:text-9xl">
                        {status}
                    </div>
                    <h1 className="mb-4 font-heading text-3xl font-extrabold text-foreground sm:text-4xl">
                        {title}
                    </h1>
                    <p className="mb-8 text-base leading-relaxed text-muted-foreground">
                        {description}
                    </p>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-heading text-sm font-bold tracking-wider text-primary-foreground uppercase shadow-[0_0_20px_var(--accent-cyan-glow)] transition-all duration-200 hover:scale-105 active:scale-95"
                    >
                        Return Home
                    </Link>
                </div>
            </div>
        </PublicLayout>
    );
}
