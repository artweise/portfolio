import styled from 'styled-components';
import { motion } from 'framer-motion';

import { SPACING, FlexContainer } from '../../utilities/globalStyles';

export const StyledHeroSection = styled(FlexContainer)`
  height: 95vh;
  justify-content: center-between;
  // align-items: start;
  padding: ${SPACING[6]} ${SPACING[4]};
  background-color: #272835;
  font-size: 30px;
`;

export const StyledImageContainer = styled(motion.div)`
display: flex;  
height: 600px;
  position: absolute;
  top: 15%;
  right: 7%;
  padding: ${SPACING[5]};
  border-radius: 50%;
  border: 1px dashed #4b4d68;
  border-width: 2px;
  & > img {
    border-radius: 50%;
    padding: ${SPACING[4.5]};
    border: 1px dashed #4b4d68;
    border-width: 2px;
    
`;

export const StyledSlidingTextContainer = styled(motion.div)`
  position: absolute;
  padding: ${SPACING[4.5]};
  font-size: 10em;
  bottom: -120px;
  white-space: nowrap;
  color: #4b4d6825;
  width: 50%;
  font-weight: bold;
`;

export const StyledTextContainer = styled(motion.div)`
  width: calc(50vw - 68px);
  // width: 50%
  display: flex;
  padding: ${SPACING[5]};
  flex-direction: column;
  // justify-content: center;
  gap: 20px;
  & > h2 {
    font-size: 60px;
    color: #ffffff;
    font-weight: 300;
  }
  & > h4 {
    font-size: 30px;
    color: #ffffff;
    font-weight: 300;
  }
  & > p {
    font-size: 16px;
    color: #ffffff;
    // font-weight: 300;
  }
`;
