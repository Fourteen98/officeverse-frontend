import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchCurrentUser, loginUser } from '../redux/user/userSlice';

export default function Login() {
  // const [office, setOffice] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.user.user);

  const [user, setUser] = useState(currentUser);

  /* const handleChange = (event) => {
    const { name } = event.target;
    const { value } = event.target;
    setOffice((values) => ({ ...values, [name]: value }));
  }; */

  const handleClick = () => {
    dispatch(loginUser({
      email: user.email,
      password: user.password,
    })).then(() => {
      dispatch(fetchCurrentUser());
      navigate('/myoffices');
      setUser(1);
    });
  };

  return (
    <form>
      <label htmlFor="email">
        Office Title:
        <input
          className="bg-gray-200"
          type="text"
          name="email"
          // onChange={handleChange}
        />
      </label>
      <br />
      <label htmlFor="password">
        Password:
        <input
          className="bg-gray-200"
          type="number"
          name="password"
          // onChange={handleChange}
        />
      </label>
      <br />
      <br />
      <button type="button" onClick={handleClick}>Login</button>
    </form>
  );
}
