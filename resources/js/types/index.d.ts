import { LucideIcon } from 'lucide-react';
import type { Config } from 'ziggy-js';
import { ErrorBag, Errors, PageProps, VisitOptions } from '@inertiajs/core/types/types';

export interface Auth {
    user: User;
    organization: Organization;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    href: string;
    icon?: LucideIcon | null;
    isActive?: boolean;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    ziggy: Config & { location: string };
    sidebarOpen: boolean;
    [key: string]: unknown;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
}

export interface Organization {
    id: number;
    name: string;
}

export interface Project {
    id: number;
    name: string;
    description: string;
}

export interface TentantSharedData extends SharedData {
    flash: {
        success?: string;
        error?: string;
    };
}

export interface Member {
    id: number;
    name: string;
    email: string;
    role: string;
}

