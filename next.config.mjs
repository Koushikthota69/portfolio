/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',       // Enables static export
  images: {
    unoptimized: true,    // Disables Image Optimization for static sites
  },
  trailingSlash: true,    // Important for GitHub Pages
};

export default nextConfig;
