import Link from 'next/link';

export const Intro = () => {
  return (
    <div className="container max-w-5xl m-auto">
      <h1 className="text-center">
        HI! <span className="text-tertiary">I&apos;M OMAR</span>, & I&apos;M A SENIOR
        <span className="text-tertiary"> FRONT END</span> WEB
        <span className="text-tertiary"> DEVELOPER</span>.
      </h1>
      <p className="text-center">
        I have 14 years solid industry experience and I&apos;m available for&nbsp;
        <Link href="/contact-me">
          <a className="text-tertiary underline">hire</a>
        </Link>
        &nbsp;on a contract basis. Welcome to my online&nbsp;
        <Link href="/contact-me">
          <a className="text-tertiary underline">portfolio</a>
        </Link>
        &nbsp;designed to showcase examples of my work and the different&nbsp;
        <Link href="/my-skills">
          <a className="text-tertiary underline">skills</a>
        </Link>
        &nbsp;I have acquired along the way.
      </p>
    </div>
  );
};
