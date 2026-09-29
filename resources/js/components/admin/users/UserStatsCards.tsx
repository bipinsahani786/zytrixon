import React from 'react';
import AdminStatCard from '@/components/admin/AdminStatCard';
import { Users, ShieldCheck, UserCheck, Shield } from 'lucide-react';
import type { UserKpis } from './types';

interface UserStatsCardsProps {
    kpis: UserKpis;
}

export default function UserStatsCards({ kpis }: UserStatsCardsProps) {
    return (
        <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <AdminStatCard
                title="Total Accounts"
                value={kpis.total}
                icon={Users}
                badgeVariant="emerald"
            />
            <AdminStatCard
                title="Administrators"
                value={kpis.admins}
                icon={ShieldCheck}
                badgeVariant="purple"
            />
            <AdminStatCard
                title="Customers"
                value={kpis.customers}
                icon={Shield}
                badgeVariant="blue"
            />
            <AdminStatCard
                title="Verified Accounts"
                value={kpis.verified}
                icon={UserCheck}
                badgeVariant="amber"
            />
        </div>
    );
}
