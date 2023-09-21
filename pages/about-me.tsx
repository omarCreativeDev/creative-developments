import type { NextPage } from 'next';
import Head from 'next/head';
import { AvatarAndHobbies } from '../components/AboutMe/AvatarAndHobbies/AvatarAndHobbies';
import { MoreInfo } from '../components/AboutMe/MoreInfo/MoreInfo';
import { Page } from '../components/Shared/Page/Page';

const AboutMe: NextPage = () => {
  return (
    <>
      <Head>
        <title>Creative Developments | About Me | Freelance Web Development</title>
      </Head>
      <Page>
        <article className="grid gap-8 grid-cols-12">
          <div className="col-span-12 md:col-span-9">
            <MoreInfo />
          </div>
          <div className="col-span-12 md:col-span-3">
            <AvatarAndHobbies />
          </div>
        </article>
      </Page>
    </>
  );
};

export default AboutMe;
