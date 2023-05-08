import { ReactNode } from 'react';

export interface DataList<Type> {
  description: ReactNode;
  items: Type[];
}

export interface DescriptionProps {
  label: string;
}
