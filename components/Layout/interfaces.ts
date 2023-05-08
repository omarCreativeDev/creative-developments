import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { ReactNode } from 'react';
import { Url } from 'url';

export interface ListItemDetails {
  label?: string;
  href?: Url | string;
  className?: string;
  icon?: IconProp;
}

export interface ILayout {
  children: ReactNode;
}
