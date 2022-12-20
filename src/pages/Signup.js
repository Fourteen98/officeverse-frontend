/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-param-reassign */

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../redux/user/userSlice';

const Signup = () => {
  const { error, success } = useSelector(
    (state) => state.user,
  );
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  useEffect(() => {
    // redirect user to login page if registration was successful
    if (success) navigate('/');
    // redirect authenticated user to profile screen
    // if (Object.keys(userInfo).length !== 0) navigate('/user-profile');
  }, [navigate, success]);

  const submitForm = async (data) => {
    if (data.password !== data.confirmPassword) {
      alert('Password mismatch'); // eslint-disable-line
      return;
    }
    // transform email string to lowercase to avoid case sensitivity issues during login
    data.email = data.email.toLowerCase();
    dispatch(createUser(data)).then(() => {
      navigate('/');
      setTimeout(() => window.location.reload(), 1000);
    });
  };

  return (
    <div className="w-full h-full flex justify-center bg-blue-200">
      <form onSubmit={handleSubmit(submitForm)} className="flex h-full w-full justify-center py-1 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-blue-50 rounded-lg shadow dark:bg-gray-800">
          {error && <p>{error}</p>}
          <div className="w-full max-w-md space-y-8">
            <h2 className="mt-4 text-center text-3xl font-bold tracking-tight text-gray-900">
              Create a New User
            </h2>
            <div className="-space-y-px rounded-md shadow-sm">
              <div className="form-group">
                <label htmlFor="firstName">
                  <input
                    type="text"
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="First name"
                    {...register('first_name')}
                    required
                  />
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="last_name">
                  <input
                    type="text"
                    className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Last name"
                    {...register('last_name')}
                    required
                  />
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="username">
                  <input
                    type="text"
                    className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="User name"
                    {...register('username')}
                    required
                  />
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="email">
                  <input
                    type="email"
                    className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Email"
                    {...register('email')}
                    required
                  />
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="password">
                  <input
                    type="password"
                    className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Password"
                    {...register('password')}
                    required
                  />
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="email">
                  <input
                    type="password"
                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Confirm password"
                    {...register('confirmPassword')}
                    required
                  />
                </label>
              </div>
            </div>
            <button type="submit" className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
