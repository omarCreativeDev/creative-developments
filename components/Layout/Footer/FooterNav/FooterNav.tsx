import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { emailAddress, mobileNo, navLinks } from '../../constants';
import { ListItemDetails } from '../../interfaces';
import { DataList, IconItemDetails } from '../interfaces';
import styles from './FooterNav.module.scss';
import {
  faInternetExplorer,
  faOpera,
  faFirefox,
  faChrome,
  faSafari,
  faGithub,
  faBitbucket,
  faTwitter,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';

export const FooterNav = () => {
  const { navBg, description } = styles;
  const browserIconList: DataList<IconItemDetails> = {
    description: (
      <span className="text-secondary">
        Cross <span className="text-white">browser</span> support
      </span>
    ),
    items: [
      {
        icon: faInternetExplorer,
        class: 'internetExplorer'
      },
      {
        icon: faOpera,
        class: 'opera'
      },
      {
        icon: faFirefox,
        class: 'firefox'
      },
      {
        icon: faChrome,
        class: 'chrome'
      },
      {
        icon: faSafari,
        class: 'safari'
      }
    ]
  };
  const navigationLinks: DataList<ListItemDetails> = {
    description: (
      <span className="text-secondary">
        Navigation <span className="text-white">links</span>
      </span>
    ),
    items: navLinks
  };
  const favouriteLinks: DataList<ListItemDetails> = {
    description: (
      <span className="text-secondary">
        Favourite <span className="text-white">Links</span>
      </span>
    ),
    items: [
      {
        href: 'https://reactjs.org/',
        label: 'React'
      },
      {
        href: 'https://redux.js.org/',
        label: 'Redux'
      },
      {
        href: 'https://tailwindcss.com/',
        label: 'Tailwind'
      },
      {
        href: 'https://mui.com/',
        label: 'Material'
      },
      {
        href: 'https://nodejs.org/en/',
        label: 'Node'
      },
      {
        href: 'https://stackoverflow.com/',
        label: 'Stack overflow'
      }
    ]
  };
  const contactInfo: DataList<ListItemDetails> = {
    description: (
      <span className="text-secondary">
        Contact <span className="text-white">info</span>
      </span>
    ),
    items: [
      {
        icon: faPhone,
        label: mobileNo,
        href: `tel:${mobileNo}`
      },
      {
        icon: faEnvelope,
        label: emailAddress,
        href: `mailto:${emailAddress}?subject=Creative%20Developments`
      }
    ]
  };
  const codeSamples: DataList<IconItemDetails> = {
    description: (
      <span className="text-secondary">
        Code <span className="text-white">samples</span>
      </span>
    ),
    items: [
      {
        icon: faGithub,
        class: 'gitHub'
      },
      {
        icon: faBitbucket,
        class: 'bitBucket'
      }
    ]
  };

  const connectWithMe: DataList<IconItemDetails> = {
    description: (
      <span className="text-secondary">
        Connect <span className="text-white">with</span> me
      </span>
    ),
    items: [
      {
        href: 'https://www.linkedin.com/in/omarcreativedev',
        icon: faLinkedinIn,
        class: 'linkedIn'
      },
      {
        href: 'https://twitter.com/OmarCreativeDev',
        icon: faTwitter,
        class: 'twitter'
      }
    ]
  };

  return (
    <div className={`${navBg} py-16`}>
      <div className="container m-auto px-4 text-white grid gap-x-5 gap-y-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        <dl>
          <dt className={`pb-7 uppercase text-lg ${description}`}>{browserIconList.description}</dt>
          {browserIconList.items.map((i) => (
            <dd key={i.class + i.href} className="inline-grid pr-4">
              <FontAwesomeIcon className={`${i.class} text-5xl`} icon={i.icon}></FontAwesomeIcon>
            </dd>
          ))}
        </dl>

        <dl>
          <dt className={`pb-7 uppercase text-lg ${description}`}>{navigationLinks.description}</dt>
          {navigationLinks.items.map((i) => (
            <dd key={i.class + i.href} className="inline-grid w-1/2 pr-4">
              <Link href={i.href} className="text-white no-underline hover:underline">
                {i.label}
              </Link>
            </dd>
          ))}
        </dl>

        <dl>
          <dt className={`pb-7 uppercase text-lg ${description}`}>{favouriteLinks.description}</dt>
          {favouriteLinks.items.map((i) => (
            <dd key={i.class + i.href} className="inline-grid w-1/2 pr-4">
              <Link
                href={i.href}
                className="text-white no-underline hover:underline"
                target="_blank"
              >
                {i.label}
              </Link>
            </dd>
          ))}
        </dl>

        <dl>
          <dt className={`pb-7 uppercase text-lg ${description}`}>{contactInfo.description}</dt>
          {contactInfo.items.map((i) => (
            <dd key={i.class + i.href} className="grid pr-4">
              <Link href={i.href} className="hover:underline" target="_blank" rel="noreferrer">
                {i.icon && <FontAwesomeIcon className="pr-2" icon={i.icon} />}
                {i.label}
              </Link>
            </dd>
          ))}
        </dl>

        <dl>
          <dt className={`pb-7 uppercase text-lg ${description}`}>{codeSamples.description}</dt>
          {codeSamples.items.map((i) => (
            <dd key={i.class + i.href} className="inline-grid pr-4">
              <FontAwesomeIcon className={`${i.class} text-5xl`} icon={i.icon}></FontAwesomeIcon>
            </dd>
          ))}
        </dl>

        <dl>
          <dt className={`pb-7 uppercase text-lg ${description}`}>{connectWithMe.description}</dt>
          {connectWithMe.items.map((i) => (
            <dd key={i.class + i.href} className="inline-grid pr-4">
              <Link
                href={i.href as string}
                className="hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon className={`${i.class} text-5xl`} icon={i.icon}></FontAwesomeIcon>
              </Link>
            </dd>
          ))}
        </dl>
      </div>
    </div>
  );
};
