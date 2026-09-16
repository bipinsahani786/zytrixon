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
            className={`bg-card text-card-foreground border border-border rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto shadow-lg relative overflow-hidden ${className}`}
        >
            <div className="relative z-10">
                <span className="inline-block font-heading text-xs font-bold uppercase tracking-widest text-primary mb-3 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                    INSIGHTS & NEWSLETTER
                </span>

                <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground mb-3 tracking-tight">
                    {title}
                </h3>

                <p className="text-muted-foreground text-sm sm:text-base max-w-lg mx-auto mb-8 leading-relaxed">
                    {subtitle}
                </p>

                {subscribed ? (
                    <div className="inline-flex items-center gap-2 text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-6 py-3 rounded-full text-sm font-semibold">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Thank you! You're now on our insider list.</span>
                    </div>
                ) : (
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
                    >
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your work email"
                            required
                            className="w-full px-5 py-3.5 rounded-full bg-background border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200"
                        />
                        <button
                            type="submit"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-heading font-bold text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_20px_var(--accent-cyan-glow)] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer shrink-0"
                        >
                            <span>{buttonText}</span>
                            <Send className="w-3.5 h-3.5" />
                        </button>
                    </form>
                )}

                <p className="text-muted-foreground text-xs mt-4">
                    Zero spam. Unsubscribe anytime with one click.
                </p>
            </div>
        </div>
    );
}
