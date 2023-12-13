import { defineConfig } from 'vite'
import terser from '@rollup/plugin-terser';

export default defineConfig({
    build: {
        sourcemap: true,
        minify: false,
        lib: {
            entry: 'src/main.ts',
            // name: 'SingleSubmit',
        },
        rollupOptions: {
            output: [
                {
                    format: 'iife',
                    name: 'SingleSubmit',
                    entryFileNames: 'single-submit.js'
                },
                {
                    format: 'iife',
                    name: 'SingleSubmit',
                    entryFileNames: 'single-submit.min.js',
                    plugins: [terser()],
                },
                {
                    format: 'umd',
                    name: 'SingleSubmit',
                    dir: 'dist/umd',
                    entryFileNames: 'single-submit.umd.cjs'
                },
                {
                    format: 'umd',
                    name: 'SingleSubmit',
                    dir: 'dist/umd',
                    entryFileNames: 'single-submit.umd.min.cjs',
                    plugins: [terser()],
                }
            ],
        },
    },
});