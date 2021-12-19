import PropTypes from "prop-types";
import styled from "styled-components";

import capitalize from "../lib/capitalize";

const TagStyles = styled.div`
  background: var(--grey);
  border-radius: 0.625rem;
  border: none;
  font-family: inherit;
  font-weight: 600;
  font-size: 0.8125rem;
  color: var(--blue);
  cursor: pointer;

  width: fit-content;
  padding: 0.5rem 1rem;

  &:hover {
    background: ${({ isClickable }) =>
      isClickable ? "var(--greyBlueLight2)" : "var(--grey)"};
  }

  &.active {
    background: var(--purple);
    color: var(--white);
  }
`;

const Tag = ({ category, isClickable }) => {
  return (
    <TagStyles isClickable={isClickable}>{capitalize(category)}</TagStyles>
  );
};

export default Tag;

Tag.defaultProps = {
  category: "",
  isClickable: false,
};

Tag.propTypes = {
  category: PropTypes.string,
  isClickable: PropTypes.bool,
};
