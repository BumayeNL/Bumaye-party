/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: ".next",
  images: {
    unoptimized: true,
  },
  experimental: {
    turbo: {
      root: "./",
    },
  },
};

export default nextConfig;
