/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-param-reassign */
// import { useEffect } from 'react';
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
      alert('Password mismatch');
      return;
    }
    // transform email string to lowercase to avoid case sensitivity issues during login
    data.email = data.email.toLowerCase();
    await dispatch(createUser(data)).then(() => {
      navigate('/myoffices');
      window.location.reload();
    });
  };

  return (
    <form onSubmit={handleSubmit(submitForm)} className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {error && <p>{error}</p>}
      <div className="w-full max-w-md space-y-8">
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
    </form>
  );
};

export default Signup;
