import { Meta, StoryObj } from '@storybook/react-webpack5';
import * as Icons from 'react-icons/go';

import Button, { ButtonComponent, ButtonProps } from './Button';

const meta: Meta<ButtonProps> = {
  component: ButtonComponent,
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    children: <button type="button">Button label</button>,
    size: 'lg',
    variant: 'primary',
  },
};

export default meta;

export const Default: StoryObj<ButtonProps> = {};

export const ComposedWithIcon: StoryObj<typeof Button> = {
  render: (props) => {
    const Icon = Icons.GoCheckCircle;
    return (
      <Button {...props} alignItems="center" gap="8">
        <button type="button">
          <Icon size="1.5rem" />
          Button label
        </button>
      </Button>
    );
  },
};
