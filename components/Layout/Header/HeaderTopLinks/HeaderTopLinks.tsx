import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faGithub, faBitbucket } from '@fortawesome/free-brands-svg-icons';

export const HeaderTopLinks = () => {
  return (
    <div className="container m-auto p-4">
      <div className="grid grid-flow-col auto-cols-auto justify-between">
        <div className="flex gap-8">
          <Link href="https://www.linkedin.com/in/omarcreativedev">
            <a target="_blank" rel="noreferrer">
              <FontAwesomeIcon className="pr-2" icon={faLinkedin} />
              LinkedIn
            </a>
          </Link>
          <Link href="https://twitter.com/OmarCreativeDev">
            <a target="_blank" rel="noreferrer">
              <FontAwesomeIcon className="pr-2" icon={faTwitter} />
              Twitter
            </a>
          </Link>
        </div>
        <div className="flex gap-8">
          <Link href="https://github.com/omarCreativeDev">
            <a target="_blank" rel="noreferrer">
              <FontAwesomeIcon className="pr-2" icon={faGithub} />
              Github
            </a>
          </Link>
          <Link href="https://bitbucket.org/omarCreativeDev">
            <a target="_blank" rel="noreferrer">
              <FontAwesomeIcon className="pr-2" icon={faBitbucket} />
              Bitbucket
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
