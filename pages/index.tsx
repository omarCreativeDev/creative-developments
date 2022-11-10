import type { NextPage } from 'next';
import Head from 'next/head';
import { FeaturedWork } from '../components/Index/FeaturedWork/FeaturedWork';
import { Intro } from '../components/Index/Intro/Intro';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Creative Developments | Home | Freelance Web Development</title>
      </Head>
      <Intro />
      <FeaturedWork />
    </>
  );
};

export default Home;
