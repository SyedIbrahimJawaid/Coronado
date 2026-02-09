/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  async redirects() {
    return [
      {
        source: '/sell-and-upgrade',
        destination: '/sell-upgrade',
        permanent: true,
      },
      {
        source: '/45-day-express',
        destination: '/express',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

