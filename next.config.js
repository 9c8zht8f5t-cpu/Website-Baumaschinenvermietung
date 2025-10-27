/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repo = 'Website-Baumaschinenvermietung'; // exakt dein Repo-Name

const nextConfig = {
  // Für CSS background-image etc.
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? `/${repo}` : ''
  },

  output: 'export',
  images: { unoptimized: true },
  experimental: { typedRoutes: true },

  // Wichtig für GitHub Pages (Projekt-Repo unter /<repo>)
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
  trailingSlash: true,
};

module.exports = nextConfig;
