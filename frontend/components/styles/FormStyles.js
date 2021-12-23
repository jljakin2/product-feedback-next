import styled from "styled-components";

const FormStyles = styled.form`
  background: var(--white);
  border-radius: 0.625rem;

  margin-top: 3.5rem;
  padding: 2.75rem 1.5rem 1.5rem 1.5rem;

  h2 {
    margin-bottom: 1.5rem;
  }

  fieldset {
    border: none;
  }

  .form-control {
    display: flex;
    flex-direction: column;

    margin-bottom: 1.5rem;
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
    border-radius: 5px;
    cursor: pointer;
    color: var(--text);

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
  }

  button:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const CustomDropdownStyles = styled.div`
  position: relative;

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
