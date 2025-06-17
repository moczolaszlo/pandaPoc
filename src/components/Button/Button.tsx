import { ark, PolymorphicProps } from '@ark-ui/react';

import { button, ButtonVariantProps } from '../../../styled-system/recipes';
import { HTMLStyledProps, styled } from '../../../styled-system/jsx';

export type ButtonProps = HTMLStyledProps<'button'> & ButtonVariantProps & PolymorphicProps;

const Button = (props: ButtonProps) => {
  const Component = styled(ark.button, button);
  return <Component {...props} />;
};

export default Button;
