import { defineConfig } from 'vite';
const { resolve } = require('path');

module.exports = defineConfig({
    root: resolve(__dirname, './src'),
    build: {
        rollupOptions: {
            emptyOutDir: true,
            output: {
                dir: resolve(__dirname, './dist'),
                entryFileNames: 'js/app.min.js',
                assetFileNames: 'css/app.min.css',
            },
        },
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
        },
    },
});
