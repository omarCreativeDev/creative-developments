import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { ReactNode } from 'react';
import { Url } from 'url';

export interface ListItemDetails {
  className?: string;
  href?: Url | string;
  icon?: IconProp;
  label?: string;
  targetBlank?: boolean;
}

export interface ILayout {
  children: ReactNode;
}
