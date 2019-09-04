import styled, { css } from "styled-components";
import { COLORS } from "styles/variables";

interface IWrap {
  backgroundColor?: string;
}

export const Wrap = styled.div`
  word-break: break-all;
  max-height: 490px;
  max-width: 180px;
  border-radius: 20px;
  padding: 15px;
  ::before {
    border-color: transparent;
    border-style: solid;
    border-width: 10px;
    content: " ";
    display: block;
    height: 0;
    left: 50%;
    margin-left: -10px;
    position: absolute;
    bottom: -10px;
    width: 0;
  }
  ${({ backgroundColor }: IWrap) =>
    backgroundColor &&
    css`
      background-color: ${backgroundColor};
      ::before {
        border-top-color: ${backgroundColor};
      }
    `}
`;

export const Text = styled.p`
  max-height: 470px;
  overflow: scroll;
  color: ${COLORS.darkMain};
  font-size: 16px;
  font-weight: 600;
`;
