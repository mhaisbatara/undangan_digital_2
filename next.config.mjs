const isProd = process.env.NODE_ENV === 'production';
const repoName = 'undangan_digital_2';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? `/${repoName}` : '',
  },
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'raw.githubusercontent.com'],
  },
};

export default nextConfig;
