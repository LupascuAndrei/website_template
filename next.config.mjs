/** @type {import('next').NextConfig} */

// Set NEXT_PUBLIC_BASE_PATH at build time for GitHub Pages project sites,
// e.g. NEXT_PUBLIC_BASE_PATH=/website_template. Leave empty for user sites
// (username.github.io) or custom domains.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
