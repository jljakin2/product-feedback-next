import Link from "next/link";
import PropTypes from "prop-types";
import Plus from "../Icons/Plus";

// using submit prop to eventually use multiple onSubmit functions conditionally
export default function AddFeedbackBtn({ full, submit }) {
  return (
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
};
