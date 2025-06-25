import path from 'path';
import { fileURLToPath } from 'url';

const nextConfig = {
  sassOptions: {
    includePaths: ['./src/app/styles', './src/components'],
    outputStyle: process.env.NODE_ENV === 'production' ? 'compressed' : 'expanded',
    // Логирование для отладки SCSS
    additionalData: (content, { resourcePath }) => {
      console.log(`Processing SCSS file: ${resourcePath}`);
      return content;
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '',
        pathname: '**',
      },
    ],
  },
  webpack(config, { dev }) {
    if (dev) {
      // Настройка для HMR
      config.watchOptions = {
        ...config.watchOptions,
        poll: 300, // Опрос файлов каждые 300 мс
        ignored: ['**/node_modules/**', '**/.next/**'],
      };
      // Убедимся, что sass-loader настроен для модульных стилей
      config.module.rules.forEach((rule) => {
        if (rule.test && rule.test.toString().includes('.scss')) {
          rule.rules = rule.rules || [];
          rule.rules.push({
            test: /\.module\.scss$/,
            use: [
              {
                loader: 'css-loader',
                options: {
                  modules: {
                    localIdentName: '[name]__[local]___[hash:base64:5]',
                    exportLocalsConvention: 'camelCase',
                  },
                },
              },
            ],
          });
        }
      });
    }
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@': path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'src'),
    };
    return config;
  },
};

export default nextConfig;