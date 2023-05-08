import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { Url } from 'url';
import { codeLinks, emailAddress, mobileNo, navLinks, socialLinks } from '../../constants';
import { ListItemDetails } from '../../interfaces';
import { Description } from '../FooterTopLinks/Description';
import { DataList } from '../interfaces';
import styles from './FooterNav.module.scss';
import {
  faInternetExplorer,
  faOpera,
  faFirefox,
  faChrome,
  faSafari
} from '@fortawesome/free-brands-svg-icons';

export const FooterNav = () => {
  const { navBg, description } = styles;
  const browserIconList: DataList<ListItemDetails> = {
    description: <Description label={'Cross browser support'} />,
    items: [
      {
        icon: faInternetExplorer,
        className: 'internetExplorer'
      },
      {
        icon: faOpera,
        className: 'opera'
      },
      {
        icon: faFirefox,
        className: 'firefox'
      },
      {
        icon: faChrome,
        className: 'chrome'
      },
      {
        icon: faSafari,
        className: 'safari'
      }
    ]
  };
  const navigationLinks: DataList<ListItemDetails> = {
    description: <Description label={'Navigation links'} />,
    items: navLinks
  };
  const favouriteLinks: DataList<ListItemDetails> = {
    description: <Description label={'Favourite links'} />,
    items: [
      {
        href: 'https://reactjs.org/',
        label: 'React'
      },
      {
        href: 'https://nextjs.org/',
        label: 'Next Js'
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
    description: <Description label={'Contact info'} />,
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
  const codeSamples: DataList<ListItemDetails> = {
    description: <Description label={'Code samples'} />,
    items: codeLinks
  };

  const connectWithMe: DataList<ListItemDetails> = {
    description: <Description label={'Connect with me'} />,
    items: socialLinks
  };

  return (
    <div className={`${navBg} py-16`}>
      <div className="container m-auto px-4 text-white grid gap-x-5 gap-y-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        <dl>
          <dt className={`pb-7 uppercase text-lg ${description}`}>{browserIconList.description}</dt>
          {browserIconList.items.map(({ className = '', href = '', icon = '' }) => (
            <dd key={className + href} className="inline-grid pr-4">
              <FontAwesomeIcon
                className={`${className} text-5xl`}
                icon={icon as IconProp}
              ></FontAwesomeIcon>
            </dd>
          ))}
        </dl>

        <dl>
          <dt className={`pb-7 uppercase text-lg ${description}`}>{navigationLinks.description}</dt>
          {navigationLinks.items.map(({ className = '', href = '', icon = '', label = '' }) => (
            <dd key={className + href} className="inline-grid w-1/2 pr-4">
              <Link href={href as Url} className="text-white no-underline hover:underline">
                {label}
              </Link>
            </dd>
          ))}
        </dl>

        <dl>
          <dt className={`pb-7 uppercase text-lg ${description}`}>{favouriteLinks.description}</dt>
          {favouriteLinks.items.map(({ className = '', href = '', icon = '', label = '' }) => (
            <dd key={className + href} className="inline-grid w-1/2 pr-4">
              <Link
                href={href as Url}
                className="text-white no-underline hover:underline"
                target="_blank"
              >
                {label}
              </Link>
            </dd>
          ))}
        </dl>

        <dl>
          <dt className={`pb-7 uppercase text-lg ${description}`}>{contactInfo.description}</dt>
          {contactInfo.items.map(({ className = '', href = '', icon = '', label = '' }) => (
            <dd key={className + href} className="grid pr-4">
              <Link href={href as Url} className="hover:underline" target="_blank" rel="noreferrer">
                {icon && <FontAwesomeIcon className="pr-2" icon={icon as IconProp} />}
                {label}
              </Link>
            </dd>
          ))}
        </dl>

        <dl>
          <dt className={`pb-7 uppercase text-lg ${description}`}>{codeSamples.description}</dt>
          {codeSamples.items.map(({ className = '', href = '', icon = '', label = '' }) => (
            <dd key={className + href} className="inline-grid pr-4">
              <Link href={href as Url} className="hover:underline" target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  className={`${className} text-5xl`}
                  icon={icon as IconProp}
                ></FontAwesomeIcon>
              </Link>
            </dd>
          ))}
        </dl>

        <dl>
          <dt className={`pb-7 uppercase text-lg ${description}`}>{connectWithMe.description}</dt>
          {connectWithMe.items.map(({ className = '', href = '', icon = '', label = '' }) => (
            <dd key={className + href} className="inline-grid pr-4">
              <Link href={href as Url} className="hover:underline" target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  className={`${className} text-5xl`}
                  icon={icon as IconProp}
                ></FontAwesomeIcon>
              </Link>
            </dd>
          ))}
        </dl>
      </div>
    </div>
  );
};
