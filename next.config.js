/** @type {import('next').NextConfig} */
// Set BASE_PATH=/your-repo-name in CI for GitHub project pages (user.github.io/repo/).
// Omit for local dev, or when the site is served from the domain root (custom domain).
const basePath = process.env.BASE_PATH || ''

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // GitHub project Pages serves the site at /<repo>/; next/image can omit basePath for files in /public on static export.
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  ...(basePath ? { basePath } : {}),
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
