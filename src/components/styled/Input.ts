import styled from "styled-components";

interface Props {
  margin?: string;
}

export const InputGroup = styled.div<Props>`
  box-shadow: ${({ theme }) => theme.boxShadows.boxShadowLight};
  margin-bottom: 1.5rem;
  border-radius: 5px;
  padding: 1.2rem 2rem;
  width: 100%;
  margin-bottom: ${({ margin }) => margin};

  display: flex;
  gap: 1.5rem;
  align-items: center;

  span {
    width: 1px;
    height: 2rem;
    background-color: ${({ theme }) => theme.colors.text};
    display: block;
  }
`;
