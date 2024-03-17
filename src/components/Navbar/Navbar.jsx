import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  StyledNavbar,
  StyledSlidingLinkContainer,
  StyledNavbarLinksContainer,
} from './navbarStyle';

const sliderVariants = {
  initial: {
    x: 0,
    transition: {
      duration: 0.4,
    },
  },
  hover: {
    x: '-10%',
    transition: {
      duration: 0.4,
    },
  },
};
const copyrightVariants = {
  rest: { rotate: 0 },
  hover: { rotate: 360, transition: { duration: 0.4 } },
};

const Navbar = () => {
  // State variable to track hover state
  const [isHovered, setIsHovered] = useState(false);

  return (
    <StyledNavbar>
      <StyledSlidingLinkContainer
        variants={sliderVariants}
        initial='initial'
        whileHover='hover'
        onHoverStart={() => setIsHovered(true)} // Set isHovered to true on hover start
        onHoverEnd={() => setIsHovered(false)} // Set isHovered to false on hover end
      >
        <motion.span variants={copyrightVariants}>&copy;</motion.span>
        <motion.div>
          <NavLink to='/' style={{ color: '#ffffff', textDecoration: 'none' }}>
            {isHovered ? 'Olga Lysko' : 'Code by Olga'}
          </NavLink>
        </motion.div>
      </StyledSlidingLinkContainer>
      <StyledNavbarLinksContainer>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/projects'>Projects</NavLink>
        <NavLink to='/contacts'>Contacts</NavLink>
      </StyledNavbarLinksContainer>
    </StyledNavbar>
  );
};

export default Navbar;

// foo, bar, baz
