import styled from 'styled-components';
import { motion } from 'framer-motion';

import { SPACING, FlexContainer } from '../../utilities/globalStyles';

export const StyledHeroSection = styled(FlexContainer)`
  height: 95vh;
  // justify-content: center-between;
  // padding: ${SPACING[6]} ${SPACING[4]};
  background-color: #272835;
  font-size: 30px;
  flex-direction: column;
  position: relative; /* Set position to relative */
`;

export const Wrapper = styled(FlexContainer)`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  border: 1px solid red;
  position: relative; /* Set position to relative */
  z-index: 2; /* Ensure it's above StyledSlidingTextContainer */
`;

export const StyledImageContainer = styled(motion.div)`
  display: flex;  
  height: 600px;
  // position: absolute;
  // top: 15%;
  // right: 7%;
  padding: ${SPACING[5]};
  border-radius: 50%;
  border: 1px dashed #4b4d68;
  border-width: 2px;
  position: relative; /* Set position to relative */
  z-index: 1; /* Ensure it's above StyledSlidingTextContainer */
  & > img {
    border-radius: 50%;
    padding: ${SPACING[4.5]};
    border: 1px dashed #4b4d68;
    border-width: 2px;
    `;

export const StyledTextContainer = styled(motion.div)`
  width: calc(50vw - 68px);
  display: flex;
  padding: ${SPACING[5]};
  flex-direction: column;
  gap: 20px;
  color: #ffffff;
  font-weight: 300;
  border: 1px solid red;
  // z-index: 1; /* Ensure text is above background */
  position: relative; /* Set position to relative */
  z-index: 2; /* Ensure it's above StyledSlidingTextContainer */
  & > h2 {
    font-size: 60px;
    font-weight: 300;
  }
  & > h4 {
    font-size: 30px;
    font-weight: 300;
  }
  & > p {
    font-size: 16px;
  }
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
  z-index: 0; /* Ensure it's below Wrapper and StyledTextContainer */
`;
