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
  const { navBg } = styles;
  const browserIconList: DataList<IconItemDetails>[] = [
    {
      description: 'About Me',
      items: [
        {
          icon: faInternetExplorer,
          class: 'ABOUT'
        },
        {
          icon: faOpera,
          class: 'SKILLS'
        },
        {
          icon: faFirefox,
          class: 'PORTFOLIO'
        },
        {
          icon: faChrome,
          class: 'CONTACT'
        },
        {
          icon: faSafari,
          class: 'CONTACT'
        }
      ]
    }
  ];

  return (
    <div className={navBg}>
      <div className="container m-auto px-4 text-white">
        <dl>
          <dt className="pb-5">
            Cross <span className="text-white">browser</span> support
          </dt>
          <dd className="pr-4">
            <FontAwesomeIcon
              className="justify-content-center internet-explorer-color"
              icon={faInternetExplorer}
            ></FontAwesomeIcon>
          </dd>
          <dd className="pr-4">
            <FontAwesomeIcon
              className="justify-content-center opera-color"
              icon={faOpera}
            ></FontAwesomeIcon>
          </dd>
          <dd className="pr-4">
            <FontAwesomeIcon
              className="justify-content-center firefox-color"
              icon={faFirefox}
            ></FontAwesomeIcon>
          </dd>
          <dd className="pr-4">
            <FontAwesomeIcon
              className="justify-content-center chrome-color"
              icon={faChrome}
            ></FontAwesomeIcon>
          </dd>
          <dd className="pr-4">
            <FontAwesomeIcon
              className="justify-content-center safari-color"
              icon={faSafari}
            ></FontAwesomeIcon>
          </dd>
        </dl>
      </div>
    </div>
  );
};
