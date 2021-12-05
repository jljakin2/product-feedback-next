import PropTypes from "prop-types";
import Plus from "../Icons/Plus";

export default function AddFeedbackBtn({ full }) {
  return (
    <button className={`btn purple ${full && "full"}`}>
      <Plus />
      Add Feedback
    </button>
  );
}

AddFeedbackBtn.defaultProps = {
  full: false,
};

AddFeedbackBtn.prototypes = {
  full: PropTypes.bool,
};
