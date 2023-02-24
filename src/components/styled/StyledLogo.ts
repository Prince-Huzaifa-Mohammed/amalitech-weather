import styled from "styled-components";

export const StyledLogo = styled.div`
  position: relative;
  width: 30rem;
  background-color: ${({ theme }) => theme.colors.white};
  margin: 0 auto;
  box-shadow: ${({ theme }) => theme.boxShadows.boxShadowLight};
  padding: 0 0 2rem 0;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    width: 20rem;
  }

  span {
    font-family: "Lobster", "Jost", sans-serif;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 2.2rem;

    position: absolute;
    top: 50%;
    right: 10%;

    @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
      font-size: 1.8rem;
    }
  }
`;
