// third-party
import styled from "styled-components";
import PropTypes from "prop-types";

// helpers
import capitalize from "../lib/capitalize";
import { useSortFilter } from "../lib/hooks/context/sortFilter";

// ===== STYLING =====
const TagStyles = styled.div`
  background: ${({ active }) => (active ? "var(--blue)" : "var(--grey)")};
  border-radius: 0.625rem;
  border: none;
  font-family: inherit;
  font-weight: 600;
  font-size: 0.8125rem;
  color: ${({ active }) => (active ? "var(--white)" : "var(--blue)")};
  cursor: ${({ active }) => (active ? "default" : "pointer")};

  width: fit-content;
  padding: 0.5rem 1rem;

  &:hover {
    background: ${({ isClickable, active }) =>
      active
        ? "var(--blue)"
        : isClickable
        ? "var(--greyBlueLight2)"
        : "var(--grey)"};
  }
`;
// ===== END OF STYLING =====

const Tag = ({ category, isClickable, active }) => {
  const { setTag } = useSortFilter();

  return (
    <TagStyles
      onClick={() => setTag(category)}
      active={active}
      isClickable={isClickable}>
      {capitalize(category)}
    </TagStyles>
  );
};

export default Tag;

Tag.defaultProps = {
  category: "",
  isClickable: false,
  active: false,
};

Tag.propTypes = {
  category: PropTypes.string, // name of the tag
  isClickable: PropTypes.bool, // is the tag clickable or not?
  active: PropTypes.bool, // is the tag active? used for the TagMenu component
};
