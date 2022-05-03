import styled, { css } from 'styled-components';

const clickable = css`
  &:hover {
    transform: scale(1.05);
    transition: transform 0.2s ease-in-out;
  }
  &:active {
    transform: scale(0.97);
    transition: transform 0.05s ease-in-out;
  }
  transition: transform 0.1s ease-in-out;
  cursor: pointer;
`;

const CloseView = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
  z-index: 900;
  ${clickable};
`;

export { CloseView, clickable };
