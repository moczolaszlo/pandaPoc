import { comboboxAnatomy } from '@ark-ui/anatomy';
import { defineSlotRecipe } from '@pandacss/dev';

const combobox = defineSlotRecipe({
  className: 'combobox',
  // "root" | "control" | "trigger" | "clearTrigger" | "content"
  // | "itemGroup" | "itemGroupLabel" | "item" | "itemText" | "itemIndicator"
  slots: [...comboboxAnatomy.keys(), 'itemIcon'],
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
      overflow: 'auto',
    },
    itemGroupLabel: {
      paddingInline: '16',
      paddingBlockStart: '12',
      paddingBlockEnd: '4',
      textStyle: 'heading/h6',
      color: 'text.tertiary',
      whiteSpace: 'nowrap',
      display: 'flex',
      gap: '16',
      alignItems: 'center',
      _after: {
        content: '""',
        display: 'block',
        width: '100%',
        height: '1px',
        backgroundColor: 'border.regular',
      },
    },
    item: {
      display: 'flex',
      gap: '12',
      alignItems: 'center',
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
        color: 'text.primary',
        fontWeight: '600',
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
    itemIcon: {
      color: 'icon.secondary!',
      '[data-state="checked"] &': {
        color: 'icon.interactive!',
      },
    },
    itemIndicator: {
      marginInlineStart: 'auto',
      color: 'icon.interactive!',
    },
  },
  variants: {
    size: {
      lg: {
        content: {
          maxHeight: '320',
        },
        item: {
          paddingBlock: '12',
        },
      },
      md: {
        content: {
          maxHeight: '240',
        },
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
