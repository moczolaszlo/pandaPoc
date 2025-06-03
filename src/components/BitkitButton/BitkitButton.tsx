import { ElementType, PropsWithChildren, ComponentPropsWithoutRef } from 'react';

import { CssProperties } from '../../../styled-system/types';
import { button } from '../../../styled-system/recipes';
import { cx } from '../../../styled-system/css';
import { styled } from '../../../styled-system/jsx';

type PolymorphicProps<E extends ElementType> = PropsWithChildren<
  ComponentPropsWithoutRef<E> & {
    as?: E;
  } & CssProperties
>;

type BitkitButtonProps<T extends ElementType> = PolymorphicProps<T> & {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger-primary' | 'danger-secondary' | 'danger-tertiary';
};

const BitkitButton = <T extends ElementType = 'button'>(props: BitkitButtonProps<T>) => {
  const { as = 'button', children, className, size, variant, ...rest } = props;
  console.log('BitkitButton props:', props);

  const Component = styled(as);

  return (
    <Component className={cx(button({ size, variant }), className)} {...rest}>
      {children}
    </Component>
  );
};

export default BitkitButton;
