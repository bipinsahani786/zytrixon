import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, Loader2, AlertCircle } from 'lucide-react';

interface LoginFormCardProps {
    data: {
        email: string;
        password: string;
    };
    setData: (field: string, value: any) => void;
    errors: Record<string, string>;
    processing: boolean;
    onSubmit: (e: React.FormEvent) => void;
    sessionError?: string | null;
}

export default function LoginFormCard({
    data,
    setData,
    errors,
    processing,
    onSubmit,
    sessionError,
}: LoginFormCardProps) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="w-full space-y-4">
            {/* Session Error Alert */}
            {sessionError && (
                <div className="flex items-center gap-2.5 p-3 rounded-xl border text-xs font-medium text-rose-500 bg-rose-500/10 border-rose-500/20 backdrop-blur-sm animate-in fade-in slide-in-from-top-1">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{sessionError}</span>
                </div>
            )}

            <form onSubmit={onSubmit} className="space-y-4">
                {/* 1. Email Address Input */}
                <div className="space-y-1">
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-400 dark:text-neutral-500">
                            <Mail className="w-5 h-5" />
                        </div>
                        <input
                            id="email"
                            type="text"
                            required
                            autoComplete="username"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            placeholder="Email Address"
                            className="w-full pl-12 pr-4 py-3.5 rounded-xl text-sm font-sans transition-all duration-200 focus:outline-none shadow-sm"
                            style={{
                                backgroundColor: 'var(--zy-card-bg, #ffffff)',
                                color: 'var(--zy-text-primary, #111111)',
                                borderColor: errors.email
                                    ? '#ef4444'
                                    : 'var(--zy-border-subtle, #e5e7eb)',
                                borderWidth: '1.5px',
                                borderStyle: 'solid',
                            }}
                            onFocus={(e) => {
                                if (!errors.email) {
                                    e.currentTarget.style.borderColor = '#111111';
                                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0, 0, 0, 0.08)';
                                }
                            }}
                            onBlur={(e) => {
                                if (!errors.email) {
                                    e.currentTarget.style.borderColor = 'var(--zy-border-subtle, #e5e7eb)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }
                            }}
                        />
                    </div>
                    {errors.email && (
                        <p className="text-[11px] text-rose-500 font-medium flex items-center gap-1 mt-1 pl-1">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            {errors.email}
                        </p>
                    )}
                </div>

                {/* 2. Password Input */}
                <div className="space-y-1">
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-400 dark:text-neutral-500">
                            <Lock className="w-5 h-5" />
                        </div>
                        <input
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            required
                            autoComplete="current-password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            placeholder="Password"
                            className="w-full pl-12 pr-12 py-3.5 rounded-xl text-sm font-sans transition-all duration-200 focus:outline-none shadow-sm"
                            style={{
                                backgroundColor: 'var(--zy-card-bg, #ffffff)',
                                color: 'var(--zy-text-primary, #111111)',
                                borderColor: errors.password
                                    ? '#ef4444'
                                    : 'var(--zy-border-subtle, #e5e7eb)',
                                borderWidth: '1.5px',
                                borderStyle: 'solid',
                            }}
                            onFocus={(e) => {
                                if (!errors.password) {
                                    e.currentTarget.style.borderColor = '#111111';
                                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0, 0, 0, 0.08)';
                                }
                            }}
                            onBlur={(e) => {
                                if (!errors.password) {
                                    e.currentTarget.style.borderColor = 'var(--zy-border-subtle, #e5e7eb)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }
                            }}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-0 pr-4 flex items-center cursor-pointer text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors"
                            tabIndex={-1}
                            title={showPassword ? 'Hide password' : 'Show password'}
                        >
                            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                    </div>
                    {errors.password && (
                        <p className="text-[11px] text-rose-500 font-medium flex items-center gap-1 mt-1 pl-1">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            {errors.password}
                        </p>
                    )}
                </div>

                {/* 3. Sign In Button */}
                <div className="pt-2">
                    <button
                        type="submit"
                        disabled={processing}
                        className="w-full py-3.5 px-4 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg active:scale-[0.99] bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
                    >
                        {processing ? (
                            <>
                                <Loader2 className="w-4 h-4 animate-spin" />
                                <span>Signing in...</span>
                            </>
                        ) : (
                            <span>Sign In</span>
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
}
