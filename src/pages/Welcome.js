import React from 'react';
import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <div>
      <div className="relative h-screen overflow-hidden bg-indigo-900">
        <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80" className="absolute object-cover w-full h-full" alt="office" />
        <div className="absolute inset-0 bg-black opacity-25" />
        <div className="container relative z-10 flex items-center px-6 py-32 mx-auto md:px-12 xl:py-40">
          <div className="relative z-10 flex flex-col items-center w-full">
            <h1 className="mt-4 font-extrabold leading-tight text-center text-white text-7xl sm:text-8xl">
              Your Office Anywhere
            </h1>
            <Link to="/login" className="py-2 px-4  bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg">Login</Link>
            <Link to="/signup" className="mt-2 py-2 px-4  bg-blue-400 hover:bg-blue-700 focus:ring-blue-400 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">SignUp</Link>
          </div>
        </div>
      </div>

      <footer className="bg-white dark:bg-gray-800 w-full py-8">
        <div className="max-w-screen-xl px-4 mx-auto">
          <ul className="flex flex-wrap justify-between max-w-screen-md mx-auto text-lg font-light">
            <li className="my-2">
              <a className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200" href="https://github.com/Fourteen98/officeverse-frontend" target="blank">
                FrontEnd Repo
              </a>
            </li>
            <li>
              <h4>
                Officeverse 2022
              </h4>
            </li>
            <li className="my-2">
              <a className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200" href="https://github.com/Fourteen98/officeverse-api" target="blank">
                BackEnd Repo
              </a>
            </li>
          </ul>
        </div>
      </footer>

    </div>
  );
}

export default Welcome;
