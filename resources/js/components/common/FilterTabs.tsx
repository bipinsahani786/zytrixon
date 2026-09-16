export interface FilterTabsProps {
    tabs: string[];
    activeTab: string;
    onTabChange: (tab: string) => void;
    className?: string;
}

/**
 * FilterTabs: Reusable category/tag filter pills for sorting lists and grids.
 * Used on Blog, Portfolio, Case Studies, and Service catalogs.
 */
export default function FilterTabs({
    tabs,
    activeTab,
    onTabChange,
    className = '',
}: FilterTabsProps) {
    return (
        <div
            className={`flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 ${className}`}
            role="tablist"
        >
            {tabs.map((tab) => {
                const isActive = activeTab === tab;
                return (
                    <button
                        key={tab}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        onClick={() => onTabChange(tab)}
                        className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-heading font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                            isActive
                                ? 'bg-primary text-primary-foreground shadow-[0_0_20px_var(--accent-cyan-glow)] scale-105'
                                : 'bg-card/70 text-muted-foreground border border-border hover:border-primary/40 hover:text-foreground hover:bg-muted/40'
                        }`}
                    >
                        {tab}
                    </button>
                );
            })}
        </div>
    );
}
