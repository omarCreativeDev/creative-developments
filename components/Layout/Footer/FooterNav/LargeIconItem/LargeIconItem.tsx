import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { Url } from 'url';
import { ListItemDetails } from '../../../interfaces';

export const LargeIconItem = ({ icon, className = '', href = '' }: ListItemDetails) => (
  <dd className="inline-grid pr-4">
    <Link href={href as Url} className="hover:underline" target="_blank" rel="noreferrer">
      <FontAwesomeIcon
        className={`${className} text-5xl`}
        icon={icon as IconProp}
      ></FontAwesomeIcon>
    </Link>
  </dd>
);
