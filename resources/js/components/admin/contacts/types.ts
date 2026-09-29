export interface Enquiry {
    id: number;
    name: string;
    email: string;
    phone: string;
    service: string | null;
    budget: string | null;
    message: string | null;
    status: 'new' | 'contacted' | 'in_progress' | 'resolved' | 'spam';
    admin_notes: string | null;
    ip_address: string | null;
    user_agent: string | null;
    created_at: string;
    updated_at: string;
}

export interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

export interface PaginatedEnquiries {
    data: Enquiry[];
    links: PaginationLink[];
    current_page: number;
    last_page: number;
    from: number;
    to: number;
    total: number;
    per_page: number;
}

export interface ContactKpis {
    total: number;
    new: number;
    contacted: number;
    in_progress: number;
    resolved: number;
    spam: number;
}

export interface ContactFilters {
    search: string;
    status: string;
    service: string;
    sort: string;
    per_page?: number;
}

export interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    service: string;
    budget: string;
    message: string;
    status: string;
    admin_notes: string;
}
