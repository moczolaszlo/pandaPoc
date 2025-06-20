import { Assign, Combobox, PolymorphicProps, ark } from '@ark-ui/react';
import { styled } from '../../../styled-system/jsx';
import { combobox, input, ComboboxVariantProps } from '../../../styled-system/recipes';

import { createStyleContext } from '../../utils/create-style-context';
import { ComponentProps, HTMLStyledProps } from '../../../styled-system/types';

const { withProvider, withContext } = createStyleContext(combobox);

export type RootProviderProps = ComponentProps<typeof RootProvider>;

export const RootProvider = withProvider<
  HTMLDivElement,
  Assign<Assign<HTMLStyledProps<'div'>, Combobox.RootProviderBaseProps<Combobox.CollectionItem>>, ComboboxVariantProps>
>(Combobox.RootProvider, 'root');

export const Root = withProvider<
  HTMLDivElement,
  Assign<Assign<HTMLStyledProps<'div'>, Combobox.RootBaseProps<Combobox.CollectionItem>>, ComboboxVariantProps>
>(Combobox.Root, 'root');

export const Control = withContext<HTMLSpanElement, Assign<HTMLStyledProps<'div'>, Combobox.ControlBaseProps>>(
  Combobox.Control,
  'control',
);

export const ClearTrigger = withContext<
  HTMLSpanElement,
  Assign<HTMLStyledProps<'button'>, Combobox.ClearTriggerBaseProps>
>(Combobox.ClearTrigger, 'clearTrigger');

export const Trigger = withContext<HTMLSpanElement, Assign<HTMLStyledProps<'button'>, Combobox.TriggerBaseProps>>(
  Combobox.Trigger,
  'trigger',
);

export const Positioner = withContext<HTMLSpanElement, Assign<HTMLStyledProps<'div'>, Combobox.PositionerBaseProps>>(
  Combobox.Positioner,
  'positioner',
);

export const Content = withContext<HTMLSpanElement, Assign<HTMLStyledProps<'div'>, Combobox.ContentBaseProps>>(
  Combobox.Content,
  'content',
);

export const ItemGroup = withContext<HTMLSpanElement, Assign<HTMLStyledProps<'div'>, Combobox.ItemGroupBaseProps>>(
  Combobox.ItemGroup,
  'itemGroup',
);

export const ItemGroupLabel = withContext<
  HTMLSpanElement,
  Assign<HTMLStyledProps<'div'>, Combobox.ItemGroupLabelBaseProps>
>(Combobox.ItemGroupLabel, 'itemGroupLabel');

export const Item = withContext<HTMLSpanElement, Assign<HTMLStyledProps<'div'>, Combobox.ItemBaseProps>>(
  Combobox.Item,
  'item',
);

export const ItemIcon = withContext<HTMLSpanElement, Assign<HTMLStyledProps<'span'>, PolymorphicProps>>(
  ark.span,
  'itemIcon',
);

export const ItemText = withContext<HTMLSpanElement, Assign<HTMLStyledProps<'span'>, Combobox.ItemTextBaseProps>>(
  Combobox.ItemText,
  'itemText',
);

export const ItemIndicator = withContext<
  HTMLSpanElement,
  Assign<HTMLStyledProps<'div'>, Combobox.ItemIndicatorBaseProps>
>(Combobox.ItemIndicator, 'itemIndicator');

export const Input = styled(Combobox.Input, input);

export { ComboboxContext as Context } from '@ark-ui/react';

export type {
  ComboboxHighlightChangeDetails as HighlightChangeDetails,
  ComboboxInputValueChangeDetails as InputValueChangeDetails,
  ComboboxOpenChangeDetails as OpenChangeDetails,
  ComboboxValueChangeDetails as ValueChangeDetails,
} from '@ark-ui/react';
