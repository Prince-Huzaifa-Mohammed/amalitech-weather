import styled from "styled-components";

export const Nav = styled.div`
  margin-top: 2rem;
  width: 100%;
  height: 8rem;
  padding: 1rem 5rem;
  box-shadow: ${({ theme }) => theme.boxShadows.boxShadowMedium};
  background-color: ${({ theme }) => theme.colors.smokeWhite};

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    padding: 0.6rem 2rem;

    height: fit-content;
    padding: 1rem 3rem;
  }
`;
