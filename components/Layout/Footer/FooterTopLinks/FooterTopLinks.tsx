import { faArrowUp, faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const FooterTopLinks = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="container m-auto p-4">
      <div className="grid grid-flow-col auto-cols-auto justify-between">
        <span className="hidden sm:block">
          <FontAwesomeIcon className="pr-3" icon={faCode} />
          Developing &amp; freelancing
        </span>
        <span className="cursor-pointer hover:underline" onClick={scrollToTop}>
          <span className="text-tertiary">Back to Top</span>
          <FontAwesomeIcon className="pl-3" icon={faArrowUp} />
        </span>
      </div>
    </div>
  );
};
