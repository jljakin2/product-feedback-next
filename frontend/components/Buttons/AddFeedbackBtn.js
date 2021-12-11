import Link from "next/link";
import PropTypes from "prop-types";
import Plus from "../Icons/Plus";

// use submit prop to use the AddFeedbackBtn as a form submit button.
// otherwise defaults to Link version of btn that takes user to form page
export default function AddFeedbackBtn({ full, submit }) {
  return submit ? (
    <button type="submit" className={`btn purple ${full && "full"}`}>
      <Plus />
      Add Feedback
    </button>
  ) : (
    <Link href="/create" passHref>
      <button className={`btn purple ${full && "full"}`}>
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
  full: PropTypes.bool,
  submit: PropTypes.bool,
};
