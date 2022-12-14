import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faBitbucket, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { ListItemDetails } from '../../interfaces';

export const HeaderTopLinks = () => {
  const socialLinks: ListItemDetails[] = [
    {
      href: 'https://www.linkedin.com/in/omarcreativedev',
      icon: faLinkedinIn,
      label: 'LinkedIn',
      class: 'linkedIn'
    },
    {
      href: 'https://twitter.com/OmarCreativeDev',
      icon: faTwitter,
      label: 'Twitter',
      class: 'twitter'
    }
  ];

  const codeLinks: ListItemDetails[] = [
    {
      href: 'https://github.com/omarCreativeDev',
      icon: faGithub,
      label: 'Github'
    },
    {
      href: 'https://bitbucket.org/omarCreativeDev',
      icon: faBitbucket,
      label: 'Bitbucket',
      class: 'bitBucket'
    }
  ];

  return (
    <div className="container m-auto p-4">
      <div className="grid grid-flow-col auto-cols-auto justify-between">
        <div className="flex gap-8">
          {socialLinks &&
            socialLinks.map((i) => (
              <Link href={i.href} key={i.label}>
                <a className="hover:underline text-sm" target="_blank" rel="noreferrer">
                  {i.icon && <FontAwesomeIcon className={`${i.class} pr-2`} icon={i.icon} />}
                  {i.label}
                </a>
              </Link>
            ))}
        </div>
        <div className="hidden md:flex gap-8">
          {codeLinks &&
            codeLinks.map((i) => (
              <Link href={i.href} key={i.label}>
                <a className="hover:underline text-sm" target="_blank" rel="noreferrer">
                  {i.icon && <FontAwesomeIcon className={`${i.class} pr-2`} icon={i.icon} />}
                  {i.label}
                </a>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};
