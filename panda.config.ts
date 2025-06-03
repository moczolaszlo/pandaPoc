import { defineConfig } from '@pandacss/dev';

import theme from './src/theme';
import globalCss from './src/theme/globalCss';

export default defineConfig({
  presets: [],

  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.tsx'],

  // The output directory for your css system
  outdir: 'styled-system',

  globalCss,
  theme,
  staticCss: {
    recipes: '*',
  },
  jsxFramework: 'react',
  strictTokens: true,
});
