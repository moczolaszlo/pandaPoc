import { defineRecipe, RecipeConfig } from '@pandacss/dev';
import { rem } from '../../utils/utils';
import { inputConfig } from './Input.recipe';

const config: RecipeConfig = {
  className: 'textarea',
  jsx: ['Textarea', 'Field.Textarea'],
  base: {
    ...inputConfig.base,
    display: 'block',
    minHeight: '96',
  },
  defaultVariants: {
    size: 'lg',
  },
  variants: {
    size: {
      md: { paddingInline: rem(11), paddingBlock: rem(7) },
      lg: { paddingInline: rem(15), paddingBlock: rem(11) },
    },
  },
};

const textarea = defineRecipe(config);

export default textarea;
