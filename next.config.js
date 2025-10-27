/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';


const nextConfig = {
  env: { NEXT_PUBLIC_BASE_PATH: isProd ? `/${repo}` : '' },
  output: 'export',
  images: { unoptimized: true },
  experimental: { typedRoutes: true },
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
  trailingSlash: true,
};

module.exports = nextConfig;
