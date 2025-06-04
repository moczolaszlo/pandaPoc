import { ElementType } from 'react';

import { BitkitComponentProps } from '../../types';
import { styled } from '../../../styled-system/jsx';

export type LinkProps<T extends ElementType> = BitkitComponentProps<T>;

const Link = <T extends ElementType = 'a'>(props: LinkProps<T>) => {
  const { as = 'a', ...rest } = props;
  const Component = styled(as);
  return <Component {...rest} />;
};

export default Link;
