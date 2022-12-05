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
      navigate('/user-profile');
    }
  }, [navigate, userInfo]);

  const submitForm = (data) => {
    dispatch(loginUser(data));
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      {error && <p>{error}</p>}
      <div className="form-group">
        <label htmlFor="email">
          Email
          <input
            type="email"
            className="form-input"
            {...register('email')}
            required
          />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="password">
          Password
          <input
            id="password"
            type="password"
            className="form-input"
            {...register('password')}
            required
          />
        </label>
      </div>
      <button type="submit" className="button">
        Login
      </button>
    </form>
  );
};

export default LoginPage;
