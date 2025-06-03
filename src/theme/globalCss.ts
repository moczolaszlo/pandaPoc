import { Config } from '@pandacss/dev';

const globalCss: Config['globalCss'] = {
  html: {
    '--global-font-body': 'fonts.body',
    '--global-font-mono': 'fonts.mono',
  },
  "a, summary, button, input, [tabindex]:not([tabindex='-1'])": {
    outline: 'none',
    _focusVisible: {
      outline: '3px',
      outlineColor: 'sys.interactive.highlight',
      outlineOffset: '0',
      outlineStyle: 'solid',
    },
  },
};

export default globalCss;
