import React, { FC } from "react";
import { createPortal } from "react-dom";
import { Overlay } from "styles/shared";

import { CloseBtn, ContentWrap, Content } from "./styles";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

const modalRoot = document.getElementById("modal-root");

const Modal: FC<IProps> = ({ children, isOpen, onClose }) =>
  isOpen
    ? createPortal(
        <Overlay>
          <ContentWrap>
            <CloseBtn onClick={onClose}>x</CloseBtn>
            <Content>{children}</Content>
          </ContentWrap>
        </Overlay>,
        modalRoot || document.body
      )
    : null;

export default Modal;
