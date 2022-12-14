import { Fancybox } from '../../Shared/Fancybox/Fancybox';
import styles from './FeaturedWork.module.scss';
import { IShowcaseItem } from './interfaces';

export const FeaturedWork = () => {
  const { featuredWork, img } = styles;
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
        <article className="container m-auto px-4 grid gap-8 justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <Fancybox>
            {showcaseItems &&
              showcaseItems.map(({ caption, imageName }: IShowcaseItem, index: number) => {
                const path = `/images/portfolio/${imageName}.jpg`;

                return (
                  <a
                    key={imageName}
                    data-fancybox="gallery"
                    href={path}
                    title={caption}
                    className={`relative ${index === 2 ? 'md:left-1/2 lg:left-0' : ''}`}
                  >
                    {/* eslint-disable @next/next/no-img-element */}
                    <img alt={caption} src={path} className={img} />
                  </a>
                );
              })}
          </Fancybox>
        </article>
      </div>
    </div>
  );
};
