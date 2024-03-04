import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SPACING, FlexContainer } from '../../../utilities/globalStyles';

export const MenuContainer = styled(motion.div)`
  // display: flex;
  // position: absolute;
  // width: 100%;
  // height: 100%;
  // flex-direction: column;
  // align-items: center;
  // justify-content: center;
  // gap: 20px;
`;

export const MenuList = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  list-style: none;
  cursor: pointer;
`;
export const MenuItem = styled.li`
  font-size: 40px;
  color: #fff;
  text-decoration: none;
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
