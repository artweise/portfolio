import styled from 'styled-components';
import { SPACING, FlexContainer } from '../../utilities/globalStyles';

export const StyledNavbar = styled(FlexContainer)`
  height: 68px;
  justify-content: space-between;
  align-items: center;
  padding-inline: ${SPACING[4]};
  background-color: #272835;
  color: white;
  z-index: 2;
  a {
    text-decoration: none;
    padding: 5px 10px;
    color: #ffffff;
  }
  ul {
    display: flex;
    gap: ${SPACING[3]};
  }
`;
