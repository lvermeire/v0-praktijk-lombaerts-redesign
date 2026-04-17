const basePath = process.env.NEXT_BASE_PATH && process.env.NEXT_BASE_PATH !== "/" ? process.env.NEXT_BASE_PATH : ""

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
