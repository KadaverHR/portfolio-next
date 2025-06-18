import path from 'path';
import { fileURLToPath } from 'url';

const nextConfig = {
  sassOptions: {
    includePaths: ['./src/app/styles'],
    outputStyle: 'compressed',
  },
  images: {
    domains: ['localhost'],
  },
  webpack(config) {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@': path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'src'),
    };
    return config;
  },
};

export default nextConfig;