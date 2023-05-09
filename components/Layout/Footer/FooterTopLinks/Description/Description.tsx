import { ReactNode } from 'react';
import { DescriptionProps } from '../../interfaces';

export const Description = ({ label }: DescriptionProps) => {
  const textNodes: ReactNode[] = label.split(' ');

  return (
    <>
      {textNodes.map((item, index) => {
        const isEvenIndex = index % 2 == 0;
        return (
          <span className="text-secondary" key={item + index.toString()}>
            {isEvenIndex ? `${item} ` : <span className="text-white">{item}&nbsp;</span>}
          </span>
        );
      })}
    </>
  );
};
