import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {    
    extend: {
      colors: {
        'sugar': {
          DEFAULT: '#E2E7B3',
          50: '#F7FBDA',
          100: '#EDF2C4',
          200: '#E2E7B3',
          300: '#D5D9A6',
          400: '#CACD9F',
          500: '#B9BB8B',
          600: '#A2A470',
          700: '#838458',
          800: '#616142',
          900: '#40402B',
          950: '#2E2D1F'
        },
      },
      fontFamily: {
        'sans': ['var(--font-lato)', ...defaultTheme.fontFamily.sans],
        'bvs': ['var(--font-bitstream-vera-sans)', 'var(--font-lato)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
export default config
