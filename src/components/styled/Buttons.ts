import styled from "styled-components";

interface Props {
  // backgroundColor: string,
  //   color?: string;
  padding?: string;
  margin?: string;
  width?: string;
}

export const Button = styled.button<Props>`
  padding: ${({ padding }) => padding || "1.4rem 3rem"};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.round};
  margin-top: ${({ margin }) => margin || "1rem"};
  margin-bottom: ${({ margin }) => margin || "1rem"};
  width: ${({ width }) => width};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const PrimaryButton = styled(Button)<Props>`
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const SecondaryButton = styled(Button)<Props>`
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const OutlinedPrimaryButton = styled(Button)<Props>`
  background-color: ${({ theme }) => theme.colors.white};
  border: ${({ theme }) => theme.borders.primary};
  color: ${({ theme }) => theme.colors.primary};
`;

export const OutlinedSecondaryButton = styled(Button)<Props>`
  background-color: ${({ theme }) => theme.colors.white};
  border: ${({ theme }) => theme.borders.secondary};
  color: ${({ theme }) => theme.colors.secondary};
`;

export const LinkButton = styled.a``;
