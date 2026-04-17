const basePath = process.env.NEXT_BASE_PATH && process.env.NEXT_BASE_PATH !== "/" ? process.env.NEXT_BASE_PATH : ""

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
