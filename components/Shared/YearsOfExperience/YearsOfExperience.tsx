import { Moment } from 'moment';
import moment from 'moment';

export const YearsOfExperience = () => {
  const beganDevelopment: Moment = moment('01/03/2008', 'MM-DD-YYYY');
  const yearsOfExperience: string = moment().diff(beganDevelopment, 'years').toString();
  return <>{yearsOfExperience}</>;
};
