/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            aspectRatio: {
                paper: "2245 / 1587 ",
            },
        },
    },
    plugins: [],
};
