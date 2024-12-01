/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cipl-aimantra.s3.amazonaws.com"], // Add your image domain here
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
