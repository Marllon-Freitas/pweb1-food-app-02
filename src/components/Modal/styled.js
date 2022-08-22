import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 100000;
`;

export const ModalWrapper = styled.div`
  width: 800px;
  padding: 1rem;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  position: relative;
  z-index: 10;
  border-radius: 0.7rem;

  & img {
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
  }

  @media (max-width: 800px) {
    width: 80%;
  }

  @media (max-width: 300px) {
    width: 100%;
  }
`;
