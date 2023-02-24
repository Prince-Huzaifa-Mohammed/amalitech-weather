import styled from "styled-components";

interface Props {
  textAlign?: string;
  fontWeight?: string;
  fontSize?: string;
}

export const PrimaryHeading = styled.h1<Props>`
  text-align: ${({ textAlign }) => textAlign};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
`;

export const SecondaryHeading = styled.h2<Props>`
  text-align: ${({ textAlign }) => textAlign};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
`;

export const TertiaryHeading = styled.h3<Props>`
  text-align: ${({ textAlign }) => textAlign};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
`;

export const Text = styled.p<Props>`
  text-align: ${({ textAlign }) => textAlign};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
`;
