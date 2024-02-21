import styled from 'styled-components';
import { SPACING, FlexContainer } from '../../utilities/globalStyles';

export const StyledNavbar = styled(FlexContainer)`
  height: 68px;
  justify-content: space-between;
  align-items: center;
  padding-inline: ${SPACING[4]};
  background-color: white;
`;

export const StyledLinksContainer = styled(FlexContainer)`
  gap: ${SPACING[3]};
`;
