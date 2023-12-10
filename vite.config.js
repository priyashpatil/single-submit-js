export default {
    build: {
        sourcemap: true,
        lib: {
            entry: 'src/main.ts',
            name: 'SingleSubmit',
            minify: true,
        },
        rollupOptions: {
            output: {
                entryFileNames: 'single-submit.min.js',
            },
        },
    },
};