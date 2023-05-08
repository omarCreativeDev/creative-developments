import Link from 'next/link';
import { navLinks } from '../../constants';
import styles from './HeaderNav.module.scss';

export const HeaderNav = () => {
  const { navBg, logo, link } = styles;

  return (
    <div className={navBg}>
      <div className="container m-auto px-4">
        <div className="grid md:grid-flow-col md:auto-cols-max justify-between">
          <Link href="/" className={`${logo} no-underline py-10 text-2xl text-secondary uppercase`}>
            <span className="text-white">Creative</span> Developments
          </Link>
          <nav className="flex pb-12 md:pb-0">
            <ul className="grid grid-flow-col auto-cols-max content-center gap-6 mb-0">
              {navLinks &&
                navLinks.map((i) => (
                  <li key={i.label}>
                    <Link
                      href={i.href}
                      className={`text-white no-underline py-3 hover:underline ${link}`}
                    >
                      {i.label.toUpperCase()}
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
