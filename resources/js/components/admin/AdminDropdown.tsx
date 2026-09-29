import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

export interface DropdownOption {
    value: string;
    label: string;
    icon?: React.ComponentType<{
        className?: string;
        style?: React.CSSProperties;
    }>;
    badge?: string;
    description?: string;
}

interface AdminDropdownProps {
    value: string;
    onChange: (value: string) => void;
    options: DropdownOption[];
    placeholder?: string;
    label?: string;
    icon?: React.ComponentType<{
        className?: string;
        style?: React.CSSProperties;
    }>;
    className?: string;
    disabled?: boolean;
    direction?: 'up' | 'down';
}

export default function AdminDropdown({
    value,
    onChange,
    options,
    placeholder = 'Select option...',
    label,
    icon: TriggerIcon,
    className = '',
    disabled = false,
    direction = 'down',
}: AdminDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Selected option object
    const selectedOption = options.find((opt) => opt.value === value);

    // Close on outside click
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen]);

    const handleSelect = (optionValue: string) => {
        onChange(optionValue);
        setIsOpen(false);
    };

    return (
        <div ref={dropdownRef} className={`relative ${className}`}>
            {label && (
                <label
                    className="mb-1.5 block text-xs font-semibold"
                    style={{ color: 'var(--admin-text-secondary)' }}
                >
                    {label}
                </label>
            )}

            {/* Dropdown Trigger Button */}
            <button
                type="button"
                disabled={disabled}
                onClick={() => !disabled && setIsOpen((prev) => !prev)}
                aria-haspopup="listbox"
                aria-expanded={isOpen}
                className={`flex w-full cursor-pointer items-center justify-between gap-2.5 rounded-xl border px-3.5 py-2.5 text-xs font-medium transition-all duration-200 outline-none ${
                    disabled
                        ? 'cursor-not-allowed opacity-50'
                        : 'hover:opacity-90'
                }`}
                style={{
                    backgroundColor: 'var(--admin-input-bg)',
                    borderColor: isOpen
                        ? 'var(--admin-accent)'
                        : 'var(--admin-input-border)',
                    color: selectedOption
                        ? 'var(--admin-text-primary)'
                        : 'var(--admin-text-dim)',
                    boxShadow: isOpen
                        ? '0 0 0 2px var(--admin-accent-glow)'
                        : 'none',
                }}
            >
                <div className="flex min-w-0 items-center gap-2 truncate">
                    {TriggerIcon && (
                        <TriggerIcon
                            className="h-3.5 w-3.5 shrink-0"
                            style={{ color: 'var(--admin-text-dim)' }}
                        />
                    )}
                    {selectedOption?.icon && (
                        <selectedOption.icon
                            className="h-3.5 w-3.5 shrink-0"
                            style={{ color: 'var(--admin-accent)' }}
                        />
                    )}
                    <span className="truncate">
                        {selectedOption ? selectedOption.label : placeholder}
                    </span>
                </div>

                <div className="flex shrink-0 items-center gap-1.5">
                    {selectedOption?.badge && (
                        <span
                            className="rounded-full px-1.5 py-0.5 font-mono text-[9px] font-semibold"
                            style={{
                                backgroundColor:
                                    'var(--admin-button-secondary-bg)',
                                color: 'var(--admin-text-secondary)',
                            }}
                        >
                            {selectedOption.badge}
                        </span>
                    )}
                    <ChevronDown
                        className={`h-3.5 w-3.5 shrink-0 transition-transform duration-200 ${
                            isOpen ? 'rotate-180' : ''
                        }`}
                        style={{ color: 'var(--admin-text-dim)' }}
                    />
                </div>
            </button>

            {/* Dropdown Popover Options Menu */}
            {isOpen && (
                <div
                    role="listbox"
                    className={`absolute left-0 z-50 ${
                        direction === 'up'
                            ? 'bottom-full mb-1.5 origin-bottom'
                            : 'top-full mt-1.5 origin-top'
                    } max-h-60 w-full min-w-[140px] animate-in overflow-y-auto rounded-xl border p-1 shadow-2xl backdrop-blur-xl zoom-in-95 fade-in`}
                    style={{
                        backgroundColor: 'var(--admin-card-bg)',
                        borderColor: 'var(--admin-border)',
                    }}
                >
                    {options.map((option) => {
                        const isSelected = option.value === value;
                        const OptionIcon = option.icon;

                        return (
                            <div
                                key={option.value}
                                role="option"
                                aria-selected={isSelected}
                                onClick={() => handleSelect(option.value)}
                                className="group flex cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-xs transition-colors"
                                style={{
                                    backgroundColor: isSelected
                                        ? 'var(--admin-button-secondary-bg)'
                                        : 'transparent',
                                    color: isSelected
                                        ? 'var(--admin-accent)'
                                        : 'var(--admin-text-primary)',
                                }}
                                onMouseEnter={(e) => {
                                    if (!isSelected) {
                                        e.currentTarget.style.backgroundColor =
                                            'var(--admin-card-subtle)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (!isSelected) {
                                        e.currentTarget.style.backgroundColor =
                                            'transparent';
                                    }
                                }}
                            >
                                <div className="flex min-w-0 items-center gap-2 truncate">
                                    {OptionIcon && (
                                        <OptionIcon
                                            className="h-3.5 w-3.5 shrink-0 transition-colors"
                                            style={{
                                                color: isSelected
                                                    ? 'var(--admin-accent)'
                                                    : 'var(--admin-text-secondary)',
                                            }}
                                        />
                                    )}
                                    <div className="truncate">
                                        <div className="truncate font-medium">
                                            {option.label}
                                        </div>
                                        {option.description && (
                                            <div
                                                className="truncate text-[10px]"
                                                style={{
                                                    color: 'var(--admin-text-muted)',
                                                }}
                                            >
                                                {option.description}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="flex shrink-0 items-center gap-2">
                                    {option.badge && (
                                        <span
                                            className="rounded-full px-1.5 py-0.5 font-mono text-[9px] font-semibold"
                                            style={{
                                                backgroundColor:
                                                    'var(--admin-button-secondary-bg)',
                                                color: 'var(--admin-text-secondary)',
                                            }}
                                        >
                                            {option.badge}
                                        </span>
                                    )}
                                    {isSelected && (
                                        <Check
                                            className="h-3.5 w-3.5"
                                            style={{
                                                color: 'var(--admin-accent)',
                                            }}
                                        />
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
