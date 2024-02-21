import { useEffect, useRef } from 'react';
import { StyledHamburgerButton } from './style';

const HamburgerButton = ({ menuOpen, setMenuOpen }) => {
  const ref = useRef(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY < 200) {
        ref.current.style.transform = 'scale(0)';
      } else {
        ref.current.style.transform = 'scale(1)';
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <StyledHamburgerButton
      className={menuOpen && 'active'}
      ref={ref}
      onClick={() => setMenuOpen(!menuOpen)}
    >
      <span className='line1'></span>
      <span className='line2'></span>
      <span className='line3'></span>
    </StyledHamburgerButton>
  );
};

export default HamburgerButton;
