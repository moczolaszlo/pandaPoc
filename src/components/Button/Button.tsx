import { ReactNode } from 'react';
import { ark } from '@ark-ui/react';

import { button } from '../../../styled-system/recipes';
import { cx } from '../../../styled-system/css';
import { styled } from '../../../styled-system/jsx';

export type ButtonProps = {
  asChild?: boolean;
  className?: string;
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger-primary' | 'danger-secondary' | 'danger-tertiary';
};

export const ButtonComponent = (props: ButtonProps) => {
  const { asChild, children, className, size, variant } = props;

  return (
    <ark.button className={cx(button({ size, variant }), className)} asChild={asChild}>
      {children}
    </ark.button>
  );
};

const Button = styled(ButtonComponent);

export default Button;
