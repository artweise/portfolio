import styled from 'styled-components';
import {
  SPACING,
  FlexContainer,
  GRAY_SHADES,
  SLATE_SHADES,
} from '../../utilities/globalStyles';

export const SectionContainer = styled(FlexContainer)`
  height: 100vh;
  justify-content: flex-end;
  flex-direction: column;
  margin-bottom: 6rem;

  @media (max-width: 1024px) {
    margin-bottom: 8rem;
  }

  @media (max-width: 768px) {
    margin-bottom: 9rem;
  }
`;

export const Connections = styled(FlexContainer)`
  justify-content: flex-start;
  flex-direction: column;
  margin-left: 10rem;
  background-color: ${SLATE_SHADES[800]};
  color: ${GRAY_SHADES[50]};
  overflow: hidden;
  padding: ${SPACING[2]} ${SPACING[5]};

  @media (max-width: 1440px) {
    margin-left: 7rem;
  }
  @media (max-width: 1024px) {
    margin-left: 4rem;
  }

  @media (max-width: 768px) {
    margin-left: 1rem;
  }
`;

export const ButtonLineContainer = styled(FlexContainer)`
  align-items: center;
  justify-content: space-between;
  width: 70%;
  margin: 20px auto;
  position: relative;
`;

export const StickyButtonWrapper = styled(FlexContainer)`
  position: relative;
  top: -5.5rem;
  right: 15rem;

  @media (max-width: 1024px) {
    top: -10vw;
    right: 6vw;
  }

  @media (max-width: 768px) {
    top: -10vw;
    right: 6vw;
  }

  @media (max-width: 480px) {
    top: -12vw;
    right: 4vw;
  }
`;

export const HorizontalLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${SLATE_SHADES[600]};
  margin: 20px auto;
  opacity: 0.8;
`;

export const SocialLinksContainer = styled.div`
  display: flex;
  width: 70%;
  margin-left: 13rem;
  justify-content: start;
  gap: 1rem;
  align-items: center;
`;

export const SocialLink = styled.a`
  margin: 8px;
  color: inherit;
  transition: color 0.3s ease;

  img {
    width: auto;
    height: 44px;
  }
`;
