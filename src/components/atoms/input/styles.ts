import styled from "styled-components";
import { COLORS } from "styles/variables";

export const InputInternal = styled.input`
  font-weight: 600;
  font-size: 18px;
  color: ${COLORS.darkMain};
  background-color: ${COLORS.liteWhite};
  border-radius: 10px;
  border: 2px dashed ${COLORS.darkSecondary};
  padding: 7px 20px;
  width: 100%;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${COLORS.darkSecondary};
  }
  :-ms-input-placeholder {
    color: ${COLORS.darkSecondary};
  }
`;
