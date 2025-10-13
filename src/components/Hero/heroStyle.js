import styled from 'styled-components';
import { motion } from 'framer-motion';

import {
  SPACING,
  FlexContainer,
  GRAY_SHADES,
  SLATE_SHADES,
  SLATE_UTILS,
} from '../../utilities/globalStyles';

export const HeroSection = styled(FlexContainer)`
  flex-direction: column;
  align-items: center;
  // height: calc(100vh - 68px);
  height: 95vh;
  justify-content: center;
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
  position: relative;
  z-index: 10; /* Elevate text and button above animated text */

  & > h2 {
    font-size: 60px;
    color: ${GRAY_SHADES[50]};
    font-weight: 300;
  }

  & > h4 {
    font-size: 30px;
    color: ${GRAY_SHADES[50]};
    font-weight: 300;
  }

  & > p {
    font-size: 20px;
    color: ${GRAY_SHADES[50]};
  }

  @media (max-width: 1024px) {
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
  border: 2px dashed ${SLATE_SHADES[500]};
  overflow: hidden;
  position: static;
  margin: ${SPACING[5]} auto;

  & > img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    padding: ${SPACING[5]};
    border: 2px dashed ${SLATE_SHADES[500]};
    object-fit: cover;
  }

  @media (max-width: 1024px) {
    position: static;
    padding: ${SPACING[4.5]};
    max-width: 600px;
    max-height: 600px;
    border: 2px dashed ${SLATE_SHADES[500]};
    margin: ${SPACING[6]} auto ${SPACING[5]};

    & > img {
      max-width: 100%;
      max-height: 100%;
      padding: ${SPACING[4.5]};
      object-fit: cover;
      border: 2px dashed ${SLATE_SHADES[500]};
    }
  }

  @media (max-width: 480px) {
    position: static;
    margin: 0 auto;
    padding: ${SPACING[4]};
    max-width: 300px;
    max-height: 300px;
    border: 2px dashed ${SLATE_SHADES[500]};

    & > img {
      padding: 26px;
    }
  }
`;

export const SlidingTextContainer = styled(motion.div)`
  position: absolute;
  // padding-bottom: ${SPACING[2]};
  font-size: 10em;
  bottom: -80px;
  white-space: nowrap;
  color: ${SLATE_UTILS.overlay};
  width: 50%;
  font-weight: bold;
  z-index: 1; /* Lower animated text below interactive elements */
  pointer-events: none; /* Make text transparent for clicks */

  @media (max-width: 1024px) {
    display: none;
  }
`;
