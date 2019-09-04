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
  padding: 50px;
  background-color: ${COLORS.liteWhite};
  border-radius: 20px;
  transform: scale(0.6);
  ${({ withMobileScale }: IContentWrap) =>
    withMobileScale &&
    css`
      @media ${DEVICE.tablet} {
        transform: scale(1);
      }
    `}
`;

export const Content = styled.div``;
