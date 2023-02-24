import styled from "styled-components";

interface Props {
  height: string;
  backgroundColor: string;
}

interface ContainerProps {
  width?: string;
}

export const ColoredContainer = styled.div<Props>`
  height: ${({ height }) => height};
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 2rem;
`;

export const Container = styled.div<ContainerProps>`
  width: ${({ width }) => width || "1000px"};
  max-width: 100%;
  padding: 0 2rem;
  margin: 0 auto;
`;

export const PositionedBox = styled.div<ContainerProps>`
  width: ${({ width }) => width || "1000px"};
  max-width: 100%;
  padding: 2rem 3rem;
  background-color: ${({ theme }) => theme.colors.white};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: ${({ theme }) => theme.borderRadius.slightlyRound};
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem; */

  @media (max-width: 1110px) {
    width: 90%;
  }
`;
