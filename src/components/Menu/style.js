import styled from 'styled-components';
import { motion } from 'framer-motion';
import { SPACING, FlexContainer } from '../../utilities/globalStyles';

export const StyledMenu = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // width: ${SPACING[7.5]};
  // height: 100vh;
  // position: fixed;
  // top: 0;
  // right: -${SPACING[7.5]};
  // transition: all 1s ease;

  // &&.active {
  //   right: 0;
  // }
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
