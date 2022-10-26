import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';

export const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <main className="container m-auto p-4 my-16 grow">{children}</main>
      <Footer />
    </>
  );
};
