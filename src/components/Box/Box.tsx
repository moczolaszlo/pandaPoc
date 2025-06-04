import { ElementType } from 'react';

import { BitkitComponentProps } from '../../types';
import { styled } from '../../../styled-system/jsx';

export type BoxProps<T extends ElementType> = BitkitComponentProps<T>;

const Box = <T extends ElementType = 'div'>(props: BoxProps<T>) => {
  const { as = 'div', ...rest } = props;
  const Component = styled(as);
  return <Component {...rest} />;
};

export default Box;
