import { Fancybox } from '../../Shared/Fancybox/Fancybox';
import Image from 'next/future/image';
import styles from './FeaturedWork.module.scss';
import { IShowcaseItem } from './interfaces';

export const FeaturedWork = () => {
  const { featuredWork, item, img } = styles;
  const showcaseItems: IShowcaseItem[] = [
    {
      caption: 'Featured Work | Interoute | Pricing',
      imageName: 'interoute-pricing'
    },
    {
      caption: 'Featured Work | Interoute | Basket',
      imageName: 'interoute-basket'
    },
    {
      caption: 'Featured Work | Interoute | Quick Deployment',
      imageName: 'interoute-quick-deployment'
    }
  ];

  return (
    <div className="my-24">
      <h3 className="text-center">
        Featured <span className="text-tertiary">Work</span>
      </h3>
      <div className={featuredWork}>
        <article className="container m-auto px-4 grid justify-items-center grid-cols-3">
          <Fancybox>
            {showcaseItems &&
              showcaseItems.map(({ caption, imageName }: IShowcaseItem) => {
                const path = `/images/portfolio/${imageName}.jpg`;

                return (
                  <a
                    key={imageName}
                    data-fancybox="gallery"
                    href={path}
                    title={caption}
                    className={`${item} block relative`}
                  >
                    <Image fill alt={caption} src={path} sizes="100vw" className={img} />
                  </a>
                );
              })}
          </Fancybox>
        </article>
      </div>
    </div>
  );
};
