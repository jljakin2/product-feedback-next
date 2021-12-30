// third-party
import PropTypes from "prop-types";

export default function ArrowLeft({ light }) {
  return (
    <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 9L2 5l4-4"
        stroke={light ? "var(--white)" : "#4661E6"}
        strokeWidth="2"
        fill="none"
        fillRule="evenodd"
      />
    </svg>
  );
}

ArrowLeft.defaultProps = {
  light: false,
};

ArrowLeft.propTypes = {
  light: PropTypes.bool,
};
