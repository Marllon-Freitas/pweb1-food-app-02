import React from "react";
import { Background, ModalWrapper } from "./styled";

function Modal({ image, modal, setModal, content }) {
  return (
    modal && (
      <Background onClick={() => setModal(false)}>
        <ModalWrapper>
          {image && <img src={image} alt="employee" />}
          {content}
        </ModalWrapper>
      </Background>
    )
  );
}

export default Modal;
