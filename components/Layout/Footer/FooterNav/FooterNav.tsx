import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DataList, IconItemDetails } from '../interfaces';
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
  return (
    <div className={`${navBg} py-16`}>
      <div className="container m-auto px-4 text-white grid gap-x-5 gap-y-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        <dl>
          <dt className={`pb-7 uppercase text-lg ${description}`}>{browserIconList.description}</dt>
          {browserIconList.items.map((i) => (
            <dd key={i.class} className="inline-grid pr-4">
              <FontAwesomeIcon className={`${i.class} text-5xl`} icon={i.icon}></FontAwesomeIcon>
            </dd>
          ))}
        </dl>

        <dl>
          <dt className={`pb-7 uppercase text-lg ${description}`}>{browserIconList.description}</dt>
          {browserIconList.items.map((i) => (
            <dd key={i.class} className="inline-grid pr-4">
              <FontAwesomeIcon className={`${i.class} text-5xl`} icon={i.icon}></FontAwesomeIcon>
            </dd>
          ))}
        </dl>

        <dl>
          <dt className={`pb-7 uppercase text-lg ${description}`}>{browserIconList.description}</dt>
          {browserIconList.items.map((i) => (
            <dd key={i.class} className="inline-grid pr-4">
              <FontAwesomeIcon className={`${i.class} text-5xl`} icon={i.icon}></FontAwesomeIcon>
            </dd>
          ))}
        </dl>
      </div>
    </div>
  );
};
