import Link from 'next/link';
import { Page } from '../../Shared/Page/Page';
import { YearsOfExperience } from '../../Shared/YearsOfExperience/YearsOfExperience';

export const MoreInfo = () => {
  return (
    <Page>
      <h1>
        About <span className="text-tertiary">me</span>
      </h1>
      <p>
        Creative Developments aka Omar Mirza is a freelance front end web developer with
        <YearsOfExperience /> years commercial experience located in Barkingside, London. My aim is
        to develop{' '}
        <Link href="/portfolio" className="text-tertiary underline">
          amazing websites
        </Link>{' '}
        that my clients and I both love.
      </p>

      <h2>Overview</h2>
      <p>
        I am proficient in taking complex{' '}
        <Link href="/portfolio" className="text-tertiary underline">
          projects
        </Link>{' '}
        from conception to reality using solid programming principles and agile methodologies. I
        possess a forward thinking approach to developing front end architecture that’s both
        scalable and modular whilst also conforming to web accessibility standards.
      </p>

      <h3>
        WHAT <span className="text-tertiary">I</span> DO
      </h3>
      <p>
        Javascript, CSS3 and HTML5 and much more! See{' '}
        <Link href="/my-skills" className="text-tertiary underline">
          my skills
        </Link>{' '}
        for full details. If you are interested in hiring me please{' '}
        <Link href="/contact-me" className="text-tertiary underline">
          get in touch
        </Link>
        !
      </p>
    </Page>
  );
};
