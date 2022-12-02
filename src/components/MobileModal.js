import React from 'react';
import { NavLink } from 'react-router-dom';

export default function MobileModal() {
  return (
    <div id="mobile-modal">
      <div className="w-full md:block md:w-auto" id="navbar-default">
        <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white underline' : 'block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white no-underline')} aria-current="page">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/reserve" className={({ isActive }) => (isActive ? 'active block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white underline' : 'block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white no-underline')} aria-current="page">
              Reserve
            </NavLink>
          </li>
          <li>
            <NavLink to="/my-reservations" className={({ isActive }) => (isActive ? 'active block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white underline' : 'block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white no-underline')} aria-current="page">
              My reservations
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
