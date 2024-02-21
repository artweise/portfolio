import { StyledMenu } from './style';

const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <StyledMenu className={menuOpen && 'active'} onClick={() => setMenuOpen(!menuOpen)}>
      <ul>
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
      </ul>
    </StyledMenu>
  );
};

export default Menu;
