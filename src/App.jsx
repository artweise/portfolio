import Navbar from './components/Navbar/Navbar';
import HamburgerButton from './components/HamburgerButton/HamburgerButton';
import Menu from './components/Menu/Menu';
import { useState } from 'react';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Navbar />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <HamburgerButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
};

export default App;
