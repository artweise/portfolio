import styled from 'styled-components';
import { motion } from 'framer-motion';
import { SPACING, FlexContainer } from '../../utilities/globalStyles';

export const StyledMenu = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Set the menu height to fill the viewport */
`;

export const StyledBg = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0; /* Cover the entire width of the viewport */
  bottom: 0;
  width: ${SPACING[7.5]};
  background-color: pink;
  z-index: 2; /* Ensure the background is behind other content */
`;

export const StyledSlidingLinkContainer = styled(motion.div)`
  position: absolute; /* Position the container relative to the menu */
  bottom: ${SPACING[3]}; /* Adjust the bottom spacing as needed */
  display: flex;
  gap: 5px;
  flex-direction: row; /* Display the links vertically */
  white-space: nowrap;
  overflow: hidden;
  cursor: pointer;
  color: #fff;
  padding-left: ${SPACING[6]};
  a {
    position: relative;
    left: 0;
    bottom: 0;
    z-index: 2;
  }
`;
