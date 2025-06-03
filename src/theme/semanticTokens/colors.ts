import { SemanticTokens } from '@pandacss/dev';

const colors: SemanticTokens['colors'] = {
  brand: {
    primary: {
      value: {
        base: '{colors.pal.purple.30}',
      },
    },
  },
  separator: {
    primary: {
      value: {
        base: '{colors.pal.neutral.90}',
      },
    },
  },
  sys: {
    fg: {
      base: {
        value: {
          base: '{colors.pal.neutral.10}',
        },
      },
      primary: {
        value: {
          base: '{colors.pal.purple.10}',
        },
      },
      secondary: {
        value: {
          base: '{colors.pal.neutral.40}',
        },
      },
      tertiary: {
        value: {
          base: '{colors.pal.neutral.60}',
        },
      },
      subtle: {
        value: {
          base: '{colors.pal.neutral.70}',
        },
      },
      minimal: {
        value: {
          base: '{colors.pal.neutral.80}',
        },
      },
      positive: {
        value: {
          base: '{colors.pal.green.50}',
        },
      },
      negative: {
        value: {
          base: '{colors.pal.red.50}',
        },
      },
      'on-color': {
        value: {
          base: '{colors.pal.neutral.100}',
        },
      },
      'on-contrast': {
        value: {
          base: '{colors.pal.neutral.95}',
        },
      },
      'on-disabled': {
        value: {
          base: '{colors.pal.neutral.70}',
        },
      },
      disabled: {
        value: {
          base: '{colors.pal.neutral.80}',
        },
      },
    },
    bg: {
      surface: {
        value: {
          base: '{colors.pal.neutral.100}',
        },
      },
      contrast: {
        value: {
          base: '{colors.pal.neutral.10}',
        },
      },
      moderate: {
        value: {
          base: '{colors.pal.neutral.90}',
        },
      },
      subtle: {
        value: {
          base: '{colors.pal.neutral.93}',
        },
      },
      minimal: {
        value: {
          base: '{colors.pal.neutral.95}',
        },
      },
      disabled: {
        value: {
          base: '{colors.pal.neutral.95}',
        },
      },
    },
    border: {
      minimal: {
        value: {
          base: '{colors.pal.neutral.93}',
        },
      },
      subtle: {
        value: {
          base: '{colors.pal.neutral.90}',
        },
      },
      strong: {
        value: {
          base: '{colors.pal.neutral.80}',
        },
      },
      emphasized: {
        value: {
          base: '{colors.pal.neutral.70}',
        },
      },
      critical: {
        value: {
          base: '{colors.pal.red.50}',
        },
      },
      inverse: {
        value: {
          base: '{colors.pal.neutral.100}',
        },
      },
      'on-contrast': {
        value: {
          base: '{colors.pal.neutral.95}',
        },
      },
      disabled: {
        value: {
          base: '{colors.pal.neutral.90}',
        },
      },
    },
    primary: {
      base: {
        value: {
          base: '{colors.pal.purple.40}',
        },
      },
      emphasized: {
        value: {
          base: '{colors.pal.purple.30}',
        },
      },
      contrast: {
        value: {
          base: '{colors.pal.purple.10}',
        },
      },
      muted: {
        value: {
          base: '{colors.pal.purple.80}',
        },
      },
      subtle: {
        value: {
          base: '{colors.pal.purple.93}',
        },
      },
      disabled: {
        value: {
          base: '{colors.pal.neutral.90}',
        },
      },
    },
    interactive: {
      base: {
        value: {
          base: '{colors.pal.purple.50}',
        },
      },
      strong: {
        value: {
          base: '{colors.pal.purple.40}',
        },
      },
      bold: {
        value: {
          base: '{colors.pal.purple.60}',
        },
      },
      highlight: {
        value: {
          base: '{colors.pal.purple.70}',
        },
      },
      muted: {
        value: {
          base: '{colors.pal.purple.80}',
        },
      },
      moderate: {
        value: {
          base: '{colors.pal.purple.90}',
        },
      },
      subtle: {
        value: {
          base: '{colors.pal.purple.93}',
        },
      },
      minimal: {
        value: {
          base: '{colors.pal.purple.95}',
        },
      },
      disabled: {
        value: {
          base: '{colors.pal.neutral.90}',
        },
      },
    },
    info: {
      base: {
        value: {
          base: '{colors.pal.blue.50}',
        },
      },
      strong: {
        value: {
          base: '{colors.pal.blue.40}',
        },
      },
      bold: {
        value: {
          base: '{colors.pal.blue.60}',
        },
      },
      muted: {
        value: {
          base: '{colors.pal.blue.80}',
        },
      },
      moderate: {
        value: {
          base: '{colors.pal.blue.90}',
        },
      },
      subtle: {
        value: {
          base: '{colors.pal.blue.93}',
        },
      },
      minimal: {
        value: {
          base: '{colors.pal.blue.95}',
        },
      },
    },
    success: {
      base: {
        value: {
          base: '{colors.pal.green.50}',
        },
      },
      strong: {
        value: {
          base: '{colors.pal.green.40}',
        },
      },
      bold: {
        value: {
          base: '{colors.pal.green.60}',
        },
      },
      muted: {
        value: {
          base: '{colors.pal.green.80}',
        },
      },
      moderate: {
        value: {
          base: '{colors.pal.green.90}',
        },
      },
      subtle: {
        value: {
          base: '{colors.pal.green.93}',
        },
      },
      minimal: {
        value: {
          base: '{colors.pal.green.95}',
        },
      },
    },
    warning: {
      base: {
        value: {
          base: '{colors.pal.yellow.50}',
        },
      },
      strong: {
        value: {
          base: '{colors.pal.yellow.40}',
        },
      },
      bold: {
        value: {
          base: '{colors.pal.yellow.60}',
        },
      },
      muted: {
        value: {
          base: '{colors.pal.yellow.80}',
        },
      },
      moderate: {
        value: {
          base: '{colors.pal.yellow.90}',
        },
      },
      subtle: {
        value: {
          base: '{colors.pal.yellow.93}',
        },
      },
      minimal: {
        value: {
          base: '{colors.pal.yellow.95}',
        },
      },
    },
    critical: {
      base: {
        value: {
          base: '{colors.pal.red.50}',
        },
      },
      dark: {
        value: {
          base: '{colors.pal.red.20}',
        },
      },
      strong: {
        value: {
          base: '{colors.pal.red.40}',
        },
      },
      bold: {
        value: {
          base: '{colors.pal.red.60}',
        },
      },
      muted: {
        value: {
          base: '{colors.pal.red.80}',
        },
      },
      moderate: {
        value: {
          base: '{colors.pal.red.90}',
        },
      },
      subtle: {
        value: {
          base: '{colors.pal.red.93}',
        },
      },
      minimal: {
        value: {
          base: '{colors.pal.red.95}',
        },
      },
    },
    neutral: {
      base: {
        value: {
          base: '{colors.pal.neutral.50}',
        },
      },
      strong: {
        value: {
          base: '{colors.pal.neutral.40}',
        },
      },
      bold: {
        value: {
          base: '{colors.pal.neutral.60}',
        },
      },
      muted: {
        value: {
          base: '{colors.pal.neutral.80}',
        },
      },
      moderate: {
        value: {
          base: '{colors.pal.neutral.90}',
        },
      },
      subtle: {
        value: {
          base: '{colors.pal.neutral.93}',
        },
      },
      minimal: {
        value: {
          base: '{colors.pal.neutral.95}',
        },
      },
    },
    orange: {
      base: {
        value: {
          base: '{colors.pal.orange.50}',
        },
      },
      strong: {
        value: {
          base: '{colors.pal.orange.40}',
        },
      },
      bold: {
        value: {
          base: '{colors.pal.orange.60}',
        },
      },
      muted: {
        value: {
          base: '{colors.pal.orange.80}',
        },
      },
      moderate: {
        value: {
          base: '{colors.pal.orange.90}',
        },
      },
      subtle: {
        value: {
          base: '{colors.pal.orange.93}',
        },
      },
      minimal: {
        value: {
          base: '{colors.pal.orange.95}',
        },
      },
    },
    turquoise: {
      base: {
        value: {
          base: '{colors.pal.turquoise.50}',
        },
      },
      strong: {
        value: {
          base: '{colors.pal.turquoise.40}',
        },
      },
      bold: {
        value: {
          base: '{colors.pal.turquoise.60}',
        },
      },
      muted: {
        value: {
          base: '{colors.pal.turquoise.80}',
        },
      },
      moderate: {
        value: {
          base: '{colors.pal.turquoise.90}',
        },
      },
      subtle: {
        value: {
          base: '{colors.pal.turquoise.93}',
        },
      },
      minimal: {
        value: {
          base: '{colors.pal.turquoise.95}',
        },
      },
    },
  },
  button: {
    primary: {
      bg: {
        value: {
          base: '{colors.sys.primary.base}',
        },
      },
      'bg-hover': {
        value: {
          base: '{colors.sys.primary.emphasized}',
        },
      },
      'bg-active': {
        value: {
          base: '{colors.sys.fg.primary}',
        },
      },
      'bg-disabled': {
        value: {
          base: '{colors.sys.primary.disabled}',
        },
      },
      fg: {
        value: {
          base: '{colors.sys.fg.on-color}',
        },
      },
      'fg-hover': {
        value: {
          base: '{colors.sys.fg.on-color}',
        },
      },
      'fg-active': {
        value: {
          base: '{colors.sys.fg.on-color}',
        },
      },
      'fg-disabled': {
        value: {
          base: '{colors.sys.fg.on-disabled}',
        },
      },
    },
    secondary: {
      bg: {
        value: {
          base: '{colors.sys.bg.surface}',
        },
      },
      'bg-hover': {
        value: {
          base: '{colors.sys.bg.subtle}',
        },
      },
      'bg-active': {
        value: {
          base: '{colors.sys.bg.moderate}',
        },
      },
      'bg-disabled': {
        value: {
          base: '{colors.sys.bg.minimal}',
        },
      },
      fg: {
        value: {
          base: '{colors.sys.fg.primary}',
        },
      },
      'fg-hover': {
        value: {
          base: '{colors.sys.fg.primary}',
        },
      },
      'fg-active': {
        value: {
          base: '{colors.sys.fg.primary}',
        },
      },
      'fg-disabled': {
        value: {
          base: '{colors.sys.fg.disabled}',
        },
      },
      border: {
        value: {
          base: '{colors.sys.border.strong}',
        },
      },
      'border-hover': {
        value: {
          base: '{colors.sys.border.emphasized}',
        },
      },
      'border-active': {
        value: {
          base: '{colors.sys.border.emphasized}',
        },
      },
      'border-disabled': {
        value: {
          base: '{colors.sys.border.disabled}',
        },
      },
    },
    tertiary: {
      bg: {
        value: {
          base: 'transparent',
        },
      },
      'bg-hover': {
        value: {
          base: '{colors.sys.bg.subtle}',
        },
      },
      'bg-active': {
        value: {
          base: '{colors.sys.bg.moderate}',
        },
      },
      'bg-disabled': {
        value: {
          base: 'transparent',
        },
      },
      fg: {
        value: {
          base: '{colors.sys.interactive.base}',
        },
      },
      'fg-hover': {
        value: {
          base: '{colors.sys.interactive.strong}',
        },
      },
      'fg-active': {
        value: {
          base: '{colors.sys.fg.primary}',
        },
      },
      'fg-disabled': {
        value: {
          base: '{colors.sys.fg.disabled}',
        },
      },
    },
    'danger-primary': {
      bg: {
        value: {
          base: '{colors.sys.critical.base}',
        },
      },
      'bg-hover': {
        value: {
          base: '{colors.sys.critical.strong}',
        },
      },
      'bg-active': {
        value: {
          base: '{colors.sys.critical.dark}',
        },
      },
      'bg-disabled': {
        value: {
          base: '{colors.sys.primary.disabled}',
        },
      },
      fg: {
        value: {
          base: '{colors.sys.fg.on-color}',
        },
      },
      'fg-hover': {
        value: {
          base: '{colors.sys.fg.on-color}',
        },
      },
      'fg-active': {
        value: {
          base: '{colors.sys.fg.on-color}',
        },
      },
      'fg-disabled': {
        value: {
          base: '{colors.sys.fg.on-disabled}',
        },
      },
    },
    'danger-secondary': {
      bg: {
        value: {
          base: '{colors.sys.bg.surface}',
        },
      },
      'bg-hover': {
        value: {
          base: '{colors.sys.critical.minimal}',
        },
      },
      'bg-active': {
        value: {
          base: '{colors.sys.critical.moderate}',
        },
      },
      'bg-disabled': {
        value: {
          base: '{colors.sys.bg.minimal}',
        },
      },
      fg: {
        value: {
          base: '{colors.sys.critical.base}',
        },
      },
      'fg-hover': {
        value: {
          base: '{colors.sys.critical.base}',
        },
      },
      'fg-active': {
        value: {
          base: '{colors.sys.critical.strong}',
        },
      },
      'fg-disabled': {
        value: {
          base: '{colors.sys.fg.disabled}',
        },
      },
      border: {
        value: {
          base: '{colors.sys.critical.muted}',
        },
      },
      'border-hover': {
        value: {
          base: '{colors.sys.critical.muted}',
        },
      },
      'border-active': {
        value: {
          base: '{colors.sys.critical.base}',
        },
      },
      'border-disabled': {
        value: {
          base: '{colors.sys.border.disabled}',
        },
      },
    },
    'danger-tertiary': {
      bg: {
        value: {
          base: 'transparent',
        },
      },
      'bg-hover': {
        value: {
          base: '{colors.sys.critical.minimal}',
        },
      },
      'bg-active': {
        value: {
          base: '{colors.sys.critical.moderate}',
        },
      },
      'bg-disabled': {
        value: {
          base: 'transparent',
        },
      },
      fg: {
        value: {
          base: '{colors.sys.critical.base}',
        },
      },
      'fg-hover': {
        value: {
          base: '{colors.sys.critical.base}',
        },
      },
      'fg-active': {
        value: {
          base: '{colors.sys.critical.strong}',
        },
      },
      'fg-disabled': {
        value: {
          base: '{colors.sys.fg.disabled}',
        },
      },
    },
  },
};

export default colors;
