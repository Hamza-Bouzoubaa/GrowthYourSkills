import './App.css';
import Navbar from './Composant/NavBar';

import { Routes, Route } from 'react-router-dom';
import BookingPage from './Pages/BookingPage';
import Home from './Pages/Home';
import Cours_page from './Pages/Cours_page';
import Prof_page from './Pages/Prof_page';
import HowItWorks_page from './Pages/HowItWorks_page';

function App() {
  return (
    <div>
      


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/GrowthYourSkills" element={<Home />} />
        <Route path="/GrowthYourSkills/Booking" element={<BookingPage />} />
        <Route path="/GrowthYourSkills/Cours" element={<Cours_page />} />
        <Route path="/GrowthYourSkills/Prof" element={<Prof_page />} />
        <Route path="/GrowthYourSkills/HowItWorks" element={<HowItWorks_page />} />
      </Routes>
    </div>
  );
}

export default App;