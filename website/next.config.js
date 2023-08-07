// next.config.js
const dotenv = require('dotenv')

dotenv.config({ path: require('find-config')('.env') })
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  env: {
    MONGODB_URI: process.env.MONGODB_URI,
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_SECRET: process.env.CLIENT_SECRET,
    REDIRECT_URL: process.env.REDIRECT_URL,
    HMAC_KEY: process.env.HMAC_KEY,
  },
}

module.exports = nextConfig
