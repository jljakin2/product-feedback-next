// third-party
import Link from "next/link";
import PropTypes from "prop-types";

// components
import Plus from "../Icons/Plus";
export default function AddFeedbackBtn({ full, submit }) {
  return submit ? (
    <button type="submit" className="btn purple btn--size">
      <Plus />
      Add Feedback
    </button>
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
};

AddFeedbackBtn.prototypes = {
  full: PropTypes.bool, // does the button need to span across its entire parent?
  submit: PropTypes.bool, // is the button being used to actually submit a form or to send the user to the form?
};
