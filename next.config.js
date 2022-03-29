// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

const settings = {
  // swcMinify: true,
  // devIndicators: {
  //   autoPrerender: false,
  // },
  images: {
    domains: ['assets.example.com','i.ibb.co'],
  },
  pwa: {
    dest: 'public',
    // mode: 'production',
    // disable: process.env.NODE_ENV === "development",
    // register: true,
    // skipWaiting: true,
    // runtimeCaching,
    // buildExcludes: [/middleware-manifest\.json$/],
  },
  // reactStrictMode: true,
};

module.exports = process.env.NODE_ENV === 'development' ? settings : withPWA(settings);