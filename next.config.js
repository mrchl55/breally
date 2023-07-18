/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains : [ 'localhost', 's3.us-east-1.wasabisys.com']
  },
}

module.exports = nextConfig
