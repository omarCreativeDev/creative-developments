import Link from 'next/link';
import { Url } from 'url';
import { ListItemDetails } from '../../../interfaces';

export const LinkItem = ({
  label,
  className = '',
  href = '',
  targetBlank = false
}: ListItemDetails) => {
  return (
    <dd key={className + href} className="inline-grid w-1/2 pr-4">
      <Link
        href={href as Url}
        className="text-white no-underline hover:underline"
        target={targetBlank ? '_blank' : undefined}
      >
        {label}
      </Link>
    </dd>
  );
};
