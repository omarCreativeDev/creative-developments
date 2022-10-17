import Link from 'next/link';
import { ListItemDetails } from '../interfaces';

export const HeaderNav = () => {
  const links: ListItemDetails[] = [
    {
      href: '/about-me',
      label: 'ABOUT ME'
    },
    {
      href: '/my-skills',
      label: 'MY SKILLS'
    },
    {
      href: '/portfolio',
      label: 'PORTFOLIO'
    },
    {
      href: '/contact-me',
      label: 'CONTACT ME'
    }
  ];

  return (
    <div className="">
      <div className="container m-auto p-4">
        <div className="grid grid-flow-col auto-cols-max justify-between">
          <Link href="/">
            <a className="no-underline py-10 text-2xl">
              <span className="text-white">Creative</span> Developments
            </a>
          </Link>
          <nav className="flex">
            <ul className="grid grid-flow-col auto-cols-max content-center gap-6">
              {links &&
                links.map((i) => (
                  <li key={i.label}>
                    <Link href={i.href}>
                      <a className="no-underline py-3">{i.label}</a>
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
