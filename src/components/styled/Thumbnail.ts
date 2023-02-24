import styled from "styled-components";

interface Props {
  src: string;
  width: string;
  margin?: string;
}

export const Thumbnail = styled.img<Props>`
  /* background-image: url("./assets/Weather-notification.svg"); */
  width: ${({ width }) => width};
  margin-top: ${({ margin }) => margin || "1rem"};
  margin-bottom: ${({ margin }) => margin || "1rem"};
  /* margin: 0 auto; */
`;
