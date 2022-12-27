import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import { IRecommendation } from './interfaces';
import Glide from '@glidejs/glide';
import Styles from './Recommendations.module.scss';

const sliderConfiguration = {
  gap: 50,
  perView: 2,
  breakpoints: {
    768: {
      perView: 1
    }
  },
  autoplay: 3500
};
export const Recommendations = () => {
  // @ts-ignore
  useEffect(() => {
    const slider = new Glide('.glide', sliderConfiguration);
    slider.mount();

    return () => slider.destroy();
  }, []);

  const { bullet, avatar } = Styles;

  const recommendations: IRecommendation[] = [
    {
      project: 'Sopra Steria',
      feedback:
        'I had the pleasure of working with Omar whilst working on the Adult Social Care Workforce Data Set for Skills ' +
        'for Care. A highly experienced and capable front end developer who was instrumental in transforming service ' +
        'design UIs using the GDS Design System often with in extremely tight deadlines. His delivery was outstanding ' +
        'often providing valuable suggestions or variations with an acute eye for detail. I hope to get to work with ' +
        'Omar again in the future.',
      image: 'richard-tees',
      name: 'Richard Rees',
      role: 'UX Lead'
    },
    {
      project: 'Sopra Steria',
      feedback:
        'Thorough, tenacious and inquisitive. I worked with Omar on Skills For Care; Omar frontend and I backend. ' +
        'Omar is great to work with, having good Angular skills affording him to build what looked like simple solutions ' +
        'to complex logic. Specifically, we worked together on user uploads. Omar translated the UI designs, inputted ' +
        'his own experience and challenged the backend APIs, all the time driving towards the end goal of a great user ' +
        'experience. ',
      image: 'warren-ayling',
      name: 'Warren Ayling',
      role: 'Independent IT Contractor'
    },
    {
      project: 'The Bio Agency',
      feedback:
        'Omar is one of the nicest and hardest working people I know. He will always strive to produce the best ' +
        'possible solution to a problem and goes the extra mile to deliver software on time with added flair. It was an ' +
        'absolute pleasure working with him, and I would not hesitate to hire him on future projects.',
      image: 'charlie-francis',
      name: 'Charlie Francis',
      role: 'Freelance Fullstack Developer'
    },
    {
      project: 'Runpath',
      feedback:
        'Omar is a talented Frontend Developer with a wide range of skills and a significant attention to ' +
        'detail. He helped creating an environment where each developer had a chance to grow their own skill sets and ' +
        'expertise by learning from each other. Being extremely professional as a developer and a friendly and cheerful ' +
        'person as a colleague. I would certainly welcome the opportunity to work with Omar again.',
      image: 'andrea-pace',
      name: 'Andrea Pace',
      role: 'Head of Web Development'
    },
    {
      project: 'The Bio Agency',
      feedback:
        'Omar has demonstrated to be a great front-end lead and did so both with his genuine interest in ' +
        'finding the right solution to technical challenges, and in his care towards his teammates and the project in ' +
        'general. He has great work ethos and has on many occasions worked from home during non-working hours to ' +
        'assist the team to overcome blockers.',
      image: 'vasileios-fasoulas',
      name: 'Vasileios Fasoulas',
      role: 'Technology Leader / Director / Architect'
    },
    {
      project: 'Foundry',
      feedback:
        'Omar has been an asset to our small team. He`s knowledgeable, helpful, and always willing to take on a new ' +
        'challenge. Highly recommend Omar, and hope to work again with him in the future.',
      image: 'samuel-hudson',
      name: 'Samuel Hudson',
      role: 'Engineering Manager'
    },
    {
      project: 'Transform',
      feedback:
        'Omar is the sort of developer one loves to have on their team. He uses his own initiative and creativity to ' +
        'figure out, suggest and implement what is good for the project. He also feels responsible for his work so he ' +
        'has the desire to do well and tends to be attentive to details. This attitude I consider among the most ' +
        'important traits of a good developer besides their level of skill.',
      image: 'alex-dobre',
      name: 'Alex Dobre',
      role: 'Lead Developer'
    },
    {
      project: 'Connexity',
      feedback:
        'Omar is an extremely dedicated and competent Front End Developer who is always willing to learn and expand ' +
        'his knowledge. He throws himself 100 percent into tasks and will battle away to get a job done. He was a ' +
        'valuable member of my team whose input and suggestions improved the way the team works and significantly ' +
        'contributed to our in-house coding standards and workflow processes.',
      image: 'joe-stickings',
      name: 'Joe Stickings',
      role: 'Software Development Manager'
    }
  ];

  return (
    <article className="container px-4 mx-auto my-32">
      <h5 className="text-center">Recommendations</h5>

      <div className="glide">
        <div className="glide__track mb-2" data-glide-el="track">
          <ul className="glide__slides">
            {recommendations.map(({ feedback, name, role, project, image }: IRecommendation) => {
              return (
                <li key={name + image} className="glide__slide">
                  <div className="grid gap-8 grid-flow-col auto-cols-max">
                    {/* eslint-disable @next/next/no-img-element */}
                    <img
                      className={avatar}
                      src={`/images/recommendations/${image}.jpeg`}
                      alt={name}
                    />
                    <div className="">
                      <div>
                        <b>{name}</b>
                      </div>
                      <div>{role}</div>
                      <div>
                        <i>{project}</i>
                      </div>
                    </div>
                  </div>
                  <p className="mt-8">
                    <FontAwesomeIcon className="pr-2" icon={faQuoteLeft} />
                    {feedback}
                    <FontAwesomeIcon className="pl-2" icon={faQuoteRight} />
                  </p>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="glide__bullets flex justify-center" data-glide-el="controls[nav]">
          {recommendations.map(({ name }: IRecommendation, index: number) => (
            <button key={name + index} className={bullet} data-glide-dir={`=${index}`} />
          ))}
        </div>
      </div>
    </article>
  );
};
