import Link from 'next/link';

export const HeaderNav = () => {
  return (
    <div className="">
      <div className="container m-auto p-4">
        <div className="grid grid-flow-col auto-cols-max justify-between">
          <Link href="/">
            <a className="no-underline">
              <span className="text-white">Creative</span> Developments
            </a>
          </Link>
          <nav className="">
            <ul className="">
              <li className="">
                <Link href="/about-me">
                  <a className="no-underline">ABOUT ME</a>
                </Link>
              </li>
              <li className="">
                <Link href="/my-skills">
                  <a className="no-underline">MY SKILLS</a>
                </Link>
              </li>
              <li className="">
                <Link href="/portfolio">
                  <a className="no-underline">PORTFOLIO</a>
                </Link>
              </li>
              <li className="">
                <Link href="/contact-me">
                  <a className="no-underline">CONTACT ME</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
