import { createGlobalStyle } from "styled-components";
import theme from "../../theme/theme";

export type ThemeProps = {
  theme: typeof theme;
};

const GlobalStyles = createGlobalStyle<ThemeProps>`

@import url('https://fonts.googleapis.com/css2?family=Jost:wght@200;300;400;500&family=Lobster&family=Squada+One&display=swap');

  *, *:before, *:after {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
  }

  html {
   font-size: 62.5%;
  }

  body {
   font-family: 'Jost', sans-serif;
   color: ${({ theme }) => theme.colors.text};
   font-size: 1.6rem;

   @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
      font-size: 1.4rem;
   }
  }

  h1 {
   font-size: 3.2rem;
   font-family: 'Jost', sans-serif;
   font-weight: 300;

   @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
      font-size: 2.4rem;
   }
  }

  h2 {
   font-size: 2.4rem;
   font-weight: 300;
   

   @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
      font-size: 2rem;
   }
  }

  h3 {
    font-size: 1.8rem;
    font-weight: 400;

    @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
      font-size: 1.4rem;
    }
  }

  h5 {
   font-family: "Lobster", "Jost", sans-serif;
  }

  p {
   line-height: 1.5;
  }

  img {
   width: 100%;
  }

  a {
    color: inherit;
    font-family: inherit;
    transition: all 0.3s ease;

    &:active {
      transform: scale(0.98);
    }
  }

  span {
    a {
      padding: 1.4rem 3rem;
      border: ${({ theme }) => theme.borders.primary};
      border-radius: ${({ theme }) => theme.borderRadius.round};
      text-transform: uppercase;
      text-decoration: none;
      /* width: 60%; */
      display: inline-block;

      @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
         width: 100%;
         display: block;
         /* padding: 1.4rem 10rem; */
      /* font-size: 1.4rem; */
      }
    }
  }

  input {
    border: none;
    outline: none;
    /* padding: 1rem 2rem; */
    font-size: inherit;
    font-family: inherit;
    width: 100%;
    background-color: transparent;
    
    ::placeholder {
      color: ${({ theme }) => theme.colors.lightText};
    }
  }

  button {
    border: none;
    cursor: pointer;
    font-size: inherit;
    font-family: inherit;
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: all 0.3s ease;
    display: block;
    outline: none;

    &:hover {
      opacity: 0.9;
      transform: scale(0.98);
    }

    &:active {
      outline: none;
      transform: scale(1);
    }

    @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
      letter-spacing: 1.5px;
      /* font-size: 1.4rem; */
    }
  }

  select {
    border: none;
    outline: none;
    background-color: white;
    width: 100%;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    display: block;
    /* padding: 1rem 2rem; */
  }

`;

export default GlobalStyles;
