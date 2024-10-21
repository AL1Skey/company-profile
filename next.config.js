/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  distDir: "iaajofficial.com",
  output: "export",
  trailingSlash: true,
};

module.exports = nextConfig;
