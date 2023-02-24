import styled from "styled-components";

interface Props {
  height: string;
  color: string;
}

export const ColoredContainer = styled.div<Props>`
  height: ${({ height }) => height};
  background-color: ${({ color }) => color};
`;
