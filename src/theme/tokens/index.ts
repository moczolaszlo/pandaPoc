import { Tokens } from '@pandacss/dev';
import colors from './colors';
import fonts from './fonts';
import fontSizes from './fontSizes';
import fontWeights from './fontWeights';
import radii from './radii';
import shadows from './shadows';
import sizesAndSpacing from './sizesAndSpacing';

const tokens: Tokens = {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  radii,
  shadows,
  sizes: sizesAndSpacing,
  spacing: sizesAndSpacing,
};

export default tokens;
