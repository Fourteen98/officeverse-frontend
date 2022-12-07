import { getCookie } from 'react-use-cookie';
import { fetchCurrentUser } from '../redux/user/userSlice';

const loggedUser = () => {
  const token = getCookie('token');
  if (token) {
    fetchCurrentUser();
    return true;
  }
  return false;
};

export default loggedUser;
