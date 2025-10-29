/** @type {import('next').NextConfig} */
const nextConfig = {
  // Wenn du eine eigene Domain nutzt, brauchst du keinen basePath mehr!
  output: 'export',
  images: { unoptimized: true },
  experimental: { typedRoutes: true },
  trailingSlash: true,

  // Optional: falls du trotzdem env-Variablen brauchst
  env: {
    NEXT_PUBLIC_BASE_PATH: '',
  },
};

module.exports = nextConfig;  