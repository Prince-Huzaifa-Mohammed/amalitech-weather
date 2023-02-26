import styled from "styled-components";

interface Props {
  margin?: string;
}

export const Alert = styled.div<Props>`
  padding: 1.2rem 3rem;
  font-size: 1.8rem;

  border-radius: 0.5rem;
  text-align: center;

  margin-top: ${({ margin }) => margin || "1rem"};
  margin-bottom: ${({ margin }) => margin || "rem"};

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    font-size: 1.4rem;
    padding: 0.6rem 1.2rem;
  }
`;

export const InfoAlert = styled(Alert)`
  background: #fad5a5;
  color: #e49b0f;
  border: 1px solid #e49b0f;
`;

export const SuccessAlert = styled(Alert)`
  background: lightgreen;
  color: green;
  border: 1px solid green;
`;
