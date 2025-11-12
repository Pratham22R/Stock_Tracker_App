// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx,css}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    // add other paths if needed
  ],
  theme: {
    extend: {
      colors: {
        // if you want utilities like `border-border`:
        border: 'var(--border)',
        ring: 'var(--ring)',
        foreground: 'var(--foreground)',
        // ...or define color tokens you referenced
      },
    },
  },
  plugins: [
    // require('tw-animate') or whichever plugin for "tw-animate-css"
  ],
};
