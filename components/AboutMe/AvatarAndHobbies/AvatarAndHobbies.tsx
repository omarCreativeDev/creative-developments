import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { options } from './constants';
import Image from 'next/image';

export const AvatarAndHobbies = () => {
  return (
    <div className="columns-2 md:columns-1">
      <div className="col-span-12 sm:col-span-3">
        <h4>
          This <span className="text-tertiary">is</span> me
        </h4>
        <Image
          src="/images/about-me/omar-mirza-senior-front-end-developer.png"
          width={200}
          height={200}
          alt="omar mirza senior front end developer"
          className="mb-12 rounded-full"
        />
      </div>
      <div className="col-span-12 sm:col-span-9">
        <h5>
          My <span className="text-tertiary">Hobbies</span>
        </h5>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  );
};
