import { ReactElement } from 'react';
import { ark } from '@ark-ui/react';

import { button } from '../../../styled-system/recipes';
import { cx } from '../../../styled-system/css';
import { styled } from '../../../styled-system/jsx';

export type ButtonProps = {
  className?: string;
  children: ReactElement;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger-primary' | 'danger-secondary' | 'danger-tertiary';
};

export const ButtonComponent = (props: ButtonProps) => {
  const { children, className, size, variant } = props;

  return (
    <ark.span className={cx(button({ size, variant }), className)} asChild>
      {children}
    </ark.span>
  );
};

const Button = styled(ButtonComponent);

export default Button;
