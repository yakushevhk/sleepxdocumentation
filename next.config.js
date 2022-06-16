const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  unstable_staticImage: true,
})
module.exports = withNextra({
  locales: ['en', 'zh', 'de'],
    defaultLocale: 'en',
})
