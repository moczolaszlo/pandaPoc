import { Meta } from '@storybook/react-webpack5';
import BitkitButton from './BitkitButton';

const meta: Meta = {
  component: BitkitButton,
  args: {
    as: 'button', // Default to button, can be overridden in stories
    children: 'Button label',
    size: 'lg',
    variant: 'primary',
  },
};

export default meta;

export const AsButton = {
  args: {
    as: 'button',
    type: 'button',
  },
};

export const AsLink = {
  args: {
    as: 'a',
    children: 'Button as Link',
    href: 'https://www.bitrise.io',
  },
};
