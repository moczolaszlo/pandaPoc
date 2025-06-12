import { defineRecipe } from '@pandacss/dev';
import { rem } from '../../utils/utils';

const select = defineRecipe({
  className: 'select',
  jsx: ['Select', 'Field.Select'],
  base: {
    display: 'block',
    width: '100%',
    borderRadius: '4',
    borderWidth: '1',
    borderColor: 'border.strong',
    background: 'background.primary',
    transition: '200ms',
    _hover: {
      borderColor: 'border.hover',
    },
    _invalid: {
      borderColor: 'border.error',
    },
    _disabled: {
      _hover: {
        borderColor: 'border.disabled',
      },
      _placeholder: {
        color: 'text.disabled',
      },
      color: 'text.disabled',
      background: 'background.disabled',
      cursor: 'not-allowed',
    },
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
});

export default select;
