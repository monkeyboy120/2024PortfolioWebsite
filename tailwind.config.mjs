/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        darkPurple: '#412234',
        englishViolet: '#6D466B',
        wisteria: '#B49FCC',
        mistyRose: '#EAD7D7',
        maize: '#EAAA00', // U of M Maize
        blue: '#00274C', // U of M Blue
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(90deg, #412234, #6D466B, #B49FCC, #EAD7D7)',
      },
      animation: {
        'gradient-x': 'gradient-x 6s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      backgroundSize: {
        '200': '200% 200%',
      },
    },
  },
  plugins: [],
};
