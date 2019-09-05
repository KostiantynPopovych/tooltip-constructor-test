import React, { FC } from "react";
import { createPortal } from "react-dom";
import { Overlay } from "styles/shared";

import { ContentWrap } from "./styles";

interface IProps {
  withMobileScale?: boolean;
  withSmallMobileScale?: boolean;
}
const modalRoot = document.getElementById("modal-root");

const Modal: FC<IProps> = ({
  children,
  withMobileScale,
  withSmallMobileScale
}) =>
  createPortal(
    <Overlay>
      <ContentWrap
        withSmallMobileScale={withSmallMobileScale}
        withMobileScale={withMobileScale}
      >
        {children}
      </ContentWrap>
    </Overlay>,
    modalRoot || document.body
  );

export default Modal;
