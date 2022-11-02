import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { ReactNode } from 'react';

export interface DataList<Type> {
  description: ReactNode;
  items: Type[];
}

export interface IconItemDetails {
  class: string;
  href?: string;
  icon: IconProp;
}
