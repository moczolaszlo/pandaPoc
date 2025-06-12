import { ElementType } from 'react';
import { styled } from '../../../styled-system/jsx';

export type LinkProps = {
  as?: ElementType;
};

const Link = (props: LinkProps) => {
  const { as = 'a', ...rest } = props;
  const Component = styled(as);
  return <Component {...rest} />;
};

export default Link;
