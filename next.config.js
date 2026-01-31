/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Enable static export
  i18n: {
    locales: ['ar', 'en'],
    defaultLocale: 'ar',
  },
  images: {
    unoptimized: true, // Required for static export
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  // Security headers - removed for static export (not supported)
};

module.exports = nextConfig;
