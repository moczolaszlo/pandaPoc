import { Meta, StoryObj } from '@storybook/react-webpack5';
import Box from '../Box/Box';
import Text from './Text';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    hasEllipsis: false,
  },
  render: (args) => (
    <Box width={args.hasEllipsis ? '96' : 'auto'}>
      <Text {...args} />
    </Box>
  ),
};

export default meta;

export const Default: StoryObj<typeof Text> = {};
