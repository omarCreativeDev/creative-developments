import { ReactNode } from 'react';
import { DescriptionProps } from '../interfaces';

export const Description = ({ label }: DescriptionProps) => {
  const description: ReactNode[] = label.split(' ');
  description[1] = <span className="text-white">&nbsp;{description[1]}&nbsp;</span>;
  description.join(' ');

  return <span className="text-secondary">{description}</span>;
};
