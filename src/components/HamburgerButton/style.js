import styled from 'styled-components';
import { FlexContainer } from '../../utilities/globalStyles';

export const StyledHamburgerButton = styled(FlexContainer)`
  height: 65px;
  width: 65px;
  border-radius: 50%;
  position: fixed;
  background-color: red;
  right: 5%;
  top: 40px;
  transform: scale(0);
  transition: all 0.3s ease-out;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 15px;
  cursor: pointer;
  transition: all 1s ease;

  .line1,
  .line2,
  .line3 {
    height: 3px;
    background-color: white;
    width: 100%;
    transform-origin: center;
    transition: all 1s ease;
  }
  &&.active {
    background-color: yellow;
    span {
      width: 40%;
      position: absolute;
      &:first-child {
          background-color: black;
          transform: rotate(45deg);
      }
      &:nth-child(2) {
          opacity: 0;
      }
      &:last-child {
          background-color: black;
          transform: rotate(-45deg);
      }
  }
`;
