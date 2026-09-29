import React, { useState } from 'react';
import { Head, router } from '@inertiajs/react';
import AdminLayout from '@/layouts/AdminLayout';
import BlogStatsCards from '@/components/admin/blogs/BlogStatsCards';
import BlogFilterBar from '@/components/admin/blogs/BlogFilterBar';
import BlogTable from '@/components/admin/blogs/BlogTable';
import BlogPagination from '@/components/admin/blogs/BlogPagination';
import BlogModal from '@/components/admin/blogs/BlogModal';
import BlogDeleteModal from '@/components/admin/blogs/BlogDeleteModal';
import type {
    PaginatedBlogs,
    BlogKpis,
    BlogFilters,
    BlogPost,
    BlogFormData,
} from '@/components/admin/blogs/types';

interface BlogsPageProps {
    blogs: PaginatedBlogs;
    kpis: BlogKpis;
    filters: BlogFilters;
    categories: string[];
}

const EMPTY_FORM: BlogFormData = {
    title: '',
    slug: '',
    category: 'Engineering',
    excerpt: '',
    content: '',
    author_name: '',
    read_time: '',
    status: 'published',
    is_featured: false,
    featured_image: '',
    image_file: null,
    meta_title: '',
    meta_description: '',
};

export default function Blogs({
    blogs,
    kpis,
    filters,
    categories,
}: BlogsPageProps) {
    const [search, setSearch] = useState(filters.search || '');
    const [selectedStatus, setSelectedStatus] = useState(
        filters.status || 'all',
    );
    const [selectedCategory, setSelectedCategory] = useState(
        filters.category || 'all',
    );

    // Multi-select
    const [selectedIds, setSelectedIds] = useState<number[]>([]);

    // Create / Edit Modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMode, setModalMode] = useState<'create' | 'edit'>('create');
    const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);
    const [form, setForm] = useState<BlogFormData>(EMPTY_FORM);

    // Delete Modal
    const [deleteModal, setDeleteModal] = useState<{
        open: boolean;
        isBulk: boolean;
        singleId?: number;
        singleTitle?: string;
    }>({ open: false, isBulk: false });

    // Filter submission
    const handleFilterSubmit = (e?: React.FormEvent) => {
        if (e) {
e.preventDefault();
}
        router.get(
            '/z-admin/blogs',
            {
                search: search || undefined,
                status: selectedStatus !== 'all' ? selectedStatus : undefined,
                category:
                    selectedCategory !== 'all' ? selectedCategory : undefined,
                per_page: filters.per_page || 10,
                page: 1,
            },
            { preserveState: true },
        );
    };

    const handleClearFilters = () => {
        setSearch('');
        setSelectedStatus('all');
        setSelectedCategory('all');
        router.get(
            '/z-admin/blogs',
            { per_page: filters.per_page || 10 },
            { preserveState: true },
        );
    };

    const handleSelectStatus = (status: string) => {
        const next = status === 'featured' ? 'all' : status;
        setSelectedStatus(next);
        router.get(
            '/z-admin/blogs',
            {
                status: next !== 'all' ? next : undefined,
                per_page: filters.per_page || 10,
                page: 1,
            },
            { preserveState: true },
        );
    };

    const handlePerPageChange = (perPage: number) => {
        router.get(
            '/z-admin/blogs',
            {
                search: filters.search || undefined,
                status: filters.status !== 'all' ? filters.status : undefined,
                category:
                    filters.category !== 'all' ? filters.category : undefined,
                per_page: perPage,
                page: 1,
            },
            { preserveState: true, preserveScroll: true },
        );
    };

    // Select all / one
    const handleToggleSelectAll = () => {
        if (selectedIds.length === blogs.data.length) {
            setSelectedIds([]);
        } else {
            setSelectedIds(blogs.data.map((b) => b.id));
        }
    };

    const handleToggleSelectOne = (id: number) => {
        setSelectedIds((prev) =>
            prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
        );
    };

    // Open Create Modal
    const handleOpenCreate = () => {
        setEditingBlog(null);
        setForm({ ...EMPTY_FORM, category: categories[0] || 'Engineering' });
        setModalMode('create');
        setIsModalOpen(true);
    };

    // Open Edit Modal
    const handleEdit = (blog: BlogPost) => {
        setEditingBlog(blog);
        setForm({
            title: blog.title,
            slug: blog.slug,
            category: blog.category,
            excerpt: blog.excerpt || '',
            content: blog.content,
            author_name: blog.author_name,
            read_time: blog.read_time || '',
            status: blog.status,
            is_featured: blog.is_featured,
            featured_image: blog.featured_image || '',
            image_file: null,
            meta_title: blog.meta_title || '',
            meta_description: blog.meta_description || '',
        });
        setModalMode('edit');
        setIsModalOpen(true);
    };

    const handleFormChange = (
        field: keyof BlogFormData,
        value: string | boolean | File | null,
    ) => {
        setForm((prev) => ({ ...prev, [field]: value }));
    };

    // Submit Create/Edit
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        const fields: (keyof BlogFormData)[] = [
            'title',
            'slug',
            'category',
            'excerpt',
            'content',
            'author_name',
            'read_time',
            'status',
            'featured_image',
            'meta_title',
            'meta_description',
        ];
        fields.forEach((key) => {
            if (form[key] !== null && form[key] !== undefined) {
                formData.append(key, String(form[key]));
            }
        });
        formData.append('is_featured', form.is_featured ? '1' : '0');
        if (form.image_file) {
            formData.append('image_file', form.image_file);
        }

        if (modalMode === 'create') {
            router.post(
                '/z-admin/blogs',
                formData as unknown as Record<string, string>,
                {
                    forceFormData: true,
                    onSuccess: () => {
                        setIsModalOpen(false);
                        setForm(EMPTY_FORM);
                    },
                },
            );
        } else if (editingBlog) {
            formData.append('_method', 'PUT');
            router.post(
                `/z-admin/blogs/${editingBlog.id}`,
                formData as unknown as Record<string, string>,
                {
                    forceFormData: true,
                    onSuccess: () => {
                        setIsModalOpen(false);
                        setEditingBlog(null);
                    },
                },
            );
        }
    };

    // Delete single
    const handleDeleteSingle = (blog: BlogPost) => {
        setDeleteModal({
            open: true,
            isBulk: false,
            singleId: blog.id,
            singleTitle: blog.title,
        });
    };

    // Bulk delete
    const handleBulkDelete = () => {
        setDeleteModal({ open: true, isBulk: true });
    };

    const handleConfirmDelete = () => {
        if (deleteModal.isBulk) {
            router.post(
                '/z-admin/blogs/bulk-delete',
                { ids: selectedIds },
                {
                    onSuccess: () => {
                        setSelectedIds([]);
                        setDeleteModal({ open: false, isBulk: false });
                    },
                },
            );
        } else if (deleteModal.singleId) {
            router.delete(`/z-admin/blogs/${deleteModal.singleId}`, {
                onSuccess: () => setDeleteModal({ open: false, isBulk: false }),
            });
        }
    };

    // Toggle featured
    const handleToggleFeatured = (blog: BlogPost) => {
        router.post(
            `/z-admin/blogs/${blog.id}/toggle-featured`,
            {},
            { preserveScroll: true },
        );
    };

    const hasActiveFilters = Boolean(
        filters.search ||
        filters.status !== 'all' ||
        filters.category !== 'all',
    );

    return (
        <AdminLayout>
            <Head title="Blog Articles — Admin Panel" />

            <div className="space-y-5">
                {/* 1. KPI Stat Cards */}
                <BlogStatsCards
                    kpis={kpis}
                    onSelectStatus={handleSelectStatus}
                />

                {/* 2. Filter Bar */}
                <BlogFilterBar
                    search={search}
                    onSearchChange={setSearch}
                    selectedStatus={selectedStatus}
                    onStatusChange={(val) => {
                        setSelectedStatus(val);
                        handleFilterSubmit();
                    }}
                    selectedCategory={selectedCategory}
                    onCategoryChange={(val) => {
                        setSelectedCategory(val);
                        handleFilterSubmit();
                    }}
                    availableCategories={categories}
                    kpis={kpis}
                    onSubmit={handleFilterSubmit}
                    onClear={handleClearFilters}
                    onOpenCreate={handleOpenCreate}
                    hasActiveFilters={hasActiveFilters}
                />

                {/* 3. Bulk Action Bar */}
                {selectedIds.length > 0 && (
                    <div
                        className="animate-fadeIn sticky top-4 z-30 flex flex-wrap items-center justify-between gap-3 rounded-2xl border p-3.5 shadow-2xl backdrop-blur-xl"
                        style={{
                            backgroundColor: 'var(--admin-card-bg)',
                            borderColor: '#ef4444',
                        }}
                    >
                        <div className="flex items-center gap-3">
                            <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-red-500/30 bg-red-500/20 text-xs font-bold text-red-500">
                                {selectedIds.length}
                            </div>
                            <span
                                className="text-xs font-semibold"
                                style={{ color: 'var(--admin-text-primary)' }}
                            >
                                {selectedIds.length}{' '}
                                {selectedIds.length === 1
                                    ? 'article'
                                    : 'articles'}{' '}
                                selected
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                type="button"
                                onClick={() => setSelectedIds([])}
                                className="cursor-pointer rounded-xl border px-3 py-1.5 text-xs font-medium transition-colors"
                                style={{
                                    backgroundColor:
                                        'var(--admin-button-secondary-bg)',
                                    borderColor: 'var(--admin-border)',
                                    color: 'var(--admin-text-secondary)',
                                }}
                            >
                                Deselect All
                            </button>
                            <button
                                type="button"
                                onClick={handleBulkDelete}
                                className="inline-flex cursor-pointer items-center gap-1.5 rounded-xl bg-red-600 px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm transition-all hover:bg-red-500 active:scale-95"
                            >
                                Delete Selected ({selectedIds.length})
                            </button>
                        </div>
                    </div>
                )}

                {/* 4. Table + Pagination */}
                <div
                    className="relative z-10 overflow-hidden rounded-2xl border shadow-sm transition-colors duration-200"
                    style={{
                        backgroundColor: 'var(--admin-card-bg)',
                        borderColor: 'var(--admin-border)',
                    }}
                >
                    <BlogTable
                        blogs={blogs.data}
                        selectedIds={selectedIds}
                        isAllSelected={
                            blogs.data.length > 0 &&
                            selectedIds.length === blogs.data.length
                        }
                        onToggleSelectAll={handleToggleSelectAll}
                        onToggleSelectOne={handleToggleSelectOne}
                        onEdit={handleEdit}
                        onDeleteSingle={handleDeleteSingle}
                        onToggleFeatured={handleToggleFeatured}
                        onClearFilters={handleClearFilters}
                        hasActiveFilters={hasActiveFilters}
                    />
                    <BlogPagination
                        blogs={blogs}
                        filters={filters}
                        onPerPageChange={handlePerPageChange}
                    />
                </div>
            </div>

            {/* Create / Edit Modal */}
            <BlogModal
                isOpen={isModalOpen}
                mode={modalMode}
                formData={form}
                categories={categories}
                onChange={handleFormChange}
                onSubmit={handleSubmit}
                onClose={() => {
                    setIsModalOpen(false);
                    setEditingBlog(null);
                }}
            />

            {/* Delete Confirmation Modal */}
            <BlogDeleteModal
                isOpen={deleteModal.open}
                isBulk={deleteModal.isBulk}
                count={selectedIds.length}
                singleTitle={deleteModal.singleTitle}
                onConfirm={handleConfirmDelete}
                onClose={() => setDeleteModal({ open: false, isBulk: false })}
            />
        </AdminLayout>
    );
}
