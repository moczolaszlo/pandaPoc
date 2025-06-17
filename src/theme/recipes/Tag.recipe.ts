import { defineSlotRecipe } from '@pandacss/dev';
import { rem } from '../../utils/utils';

const tag = defineSlotRecipe({
  className: 'tag',
  slots: ['root', 'label', 'closeTrigger'],
  base: {
    root: {
      display: 'inline-flex',
      alignItems: 'center',
      paddingBlock: rem(3),
      borderRadius: '4',
      borderStyle: 'solid',
      borderWidth: rem(1),
    },
    label: {
      paddingInline: '4',
    },
    closeTrigger: {
      cursor: 'pointer',
      display: 'inline-flex',
      borderRadius: '4',
    }
  },
  variants: {
    colorScheme: {
      neutral: {
        root: {
          color: 'text.body',
          backgroundColor: 'sys.neutral.subtle',
          borderColor: 'sys.neutral.muted'
        },
        closeTrigger: {
          _hover: {
            backgroundColor: 'sys.neutral.moderate'
          },    
        },
      },
      blue: {
        root: {
          color: 'sys.info.strong',
          backgroundColor: 'sys.info.subtle',
          borderColor: 'sys.info.muted'
        },
        closeTrigger: {
          _hover: {
            backgroundColor: 'sys.info.moderate'
          },    
        },
      },
      green: {
        root: {
          color: 'sys.success.strong',
          backgroundColor: 'sys.success.subtle',
          borderColor: 'sys.success.muted'
        },
        closeTrigger: {
          _hover: {
            backgroundColor: 'sys.success.moderate'
          },    
        },
      },
      red: {
        root: {
          color: 'sys.critical.strong',
          backgroundColor: 'sys.critical.subtle',
          borderColor: 'sys.critical.muted'
        },
        closeTrigger: {
          _hover: {
            backgroundColor: 'sys.critical.moderate'
          },    
        },
      },
      yellow: {
        root: {
          color: 'sys.warning.strong',
          backgroundColor: 'sys.warning.subtle',
          borderColor: 'sys.warning.muted'
        },
        closeTrigger: {
          _hover: {
            backgroundColor: 'sys.warning.moderate'
          },    
        },
      },
      purple: {
        root: {
          color: 'sys.interactive.strong',
          backgroundColor: 'sys.interactive.subtle',
          borderColor: 'sys.interactive.muted'
        },
        closeTrigger: {
          _hover: {
            backgroundColor: 'sys.interactive.moderate'
          },    
        },
      },
      purpleFilled: {
        root: {
          color: 'text.on-color',
          backgroundColor: 'sys.interactive.bold',
          borderColor: 'sys.interactive.bold',
          fontWeight: '600',
        },
        closeTrigger: {
          _hover: {
            backgroundColor: 'sys.interactive.highlight'
          },    
        },
      },
    },
    size: {
      sm: {
        root: {
          padding: rem(3),
        },
        label: {
          textStyle: 'comp/tag/sm',
        },
      },
      md: {
        root: {
          paddingInline: rem(5),
          paddingBlock: rem(3),
        },
        label: {
          textStyle: 'comp/tag/md',
        },
        closeTrigger: {
          marginInlineEnd: '-2px',
          padding: '4'
        }
      },
    },
  },
  defaultVariants: {
    colorScheme: 'neutral',
    size: 'md',
  },
});

export default tag;
