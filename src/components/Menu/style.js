import styled from 'styled-components';
import { motion } from 'framer-motion';
import { SPACING, FlexContainer } from '../../utilities/globalStyles';

export const StyledMenu = styled(motion.div)`
  display: flex;
  // width: ${SPACING[8]};
  // height: 100vh;
  background-color: yellow;
  // position: fixed;
  // top: 0;
  // right: -${SPACING[8]};
  //   z-index: 2;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // transition: all 1s ease;

  // ul {
  //   margin: 0;
  //   padding: 0;
  //   list-style: none;
  //   font-size: 70px;
  // }

  // &&.active {
  //   right: 0;
  // }
`;

export const StyledBg = styled(motion.div)`
  // display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0; /* Cover the entire width of the viewport */
  bottom: 0;
  width: ${SPACING[8]};
  background-color: pink;
  z-index: -1; /* Ensure the background is behind other content */
`;
