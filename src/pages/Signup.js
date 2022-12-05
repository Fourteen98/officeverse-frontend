/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-param-reassign */
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../redux/user/userSlice';

const Signup = () => {
  const { userInfo, error, success } = useSelector(
    (state) => state.user,
  );
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  useEffect(() => {
    // redirect user to login page if registration was successful
    if (success) navigate('/login');
    // redirect authenticated user to profile screen
    if (Object.keys(userInfo).length !== 0) navigate('/user-profile');
  }, [navigate, userInfo, success]);

  const submitForm = (data) => {
    if (data.password !== data.confirmPassword) {
      alert('Password mismatch');
      return;
    }
    // transform email string to lowercase to avoid case sensitivity issues during login
    data.email = data.email.toLowerCase();
    dispatch(createUser(data));
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      {error && <p>{error}</p>}
      <div className="form-group">
        <label htmlFor="firstName">
          First Name
          <input
            type="text"
            className="form-input"
            {...register('first_name')}
            required
          />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="last_name">
          Last Name
          <input
            type="text"
            className="form-input"
            {...register('last_name')}
            required
          />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="username">
          User Name
          <input
            type="text"
            className="form-input"
            {...register('username')}
            required
          />
        </label>
      </div>
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
            type="password"
            className="form-input"
            {...register('password')}
            required
          />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="email">
          Confirm Password
          <input
            type="password"
            className="form-input"
            {...register('confirmPassword')}
            required
          />
        </label>
      </div>
      <button type="submit" className="button">
        Register
      </button>
    </form>
  );
};

export default Signup;
