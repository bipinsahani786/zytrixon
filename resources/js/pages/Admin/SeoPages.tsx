import React, { useState } from 'react';
import { Head, router } from '@inertiajs/react';
import axios from 'axios';
import AdminLayout from '@/layouts/AdminLayout';
import SeoPageStatsCards from '@/components/admin/seo-pages/SeoPageStatsCards';
import SeoPageFilterBar from '@/components/admin/seo-pages/SeoPageFilterBar';
import SeoPageTable from '@/components/admin/seo-pages/SeoPageTable';
import SeoPageModal from '@/components/admin/seo-pages/SeoPageModal';
import BulkGenerateModal from '@/components/admin/seo-pages/BulkGenerateModal';
import { Plus, Zap, Trash2, MapPin } from 'lucide-react';
import type {
    PaginatedSeoPages,
    SeoPageKpis,
    SeoPageFilters,
    SeoPageRecord,
    SeoPageFormData,
    SeoService,
    SeoLocation,
} from '@/components/admin/seo-pages/types';
import { EMPTY_SEO_FORM } from '@/components/admin/seo-pages/types';

interface SeoPageProps {
    pages: PaginatedSeoPages;
    kpis: SeoPageKpis;
    filters: SeoPageFilters;
    services: SeoService[];
    locations: SeoLocation[];
}

