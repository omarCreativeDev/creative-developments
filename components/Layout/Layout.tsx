import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { ILayout } from './interfaces';

export const Layout = ({ children }: ILayout) => {
  return (
    <>
      <Header />
      <main className="grow">{children}</main>
      <Footer />
    </>
  );
};
