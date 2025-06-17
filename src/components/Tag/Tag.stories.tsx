import { Meta } from '@storybook/react-webpack5';
import * as icons from '@bitrise/bitkit/src/Components/Icons/24x24';
import Tag from './Tag';

const iconOptions = [undefined, ...Object.keys(icons)];

const meta: Meta<typeof Tag> = {
  component: Tag,
  argTypes: {
    iconName: {
      control: { type: 'select' },
      options: iconOptions,
    },
  },
  args: {
    children: 'Label',
    colorScheme: 'neutral',
    iconName: 'Check',
    size: 'md',
    onClose: () => {}
  },
};

export default meta;

export const Default = {};
