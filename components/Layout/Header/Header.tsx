import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faGithub, faBitbucket } from '@fortawesome/free-brands-svg-icons';

export const Header = () => {
  return (
    <header id="back-to-top">
      <div className="container m-auto p-4">
        <div className="grid grid-cols-2">
          <div>
            <Link href="https://www.linkedin.com/in/omarcreativedev">
              <a target="_blank" className="pr-8" rel="noreferrer">
                <FontAwesomeIcon className="pr-2" icon={faLinkedin} />
                LinkedIn
              </a>
            </Link>
            <Link href="https://twitter.com/OmarCreativeDev">
              <a target="_blank" className="pr-8">
                <FontAwesomeIcon className="pr-2" icon={faTwitter} />
                Twitter
              </a>
            </Link>
          </div>
          <div className="justify-self-end hidden sm:block">
            <Link href="https://github.com/omarCreativeDev">
              <a target="_blank" className="pr-8">
                <FontAwesomeIcon className="pr-2" icon={faGithub} />
                Github
              </a>
            </Link>
            <Link href="https://bitbucket.org/omarCreativeDev">
              <a target="_blank" className="pr-8">
                <FontAwesomeIcon className="pr-2" icon={faBitbucket} />
                Bitbucket
              </a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
