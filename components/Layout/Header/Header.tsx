import { HeaderNav } from './HeaderNav/HeaderNav';
import { HeaderTopLinks } from './HeaderTopLinks/HeaderTopLinks';

export const Header = () => {
  return (
    <header id="back-to-top">
      <HeaderTopLinks />
      <HeaderNav />
    </header>
  );
};
