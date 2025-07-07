// next.config.mjs

const nextConfig = {
  output: 'export',

  basePath: '/my-app2',       // ✅ 꼭 넣어야 함
  assetPrefix: '/my-app2',    // ✅ 같이 넣어야 함

  images: {
    domains: ['images.unsplash.com', 'assets.aceternity.com'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      type: 'asset/resource',
    });
    return config;
  },
};

export default nextConfig;
