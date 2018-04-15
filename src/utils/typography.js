import Typography from 'typography'

const typography = new Typography({
  headerFontFamily: ['Playfair Display', 'serif'],
  bodyFontFamily: ['Raleway', 'helvetica', 'sans-serif'],
  googleFonts: [
    {
      name: 'Playfair Display',
      styles: ['400', '400i', '700', '700i'],
    },
    {
      name: 'Raleway',
      styles: ['400', '400i', '700', '700i'],
    },
  ],
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
