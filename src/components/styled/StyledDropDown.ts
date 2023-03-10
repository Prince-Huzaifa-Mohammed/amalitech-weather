import styled from "styled-components";

export const StyledDropDown = styled.div`
  padding: 2rem;
  border-radius: ${({ theme }) => theme.borderRadius.slightlyRound};
  width: 200px;
  box-shadow: ${({ theme }) => theme.boxShadows.boxShadowLight};

  div {
    display: flex;
    gap: 2rem;
    align-items: center;

    cursor: pointer;
  }
`;
