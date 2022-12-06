/* eslint-disable */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Office from './pages/Office';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Reserve from './pages/Reserve';
import MyReservations from './pages/MyReservations';
import './index.css';
import OfficeDetails from './pages/OfficeDetails';
import NewOffice from './pages/NewOffice';
import MyOffices from './pages/MyOffices';
import Notification from './components/Notification';

function App() {
  const notification = useSelector((state) => state.notification.notification);
  return (
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
  );
}

export default App;
