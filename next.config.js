/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [{ source: "/records", destination: "/history", permanent: true }];
  },
};
module.exports = nextConfig;
