import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { ReactNode } from 'react';

export interface ListItemDetails {
  class?: string;
  href: string;
  icon?: IconProp;
  label: string;
}

export interface ILayout {
  children: ReactNode;
}
