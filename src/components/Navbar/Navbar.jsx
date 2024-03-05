import { NavLink } from 'react-router-dom';
import { StyledNavbar, StyledLinksContainer } from './style';

const Navbar = () => {
  return (
    <StyledNavbar>
      <NavLink to='/'>Olga Lysko</NavLink>
      <StyledLinksContainer>
        <ul>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/projects'>Projects</NavLink>
          <NavLink to='/contacts'>Contacts</NavLink>
        </ul>
      </StyledLinksContainer>
    </StyledNavbar>
  );
};

export default Navbar;

// foo, bar, baz
