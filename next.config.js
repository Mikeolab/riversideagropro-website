/** @type {import('next').NextConfig} */
// Set BASE_PATH=/your-repo-name in CI for GitHub project pages (user.github.io/repo/).
// Omit for local dev, or when the site is served from the domain root (custom domain).
const basePath = process.env.BASE_PATH || ''

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  ...(basePath ? { basePath } : {}),
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
