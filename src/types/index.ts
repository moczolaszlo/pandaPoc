import { ElementType, PropsWithChildren, ComponentPropsWithoutRef } from 'react';
import { SystemProperties } from '../../styled-system/types';

export type BitkitComponentProps<E extends ElementType> = PropsWithChildren<
  ComponentPropsWithoutRef<E> & {
    as?: E;
  } & SystemProperties
>;
