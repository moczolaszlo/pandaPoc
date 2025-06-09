import { useFilter, useListCollection } from '@ark-ui/react';
import { Meta } from '@storybook/react-webpack5';
import { Icon, IconButton } from '@bitrise/bitkit';
import * as Field from '../Field/Field';
import * as Combobox from './Combobox';

type StoryArgs = {
  size?: 'md' | 'lg';
} & typeof Combobox.Root;

const meta: Meta<StoryArgs> = {
  component: Combobox.Root,
  args: {
    size: 'lg',
  },
};

export default meta;

const initialItems = ['React', 'Solid', 'Vue'];

const StoryComponent = ({ size }: StoryArgs) => {
  const { contains } = useFilter({ sensitivity: 'base' });

  const { collection, filter, set } = useListCollection({
    initialItems,
    filter: contains,
  });

  const handleInputChange = (details: Combobox.InputValueChangeDetails) => {
    filter(details.inputValue);
  };

  const handleOpenChange = () => {
    set(initialItems);
  };

  return (
    <Field.Root>
      <Combobox.Root
        collection={collection}
        onInputValueChange={handleInputChange}
        onOpenChange={handleOpenChange}
        size={size}
      >
        <Field.Label>Label</Field.Label>
        <Combobox.Control>
          <Combobox.Input size={size} />
          <Combobox.ClearTrigger asChild>
            <IconButton iconName="Cross" aria-label="Clear" isTooltipDisabled />
          </Combobox.ClearTrigger>
          <Combobox.Trigger asChild>
            <IconButton iconName="ChevronDown" aria-label="Open" isTooltipDisabled />
          </Combobox.Trigger>
        </Combobox.Control>
        <Combobox.Positioner>
          <Combobox.Content>
            {collection.items.map((item) => (
              <Combobox.Item key={item} item={item}>
                <Combobox.ItemText>{item}</Combobox.ItemText>
                <Combobox.ItemIndicator asChild>
                  <Icon name="Check" />
                </Combobox.ItemIndicator>
              </Combobox.Item>
            ))}
          </Combobox.Content>
        </Combobox.Positioner>
      </Combobox.Root>
      <Field.HelperText>Additional Info</Field.HelperText>
      <Field.ErrorText>Error Info</Field.ErrorText>
    </Field.Root>
  );
};

export const Default = {
  render: StoryComponent,
};
