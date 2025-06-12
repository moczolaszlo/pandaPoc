import { Meta, StoryObj } from '@storybook/react-webpack5';
import * as Field from './Field';

type StoryArgs = {
  autoresize?: boolean;
  disabled?: boolean;
  errorText?: string;
  helperText?: string;
  invalid?: boolean;
  label?: string;
  placeholder?: string;
  readOnly?: boolean;
  renderChildren?: (args: StoryArgs) => React.ReactNode;
  required?: boolean;
  size?: 'md' | 'lg';
};

const StoryComponent = (args: StoryArgs) => {
  const { disabled, errorText, helperText, invalid, label, placeholder, readOnly, renderChildren, required, size } =
    args;
  return (
    <Field.Root disabled={disabled} invalid={invalid} readOnly={readOnly} required={required}>
      <Field.Label>{label}</Field.Label>
      {renderChildren?.(args)}
      {!invalid && <Field.HelperText>{helperText}</Field.HelperText>}
      <Field.ErrorText>{errorText}</Field.ErrorText>
    </Field.Root>
  );
};

const meta: Meta<StoryArgs> = {
  args: {
    disabled: false,
    errorText: 'Error Info',
    helperText: 'Some additional Info',
    invalid: false,
    label: 'Label',
    placeholder: 'Placeholder text',
    readOnly: false,
    required: false,
    size: 'lg',
  },
  component: Field.Root,
  render: (args) => <StoryComponent {...args} />,
};

export default meta;

export const WithInput: StoryObj<StoryArgs> = {
  args: {
    renderChildren: ({ placeholder, size }) => <Field.Input placeholder={placeholder} size={size} />,
  },
};

export const WithTextarea: StoryObj<StoryArgs> = {
  args: {
    autoresize: true,
    renderChildren: ({ autoresize, placeholder, size }) => (
      <Field.Textarea autoresize={autoresize} placeholder={placeholder} size={size} />
    ),
  },
};

export const WithSelect: StoryObj<StoryArgs> = {
  args: {
    renderChildren: ({ size }) => (
      <Field.Select size={size}>
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
      </Field.Select>
    ),
  },
};
