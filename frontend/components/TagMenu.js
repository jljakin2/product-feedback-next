import styled from "styled-components";

import Tag from "./Tag";

import { categoryOptions } from "../lib/config";
import { useSortFilter } from "../lib/hooks/context/sortFilter";

const TagMenuStyles = styled.div`
  background: var(--white);
  border-radius: 0.625rem;

  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;

  padding: 1.5rem;
`;

export default function TagMenu({ productRequests }) {
  // const allCategories = getProductCategories(productRequests);

  const { tag } = useSortFilter();

  const renderedTags = categoryOptions.map((category, index) => {
    return (
      <Tag
        key={index}
        category={category}
        active={category === tag}
        isClickable
      />
    );
  });
  return <TagMenuStyles>{renderedTags}</TagMenuStyles>;
}
