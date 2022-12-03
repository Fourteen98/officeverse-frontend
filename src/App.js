import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Office from './pages/Office';
import NavBar from './components/NavBar';
import Reserve from './pages/Reserve';
import MyReservations from './pages/MyReservations';
import './index.css';
import OfficeDetails from './pages/OfficeDetails';
import NewOffice from './pages/NewOffice';
import MyOffices from './pages/MyOffices';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Office />} />
        <Route path="/reserve" element={<Reserve />} />

        <Route path="/newoffice" element={<NewOffice />} />
        <Route path="/myoffices" element={<MyOffices />} />
        <Route path="/offices/:id" element={<OfficeDetails />} />
        <Route path="/Office/:id" element={<OfficeDetails />} />
        <Route path="/my-reservations" element={<MyReservations />} />
      </Routes>
    </Router>
  );
}

export default App;
