import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root{
    --purple: #AD1FEA;
    --blue: #4661E6;
    --darkBlue: #373F68;
    --greyBlue: #647196;
    --greyBlueLight: rgba(58, 67, 116, 0.35);
    --lightBlue: #62BCFA;
    --white: #fff;
    --grey: #F2F4FF;
    --lightgrey: #F7F8FD;
    --orange: #F49F85;
    --text: #3a4374;
    --delete: #D73737;

    --bs: 0 0.625rem 2.5rem -0.4375rem rgba(55,63,104,0.35);
  }
  
  html {
    box-sizing: border-box;
    font-size: 100%;
  }

  *, *::before, *::after {
    box-sizing: inherit;
    
    padding: 0;
    margin: 0;
  } 

  body {
    background: var(--lightgrey);
    color: var(--text);
    font-family: "Jost", --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

/* ===== text styles ===== */
  h1 {
    opacity: 0.96;
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: -0.33px;
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 700;
    letter-spacing: -0.25px;
  }

  h3 {
    font-size: 1.125rem;
    font-weight: 700;
    letter-spacing: -0.25px;
  }

  h4 {
    font-size: 0.875rem;
    font-weight: 700;
    letter-spacing: -0.19px;
  }

  p.body-1 {
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 0;
  }

  p.body-2 {
    font-size: 0.9375rem;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 1.5;
  }

  p.body-3 {
    font-size: 0.8125rem;
    font-weight: 600;
    letter-spacing: 0;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
/* ========== */

  button {
    background: transparent;
    border: none;
    font-family: "Jost", --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    
    display: flex;
    align-items: center;

    font-weight: 700;
    font-size: 0.8125rem;
    cursor: pointer;

    &.btn {
      border-radius: 0.625rem;
      padding: 0.65625rem 1rem;

      &.full {
          display: flex;
          justify-content: center;

          width: 100%;
        }
      
      &.purple {
        color: var(--white);
        background: var(--purple);
      }

      &.blue {
        color: var(--white);
        background: var(--blue);
      }

      &.cancel {
        background: var(--darkBlue);
        color: var(--white);
      }

      &.delete {
        background: var(--delete);
        color: var(--white);
      }
    }
  
  }

  textarea {
    font-family: "Jost", --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

export default GlobalStyles;
