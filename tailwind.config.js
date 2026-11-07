/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#EC5707',
          'orange-dark': '#C94A06',
          ink: '#101519',
          grey: '#F2F2F2',
        },
      },
      fontFamily: {
        // Slab-serif headings, matching Airavat documents
        display: ['"Roboto Slab"', 'Rockwell', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Five sizes only
        hero: ['56px', { lineHeight: '1.15' }],
        section: ['36px', { lineHeight: '1.2' }],
        card: ['22px', { lineHeight: '1.3' }],
        body: ['17px', { lineHeight: '1.6' }],
        caption: ['14px', { lineHeight: '1.5' }],
      },
      borderRadius: {
        btn: '8px',
      },
    },
  },
  plugins: [],
}
