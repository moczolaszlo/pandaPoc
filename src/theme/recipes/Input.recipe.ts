import { defineRecipe } from '@pandacss/dev';
import { rem } from '../../utils/utils';

const input = defineRecipe({
  className: 'input',
  jsx: ['Input', 'Field.Input'],
  base: {
    appearance: 'none',
    background: 'background.primary',
    borderColor: 'border.regular',
    borderRadius: '4',
    borderWidth: '1',
    color: 'input.text.inputValue',
    textStyle: 'body/lg/regular',
    width: '100%',
    boxShadow: 'inner',
    transition: '200ms',
    _placeholder: {
      color: 'input.text.placeholder',
    },
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

    _readOnly: {
      _hover: {
        borderColor: 'border.regular',
      },
      background: 'background.disabled',
    },
  },
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      md: { paddingInline: rem(11), paddingBlock: rem(7) },
      lg: { paddingInline: rem(15), paddingBlock: rem(11) },
    },
  },
});

export default input;
