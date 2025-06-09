import { PropsWithChildren } from 'react';
import { Assign, Field as ArkField, useFieldContext } from '@ark-ui/react';
import { field, type FieldVariantProps, input } from '../../../styled-system/recipes';
import { styled } from '../../../styled-system/jsx';

import { createStyleContext } from '../../utils/create-style-context';
import { ComponentProps, HTMLStyledProps } from '../../../styled-system/types';

const { withProvider, withContext } = createStyleContext(field);

export const Root = withProvider<
  HTMLDivElement,
  Assign<Assign<HTMLStyledProps<'div'>, ArkField.RootBaseProps>, FieldVariantProps>
>(styled(ArkField.Root), 'root');

export type RootProps = ComponentProps<typeof Root>;

export const StyledLabel = withContext<HTMLLabelElement, Assign<HTMLStyledProps<'label'>, ArkField.LabelBaseProps>>(
  styled(ArkField.Label),
  'label',
);

export const Label = ({
  children,
  ...rest
}: PropsWithChildren<Assign<HTMLStyledProps<'label'>, ArkField.LabelBaseProps>>) => {
  const { required } = useFieldContext();
  return (
    <StyledLabel {...rest}>
      {children} {!required && <span>(optional)</span>}
    </StyledLabel>
  );
};

export const Input = styled(ArkField.Input, input);

export const HelperText = withContext<HTMLSpanElement, Assign<HTMLStyledProps<'span'>, ArkField.HelperTextBaseProps>>(
  styled(ArkField.HelperText),
  'helperText',
);

export const ErrorText = withContext<HTMLSpanElement, Assign<HTMLStyledProps<'span'>, ArkField.ErrorTextBaseProps>>(
  styled(ArkField.ErrorText),
  'errorText',
);
