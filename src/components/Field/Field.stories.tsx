import { Meta, StoryObj } from '@storybook/react-webpack5';
import * as Field from './Field';

type StoryArgs = {
  disabled?: boolean;
  errorText?: string;
  helperText?: string;
  invalid?: boolean;
  label?: string;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  size?: 'md' | 'lg';
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
};

export default meta;

export const WithInput: StoryObj<StoryArgs> = {
  render: (args) => {
    const { disabled, errorText, helperText, invalid, label, placeholder, readOnly, required, size } = args;
    return (
      <Field.Root disabled={disabled} invalid={invalid} readOnly={readOnly} required={required}>
        <Field.Label>{label}</Field.Label>
        <Field.Input placeholder={placeholder} size={size} />
        {!invalid && <Field.HelperText>{helperText}</Field.HelperText>}
        <Field.ErrorText>{errorText}</Field.ErrorText>
      </Field.Root>
    );
  },
};
