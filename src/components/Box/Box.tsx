import { ark, PolymorphicProps } from '@ark-ui/react';
import { styled } from '../../../styled-system/jsx';
import { HTMLStyledProps } from '../../../styled-system/types';

export type BoxProps = HTMLStyledProps<'div'> & PolymorphicProps;

const Box = (props: BoxProps) => {
  const Component = styled(ark.div);
  return <Component {...props} />;
};

export default Box;
