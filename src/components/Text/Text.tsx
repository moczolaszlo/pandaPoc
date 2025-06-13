import { type TextVariantProps, text } from '../../../styled-system/recipes';
import type { ComponentProps, StyledComponent } from '../../../styled-system/types';
import { styled } from '../../../styled-system/jsx';

type ParagraphProps = TextVariantProps & { as?: React.ElementType };

export type TextProps = ComponentProps<typeof Text>;
const Text = styled('p', text) as StyledComponent<'p', ParagraphProps>;

export default Text;
