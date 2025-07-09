export default {
  images: {
    domains: [
      'images.unsplash.com',
      'assets.aceternity.com' // ✅ 이 도메인을 꼭 추가하세요!
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      type: 'asset/resource',
    });
    return config;
  },
};
