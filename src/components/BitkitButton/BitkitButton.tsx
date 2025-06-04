import { ElementType } from 'react';

import { button } from '../../../styled-system/recipes';
import { cx } from '../../../styled-system/css';
import { styled } from '../../../styled-system/jsx';
import { BitkitComponentProps } from '../../types';

export type BitkitButtonProps<T extends ElementType> = BitkitComponentProps<T> & {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger-primary' | 'danger-secondary' | 'danger-tertiary';
};

const BitkitButton = <T extends ElementType = 'button'>(props: BitkitButtonProps<T>) => {
  const { as = 'button', children, className, size, variant, ...rest } = props;

  const Component = styled(as);

  return (
    <Component className={cx(button({ size, variant }), className)} {...rest}>
      {children}
    </Component>
  );
};

export default BitkitButton;
