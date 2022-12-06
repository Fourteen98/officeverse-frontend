import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/user/userSlice';
import officeverseLogo from '../assets/images/officeverse-logo.png';
import loggedUser from '../utils/loggedStatus';

export default function NavBar() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const { status } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (status === 'ttt') {
      navigate('/');
    }
  }, [navigate, status]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const currentUser = loggedUser();
  const logged = currentUser
    ? (
      <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white underline' : 'block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white no-underline')} aria-current="page">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/newoffice" className={({ isActive }) => (isActive ? 'active block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white underline' : 'block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white no-underline')} aria-current="page">
            New Office
          </NavLink>
        </li>
        <li>
          <NavLink to="/myoffices" className={({ isActive }) => (isActive ? 'active block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white underline' : 'block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white no-underline')} aria-current="page">
            My Offices
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
        <li>
          <button type="button" className="bg-red-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded" onClick={() => dispatch(logout())}>
            Logout
          </button>
        </li>
      </ul>
    )
    : (
      <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
        <li>
          <NavLink to="/login" className={({ isActive }) => (isActive ? 'active block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white underline' : 'block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white no-underline')} aria-current="page">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/signup" className={({ isActive }) => (isActive ? 'active block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white underline' : 'block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white no-underline')} aria-current="page">
            SignUp
          </NavLink>
        </li>
      </ul>
    );
  return (
    <nav className="sticky top-0 z-50 bg-white border-2 border-gray-200 px-2 sm:px-4 py-2.5 rounded ">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <NavLink to="/" className="flex items-center">
          <img src={officeverseLogo} className="w-8 h-6 mr-2 sm:h-9 md:w-12 " alt="officeverse Logo" />
          <span className="pt-2 self-center text-md font-semibold whitespace-nowrap">Officeverse</span>
        </NavLink>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          { logged }
        </div>
        <div id="hamburger-menu" className="md:hidden">
          <button type="button" className="block text-gray-800 hover:text-gray-700 focus:text-gray-700 focus:outline-none" onClick={toggleModal}>
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path fillRule="evenodd" clipRule="evenodd" d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z" />
            </svg>
          </button>
        </div>
        <div id="mobile-modal" className={isModalOpen ? 'h-screen w-screen mt-8 md:hidden' : 'hidden md:hidden'}>
          <div className="w-full h-screen md:block md:w-auto" id="navbar-default">
            { logged }
          </div>
        </div>
      </div>
    </nav>
  );
}
