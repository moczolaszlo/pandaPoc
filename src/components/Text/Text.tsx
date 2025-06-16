import { text } from '../../../styled-system/recipes';
import { HTMLStyledProps, styled } from '../../../styled-system/jsx';

export type TextProps = HTMLStyledProps<'div'>;

const Text = (props: TextProps) => {
  const { as = 'p', ...rest } = props;
  const Component = as;
  return <Component {...rest} />;
};

export default styled(Text, text);
