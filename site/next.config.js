/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'rwcloud.ch',
    description: 'Eigene KASM Regsitry.',
    icon: '/img/logo.svg',
    listUrl: 'https://rewa81.github.io/kasm-registry/',
    contactUrl: 'https://rewa81.github.io/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
