/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // Ensure App Router is enabled by default
    appDir: true
  },
  // Optimize images and static assets on Vercel
  images: {
    formats: ['image/avif', 'image/webp']
  }
};

export default nextConfig;
