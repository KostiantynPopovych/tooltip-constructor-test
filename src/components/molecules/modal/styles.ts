import styled, { css } from "styled-components";
import { COLORS, DEVICE } from "styles/variables";

export const CloseBtn = styled.button`
  position: absolute;
  top: -25px;
  right: -25px;
  color: ${COLORS.liteWhite};
  font-size: 30px;
  font-weight: bold;
`;

interface IContentWrap {
  withMobileScale?: boolean;
}

export const ContentWrap = styled.div`
  position: relative;
  background-color: ${COLORS.liteWhite};
  border-radius: 20px;
  ${({ withMobileScale }: IContentWrap) =>
    withMobileScale &&
    css`
      @media ${DEVICE.mobileL} {
        transform: scale(0.6);
      }
    `}
`;

export const Content = styled.div``;
