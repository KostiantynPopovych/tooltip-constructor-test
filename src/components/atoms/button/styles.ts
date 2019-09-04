import styled, { css } from "styled-components";
import { COLORS } from "styles/variables";

interface IButtonProps {
  withBackground: boolean;
}

export const ButtonInternal = styled.button`
  display: flex;
  justify-content: center;
  ${({ withBackground }: IButtonProps) =>
    withBackground &&
    css`
      padding: 10px 20px;
      border-radius: 10px;
      background-color: ${COLORS.orange};
      &:hover {
        background-color: ${COLORS.orangeLite};
      }
    `};
`;

export const Label = styled.span`
  font-weight: 600;
  font-size: 16px;
`;
