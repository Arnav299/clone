/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  basePath: "/clone",        // 👈 repo name
  assetPrefix: "/clone/",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
