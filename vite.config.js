import {resolve} from 'path'

export default {
    build: {
        lib: {
            entry: resolve(__dirname, 'lib/index.js'),
            formats: ['cjs'],
            fileName: 'single-submit.min',
            minify: true,
        }
    }
}