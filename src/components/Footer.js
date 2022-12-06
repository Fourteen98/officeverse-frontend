import React from 'react';

const Footer = () => (
  <footer className="fixed inset-x-0 bottom-0 p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 ">
    <span className="text-sm text-gray-500 sm:text-center">
      © 2022
      <a href="officeverse.com" className="hover:underline" target="_blank" rel="noreferrer"> Officeverse, Inc </a>
      . All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 sm:mt-0">
      <li>
        <span className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">About</span>
      </li>
      <li>
        <span className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">
          Privacy Policy
        </span>
      </li>
      <li>
        <span className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Licensing</span>
      </li>
      <li>
        <span className="text-sm text-gray-500 hover:underline dark:text-gray-400">Contact</span>
      </li>
    </ul>
  </footer>
);

export default Footer;
