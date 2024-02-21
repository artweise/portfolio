import styled from 'styled-components';
import { SPACING, FlexContainer } from '../../utilities/globalStyles';

export const StyledMenu = styled(FlexContainer)`
  width: ${SPACING[8]};
  height: 100vh;
  background-color: yellow;
  position: fixed;
  top: 0;
  right: -${SPACING[8]};
  //   z-index: 2;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    font-size: 70px;
  }

  &&.active {
    right: 0;
  }
`;
