import Link from 'next/link';
import { ListItemDetails } from '../interfaces';
import styles from './HeaderNav.module.scss';

export const HeaderNav = () => {
  const links: ListItemDetails[] = [
    {
      href: '/about-me',
      label: 'ABOUT'
    },
    {
      href: '/my-skills',
      label: 'SKILLS'
    },
    {
      href: '/portfolio',
      label: 'PORTFOLIO'
    },
    {
      href: '/contact-me',
      label: 'CONTACT'
    }
  ];

  return (
    <div className={styles.navBg}>
      <div className="container m-auto px-4">
        <div className="grid md:grid-flow-col md:auto-cols-max justify-between">
          <Link href="/">
            <a className={`${styles.logo} no-underline py-10 text-2xl text-secondary`}>
              <span className="text-white">Creative</span> Developments
            </a>
          </Link>
          <nav className="flex pb-12 md:pb-0">
            <ul className="grid grid-flow-col auto-cols-max content-center gap-6">
              {links &&
                links.map((i) => (
                  <li key={i.label}>
                    <Link href={i.href}>
                      <a className="text-white no-underline py-3">{i.label}</a>
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
