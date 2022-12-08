/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/user/userSlice';

const LoginPage = () => {
  const { error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const submitForm = (data) => {
    dispatch(loginUser(data)).then(() => {
      navigate('/');
      window.location.reload();
    });
  };

  return (
    <div className="w-full h-full pb-9 flex justify-center bg-blue-200">
      <form onSubmit={handleSubmit(submitForm)} className="flex justify-center w-full max-w-xl">
        <div className="w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-blue-50 rounded-lg shadow">
          <div className="mb-6 text-3xl font-light text-center text-gray-800">
            {error && <p>{error}</p>}
            <h2 className="mt-4 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
            <div className="grid max-w-xl grid-cols-2 gap-4 m-auto mt-6">
              <div className="col-span-2">
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
            </div>
            <div className="grid max-w-xl grid-cols-2 gap-4 m-auto mt-6">
              <div className="col-span-2">
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
            </div>
            <button type="submit" className="group mt-8 relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
