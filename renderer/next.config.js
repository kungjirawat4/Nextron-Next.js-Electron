/** @type {import('next').NextConfig} */
module.exports = {
  output: 'export',
  distDir: process.env.NODE_ENV === 'production' ? '../app' : '.next',
  //  distDir: '../app',
  trailingSlash: false,
  images: {
    unoptimized: true
  },
  webpack: config => {
    return config
  }
}
