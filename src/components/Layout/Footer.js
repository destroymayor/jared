import { memo } from 'react';

const Footer = () => (
  <footer className="flex justify-center flex-shrink-0 px-4 py-8 ">
    <div className="text-xs text-gray-600 dark:text-gray-300">
      © {new Date().getFullYear()} Jared Chen. All Rights Reserved.
    </div>
  </footer>
);

export default memo(Footer);
