import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Exclude cloudflare-worker directory from Next.js build
  webpack: (config) => {
    config.watchOptions = {
      ...config.watchOptions,
      ignored: ['**/cloudflare-worker/**', '**/node_modules/**']
    }
    return config
  },
  
  // Set output file tracing root to silence warning
  outputFileTracingRoot: __dirname,
}

export default nextConfig
