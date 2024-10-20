/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "0.0.0.0" }, { hostname: "randomuser.me" }],
  },
};

export default nextConfig;
