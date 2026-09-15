import type { Auth } from './auth';

export type SharedData = {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    sidebarOpen?: boolean;
    [key: string]: unknown;
};

export type * from './auth';
export type * from './navigation';
export type * from './ui';
