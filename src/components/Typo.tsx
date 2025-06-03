import { ElementType, PropsWithChildren, ComponentPropsWithoutRef } from 'react';

type PolymorphicProps<E extends ElementType> = PropsWithChildren<
  ComponentPropsWithoutRef<E> & {
    as?: E;
  }
>;

type TypographyProps<T extends ElementType> = PolymorphicProps<T> & {
  color?: string;
};

const Typography = <T extends ElementType = 'p'>({ as, color, ...props }: TypographyProps<T>) => {
  const Component = as || 'p';
  console.log(color);

  return <Component {...props} />;
};

export default Typography;
