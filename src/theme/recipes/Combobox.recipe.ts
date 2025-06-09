import { comboboxAnatomy } from '@ark-ui/anatomy';
import { defineSlotRecipe } from '@pandacss/dev';

const combobox = defineSlotRecipe({
  className: 'combobox',
  // "root" | "control" | "trigger" | "clearTrigger" | "content"
  // | "itemGroup" | "itemGroupLabel" | "item" | "itemText" | "itemIndicator"
  slots: comboboxAnatomy.keys(),
  base: {
    root: {},
    control: {
      position: 'relative',
    },
    clearTrigger: {
      position: 'absolute!',
      top: '50%',
      right: '48',
      zIndex: '1',
      transform: 'translateY(-50%)',
      cursor: 'pointer',
    },
    trigger: {
      position: 'absolute!',
      top: '50%',
      right: '16',
      zIndex: '1',
      transition: '0.2s',
      transform: 'translateY(-50%)',
      cursor: 'pointer',
      '[data-state="open"] &': {
        transform: 'translateY(-50%) rotate(180deg)',
      },
    },
    content: {
      backgroundColor: 'background.primary',
      boxShadow: 'large',
      borderColor: 'border.minimal',
      borderRadius: '4',
      borderStyle: 'solid',
      borderWidth: '1',
    },
    item: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingInlineStart: '16',
      paddingInlineEnd: '24',
      cursor: 'pointer',
      _highlighted: {
        backgroundColor: 'background.hover',
      },
      _hover: {
        backgroundColor: 'background.hover',
      },
      _active: {
        backgroundColor: 'background.active',
      },
      _checked: {
        backgroundColor: 'background.selected',
        _hover: {
          backgroundColor: 'background.selected-hover',
        },
      },
      _disabled: {
        backgroundColor: 'background.disabled',
        color: 'text.disabled',
        cursor: 'not-allowed',
      },
    },
  },
  variants: {
    size: {
      lg: {
        item: {
          paddingBlock: '12',
        },
      },
      md: {
        item: {
          paddingBlock: '8',
        },
      },
    },
  },
  defaultVariants: {
    size: 'lg',
  },
});

export default combobox;
