// third-party
import Link from "next/link";
import PropTypes from "prop-types";

export default function EditFeedbackBtn({ id }) {
  return (
    <Link href={`/edit/${id}`} passHref>
      <button className="btn blue">Edit Feedback</button>
    </Link>
  );
}

EditFeedbackBtn.propTypes = {
  id: PropTypes.string,
};
