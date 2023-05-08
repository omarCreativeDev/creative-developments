import { faBitbucket, faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { ListItemDetails } from './interfaces';

export const navLinks: ListItemDetails[] = [
  {
    href: '/about-me',
    label: 'About'
  },
  {
    href: '/my-skills',
    label: 'Skills'
  },
  {
    href: '/portfolio',
    label: 'Portfolio'
  },
  {
    href: '/contact-me',
    label: 'Contact'
  }
];

export const socialLinks: ListItemDetails[] = [
  {
    href: 'https://www.linkedin.com/in/omarcreativedev',
    icon: faLinkedinIn,
    label: 'LinkedIn',
    className: 'linkedIn'
  },
  {
    href: 'https://twitter.com/OmarCreativeDev',
    icon: faTwitter,
    label: 'Twitter',
    className: 'twitter'
  }
];

export const codeLinks: ListItemDetails[] = [
  {
    href: 'https://github.com/omarCreativeDev',
    icon: faGithub,
    label: 'Github'
  },
  {
    href: 'https://bitbucket.org/omarCreativeDev',
    icon: faBitbucket,
    label: 'Bitbucket',
    className: 'bitBucket'
  }
];

export const mobileNo = '07932 566 488';
export const emailAddress = 'omar.creative.dev@gmail.com';
