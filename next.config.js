/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  distDir: "dist",
  output: "export",
};

module.exports = nextConfig;
