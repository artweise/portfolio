import styled from 'styled-components';
import { motion } from 'framer-motion';
import { SPACING, FlexContainer } from '../../../utilities/globalStyles';

export const StyledMenuLinks = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  border: 1px solid coral;
  a {
    font-size: 40px;
  }
`;
