import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SPACING, FlexContainer } from '../../../utilities/globalStyles';

export const MenuContainer = styled(motion.div)`
  display: flex;
  // position: absolute;
  // width: 100%;
  // height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // gap: 20px;
`;

export const MenuList = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  list-style: none;
  position: fixed;
  height: 100vh;
  top: 35vh;
  left: 0;
  right: 0; /* Cover the entire width of the viewport */
  width: ${SPACING[7.5]};
`;

export const MenuItem = styled.li`
  font-size: 40px;
  color: #fff;
  text-decoration: none;
  &: hover {
    list-style: disc;
  }
`;

export const MenuLinks = styled(Link)`
  color: #fff;
  font-size: 40px;
  cursor: pointer;
`;

// export const StyledLink = styled(Link)`
//   color: #bf4f74;
//   font-size: 40px;
//   cursor: pointer;
// `;
