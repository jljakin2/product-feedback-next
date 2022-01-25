// third-party
import Link from "next/link";
import PropTypes from "prop-types";
import { TailSpin } from "react-loader-spinner";
import styled from "styled-components";

// components
import Plus from "../Icons/Plus";

const ButtonStyles = styled.button`
  svg:not(:first-child) {
    margin-left: 0.5rem;
  }
`;
export default function AddFeedbackBtn({
  full,
  submit,
  addLoading,
  updateLoading,
}) {
  return submit ? (
    <ButtonStyles
      type="submit"
      className="btn purple btn--size"
      disabled={addLoading || updateLoading}>
      <Plus />
      Add Feedback
      {addLoading || updateLoading ? (
        <TailSpin color="#fff" height={16} width={16} />
      ) : (
        ""
      )}
    </ButtonStyles>
  ) : (
    <Link href="/create" passHref>
      <button className="btn purple">
        <Plus />
        Add Feedback
      </button>
    </Link>
  );
}

AddFeedbackBtn.defaultProps = {
  full: false,
  submit: false,
  addLoading: false,
  updateLoading: false,
};

AddFeedbackBtn.propTypes = {
  full: PropTypes.bool, // does the button need to span across its entire parent?
  submit: PropTypes.bool, // is the button being used to actually submit a form or to send the user to the form?
  addLoading: PropTypes.bool, // if the button is being used to add a suggestion, this indicates if it is loading
  updateLoading: PropTypes.bool, // if the button is being used to update a suggestion, this indicates if it is loading
};
