import styled from "styled-components";

interface Props {
  textAlign?: string;
  fontWeight?: string;
  fontSize?: string;
  margin?: string;
}

export const PrimaryHeading = styled.h1<Props>`
  text-align: ${({ textAlign }) => textAlign};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  margin-top: ${({ margin }) => margin || "1rem"};
  margin-bottom: ${({ margin }) => margin || "1rem"};
`;

export const SecondaryHeading = styled.h2<Props>`
  text-align: ${({ textAlign }) => textAlign};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  margin-top: ${({ margin }) => margin || "1rem"};
  margin-bottom: ${({ margin }) => margin || "1rem"};
`;

export const TertiaryHeading = styled.h3<Props>`
  text-align: ${({ textAlign }) => textAlign};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  margin-top: ${({ margin }) => margin || "1rem"};
  margin-bottom: ${({ margin }) => margin || "1rem"};
`;

export const Text = styled.p<Props>`
  text-align: ${({ textAlign }) => textAlign};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  margin-top: ${({ margin }) => margin || "1rem"};
  margin-bottom: ${({ margin }) => margin || "1rem"};
`;
