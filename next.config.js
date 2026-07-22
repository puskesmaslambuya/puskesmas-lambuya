/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Diperlukan karena Cloudflare Pages tidak mendukung Next.js Image Optimization
    // secara native. Bisa diganti ke loader lain (mis. Cloudflare Images) di tahap deploy.
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};

module.exports = nextConfig;
