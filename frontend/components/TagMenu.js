// third-party
import styled from "styled-components";

// components
import Tag from "./Tag";

// helpers
import { categoryOptions } from "../lib/config";
import { useSortFilter } from "../lib/hooks/context/sortFilter";

// ===== STYLING =====
const TagMenuStyles = styled.div`
  background: var(--white);
  border-radius: 0.625rem;

  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;

  padding: 1.5rem;
`;
// ===== END OF STYLING =====

export default function TagMenu() {
  const { tag } = useSortFilter(); // context api state that supplies which tag is selected

  // MAP TAGS
  const renderedTags = categoryOptions.map((category, index) => {
    return (
      <Tag
        key={index}
        category={category}
        active={category === tag} // is the supplied category the same as the tag that is selected from the context api?
        isClickable
      />
    );
  });
  return <TagMenuStyles>{renderedTags}</TagMenuStyles>;
}
