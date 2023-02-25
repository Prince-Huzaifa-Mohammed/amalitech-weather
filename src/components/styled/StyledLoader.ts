import styled from "styled-components";

export const StyledLoader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;

  background-color: rgba(0, 0, 0, 0.75);

  display: grid;
  place-items: center;
`;
