/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable react/react-in-jsx-scope */
'use client';

import moment from 'moment';

const Footer = () => {
  const year = moment().format('YYYY');
  return (
    <footer className="footer footer-center text-base-content flex h-[68px] items-center justify-center  text-center font-light dark:bg-gray-900">
      <div>
        <p className="text-gray-400 dark:text-gray-500">
          Copyright ©
          {' '}
          {year}
          {' '}
          - Developed by
          <a
            className="mx-1 font-bold text-blue-500 dark:text-blue-400"
            target="_blank"
            href="https://github.com/kungjirawat4"
            rel="noreferrer"
          >
            Jirawat Ratsamee
          </a>
        </p>

      </div>
    </footer>
  );
};

export default Footer;
