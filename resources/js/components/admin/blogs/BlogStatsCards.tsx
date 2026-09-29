import React from 'react';
import AdminStatCard from '@/components/admin/AdminStatCard';
import { BookOpen, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import type { BlogKpis } from './types';

interface BlogStatsCardsProps {
    kpis: BlogKpis;
    onSelectStatus?: (status: string) => void;
}

export default function BlogStatsCards({
    kpis,
    onSelectStatus,
}: BlogStatsCardsProps) {
    return (
        <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div
                onClick={() => onSelectStatus?.('all')}
                className="h-full cursor-pointer transition-transform active:scale-[0.98]"
            >
                <AdminStatCard
                    title="Total Articles"
                    value={kpis.total}
                    icon={BookOpen}
                    badgeVariant="emerald"
                />
            </div>

            <div
                onClick={() => onSelectStatus?.('published')}
                className="h-full cursor-pointer transition-transform active:scale-[0.98]"
            >
                <AdminStatCard
                    title="Published Posts"
                    value={kpis.published}
                    icon={CheckCircle2}
                    badgeVariant="blue"
                />
            </div>

            <div
                onClick={() => onSelectStatus?.('draft')}
                className="h-full cursor-pointer transition-transform active:scale-[0.98]"
            >
                <AdminStatCard
                    title="Draft Articles"
                    value={kpis.draft}
                    icon={Clock}
                    badgeVariant="amber"
                />
            </div>

            <div
                onClick={() => onSelectStatus?.('featured')}
                className="h-full cursor-pointer transition-transform active:scale-[0.98]"
            >
                <AdminStatCard
                    title="Featured Pinned"
                    value={kpis.featured}
                    icon={Sparkles}
                    badgeVariant="purple"
                />
            </div>
        </div>
    );
}
