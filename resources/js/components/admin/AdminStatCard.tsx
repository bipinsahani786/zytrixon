import React from 'react';
import { LucideIcon } from 'lucide-react';

interface AdminStatCardProps {
    title: string;
    value: string | number;
    subtitle: string;
    icon: LucideIcon;
    badge?: string;
    badgeVariant?: 'emerald' | 'blue' | 'purple' | 'amber';
}

export default function AdminStatCard({
    title,
    value,
    subtitle,
    icon: Icon,
    badge,
    badgeVariant = 'emerald',
}: AdminStatCardProps) {
    const badgeColors = {
        emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
        blue: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
        purple: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
        amber: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    };

    return (
        <div className="relative rounded-xl border border-white/10 bg-[#0e0e12]/80 p-5 backdrop-blur-sm hover:border-white/20 transition-all group overflow-hidden">
            {/* Top ambient highlight line */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-white/40 transition-all" />

            <div className="flex items-start justify-between">
                <div>
                    <span className="text-xs font-medium text-neutral-400 uppercase tracking-wider block font-mono">
                        {title}
                    </span>
                    <div className="text-2xl font-bold text-white mt-1 font-heading">
                        {value}
                    </div>
                </div>

                <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-neutral-300 group-hover:text-white group-hover:border-white/20 transition-all">
                    <Icon className="w-5 h-5" />
                </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="text-neutral-500">{subtitle}</span>
                {badge && (
                    <span className={`px-2 py-0.5 rounded text-[10px] font-mono border ${badgeColors[badgeVariant]}`}>
                        {badge}
                    </span>
                )}
            </div>
        </div>
    );
}
