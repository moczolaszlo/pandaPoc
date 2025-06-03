import { tabsAnatomy } from '@ark-ui/anatomy';
import { defineSlotRecipe } from '@pandacss/dev';

const tabs = defineSlotRecipe({
  className: 'tabs',
  slots: tabsAnatomy.keys(), // "root" | "list" | "trigger" | "content" | "indicator"
  base: {
    root: {},
    list: {
      borderBottom: '1px solid #DFDAE1',
      position: 'relative',
    },
    trigger: {
      cursor: 'pointer',
      color: '#6B6071',
      paddingInline: '16px',
      paddingBlock: '12px',
      fontSize: '16px',
      fontWeight: '600',
      lineHeight: '24px',
      _hover: {
        bg: '#f6f4f6',
      },
      _selected: {
        color: '#2B0E3F',
        borderBottom: '2px solid #9247C2',
        _hover: {
          bg: '#fff',
        },
      },
    },
  },
});

export default tabs;
