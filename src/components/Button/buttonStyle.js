import styled from 'styled-components';
import { TEAL_SHADES, GRAY_SHADES } from '../../utilities/globalStyles';

export const StyledButton = styled.div`
  /* Base styles */
  display: inline-block;
  width: fit-content;
  padding: 12px 24px;
  background-color: ${({ variant }) =>
    variant === 'outline' ? 'transparent' : TEAL_SHADES[300]};
  color: ${({ variant }) =>
    variant === 'outline' ? TEAL_SHADES[300] : GRAY_SHADES[50]};
  border: ${({ variant }) =>
    variant === 'outline' ? `2px solid ${TEAL_SHADES[300]}` : 'none'};
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  transition: all 0.2s ease;
  outline: none;
  user-select: none;
  white-space: nowrap;

  /* Hover state */
  &:hover {
    background-color: ${({ variant }) =>
      variant === 'outline' ? TEAL_SHADES[300] : TEAL_SHADES[400]};
    color: ${GRAY_SHADES[50]};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(85, 161, 167, 0.25);
  }

  /* Active state */
  &:active {
    transform: translateY(0);
  }

  /* Disabled state */
  &:disabled {
    background-color: ${GRAY_SHADES[400]};
    color: ${GRAY_SHADES[700]};
    cursor: not-allowed;
    transform: none;
    box-shadow: none;

    &:hover {
      background-color: ${GRAY_SHADES[400]};
      color: ${GRAY_SHADES[700]};
      transform: none;
      box-shadow: none;
    }
  }

  /* Responsive */
  @media (max-width: 768px) {
    padding: 10px 24px;
    font-size: 14px;
  }
`;
