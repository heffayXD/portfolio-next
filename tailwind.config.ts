import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'scroll': 'scroll 16s linear infinite'
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-50% - 4rem))' },
        }
      },
      fontFamily: {
        sans: ['var(--font-roboto)', 'sans-serif'],
        roboto: ['var(--font-roboto)', 'sans-serif'],
        montserrat: ['var(--font-montserrat)', 'sans-serif']
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: '#121212',
        error: 'rgb(255, 0, 0)'
      },
    },
  },
  plugins: [],
}

export default config
