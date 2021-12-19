module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  async redirects() {
    return [
      {
        source: '/s\\?country=:country',
        destination: '/country/:country',
        // has: [{ type: 'query', key: '' }],
        permanent: true,
      }
    ];
  },
};
