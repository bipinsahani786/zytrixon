export interface ProductMetric {
    label: string;
    value: string;
    sublabel?: string;
}

export interface ProductCapability {
    title: string;
    desc: string;
    icon: string;
}

export interface MajorProductData {
    id: string;
    badge: string;
    version: string;
    title: string;
    subtitle: string;
    description: string;
    metrics: ProductMetric[];
    capabilities: ProductCapability[];
    techStack: string[];
    demoUrl: string;
    inquiryText: string;
}
