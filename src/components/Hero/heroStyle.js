import styled from 'styled-components';
import { motion } from 'framer-motion';

import { SPACING, FlexContainer } from '../../utilities/globalStyles';

export const HeroSection = styled(FlexContainer)`
  flex-direction: column;
  align-items: center;
  // height: calc(100vh - 68px);
  height: 95vh;
  justify-content: center;
  // padding: ${SPACING[6]} ${SPACING[4]};
  // background-color: #272835;
  font-size: 30px;

  @media (max-width: 1024px) {
    font-size: 20px;
    padding: ${SPACING[4]} ${SPACING[3]} ${SPACING[5]};
  }
`;

export const MainContainerHero = styled(FlexContainer)`
  flex-direction: row;
  max-width: 1440px; /* Max width for big screens */
  width: 100%;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  height: 60vh;
  padding: 0 ${SPACING[4]};

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    height: auto;
    padding: 0 ${SPACING[3]};
    // gap: ${SPACING[4]};
  }
`;

export const TextContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: left;
  flex: 1;
  padding: ${SPACING[3]} ${SPACING[5]};
  max-width: 650px;
  max-height: 650px;

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
    font-size: 20px;
    color: #ffffff;
  }

  @media (max-width: 1024px) {
    // position: static;
    // margin: 0 auto;
    padding: ${SPACING[2]};
    max-width: 500px;
    max-height: 500px;
    text-align: center;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;
    padding: ${SPACING[3]};

    & > h2 {
      font-size: 40px;
    }
    & > h4 {
      font-size: 24px;
    }
    & > p {
      font-size: 16px;
    }
  }
`;

export const ImageContainer = styled(motion.div)`
  display: flex;
  flex: 1;
  max-width: 650px;
  max-height: 650px;
  align-items: center;
  justify-content: center;
  padding: ${SPACING[5]};
  border-radius: 50%;
  border: 2px dashed #4b4d68;
  overflow: hidden;
  position: static;
  margin: ${SPACING[5]} auto;

  & > img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    padding: ${SPACING[5]};
    border: 2px dashed #4b4d68;
    object-fit: cover;
  }

  @media (max-width: 1024px) {
    position: static;
    // margin: 0 auto;
    padding: ${SPACING[4.5]};
    max-width: 600px;
    max-height: 600px;
    border: 2px dashed #4b4d68;
    margin: ${SPACING[6]} auto ${SPACING[5]};

    & > img {
      max-width: 100%;
      max-height: 100%;
      padding: ${SPACING[4.5]};
      object-fit: cover;
      border: 2px dashed #4b4d68;
    }
  }

  @media (max-width: 480px) {
    position: static;
    margin: 0 auto;
    padding: ${SPACING[4]};
    max-width: 300px;
    max-height: 300px;
    border: 2px dashed #4b4d68;

    & > img {
      padding: 26px;
    }
  }
`;

export const SlidingTextContainer = styled(motion.div)`
  position: absolute;
  padding: ${SPACING[4.5]};
  font-size: 11.5em;
  bottom: -120px;
  white-space: nowrap;
  color: #4b4d6825;
  width: 50%;
  font-weight: bold;

  @media (max-width: 1024px) {
    display: none;
  }
`;
