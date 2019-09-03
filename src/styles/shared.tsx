import styled from "styled-components";

export const Shadow = styled.div`
  background-color: transparent;
  box-shadow: 3px 8px 25px rgba(68, 56, 118, 0.2);
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;
