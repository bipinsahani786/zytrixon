import React, { useState } from 'react';
import { Head, router } from '@inertiajs/react';
import AdminLayout from '@/layouts/AdminLayout';
import ContactKpiCards from '@/components/admin/contacts/ContactKpiCards';
import ContactFilterBar from '@/components/admin/contacts/ContactFilterBar';
import ContactBulkBar from '@/components/admin/contacts/ContactBulkBar';
import ContactTable from '@/components/admin/contacts/ContactTable';
import ContactPagination from '@/components/admin/contacts/ContactPagination';
import ContactDetailModal from '@/components/admin/contacts/ContactDetailModal';
import ContactCreateModal from '@/components/admin/contacts/ContactCreateModal';
import ContactDeleteModal from '@/components/admin/contacts/ContactDeleteModal';
import type {
    PaginatedEnquiries,
    ContactKpis,
    ContactFilters,
    Enquiry,
    ContactFormData,
} from '@/components/admin/contacts/types';

interface ContactsPageProps {
    enquiries: PaginatedEnquiries;
    kpis: ContactKpis;
    filters: ContactFilters;
    availableServices: string[];
}

export default function Contacts({
    enquiries,
    kpis,
    filters,
    availableServices = [],
}: ContactsPageProps) {
    const [search, setSearch] = useState(filters.search || '');
    const [selectedStatus, setSelectedStatus] = useState(
        filters.status || 'all',
    );
    const [selectedService, setSelectedService] = useState(
        filters.service || 'all',
    );

    // Multi-select for bulk delete
    const [selectedIds, setSelectedIds] = useState<number[]>([]);

    // Detail Modal state
    const [viewEnquiry, setViewEnquiry] = useState<Enquiry | null>(null);
    const [editNotes, setEditNotes] = useState('');
    const [editStatus, setEditStatus] = useState<string>('new');
    const [isSavingDetails, setIsSavingDetails] = useState(false);

    // Create Modal state
    const [isCreateOpen, setIsCreateOpen] = useState(false);
    const [createForm, setCreateForm] = useState<ContactFormData>({
        name: '',
        email: '',
        phone: '',
        service: '',
        budget: '',
        message: '',
        status: 'new',
        admin_notes: '',
    });

    // Delete Modal state
    const [deleteModal, setDeleteModal] = useState<{
        open: boolean;
        isBulk: boolean;
        singleId?: number;
        singleName?: string;
    }>({ open: false, isBulk: false });

    // Handle Search & Filter submission
    const handleFilterSubmit = (e?: React.FormEvent) => {
        if (e) {
            e.preventDefault();
        }
        router.get(
            '/z-admin/contacts',
            {
                search: search || undefined,
                status: selectedStatus !== 'all' ? selectedStatus : undefined,
                service:
                    selectedService !== 'all' ? selectedService : undefined,
                per_page: filters.per_page || 10,
                page: 1,
            },
            {
                preserveState: true,
                preserveScroll: true,
            },
        );
    };

    const handleClearFilters = () => {
        setSearch('');
        setSelectedStatus('all');
        setSelectedService('all');
        router.get('/z-admin/contacts', {
            per_page: filters.per_page || 10,
        });
    };

    const handlePerPageChange = (newPerPage: number) => {
        router.get(
            '/z-admin/contacts',
            {
                search: search || undefined,
                status: selectedStatus !== 'all' ? selectedStatus : undefined,
                service:
                    selectedService !== 'all' ? selectedService : undefined,
                per_page: newPerPage,
                page: 1,
            },
            {
                preserveState: true,
                preserveScroll: true,
            },
        );
    };

    // Quick inline status change
    const handleQuickStatusChange = (enquiryId: number, newStatus: string) => {
        router.put(
            `/z-admin/contacts/${enquiryId}`,
            { status: newStatus },
            {
                preserveScroll: true,
                onSuccess: () => {
                    if (viewEnquiry && viewEnquiry.id === enquiryId) {
                        setViewEnquiry((prev) =>
                            prev ? { ...prev, status: newStatus as any } : null,
                        );
                    }
                },
            },
        );
    };

    // Bulk selection helpers
    const allPageIds = enquiries.data.map((e) => e.id);
    const isAllSelected =
        allPageIds.length > 0 &&
        allPageIds.every((id) => selectedIds.includes(id));

    const handleToggleSelectAll = () => {
        if (isAllSelected) {
            setSelectedIds((prev) =>
                prev.filter((id) => !allPageIds.includes(id)),
            );
        } else {
            setSelectedIds((prev) =>
                Array.from(new Set([...prev, ...allPageIds])),
            );
        }
    };

    const handleToggleSelectOne = (id: number) => {
        setSelectedIds((prev) =>
            prev.includes(id)
                ? prev.filter((item) => item !== id)
                : [...prev, id],
        );
    };

    // Open detail modal
    const handleOpenDetail = (item: Enquiry) => {
        setViewEnquiry(item);
        setEditNotes(item.admin_notes || '');
        setEditStatus(item.status);
    };

    // Save details from modal
    const handleSaveDetail = (e: React.FormEvent) => {
        e.preventDefault();
        if (!viewEnquiry) {
            return;
        }

        setIsSavingDetails(true);
        router.put(
            `/z-admin/contacts/${viewEnquiry.id}`,
            {
                status: editStatus,
                admin_notes: editNotes,
            },
            {
                preserveScroll: true,
                onSuccess: () => {
                    setIsSavingDetails(false);
                    setViewEnquiry((prev) =>
                        prev
                            ? {
                                  ...prev,
                                  status: editStatus as any,
                                  admin_notes: editNotes,
                              }
                            : null,
                    );
                },
                onError: () => setIsSavingDetails(false),
            },
        );
    };

    // Create enquiry
    const handleCreateSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.post('/z-admin/contacts', createForm as any, {
            preserveScroll: true,
            onSuccess: () => {
                setIsCreateOpen(false);
                setCreateForm({
                    name: '',
                    email: '',
                    phone: '',
                    service: '',
                    budget: '',
                    message: '',
                    status: 'new',
                    admin_notes: '',
                });
            },
        });
    };

    // Single delete
    const confirmSingleDelete = (id: number, name: string) => {
        setDeleteModal({
            open: true,
            isBulk: false,
            singleId: id,
            singleName: name,
        });
    };

    // Bulk delete confirmation
    const confirmBulkDelete = () => {
        if (selectedIds.length === 0) {
            return;
        }
        setDeleteModal({
            open: true,
            isBulk: true,
        });
    };

    // Execute delete
    const executeDelete = () => {
        if (deleteModal.isBulk) {
            router.post(
                '/z-admin/contacts/bulk-delete',
                { ids: selectedIds },
                {
                    preserveScroll: true,
                    onSuccess: () => {
                        setSelectedIds([]);
                        setDeleteModal({ open: false, isBulk: false });
                    },
                },
            );
        } else if (deleteModal.singleId) {
            router.delete(`/z-admin/contacts/${deleteModal.singleId}`, {
                preserveScroll: true,
                onSuccess: () => {
                    setSelectedIds((prev) =>
                        prev.filter((id) => id !== deleteModal.singleId),
                    );
                    setDeleteModal({ open: false, isBulk: false });
                    if (
                        viewEnquiry &&
                        viewEnquiry.id === deleteModal.singleId
                    ) {
                        setViewEnquiry(null);
                    }
                },
            });
        }
    };

    return (
        <AdminLayout title="Client Enquiries & Leads">
            <Head title="Client Enquiries — Admin Console | Zytrixon Tech" />

            <div className="space-y-6">
                {/* 1. KPI Metric Cards */}
                <ContactKpiCards
                    kpis={kpis}
                    onSelectStatus={(status) => {
                        setSelectedStatus(status);
                        router.get(
                            '/z-admin/contacts',
                            {
                                status: status !== 'all' ? status : undefined,
                                service:
                                    selectedService !== 'all'
                                        ? selectedService
                                        : undefined,
                                per_page: filters.per_page || 10,
                                page: 1,
                            },
                            { preserveState: true },
                        );
                    }}
                />

                {/* 2. Filter & Search Bar */}
                <ContactFilterBar
                    search={search}
                    onSearchChange={setSearch}
                    selectedStatus={selectedStatus}
                    onStatusChange={setSelectedStatus}
                    selectedService={selectedService}
                    onServiceChange={setSelectedService}
                    availableServices={availableServices}
                    kpis={kpis}
                    onSubmit={handleFilterSubmit}
                    onClear={handleClearFilters}
                    hasActiveFilters={Boolean(
                        filters.search ||
                        filters.status !== 'all' ||
                        filters.service !== 'all',
                    )}
                />

                {/* 3. Bulk Action Bar */}
                <ContactBulkBar
                    selectedCount={selectedIds.length}
                    onDeselectAll={() => setSelectedIds([])}
                    onConfirmBulkDelete={confirmBulkDelete}
                />

                {/* 4. Main Enquiries Table & Pagination */}
                <div
                    className="relative z-10 rounded-2xl border shadow-xl backdrop-blur-sm transition-colors duration-200"
                    style={{
                        backgroundColor: 'var(--admin-card-bg)',
                        borderColor: 'var(--admin-border)',
                    }}
                >
                    <ContactTable
                        enquiries={enquiries.data}
                        selectedIds={selectedIds}
                        isAllSelected={isAllSelected}
                        onToggleSelectAll={handleToggleSelectAll}
                        onToggleSelectOne={handleToggleSelectOne}
                        onOpenDetail={handleOpenDetail}
                        onQuickStatusChange={handleQuickStatusChange}
                        onDeleteSingle={confirmSingleDelete}
                        onClearFilters={handleClearFilters}
                        hasActiveFilters={Boolean(
                            filters.search ||
                            filters.status !== 'all' ||
                            filters.service !== 'all',
                        )}
                    />
                    <ContactPagination
                        enquiries={enquiries}
                        filters={filters}
                        onPerPageChange={handlePerPageChange}
                    />
                </div>
            </div>

            {/* 5. Detail & Internal Notes Modal */}
            <ContactDetailModal
                enquiry={viewEnquiry}
                editStatus={editStatus}
                onStatusChange={setEditStatus}
                editNotes={editNotes}
                onNotesChange={setEditNotes}
                isSaving={isSavingDetails}
                onSave={handleSaveDetail}
                onClose={() => setViewEnquiry(null)}
            />

            {/* 6. Create Manual Lead Modal */}
            <ContactCreateModal
                isOpen={isCreateOpen}
                formData={createForm}
                onChange={(field, val) =>
                    setCreateForm((prev) => ({ ...prev, [field]: val }))
                }
                onSubmit={handleCreateSubmit}
                onClose={() => setIsCreateOpen(false)}
            />

            {/* 7. Delete Confirmation Modal */}
            <ContactDeleteModal
                isOpen={deleteModal.open}
                isBulk={deleteModal.isBulk}
                count={selectedIds.length}
                singleName={deleteModal.singleName}
                onConfirm={executeDelete}
                onClose={() => setDeleteModal({ open: false, isBulk: false })}
            />
        </AdminLayout>
    );
}
