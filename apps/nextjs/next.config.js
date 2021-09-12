/**
 * @link https://nextjs.org/docs/api-reference/next.config.js/introduction
 */
module.exports = {
  experimental: {
    externalDir: true,
    eslint: {
      // This allows production builds to successfully complete even if the project has ESLint errors.
      ignoreDuringBuilds: true,
    },
  },
};
