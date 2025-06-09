import { Assign, Combobox } from '@ark-ui/react';
import { combobox, input, ComboboxVariantProps } from '../../../styled-system/recipes';
import { styled } from '../../../styled-system/jsx';

import { createStyleContext } from '../../utils/create-style-context';
import { HTMLStyledProps } from '../../../styled-system/types';

const { withProvider, withContext } = createStyleContext(combobox);

export const Root = withProvider<
  HTMLDivElement,
  Assign<Assign<HTMLStyledProps<'div'>, Combobox.RootBaseProps<Combobox.CollectionItem>>, ComboboxVariantProps>
>(styled(Combobox.Root), 'root');

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

export const Item = withContext<HTMLSpanElement, Assign<HTMLStyledProps<'div'>, Combobox.ItemBaseProps>>(
  Combobox.Item,
  'item',
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
