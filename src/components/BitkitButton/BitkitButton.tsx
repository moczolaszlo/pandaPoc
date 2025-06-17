import { Icon, TypeIconName } from '@bitrise/bitkit';

import { button, ButtonVariantProps } from '../../../styled-system/recipes';
import { cx } from '../../../styled-system/css';
import { HTMLStyledProps, styled } from '../../../styled-system/jsx';

export type BitkitButtonProps = {
  as?: 'button' | 'a';
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  leftIconName?: TypeIconName;
  rightIconName?: TypeIconName;
} & HTMLStyledProps<'button' | 'a'> &
  ButtonVariantProps;

const BitkitButton = (props: BitkitButtonProps) => {
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
