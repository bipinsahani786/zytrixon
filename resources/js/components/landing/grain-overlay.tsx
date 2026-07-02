import { useMediaQuery } from '@/hooks/use-media-query';

export default function GrainOverlay() {
    const isMobile = useMediaQuery('(max-width: 768px)');
    
    if (isMobile) return null;
    
    return <div className="grain-overlay" aria-hidden="true" />;
}
