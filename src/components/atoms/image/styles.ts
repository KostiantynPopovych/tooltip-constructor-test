import styled, { css } from "styled-components";

interface IImgProps {
  isBig?: boolean;
}

export const Img = styled.img`
  width: 200px;
  height: 150px;
  object-fit: cover;
  ${({ isBig }: IImgProps) =>
    isBig &&
    css`
      width: 500px;
      height: 500px;
    `};
`;
