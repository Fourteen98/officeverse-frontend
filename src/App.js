import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Reserve from './pages/Reserve';
import MyReservations from './pages/MyReservations';
import './index.css';
import OfficeDetails from './pages/OfficeDetails';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/offices/:id" element={<OfficeDetails />} />
        <Route path="/my-reservations" element={<MyReservations />} />
      </Routes>
    </Router>
  );
}

export default App;
