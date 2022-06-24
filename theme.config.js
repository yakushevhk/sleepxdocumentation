
export default {
  github: 'https://github.com/yakushevhk/sleepxdocumentation',
  docsRepositoryBase: 'https://github.com/yakushevhk/sleepxdocumentation/master',
  titleSuffix: ' – SleepX',
  titleSuffix: ' – SleepX',
  i18n: [
    { locale: 'en', text: 'English' },
    { locale: 'zh', text: '中文' },
    { locale: 'kr', text: '한국어'},
    { locale: 'ru', text: 'Русский' },
    { locale: 'de', text: 'Deutsch' },
  ],

  logo: (
    <>
    
      <span className="mr-2 font-extrabold hidden md:inline">💤 SleepX</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        Documentation
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="SleepX Documentation" />
      <meta name="og:description" content="SleepX Documentation" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="http://cloud.sleepx.world/img/seo.png" />
      <meta name="twitter:site:domain" content="https://docs.sleepx.app" />
      <meta name="twitter:url" content="https://docs.sleepx.app" />
      <meta name="og:title" content="SleepX Documentation" />
      <meta name="og:image" content="http://cloud.sleepx.world/img/seo.png" />
      <meta name="apple-mobile-web-app-title" content="SleepX Documentation" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerText: <>Technology X OÜ {new Date().getFullYear()} ❤️ SleepX</>,
  unstable_faviconGlyph: '👋',
}
