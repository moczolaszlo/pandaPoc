import { defineRecipe } from '@pandacss/dev';
import textStyles from '../textStyles';

const textStyle = textStyles;

const select = defineRecipe({
  className: 'text',
  variants: {
    hasEllipsis: {
      true: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      },
    },
    textStyle,
  },
});

export default select;
