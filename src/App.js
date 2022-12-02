/* eslint-disable */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Office from './pages/Office';
import NavBar from './components/NavBar';
import Reserve from './pages/Reserve';
import MyReservations from './pages/MyReservations';
import './index.css';
import OfficeDetails from './pages/OfficeDetails';
import Notification from './components/Notification';

function App() {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.notification); 

  return (
    <Router>
      {notification && (<Notification type={notification.type} message={notification.message} />)}
      <NavBar />
      <Routes>
        <Route path="/" element={<Office />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/Office/:id" element={<OfficeDetails />} />
        <Route path="/my-reservations" element={<MyReservations />} />
      </Routes>
    </Router>
  );
}

export default App;
