import { useEffect } from 'react';
import { useRouter } from 'next/router';

import nprogress from 'nprogress';

export default function Progress() {
  const router = useRouter();

  useEffect(() => {
    let timeout;
    const start = () => {
      timeout = setTimeout(nprogress.start, 200);
    };

    const done = () => {
      clearTimeout(timeout);
      nprogress.done();
    };

    router.events.on('routeChangeStart', start);
    router.events.on('routeChangeComplete', () => {
      done();
      window.scrollTo(0, 0);
    });
    router.events.on('routeChangeError', done);

    return () => {
      router.events.off('routeChangeStart', start);
      router.events.off('routeChangeComplete', done);
      router.events.off('routeChangeError', done);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
}
