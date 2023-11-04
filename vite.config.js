import { resolve } from 'path';

export default {
    build: {
        lib: {
            name: 'single-submit',
            entry: resolve(__dirname, 'src/main.ts'),
            formats: ['cjs', 'umd'],
            minify: true,
        },
        // Set the entryFileNames property here
        rollupOptions: {
            output: {
                entryFileNames: 'single-submit.min.js',
            },
        },
    },
};
