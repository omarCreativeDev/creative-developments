import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { codeLinks, socialLinks } from '../../constants';

export const HeaderTopLinks = () => {
  return (
    <div className="container m-auto p-4">
      <div className="grid grid-flow-col auto-cols-auto justify-between">
        <div className="flex gap-8">
          {socialLinks?.map((i) => (
            <Link
              href={i.href as string}
              key={i.label}
              className="hover:underline text-sm"
              target="_blank"
              rel="noreferrer"
            >
              {i.icon && <FontAwesomeIcon className={`${i.className} pr-2`} icon={i.icon} />}
              {i.label}
            </Link>
          ))}
        </div>
        <div className="hidden md:flex gap-8">
          {codeLinks?.map((i) => (
            <Link
              href={i.href as string}
              key={i.label}
              className="hover:underline text-sm"
              target="_blank"
              rel="noreferrer"
            >
              {i.icon && <FontAwesomeIcon className={`${i.className} pr-2`} icon={i.icon} />}
              {i.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
