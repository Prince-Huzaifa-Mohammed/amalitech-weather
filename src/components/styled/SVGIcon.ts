import styled from "styled-components";

interface Props {
  width: string;
}

export const SVGIcon = styled.img<Props>`
  width: ${({ width }) => width};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }

  &:active {
    transform: scale(1);
  }
`;
