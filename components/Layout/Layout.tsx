import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';

export const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <main className="grow">{children}</main>
      <Footer />
    </>
  );
};
