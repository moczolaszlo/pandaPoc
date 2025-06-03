import { ReactElement } from 'react';
import { ark, PolymorphicProps } from '@ark-ui/react';
import { cx } from '../../../styled-system/css';
import { styled } from '../../../styled-system/jsx';

type LinkProps = {
  className?: string;
  children: ReactElement;
} & PolymorphicProps;

const Link = (props: LinkProps) => {
  const { className, children } = props;
  return (
    <ark.span className={cx(className)} asChild>
      {children}
    </ark.span>
  );
};

export default styled(Link);
