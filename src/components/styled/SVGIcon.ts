import styled from "styled-components";

interface Props {
  width: string;
}

export const SVGIcon = styled.img<Props>`
  width: ${({ width }) => width};
`;
