/**
 * Lightweight fetch wrapper for admin API calls.
 * Automatically attaches CSRF token and JSON headers.
 */

function getCsrfToken(): string {
    const meta = document.querySelector<HTMLMetaElement>('meta[name="csrf-token"]');
    if (meta) return meta.content;
    // Laravel Inertia also exposes it via cookies
    const match = document.cookie.match(/XSRF-TOKEN=([^;]+)/);
    if (match) return decodeURIComponent(match[1]);
    return '';
}

export async function apiFetch<T = unknown>(
    url: string,
    options: {
        method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
        body?: Record<string, unknown>;
        timeoutMs?: number;
    } = {}
): Promise<{ success: boolean; data?: T; error?: string; [key: string]: unknown }> {
    const { method = 'POST', body, timeoutMs = 180_000 } = options; // 3 min default for Gemini

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

    const headers: Record<string, string> = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'X-CSRF-TOKEN': getCsrfToken(),
        'X-Requested-With': 'XMLHttpRequest',
    };

    try {
        const res = await fetch(url, {
            method,
            headers,
            credentials: 'same-origin',
            body: body ? JSON.stringify(body) : undefined,
            signal: controller.signal,
        });

        clearTimeout(timeoutId);

        if (!res.ok) {
            const errData = await res.json().catch(() => ({}));
            return { success: false, error: errData?.message ?? `HTTP ${res.status}`, ...errData };
        }

        return res.json();
    } catch (e: any) {
        clearTimeout(timeoutId);
        if (e.name === 'AbortError') {
            return { success: false, error: 'Request timed out. Gemini API took too long to respond.' };
        }
        throw e;
    }

}
