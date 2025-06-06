import { Meta } from '@storybook/react-webpack5';
import * as icons from '@bitrise/bitkit/src/Components/Icons/24x24';
import BitkitButton from './BitkitButton';

const iconOptions = [undefined, ...Object.keys(icons)];

const meta: Meta = {
  component: BitkitButton,
  argTypes: {
    leftIconName: {
      control: { type: 'select' },
      options: iconOptions,
    },
    rightIconName: {
      control: { type: 'select' },
      options: iconOptions,
    },
  },
  args: {
    as: 'button', // Default to button, can be overridden in stories
    children: 'Button label',
    disabled: false,
    leftIconName: 'Git',
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
