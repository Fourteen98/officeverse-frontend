/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/user/userSlice';

const LoginPage = () => {
  const { userInfo, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  // redirect authenticated user to profile screen
  useEffect(() => {
    if (Object.keys(userInfo).length !== 0) {
      navigate('/myoffices');
    }
  }, [navigate, userInfo]);

  const submitForm = (data) => {
    dispatch(loginUser(data));
  };

  return (
    <form onSubmit={handleSubmit(submitForm)} className="mt-8 space-y-6">
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          {error && <p>{error}</p>}
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
          <div className="-space-y-px rounded-md shadow-sm">
            <label htmlFor="email">
              Email
              <input
                type="email"
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Email address"
                {...register('email')}
                required
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              Password
              <input
                id="password"
                type="password"
                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Password"
                {...register('password')}
                required
              />
            </label>
          </div>
          <button type="submit" className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Login
          </button>
        </div>
      </div>
    </form>
  );
};

export default LoginPage;
