import styled from "styled-components";
import { COLORS } from "styles/variables";

export const Content = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const WithMargin = styled.div`
  margin-bottom: 10px;
  width: 100%;
`;

export const PickerWrap = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  background-color: ${COLORS.liteWhite};
  border-radius: 10px;
`;

export const PickerText = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: ${COLORS.darkMain};
  margin-right: 20px;
`;

export const ButtonsWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
