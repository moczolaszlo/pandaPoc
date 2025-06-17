import { defineRecipe } from '@pandacss/dev';

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
  },
});

export default select;
