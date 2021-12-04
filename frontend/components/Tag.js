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

  width: fit-content;
  padding: 0.5rem 1rem;
`;

const Tag = ({ category }) => {
  return <TagStyles>{capitalize(category)}</TagStyles>;
};

export default Tag;
