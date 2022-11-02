import { FooterBottomContent } from './FooterBottomContent/FooterBottomContent';
import { FooterNav } from './FooterNav/FooterNav';
import { FooterTopLinks } from './FooterTopLinks/FooterTopLinks';

export const Footer = () => {
  return (
    <footer>
      <FooterTopLinks />
      <FooterNav />
      <FooterBottomContent />
    </footer>
  );
};
