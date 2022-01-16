import { createGlobalStyle } from "styled-components";

import { media } from "../lib/config";

const GlobalStyles = createGlobalStyle`
  :root{
    --purple: #AD1FEA;
    --lightPurple: #C75AF6;
    --blue: #4661E6;
    --darkBlue: #373F68;
    --greyBlue: #647196;
    --greyBlueLight1: rgba(58, 67, 116, 0.35);
    --greyBlueLight2: #CFD7FF;
    --lightBlue: #62BCFA;
    --white: #fff;
    --grey: #F2F4FF;
    --lightgrey: #F7F8FD;
    --orange: #F49F85;
    --text: #3a4374;
    --delete: #D73737;

    --success: #A4CFA2;
    --error: #D73737;

    --bs: 0 0.625rem 2.5rem -0.4375rem rgba(55,63,104,0.35);
  }
  
  html {
    box-sizing: border-box;
    font-size: 100%; // 16px
  }

  *, *::before, *::after {
    box-sizing: inherit;
    
    padding: 0;
    margin: 0;
  } 

  body {
    overflow: ${({ menuIsOpen }) => (menuIsOpen ? "hidden" : "visible")};
    background: var(--lightgrey);
    color: var(--text);
    font-family: "Jost", --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    overflow-x: hidden;

    position: relative;
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

  .body-1 {
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 0;
  }

  .body-2 {
    font-size: 0.9375rem;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 1.5;
  }

  .body-3 {
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
}

    &.btn {
      border-radius: 0.625rem;
      padding: 0.65625em 1em;

      ${media.tablet} {
        padding: .75em 1.5em;
      }

      &.btn--size {
        display: flex;
        justify-content: center;

        width: 100%;

        ${media.tablet} {
          width: auto;
        }
      }

      /* &.full {
          display: flex;
          justify-content: center;

          width: 100%;
        } */
      
      &.purple {
        color: var(--white);
        background: var(--purple);

        &:hover {
          background: var(--lightPurple); 
        }
      }

      &.blue {
        color: var(--white);
        background: var(--blue);

        &:hover {
          opacity: .75;
        }
      }

      &.cancel {
        background: var(--darkBlue);
        color: var(--white);

        &:hover {
          opacity: .75;
        }
      }

      &.delete {
        background: var(--delete);
        color: var(--white);

        &:hover {
          opacity: .75;
        }
      }
    }
  
  }

  textarea {
    font-family: "Jost", --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

export default GlobalStyles;
