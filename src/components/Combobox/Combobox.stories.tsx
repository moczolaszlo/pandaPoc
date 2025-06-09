import { useCombobox, useFilter, useListCollection } from '@ark-ui/react';
import { Meta } from '@storybook/react-webpack5';
import { Icon, IconButton, TypeIconName } from '@bitrise/bitkit';
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

const TypeMap: Record<'project' | 'machine', string> = {
  machine: 'Machine',
  project: 'Project type',
};

const initialItems: { value: string; text: string; icon: TypeIconName; group: 'project' | 'machine' }[] = [
  {
    value: 'ios',
    text: 'iOS',
    icon: 'Apple',
    group: 'project',
  },
  {
    value: 'macos',
    text: 'macOS',
    icon: 'Macos',
    group: 'project',
  },
  {
    value: 'android',
    text: 'Android',
    icon: 'Android',
    group: 'project',
  },
  {
    value: 'cordova',
    text: 'Cordova',
    icon: 'Cordova',
    group: 'project',
  },
  {
    value: 'ionic',
    text: 'Ionic',
    icon: 'Ionic',
    group: 'project',
  },
  {
    value: 'react-native',
    text: 'React Native',
    icon: 'ReactIcon',
    group: 'project',
  },
  {
    value: 'flutter',
    text: 'Flutter',
    icon: 'Flutter',
    group: 'project',
  },
  {
    value: 'kotlin-multiplatform',
    text: 'Kotlin Multiplatform',
    icon: 'Kotlin',
    group: 'project',
  },
  {
    value: 'fastlane',
    text: 'Fastlane',
    icon: 'Fastlane',
    group: 'project',
  },
  {
    value: 'node-js',
    text: 'Node.js',
    icon: 'Nodejs',
    group: 'project',
  },
  {
    value: 'java',
    text: 'Java',
    icon: 'Java',
    group: 'project',
  },
  {
    value: 'go',
    text: 'Go',
    icon: 'Go',
    group: 'project',
  },
  {
    value: 'other',
    text: 'Other',
    icon: 'Other',
    group: 'project',
  },
  { value: 'xcode', text: 'Xcode', icon: 'Xcode', group: 'machine' },
  { value: 'ubuntu', text: 'Ubuntu', icon: 'Ubuntu', group: 'machine' },
];
const StoryComponent = ({ multiple, size }: StoryArgs) => {
  const { contains } = useFilter({ sensitivity: 'base' });

  const { collection, filter, set } = useListCollection({
    initialItems,
    filter: contains,
    groupBy: (item) => item.group,
    itemToString: (item) => item.text,
    itemToValue: (item) => item.value,
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
              {collection.group().map(([type, group]) => (
                <Combobox.ItemGroup key={type}>
                  <Combobox.ItemGroupLabel>{TypeMap[type as 'machine' | 'project']}</Combobox.ItemGroupLabel>
                  {group.map((item) => (
                    <Combobox.Item key={item.value} item={item}>
                      <Combobox.ItemIcon asChild>
                        <Icon name={item.icon} />
                      </Combobox.ItemIcon>
                      <Combobox.ItemText>{item.text}</Combobox.ItemText>
                      <Combobox.ItemIndicator asChild>
                        <Icon name="Check" />
                      </Combobox.ItemIndicator>
                    </Combobox.Item>
                  ))}
                </Combobox.ItemGroup>
              ))}
            </Combobox.Content>
          </Combobox.Positioner>
        </Combobox.RootProvider>
        <Field.HelperText>Additional Info</Field.HelperText>
        <Field.ErrorText>Error Info</Field.ErrorText>
      </Field.Root>
      <Box marginBlockStart="16" textStyle="body/md/regular">
        Selected items:{' '}
        {combobox.selectedItems.length > 0 ? combobox.selectedItems.map((item) => item.text).join(', ') : '-'}
      </Box>
    </>
  );
};

export const Default = {
  render: StoryComponent,
};
