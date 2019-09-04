import React, { FC } from "react";
import { createPortal } from "react-dom";
import Button from "components/atoms/button";
import { Overlay } from "styles/shared";

import { CloseBtn, ContentWrap, Content, BottomBtnWrap } from "./styles";

interface IProps {
  onClose: () => void;
  onBottomBtnClick?: () => void;
  bottomBtnLabel?: string;
}

const modalRoot = document.getElementById("modal-root");

const Modal: FC<IProps> = ({
  children,
  onClose,
  onBottomBtnClick,
  bottomBtnLabel
}) =>
  createPortal(
    <Overlay>
      <ContentWrap>
        <CloseBtn onClick={onClose}>x</CloseBtn>
        <Content>{children}</Content>
        {bottomBtnLabel && (
          <BottomBtnWrap>
            <Button onClick={onBottomBtnClick} label={bottomBtnLabel} />
          </BottomBtnWrap>
        )}
      </ContentWrap>
    </Overlay>,
    modalRoot || document.body
  );

export default Modal;
