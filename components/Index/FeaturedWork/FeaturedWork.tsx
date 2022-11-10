import styles from './FeaturedWork.module.scss';

export const FeaturedWork = () => {
  const { featuredWork } = styles;

  return (
    <div className="my-24">
      <h3 className="text-center">
        Featured <span className="text-tertiary">Work</span>
      </h3>
      <div className={featuredWork}>
        <article className="container m-auto px-4">
          <p>some copy some copy some copy some copy some copy</p>
          <p>some copy some copy some copy some copy some copy</p>
        </article>
      </div>
    </div>
  );
};
