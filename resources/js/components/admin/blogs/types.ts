export interface BlogPost {
    id: number;
    title: string;
    slug: string;
    excerpt: string | null;
    content: string;
    category: string;
    featured_image: string | null;
    author_name: string;
    read_time: string | null;
    status: 'published' | 'draft';
    is_featured: boolean;
    published_at: string | null;
    views_count: number;
    meta_title: string | null;
    meta_description: string | null;
    created_at: string;
    updated_at: string;
}

export interface BlogKpis {
    total: number;
    published: number;
    draft: number;
    featured: number;
}

export interface BlogFilters {
    search?: string;
    status?: string;
    category?: string;
    per_page?: number;
}

export interface PaginatedBlogs {
    data: BlogPost[];
    current_page: number;
    first_page_url: string;
    from: number | null;
    last_page: number;
    last_page_url: string;
    links: {
        url: string | null;
        label: string;
        active: boolean;
    }[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number | null;
    total: number;
}

export interface BlogFormData {
    title: string;
    slug: string;
    category: string;
    excerpt: string;
    content: string;
    author_name: string;
    read_time: string;
    status: 'published' | 'draft';
    is_featured: boolean;
    featured_image: string;
    image_file: File | null;
    meta_title: string;
    meta_description: string;
}
