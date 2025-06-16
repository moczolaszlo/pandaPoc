import { HTMLStyledProps, styled } from '../../../styled-system/jsx';

export type BitkitLinkProps = HTMLStyledProps<'a' | 'button'> & { as?: 'a' | 'button' };

const BitkitLink = (props: BitkitLinkProps) => {
  const { as = 'a', ...rest } = props;
  const Component = styled(as);
  return <Component {...rest} />;
};

export default BitkitLink;
