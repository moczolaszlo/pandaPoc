import { PropsWithChildren } from 'react';
import { Assign, Field, useFieldContext } from '@ark-ui/react';
import { field, type FieldVariantProps, input, select, textarea } from '../../../styled-system/recipes';
import { styled } from '../../../styled-system/jsx';

import { createStyleContext } from '../../utils/create-style-context';
import { ComponentProps, HTMLStyledProps } from '../../../styled-system/types';

const { withProvider, withContext } = createStyleContext(field);

export const Root = withProvider<
  HTMLDivElement,
  Assign<Assign<HTMLStyledProps<'div'>, Field.RootBaseProps>, FieldVariantProps>
>(Field.Root, 'root');

export type RootProps = ComponentProps<typeof Root>;

const StyledLabel = withContext<HTMLLabelElement, Assign<HTMLStyledProps<'label'>, Field.LabelBaseProps>>(
  Field.Label,
  'label',
);

export const Label = ({
  children,
  ...rest
}: PropsWithChildren<Assign<HTMLStyledProps<'label'>, Field.LabelBaseProps>>) => {
  const { required } = useFieldContext();
  return (
    <StyledLabel {...rest}>
      {children} {!required && <span>(optional)</span>}
    </StyledLabel>
  );
};

export const Input = styled(Field.Input, input);
export const Textarea = styled(Field.Textarea, textarea);
export const Select = styled(Field.Select, select);

export const HelperText = withContext<HTMLSpanElement, Assign<HTMLStyledProps<'span'>, Field.HelperTextBaseProps>>(
  Field.HelperText,
  'helperText',
);

export const ErrorText = withContext<HTMLSpanElement, Assign<HTMLStyledProps<'span'>, Field.ErrorTextBaseProps>>(
  Field.ErrorText,
  'errorText',
);
