import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'playfair': ['Playfair Display', 'serif'],
      'montserrat': ['Montserrat', 'sans-serif'],
      'roboto': ['Roboto Mono', 'monospace']
    },
    colors: {
      'black': '#000',
      'grey': '#333',
      'slate-gray': '#666',
      'white': '#fff',
      'beige': '#f5f5f5',
      'navy': '#000080',
      'mustard': '#daa520',
      'teal': '#008080'
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
