import styled, { keyframes } from 'styled-components';
import { TEAL_SHADES, GRAY_SHADES } from '../../utilities/globalStyles';

// Gradient animation
const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export const RoundButton = styled.button`
  position: absolute;
  width: 11rem;
  height: 11rem;
  background: linear-gradient(45deg, ${TEAL_SHADES[700]}, ${GRAY_SHADES[50]});
  background-size: 200% 200%;
  color: ${TEAL_SHADES[1000]};
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1em;

  &:hover {
    animation: ${gradientAnimation} 3s ease infinite;
  }

  /* Apply offset */
  transform: ${({ offsetX, offsetY }) =>
    `translate(${offsetX}px, ${offsetY}px)`};

  @media (max-width: 1024px) {
    width: 9rem;
    height: 9rem;
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    width: 7rem;
    height: 7rem;
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    width: 5rem;
    height: 5rem;
    font-size: 0.7rem;
  }
`;

export const ButtonText = styled.span`
  position: relative;

  /* Text shift for volume effect */
  transform: ${({ offsetX, offsetY }) =>
    `translate(${offsetX * 0.5}px, ${offsetY * 0.5}px)`};
`;
