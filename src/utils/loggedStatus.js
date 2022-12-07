import { fetchCurrentUser } from '../redux/user/userSlice';

const loggedUser = () => {
  const token = localStorage.getItem('token');
  if (token) {
    fetchCurrentUser();
    return true;
  }
  return false;
};

export default loggedUser;
