import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Office from './pages/Office';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Reserve from './pages/Reserve';
import MyReservations from './pages/MyReservations';
import OfficeDetails from './pages/OfficeDetails';
import NewOffice from './pages/NewOffice';
import MyOffices from './pages/MyOffices';
import Notification from './components/Notification';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Signup from './pages/Signup';
import './index.css';

function App() {
  const notification = useSelector((state) => state.notification.notification);
  const currentUser = useSelector((state) => state.user.user);

  const logged = currentUser
    ? (
      <Router>
        {notification && (<Notification type={notification.type} message={notification.message} />)}
        <NavBar />
        <Routes>
          <Route path="/" element={<Office />} />
          <Route path="/reserve" element={<Reserve />} />
          <Route path="/newoffice" element={<NewOffice />} />
          <Route path="/myoffices" element={<MyOffices />} />
          <Route path="/offices/:id" element={<OfficeDetails />} />
          <Route path="/my-reservations" element={<MyReservations />} />
        </Routes>
        <Footer />
      </Router>
    )
    : (
      <Router>
        {notification && (<Notification type={notification.type} message={notification.message} />)}
        <NavBar />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<Welcome />} />
        </Routes>
        <Footer />
      </Router>
    );
  return (
    <div>
      {logged}
    </div>
  );
}

export default App;
