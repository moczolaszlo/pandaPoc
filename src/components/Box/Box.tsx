import { ElementType } from 'react';

import { styled } from '../../../styled-system/jsx';
import { StyledComponent } from '../../../styled-system/types';

export type BoxProps = {
  as?: ElementType;
  children?: React.ReactNode;
} & StyledComponent<'div'>;

const Box = (props: BoxProps) => {
  const { as = 'div', ...rest } = props;
  const Component = as;
  return <Component {...rest} />;
};

export default styled(Box);
