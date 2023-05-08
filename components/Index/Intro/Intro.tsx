import Link from 'next/link';
import { Page } from '../../Shared/Page/Page';
import { YearsOfExperience } from '../../Shared/YearsOfExperience/YearsOfExperience';

export const Intro = () => {
  return (
    <Page>
      <div className="max-w-5xl m-auto">
        <h1 className="text-center">
          HI! <span className="text-tertiary">I&apos;M OMAR</span>, & I&apos;M A SENIOR
          <span className="text-tertiary"> FRONT END</span> WEB
          <span className="text-tertiary"> DEVELOPER</span>.
        </h1>
        <p className="text-center mb-0">
          I have <YearsOfExperience /> years solid industry experience and I&apos;m available
          for&nbsp;
          <Link href="/contact-me" className="text-tertiary underline">
            hire
          </Link>
          &nbsp;on a contract basis. Welcome to my online&nbsp;
          <Link href="/contact-me" className="text-tertiary underline">
            portfolio
          </Link>
          &nbsp;designed to showcase examples of my work and the different&nbsp;
          <Link href="/my-skills" className="text-tertiary underline">
            skills
          </Link>
          &nbsp;I have acquired along the way.
        </p>
      </div>
    </Page>
  );
};
