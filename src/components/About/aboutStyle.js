import styled from 'styled-components';
import { GRAY_SHADES, FlexContainer } from '../../utilities/globalStyles';

export const StyledAboutSection = styled(FlexContainer)`
  height: 95vh;
  justify-content: center-between;
  align-items: center;
  background-color: ${GRAY_SHADES[50]};
  font-size: 30px;
`;
