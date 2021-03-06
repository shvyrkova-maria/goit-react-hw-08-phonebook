import styled from '@emotion/styled/macro';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(33, 40, 49, 0.95);
  z-index: 1200;
`;

export const ModalContent = styled.div`
  position: relative;
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;

export const Button = styled.div`
  position: absolute;
  top: -3%;
  right: -3%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: white;
  color: black;
  border: 1px solid transparent;
  border-radius: 50%;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: var(--accent-color);
    color: black;
    box-shadow: var(--main-shadow);
  }
`;
