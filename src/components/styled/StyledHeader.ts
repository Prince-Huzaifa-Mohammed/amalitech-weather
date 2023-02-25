import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    gap: 1rem;
  }

  div:first-of-type {
    div {
      border: ${({ theme }) => theme.borders.secondary};
      border-radius: ${({ theme }) => theme.borderRadius.round};
      padding: 0.6rem;
    }
  }

  div:nth-of-type(2) {
    width: 50%;
    /* background-color: white; */

    @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
      order: 1;
      width: 100%;
    }

    form {
      div {
        box-shadow: ${({ theme }) => theme.boxShadows.boxShadowLight};
        border-radius: ${({ theme }) => theme.borderRadius.round};
        padding: 0.5rem 0.5rem 0.5rem 3rem;

        @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
          padding: 0.5rem 0.5rem 0.5rem 1.5rem;
        }

        button {
          margin: 0;
          display: flex;
          align-items: center;

          @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
            padding: 1rem 2rem;
            width: fit-content;
          }

          span:last-of-type {
            @media (max-width: 500px) {
              display: none;
            }
          }
        }
      }
    }
  }

  div:last-of-type {
    display: flex;
    gap: 2rem;
    align-items: center;

    h2 {
      width: 5rem;
      height: 5rem;
      display: grid;
      place-items: center;
      border-radius: ${({ theme }) => theme.borderRadius.superRound};
      background-color: ${({ theme }) => theme.colors.secondary};
      color: ${({ theme }) => theme.colors.white};

      @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
        width: 4rem;
        height: 4rem;
      }
    }

    span {
      cursor: pointer;
    }
  }
`;
