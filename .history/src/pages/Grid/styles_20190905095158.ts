import styled from "styled-components";
import { COLORS } from "styles/variables";

export const Content = styled.div`
  padding: 50px;
`;
export const ImagesWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ImageWrap = styled.div`
  padding: 20px;
  margin: 20px;
  background-color: ${COLORS.pinkLite};
`;

export const WithMargin = styled.div`
  margin: 20px 0;
`;

export const UploadWrap = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
