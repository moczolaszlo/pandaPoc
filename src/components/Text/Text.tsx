import { text } from '../../../styled-system/recipes';
import { styled } from '../../../styled-system/jsx';
import { type HTMLStyledProps } from '../../../styled-system/types';

export type TextProps = HTMLStyledProps<'div'> & { as?: string };

const Text = ({ as = 'p', ...rest }: TextProps) => {
  const Component = as;
  return <Component {...rest} />;
};

export default styled(Text, text);