import styled from "styled-components";

interface Props {
  direction?: string;
  alignItems?: string;
  justifyContent?: string;
  padding?: string;
  margin?: string;
  gap?: string;
}

export const Flex = styled.div<Props>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ direction }) => direction || "row"};
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
  align-items: ${({ alignItems }) => alignItems || "center"};
  /* padding: ${({ padding }) => padding || "1rem"}; */

  margin-top: ${({ margin }) => margin || "1rem"};
  margin-bottom: ${({ margin }) => margin || "rem"};
  gap: ${({ gap }) => gap || "2rem"};
`;
