import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchCurrentUser, loginUser } from '../redux/user/userSlice';

export default function Login() {
  // const [office, setOffice] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const currentUser = useSelector((state) => state.user.user);

  // const [user, setUser] = useState(currentUser);

  /* const handleChange = (event) => {
    const { name } = event.target;
    const { value } = event.target;
    setOffice((values) => ({ ...values, [name]: value }));
  }; */

  const handleClick = (event) => {
    console.log('hello', event.email, event.password);
    event.preventDefault();
    dispatch(loginUser({
      user: {
        email: event.email,
        password: event.password,
      },
    })).then(() => {
      dispatch(fetchCurrentUser());
      navigate('/myoffices');
      // setUser(1);
    });
  };

  return (
    <form onSubmit={() => { console.log('test'); handleClick(); }}>
      <label htmlFor="email">
        Email:
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
          type="password"
          name="password"
          // onChange={handleChange}
        />
      </label>
      <br />
      <br />
      <button type="submit">Login</button>
    </form>
  );
}
