// third-party
import { useRouter } from "next/router";
import PropTypes from "prop-types";

export default function CancelBtn({ full }) {
  const router = useRouter();

  return (
    <button
      className={full ? "btn full cancel" : "btn cancel"}
      type="button"
      onClick={() => router.back()}>
      Cancel
    </button>
  );
}

CancelBtn.defaultProps = {
  full: false,
};

CancelBtn.propTypes = {
  full: PropTypes.bool,
};
