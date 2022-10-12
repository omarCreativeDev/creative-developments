import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faGithub, faBitbucket } from '@fortawesome/free-brands-svg-icons';

export const Header = () => {
  return (
    <header id="back-to-top">
      <div className="container px-3">
        <div className="flex">
          <div className="col-sm-12 col-md-8">
            <Link href="https://www.linkedin.com/in/omarcreativedev">
              <a
                target="_blank"
                className="header__social-link text-body pr-5 d-inline-flex align-items-center no-underline"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </Link>
            <Link href="https://twitter.com/OmarCreativeDev">
              <a
                target="_blank"
                className="header__social-link text-body d-inline-flex align-items-center no-underline"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </Link>
          </div>
          <div className="col-md-4 text-right d-none d-md-block">
            <Link href="https://github.com/omarCreativeDev">
              <a
                target="_blank"
                className="header__social-link text-body pr-5 d-inline-flex align-items-center no-underline"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </Link>
            <Link href="https://bitbucket.org/omarCreativeDev">
              <a
                target="_blank"
                className="header__social-link text-body d-inline-flex align-items-center no-underline"
              >
                <FontAwesomeIcon icon={faBitbucket} />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
