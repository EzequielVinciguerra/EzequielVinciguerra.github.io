const isProd = process.env.NODE_ENV === 'production'

const repo = ''

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',                
    images: { unoptimized: true },   
    trailingSlash: true,             
    assetPrefix: isProd && repo ? `/${repo}/` : '',
    basePath:   isProd && repo ? `/${repo}`   : '',
}

export default nextConfig
