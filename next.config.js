module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  async redirects() {
    return [
      {
        source: '/',
        has: [
          {
            type: 'query',
            key: 'country',
            value: '(?<countryName>.*)',
          }
        ],
        destination: '/country/:countryName',
        permanent: true,
      }
    ];
  },
};
