import { IPage } from './interfaces';

export const Page = ({ children }: IPage) => {
  return <div className="container my-20 px-4 m-auto">{children}</div>;
};
