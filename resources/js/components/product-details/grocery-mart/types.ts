export type PlatformTab = 'web' | 'customer' | 'delivery';
export type ViewMode = 'images' | 'videos';

export interface ImageSlide {
    title: string;
    subtitle: string;
    image: string;
    desc: string;
    badges: string[];
    specs?: { label: string; value: string }[];
}

export interface VideoSlide {
    id: string;
    title: string;
    duration: string;
    badge: string;
    src: string;
    poster: string;
    desc: string;
}

export interface PlatformData {
    id: PlatformTab;
    icon: string;
    name: string;
    shortLabel: string;
    tagline: string;
    color: string;
    accentGlow: string;
    images: ImageSlide[];
    videos: VideoSlide[];
}
