import styled from "styled-components";

import Tag from "./Tag";

import getProductCategories from "../lib/getProductCategories";

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
  const allCategories = getProductCategories(productRequests);

  const renderedTags = allCategories.map((category, index) => {
    // !TODO: add an "active" prop that checks if the filter the user has selected is equal to the filter category that is being rendered
    return <Tag key={index} category={category} isClickable />;
  });
  return <TagMenuStyles>{renderedTags}</TagMenuStyles>;
}
