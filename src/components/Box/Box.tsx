import { createElement, ElementType } from 'react';
import { styled } from '../../../styled-system/jsx';

type BoxProps = {
  as?: ElementType;
} & React.HTMLAttributes<HTMLElement>;

const Box = (props: BoxProps) => {
  const { as = 'div', ...rest } = props;
  return createElement(as, rest);
};

export default styled(Box);
