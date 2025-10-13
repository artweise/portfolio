import { StyledMenu, StyledBg } from './style';
import Links from './Links/Links';

const variants = {
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
const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    // <StyledMenu className={menuOpen && 'active'}>
    <StyledMenu animate={menuOpen ? 'opened' : 'closed'} initial='initial'>
      <StyledBg variants={variants}>
        <Links />
      </StyledBg>
    </StyledMenu>
  );
};

export default Menu;

// TODO: Add styled component const StyledMenu = styled(motion.div)`
// TODO: Add display: flex to CSS
// TODO: Add animation here
// TODO: Change structure and add styles like in portfolio
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
