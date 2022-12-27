import type { NextPage } from 'next';
import Head from 'next/head';
import { MoreInfo } from '../components/AboutMe/MoreInfo/MoreInfo';

const AboutMe: NextPage = () => {
  return (
    <>
      <Head>
        <title>Creative Developments | About Me | Freelance Web Development</title>
      </Head>
      <MoreInfo />
    </>
  );
};

export default AboutMe;
