import { faCss3, faHtml5, faJsSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { ISubject } from './interfaces';

export const ThingsIDo = () => {
  const subjects: ISubject[] = [
    {
      name: 'JAVASCRIPT',
      icon: faJsSquare,
      description:
        "I write object oriented javascript code that's both cross browser and cross platform compatible using native vanilla javascript or any of the modern frameworks such as angular."
    },
    {
      name: 'CSS3',
      icon: faCss3,
      description:
        'I like to write cross browser object oriented CSS code. This encourages code reuse and, ultimately, faster and more efficient stylesheets that are easier to add to and maintain.'
    },
    {
      name: 'HTML5',
      icon: faHtml5,
      description:
        'I write semantic and meaningful markup that is documented and easy to read. This means it can be maintained and scaled in the future, and allows co-workers to quickly pick it up.'
    }
  ];

  return (
    <div className="container m-auto">
      <h4 className="text-center">
        Things <span className="text-tertiary">I</span> Do
        <span className="text-tertiary"> Well</span>
      </h4>
      <p className="text-center">
        I have a wide range of skills in front end development. Here are the core technologies I
        work with on a daily basis.
      </p>

      <div className="grid grid-cols-2 gap-8">
        {subjects &&
          subjects.map(({ name, icon, description }: ISubject) => (
            <div key={name} className="grid grid-cols-[140px_auto] gap-4">
              {icon && <FontAwesomeIcon className="pr-2" icon={icon} size="8x" />}
              <div>
                <h5 className="mb-0">{name}</h5>
                <div>{description}</div>
              </div>
            </div>
          ))}
      </div>

      <p className="text-center">
        Or visit&nbsp;
        <Link href="/my-skills">
          <a className="text-tertiary underline">my skills</a>
        </Link>
        &nbsp;page for a full breakdown of my capabilities as a senior front end developer.
      </p>
    </div>
  );
};
