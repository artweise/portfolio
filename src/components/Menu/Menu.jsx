import { StyledMenu, StyledBg, StyledSlidingLinkContainer } from './menuStyle';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import Links from './Links/Links';

const menuCircleVariants = {
  opened: {
    clipPath: 'circle(1200px at 75px 75px)',
    transition: {
      type: 'spring',
      stiffness: 20,
    },
  },
  closed: {
    clipPath: 'circle(0px at 75px 75px)',
    transition: {
      delay: 0.2,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
  initial: {
    clipPath: 'circle(0px at 75px 75px)',
  },
};

const sliderVariants = {
  initial: {
    x: 0,
    transition: {
      duration: 0.4,
    },
  },
  hover: {
    // x: '-10%',
    transition: {
      duration: 0.4,
    },
  },
};
const copyrightVariants = {
  rest: { rotate: 0 },
  hover: { rotate: 360, transition: { duration: 0.4 } },
};

const Menu = ({ menuOpen, setMenuOpen }) => {
  // State variable to track hover state
  const [isHovered, setIsHovered] = useState(false);

  return (
    // <StyledMenu className={menuOpen && 'active'}>
    <StyledMenu animate={menuOpen ? 'opened' : 'closed'} initial='initial'>
      <StyledBg variants={menuCircleVariants}>
        <Links />
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
      </StyledBg>
    </StyledMenu>
  );
};

export default Menu;

// в стилях к этому компоненту прописать const StyledMenu = styled(motion.div)`
//  добавить в css к нему display: flex
// прописать анимацию тут
// сменить тут структуру и прописать стили как в том портфолио
//  onClick={() => setMenuOpen(!menuOpen)}
{
  /* <ul>
        <li>
          <a href='#intro'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li>
          <a href='#intro'>Contacts</a>
        </li>
      </ul> */
}

// import Links from './Links/Links';
