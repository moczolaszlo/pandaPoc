import type { Theme } from '@pandacss/types';

import tokens from './tokens';
import recipes from './recipes';
import semanticTokens from './semanticTokens';
import textStyles from './textStyles';

const theme: Theme = {
  tokens,
  semanticTokens,
  recipes,
  textStyles,
};

export default theme;
