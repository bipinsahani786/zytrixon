import React, { useState } from 'react';
import { Head, router, usePage } from '@inertiajs/react';
import AdminLayout from '@/layouts/AdminLayout';
import UserStatsCards from '@/components/admin/users/UserStatsCards';
import UserFilterBar from '@/components/admin/users/UserFilterBar';
import UserTable from '@/components/admin/users/UserTable';
import UserPagination from '@/components/admin/users/UserPagination';
import UserModal from '@/components/admin/users/UserModal';
import UserDeleteModal from '@/components/admin/users/UserDeleteModal';
import type {
    PaginatedUsers,
    UserKpis,
    UserFilters,
    UserItem,
    UserFormData,
} from '@/components/admin/users/types';

interface UsersPageProps {
    users: PaginatedUsers;
    kpis: UserKpis;
    filters: UserFilters;
}

export default function UsersPage({ users, kpis, filters }: UsersPageProps) {
    const { auth } = usePage().props as any;
    const currentUserId = auth?.user?.id;

    // Filters state
    const [search, setSearch] = useState(filters.search || '');
    const [selectedRole, setSelectedRole] = useState(filters.role || 'all');

    // Create Modal state
    const [isCreateOpen, setIsCreateOpen] = useState(false);
    const [createForm, setCreateForm] = useState<UserFormData>({
        name: '',
        email: '',
        role: 'customer',
        password: '',
    });

    // Edit Modal state
    const [editUser, setEditUser] = useState<UserItem | null>(null);
    const [editForm, setEditForm] = useState<UserFormData>({
        name: '',
        email: '',
        role: 'customer',
        password: '',
    });

    // Delete Modal state
    const [deleteUser, setDeleteUser] = useState<UserItem | null>(null);

    // Filter handlers
    const handleFilterSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.get(
            '/z-admin/users',
            {
                search: search || undefined,
                role: selectedRole !== 'all' ? selectedRole : undefined,
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
        setSelectedRole('all');
        router.get('/z-admin/users', {
            per_page: filters.per_page || 10,
        });
    };

    const handlePerPageChange = (newPerPage: number) => {
        router.get(
            '/z-admin/users',
            {
                search: search || undefined,
                role: selectedRole !== 'all' ? selectedRole : undefined,
                per_page: newPerPage,
                page: 1,
            },
            {
                preserveState: true,
                preserveScroll: true,
            },
        );
    };

    // Open Edit modal
    const handleOpenEdit = (user: UserItem) => {
        setEditUser(user);
        setEditForm({
            name: user.name,
            email: user.email,
            role: user.role,
            password: '',
        });
    };

    // Submit Create
    const handleCreateSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.post('/z-admin/users', createForm as any, {
            preserveScroll: true,
            onSuccess: () => {
                setIsCreateOpen(false);
                setCreateForm({
                    name: '',
                    email: '',
                    role: 'customer',
                    password: '',
                });
            },
        });
    };

    // Submit Edit
    const handleEditSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!editUser) {
            return;
        }

        const payload: Record<string, string> = {
            name: editForm.name,
            email: editForm.email,
            role: editForm.role,
        };
        if (editForm.password) {
            payload.password = editForm.password;
        }

        router.put(`/z-admin/users/${editUser.id}`, payload, {
            preserveScroll: true,
            onSuccess: () => setEditUser(null),
        });
    };

    // Submit Delete
    const handleConfirmDelete = () => {
        if (!deleteUser) {
            return;
        }
        router.delete(`/z-admin/users/${deleteUser.id}`, {
            preserveScroll: true,
            onSuccess: () => setDeleteUser(null),
        });
    };

    return (
        <AdminLayout title="Users Directory">
            <Head title="Users Directory — Admin Console | Zytrixon Tech" />

            <div className="space-y-6">
                {/* 1. KPI Metric Cards */}
                <UserStatsCards kpis={kpis} />

                {/* 2. Search & Filter Bar */}
                <UserFilterBar
                    search={search}
                    onSearchChange={setSearch}
                    selectedRole={selectedRole}
                    onRoleChange={setSelectedRole}
                    kpis={kpis}
                    onSubmit={handleFilterSubmit}
                    onClear={handleClearFilters}
                    onOpenCreate={() => setIsCreateOpen(true)}
                    hasActiveFilters={Boolean(
                        filters.search || filters.role !== 'all',
                    )}
                />

                {/* 3. Users Data Table & Pagination */}
                <div
                    className="relative z-10 rounded-2xl border shadow-xl backdrop-blur-sm transition-colors duration-200"
                    style={{
                        backgroundColor: 'var(--admin-card-bg)',
                        borderColor: 'var(--admin-border)',
                    }}
                >
                    <UserTable
                        users={users.data}
                        currentUserId={currentUserId}
                        onEdit={handleOpenEdit}
                        onDelete={setDeleteUser}
                    />
                    <UserPagination
                        users={users}
                        filters={filters}
                        onPerPageChange={handlePerPageChange}
                    />
                </div>
            </div>

            {/* Create User Modal */}
            <UserModal
                isOpen={isCreateOpen}
                mode="create"
                formData={createForm}
                onChange={(field, val) =>
                    setCreateForm((prev) => ({ ...prev, [field]: val }))
                }
                onSubmit={handleCreateSubmit}
                onClose={() => setIsCreateOpen(false)}
            />

            {/* Edit User Modal */}
            <UserModal
                isOpen={Boolean(editUser)}
                mode="edit"
                targetUser={editUser}
                formData={editForm}
                onChange={(field, val) =>
                    setEditForm((prev) => ({ ...prev, [field]: val }))
                }
                onSubmit={handleEditSubmit}
                onClose={() => setEditUser(null)}
            />

            {/* Delete User Modal */}
            <UserDeleteModal
                isOpen={Boolean(deleteUser)}
                user={deleteUser}
                onConfirm={handleConfirmDelete}
                onClose={() => setDeleteUser(null)}
            />
        </AdminLayout>
    );
}
