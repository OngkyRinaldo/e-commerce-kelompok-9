/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['index.html', './node_modules/flowbite/**/*.js'],
    theme: {
        fontFamily: {
            Primary: 'Graphik',
        },
        extend: {},
    },
    plugins: [require('flowbite/plugin')],
};
