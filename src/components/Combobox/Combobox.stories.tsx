import { useCombobox, useFilter, useListCollection } from '@ark-ui/react';
import { Meta } from '@storybook/react-webpack5';
import { Icon, IconButton } from '@bitrise/bitkit';
import * as Field from '../Field/Field';
import Box from '../Box/Box';
import * as Combobox from './Combobox';

type StoryArgs = {
  multiple?: boolean;
  size?: 'md' | 'lg';
} & typeof Combobox.Root;

const meta: Meta<StoryArgs> = {
  component: Combobox.Root,
  args: {
    multiple: false,
    size: 'lg',
  },
};

export default meta;

const initialItems = ['React', 'Solid', 'Vue'];

const StoryComponent = ({ multiple, size }: StoryArgs) => {
  const { contains } = useFilter({ sensitivity: 'base' });

  const { collection, filter, set } = useListCollection({
    initialItems,
    filter: contains,
  });

  const handleOpenChange = () => {
    set(initialItems);
  };

  const combobox = useCombobox({
    collection,
    multiple,
    onInputValueChange(details) {
      filter(details.inputValue);
    },
    onOpenChange: handleOpenChange,
  });

  return (
    <>
      <Field.Root>
        <Combobox.RootProvider value={combobox} size={size}>
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
        </Combobox.RootProvider>
        <Field.HelperText>Additional Info</Field.HelperText>
        <Field.ErrorText>Error Info</Field.ErrorText>
      </Field.Root>
      <Box marginBlockStart="16" textStyle="body/md/regular">
        Selected items: {JSON.stringify(combobox.selectedItems)}
      </Box>
    </>
  );
};

export const Default = {
  render: StoryComponent,
};
