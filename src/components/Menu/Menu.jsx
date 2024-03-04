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
