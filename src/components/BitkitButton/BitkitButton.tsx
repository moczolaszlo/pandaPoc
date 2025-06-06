import { ComponentPropsWithoutRef, ElementType, PropsWithChildren } from 'react';
import { Icon, TypeIconName } from '@bitrise/bitkit';

import { button } from '../../../styled-system/recipes';
import { cx } from '../../../styled-system/css';
import { styled } from '../../../styled-system/jsx';
import { SystemProperties } from '../../../styled-system/types';

type BitkitComponentProps<E extends ElementType> = PropsWithChildren<
  ComponentPropsWithoutRef<E> & {
    as?: E;
  } & SystemProperties
>;

export type BitkitButtonProps<T extends ElementType> = BitkitComponentProps<T> & {
  disabled?: boolean;
  leftIconName?: TypeIconName;
  rightIconName?: TypeIconName;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger-primary' | 'danger-secondary' | 'danger-tertiary';
};

const BitkitButton = <T extends ElementType = 'button'>(props: BitkitButtonProps<T>) => {
  const { as = 'button', children, className, leftIconName, rightIconName, size, variant, ...rest } = props;

  const Component = styled(as);

  const iconSize = size === 'lg' ? '24' : '16';

  return (
    <Component className={cx(button({ size, variant }), className)} {...rest}>
      {!!leftIconName && <Icon name={leftIconName} size={iconSize} />}
      {children}
      {!!rightIconName && <Icon name={rightIconName} size={iconSize} />}
    </Component>
  );
};

export default BitkitButton;
