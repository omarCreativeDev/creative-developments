import React, { useEffect } from 'react';

// @ts-ignore
import { Fancybox as NativeFancybox } from '@fancyapps/ui/dist/fancybox.umd.js';
import '@fancyapps/ui/dist/fancybox.css';

export const Fancybox = (props: any) => {
  const delegate = props.delegate || '[data-fancybox]';

  useEffect(() => {
    const opts = props.options || {};

    NativeFancybox.bind(delegate, opts);

    return () => {
      NativeFancybox.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{props.children}</>;
};
