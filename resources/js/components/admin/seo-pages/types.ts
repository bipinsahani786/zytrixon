// Types for Admin SEO Location Pages

export interface SeoLocation {
    id: number;
    name: string;
    slug: string;
    state?: string;
    type?: string;
}

export interface SeoService {
    id: number;
    title: string;
    slug: string;
    description?: string;
}

export type SeoTemplate = 'grid' | 'timeline' | 'card' | 'split';
export type SeoStatus = 'draft' | 'published';

export interface SeoSection {
    type: 'why_us' | 'local_context' | 'process' | 'faq' | 'custom';
    heading: string;
    content?: string;
    points?: string[];
    steps?: { title: string; desc: string }[];
    items?: { q: string; a: string }[];
}

export interface SeoPageRecord {
    id: number;
    service_id: number;
    location_id: number;
    service: SeoService;
    location: SeoLocation;
    h1: string | null;
    meta_title: string | null;
    meta_description: string | null;
    hero_description: string | null;
    focus_keyword: string | null;
    template: SeoTemplate;
    status: SeoStatus;
    seo_score: number;
    sections: SeoSection[] | null;
    content_json: Record<string, unknown> | null;
    published_at: string | null;
    created_at: string;
    updated_at: string;
}

export interface SeoPageFormData {
    service_id: number | null;
    location_id: number | null;
    template: SeoTemplate;
    status: SeoStatus;
    h1: string;
    meta_title: string;
    meta_description: string;
    hero_description: string;
    focus_keyword: string;
    sections: SeoSection[];
    seo_score: number;
}

export interface SeoPageKpis {
    total: number;
    published: number;
    draft: number;
    avg_score: number;
}

export interface SeoPageFilters {
    search: string;
    service: string;
    status: string;
    template: string;
    perPage: number;
}

export interface PaginatedSeoPages {
    data: SeoPageRecord[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    from: number | null;
    to: number | null;
    links: { url: string | null; label: string; active: boolean }[];
}

export const TEMPLATE_META: Record<SeoTemplate, { label: string; color: string; accent: string; desc: string }> = {
    grid:     { label: 'Grid',     color: '#3b82f6', accent: '#1d4ed8', desc: 'Card grid layout, clean & structured' },
    timeline: { label: 'Timeline', color: '#10b981', accent: '#059669', desc: 'Vertical timeline, story-driven flow' },
    card:     { label: 'Card',     color: '#8b5cf6', accent: '#7c3aed', desc: 'Glassmorphism cards, modern feel' },
    split:    { label: 'Split',    color: '#f59e0b', accent: '#d97706', desc: '50/50 split sections, bold contrasts' },
};

export const EMPTY_SEO_FORM: SeoPageFormData = {
    service_id:       null,
    location_id:      null,
    template:         'grid',
    status:           'published',
    h1:               '',
    meta_title:       '',
    meta_description: '',
    hero_description: '',
    focus_keyword:    '',
    sections:         [],
    seo_score:        0,
};
