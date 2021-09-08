const withMDX = require('@next/mdx')({
    extension: /\.mdx$/
  })
  
module.exports = withMDX({
  i18n: {
    locales: ['pl-PL'],
    defaultLocale: 'pl-PL'
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx']
})