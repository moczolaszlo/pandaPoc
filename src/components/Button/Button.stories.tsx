import { Meta, StoryObj } from '@storybook/react-webpack5';

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
    size: 'lg',
    variant: 'primary',
  },
};

export default meta;

export const Default: StoryObj<ButtonProps> = {
  args: {
    children: 'Button label',
  },
};

export const ComposedWithIcon: StoryObj<typeof Button> = {
  render: (props) => {
    return (
      <Button {...props} alignItems="center" gap="8">
        Button label
      </Button>
    );
  },
};
