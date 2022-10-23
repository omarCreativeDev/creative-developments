import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faGithub, faBitbucket } from '@fortawesome/free-brands-svg-icons';
import { ListItemDetails } from '../interfaces';
import styles from './HeaderTopLinks.module.scss';

export const HeaderTopLinks = () => {
  const socialLinks: ListItemDetails[] = [
    {
      href: 'https://www.linkedin.com/in/omarcreativedev',
      icon: faLinkedin,
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
      class: 'bitbucket'
    }
  ];

  return (
    <div className="container m-auto p-4">
      <div className="grid grid-flow-col auto-cols-auto justify-between">
        <div className="flex gap-8">
          {socialLinks &&
            socialLinks.map((i) => (
              <Link href={i.href} key={i.label}>
                <a className={`${styles.socialLink} text-sm`} target="_blank" rel="noreferrer">
                  {i.icon && <FontAwesomeIcon className={`${i.class} pr-2`} icon={i.icon} />}
                  {i.label}
                </a>
              </Link>
            ))}
        </div>
        <div className="flex gap-8">
          {codeLinks &&
            codeLinks.map((i) => (
              <Link href={i.href} key={i.label}>
                <a className={`${styles.socialLink} text-sm`} target="_blank" rel="noreferrer">
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
