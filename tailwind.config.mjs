/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        canvas: '#f5efe6',
        surface: '#fffaf2',
        ink: '#1f2933',
        muted: '#5f6b76',
        accent: '#b77943',
        accentDeep: '#8c4e1f',
        accentSoft: '#e9d2bc',
        line: '#d9c7b3',
        pine: '#2f4f4f',
        midnight: '#14213d',
      },
      fontFamily: {
        sans: ['"Instrument Sans"', '"Avenir Next"', '"Segoe UI"', 'sans-serif'],
        display: ['"Iowan Old Style"', '"Palatino Linotype"', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'hero-glow':
          'radial-gradient(circle at top left, rgba(183, 121, 67, 0.22), transparent 40%), radial-gradient(circle at 80% 20%, rgba(47, 79, 79, 0.14), transparent 30%), linear-gradient(135deg, #fffaf2 0%, #f5efe6 55%, #efe5d9 100%)',
        'section-glow':
          'linear-gradient(180deg, rgba(255, 250, 242, 0.95) 0%, rgba(245, 239, 230, 0.82) 100%)',
      },
      animation: {
        'fade-up': 'fade-up 0.8s ease forwards',
        drift: 'drift 14s ease-in-out infinite',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -10px, 0)' },
        },
      },
      boxShadow: {
        panel: '0 20px 60px rgba(31, 41, 51, 0.10)',
        lift: '0 24px 80px rgba(31, 41, 51, 0.16)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
