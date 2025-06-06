import { defineRecipe, SystemStyleObject } from '@pandacss/dev';
import { rem } from '../../utils/utils';

type Variant = 'primary' | 'secondary' | 'tertiary' | 'danger-primary' | 'danger-secondary' | 'danger-tertiary';

const variants = (
  ['primary', 'secondary', 'tertiary', 'danger-primary', 'danger-secondary', 'danger-tertiary'] as Variant[]
).reduce(
  (obj, variant) => {
    let borderColor = variant?.includes('secondary')
      ? `{colors.button.${variant}.border}`
      : `{colors.button.${variant}.bg}`;
    let disabledBorderColor = variant?.includes('secondary')
      ? `{colors.button.${variant}.border-disabled}`
      : `{colors.button.${variant}.bg-disabled}`;
    if (variant?.includes('tertiary')) {
      borderColor = 'transparent';
      disabledBorderColor = 'transparent';
    }
    obj[variant as NonNullable<Variant>] = {
      _hover: {
        backgroundColor: `{colors.button.${variant}.bg-hover}`,
        borderColor: variant?.includes('secondary')
          ? `{colors.button.${variant}.border-hover}`
          : `{colors.button.${variant}.bg-hover}`,
        color: `{colors.button.${variant}.fg-hover}`,
      },
      _active: {
        backgroundColor: `{colors.button.${variant}.bg-active}`,
        borderColor: variant?.includes('secondary')
          ? `{colors.button.${variant}.border-active}`
          : `{colors.button.${variant}.bg-active}`,
        color: `{colors.button.${variant}.fg-active}`,
      },
      _disabled: {
        backgroundColor: `{colors.button.${variant}.bg-disabled}!`,
        borderColor: `${disabledBorderColor}!`,
        color: `{colors.button.${variant}.fg-disabled}!`,
        cursor: 'not-allowed',
      },
      backgroundColor: `{colors.button.${variant}.bg}`,
      borderColor,
      borderStyle: 'solid',
      borderWidth: rem(1),
      color: `{colors.button.${variant}.fg}`,
    };
    return obj;
  },
  {} as Record<NonNullable<Variant>, SystemStyleObject>,
);

const button = defineRecipe({
  className: 'button',
  base: {
    borderRadius: '4',
    cursor: 'pointer',
    fontWeight: 600,
    border: '1px solid transparent',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8',
    _disabled: {
      cursor: 'not-allowed',
    },
  },
  variants: {
    variant: variants,
    size: {
      sm: { padding: rem(7), fontSize: '14', lineHeight: '20px' },
      md: { paddingInline: rem(11), paddingBlock: rem(7), fontSize: '14', lineHeight: '24px' },
      lg: { padding: rem(11), fontSize: '16', lineHeight: '24px' },
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'lg',
  },
});

export default button;
