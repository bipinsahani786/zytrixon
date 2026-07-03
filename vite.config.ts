import inertia from '@inertiajs/vite';
import { wayfinder } from '@laravel/vite-plugin-wayfinder';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.tsx'],
            ssr: 'resources/js/ssr.tsx',
            refresh: true,
        }),
        inertia(),
        react({
            babel: {
                plugins: ['babel-plugin-react-compiler'],
            },
        }),
        tailwindcss(),
        wayfinder({
            formVariants: true,
        }),
    ],
    build: {
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        if (id.includes('react/') || id.includes('react-dom/')) return 'vendor-react';
                        if (id.includes('gsap')) return 'vendor-gsap';
                        if (id.includes('framer-motion')) return 'vendor-framer';
                        if (id.includes('lucide-react')) return 'vendor-lucide';
                        if (id.includes('@radix-ui')) return 'vendor-radix';
                        if (id.includes('three') || id.includes('@react-three')) return 'vendor-three';
                    }
                }
            }
        }
    }
});
