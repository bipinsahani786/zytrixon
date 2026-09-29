import React from 'react';
import AdminStatCard from '@/components/admin/AdminStatCard';
import { Mail, Clock, CheckCircle2, AlertTriangle, Inbox } from 'lucide-react';
import type { ContactKpis } from './types';

interface ContactKpiCardsProps {
    kpis: ContactKpis;
    onSelectStatus?: (status: string) => void;
}

export default function ContactKpiCards({
    kpis,
    onSelectStatus,
}: ContactKpiCardsProps) {
    return (
        <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-5">
            <div
                onClick={() => onSelectStatus?.('all')}
                className="h-full cursor-pointer transition-transform active:scale-[0.98]"
            >
                <AdminStatCard
                    title="Total Leads"
                    value={kpis.total}
                    icon={Inbox}
                    badgeVariant="blue"
                />
            </div>

            <div
                onClick={() => onSelectStatus?.('new')}
                className="h-full cursor-pointer transition-transform active:scale-[0.98]"
            >
                <AdminStatCard
                    title="New Leads"
                    value={kpis.new}
                    icon={Mail}
                    badgeVariant="emerald"
                />
            </div>

            <div
                onClick={() => onSelectStatus?.('contacted')}
                className="h-full cursor-pointer transition-transform active:scale-[0.98]"
            >
                <AdminStatCard
                    title="Contacted"
                    value={kpis.contacted}
                    icon={Clock}
                    badgeVariant="rose"
                />
            </div>

            <div
                onClick={() => onSelectStatus?.('in_progress')}
                className="h-full cursor-pointer transition-transform active:scale-[0.98]"
            >
                <AdminStatCard
                    title="In Progress"
                    value={kpis.in_progress}
                    icon={AlertTriangle}
                    badgeVariant="amber"
                />
            </div>

            <div
                onClick={() => onSelectStatus?.('resolved')}
                className="h-full cursor-pointer transition-transform active:scale-[0.98]"
            >
                <AdminStatCard
                    title="Resolved / Won"
                    value={kpis.resolved}
                    icon={CheckCircle2}
                    badgeVariant="purple"
                />
            </div>
        </div>
    );
}
