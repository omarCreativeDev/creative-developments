import Link from 'next/link';
import styles from './FooterBottomContent.module.scss';

export const FooterBottomContent = () => {
  const { logo } = styles;

  return (
    <div className="container m-auto p-4">
      <div className="grid grid-flow-col auto-cols-auto justify-between">
        <span className="hidden sm:block">
          &copy; Copyright Creative Developments. All rights reserved.
        </span>
        <Link href="/" className={`${logo} no-underline text-tertiary text-l uppercase`}>
          Creative <span className="text-primary">Developments</span>.net
        </Link>
      </div>
    </div>
  );
};
