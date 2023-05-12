// const { "[data-theme=dark]": darkTheme,
// "[data-theme=light]": lightTheme} = require("daisyui/src/colors/themes");

module.exports = {
    content: ["./index.html", "./src/**/*.{svelte,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            screens: {
                xs: "380px",
            },
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("daisyui"),
        function ({ addVariant }) {
            addVariant("child", "& > *");
            addVariant("child-hover", "& > *:hover");
        },
    ],
    daisyui: {
        styled: true,
        themes: [
            // Generated from https://themes.ionevolve.com/
            "divbloxLight",
            "divbloxDark",
            {
                divbloxLight: {
                    'primary': '#2D7AF1',
                    'primary-focus': '#24043D',
                    'primary-content': '#ffffff',

                    'secondary': '#f000b8',
                    'secondary-focus': '#bd0091',
                    'secondary-content': '#ffffff',

                    'accent': '#37cdbe',
                    'accent-focus': '#2ba69a',
                    'accent-content': '#ffffff',

                    'neutral': '#ffffff',
                    'neutral-focus': '#ffffff',
                    'neutral-content': '#24043D',

                    'base-100': '#ffffff',
                    'base-200': '#f9fafb',
                    'base-300': '#ced3d9',
                    'base-content': '#24043D',

                    'info': '#2d7af1',
                    'success': '#c5dc4b',
                    'warning': '#fcbc24',
                    'error': '#f42434',

                    '--rounded-box': '0.5rem',
                    '--rounded-btn': '0.2rem',
                    '--rounded-badge': '1.9rem',
                    '--animation-btn': '0.25s',
                    '--animation-input': '0.2s',
                    '--btn-text-case': 'uppercase',
                    '--navbar-padding': '1rem',
                    '--border-btn': '1px',
                },
            },
            {
                divbloxDark: {
                    primary: "#793ef9",
                    "primary-focus": "#5C29CE",
                    "primary-content": "#ffffff",
                    secondary: "#A32BBA",
                    "secondary-focus": "#841E98",
                    "secondary-content": "#ffffff",
                    accent: "#9ab5c3",
                    "accent-focus": "#7e9aa9",
                    "accent-content": "#292A39",
                    neutral: "#22262f",
                    "neutral-focus": "#14161a",
                    "neutral-content": "#ffffff",
                    "base-100": "#454758",
                    "base-200": "#2a2e37",
                    "base-300": "#16181d",
                    "base-content": "#ffffff",
                    info: "#C0D5E0",
                    success: "#68DBB3",
                    warning: "#FDD16A",
                    error: "#FF1717",
                    "--rounded-box": "0.5rem",
                    "--rounded-btn": "0.5rem",
                    "--rounded-badge": "0.8rem",
                    "--animation-btn": "0.50s",
                    "--animation-input": "0.2s",
                    "--btn-text-case": "uppercase",
                    "--navbar-padding": "0.5rem",
                    "--border-btn": "1px",
                },
            },
        ],
        base: true,
        utils: true,
        logs: true,
        rtl: false,
        darkTheme: "divbloxDark",
    },
};
