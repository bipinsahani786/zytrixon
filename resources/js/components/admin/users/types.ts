export interface UserItem {
    id: number;
    name: string;
    email: string;
    role: 'admin' | 'customer';
    email_verified_at: string | null;
    created_at: string;
}

export interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

export interface PaginatedUsers {
    data: UserItem[];
    links: PaginationLink[];
    current_page: number;
    last_page: number;
    from: number;
    to: number;
    total: number;
    per_page: number;
}

export interface UserKpis {
    total: number;
    admins: number;
    customers: number;
    verified: number;
}

export interface UserFilters {
    search: string;
    role: string;
    per_page?: number;
}

export interface UserFormData {
    name: string;
    email: string;
    role: 'admin' | 'customer';
    password?: string;
}
