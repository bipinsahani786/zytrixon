import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export interface NewsletterBoxProps {
    title?: string;
    subtitle?: string;
    buttonText?: string;
    className?: string;
}

/**
 * NewsletterBox: Reusable email subscription form for updates & insights.
 */
export default function NewsletterBox({
    title = 'Stay Ahead of the Curve',
    subtitle = 'Get high-impact engineering insights, case studies, and architecture tips delivered monthly.',
    buttonText = 'Subscribe',
    className = '',
}: NewsletterBoxProps) {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setSubscribed(true);
            setEmail('');
        }
    };

    return (
        <div
            className={`relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-border bg-card p-8 text-center text-card-foreground shadow-lg sm:p-12 ${className}`}
        >
            <div className="relative z-10">
                <span className="mb-3 inline-block rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-heading text-xs font-bold tracking-widest text-primary uppercase">
                    INSIGHTS & NEWSLETTER
                </span>

                <h3 className="mb-3 font-heading text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl md:text-4xl">
                    {title}
                </h3>

                <p className="mx-auto mb-8 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {subtitle}
                </p>

                {subscribed ? (
                    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-6 py-3 text-sm font-semibold text-emerald-400">
                        <CheckCircle2 className="h-4 w-4" />
                        <span>Thank you! You're now on our insider list.</span>
                    </div>
                ) : (
                    <form
                        onSubmit={handleSubmit}
                        className="mx-auto flex max-w-md flex-col items-center justify-center gap-3 sm:flex-row"
                    >
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your work email"
                            required
                            className="w-full rounded-full border border-border bg-background px-5 py-3.5 text-sm text-foreground transition-all duration-200 placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="inline-flex w-full shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 font-heading text-xs font-bold tracking-wider text-primary-foreground uppercase shadow-[0_0_20px_var(--accent-cyan-glow)] transition-all duration-200 hover:scale-105 active:scale-95 sm:w-auto sm:text-sm"
                        >
                            <span>{buttonText}</span>
                            <Send className="h-3.5 w-3.5" />
                        </button>
                    </form>
                )}

                <p className="mt-4 text-xs text-muted-foreground">
                    Zero spam. Unsubscribe anytime with one click.
                </p>
            </div>
        </div>
    );
}
