import styled from "styled-components";
import PropTypes from "prop-types";
import { TailSpin } from "react-loader-spinner";

const ButtonStyles = styled.button`
  display: flex;
  align-items: center;

  svg {
    margin-left: 0.5rem;
  }
`;

export default function DeleteBtn({ loading }) {
  return (
    <ButtonStyles className="btn btn--size delete">
      Delete
      {loading && <TailSpin color="#FFF" height={16} width={16} />}
    </ButtonStyles>
  );
}

DeleteBtn.defaultProps = {
  loading: false,
};

DeleteBtn.propTypes = {
  loading: PropTypes.bool,
};
