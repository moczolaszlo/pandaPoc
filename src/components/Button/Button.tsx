import { ark, PolymorphicProps } from '@ark-ui/react';

import { button, ButtonVariantProps } from '../../../styled-system/recipes';
import { cx } from '../../../styled-system/css';
import { HTMLStyledProps, styled } from '../../../styled-system/jsx';

export type ButtonProps = HTMLStyledProps<'button'> & ButtonVariantProps & PolymorphicProps;

const Button = (props: ButtonProps) => {
  const { asChild, children, className, size, variant } = props;

  const Component = styled(ark.button);

  return (
    <Component className={cx(button({ size, variant }), className)} asChild={asChild}>
      {children}
    </Component>
  );
};

export default Button;
