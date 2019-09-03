import styled from "styled-components";
import { COLORS } from "styles/variables";

export const InputInternal = styled.input`
  font-weight: 600;
  font-size: 18px;
  color: ${COLORS.darkMain};
  background-color: ${COLORS.orangeLite};
  border-radius: 10px;
  padding: 7px 20px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${COLORS.darkSecondary};
  }
  :-ms-input-placeholder {
    color: ${COLORS.darkSecondary};
  }
`;
