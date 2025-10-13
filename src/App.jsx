import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HamburgerButton from './components/HamburgerButton/HamburgerButton';
import Menu from './components/Menu/Menu';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import ContactPage from './pages/ContactPage/ContactPage';
import HomePage from './pages/HomePage';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Navbar />
      <HamburgerButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
    </>
  );
};

export default App;
