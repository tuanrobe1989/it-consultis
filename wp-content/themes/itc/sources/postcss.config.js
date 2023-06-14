module.exports = {
    plugins: {
        'postcss-import': {},
        "postcss-preset-env": {},
        'tailwindcss/nesting': 'postcss-nesting',
        "tailwindcss": { config: './tailwind.config.js' },
        "autoprefixer": {},
    }
};