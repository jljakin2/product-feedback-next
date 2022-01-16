import styled from "styled-components";

import { media } from "../../lib/config";

const FormStyles = styled.form`
  background: var(--white);
  border-radius: 0.625rem;

  margin-top: 3.5rem;
  padding: 2.75rem 1.5rem 1.5rem 1.5rem;

  ${media.tablet} {
    position: relative;

    padding: 3rem 2.625rem 1.5rem 2.625rem;

    & > svg {
      position: absolute;
      top: -1.75rem;
    }
  }

  h2 {
    margin-bottom: 1.5rem;
  }

  fieldset {
    border: none;
  }

  .form-control {
    display: flex;
    flex-direction: column;
    position: relative;

    margin-bottom: 2.5rem;

    & .input-error {
      color: var(--delete);
      bottom: -2.5rem;
    }
  }

  label {
    font-size: 0.8125rem;
    font-weight: 700;
    letter-spacing: -0.18px;

    margin-bottom: 0.5rem;
  }

  small {
    font-size: 0.8125rem;
    color: var(--greyBlue);

    margin-bottom: 1rem;
  }

  .input {
    background: var(--lightgrey);
    border: none;
    border-radius: 0.3125rem;
    cursor: pointer;
    color: var(--text);

    width: 100%;
    padding: 1rem;
  }

  textarea {
    resize: none;
    font-size: inherit;
    font-family: inherit;

    padding: 1.5rem;
  }

  .button-container {
    margin-top: 2.5rem;

    ${media.tablet} {
      display: flex;
      justify-content: flex-end;

      margin: 0;

      & button:nth-child(1) {
        order: 2;
      }

      & button:nth-child(2) {
        order: 1;
      }

      & #delete {
        margin-right: auto;
      }
    }
  }

  button:not(:last-child) {
    margin-bottom: 1rem;

    ${media.tablet} {
      margin-bottom: 0;
      margin-left: 1rem;
    }
  }

  .error {
    border: 1px solid var(--delete);
  }
`;

const CustomDropdownStyles = styled.div`
  position: relative;

  width: 100%;

  .dropdown {
    &-btn {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &-content {
      position: absolute;
      top: 4rem;

      width: 100%;

      z-index: 100;
    }
  }
`;

export default FormStyles;
export { CustomDropdownStyles };
