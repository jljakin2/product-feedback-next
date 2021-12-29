import styled from "styled-components";

const InputErrorStyles = styled.small`
  position: absolute;
`;

export default function InputError({ children }) {
  return (
    <InputErrorStyles className="input-error">{children}</InputErrorStyles>
  );
}
