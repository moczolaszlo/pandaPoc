import { PropsWithChildren } from 'react';
import { Assign, Field as ArKField, useFieldContext } from '@ark-ui/react';
import { field, type FieldVariantProps, input } from '../../../styled-system/recipes';
import { styled } from '../../../styled-system/jsx';

import { createStyleContext } from '../../utils/create-style-context';
import { HTMLStyledProps } from '../../../styled-system/types';

const { withProvider, withContext } = createStyleContext(field);

const Root = withProvider<
  HTMLDivElement,
  Assign<Assign<HTMLStyledProps<'div'>, ArKField.RootBaseProps>, FieldVariantProps>
>(styled(ArKField.Root), 'root');

const StyledLabel = withContext<HTMLLabelElement, Assign<HTMLStyledProps<'label'>, ArKField.LabelBaseProps>>(
  styled(ArKField.Label),
  'label',
);

const Label = ({ children, ...rest }: PropsWithChildren<Assign<HTMLStyledProps<'label'>, ArKField.LabelBaseProps>>) => {
  const { required } = useFieldContext();
  return (
    <StyledLabel {...rest}>
      {children} {!required && <span>(optional)</span>}
    </StyledLabel>
  );
};

const Input = styled(ArKField.Input, input);

const HelperText = withContext<HTMLSpanElement, Assign<HTMLStyledProps<'span'>, ArKField.HelperTextBaseProps>>(
  styled(ArKField.HelperText),
  'helperText',
);

const ErrorText = withContext<HTMLSpanElement, Assign<HTMLStyledProps<'span'>, ArKField.ErrorTextBaseProps>>(
  styled(ArKField.ErrorText),
  'errorText',
);

export default {
  Root,
  Label,
  Input,
  HelperText,
  ErrorText,
};
