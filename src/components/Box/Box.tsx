import { ElementType } from 'react';

import { styled } from '../../../styled-system/jsx';

const Box = <T extends ElementType = 'div'>(props) => {
  const { as = 'div', ...rest } = props;
  const Component = styled(as);
  return <Component {...rest} />;
};

export default Box;