export default function SeoPages({ pages, kpis, filters, services, locations }: SeoPageProps) {
    const [search, setSearch] = useState(filters.search || '');
    const [selectedIds, setSelectedIds] = useState<number[]>([]);

    // Modal state
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMode, setModalMode] = useState<'create' | 'edit'>('create');
    const [editingPage, setEditingPage] = useState<SeoPageRecord | null>(null);
    const [form, setForm] = useState<SeoPageFormData>(EMPTY_SEO_FORM);

    // Bulk generate modal
    const [isBulkOpen, setIsBulkOpen] = useState(false);

    // Delete confirm
    const [deleteTarget, setDeleteTarget] = useState<SeoPageRecord | null>(null);

    // Bulk delete loading
    const [bulkDelLoading, setBulkDelLoading] = useState(false);

    // ---------- Filters ----------
    const handleFilterSubmit = (e?: React.FormEvent) => {
        e?.preventDefault();
        router.get('/z-admin/seo-pages', {
            search: search || undefined,
            service: filters.service !== 'all' ? filters.service : undefined,
            status: filters.status !== 'all' ? filters.status : undefined,
            template: filters.template !== 'all' ? filters.template : undefined,
        }, { preserveState: true, replace: true });
    };

    // ---------- Selection ----------
    const handleSelectAll = (ids: number[]) => setSelectedIds(ids);
    const handleToggleSelect = (id: number) => {
        setSelectedIds((prev) =>
            prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
        );
    };

    // ---------- Create / Edit Modal ----------
    const openCreate = () => {
        setForm(EMPTY_SEO_FORM);
        setEditingPage(null);
        setModalMode('create');
        setIsModalOpen(true);
    };

    const openEdit = (page: SeoPageRecord) => {
        setForm({
            service_id: page.service_id,
            location_id: page.location_id,
            template: page.template,
            status: page.status,
            h1: page.h1 ?? '',
            meta_title: page.meta_title ?? '',
            meta_description: page.meta_description ?? '',
            hero_description: page.hero_description ?? '',
            focus_keyword: page.focus_keyword ?? '',
            sections: page.sections ?? [],
            seo_score: page.seo_score,
        });
        setEditingPage(page);
        setModalMode('edit');
        setIsModalOpen(true);
    };

    const handleFormChange = (field: keyof SeoPageFormData, value: unknown) => {
        setForm((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.service_id || !form.location_id) {
            alert('⚠️ Please select both a Service and a Location before saving.');
            return;
        }
        if (modalMode === 'create') {
            router.post('/z-admin/seo-pages', form as any, {
                onSuccess: () => {
                    setIsModalOpen(false);
                },
                onError: (errs) => {
                    alert('Save failed: ' + Object.values(errs).join(', '));
                },
            });
        } else if (editingPage) {
            router.put(`/z-admin/seo-pages/${editingPage.id}`, form as any, {
                onSuccess: () => {
                    setIsModalOpen(false);
                },
                onError: (errs) => {
                    alert('Update failed: ' + Object.values(errs).join(', '));
                },
            });
        }
    };

    // ---------- Delete ----------
    const handleDelete = (page: SeoPageRecord) => setDeleteTarget(page);

    const confirmDelete = () => {
        if (!deleteTarget) return;
        router.delete(`/z-admin/seo-pages/${deleteTarget.id}`, {
            onFinish: () => setDeleteTarget(null),
        });
    };

    // ---------- Bulk Delete ----------
    const handleBulkDelete = () => {
        if (selectedIds.length === 0) return;
        setBulkDelLoading(true);
        router.post('/z-admin/seo-pages/bulk-delete', { ids: selectedIds }, {
            onSuccess: () => {
                setSelectedIds([]);
                setBulkDelLoading(false);
            },
            onError: () => setBulkDelLoading(false),
        });
    };

    return (
        <AdminLayout title="SEO Location Pages">
            <Head title="SEO Location Pages | Admin" />

            <div className="space-y-5 p-6">
                {/* Page Header */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div
                            className="flex h-9 w-9 items-center justify-center rounded-xl"
                            style={{ backgroundColor: 'rgba(99,102,241,0.15)', color: '#818cf8' }}
                        >
                            <MapPin size={18} />
                        </div>
                        <div>
                            <h1 className="text-lg font-bold" style={{ color: 'var(--admin-text-primary)' }}>
                                SEO Location Pages
                            </h1>
                            <p className="text-xs" style={{ color: 'var(--admin-text-muted)' }}>
                                AI-powered programmatic SEO · {kpis.total} pages · {kpis.published} live
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        {selectedIds.length > 0 && (
                            <button
                                onClick={handleBulkDelete}
                                disabled={bulkDelLoading}
                                className="flex items-center gap-1.5 rounded-lg border px-3 py-2 text-xs font-medium transition-colors hover:bg-red-500/10 disabled:opacity-40"
                                style={{ borderColor: 'rgba(239,68,68,0.3)', color: '#f87171' }}
                            >
                                <Trash2 size={12} />
                                Delete {selectedIds.length}
                            </button>
                        )}
                        <button
                            onClick={() => setIsBulkOpen(true)}
                            className="flex items-center gap-1.5 rounded-lg border px-3 py-2 text-xs font-medium transition-colors hover:bg-white/5"
                            style={{ borderColor: 'var(--admin-border)', color: '#818cf8' }}
                        >
                            <Zap size={12} />
                            Bulk AI Generate
                        </button>
                        <button
                            onClick={openCreate}
                            className="flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs font-medium transition-opacity hover:opacity-90"
                            style={{ backgroundColor: 'var(--admin-accent)', color: '#fff' }}
                        >
                            <Plus size={14} />
                            New Page
                        </button>
                    </div>
                </div>

                {/* KPI Cards */}
                <SeoPageStatsCards kpis={kpis} />

                {/* Filters */}
                <SeoPageFilterBar
                    filters={filters}
                    services={services}
                    search={search}
                    onSearchChange={setSearch}
                    onServiceChange={(v) => router.get('/z-admin/seo-pages', { ...filters, service: v }, { replace: true })}
                    onStatusChange={(v) => router.get('/z-admin/seo-pages', { ...filters, status: v }, { replace: true })}
                    onTemplateChange={(v) => router.get('/z-admin/seo-pages', { ...filters, template: v }, { replace: true })}
                    onSubmit={handleFilterSubmit}
                />

                {/* Table */}
                <SeoPageTable
                    pages={pages}
                    selectedIds={selectedIds}
                    onSelectAll={handleSelectAll}
                    onToggleSelect={handleToggleSelect}
                    onEdit={openEdit}
                    onDelete={handleDelete}
                />
            </div>

            {/* Create/Edit Modal */}
            <SeoPageModal
                isOpen={isModalOpen}
                mode={modalMode}
                formData={form}
                services={services}
                locations={locations}
                editingPage={editingPage}
                onChange={handleFormChange}
                onSubmit={handleSubmit}
                onClose={() => setIsModalOpen(false)}
            />

            {/* Bulk Generate Modal */}
            <BulkGenerateModal
                isOpen={isBulkOpen}
                services={services}
                locations={locations}
                onClose={() => setIsBulkOpen(false)}
                onSuccess={() => router.reload()}
            />

            {/* Delete Confirm Dialog */}
            {deleteTarget && (
                <div
                    className="fixed inset-0 z-[200] flex items-center justify-center p-4 backdrop-blur-sm"
                    style={{ backgroundColor: 'rgba(0,0,0,0.75)' }}
                >
                    <div
                        className="w-full max-w-sm rounded-2xl border p-6 shadow-2xl"
                        style={{
                            backgroundColor: 'var(--admin-modal-bg)',
                            borderColor: 'var(--admin-border)',
                        }}
                    >
                        <h3 className="text-base font-semibold" style={{ color: 'var(--admin-text-primary)' }}>
                            Delete SEO Page?
                        </h3>
                        <p className="mt-1.5 text-sm" style={{ color: 'var(--admin-text-muted)' }}>
                            This will permanently delete the <strong>{deleteTarget.service?.title}</strong> page
                            for <strong>{deleteTarget.location?.name}</strong>. This cannot be undone.
                        </p>
                        <div className="mt-5 flex gap-2">
                            <button
                                onClick={() => setDeleteTarget(null)}
                                className="flex-1 rounded-lg border py-2 text-sm transition-colors hover:bg-white/5"
                                style={{ borderColor: 'var(--admin-border)', color: 'var(--admin-text-primary)' }}
                            >
                                Cancel
                            </button>
                            <button
                                onClick={confirmDelete}
                                className="flex-1 rounded-lg bg-red-500 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </AdminLayout>
    );
}
