import styled from "styled-components";

import Tag from "./Tag";

import getProductCategories from "../lib/getProductCategories";
import data from "../lib/data.json";

const FilterTagsStyles = styled.div`
  background: var(--white);
  border-radius: 0.625rem;

  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;

  padding: 1.5rem;
`;

export default function FilterTags() {
  // TODO: remove reference to data.json and switch to graphQL query
  const { productRequests } = data;
  const allCategories = getProductCategories(productRequests);

  const renderedTags = allCategories.map((category, index) => {
    return <Tag key={index} category={category} />;
  });
  return <FilterTagsStyles>{renderedTags}</FilterTagsStyles>;
}
