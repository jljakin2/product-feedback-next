import styled from "styled-components";

import ArrowDown from "../Icons/ArrowDown";

const BtnStyles = styled.button`
  background: transparent;
  color: var(--white);
  font-size: 1rem;

  display: flex;
  align-items: center;
`;

export default function FilterBtn() {
  return (
    <BtnStyles>
      <p className="body-1">Most Upvotes</p>
      <ArrowDown color="#fff" />
    </BtnStyles>
  );
}
