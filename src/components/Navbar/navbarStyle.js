import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  SPACING,
  FlexContainer,
  GRAY_SHADES,
  SLATE_SHADES,
} from '../../utilities/globalStyles';

export const StyledNavbar = styled(FlexContainer)`
  display: flex;
  height: 68px;
  justify-content: space-between;
  align-items: center;
  padding-inline: ${SPACING[4]};
  background-color: ${SLATE_SHADES[800]};
  color: ${GRAY_SHADES[50]};
  font-weight: 300;
  z-index: 2;
  a {
    text-decoration: none;
    padding: 5px 10px;
    color: ${GRAY_SHADES[50]};
  }
  ul {
    display: flex;
    gap: ${SPACING[3]};
  }
`;

export const StyledSlidingLinkContainer = styled(motion.div)`
  position: relative;
  display: flex;
  white-space: nowrap;
  overflow: hidden;
  cursor: pointer;
  margin-left: 50px;
  a {
    position: relative;
    left: 0;
    top: 0;
    z-index: 0;
  }
`;

export const StyledNavbarLinksContainer = styled(FlexContainer)`
  gap: ${SPACING[3]};
`;
