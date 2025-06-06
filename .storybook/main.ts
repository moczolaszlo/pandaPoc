import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.stories.tsx"
  ],
  "addons": [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-docs",
    {
      name: '@storybook/addon-styling-webpack',
      options: {
        rules: [
          // Replaces existing CSS rules to support PostCSS
          {
            test: /\.css$/,
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: { importLoaders: 1 }
              },
              {
                // Gets options from `postcss.config.js` in your project root
                loader: 'postcss-loader',
                options: { implementation: require.resolve('postcss') }
              }
            ],
          }
        ]
      }
    },
  ],
  "framework": {
    "name": "@storybook/react-webpack5",
    "options": {}
  },
  webpackFinal: async (config) => {
    config.module = {
      ...config.module,
      rules: [
        ...(config.module?.rules ?? []),
        {
          test: /.*\/bitkit\/.*tsx?$/,
          use: [
            {
              loader: 'ts-loader',
              options: { transpileOnly: true, configFile: require.resolve('@bitrise/bitkit/src/tsconfig.json') },
            },
          ],
        },
      ],
    };

    return config;
  },
};
export default config;