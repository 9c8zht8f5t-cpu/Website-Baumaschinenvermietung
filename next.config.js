/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repo = 'Website-Baumaschinenvermietung'; // exakt dein Repo-Name

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  experimental: { typedRoutes: true },
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
  trailingSlash: true,
};

module.exports = nextConfig;
