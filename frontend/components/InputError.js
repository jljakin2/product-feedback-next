// third-party
import styled from "styled-components";
import PropTypes from "prop-types";

// ===== STYLING =====
const InputErrorStyles = styled.small`
  position: absolute;
`;
// ===== END OF STYLING =====

export default function InputError({ children }) {
  return (
    <InputErrorStyles className="input-error">{children}</InputErrorStyles>
  );
}

InputError.propTypes = {
  children: PropTypes.any,
};
