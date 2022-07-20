/**
 * @link https://nextjs.org/docs/api-reference/next.config.js/introduction
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  experimental: {
    externalDir: true,
    eslint: {
      // This allows production builds to successfully complete even if the project has ESLint errors.
      ignoreDuringBuilds: true,
    },
  },
};

module.exports = nextConfig;
