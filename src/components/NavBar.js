import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/user/userSlice';
import officeverseLogo from '../assets/images/officeverse-logo.png';

const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const currentUser = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleClick = () => {
    dispatch(logout());
    navigate('/welcome');
    window.location.reload();
  };

  const logged = currentUser
    ? (
      <>
        <li>
          <NavLink to="/" onClick={toggleModal} className={({ isActive }) => (isActive ? 'active block py-2 pl-3 pr-4 bg-blue-700 text-gray-400 hover:text-gray-400 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white underline' : 'block py-2 pl-3 pr-4 text-white md:bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white no-underline')} aria-current="page">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/newoffice" onClick={toggleModal} className={({ isActive }) => (isActive ? 'active block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white underline' : 'block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white no-underline')} aria-current="page">
            New Office
          </NavLink>
        </li>
        <li>
          <NavLink to="/myoffices" onClick={toggleModal} className={({ isActive }) => (isActive ? 'active block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white underline' : 'block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white no-underline')} aria-current="page">
            My Offices
          </NavLink>
        </li>
        <li>
          <NavLink to="/reserve" onClick={toggleModal} className={({ isActive }) => (isActive ? 'active block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white underline' : 'block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white no-underline')} aria-current="page">
            Reserve
          </NavLink>
        </li>
        <li>
          <NavLink to="/my-reservations" onClick={toggleModal} className={({ isActive }) => (isActive ? 'active block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white underline' : 'block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white no-underline')} aria-current="page">
            My reservations
          </NavLink>
        </li>
        <li>
          <button type="button" className="bg-red-500 hover:bg-red-700 text-white font-bold mx-2 py-1 px-3 rounded" onClick={handleClick}>
            Logout
          </button>
        </li>
      </>
    )
    : (
      <>
        <li>
          <NavLink to="/login" onClick={toggleModal} className={({ isActive }) => (isActive ? 'active block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white underline' : 'block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white no-underline')} aria-current="page">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/signup" onClick={toggleModal} className={({ isActive }) => (isActive ? 'active block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white underline' : 'block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white no-underline')} aria-current="page">
            SignUp
          </NavLink>
        </li>
      </>
    );
  return (
    <nav className="sticky top-0 z-50 bg-white border-2 border-gray-200 px-2 sm:px-4 py-2.5 rounded ">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <NavLink to="/" className="flex items-center">
          <img src={officeverseLogo} className="w-9 h-6 mr-2 sm:h-9 md:w-12 " alt="officeverse Logo" />
          <span className="pt-2 self-center text-md font-semibold whitespace-nowrap">Officeverse</span>
        </NavLink>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col gap-4 p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
            {logged}
          </ul>
        </div>
        <div id="hamburger-menu" className="md:hidden">
          <button type="button" className="block text-gray-800 hover:text-gray-700 focus:text-gray-700 focus:outline-none" onClick={toggleModal}>
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path fillRule="evenodd" clipRule="evenodd" d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z" />
            </svg>
          </button>
        </div>
        <div id="mobile-modal" className={isModalOpen ? 'absolute top-0 left-0 h-screen w-full mt-8 md:hidden' : 'hidden md:hidden'}>
          <div className="w-full h-screen  md:w-auto" id="navbar-default">
            <ul className="h-screen flex flex-col gap-4 p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
              {logged}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
